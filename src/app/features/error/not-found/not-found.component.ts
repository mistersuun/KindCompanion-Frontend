import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="error-page">
      <div class="container">
        <div class="error-content">
          <div class="error-icon">
            <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="var(--color-beige-200)" opacity="0.3" />
              <path d="M16 8.5c-3.5 0-6.5 3-6.5 6.5 0 4.5 6.5 8.5 6.5 8.5s6.5-4 6.5-8.5c0-3.5-3-6.5-6.5-6.5z"
                    fill="var(--color-primary)" opacity="0.5"/>
              <circle cx="16" cy="15" r="2.5" fill="var(--color-accent)" opacity="0.7" />
              <!-- Question mark overlay -->
              <text x="16" y="22" text-anchor="middle" fill="var(--color-text-primary)"
                    font-size="12" font-weight="bold" font-family="var(--font-family-primary)">?</text>
            </svg>
          </div>

          <div class="error-details">
            <h1 class="error-code">404</h1>
            <h2 class="error-title">{{ 'error.404.title' | translate }}</h2>
            <p class="error-description">{{ 'error.404.description' | translate }}</p>

            <div class="error-suggestions">
              <h3>{{ 'error.suggestions.title' | translate }}</h3>
              <div class="suggestion-links">
                <a href="/" class="suggestion-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                  </svg>
                  {{ 'error.link.home' | translate }}
                </a>

                <a href="/services" class="suggestion-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM6.5 5A1.5 1.5 0 0 1 8 3.5a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 6.5 5zM8 7.5a3.5 3.5 0 0 1 3.5 3.5c0 .5-.5 1-1 1h-5c-.5 0-1-.5-1-1A3.5 3.5 0 0 1 8 7.5z"/>
                  </svg>
                  {{ 'error.link.services' | translate }}
                </a>

                <a href="/contact" class="suggestion-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  {{ 'error.link.contact' | translate }}
                </a>
              </div>
            </div>

            <div class="error-actions">
              <button (click)="goBack()" class="btn btn-secondary">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                {{ 'error.action.back' | translate }}
              </button>

              <a href="/" class="btn btn-primary">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
                {{ 'error.action.home' | translate }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .error-page {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-8) 0;
      background: var(--color-background);
    }

    .error-content {
      text-align: center;
      max-width: 600px;
      padding: var(--spacing-10);
    }

    .error-icon {
      margin-bottom: var(--spacing-8);
      opacity: 0.8;
    }

    .error-code {
      font-size: 6rem;
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
      margin: 0 0 var(--spacing-4) 0;
      line-height: 1;
      text-shadow: 2px 2px 4px rgba(212, 165, 116, 0.2);
    }

    .error-title {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-6) 0;
    }

    .error-description {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-10);
    }

    .error-suggestions {
      background: var(--color-beige-50);
      border: 1px solid var(--color-beige-200);
      border-radius: var(--radius-xl);
      padding: var(--spacing-8);
      margin-bottom: var(--spacing-10);
    }

    .error-suggestions h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-6) 0;
    }

    .suggestion-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: var(--spacing-4);
    }

    .suggestion-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-3) var(--spacing-4);
      background: var(--color-surface);
      border: 1px solid var(--color-beige-300);
      border-radius: var(--radius-lg);
      color: var(--color-text-primary);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
      transition: all var(--transition-normal);
    }

    .suggestion-link:hover {
      background: var(--color-primary);
      border-color: var(--color-primary);
      color: white;
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .error-actions {
      display: flex;
      gap: var(--spacing-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-4) var(--spacing-8);
      border: none;
      border-radius: var(--radius-full);
      font-family: var(--font-family-primary);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      text-decoration: none;
      cursor: pointer;
      transition: all var(--transition-normal);
      min-height: 48px;
    }

    .btn-primary {
      background: var(--color-primary);
      color: white;
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover {
      background: var(--color-primary-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .btn-secondary {
      background: var(--color-surface);
      color: var(--color-text-primary);
      border: 2px solid var(--color-beige-300);
    }

    .btn-secondary:hover {
      background: var(--color-beige-100);
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    @media (max-width: 768px) {
      .error-content {
        padding: var(--spacing-6);
      }

      .error-code {
        font-size: 4rem;
      }

      .error-title {
        font-size: var(--font-size-2xl);
      }

      .error-description {
        font-size: var(--font-size-base);
      }

      .suggestion-links {
        grid-template-columns: 1fr;
      }

      .error-actions {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 280px;
        justify-content: center;
      }
    }
  `]
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Optional: Track 404 errors for analytics
  }

  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}