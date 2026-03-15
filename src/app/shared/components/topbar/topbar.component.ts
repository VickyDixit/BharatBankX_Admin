import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AgentService } from '../../../api/services/agent.service';
import { DynamicFormModalComponent } from '../../dynamic-form-modal/dynamic-form-modal.component';
import { FieldConfig } from '../../../field-config-file/field-config.model';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, DynamicFormModalComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();

  userName   = 'Admin';
  userRole   = 'SuperAdmin';
  userEmail  = '';
  userMobile = '';
  userId     = '';
  userPhoto  = '';

  showDropdown      = false;
  showLogoutConfirm = false;
  showEditModal     = false;
  saving            = false;

  editForm: any = {};

  profileFields: FieldConfig[] = [
  { key: 'fullName',    label: 'Full Name',    type: 'text', required: true, placeholder: 'Enter full name' },
  { key: 'mobile',      label: 'Mobile',       type: 'text', required: true, placeholder: '+91 XXXXX XXXXX' },
  { key: 'oldPassword', label: 'Old Password', type: 'password', placeholder: 'Enter current password' },
  { key: 'newPassword', label: 'New Password', type: 'password', placeholder: 'Enter new password' },
];

  constructor(
    private router:       Router,
    private agentService: AgentService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadUserFromStorage();
  }

  loadUserFromStorage(): void {
    const raw = localStorage.getItem('bbx_user');
    if (raw) {
      const user      = JSON.parse(raw);
      this.userName   = user.name     || user.username || 'Admin';
      this.userRole   = user.role     || 'SuperAdmin';
      this.userEmail  = user.email    || '';
      this.userMobile = user.mobile   || '';
      this.userId     = user.id       || '';
      this.userPhoto  = user.photo    || '';
    }
  }

  toggleDropdown(): void {
    this.showDropdown      = !this.showDropdown;
    this.showLogoutConfirm = false;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.avatar-section')) {
      this.showDropdown      = false;
      this.showLogoutConfirm = false;
    }
  }

  // Opens confirm box
  askLogout(): void {
    this.showDropdown      = false;
    this.showLogoutConfirm = true;
  }

  cancelLogout(): void {
    this.showLogoutConfirm = false;
  }

  confirmLogout(): void {
    localStorage.removeItem('bbx_token');
    localStorage.removeItem('bbx_user');
    localStorage.removeItem('bbx_role');
    sessionStorage.clear();
    this.toast.success('Logged out successfully!');
    this.closeEditModal();
    //  setTimeout(() => this.router.navigate(['/login']), 1000);
    this.router.navigate(['/login']);
  }

  openEditModal(): void {
    this.showDropdown = false;
    this.editForm = {
      fullName: this.userName,
      email:    this.userEmail,
      mobile:   this.userMobile,
      password: ''
    };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.saving        = false;
  }

saveProfile(data: any): void {
  this.saving = true;

  // Validate — if one password field filled, both must be filled
  if ((data.oldPassword && !data.newPassword) || 
      (!data.oldPassword && data.newPassword)) {
    this.toast.warning('Fill both password fields');
    this.saving = false;
    return;
  }

  const payload: any = {
    fullName: data.fullName,
    mobile:   data.mobile,
  };

  if (data.oldPassword?.trim() && data.newPassword?.trim()) {
    payload.oldPassword = data.oldPassword;
    payload.newPassword = data.newPassword;
  }

  this.agentService.agentUpdateProfile$Json$Response({
    id:   Number(this.userId),
    body: payload
  }).subscribe({
    next: () => {
      this.toast.success('Profile updated successfully!');
      const raw  = localStorage.getItem('bbx_user');
      const user = raw ? JSON.parse(raw) : {};
      localStorage.setItem('bbx_user', JSON.stringify({
        ...user,
        name:   data.fullName,
        mobile: data.mobile
      }));
      this.loadUserFromStorage();
      this.closeEditModal();
    },
    error: (err) => {
      this.saving = false;
      this.toast.error('Old password is incorrect');
    }
  });
}
}