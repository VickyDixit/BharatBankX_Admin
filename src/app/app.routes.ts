import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'banks',            loadComponent: () => import('./features/banks/banks.component').then(m => m.BanksComponent) },
      { path: 'master-workflows', loadComponent: () => import('./features/master-workflows/master-workflows.component').then(m => m.MasterWorkflowsComponent) },
      { path: 'workflows',        loadComponent: () => import('./features/workflows/workflows.component').then(m => m.WorkflowsComponent) },
      { path: 'workflow-forms',   loadComponent: () => import('./features/workflow-forms/workflow-forms.component').then(m => m.WorkflowFormsComponent) },
      { path: 'agents',           loadComponent: () => import('./features/agents/agents.component').then(m => m.AgentsComponent) },
      { path: 'agent-logs',       loadComponent: () => import('./features/agent-logs/agent-logs.component').then(m => m.AgentLogsComponent) },
      { path: 'transactions',     loadComponent: () => import('./features/workflow-transactions/workflow-transactions.component').then(m => m.WorkflowTransactionsComponent) },
      { path: 'json-debugger',    loadComponent: () => import('./features/json-debugger/json-debugger.component').then(m => m.JsonDebuggerComponent) },
      { path: 'update-pushes',    loadComponent: () => import('./features/update-pushes/update-pushes.component').then(m => m.UpdatePushesComponent) },
      { path: 'notifications',    loadComponent: () => import('./features/notifications/notifications.component').then(m => m.NotificationsComponent) },
      { path: 'device-locks',     loadComponent: () => import('./features/device-locks/device-locks.component').then(m => m.DeviceLocksComponent) },
    ]
  },
  { path: '**', redirectTo: 'login' }
];