import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="error-page">
      <div class="container">
        <div class="error-content">
          <div class="error-icon">
            <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="var(--color-gray-300)" opacity="0.3" />
              <path d="M16 8.5c-3.5 0-6.5 3-6.5 6.5 0 4.5 6.5 8.5 6.5 8.5s6.5-4 6.5-8.5c0-3.5-3-6.5-6.5-6.5z"
                    fill="var(--color-gray-500)" opacity="0.6"/>
              <circle cx="16" cy="15" r="2.5" fill="var(--color-surface)" />
              <!-- Lock icon -->
              <g transform="translate(12, 11)">
                <rect x="0" y="4" width="8" height="6" rx="1" fill="var(--color-gray-600)" />
                <path d="M2 4V2.5a2 2 0 0 1 4 0V4" stroke="var(--color-gray-600)" stroke-width="1.5" fill="none"/>
              </g>
            </svg>
          </div>

          <div class="error-details">
            <h1 class="error-code">403</h1>
            <h2 class="error-title">{{ 'error.403.title' | translate }}</h2>
            <p class="error-description">{{ 'error.403.description' | translate }}</p>

            <div class="access-info">
              <div class="info-section">
                <h3>{{ 'error.access.possible-reasons' | translate }}</h3>
                <ul>
                  <li>{{ 'error.access.reason-login' | translate }}</li>
                  <li>{{ 'error.access.reason-permissions' | translate }}</li>
                  <li>{{ 'error.access.reason-expired' | translate }}</li>
                  <li>{{ 'error.access.reason-restricted' | translate }}</li>
                </ul>
              </div>

              <div class="help-section">
                <div class="help-card">
                  <div class="help-icon">
                    <svg width="24" height="24" fill="var(--color-primary)" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                  </div>
                  <div class="help-content">
                    <h4>{{ 'error.help.family-members' | translate }}</h4>
                    <p>{{ 'error.help.family-description' | translate }}</p>
                    <a href="/login?type=family" class="help-link">{{ 'error.help.family-login' | translate }}</a>
                  </div>
                </div>

                <div class="help-card">
                  <div class="help-icon">
                    <svg width="24" height="24" fill="var(--color-accent)" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 14H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                  </div>
                  <div class="help-content">
                    <h4>{{ 'error.help.staff' | translate }}</h4>
                    <p>{{ 'error.help.staff-description' | translate }}</p>
                    <a href="/login?type=admin" class="help-link">{{ 'error.help.admin-login' | translate }}</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="error-actions">
              <a href="/login" class="btn btn-primary">{{ 'error.action.login' | translate }}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
                {{ 'error.action.login' | translate }}
              </a>

              <a href="/" class="btn btn-secondary">{{ 'error.action.home' | translate }}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
                {{ 'error.action.home' | translate }}
              </a>

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
      opacity: 0.8;
    }

    .error-code {
      font-size: 6rem;
      font-weight: var(--font-weight-bold);
      color: var(--color-gray-600);
      margin: 0 0 var(--spacing-4) 0;
      line-height: 1;
      text-shadow: 2px 2px 4px rgba(108, 117, 125, 0.2);
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

    .access-info {
      display: grid;
      gap: var(--spacing-8);
      margin-bottom: var(--spacing-10);
      text-align: left;
    }

    .info-section {
      background: var(--color-beige-50);
      border: 1px solid var(--color-beige-200);
      border-radius: var(--radius-xl);
      padding: var(--spacing-6);
    }

    .info-section h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-4) 0;
    }

    .info-section ul {
      margin: 0;
      padding-left: var(--spacing-5);
      color: var(--color-text-secondary);
    }

    .info-section li {
      margin-bottom: var(--spacing-2);
      line-height: 1.5;
    }

    .help-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-6);
    }

    .help-card {
      background: var(--color-surface);
      border: 1px solid var(--color-beige-200);
      border-radius: var(--radius-xl);
      padding: var(--spacing-6);
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-normal);
    }

    .help-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .help-icon {
      margin-bottom: var(--spacing-4);
    }

    .help-card h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-3) 0;
    }

    .help-card p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0 0 var(--spacing-4) 0;
    }

    .help-link {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-sm);
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-1);
    }

    .help-link:hover {
      text-decoration: underline;
      color: var(--color-primary-dark);
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

      .help-section {
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
export class ForbiddenComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Optional: Track access denied events
  }
}