import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, LoadingComponent],
  template: `
    <div class="home-page">
      <!-- Loading State -->
      <app-loading
        *ngIf="isLoading"
        [fullscreen]="true"
        [message]="'home.loading.message' | translate"
        [subMessage]="'home.loading.subMessage' | translate"
      ></app-loading>

      <!-- Main Content -->
      <div *ngIf="!isLoading" class="home-content">
      <!-- Hero Section with Parallax -->
      <section class="hero" role="banner" [style.transform]="'translateY(' + scrollY * 0.5 + 'px)'">
        <div class="hero-bg-gradient"></div>
        <div class="floating-elements">
          <div class="floating-circle circle-1"></div>
          <div class="floating-circle circle-2"></div>
          <div class="floating-circle circle-3"></div>
        </div>
        <div class="container">
          <div class="hero-content animate-fade-in-up">
            <div class="hero-text">
              <span class="hero-badge">{{ 'home.hero.badge' | translate }}</span>
              <h1 class="hero-title" [innerHTML]="'home.hero.title' | translate"></h1>
              <p class="hero-description">{{ 'home.hero.description' | translate }}</p>
              <div class="hero-actions">
                <a href="/contact" class="btn btn-primary">
                  <span>{{ 'home.hero.ctaPrimary' | translate }}</span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </a>
                <a href="/services" class="btn btn-ghost">
                  <span>{{ 'home.hero.ctaSecondary' | translate }}</span>
                </a>
              </div>
              <div class="hero-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ 'home.hero.stat1.number' | translate }}</span>
                  <span class="stat-label">{{ 'home.hero.stat1.label' | translate }}</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">{{ 'home.hero.stat2.number' | translate }}</span>
                  <span class="stat-label">{{ 'home.hero.stat2.label' | translate }}</span>
                </div>
              </div>
            </div>
            <div class="hero-visual">
              <div class="hero-image-container">
                <div class="hero-image animate-slide-in-right">
                  <div class="image-placeholder">
                    <div class="placeholder-content">
                      <div class="heart-icon">
                        <svg width="60" height="60" fill="var(--color-primary)" viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                      </div>
                      <p>{{ 'home.hero.imageText' | translate }}</p>
                    </div>
                  </div>
                  <div class="image-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section with Cards -->
      <section class="features-section">
        <div class="container">
          <div class="features-header animate-fade-in">
            <h2 class="section-title">{{ 'home.features.title' | translate }}</h2>
            <p class="section-subtitle">{{ 'home.features.subtitle' | translate }}</p>
          </div>
          <div class="features-grid">
            <div class="feature-card card-glass animate-fade-in-up" style="animation-delay: 0.1s">
              <div class="feature-icon">
                <svg width="32" height="32" fill="var(--color-primary)" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
              </div>
              <h3 class="feature-title">{{ 'home.features.feature1.title' | translate }}</h3>
              <p class="feature-description">{{ 'home.features.feature1.description' | translate }}</p>
            </div>
            <div class="feature-card card-glass animate-fade-in-up" style="animation-delay: 0.2s">
              <div class="feature-icon">
                <svg width="32" height="32" fill="var(--color-secondary)" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </div>
              <h3 class="feature-title">{{ 'home.features.feature2.title' | translate }}</h3>
              <p class="feature-description">{{ 'home.features.feature2.description' | translate }}</p>
            </div>
            <div class="feature-card card-glass animate-fade-in-up" style="animation-delay: 0.3s">
              <div class="feature-icon">
                <svg width="32" height="32" fill="var(--color-accent)" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
              </div>
              <h3 class="feature-title">{{ 'home.features.feature3.title' | translate }}</h3>
              <p class="feature-description">{{ 'home.features.feature3.description' | translate }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Preview -->
      <section class="services-preview">
        <div class="container">
          <div class="services-content">
            <div class="services-text animate-fade-in">
              <span class="services-badge">{{ 'home.services.badge' | translate }}</span>
              <h2 class="services-title" [innerHTML]="'home.services.title' | translate"></h2>
              <p class="services-description">{{ 'home.services.description' | translate }}</p>
              <div class="services-list">
                <div class="service-item">
                  <div class="service-check">✓</div>
                  <span>{{ 'home.services.item1' | translate }}</span>
                </div>
                <div class="service-item">
                  <div class="service-check">✓</div>
                  <span>{{ 'home.services.item2' | translate }}</span>
                </div>
                <div class="service-item">
                  <div class="service-check">✓</div>
                  <span>{{ 'home.services.item3' | translate }}</span>
                </div>
                <div class="service-item">
                  <div class="service-check">✓</div>
                  <span>{{ 'home.services.item4' | translate }}</span>
                </div>
              </div>
              <a href="/services" class="btn btn-secondary">
                <span>{{ 'home.services.cta' | translate }}</span>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </a>
            </div>
            <div class="services-visual animate-slide-in-right">
              <div class="services-cards">
                <div class="service-mini-card">
                  <div class="mini-card-icon">🤝</div>
                  <span>{{ 'home.services.card1' | translate }}</span>
                </div>
                <div class="service-mini-card">
                  <div class="mini-card-icon">📚</div>
                  <span>{{ 'home.services.card2' | translate }}</span>
                </div>
                <div class="service-mini-card">
                  <div class="mini-card-icon">🤝</div>
                  <span>{{ 'home.services.card3' | translate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Services Wave -->
        <div class="services-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" fill="var(--color-background)"></path>
          </svg>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="cta-bg-gradient"></div>
        <div class="container">
          <div class="cta-content animate-fade-in-up">
            <h2 class="cta-title" [innerHTML]="'home.cta.title' | translate"></h2>
            <p class="cta-description">{{ 'home.cta.description' | translate }}</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">
                <span>{{ 'home.cta.primary' | translate }}</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </a>
              <a href="tel:+1-514-555-0123" class="btn btn-ghost btn-lg">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <span>{{ 'home.cta.phone' | translate }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div> <!-- End home-content -->
    </div>
  `,
  styles: [`
    .home-page {
      overflow-x: hidden;
      background: var(--color-background);
    }

    // Hero Section
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: var(--gradient-hero);
      isolation: isolate;
    }

    .hero-bg-gradient {
      position: absolute;
      inset: 0;
      background: var(--gradient-hero);
      opacity: 0.1;
      z-index: -2;
    }

    .floating-elements {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: -1;
    }

    .floating-circle {
      position: absolute;
      border-radius: var(--radius-full);
      background: var(--gradient-glass);
      backdrop-filter: blur(40px);
      animation: float 6s ease-in-out infinite;
    }

    .circle-1 {
      width: 200px;
      height: 200px;
      top: 10%;
      right: 10%;
      animation-delay: 0s;
    }

    .circle-2 {
      width: 150px;
      height: 150px;
      bottom: 20%;
      left: 5%;
      animation-delay: 2s;
    }

    .circle-3 {
      width: 100px;
      height: 100px;
      top: 60%;
      right: 20%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: var(--spacing-12);
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-badge {
      display: inline-block;
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      color: var(--color-primary);
      padding: var(--spacing-2) var(--spacing-4);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-6);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .hero-title {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-6xl);
      font-weight: var(--font-weight-bold);
      line-height: 1.1;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-6);
      letter-spacing: -0.02em;
    }

    .gradient-text {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
    }

    .hero-description {
      font-size: var(--font-size-xl);
      line-height: 1.6;
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-8);
      max-width: 600px;
    }

    .hero-actions {
      display: flex;
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-10);
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: var(--spacing-6);
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
    }

    .stat-number {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
    }

    .stat-label {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
      font-weight: var(--font-weight-medium);
    }

    .stat-divider {
      width: 1px;
      height: 30px;
      background: var(--color-gray-300);
    }

    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .hero-image-container {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .hero-image {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius-2xl);
      overflow: hidden;
      backdrop-filter: blur(20px);
      background: var(--gradient-glass);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: var(--gradient-glass);
    }

    .placeholder-content {
      text-align: center;
      color: var(--color-text-secondary);
    }

    .placeholder-content p {
      margin-top: var(--spacing-4);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
    }

    .heart-icon {
      margin-bottom: var(--spacing-4);
      opacity: 0.8;
    }

    .image-glow {
      position: absolute;
      inset: -20px;
      background: var(--gradient-primary);
      border-radius: var(--radius-2xl);
      opacity: 0.1;
      filter: blur(40px);
      z-index: -1;
    }

    // Features Section
    .features-section {
      padding: var(--spacing-32) 0 var(--spacing-24) 0;
      margin-top: 200px;
      background: var(--color-background-secondary);
    }

    .features-header {
      text-align: center;
      margin-bottom: var(--spacing-16);
    }

    .section-title {
      font-size: var(--font-size-5xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
      letter-spacing: -0.02em;
    }

    .section-subtitle {
      font-size: var(--font-size-xl);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--spacing-8);
    }

    .feature-card {
      padding: var(--spacing-8);
      border-radius: var(--radius-2xl);
      text-align: center;
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      border-radius: var(--radius-2xl);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .feature-card > * {
      position: relative;
      z-index: 1;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-2xl);
    }

    .feature-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto var(--spacing-6);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-xl);
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .feature-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .feature-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
      font-size: var(--font-size-base);
    }

    // Services Preview Section
    .services-preview {
      position: relative;
      padding: var(--spacing-24) 0;
    }

    .services-wave {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 60px;
      overflow: hidden;
      z-index: 1;
    }

    .services-wave svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .services-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-16);
      align-items: center;
    }

    .services-badge {
      display: inline-block;
      background: var(--color-secondary);
      color: white;
      padding: var(--spacing-2) var(--spacing-4);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-4);
    }

    .services-title {
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      line-height: 1.2;
      margin-bottom: var(--spacing-6);
      letter-spacing: -0.02em;
    }

    .services-description {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-8);
    }

    .services-list {
      margin-bottom: var(--spacing-8);
    }

    .service-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      margin-bottom: var(--spacing-4);
    }

    .service-check {
      width: 24px;
      height: 24px;
      background: var(--color-secondary);
      color: white;
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-bold);
      flex-shrink: 0;
    }

    .service-item span {
      font-size: var(--font-size-base);
      color: var(--color-text-primary);
      font-weight: var(--font-weight-medium);
    }

    .services-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .services-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-4);
      max-width: 300px;
    }

    .service-mini-card {
      padding: var(--spacing-6);
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      border-radius: var(--radius-xl);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all var(--transition-normal);
    }

    .service-mini-card:hover {
      transform: translateY(-4px) scale(1.05);
    }

    .service-mini-card:nth-child(3) {
      grid-column: 1 / -1;
    }

    .mini-card-icon {
      font-size: var(--font-size-2xl);
      margin-bottom: var(--spacing-2);
    }

    .service-mini-card span {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-primary);
    }

    // CTA Section
    .cta-section {
      position: relative;
      padding: var(--spacing-24) 0;
      background: var(--color-gray-900);
      color: white;
      text-align: center;
      overflow: hidden;
    }

    .cta-bg-gradient {
      position: absolute;
      inset: 0;
      background: var(--gradient-primary);
      opacity: 0.1;
    }

    .cta-content {
      position: relative;
      z-index: 1;
    }

    .cta-title {
      font-size: var(--font-size-5xl);
      font-weight: var(--font-weight-bold);
      line-height: 1.1;
      margin-bottom: var(--spacing-6);
      letter-spacing: -0.02em;
    }

    .cta-description {
      font-size: var(--font-size-xl);
      line-height: 1.6;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto var(--spacing-10);
    }

    .cta-actions {
      display: flex;
      gap: var(--spacing-4);
      justify-content: center;
    }

    // Enhanced Button Styles
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
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
      position: relative;
      overflow: hidden;
      min-height: 56px;
      white-space: nowrap;
    }

    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transform: translateX(-100%);
      transition: transform var(--transition-slow);
    }

    .btn:hover::before {
      transform: translateX(100%);
    }

    .btn-primary {
      background: var(--gradient-primary);
      color: white;
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }

    .btn-secondary {
      background: var(--color-background);
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
      box-shadow: var(--shadow-sm);
    }

    .btn-secondary:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
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
      padding: var(--spacing-5) var(--spacing-10);
      font-size: var(--font-size-lg);
      min-height: 64px;
    }

    .btn svg {
      flex-shrink: 0;
      transition: transform var(--transition-normal);
    }

    .btn:hover svg {
      transform: translateX(2px);
    }

    // Responsive Design
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: var(--spacing-10);
      }

      .services-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-10);
        text-align: center;
      }

      .hero-image-container {
        width: 300px;
        height: 300px;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: var(--font-size-4xl);
      }

      .section-title {
        font-size: var(--font-size-3xl);
      }

      .services-title {
        font-size: var(--font-size-3xl);
      }

      .cta-title {
        font-size: var(--font-size-3xl);
      }

      .hero-actions,
      .cta-actions {
        flex-direction: column;
        align-items: center;
      }

      .hero-stats {
        justify-content: center;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  scrollY = 0;
  isLoading = true;

  ngOnInit() {
    // Simulate loading time for demonstration
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    if (typeof window !== 'undefined') {
      this.updateScrollPosition();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.updateScrollPosition();
    }
  }

  private updateScrollPosition() {
    this.scrollY = window.scrollY;
  }
}