import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-family-dashboard',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'Loading Family Dashboard...'"
      [subMessage]="'Accessing care updates and service information'"
      [fullscreen]="true">
    </app-loading>

    <div class="family-dashboard" *ngIf="!isLoading">
      <div class="container">
        <h1 class="page-title">Family Dashboard</h1>
        <div class="content-placeholder">
          <p>Family dashboard content coming soon...</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .family-dashboard { padding: 2rem 0; }
    .page-title { font-size: 2rem; font-weight: 700; margin-bottom: 2rem; }
    .content-placeholder { background: #f8f9fa; padding: 4rem 2rem; border-radius: 12px; text-align: center; color: #666; font-style: italic; }
  `]
})
export class FamilyDashboardComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  }
}