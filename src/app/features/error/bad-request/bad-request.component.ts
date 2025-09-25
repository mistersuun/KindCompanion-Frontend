import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bad-request',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="error-page">
      <div class="container">
        <div class="error-content">
          <div class="error-icon">
            <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="var(--color-accent)" opacity="0.2" />
              <path d="M16 8.5c-3.5 0-6.5 3-6.5 6.5 0 4.5 6.5 8.5 6.5 8.5s6.5-4 6.5-8.5c0-3.5-3-6.5-6.5-6.5z"
                    fill="var(--color-accent)" opacity="0.6"/>
              <circle cx="16" cy="15" r="2.5" fill="var(--color-surface)" />
              <!-- X mark -->
              <g transform="translate(13, 12)">
                <path d="M1 1l4 4m0-4L1 5" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
              </g>
            </svg>
          </div>

          <div class="error-details">
            <h1 class="error-code">400</h1>
            <h2 class="error-title">{{ 'error.400.title' | translate }}</h2>
            <p class="error-description">{{ 'error.400.description' | translate }}</p>

            <div class="request-help">
              <div class="help-grid">
                <div class="help-item">
                  <div class="help-icon">
                    <svg width="24" height="24" fill="var(--color-primary)" viewBox="0 0 16 16">
                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                      <path d="M4.893 1.447a1 1 0 0 1 .992 0l6.5 3.5A1 1 0 0 1 13 5.75v4.5a1 1 0 0 1-.615.823l-6.5 3.5a1 1 0 0 1-.99-.823V5.75a1 1 0 0 1 .615-.823zm1 2.303v8.5l5.5-2.96V6.75L5.893 3.75zM8 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                  </div>
                  <h3>{{ 'error.help.form-issues' | translate }}</h3>
                  <p>{{ 'error.help.form-description' | translate }}</p>
                </div>

                <div class="help-item">
                  <div class="help-icon">
                    <svg width="24" height="24" fill="var(--color-secondary)" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                  </div>
                  <h3>{{ 'error.help.browser-issues' | translate }}</h3>
                  <p>{{ 'error.help.browser-description' | translate }}</p>
                </div>

                <div class="help-item">
                  <div class="help-icon">
                    <svg width="24" height="24" fill="var(--color-accent)" viewBox="0 0 16 16">
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                    </svg>
                  </div>
                  <h3>{{ 'error.help.connection' | translate }}</h3>
                  <p>{{ 'error.help.connection-description' | translate }}</p>
                </div>
              </div>
            </div>

            <div class="common-solutions">
              <h3>{{ 'error.solutions.title' | translate }}</h3>
              <div class="solutions-list">
                <div class="solution-item">
                  <div class="solution-number">1</div>
                  <div class="solution-content">
                    <h4>{{ 'error.solution.refresh' | translate }}</h4>
                    <p>{{ 'error.solution.refresh-description' | translate }}</p>
                  </div>
                </div>

                <div class="solution-item">
                  <div class="solution-number">2</div>
                  <div class="solution-content">
                    <h4>{{ 'error.solution.forms' | translate }}</h4>
                    <p>{{ 'error.solution.forms-description' | translate }}</p>
                  </div>
                </div>

                <div class="solution-item">
                  <div class="solution-number">3</div>
                  <div class="solution-content">
                    <h4>{{ 'error.solution.contact' | translate }}</h4>
                    <p>{{ 'error.solution.contact-description' | translate }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="error-actions">
              <button (click)="refreshPage()" class="btn btn-primary">{{ 'error.action.refresh' | translate }}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
                {{ 'error.action.refresh' | translate }}
              </button>

              <button (click)="goBack()" class="btn btn-secondary">{{ 'error.action.back' | translate }}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                {{ 'error.action.back' | translate }}
              </button>

              <a href="/contact" class="btn btn-ghost">{{ 'error.action.contact' | translate }}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
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
      max-width: 800px;
      padding: var(--spacing-10);
    }

    .error-icon {
      margin-bottom: var(--spacing-8);
      opacity: 0.9;
    }

    .error-code {
      font-size: 6rem;
      font-weight: var(--font-weight-bold);
      color: var(--color-accent);
      margin: 0 0 var(--spacing-4) 0;
      line-height: 1;
      text-shadow: 2px 2px 4px rgba(78, 205, 196, 0.2);
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

    .request-help {
      margin-bottom: var(--spacing-10);
    }

    .help-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-6);
      margin-bottom: var(--spacing-8);
    }

    .help-item {
      background: var(--color-surface);
      border: 1px solid var(--color-beige-200);
      border-radius: var(--radius-xl);
      padding: var(--spacing-6);
      text-align: center;
      box-shadow: var(--shadow-sm);
    }

    .help-item .help-icon {
      margin-bottom: var(--spacing-4);
    }

    .help-item h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-3) 0;
    }

    .help-item p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
      font-size: var(--font-size-sm);
    }

    .common-solutions {
      background: var(--color-beige-50);
      border: 1px solid var(--color-beige-200);
      border-radius: var(--radius-xl);
      padding: var(--spacing-8);
      margin-bottom: var(--spacing-10);
      text-align: left;
    }

    .common-solutions h3 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-6) 0;
      text-align: center;
    }

    .solutions-list {
      display: grid;
      gap: var(--spacing-6);
    }

    .solution-item {
      display: flex;
      gap: var(--spacing-4);
      align-items: flex-start;
    }

    .solution-number {
      background: var(--color-primary);
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-sm);
      flex-shrink: 0;
    }

    .solution-content h4 {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-2) 0;
    }

    .solution-content p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
      font-size: var(--font-size-sm);
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
      background: var(--color-accent);
      color: white;
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover {
      background: var(--color-accent-dark);
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

    .btn-ghost {
      background: transparent;
      color: var(--color-text-secondary);
      border: 2px solid var(--color-beige-300);
    }

    .btn-ghost:hover {
      background: var(--color-beige-100);
      border-color: var(--color-accent);
      color: var(--color-accent);
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

      .help-grid {
        grid-template-columns: 1fr;
      }

      .solution-item {
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
export class BadRequestComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Optional: Track bad request errors
  }

  refreshPage() {
    window.location.reload();
  }

  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}