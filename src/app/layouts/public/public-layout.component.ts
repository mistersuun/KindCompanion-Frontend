import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, NavigationStart, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageToggleComponent } from '../../shared/components/language-toggle/language-toggle.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, TranslateModule, LanguageToggleComponent, LoadingComponent],
  template: `
    <div class="public-layout">
      <!-- Language Change Loading -->
      <app-loading
        *ngIf="isChangingLanguage"
        [message]="'Switching Language...'"
        [subMessage]="'Applying new language settings'"
        [fullscreen]="true">
      </app-loading>

      <!-- Skip navigation link for accessibility -->
      <a class="skip-nav" href="#main-content">{{ 'accessibility.skip.nav' | translate }}</a>

      <!-- Modern Header -->
      <header class="header" role="banner" [class.scrolled]="isScrolled">
        <nav class="navbar" role="navigation" aria-label="Main navigation">
          <div class="navbar-container">
            <!-- Left: Brand Section -->
            <div class="navbar-left">
              <a href="/" class="brand-link" [attr.aria-label]="'brand.homeAriaLabel' | translate">
                <div class="brand-logo">
                  <img src="/assets/logo.png" [alt]="'brand.logoAlt' | translate" width="32" height="32">
                </div>
                <span class="brand-text">{{ 'brand.name' | translate }}</span>
                <span class="brand-tagline">{{ 'brand.tagline' | translate }}</span>
              </a>
            </div>

            <!-- Center: Navigation Menu -->
            <div class="navbar-center" [class.mobile-open]="isMobileMenuOpen">
              <a routerLink="/home" class="nav-link" routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: false}">{{ 'nav.home' | translate }}</a>
              <a routerLink="/about" class="nav-link" routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: true}">{{ 'nav.about' | translate }}</a>
              <a routerLink="/services" class="nav-link" routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: false}">{{ 'nav.services' | translate }}</a>
              <a routerLink="/companions" class="nav-link" routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: true}">{{ 'nav.companions' | translate }}</a>
              <a routerLink="/contact" class="nav-link" routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: true}">{{ 'nav.contact' | translate }}</a>
            </div>

            <!-- Right: Actions -->
            <div class="navbar-right">
              <app-language-toggle></app-language-toggle>
              <a routerLink="/booking" class="btn btn-primary">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span>{{ 'nav.bookConsultation' | translate }}</span>
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn"
                    [class.active]="isMobileMenuOpen"
                    (click)="toggleMobileMenu()"
                    aria-label="Toggle navigation menu"
                    [attr.aria-expanded]="isMobileMenuOpen">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>
        </nav>
      </header>

      <!-- Page Loader -->
      <div class="page-loader" [class.active]="isLoading">
        <div class="loader-content">
          <div class="loader-spinner">
            <img src="/assets/logo.png" [alt]="'brand.logoAlt' | translate" width="48" height="48">
          </div>
          <div class="loader-text">{{ 'common.loading' | translate }}</div>
        </div>
      </div>

      <!-- Main content area -->
      <main id="main-content" class="main-content" role="main">
        <router-outlet></router-outlet>
      </main>

      <!-- Modern Footer -->
      <footer class="footer" role="contentinfo">
        <div class="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="var(--color-gray-900)"></path>
          </svg>
        </div>

        <div class="footer-content">
          <div class="container">
            <!-- Footer Top -->
            <div class="footer-top">
              <div class="footer-brand">
                <div class="footer-logo">
                  <img src="/assets/logo.png" [alt]="'brand.logoAlt' | translate" width="48" height="48">
                </div>
                <div class="footer-brand-text">
                  <h3 class="footer-title">{{ 'brand.name' | translate }}</h3>
                  <p class="footer-subtitle">{{ 'footer.tagline' | translate }}</p>
                </div>
              </div>

              <div class="footer-description">
                <p>{{ 'footer.description' | translate }}</p>
                <div class="footer-badges">
                  <div class="badge">
                    <svg width="20" height="20" fill="var(--color-secondary)" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 1 0-1h5.793L8.146 4.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 7.5H4.5z"/>
                    </svg>
                    <span>{{ 'footer.badge.certified' | translate }}</span>
                  </div>
                  <div class="badge">
                    <svg width="20" height="20" fill="var(--color-secondary)" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                    </svg>
                    <span>{{ 'footer.badge.support' | translate }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Links -->
            <div class="footer-links">
              <div class="footer-column">
                <h4 class="column-title">{{ 'footer.services.title' | translate }}</h4>
                <ul class="link-list">
                  <li><a routerLink="/services" fragment="companionship">{{ 'footer.services.companionship' | translate }}</a></li>
                  <li><a routerLink="/services" fragment="mobility">{{ 'footer.services.mobility' | translate }}</a></li>
                  <li><a routerLink="/services" fragment="technology">{{ 'footer.services.technology' | translate }}</a></li>
                  <li><a routerLink="/services" fragment="errands">{{ 'footer.services.errands' | translate }}</a></li>
                  <li><a routerLink="/services" fragment="meal-prep">{{ 'footer.services.meals' | translate }}</a></li>
                  <li><a routerLink="/services" fragment="respite">{{ 'footer.services.respite' | translate }}</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4 class="column-title">{{ 'footer.support.title' | translate }}</h4>
                <ul class="link-list">
                  <li><a routerLink="/support" fragment="faq">{{ 'footer.support.faq' | translate }}</a></li>
                  <li><a routerLink="/support" fragment="safety">{{ 'footer.support.safety' | translate }}</a></li>
                  <li><a routerLink="/support" fragment="resources">{{ 'footer.support.resources' | translate }}</a></li>
                  <li><a routerLink="/support" fragment="testimonials">{{ 'footer.support.testimonials' | translate }}</a></li>
                  <li><a routerLink="/support" fragment="hours">{{ 'footer.support.hours' | translate }}</a></li>
                  <li><a routerLink="/support" fragment="emergency">{{ 'footer.support.procedures' | translate }}</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4 class="column-title">{{ 'footer.company.title' | translate }}</h4>
                <ul class="link-list">
                  <li><a routerLink="/about">{{ 'footer.company.about' | translate }}</a></li>
                  <li><a routerLink="/company" fragment="careers">{{ 'footer.company.joinTeam' | translate }}</a></li>
                  <li><a routerLink="/company" fragment="news">{{ 'footer.company.news' | translate }}</a></li>
                  <li><a routerLink="/company" fragment="community">{{ 'footer.company.community' | translate }}</a></li>
                  <li><a routerLink="/company" fragment="partners">{{ 'footer.company.partners' | translate }}</a></li>
                  <li><a routerLink="/contact">{{ 'footer.company.areas' | translate }}</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4 class="column-title">{{ 'footer.contact.title' | translate }}</h4>
                <div class="contact-methods">
                  <div class="contact-method">
                    <svg width="20" height="20" fill="var(--color-primary)" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <div class="contact-info">
                      <span class="contact-label">{{ 'footer.contact.phoneLabel' | translate }}</span>
                      <a href="tel:+1-514-555-0123" class="contact-value">(514) 555-0123</a>
                    </div>
                  </div>

                  <div class="contact-method">
                    <svg width="20" height="20" fill="var(--color-primary)" viewBox="0 0 16 16">
                      <path d="M2 2A2 2 0 0 0 0 4v.993c0 .266.164.7.395 1.057a2.4 2.4 0 0 0 .44.492c.187.167.432.328.709.455.28.129.588.216.916.24h8.08c.328-.024.636-.111.916-.24.277-.127.522-.288.709-.455a2.4 2.4 0 0 0 .44-.492c.23-.357.395-.791.395-1.057V4A2 2 0 0 0 14 2H2zm12.5 1.988a2.14 2.14 0 0 1-.316-.395 1.4 1.4 0 0 1-.264-.295 1.5 1.5 0 0 1-.422-.267c-.167-.118-.364-.21-.578-.268L8 5.494 3.08 2.763c-.214.058-.41.15-.578.268a1.5 1.5 0 0 1-.422.267 1.4 1.4 0 0 1-.264.295c-.11.127-.2.26-.316.395V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v-.012zM0 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6c0 .5-.777 1.5-2 1.5H2C.777 7.5 0 6.5 0 6z"/>
                    </svg>
                    <div class="contact-info">
                      <span class="contact-label">{{ 'footer.contact.emailLabel' | translate }}</span>
                      <a href="mailto:info@kindcompanion.com" class="contact-value">info@kindcompanion.com</a>
                    </div>
                  </div>

                  <div class="contact-method">
                    <svg width="20" height="20" fill="var(--color-primary)" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 4z"/>
                    </svg>
                    <div class="contact-info">
                      <span class="contact-label">{{ 'footer.contact.addressLabel' | translate }}</span>
                      <span class="contact-value">{{ 'footer.contact.addressValue' | translate }}</span>
                    </div>
                  </div>
                </div>

                <div class="emergency-notice">
                  <p>
                    <strong>{{ 'footer.contact.emergencyLine' | translate }}</strong><br>
                    <a href="tel:+1-514-555-0911">(514) 555-0911</a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
              <div class="footer-legal">
                <p class="copyright">
                  &copy; {{ currentYear }} {{ 'brand.name' | translate }}. <span>{{ 'footer.rights' | translate }}</span>
                </p>
                <div class="legal-links">
                  <a routerLink="/legal" fragment="privacy">{{ 'footer.legal.privacy' | translate }}</a>
                  <span class="divider">•</span>
                  <a routerLink="/legal" fragment="terms">{{ 'footer.legal.terms' | translate }}</a>
                  <span class="divider">•</span>
                  <a routerLink="/legal" fragment="accessibility">{{ 'footer.legal.accessibility' | translate }}</a>
                  <span class="divider">•</span>
                  <a routerLink="/legal" fragment="cookies">{{ 'footer.legal.cookies' | translate }}</a>
                </div>
              </div>

              <div class="social-links">
                <span class="social-label">{{ 'footer.social.follow' | translate }}</span>
                <a href="#" class="social-link" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    // Layout Structure
    .public-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
    }

    .main-content {
      flex: 1;
      padding-top: 80px; // Account for fixed header
    }

    // Modern Header Styles
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: var(--z-fixed);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      transition: all var(--transition-normal);
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: var(--shadow-lg);
    }

    .navbar {
      padding: var(--spacing-4) 0;
      transition: padding var(--transition-normal);
    }

    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 var(--spacing-6);
    }

    // Three-column layout
    .navbar-left {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
    }

    .navbar-center {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 auto;
      gap: var(--spacing-6);
    }

    .navbar-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 0 0 auto;
      gap: var(--spacing-4);
    }

    // Brand Styles
    .brand-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      text-decoration: none;
      color: var(--color-text-primary);
      transition: transform var(--transition-normal);
    }

    .brand-link:hover {
      transform: scale(1.02);
    }

    .brand-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .brand-text {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
    }

    .brand-tagline {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
      font-weight: var(--font-weight-medium);
      padding: var(--spacing-1) var(--spacing-2);
      background: var(--color-gray-100);
      border-radius: var(--radius-full);
    }

    // Mobile Menu Button
    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--spacing-2);
      z-index: 1001;
      border-radius: var(--radius-md);
      transition: background-color var(--transition-normal);
    }

    .mobile-menu-btn:hover {
      background-color: var(--color-gray-100);
    }

    .hamburger-line {
      width: 24px;
      height: 2px;
      background-color: var(--color-text-primary);
      margin: 2px 0;
      transition: all var(--transition-normal);
      transform-origin: center;
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    .nav-link {
      position: relative;
      text-decoration: none;
      color: var(--color-text-primary);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      padding: var(--spacing-3) var(--spacing-4);
      border-radius: var(--radius-full);
      transition: all var(--transition-normal);
      white-space: nowrap;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: all var(--transition-normal);
      transform: translateX(-50%);
      border-radius: 2px;
    }

    .nav-link:hover,
    .nav-link:focus,
    .nav-link.active {
      color: var(--color-primary);
      background-color: rgba(0, 122, 255, 0.1);
    }

    .nav-link:hover::before,
    .nav-link.active::before {
      width: 100%;
    }


    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
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
      position: relative;
      overflow: hidden;
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
      box-shadow: var(--shadow-sm);
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }

    .btn svg {
      flex-shrink: 0;
      transition: transform var(--transition-normal);
    }

    .btn:hover svg {
      transform: translateX(1px);
    }

    // Page Loader Styles
    .page-loader {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--z-modal);
      opacity: 0;
      visibility: hidden;
      transition: all var(--transition-normal);
    }

    .page-loader.active {
      opacity: 1;
      visibility: visible;
    }

    .loader-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-4);
    }

    .loader-spinner {
      animation: spin 2s linear infinite;
    }

    .loader-text {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-secondary);
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    // Footer Styles
    .footer {
      position: relative;
      background: var(--color-gray-900);
      color: white;
      margin-top: var(--spacing-24);
    }

    .footer-wave {
      position: absolute;
      top: -60px;
      left: 0;
      width: 100%;
      height: 60px;
      overflow: hidden;
      z-index: 1;
    }

    .footer-wave svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .footer-content {
      position: relative;
      z-index: 2;
      padding: var(--spacing-16) 0 var(--spacing-8);
    }

    .footer-top {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: var(--spacing-16);
      margin-bottom: var(--spacing-16);
      align-items: start;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-6);
    }

    .footer-logo {
      flex-shrink: 0;
    }

    .footer-title {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-2);
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-subtitle {
      font-size: var(--font-size-base);
      color: var(--color-gray-400);
      font-weight: var(--font-weight-medium);
    }

    .footer-description p {
      font-size: var(--font-size-lg);
      line-height: 1.7;
      color: var(--color-gray-300);
      margin-bottom: var(--spacing-6);
    }

    .footer-badges {
      display: flex;
      gap: var(--spacing-4);
      flex-wrap: wrap;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: var(--spacing-2) var(--spacing-4);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-gray-200);
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-10);
      margin-bottom: var(--spacing-12);
    }

    .column-title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: white;
      margin-bottom: var(--spacing-4);
    }

    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .link-list li {
      margin-bottom: var(--spacing-2);
    }

    .link-list a {
      color: var(--color-gray-300);
      text-decoration: none;
      font-size: var(--font-size-base);
      transition: color var(--transition-normal);
      display: inline-block;
      padding: var(--spacing-1) 0;
    }

    .link-list a:hover {
      color: var(--color-primary);
      transform: translateX(4px);
    }

    .contact-methods {
      margin-bottom: var(--spacing-6);
    }

    .contact-method {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-3);
      margin-bottom: var(--spacing-4);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
    }

    .contact-label {
      font-size: var(--font-size-sm);
      color: var(--color-gray-400);
      font-weight: var(--font-weight-medium);
    }

    .contact-value {
      font-size: var(--font-size-base);
      color: white;
      text-decoration: none;
      font-weight: var(--font-weight-medium);
    }

    .contact-value:hover {
      color: var(--color-primary);
    }

    .emergency-notice {
      background: rgba(255, 59, 48, 0.1);
      border: 1px solid rgba(255, 59, 48, 0.3);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
    }

    .emergency-notice p {
      margin: 0;
      font-size: var(--font-size-sm);
      color: var(--color-gray-200);
    }

    .emergency-notice strong {
      color: var(--color-warning);
    }

    .emergency-notice a {
      color: var(--color-warning);
      text-decoration: none;
      font-weight: var(--font-weight-semibold);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--spacing-8);
      border-top: 1px solid var(--color-gray-700);
    }

    .footer-legal {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    .copyright {
      font-size: var(--font-size-sm);
      color: var(--color-gray-400);
      margin: 0;
    }

    .legal-links {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      flex-wrap: wrap;
    }

    .legal-links a {
      font-size: var(--font-size-sm);
      color: var(--color-gray-300);
      text-decoration: none;
      transition: color var(--transition-normal);
    }

    .legal-links a:hover {
      color: var(--color-primary);
    }

    .legal-links .divider {
      color: var(--color-gray-600);
      font-size: var(--font-size-sm);
    }

    .social-links {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .social-label {
      font-size: var(--font-size-sm);
      color: var(--color-gray-400);
      font-weight: var(--font-weight-medium);
      margin-right: var(--spacing-2);
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-full);
      color: var(--color-gray-300);
      transition: all var(--transition-normal);
    }

    .social-link:hover {
      transform: translateY(-2px);
      background: var(--color-primary);
      color: white;
      box-shadow: var(--shadow-lg);
    }

    // Mobile Responsive Design
    @media (max-width: 1024px) {
      .footer-top {
        grid-template-columns: 1fr;
        gap: var(--spacing-12);
        text-align: center;
      }

      .footer-links {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-8);
      }
    }

    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: flex;
      }

      .main-content {
        padding-top: 70px;
      }

      .navbar {
        padding: var(--spacing-3) 0;
      }

      .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .brand-text {
        font-size: var(--font-size-xl);
      }

      .brand-tagline {
        display: none;
      }

      .navbar-center {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--spacing-8);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: 1000;
      }

      .navbar-center.mobile-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        flex-direction: column;
        gap: var(--spacing-6);
        text-align: center;
      }

      .navbar-right {
        display: none;
      }

      .nav-link {
        font-size: var(--font-size-xl);
        padding: var(--spacing-4) var(--spacing-6);
      }

      .footer-links {
        grid-template-columns: 1fr;
        gap: var(--spacing-8);
        text-align: center;
      }

      .footer-bottom {
        flex-direction: column;
        gap: var(--spacing-6);
        text-align: center;
      }

      .legal-links {
        justify-content: center;
      }

      .social-links {
        justify-content: center;
      }

      .footer-badges {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer-links {
        grid-template-columns: 1fr;
      }

      .contact-method {
        justify-content: center;
        text-align: center;
      }

      .btn span {
        display: none;
      }
    }
  `]
})
export class PublicLayoutComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  isScrolled = false;
  isMobileMenuOpen = false;
  currentRoute = '';
  isLoading = false;
  isChangingLanguage = false;

  private languageChangeSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    // Track router events for loading state and active route highlighting
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
        this.currentRoute = event.urlAfterRedirects;
        // Close mobile menu on navigation
        this.isMobileMenuOpen = false;
      }
    });

    // Subscribe to language change state
    this.languageChangeSubscription = this.languageService.isChangingLanguage$.subscribe(
      isChanging => this.isChangingLanguage = isChanging
    );

    // Handle scroll events for header styling
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

  }

  private handleScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scrolling when menu is open
    if (typeof document !== 'undefined') {
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }



  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    // Restore body scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    // Clean up language change subscription
    this.languageChangeSubscription.unsubscribe();
  }
}