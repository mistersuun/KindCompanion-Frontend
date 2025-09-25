import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, LoadingComponent],
  template: `
    <div class="about-page">
      <!-- Loading State -->
      <app-loading
        *ngIf="isLoading"
        [fullscreen]="true"
        [message]="'about.loading.message' | translate"
        [subMessage]="'about.loading.subMessage' | translate"
      ></app-loading>

      <!-- Main Content -->
      <div *ngIf="!isLoading" class="about-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content animate-fade-in-up">
            <h1 class="hero-title">{{ 'about.hero.title' | translate }}</h1>
            <p class="hero-subtitle">{{ 'about.hero.subtitle' | translate }}</p>
          </div>
        </div>
        <!-- Hero Wave -->
        <div class="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--color-background)"></path>
          </svg>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section section">
        <div class="container">
          <div class="content-grid">
            <div class="text-content animate-fade-in">
              <h2 class="section-title">{{ 'about.mission.title' | translate }}</h2>
              <p class="section-description">{{ 'about.mission.description1' | translate }}</p>
              <p>{{ 'about.mission.description2' | translate }}</p>
            </div>
            <div class="image-content animate-slide-in-right">
              <div class="card card-glass">
                <div class="stat-item">
                  <div class="stat-number">200+</div>
                  <div class="stat-label">{{ 'about.stats.volunteers' | translate }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">15+</div>
                  <div class="stat-label">{{ 'about.stats.experience' | translate }}</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">{{ 'about.stats.support' | translate }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section section">
        <div class="container">
          <h2 class="section-title text-center">{{ 'about.values.title' | translate }}</h2>
          <p class="section-subtitle text-center">{{ 'about.values.subtitle' | translate }}</p>

          <div class="values-grid">
            <div class="value-card card animate-fade-in" style="animation-delay: 0.1s">
              <div class="value-icon">❤️</div>
              <h3 class="value-title">{{ 'about.values.compassion.title' | translate }}</h3>
              <p class="value-description">
                {{ 'about.values.compassion.description' | translate }}
              </p>
            </div>

            <div class="value-card card animate-fade-in" style="animation-delay: 0.2s">
              <div class="value-icon">🤝</div>
              <h3 class="value-title">{{ 'about.values.respect.title' | translate }}</h3>
              <p class="value-description">
                {{ 'about.values.respect.description' | translate }}
              </p>
            </div>

            <div class="value-card card animate-fade-in" style="animation-delay: 0.3s">
              <div class="value-icon">🛡️</div>
              <h3 class="value-title">{{ 'about.values.trust.title' | translate }}</h3>
              <p class="value-description">
                {{ 'about.values.trust.description' | translate }}
              </p>
            </div>

            <div class="value-card card animate-fade-in" style="animation-delay: 0.4s">
              <div class="value-icon">💪</div>
              <h3 class="value-title">{{ 'about.values.excellence.title' | translate }}</h3>
              <p class="value-description">
                {{ 'about.values.excellence.description' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="story-section section">
        <div class="container">
          <div class="content-grid reverse">
            <div class="image-content animate-fade-in">
              <div class="founder-card card">
                <div class="founder-info">
                  <h3>{{ 'about.story.founder.title' | translate }}</h3>
                  <p class="founder-date">{{ 'about.story.founder.date' | translate }}</p>
                  <p class="founder-story">
                    {{ 'about.story.founder.quote' | translate }}
                  </p>
                  <p class="founder-signature">{{ 'about.story.founder.signature' | translate }}</p>
                </div>
              </div>
            </div>
            <div class="text-content animate-slide-in-right">
              <h2 class="section-title">{{ 'about.story.title' | translate }}</h2>
              <p class="section-description">
                {{ 'about.story.description1' | translate }}
              </p>
              <p>
                {{ 'about.story.description2' | translate }}
              </p>
              <p>
                {{ 'about.story.description3' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section section">
        <div class="container">
          <h2 class="section-title text-center">{{ 'about.features.title' | translate }}</h2>
          <p class="section-subtitle text-center">{{ 'about.features.subtitle' | translate }}</p>

          <div class="features-grid">
            <div class="feature-item animate-fade-in-up" style="animation-delay: 0.1s">
              <div class="feature-icon">📋</div>
              <h3 class="feature-title">{{ 'about.features.screened.title' | translate }}</h3>
              <p class="feature-description">
                {{ 'about.features.screened.description' | translate }}
              </p>
            </div>

            <div class="feature-item animate-fade-in-up" style="animation-delay: 0.2s">
              <div class="feature-icon">🎓</div>
              <h3 class="feature-title">{{ 'about.features.certified.title' | translate }}</h3>
              <p class="feature-description">
                {{ 'about.features.certified.description' | translate }}
              </p>
            </div>

            <div class="feature-item animate-fade-in-up" style="animation-delay: 0.3s">
              <div class="feature-icon">🔒</div>
              <h3 class="feature-title">{{ 'about.features.insured.title' | translate }}</h3>
              <p class="feature-description">
                {{ 'about.features.insured.description' | translate }}
              </p>
            </div>

            <div class="feature-item animate-fade-in-up" style="animation-delay: 0.4s">
              <div class="feature-icon">📞</div>
              <h3 class="feature-title">{{ 'about.features.support.title' | translate }}</h3>
              <p class="feature-description">
                {{ 'about.features.support.description' | translate }}
              </p>
            </div>

            <div class="feature-item animate-fade-in-up" style="animation-delay: 0.5s">
              <div class="feature-icon">🌟</div>
              <h3 class="feature-title">{{ 'about.features.matching.title' | translate }}</h3>
              <p class="feature-description">
                {{ 'about.features.matching.description' | translate }}
              </p>
            </div>

            <div class="feature-item animate-fade-in-up" style="animation-delay: 0.6s">
              <div class="feature-icon">🗣️</div>
              <h3 class="feature-title">{{ 'about.features.bilingual.title' | translate }}</h3>
              <p class="feature-description">
                {{ 'about.features.bilingual.description' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content card card-glass text-center animate-fade-in">
            <h2 class="cta-title">{{ 'about.cta.title' | translate }}</h2>
            <p class="cta-description">
              {{ 'about.cta.description' | translate }}
            </p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary btn-lg">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span>{{ 'about.cta.consultation' | translate }}</span>
              </a>
              <a href="tel:+1-514-555-0123" class="btn btn-secondary btn-lg">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.97a.678.678 0 0 1-.441-.06l-1.548-.773a.678.678 0 0 1-.122-.58l.537-1.804a.678.678 0 0 0-.122-.58L6.49 5.379a.678.678 0 0 0-.58-.122L4.106 5.794a.678.678 0 0 1-.441-.06L1.934 4.98a.678.678 0 0 0-.58-.122z"/>
                </svg>
                <span>{{ 'about.cta.phone' | translate }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div> <!-- End about-content -->
    </div>
  `,
  styles: [`
    .about-page {
      background: var(--color-background);
    }

    // Hero Section
    .hero-section {
      background: var(--gradient-hero);
      padding: var(--spacing-24) 0 var(--spacing-20);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero-wave {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 60px;
      overflow: hidden;
      z-index: 1;
    }

    .hero-wave svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="%23ffffff" opacity="0.03"><path d="M0,20 Q250,50 500,20 T1000,20 V100 H0 Z"/></svg>') repeat-x;
      background-size: 1000px 100px;
      animation: wave 20s ease-in-out infinite;
    }

    @keyframes wave {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(-100px); }
    }

    .hero-content {
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: var(--font-size-5xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-6);
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .hero-subtitle {
      font-size: var(--font-size-xl);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    // Content Grid
    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-12);
      align-items: center;
    }

    .content-grid.reverse {
      direction: rtl;
    }

    .content-grid.reverse > * {
      direction: ltr;
    }

    .text-content {
      max-width: 600px;
    }

    .section-title {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
    }

    .section-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-8);
    }

    .section-description {
      font-size: var(--font-size-lg);
      color: var(--color-text-primary);
      line-height: 1.7;
      margin-bottom: var(--spacing-4);
    }

    .text-content p {
      color: var(--color-text-secondary);
      line-height: 1.7;
      margin-bottom: var(--spacing-4);
    }

    // Stats Card
    .stat-item {
      text-align: center;
      padding: var(--spacing-4);
      border-bottom: 1px solid var(--color-gray-200);
    }

    .stat-item:last-child {
      border-bottom: none;
    }

    .stat-number {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
      margin-bottom: var(--spacing-1);
    }

    .stat-label {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    // Values Grid
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-6);
      margin-top: var(--spacing-10);
    }

    .value-card {
      text-align: center;
      padding: var(--spacing-8);
      transition: all var(--transition-normal);
      border: 2px solid transparent;
    }

    .value-card:hover {
      border-color: var(--color-primary);
      transform: translateY(-4px);
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-4);
      display: block;
    }

    .value-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .value-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    // Founder Card
    .founder-card {
      padding: var(--spacing-8);
      text-align: left;
      background: var(--gradient-warm);
    }

    .founder-info h3 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-2);
    }

    .founder-date {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: var(--spacing-4);
    }

    .founder-story {
      font-style: italic;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-4);
      font-size: var(--font-size-base);
    }

    .founder-signature {
      font-weight: var(--font-weight-medium);
      color: var(--color-primary);
      font-size: var(--font-size-sm);
    }

    // Features Grid
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-6);
      margin-top: var(--spacing-10);
    }

    .feature-item {
      text-align: center;
      padding: var(--spacing-6);
      background: var(--color-surface);
      border-radius: var(--radius-xl);
      border: 1px solid var(--color-gray-200);
      transition: all var(--transition-normal);
    }

    .feature-item:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary);
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-4);
      display: block;
    }

    .feature-title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .feature-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
      font-size: var(--font-size-sm);
    }

    // CTA Section
    .cta-section {
      padding: var(--spacing-20) 0;
      background: var(--gradient-hero);
    }

    .cta-content {
      padding: var(--spacing-12) var(--spacing-8);
      max-width: 600px;
      margin: 0 auto;
    }

    .cta-title {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
    }

    .cta-description {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-8);
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: var(--spacing-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    // Responsive Design
    @media (max-width: 768px) {
      .hero-title {
        font-size: var(--font-size-3xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-lg);
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-8);
      }

      .values-grid {
        grid-template-columns: 1fr;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .cta-buttons .btn {
        width: 100%;
        max-width: 280px;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: var(--spacing-16) 0 var(--spacing-12);
      }

      .section {
        padding: var(--spacing-12) 0;
      }

      .hero-title {
        font-size: var(--font-size-2xl);
      }

      .section-title {
        font-size: var(--font-size-2xl);
      }

      .cta-content {
        padding: var(--spacing-8) var(--spacing-4);
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}