import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-server-error',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="error-page">
      <div class="container">
        <div class="error-content">
          <div class="error-icon">
            <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="var(--color-warning)" opacity="0.2" />
              <path d="M16 8.5c-3.5 0-6.5 3-6.5 6.5 0 4.5 6.5 8.5 6.5 8.5s6.5-4 6.5-8.5c0-3.5-3-6.5-6.5-6.5z"
                    fill="var(--color-warning)" opacity="0.6"/>
              <circle cx="16" cy="15" r="2.5" fill="var(--color-surface)" />
              <!-- Warning exclamation -->
              <text x="16" y="18" text-anchor="middle" fill="var(--color-warning)"
                    font-size="10" font-weight="bold" font-family="var(--font-family-primary)">!</text>
            </svg>
          </div>

          <div class="error-details">
            <h1 class="error-code">500</h1>
            <h2 class="error-title">{{ 'error.500.title' | translate }}</h2>
            <p class="error-description">{{ 'error.500.description' | translate }}</p>

            <div class="error-info">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="24" height="24" fill="var(--color-accent)" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c-.064-.293-.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>{{ 'error.info.what-happened' | translate }}</h3>
                  <p>{{ 'error.info.server-issue' | translate }}</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <svg width="24" height="24" fill="var(--color-secondary)" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>{{ 'error.info.what-to-do' | translate }}</h3>
                  <ul>
                    <li>{{ 'error.info.try-refresh' | translate }}</li>
                    <li>{{ 'error.info.wait-moment' | translate }}</li>
                    <li>{{ 'error.info.contact-support' | translate }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="error-actions">
              <button (click)="refreshPage()" class="btn btn-secondary">{{ 'error.action.refresh' | translate }}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
                {{ 'error.action.refresh' | translate }}
              </button>

              <a href="/" class="btn btn-primary">{{ 'error.action.home' | translate }}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
                {{ 'error.action.home' | translate }}
              </a>

              <a href="/contact" class="btn btn-ghost">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                {{ 'error.action.contact' | translate }}
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
      max-width: 700px;
      padding: var(--spacing-10);
    }

    .error-icon {
      margin-bottom: var(--spacing-8);
      opacity: 0.9;
    }

    .error-code {
      font-size: 6rem;
      font-weight: var(--font-weight-bold);
      color: var(--color-warning);
      margin: 0 0 var(--spacing-4) 0;
      line-height: 1;
      text-shadow: 2px 2px 4px rgba(255, 193, 7, 0.2);
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

    .error-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-6);
      margin-bottom: var(--spacing-10);
      text-align: left;
    }

    .info-card {
      background: var(--color-surface);
      border: 1px solid var(--color-beige-200);
      border-radius: var(--radius-xl);
      padding: var(--spacing-6);
      box-shadow: var(--shadow-sm);
    }

    .info-card .info-icon {
      margin-bottom: var(--spacing-4);
    }

    .info-card h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-3) 0;
    }

    .info-card p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    .info-card ul {
      color: var(--color-text-secondary);
      margin: 0;
      padding-left: var(--spacing-5);
    }

    .info-card li {
      margin-bottom: var(--spacing-2);
      line-height: 1.5;
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
      background: var(--color-warning);
      color: white;
      box-shadow: var(--shadow-md);
    }

    .btn-secondary:hover {
      background: var(--color-warning-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .btn-ghost {
      background: transparent;
      color: var(--color-text-primary);
      border: 2px solid var(--color-beige-300);
    }

    .btn-ghost:hover {
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

      .error-info {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .info-card {
        text-align: left;
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
export class ServerErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Optional: Track server errors for monitoring
  }

  refreshPage() {
    window.location.reload();
  }
}