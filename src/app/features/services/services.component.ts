import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, LoadingComponent],
  template: `
    <div class="services-page">
      <!-- Loading State -->
      <app-loading
        *ngIf="isLoading"
        [fullscreen]="true"
        [message]="'services.loading.message' | translate"
        [subMessage]="'services.loading.subMessage' | translate"
      ></app-loading>

      <!-- Main Content -->
      <div *ngIf="!isLoading" class="services-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content animate-fade-in-up">
            <h1 class="hero-title">{{ 'services.hero.title' | translate }}</h1>
            <p class="hero-subtitle">{{ 'services.hero.subtitle' | translate }}</p>
          </div>
        </div>
        <!-- Hero Wave -->
        <div class="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--color-background)"></path>
          </svg>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="services-section section">
        <div class="container">
          <h2 class="section-title text-center">{{ 'services.section.title' | translate }}</h2>
          <p class="section-subtitle text-center">{{ 'services.section.subtitle' | translate }}</p>

          <div class="services-grid">
            <!-- Daily Companionship -->
            <div id="companionship" class="service-card card animate-fade-in" style="animation-delay: 0.1s">
              <div class="service-icon">👥</div>
              <h3 class="service-title">{{ 'services.companionship.title' | translate }}</h3>
              <p class="service-description">{{ 'services.companionship.description' | translate }}</p>
              <ul class="service-features">
                <li>{{ 'services.companionship.feature1' | translate }}</li>
                <li>{{ 'services.companionship.feature2' | translate }}</li>
                <li>{{ 'services.companionship.feature3' | translate }}</li>
                <li>{{ 'services.companionship.feature4' | translate }}</li>
                <li>{{ 'services.companionship.feature5' | translate }}</li>
              </ul>
              <div class="service-impact">{{ 'services.companionship.impact' | translate }}</div>
            </div>

            <!-- Mobility Assistance -->
            <div id="mobility" class="service-card card animate-fade-in" style="animation-delay: 0.2s">
              <div class="service-icon">🚶</div>
              <h3 class="service-title">{{ 'services.mobility.title' | translate }}</h3>
              <p class="service-description">{{ 'services.mobility.description' | translate }}</p>
              <ul class="service-features">
                <li>{{ 'services.mobility.feature1' | translate }}</li>
                <li>{{ 'services.mobility.feature2' | translate }}</li>
                <li>{{ 'services.mobility.feature3' | translate }}</li>
                <li>{{ 'services.mobility.feature4' | translate }}</li>
                <li>{{ 'services.mobility.feature5' | translate }}</li>
              </ul>
              <div class="service-price">{{ 'services.pricing.mobility' | translate }}</div>
            </div>

            <!-- Technology Support -->
            <div id="technology" class="service-card card animate-fade-in" style="animation-delay: 0.3s">
              <div class="service-icon">📱</div>
              <h3 class="service-title">{{ 'services.technology.title' | translate }}</h3>
              <p class="service-description">{{ 'services.technology.description' | translate }}</p>
              <ul class="service-features">
                <li>{{ 'services.technology.feature1' | translate }}</li>
                <li>{{ 'services.technology.feature2' | translate }}</li>
                <li>{{ 'services.technology.feature3' | translate }}</li>
                <li>{{ 'services.technology.feature4' | translate }}</li>
                <li>{{ 'services.technology.feature5' | translate }}</li>
              </ul>
              <div class="service-price">{{ 'services.pricing.technology' | translate }}</div>
            </div>

            <!-- Errand Assistance -->
            <div id="errands" class="service-card card animate-fade-in" style="animation-delay: 0.4s">
              <div class="service-icon">🛒</div>
              <h3 class="service-title">{{ 'services.errands.title' | translate }}</h3>
              <p class="service-description">{{ 'services.errands.description' | translate }}</p>
              <ul class="service-features">
                <li>{{ 'services.errands.feature1' | translate }}</li>
                <li>{{ 'services.errands.feature2' | translate }}</li>
                <li>{{ 'services.errands.feature3' | translate }}</li>
                <li>{{ 'services.errands.feature4' | translate }}</li>
                <li>{{ 'services.errands.feature5' | translate }}</li>
              </ul>
              <div class="service-price">{{ 'services.pricing.errands' | translate }}</div>
            </div>

            <!-- Meal Preparation -->
            <div id="meal-prep" class="service-card card animate-fade-in" style="animation-delay: 0.5s">
              <div class="service-icon">🍽️</div>
              <h3 class="service-title">{{ 'services.meals.title' | translate }}</h3>
              <p class="service-description">{{ 'services.meals.description' | translate }}</p>
              <ul class="service-features">
                <li>{{ 'services.meals.feature1' | translate }}</li>
                <li>{{ 'services.meals.feature2' | translate }}</li>
                <li>{{ 'services.meals.feature3' | translate }}</li>
                <li>{{ 'services.meals.feature4' | translate }}</li>
                <li>{{ 'services.meals.feature5' | translate }}</li>
              </ul>
              <div class="service-price">{{ 'services.pricing.meals' | translate }}</div>
            </div>

            <!-- Respite Care -->
            <div id="respite" class="service-card card animate-fade-in" style="animation-delay: 0.6s">
              <div class="service-icon">✨</div>
              <h3 class="service-title">{{ 'services.respite.title' | translate }}</h3>
              <p class="service-description">{{ 'services.respite.description' | translate }}</p>
              <ul class="service-features">
                <li>{{ 'services.respite.feature1' | translate }}</li>
                <li>{{ 'services.respite.feature2' | translate }}</li>
                <li>{{ 'services.respite.feature3' | translate }}</li>
                <li>{{ 'services.respite.feature4' | translate }}</li>
                <li>{{ 'services.respite.feature5' | translate }}</li>
              </ul>
              <div class="service-price">{{ 'services.pricing.respite' | translate }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process-section section">
        <div class="container">
          <h2 class="section-title text-center">{{ 'services.process.title' | translate }}</h2>
          <p class="section-subtitle text-center">
            {{ 'services.process.subtitle' | translate }}
          </p>

          <div class="process-steps">
            <div class="step-item animate-fade-in-up" style="animation-delay: 0.1s">
              <div class="step-number">1</div>
              <h3 class="step-title">{{ 'services.process.step1.title' | translate }}</h3>
              <p class="step-description">
                {{ 'services.process.step1.description' | translate }}
              </p>
            </div>

            <div class="step-item animate-fade-in-up" style="animation-delay: 0.2s">
              <div class="step-number">2</div>
              <h3 class="step-title">{{ 'services.process.step2.title' | translate }}</h3>
              <p class="step-description">
                {{ 'services.process.step2.description' | translate }}
              </p>
            </div>

            <div class="step-item animate-fade-in-up" style="animation-delay: 0.3s">
              <div class="step-number">3</div>
              <h3 class="step-title">{{ 'services.process.step3.title' | translate }}</h3>
              <p class="step-description">
                {{ 'services.process.step3.description' | translate }}
              </p>
            </div>

            <div class="step-item animate-fade-in-up" style="animation-delay: 0.4s">
              <div class="step-number">4</div>
              <h3 class="step-title">{{ 'services.process.step4.title' | translate }}</h3>
              <p class="step-description">
                {{ 'services.process.step4.description' | translate }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Coverage Section -->
      <section class="coverage-section section">
        <div class="container">
          <div class="content-grid">
            <div class="text-content animate-fade-in">
              <h2 class="section-title">{{ 'services.coverage.title' | translate }}</h2>
              <p class="section-description">
                {{ 'services.coverage.description' | translate }}
              </p>
              <div class="coverage-features">
                <div class="coverage-item">
                  <div class="coverage-icon">🏠</div>
                  <div>
                    <h4>{{ 'services.coverage.inHome.title' | translate }}</h4>
                    <p>{{ 'services.coverage.inHome.description' | translate }}</p>
                  </div>
                </div>
                <div class="coverage-item">
                  <div class="coverage-icon">🕰️</div>
                  <div>
                    <h4>{{ 'services.coverage.flexible.title' | translate }}</h4>
                    <p>{{ 'services.coverage.flexible.description' | translate }}</p>
                  </div>
                </div>
                <div class="coverage-item">
                  <div class="coverage-icon">🌍</div>
                  <div>
                    <h4>{{ 'services.coverage.montreal.title' | translate }}</h4>
                    <p>{{ 'services.coverage.montreal.description' | translate }}</p>
                  </div>
                </div>
                <div class="coverage-item">
                  <div class="coverage-icon">📞</div>
                  <div>
                    <h4>{{ 'services.coverage.emergency.title' | translate }}</h4>
                    <p>{{ 'services.coverage.emergency.description' | translate }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="image-content animate-slide-in-right">
              <div class="card card-glass">
                <div class="insurance-info">
                  <h3>{{ 'services.insurance.title' | translate }}</h3>
                  <div class="insurance-item">
                    <span class="insurance-label">{{ 'services.insurance.privatePay.label' | translate }}</span>
                    <span class="insurance-status accepted">{{ 'services.insurance.privatePay.status' | translate }}</span>
                  </div>
                  <div class="insurance-item">
                    <span class="insurance-label">{{ 'services.insurance.ramq.label' | translate }}</span>
                    <span class="insurance-status partial">{{ 'services.insurance.ramq.status' | translate }}</span>
                  </div>
                  <div class="insurance-item">
                    <span class="insurance-label">{{ 'services.insurance.private.label' | translate }}</span>
                    <span class="insurance-status accepted">{{ 'services.insurance.private.status' | translate }}</span>
                  </div>
                  <div class="insurance-item">
                    <span class="insurance-label">{{ 'services.insurance.veterans.label' | translate }}</span>
                    <span class="insurance-status accepted">{{ 'services.insurance.veterans.status' | translate }}</span>
                  </div>
                  <div class="payment-note">
                    <p><strong>{{ 'services.insurance.consultation.title' | translate }}</strong><br>
                    {{ 'services.insurance.consultation.subtitle' | translate }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content card card-glass text-center animate-fade-in">
            <h2 class="cta-title">{{ 'services.cta.title' | translate }}</h2>
            <p class="cta-description">
              {{ 'services.cta.description' | translate }}
            </p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary btn-lg">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span>{{ 'services.cta.consultation' | translate }}</span>
              </a>
              <a href="tel:+1-514-555-0123" class="btn btn-secondary btn-lg">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.97a.678.678 0 0 1-.441-.06l-1.548-.773a.678.678 0 0 1-.122-.58l.537-1.804a.678.678 0 0 0-.122-.58L6.49 5.379a.678.678 0 0 0-.58-.122L4.106 5.794a.678.678 0 0 1-.441-.06L1.934 4.98a.678.678 0 0 0-.58-.122z"/>
                </svg>
                <span>{{ 'services.cta.phone' | translate }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div> <!-- End services-content -->
    </div>
  `,
  styles: [`
    .services-page {
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
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }

    // Section Styling
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

    // Services Grid
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-6);
      margin-top: var(--spacing-10);
    }

    .service-card {
      padding: var(--spacing-8);
      transition: all var(--transition-normal);
      border: 2px solid transparent;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .service-card:hover {
      border-color: var(--color-primary);
      transform: translateY(-4px);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-4);
      display: block;
    }

    .service-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .service-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-4);
      flex-grow: 1;
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--spacing-6) 0;
    }

    .service-features li {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
      padding: var(--spacing-2) 0;
      padding-left: var(--spacing-5);
      position: relative;
    }

    .service-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--color-secondary);
      font-weight: var(--font-weight-bold);
    }

    .service-price {
      background: var(--gradient-primary);
      color: white;
      padding: var(--spacing-3) var(--spacing-4);
      border-radius: var(--radius-xl);
      text-align: center;
      font-weight: var(--font-weight-semibold);
      margin-top: auto;
    }

    // Process Steps
    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-6);
      margin-top: var(--spacing-10);
    }

    .step-item {
      text-align: center;
      padding: var(--spacing-6);
      background: var(--color-surface);
      border-radius: var(--radius-xl);
      border: 1px solid var(--color-gray-200);
      position: relative;
      transition: all var(--transition-normal);
    }

    .step-item:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .step-number {
      width: 60px;
      height: 60px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-bold);
      color: white;
      margin: 0 auto var(--spacing-4);
    }

    .step-title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .step-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
      font-size: var(--font-size-sm);
    }

    // Coverage Section
    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-12);
      align-items: center;
    }

    .text-content {
      max-width: 600px;
    }

    .section-description {
      font-size: var(--font-size-lg);
      color: var(--color-text-primary);
      line-height: 1.7;
      margin-bottom: var(--spacing-6);
    }

    .coverage-features {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-4);
    }

    .coverage-item {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-3);
    }

    .coverage-icon {
      font-size: 1.5rem;
      margin-top: var(--spacing-1);
    }

    .coverage-item h4 {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-1) 0;
    }

    .coverage-item p {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      margin: 0;
    }

    // Insurance Info
    .insurance-info {
      padding: var(--spacing-6);
    }

    .insurance-info h3 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
      text-align: center;
    }

    .insurance-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-3) 0;
      border-bottom: 1px solid var(--color-gray-200);
    }

    .insurance-item:last-of-type {
      border-bottom: none;
    }

    .insurance-label {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
    }

    .insurance-status {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
    }

    .insurance-status.accepted {
      color: var(--color-secondary);
    }

    .insurance-status.partial {
      color: var(--color-warning);
    }

    .payment-note {
      background: var(--color-beige-100);
      padding: var(--spacing-4);
      border-radius: var(--radius-md);
      margin-top: var(--spacing-4);
      text-align: center;
    }

    .payment-note p {
      font-size: var(--font-size-sm);
      color: var(--color-text-primary);
      margin: 0;
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

      .services-grid {
        grid-template-columns: 1fr;
      }

      .process-steps {
        grid-template-columns: 1fr;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-8);
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

      .services-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-4);
      }

      .service-card {
        padding: var(--spacing-6);
      }

      .cta-content {
        padding: var(--spacing-8) var(--spacing-4);
      }
    }
  `]
})
export class ServicesComponent implements OnInit, AfterViewInit {
  activeSection = '';
  isLoading = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeSection = fragment;
        setTimeout(() => this.scrollToSection(fragment), 100);
      }
    });
  }

  ngAfterViewInit() {
    if (this.activeSection) {
      this.scrollToSection(this.activeSection);
    }
  }

  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}