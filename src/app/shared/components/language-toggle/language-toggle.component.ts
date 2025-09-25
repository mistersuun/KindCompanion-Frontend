import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService, SupportedLanguage } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="language-toggle" [class.loading]="isLoading">
      <button
        class="language-button"
        [class.active]="isCurrentLanguage('en')"
        [disabled]="isLoading"
        (click)="switchLanguage('en')"
        [attr.aria-label]="'language.switch.english' | translate">
        <div *ngIf="isLoading && switchingTo === 'en'" class="loader"></div>
        <span class="language-text" [class.hidden]="isLoading && switchingTo === 'en'">EN</span>
      </button>

      <div class="language-separator"></div>

      <button
        class="language-button"
        [class.active]="isCurrentLanguage('fr')"
        [disabled]="isLoading"
        (click)="switchLanguage('fr')"
        [attr.aria-label]="'language.switch.french' | translate">
        <div *ngIf="isLoading && switchingTo === 'fr'" class="loader"></div>
        <span class="language-text" [class.hidden]="isLoading && switchingTo === 'fr'">FR</span>
      </button>
    </div>
  `,
  styles: [`
    .language-toggle {
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-full);
      padding: 2px;
      gap: 2px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      height: 32px;
    }

    .language-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-1) var(--spacing-2);
      border: none;
      background: transparent;
      color: rgba(255, 255, 255, 0.8);
      border-radius: var(--radius-lg);
      cursor: pointer;
      transition: all var(--transition-normal);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-bold);
      font-family: var(--font-family-primary);
      min-width: 32px;
      height: 28px;
    }

    .language-button:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      transform: translateY(-1px);
    }

    .language-button.active {
      background: var(--color-surface);
      color: var(--color-primary);
      box-shadow: var(--shadow-sm);
    }

    .language-button.active:hover {
      background: var(--color-surface);
      color: var(--color-primary-dark);
      transform: none;
    }

    .language-text {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-bold);
      letter-spacing: 0.5px;
      line-height: 1;
    }

    .language-text.hidden {
      opacity: 0;
    }

    .loader {
      width: 12px;
      height: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .language-separator {
      width: 1px;
      height: 16px;
      background: rgba(255, 255, 255, 0.3);
    }

    /* Mobile responsive */
    @media (max-width: 768px) {
      .language-toggle {
        padding: 2px;
        height: 28px;
      }

      .language-button {
        padding: 2px 6px;
        min-width: 28px;
        height: 24px;
      }

      .language-text {
        font-size: 10px;
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .language-toggle {
        background: rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 255, 255, 0.1);
      }
    }
  `]
})
export class LanguageToggleComponent implements OnInit {
  isLoading: boolean = false;
  switchingTo: SupportedLanguage | null = null;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Initialize component
  }

  switchLanguage(language: SupportedLanguage): void {
    if (!this.isCurrentLanguage(language) && !this.isLoading) {
      this.isLoading = true;
      this.switchingTo = language;

      this.languageService.switchLanguage(language);

      // Reset loading state after a short delay to show the loading animation
      setTimeout(() => {
        this.isLoading = false;
        this.switchingTo = null;
      }, 500);
    }
  }

  isCurrentLanguage(language: SupportedLanguage): boolean {
    return this.languageService.isCurrentLanguage(language);
  }

  getCurrentLanguageInfo() {
    return this.languageService.getCurrentLanguageInfo();
  }
}