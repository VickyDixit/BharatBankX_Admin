import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardStateService } from '../../core/services/dashboard-state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  today = new Date();
  isLoading = true;

  constructor(private dashboardState: DashboardStateService) {}

  stats = [
    { label: 'Total Banks',   icon: 'account_balance', color: 'blue',   value: 0 },
    { label: 'Active Agents', icon: 'people',          color: 'green',  value: 0 },
    { label: 'Workflows',     icon: 'schema',          color: 'gold',   value: 0 },
    { label: 'Transactions',  icon: 'swap_horiz',      color: 'purple', value: 0 },
    { label: 'Notifications', icon: 'notifications',   color: 'orange', value: 0 },
    { label: 'Device Locks',  icon: 'phonelink_lock',  color: 'red',    value: 0 },
    { label: 'Agent Logs',    icon: 'history',         color: 'teal',   value: 0 },
    { label: 'Update Pushes', icon: 'system_update',   color: 'indigo', value: 0 },
  ];

  quickLinks = [
    { label: 'Add Bank',     icon: 'account_balance', route: '/banks',          color: 'blue'   },
    { label: 'Add Agent',    icon: 'person_add',      route: '/agents',         color: 'green'  },
    { label: 'Workflows',    icon: 'schema',          route: '/workflows',      color: 'gold'   },
    { label: 'Forms',        icon: 'dynamic_form',    route: '/workflow-forms', color: 'purple' },
    { label: 'Transactions', icon: 'swap_horiz',      route: '/transactions',   color: 'teal'   },
    { label: 'Push Update',  icon: 'system_update',   route: '/update-pushes',  color: 'indigo' },
  ];

  systemInfo = [
    { label: 'System',        value: 'BharatBankX CSP v1.0' },
    { label: 'Database',      value: 'MySQL 8+'              },
    { label: 'API Framework', value: '.NET Core'             },
    { label: 'Frontend',      value: 'Angular 18'            },
  ];

  ngOnInit(): void {
    this.dashboardState.getStats().subscribe({
      next: (stats) => {
        this.stats[0].value = stats.banks;
        this.stats[1].value = stats.agents;
        this.stats[2].value = stats.workflows;
        this.stats[3].value = stats.transactions;
        this.stats[4].value = stats.notifications;
        this.stats[5].value = stats.devices;
        this.stats[6].value = stats.logs;
        this.stats[7].value = stats.updates;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Dashboard load error:', err);
        this.stats.forEach(s => s.value = 0);
        this.isLoading = false;
      }
    });
  }
}