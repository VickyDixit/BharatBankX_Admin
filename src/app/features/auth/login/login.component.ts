import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AgentService, Agent } from '../../../api';  // ← add AgentService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  showPassword = false;
  isLoading    = false;
  errorMessage = '';
  dummyAgent= {} as Agent;

  constructor(
    private fb:           FormBuilder,
    private router:       Router,
    private authService:  AuthService,
    private agentService: AgentService   // ← inject
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  togglePassword(): void { this.showPassword = !this.showPassword; }

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    this.isLoading    = true;
    this.errorMessage = '';

    const { username, password } = this.loginForm.value;

    // Step 1 — Login
    this.authService.authLogin$Json$Response({
      body: { username, password }
    }).subscribe({
      next: (response) => {
        debugger;
        if (response?.body?.token) {

          // Step 2 — Store token
          localStorage.setItem('bbx_token', response.body.token);

          // Step 3 — Fetch full agent details by username
          this.agentService.agentGetByUsername$Json$Response({
            username: username
          }).subscribe({
            next: (agentResponse) => {
              debugger;
              const agent = agentResponse?.body.data ?? this.dummyAgent;

              // Step 4 — Store full user info
              localStorage.setItem('bbx_user', JSON.stringify({
                id:       agent.id,
                username: agent.email,        // email used as username
                name:     agent.fullName,
                email:    agent.email,
                role:     agent.role,
                mobile:   agent.mobile,
                photo:    agent.photo
              }));

              localStorage.setItem('bbx_role', agent.role ?? 'Agent');

              // Step 5 — Navigate to dashboard
              this.router.navigate(['/dashboard']);
            },
            error: () => {
              // Even if agent fetch fails, still go to dashboard
              // token is already saved
              localStorage.setItem('bbx_user', JSON.stringify({
                username: username,
                role: 'Admin'
              }));
              this.router.navigate(['/dashboard']);
            }
          });

        } else {
          this.errorMessage = 'Invalid response from server';
          this.isLoading = false;
        }
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 401) {
          this.errorMessage = 'Invalid username or password';
        } else if (err.status === 0) {
          this.errorMessage = 'Cannot connect to server. Please try again.';
        } else {
          this.errorMessage = err.error?.message || 'Login failed. Please try again.';
        }
      }
    });
  }
}