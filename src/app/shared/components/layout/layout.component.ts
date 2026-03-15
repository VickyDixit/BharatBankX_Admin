import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { ToastContainerComponent } from '../toast-container/toast-container.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, TopbarComponent, ToastContainerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarCollapsed = false;
  mobileOpen = false;

  constructor(private router: Router) {
    // Close sidebar automatically on every navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.mobileOpen = false;
      }
    });
  }
}