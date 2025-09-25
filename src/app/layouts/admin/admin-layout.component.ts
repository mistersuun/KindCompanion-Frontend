import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  template: `
    <div class="admin-layout">
      <!-- Admin Header -->
      <header class="header" role="banner">
        <div class="container">
          <div class="header-content">
            <div class="brand">
              <a href="/admin/dashboard" class="brand-link">
                <span class="brand-text">{{ 'brand.name' | translate }}</span>
                <span class="admin-label">Admin Panel</span>
              </a>
            </div>

            <div class="user-info">
              <span class="user-name">Admin User</span>
              <a href="/auth/logout" class="logout-btn">Sign Out</a>
            </div>
          </div>
        </div>
      </header>

      <div class="admin-container">
        <!-- Sidebar Navigation -->
        <aside class="sidebar" role="navigation" aria-label="Admin navigation">
          <nav class="sidebar-nav">
            <a href="/admin/dashboard" class="nav-item">
              <span class="nav-text">Dashboard</span>
            </a>
            <a href="/admin/analytics" class="nav-item">
              <span class="nav-text">Analytics</span>
            </a>
            <a href="/admin/clients" class="nav-item">
              <span class="nav-text">Client Management</span>
            </a>
            <a href="/admin/companions" class="nav-item">
              <span class="nav-text">Companion Management</span>
            </a>
            <a href="/admin/scheduling" class="nav-item">
              <span class="nav-text">Scheduling</span>
            </a>
            <a href="/admin/communications" class="nav-item">
              <span class="nav-text">Communications</span>
            </a>
            <a href="/admin/reports" class="nav-item">
              <span class="nav-text">Reports</span>
            </a>
            <a href="/admin/settings" class="nav-item">
              <span class="nav-text">Settings</span>
            </a>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content" role="main">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .admin-layout {
      min-height: 100vh;
      background: #f5f6fa;
    }

    .header {
      background: #2c3e50;
      color: white;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }

    .brand-link {
      text-decoration: none;
      color: white;
    }

    .brand-text {
      font-size: 1.5rem;
      font-weight: 700;
      display: block;
    }

    .admin-label {
      font-size: 0.9rem;
      color: #bdc3c7;
      font-weight: normal;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .user-name {
      font-weight: 500;
    }

    .logout-btn {
      color: #e74c3c;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 1px solid #e74c3c;
      border-radius: 4px;
      transition: all 0.2s;
      min-height: 44px;
      display: flex;
      align-items: center;
    }

    .logout-btn:hover,
    .logout-btn:focus {
      background: #e74c3c;
      color: white;
    }

    .admin-container {
      display: flex;
      min-height: calc(100vh - 80px);
    }

    .sidebar {
      width: 280px;
      background: white;
      border-right: 1px solid #e0e0e0;
      box-shadow: 2px 0 4px rgba(0,0,0,0.1);
    }

    .sidebar-nav {
      padding: 1rem 0;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      color: #333;
      text-decoration: none;
      border-bottom: 1px solid #f0f0f0;
      transition: background-color 0.2s;
      min-height: 56px;
    }

    .nav-item:hover,
    .nav-item:focus {
      background: #f8f9fa;
      color: #1976d2;
    }

    .nav-item.active {
      background: #e3f2fd;
      color: #1976d2;
      border-right: 4px solid #1976d2;
    }

    .nav-text {
      font-weight: 500;
      font-size: 1rem;
    }

    .main-content {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
    }

    @media (max-width: 768px) {
      .admin-container {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
        order: 2;
      }

      .sidebar-nav {
        display: flex;
        overflow-x: auto;
        padding: 0;
      }

      .nav-item {
        flex: 0 0 auto;
        border-bottom: none;
        border-right: 1px solid #f0f0f0;
        white-space: nowrap;
      }

      .main-content {
        order: 1;
        padding: 1rem;
      }

      .header-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class AdminLayoutComponent {
}