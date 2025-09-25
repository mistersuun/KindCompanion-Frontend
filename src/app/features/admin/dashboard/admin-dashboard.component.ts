import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'Loading Admin Dashboard...'"
      [subMessage]="'Preparing analytics, reports, and management tools'"
      [fullscreen]="true">
    </app-loading>

    <div class="admin-dashboard" *ngIf="!isLoading">
      <h1 class="page-title">Admin Dashboard</h1>
      <div class="content-placeholder">
        <p>Admin dashboard content coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .admin-dashboard { padding: 2rem 0; }
    .page-title { font-size: 2rem; font-weight: 700; margin-bottom: 2rem; }
    .content-placeholder { background: white; padding: 4rem 2rem; border-radius: 12px; text-align: center; color: #666; font-style: italic; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  `]
})
export class AdminDashboardComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1400);
  }
}