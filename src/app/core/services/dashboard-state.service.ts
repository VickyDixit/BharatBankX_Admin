// dashboard-state.service.ts
// Place in: src/app/core/services/dashboard-state.service.ts

import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AgentLogsService,
  AgentService,
  BankService,
  DeviceService,
  NotificationsService,
  UpdatePushesService,
  WorkflowService,
  WorkflowTransactionsService
} from '../../api';

export interface DashboardStats {
  banks:         number;
  agents:        number;
  workflows:     number;
  transactions:  number;
  notifications: number;
  devices:       number;
  logs:          number;
  updates:       number;
}

const CACHE_KEY = 'bbx_dashboard_stats';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

@Injectable({ providedIn: 'root' })
export class DashboardStateService {

  constructor(
    private bankService:         BankService,
    private agentService:        AgentService,
    private workflowService:     WorkflowService,
    private transactionService:  WorkflowTransactionsService,
    private notificationService: NotificationsService,
    private deviceService:       DeviceService,
    private agentLogService:     AgentLogsService,
    private updatePushService:   UpdatePushesService
  ) {}

  getStats(): Observable<DashboardStats> {
    // Try sessionStorage first — survives hard refresh within same tab session
    const cached = this.getFromStorage();
    if (cached) {
      console.log('[DashboardState] Returning cached stats ✓', cached);
      return of(cached);
    }

    console.log('[DashboardState] Cache miss — loading from API');
    return forkJoin({
      banks:         this.bankService.bankGetAllBanks$Json$Response(),
      agents:        this.agentService.agentGetAllAgents$Json$Response(),
      workflows:     this.workflowService.workflowGetAllWorkflows$Json$Response(),
      transactions:  this.transactionService.workflowTransactionsGetAll$Json$Response(),
      notifications: this.notificationService.notificationsGetAll$Json$Response(),
      devices:       this.deviceService.deviceGetAllDevices$Json$Response(),
      logs:          this.agentLogService.agentLogsGetAllLogs$Json$Response(),
      updates:       this.updatePushService.updatePushesGetAll$Json$Response(),
    }).pipe(
      map(data => {
        const stats: DashboardStats = {
          banks:         data.banks.body?.data?.length         || 0,
          agents:        data.agents.body?.data?.length        || 0,
          workflows:     data.workflows.body?.data?.length     || 0,
          transactions:  data.transactions.body?.data?.length  || 0,
          notifications: data.notifications.body?.data?.length || 0,
          devices:       data.devices.body?.data?.length       || 0,
          logs:          data.logs.body?.data?.length          || 0,
          updates:       data.updates.body?.data?.length       || 0,
        };
        this.saveToStorage(stats);
        console.log('[DashboardState] Stats cached to sessionStorage ✓', stats);
        return stats;
      })
    );
  }

  // Call after any CREATE / UPDATE / DELETE
  invalidate(): void {
    sessionStorage.removeItem(CACHE_KEY);
    console.log('[DashboardState] Cache cleared');
  }

  private saveToStorage(stats: DashboardStats): void {
    const entry = { stats, timestamp: Date.now() };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  }

  private getFromStorage(): DashboardStats | null {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;

      const entry = JSON.parse(raw);
      const isExpired = (Date.now() - entry.timestamp) > CACHE_TTL;
      if (isExpired) {
        sessionStorage.removeItem(CACHE_KEY);
        return null;
      }
      return entry.stats as DashboardStats;
    } catch {
      return null;
    }
  }
}