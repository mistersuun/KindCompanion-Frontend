import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-family-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  template: `
    <div class="family-layout">
      <!-- Family Portal Header -->
      <header class="header" role="banner">
        <div class="container">
          <div class="header-content">
            <div class="brand">
              <a href="/family/dashboard" class="brand-link">
                <span class="brand-text">{{ 'brand.name' | translate }}</span>
                <span class="portal-label">Family Portal</span>
              </a>
            </div>

            <nav class="main-nav" role="navigation" aria-label="Family portal navigation">
              <a href="/family/dashboard" class="nav-link">Dashboard</a>
              <a href="/family/reports" class="nav-link">Progress Reports</a>
              <a href="/family/messages" class="nav-link">Messages</a>
              <a href="/family/billing" class="nav-link">Billing</a>
            </nav>

            <div class="user-menu">
              <button class="user-button" aria-label="User menu">
                <span class="user-name">John Doe</span>
                <span class="user-role">Family Member</span>
              </button>
              <a href="/auth/logout" class="logout-link">Sign Out</a>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content" role="main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .family-layout {
      min-height: 100vh;
      background: #f8f9fa;
    }

    .header {
      background: white;
      border-bottom: 1px solid #e0e0e0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }

    .brand-link {
      text-decoration: none;
      color: #1976d2;
    }

    .brand-text {
      font-size: 1.5rem;
      font-weight: 700;
      display: block;
    }

    .portal-label {
      font-size: 0.9rem;
      color: #666;
      font-weight: normal;
    }

    .main-nav {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: background-color 0.2s;
      min-height: 48px;
      display: flex;
      align-items: center;
    }

    .nav-link:hover,
    .nav-link:focus {
      background: #f0f7ff;
      color: #1976d2;
    }

    .user-menu {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .user-button {
      background: none;
      border: none;
      cursor: pointer;
      text-align: right;
      min-height: 48px;
    }

    .user-name {
      display: block;
      font-weight: 600;
      font-size: 1rem;
    }

    .user-role {
      display: block;
      font-size: 0.85rem;
      color: #666;
    }

    .logout-link {
      color: #1976d2;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 1px solid #1976d2;
      border-radius: 6px;
      min-height: 48px;
      display: flex;
      align-items: center;
    }

    .logout-link:hover,
    .logout-link:focus {
      background: #1976d2;
      color: white;
    }

    .main-content {
      padding: 2rem 0;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 1rem;
      }

      .main-nav {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }

      .user-menu {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FamilyLayoutComponent {
}