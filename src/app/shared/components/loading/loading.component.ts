import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container" [class.overlay]="overlay" [class.fullscreen]="fullscreen">
      <div class="loading-content">
        <div class="logo-container" [class.large]="size === 'large'" [class.small]="size === 'small'">
          <svg width="80" height="80" viewBox="0 0 32 32" fill="none" class="bouncing-logo">
            <circle cx="16" cy="16" r="16" fill="var(--color-primary)" />
            <path d="M16 8.5c-3.5 0-6.5 3-6.5 6.5 0 4.5 6.5 8.5 6.5 8.5s6.5-4 6.5-8.5c0-3.5-3-6.5-6.5-6.5z"
                  fill="white" opacity="0.95"/>
            <circle cx="16" cy="15" r="2.5" fill="var(--color-accent)" />
          </svg>
        </div>

        <div class="loading-text-container" *ngIf="message">
          <div class="loading-text">{{ message }}</div>
          <div class="loading-subtext" *ngIf="subMessage">{{ subMessage }}</div>
        </div>

        <div class="loading-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .loading-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-8);
    }

    .loading-container.overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.95);
      z-index: 1000;
    }

    .loading-container.fullscreen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--color-background);
      z-index: 9999;
    }

    .loading-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-6);
    }

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-container.large {
      transform: scale(1.2);
    }

    .logo-container.small {
      transform: scale(0.8);
    }

    .bouncing-logo {
      animation: bounce 1.5s ease-in-out infinite;
      filter: drop-shadow(0 4px 8px rgba(212, 165, 116, 0.3));
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }

    .loading-text-container {
      max-width: 400px;
    }

    .loading-text {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-2);
    }

    .loading-subtext {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      line-height: 1.5;
    }

    .loading-dots {
      display: flex;
      gap: var(--spacing-2);
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-primary);
      animation: pulse 1.5s ease-in-out infinite;
    }

    .dot:nth-child(1) { animation-delay: 0s; }
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
    }

    @media (max-width: 768px) {
      .bouncing-logo {
        width: 60px;
        height: 60px;
      }

      .loading-text {
        font-size: var(--font-size-base);
      }

      .loading-subtext {
        font-size: var(--font-size-sm);
      }
    }
  `]
})
export class LoadingComponent {
  @Input() message: string = 'Loading...';
  @Input() subMessage: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() overlay: boolean = false;
  @Input() fullscreen: boolean = false;
}