import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { CustomSelectComponent, SelectOption } from '../../shared/components/custom-select/custom-select.component';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

interface Volunteer {
  id: number;
  name: string;
  photo: string;
  title: string;
  experience: string;
  interests: string[];
  languages: string[];
  skills: string[];
  bio: string;
  hoursCompleted: string;
  availability: string;
  featured: boolean;
}

@Component({
  selector: 'app-companions',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, LoadingComponent, CustomSelectComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'companions.loading.message' | translate"
      [subMessage]="'companions.loading.subMessage' | translate"
      [fullscreen]="true">
    </app-loading>

    <div class="companions-page" *ngIf="!isLoading">
      <!-- Hero Section -->
      <section class="companions-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">{{ 'companions.hero.title' | translate }}</h1>
            <p class="hero-description">{{ 'companions.hero.description' | translate }}</p>
            <div class="hero-stats">
              <div class="stat-card">
                <div class="stat-number">200+</div>
                <div class="stat-label">{{ 'companions.stats.volunteers' | translate }}</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">100%</div>
                <div class="stat-label">{{ 'companions.stats.trained' | translate }}</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">15+</div>
                <div class="stat-label">{{ 'companions.stats.languages' | translate }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Hero Wave -->
        <div class="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--color-background)"></path>
          </svg>
        </div>
      </section>

      <!-- Filters Section -->
      <section class="filters-section">
        <div class="container">
          <div class="filters-header">
            <h2 class="filters-title">{{ 'companions.filters.title' | translate }}</h2>
            <p class="filters-description">{{ 'companions.filters.description' | translate }}</p>
          </div>
          <div class="filters-grid">
            <div class="filter-group">
              <label class="filter-label">
                <svg class="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ 'companions.filters.interests' | translate }}
              </label>
              <app-custom-select
                [options]="specialtyOptions"
                [placeholder]="'companions.filters.allInterests' | translate"
                [(ngModel)]="selectedSpecialty"
                (ngModelChange)="applyFilters()">
              </app-custom-select>
            </div>
            <div class="filter-group">
              <label class="filter-label">
                <svg class="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 8L21 8M5 8C4.16667 10.6667 4.25 13.6667 6.5 16M5 8C5.41667 6 6.25 2.33333 12 2C17.75 2.33333 18.5833 6 19 8M21 8C20.1667 10.6667 20.25 13.6667 18 16M21 8C20.5833 6 19.75 2.33333 14 2C8.25 2.33333 7.41667 6 7 8M9 16L15 22L21 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ 'companions.filters.language' | translate }}
              </label>
              <app-custom-select
                [options]="languageOptions"
                [placeholder]="'companions.filters.language.all' | translate"
                [(ngModel)]="selectedLanguage"
                (ngModelChange)="applyFilters()">
              </app-custom-select>
            </div>
            <div class="filter-group">
              <label class="filter-label">
                <svg class="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ 'companions.filters.availability' | translate }}
              </label>
              <app-custom-select
                [options]="availabilityOptions"
                [placeholder]="'companions.filters.availability.all' | translate"
                [(ngModel)]="selectedAvailability"
                (ngModelChange)="applyFilters()">
              </app-custom-select>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Companions -->
      <section class="featured-companions" *ngIf="featuredCompanions.length > 0">
        <div class="container">
          <h2 class="section-title">{{ 'companions.featured.title' | translate }}</h2>
          <div class="companions-grid">
            <div class="companion-card featured" *ngFor="let companion of featuredCompanions">
              <div class="companion-photo">
                <div class="photo-placeholder">
                  <svg width="60" height="60" fill="var(--color-primary)" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                </div>
                <div class="featured-badge">{{ 'companions.badge.featured' | translate }}</div>
              </div>
              <div class="companion-info">
                <h3 class="companion-name">{{ companion.name }}</h3>
                <p class="companion-title">{{ companion.title }}</p>
                <div class="companion-details">
                  <div class="detail-item">
                    <span class="detail-label">{{ 'companions.detail.experience' | translate }}</span>
                    <span class="detail-value">{{ companion.experience }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">{{ 'companions.detail.languages' | translate }}</span>
                    <span class="detail-value">{{ companion.languages.join(', ') }}</span>
                  </div>
                </div>
                <div class="companion-specialties">
                  <span class="specialty-tag" *ngFor="let specialty of companion.interests">
                    {{ specialty }}
                  </span>
                </div>
                <p class="companion-bio">{{ companion.bio }}</p>
                <div class="companion-actions">
                  <button class="btn btn-primary" (click)="requestCompanion(companion)">
                    {{ 'companions.action.request' | translate: {name: companion.name} }}
                  </button>
                  <span class="volunteer-hours">{{ companion.hoursCompleted }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- All Companions -->
      <section class="all-companions">
        <div class="container">
          <h2 class="section-title">{{ 'companions.all.title' | translate }}</h2>
          <div class="companions-grid">
            <div class="companion-card" *ngFor="let companion of filteredCompanions">
              <div class="companion-photo">
                <div class="photo-placeholder">
                  <svg width="48" height="48" fill="var(--color-primary)" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                </div>
                <div class="availability-indicator" [class]="getAvailabilityClass(companion.availability)">
                  {{ getAvailabilityText(companion.availability) }}
                </div>
              </div>
              <div class="companion-info">
                <h3 class="companion-name">{{ companion.name }}</h3>
                <p class="companion-title">{{ companion.title }}</p>
                <div class="companion-details">
                  <div class="detail-item">
                    <span class="detail-label">{{ 'companions.detail.experience' | translate }}</span>
                    <span class="detail-value">{{ companion.experience }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">{{ 'companions.detail.languages' | translate }}</span>
                    <span class="detail-value">{{ companion.languages.join(', ') }}</span>
                  </div>
                </div>
                <div class="companion-specialties">
                  <span class="specialty-tag" *ngFor="let specialty of companion.interests">
                    {{ specialty }}
                  </span>
                </div>
                <div class="companion-certifications">
                  <div class="cert-item" *ngFor="let cert of companion.skills">
                    <svg width="16" height="16" fill="var(--color-secondary)" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <span>{{ cert }}</span>
                  </div>
                </div>
                <div class="companion-actions">
                  <button class="btn btn-secondary" (click)="requestCompanion(companion)">
                    {{ 'companions.action.request' | translate: {name: companion.name} }}
                  </button>
                  <span class="volunteer-hours">{{ companion.hoursCompleted }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Our Companions -->
      <section class="why-choose-section">
        <div class="container">
          <h2 class="section-title">{{ 'companions.why.title' | translate }}</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg width="32" height="32" fill="var(--color-primary)" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c-.064-.293-.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
              </div>
              <h3 class="benefit-title">{{ 'companions.why.screening.title' | translate }}</h3>
              <p class="benefit-description">
                {{ 'companions.why.screening.description' | translate }}
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg width="32" height="32" fill="var(--color-accent)" viewBox="0 0 16 16">
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg>
              </div>
              <h3 class="benefit-title">{{ 'companions.why.training.title' | translate }}</h3>
              <p class="benefit-description">
                {{ 'companions.why.training.description' | translate }}
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg width="32" height="32" fill="var(--color-secondary)" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
              </div>
              <h3 class="benefit-title">{{ 'companions.why.compassion.title' | translate }}</h3>
              <p class="benefit-description">
                {{ 'companions.why.compassion.description' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">{{ 'companions.cta.title' | translate }}</h2>
            <p class="cta-description">
              {{ 'companions.cta.description' | translate }}
            </p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                {{ 'companions.cta.schedule' | translate }}
              </a>
              <a href="tel:+1-514-555-0123" class="btn btn-ghost btn-lg">
                {{ 'companions.cta.call' | translate }}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .companions-page {
      background: var(--color-background);
      overflow: visible;
    }

    // Hero Section
    .companions-hero {
      position: relative;
      padding: var(--spacing-20) 0 var(--spacing-16);
      background: var(--gradient-warm);
      text-align: center;
      overflow: hidden;
    }

    .hero-wave {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
    }

    .hero-wave svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 60px;
    }

    .hero-title {
      font-size: var(--font-size-5xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-6);
      letter-spacing: -0.02em;
    }

    .hero-description {
      font-size: var(--font-size-xl);
      color: var(--color-text-secondary);
      max-width: 800px;
      margin: 0 auto var(--spacing-10);
      line-height: 1.6;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: var(--spacing-8);
      flex-wrap: wrap;
    }

    .stat-card {
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      border: 1px solid var(--color-beige-200);
      border-radius: var(--radius-xl);
      padding: var(--spacing-6);
      text-align: center;
      min-width: 150px;
    }

    .stat-number {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
      margin-bottom: var(--spacing-2);
    }

    .stat-label {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      font-weight: var(--font-weight-medium);
    }

    // Filters Section
    .filters-section {
      padding: var(--spacing-20) 0;
      background: linear-gradient(135deg, var(--color-beige-50) 0%, white 100%);
      position: relative;
      overflow: visible;
    }

    .filters-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(0, 122, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .filters-header {
      text-align: center;
      margin-bottom: var(--spacing-12);
      position: relative;
      z-index: 1;
    }

    .filters-title {
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-6);
      background: var(--gradient-warm);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .filters-description {
      font-size: var(--font-size-xl);
      color: var(--color-text-secondary);
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .filters-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-6);
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      background: white;
      padding: var(--spacing-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-beige-200);
      transition: all var(--transition-normal);
      position: relative;
      overflow: visible;
    }

    .filter-group::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transition: transform var(--transition-normal);
    }

    .filter-group:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary-light);
    }

    .filter-group:hover::before {
      transform: scaleX(1);
    }

    .filter-label {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
      margin-bottom: var(--spacing-4);
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .filter-icon {
      color: var(--color-secondary);
      flex-shrink: 0;
      transition: color var(--transition-normal);
    }

    .filter-group:hover .filter-icon {
      color: var(--color-primary);
    }


    // Companions Grid
    .featured-companions,
    .all-companions {
      padding: var(--spacing-20) 0;
    }

    .section-title {
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      text-align: center;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-12);
    }

    .companions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-8);
    }

    .companion-card {
      background: var(--color-surface);
      border-radius: var(--radius-2xl);
      padding: var(--spacing-8);
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      border: 1px solid var(--color-beige-200);
      position: relative;
      overflow: hidden;
    }

    .companion-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }

    .companion-card.featured {
      border: 2px solid var(--color-primary);
      background: var(--gradient-glass);
    }

    .companion-photo {
      position: relative;
      margin-bottom: var(--spacing-6);
    }

    .photo-placeholder {
      width: 80px;
      height: 80px;
      background: var(--gradient-warm);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--spacing-4);
      border: 3px solid var(--color-surface);
      box-shadow: var(--shadow-md);
    }

    .featured-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: var(--color-primary);
      color: white;
      padding: var(--spacing-1) var(--spacing-3);
      border-radius: var(--radius-full);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-bold);
    }

    .availability-indicator {
      position: absolute;
      top: -5px;
      right: -5px;
      padding: var(--spacing-1) var(--spacing-3);
      border-radius: var(--radius-full);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-semibold);
    }

    .availability-indicator.available {
      background: var(--color-secondary);
      color: white;
    }

    .availability-indicator.limited {
      background: var(--color-warning);
      color: white;
    }

    .availability-indicator.busy {
      background: var(--color-gray-500);
      color: white;
    }

    .companion-name {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-2);
      text-align: center;
    }

    .companion-title {
      font-size: var(--font-size-base);
      color: var(--color-primary);
      font-weight: var(--font-weight-semibold);
      text-align: center;
      margin-bottom: var(--spacing-4);
    }

    .companion-details {
      margin-bottom: var(--spacing-4);
    }

    .detail-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-2);
      padding: var(--spacing-2) 0;
      border-bottom: 1px solid var(--color-beige-200);
    }

    .detail-label {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      font-weight: var(--font-weight-medium);
    }

    .detail-value {
      font-size: var(--font-size-sm);
      color: var(--color-text-primary);
      font-weight: var(--font-weight-semibold);
    }

    .companion-specialties {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-4);
    }

    .specialty-tag {
      background: var(--color-accent);
      color: white;
      padding: var(--spacing-1) var(--spacing-3);
      border-radius: var(--radius-full);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
    }

    .companion-bio {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      line-height: 1.5;
      margin-bottom: var(--spacing-6);
    }

    .companion-certifications {
      margin-bottom: var(--spacing-6);
    }

    .cert-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-2);
      font-size: var(--font-size-sm);
      color: var(--color-text-primary);
      font-weight: var(--font-weight-medium);
    }

    .companion-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-4);
    }

    .volunteer-hours {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-3) var(--spacing-6);
      border: none;
      border-radius: var(--radius-full);
      font-family: var(--font-family-primary);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      text-decoration: none;
      cursor: pointer;
      transition: all var(--transition-normal);
      white-space: nowrap;
    }

    .btn-primary {
      background: var(--gradient-primary);
      color: white;
      box-shadow: var(--shadow-sm);
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }

    .btn-secondary {
      background: var(--color-surface);
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
      box-shadow: var(--shadow-sm);
    }

    .btn-secondary:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }

    // Why Choose Section
    .why-choose-section {
      padding: var(--spacing-20) 0;
      background: var(--color-beige-50);
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-8);
    }

    .benefit-card {
      background: var(--color-surface);
      padding: var(--spacing-8);
      border-radius: var(--radius-xl);
      text-align: center;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-beige-200);
      transition: all var(--transition-normal);
    }

    .benefit-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .benefit-icon {
      width: 64px;
      height: 64px;
      background: var(--gradient-glass);
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--spacing-6);
      border: 1px solid var(--color-beige-300);
    }

    .benefit-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .benefit-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    // CTA Section
    .cta-section {
      padding: var(--spacing-20) 0;
      background: var(--color-gray-900);
      color: white;
      text-align: center;
    }

    .cta-title {
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-6);
    }

    .cta-description {
      font-size: var(--font-size-xl);
      line-height: 1.6;
      opacity: 0.9;
      max-width: 700px;
      margin: 0 auto var(--spacing-10);
    }

    .cta-actions {
      display: flex;
      gap: var(--spacing-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-ghost {
      background: transparent;
      color: currentColor;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btn-ghost:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.6);
    }

    .btn-lg {
      padding: var(--spacing-4) var(--spacing-10);
      font-size: var(--font-size-lg);
      min-height: 56px;
    }

    // Tablet Responsiveness
    @media (max-width: 1024px) and (min-width: 769px) {
      .filters-grid {
        gap: var(--spacing-4);
        max-width: 900px;
      }

      .filter-group {
        padding: var(--spacing-5);
      }
    }

    // Mobile Responsiveness
    @media (max-width: 768px) {
      .hero-title {
        font-size: var(--font-size-3xl);
      }

      .companions-grid {
        grid-template-columns: 1fr;
      }

      .filters-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-4);
      }

      .hero-stats {
        grid-template-columns: 1fr;
      }

      .companion-actions {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .cta-actions {
        flex-direction: column;
        align-items: center;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CompanionsComponent implements OnInit, OnDestroy {
  isLoading = true;
  selectedSpecialty = '';
  selectedLanguage = '';
  selectedAvailability = '';

  // Select options - will be populated with translated labels
  specialtyOptions: SelectOption[] = [];
  languageOptions: SelectOption[] = [];
  availabilityOptions: SelectOption[] = [];

  private languageSubscription: Subscription = new Subscription();

  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {}

  companions: Volunteer[] = [
    {
      id: 1,
      name: 'Marie-Claire Dubois',
      photo: '',
      title: 'Senior Companion Specialist',
      experience: '8 years',
      interests: ['Dementia Care', 'Mobility Support'],
      languages: ['French', 'English'],
      skills: ['First Aid/CPR', 'Dementia Care Training', 'Medication Management'],
      bio: 'Marie-Claire brings warmth and expertise to every interaction. Specializing in dementia care, she creates meaningful connections and provides gentle guidance for daily activities.',
      hoursCompleted: '150+ hours',
      availability: 'available',
      featured: true
    },
    {
      id: 2,
      name: 'James Thompson',
      photo: '',
      title: 'Technology Support Specialist',
      experience: '5 years',
      interests: ['Technology Support', 'Meal Preparation'],
      languages: ['English', 'Spanish'],
      skills: ['First Aid/CPR', 'Technology Training', 'Nutrition Certification'],
      bio: 'James combines technical skills with compassionate care, helping seniors stay connected with family through technology while ensuring proper nutrition.',
      hoursCompleted: '120+ hours',
      availability: 'limited',
      featured: true
    },
    {
      id: 3,
      name: 'Rosa Martinez',
      photo: '',
      title: 'Bilingual Care Companion',
      experience: '12 years',
      interests: ['Medical Support', 'Companionship'],
      languages: ['Spanish', 'English', 'Portuguese'],
      skills: ['First Aid/CPR', 'Medical Assistant', 'Palliative Care'],
      bio: 'With over a decade of experience, Rosa provides comprehensive care with a focus on medical support and emotional companionship for seniors and their families.',
      hoursCompleted: '200+ hours',
      availability: 'available',
      featured: false
    },
    {
      id: 4,
      name: 'Giuseppe Rossi',
      photo: '',
      title: 'Cultural Companion Specialist',
      experience: '7 years',
      interests: ['Companionship', 'Mobility Support'],
      languages: ['Italian', 'English', 'French'],
      skills: ['First Aid/CPR', 'Physical Therapy Assistant', 'Cultural Sensitivity Training'],
      bio: 'Giuseppe understands the importance of cultural connection in care. He provides mobility support while honoring cultural traditions and preferences.',
      hoursCompleted: '85+ hours',
      availability: 'available',
      featured: false
    },
    {
      id: 5,
      name: 'Fatima Chen',
      photo: '',
      title: 'Multilingual Care Coordinator',
      experience: '6 years',
      interests: ['Technology Support', 'Meal Preparation'],
      languages: ['Mandarin', 'English', 'French'],
      skills: ['First Aid/CPR', 'Culinary Arts', 'Digital Literacy Training'],
      bio: 'Fatima bridges language barriers while providing exceptional care. She specializes in helping seniors navigate technology and maintain healthy nutrition habits.',
      hoursCompleted: '95+ hours',
      availability: 'busy',
      featured: false
    },
    {
      id: 6,
      name: 'David Okafor',
      photo: '',
      title: 'Mobility & Wellness Specialist',
      experience: '9 years',
      interests: ['Mobility Support', 'Medical Support'],
      languages: ['English', 'French'],
      skills: ['First Aid/CPR', 'Physical Therapy', 'Wellness Coaching'],
      bio: 'David focuses on maintaining and improving mobility for seniors. His background in physical therapy helps clients stay active and independent.',
      hoursCompleted: '175+ hours',
      availability: 'available',
      featured: false
    }
  ];

  filteredCompanions: Volunteer[] = [];
  featuredCompanions: Volunteer[] = [];

  ngOnInit() {
    // Initialize translated select options
    this.initializeSelectOptions();

    // Subscribe to language changes to update translations
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(() => {
      // Re-initialize select options when language changes
      this.initializeSelectOptions();
    });

    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
      this.applyFilters();
      this.featuredCompanions = this.companions.filter(c => c.featured);
    }, 1300);
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  private initializeSelectOptions() {
    // Specialty options
    this.specialtyOptions = [
      { value: '', label: this.translateService.instant('companions.filters.specialty.all') },
      { value: 'dementia', label: this.translateService.instant('companions.filters.specialty.dementia') },
      { value: 'mobility', label: this.translateService.instant('companions.filters.specialty.mobility') },
      { value: 'technology', label: this.translateService.instant('companions.filters.specialty.technology') },
      { value: 'meal-prep', label: this.translateService.instant('companions.filters.specialty.meals') },
      { value: 'medical', label: this.translateService.instant('companions.filters.specialty.medical') }
    ];

    // Language options
    this.languageOptions = [
      { value: '', label: this.translateService.instant('companions.filters.language.all') },
      { value: 'english', label: this.translateService.instant('companions.filters.language.english') },
      { value: 'french', label: this.translateService.instant('companions.filters.language.french') },
      { value: 'spanish', label: this.translateService.instant('companions.filters.language.spanish') },
      { value: 'italian', label: this.translateService.instant('companions.filters.language.italian') },
      { value: 'portuguese', label: this.translateService.instant('companions.filters.language.portuguese') },
      { value: 'mandarin', label: this.translateService.instant('companions.filters.language.mandarin') }
    ];

    // Availability options
    this.availabilityOptions = [
      { value: '', label: this.translateService.instant('companions.filters.availability.all') },
      { value: 'morning', label: this.translateService.instant('companions.filters.availability.morning') },
      { value: 'afternoon', label: this.translateService.instant('companions.filters.availability.afternoon') },
      { value: 'evening', label: this.translateService.instant('companions.filters.availability.evening') },
      { value: 'overnight', label: this.translateService.instant('companions.filters.availability.overnight') },
      { value: 'weekend', label: this.translateService.instant('companions.filters.availability.weekend') }
    ];
  }

  applyFilters() {
    this.filteredCompanions = this.companions.filter(companion => {
      const matchesSpecialty = !this.selectedSpecialty ||
        companion.interests.some((s: string) => s.toLowerCase().includes(this.selectedSpecialty.toLowerCase()));

      const matchesLanguage = !this.selectedLanguage ||
        companion.languages.some((l: string) => l.toLowerCase().includes(this.selectedLanguage.toLowerCase()));

      const matchesAvailability = !this.selectedAvailability ||
        companion.availability === this.selectedAvailability;

      return matchesSpecialty && matchesLanguage && matchesAvailability;
    });
  }

  getAvailabilityClass(availability: string): string {
    return availability;
  }

  getAvailabilityText(availability: string): string {
    switch(availability) {
      case 'available': return this.translateService.instant('companions.availability.available');
      case 'limited': return this.translateService.instant('companions.availability.limited');
      case 'busy': return this.translateService.instant('companions.availability.busy');
      default: return this.translateService.instant('companions.availability.available');
    }
  }

  requestCompanion(companion: Volunteer) {
    // TODO: Implement companion request functionality
    const message = this.translateService.instant('companions.request.success', { name: companion.name });
    alert(message);
  }
}