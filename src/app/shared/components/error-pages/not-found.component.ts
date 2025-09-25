import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="error-page">
      <div class="container">
        <div class="error-content">
          <h1 class="error-code">404</h1>
          <h2 class="error-title">Page Not Found</h2>
          <p class="error-description">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div class="error-actions">
            <a href="/" class="btn btn-primary btn-elderly">Return Home</a>
            <a href="/contact" class="btn btn-outline btn-elderly">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .error-page {
      min-height: 60vh;
      display: flex;
      align-items: center;
      padding: 4rem 0;
      text-align: center;
    }

    .error-code {
      font-size: 8rem;
      font-weight: 900;
      color: #e0e0e0;
      margin: 0;
      line-height: 1;
    }

    .error-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #333;
      margin: 1rem 0;
    }

    .error-description {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 2rem;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .error-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      min-height: 56px;
      min-width: 160px;
    }

    .btn-primary {
      background: #1976d2;
      color: white;
    }

    .btn-primary:hover,
    .btn-primary:focus {
      background: #1565c0;
      transform: translateY(-2px);
    }

    .btn-outline {
      background: transparent;
      border: 2px solid #1976d2;
      color: #1976d2;
    }

    .btn-outline:hover,
    .btn-outline:focus {
      background: #1976d2;
      color: white;
    }
  `]
})
export class NotFoundComponent {
}