import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem { label: string; icon: string; route: string; }

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input()  collapsed = false;
  @Input()  mobileOpen = false;
  @Output() collapsedChange = new EventEmitter<boolean>();
  @Output() mobileOpenChange = new EventEmitter<boolean>();

  navItems: NavItem[] = [
    { label: 'Dashboard',        icon: 'dashboard',       route: '/dashboard' },
    { label: 'Banks',            icon: 'account_balance', route: '/banks' },
    { label: 'Master Workflows', icon: 'account_tree',    route: '/master-workflows' },
    { label: 'Workflows',        icon: 'schema',          route: '/workflows' },
    { label: 'Workflow Forms',   icon: 'dynamic_form',    route: '/workflow-forms' },
    { label: 'Agents',           icon: 'people',          route: '/agents' },
    { label: 'Agent Logs',       icon: 'history',         route: '/agent-logs' },
    { label: 'Transactions',     icon: 'swap_horiz',      route: '/transactions' },
    { label: 'JSON Debugger',    icon: 'code',            route: '/json-debugger' },
    { label: 'Update Pushes',    icon: 'system_update',   route: '/update-pushes' },
    { label: 'Notifications',    icon: 'notifications',   route: '/notifications' },
    { label: 'Device Locks',     icon: 'phonelink_lock',  route: '/device-locks' },
  ];

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  closeMobileSidebar() {
    this.mobileOpen = false;
    this.mobileOpenChange.emit(false);
  }

  @HostListener('click', ['$event'])
  onNavClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('.nav-item') && window.innerWidth <= 768) {
      this.closeMobileSidebar();
    }
  }
}