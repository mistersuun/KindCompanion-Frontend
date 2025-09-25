import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'Loading Sign In...'"
      [subMessage]="'Preparing secure login experience'"
      [fullscreen]="true">
    </app-loading>

    <div class="login-page" *ngIf="!isLoading">
      <div class="container">
        <h1 class="page-title">Sign In</h1>
        <div class="content-placeholder">
          <p>Login form coming soon...</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page { padding: 3rem 0; min-height: 60vh; }
    .page-title { font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 2rem; }
    .content-placeholder { background: #f8f9fa; padding: 4rem 2rem; border-radius: 12px; text-align: center; color: #666; font-style: italic; max-width: 400px; margin: 0 auto; }
  `]
})
export class LoginComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  }
}