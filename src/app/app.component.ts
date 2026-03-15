import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTokenExpiryCheck();
  }

  startTokenExpiryCheck(): void {
    setInterval(() => {
      const token = localStorage.getItem('bbx_token');

      // No token = not logged in, skip
      if (!token) return;

      try {
        // Decode JWT payload (middle part)
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiry  = payload.exp * 1000; // JWT exp is in seconds, convert to ms

        if (Date.now() >= expiry) {
          console.log('Token expired — logging out');
          localStorage.removeItem('bbx_token');
          localStorage.removeItem('bbx_user');
          localStorage.removeItem('bbx_role');
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }
      } catch (e) {
        // Token is malformed — clear and redirect
        localStorage.clear();
        this.router.navigate(['/login']);
      }

    }, 30000); // runs every 30 seconds
  }
}


// ## How It Works Together
// ```
// Every 30 seconds — timer checks token expiry
//         ↓
// Token still valid → do nothing, user keeps working ✅
//         ↓
// Token expired → clear localStorage → redirect to /login ✅

// AND

// User makes API call with expired token
//         ↓
// Backend returns 401
//         ↓
// Interceptor catches it → clear localStorage → redirect to /login ✅