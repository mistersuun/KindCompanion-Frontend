import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { CustomSelectComponent, SelectOption } from '../../shared/components/custom-select/custom-select.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, LoadingComponent, CustomSelectComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'Loading Contact Information...'"
      [subMessage]="'Preparing our contact details and consultation form'"
      [fullscreen]="true">
    </app-loading>

    <div class="contact-page" *ngIf="!isLoading">
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">{{ 'contact.hero.title' | translate }}</h1>
            <p class="hero-description">{{ 'contact.hero.description' | translate }}</p>
          </div>
        </div>
        <!-- Hero Wave -->
        <div class="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--color-background)"></path>
          </svg>
        </div>
      </section>

      <!-- Contact Methods -->
      <section class="contact-methods">
        <div class="container">
          <div class="methods-grid">
            <!-- Phone Contact -->
            <div class="method-card">
              <div class="method-icon">
                <svg width="32" height="32" fill="var(--color-primary)" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </div>
              <h3 class="method-title">{{ 'contact.phone.title' | translate }}</h3>
              <p class="method-description">{{ 'contact.phone.description' | translate }}</p>
              <div class="contact-details">
                <a href="tel:+1-514-555-0123" class="contact-link main-phone">(514) 555-0123</a>
                <span class="contact-hours">{{ 'contact.phone.hours' | translate }}</span>
                <a href="tel:+1-514-555-0911" class="contact-link emergency">{{ 'contact.phone.emergency' | translate }}</a>
              </div>
            </div>

            <!-- Email Contact -->
            <div class="method-card">
              <div class="method-icon">
                <svg width="32" height="32" fill="var(--color-accent)" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 0 4v.993c0 .266.164.7.395 1.057a2.4 2.4 0 0 0 .44.492c.187.167.432.328.709.455.28.129.588.216.916.24h8.08c.328-.024.636-.111.916-.24.277-.127.522-.288.709-.455a2.4 2.4 0 0 0 .44-.492c.23-.357.395-.791.395-1.057V4A2 2 0 0 0 14 2H2zm12.5 1.988a2.14 2.14 0 0 1-.316-.395 1.4 1.4 0 0 1-.264-.295 1.5 1.5 0 0 1-.422-.267c-.167-.118-.364-.21-.578-.268L8 5.494 3.08 2.763c-.214.058-.41.15-.578.268a1.5 1.5 0 0 1-.422.267 1.4 1.4 0 0 1-.264.295c-.11.127-.2.26-.316.395V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v-.012zM0 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6c0 .5-.777 1.5-2 1.5H2C.777 7.5 0 6.5 0 6z"/>
                </svg>
              </div>
              <h3 class="method-title">{{ 'contact.email.title' | translate }}</h3>
              <p class="method-description">{{ 'contact.email.description' | translate }}</p>
              <div class="contact-details">
                <a href="mailto:volunteers@kindcompanion.com" class="contact-link">volunteers@kindcompanion.com</a>
                <a href="mailto:info@kindcompanion.com" class="contact-link">info@kindcompanion.com</a>
                <span class="contact-hours">{{ 'contact.email.response' | translate }}</span>
              </div>
            </div>

            <!-- Visit Us -->
            <div class="method-card">
              <div class="method-icon">
                <svg width="32" height="32" fill="var(--color-secondary)" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 4z"/>
                </svg>
              </div>
              <h3 class="method-title">{{ 'contact.visit.title' | translate }}</h3>
              <p class="method-description">{{ 'contact.visit.description' | translate }}</p>
              <div class="contact-details">
                <address class="office-address">
                  <strong>KindCompanion Montreal</strong><br>
                  <span>{{ 'contact.address.street' | translate }}</span><br>
                  <span>{{ 'contact.address.city' | translate }}</span><br>
                  <span>{{ 'contact.address.country' | translate }}</span>
                </address>
                <span class="contact-hours">{{ 'contact.visit.hours' | translate }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="contact-form-section">
        <div class="container">
          <div class="form-content">
            <div class="form-header">
              <h2 class="form-title">{{ 'contact.form.title' | translate }}</h2>
              <p class="form-description">{{ 'contact.form.description' | translate }}</p>
            </div>

            <form class="consultation-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-grid">
                <!-- Personal Information -->
                <div class="form-group">
                  <label for="firstName" class="form-label">{{ 'contact.form.firstName' | translate }}</label>
                  <input type="text"
                         id="firstName"
                         name="firstName"
                         class="form-input"
                         [(ngModel)]="formData.firstName"
                         required>
                </div>

                <div class="form-group">
                  <label for="lastName" class="form-label">{{ 'contact.form.lastName' | translate }}</label>
                  <input type="text"
                         id="lastName"
                         name="lastName"
                         class="form-input"
                         [(ngModel)]="formData.lastName"
                         required>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">{{ 'contact.form.email' | translate }}</label>
                  <input type="email"
                         id="email"
                         name="email"
                         class="form-input"
                         [(ngModel)]="formData.email"
                         required>
                </div>

                <div class="form-group">
                  <label for="phone" class="form-label">{{ 'contact.form.phone' | translate }}</label>
                  <input type="tel"
                         id="phone"
                         name="phone"
                         class="form-input"
                         [(ngModel)]="formData.phone"
                         required>
                </div>

                <!-- Service Details -->
                <div class="form-group full-width filter-group">
                  <label for="relationship" class="form-label filter-label">{{ 'contact.form.relationship' | translate }}</label>
                  <app-custom-select
                    [options]="relationshipOptions"
                    [placeholder]="'contact.form.relationshipOptions.select' | translate"
                    [(ngModel)]="formData.relationship">
                  </app-custom-select>
                </div>

                <div class="form-group full-width">
                  <label for="services" class="form-label">{{ 'contact.form.services' | translate }}</label>
                  <div class="checkbox-group">
                    <label class="checkbox-item">
                      <input type="checkbox" [(ngModel)]="formData.services.companionship" name="companionship">
                      <span class="checkbox-label">{{ 'contact.form.servicesOptions.companionship' | translate }}</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" [(ngModel)]="formData.services.mobility" name="mobility">
                      <span class="checkbox-label">{{ 'contact.form.servicesOptions.mobility' | translate }}</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" [(ngModel)]="formData.services.technology" name="technology">
                      <span class="checkbox-label">{{ 'contact.form.servicesOptions.technology' | translate }}</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" [(ngModel)]="formData.services.errands" name="errands">
                      <span class="checkbox-label">{{ 'contact.form.servicesOptions.errands' | translate }}</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" [(ngModel)]="formData.services.meals" name="meals">
                      <span class="checkbox-label">{{ 'contact.form.servicesOptions.meals' | translate }}</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" [(ngModel)]="formData.services.respite" name="respite">
                      <span class="checkbox-label">{{ 'contact.form.servicesOptions.respite' | translate }}</span>
                    </label>
                  </div>
                </div>

                <div class="form-group full-width filter-group">
                  <label for="urgency" class="form-label filter-label">{{ 'contact.form.urgency' | translate }}</label>
                  <app-custom-select
                    [options]="urgencyOptions"
                    [placeholder]="'contact.form.urgencyOptions.select' | translate"
                    [(ngModel)]="formData.urgency">
                  </app-custom-select>
                </div>

                <div class="form-group full-width">
                  <label for="message" class="form-label">{{ 'contact.form.message' | translate }}</label>
                  <textarea id="message"
                            name="message"
                            class="form-textarea"
                            rows="4"
                            [(ngModel)]="formData.message"
                            [placeholder]="'contact.form.messagePlaceholder' | translate"></textarea>
                </div>

                <!-- Privacy and Consent -->
                <div class="form-group full-width">
                  <label class="checkbox-item privacy-consent">
                    <input type="checkbox" [(ngModel)]="formData.privacyConsent" name="privacyConsent" required>
                    <span class="checkbox-label">{{ 'contact.form.privacy' | translate }}</span>
                  </label>
                </div>
              </div>

              <div class="form-actions">
                <button type="submit"
                        class="btn btn-primary btn-lg"
                        [disabled]="!contactForm.valid || isSubmitting">
                  <svg *ngIf="!isSubmitting" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2A2 2 0 0 0 0 4v.993c0 .266.164.7.395 1.057a2.4 2.4 0 0 0 .44.492c.187.167.432.328.709.455.28.129.588.216.916.24h8.08c.328-.024.636-.111.916-.24.277-.127.522-.288.709-.455a2.4 2.4 0 0 0 .44-.492c.23-.357.395-.791.395-1.057V4A2 2 0 0 0 14 2H2z"/>
                  </svg>
                  <div *ngIf="isSubmitting" class="spinner"></div>
                  <span>{{ isSubmitting ? ('contact.form.sending' | translate) : ('contact.form.submit' | translate) }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <h2 class="section-title">{{ 'contact.faq.title' | translate }}</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3 class="faq-question">{{ 'contact.faq.cost.question' | translate }}</h3>
              <p class="faq-answer">{{ 'contact.faq.cost.answer' | translate }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">{{ 'contact.faq.screening.question' | translate }}</h3>
              <p class="faq-answer">{{ 'contact.faq.screening.answer' | translate }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">{{ 'contact.faq.emergency.question' | translate }}</h3>
              <p class="faq-answer">{{ 'contact.faq.emergency.answer' | translate }}</p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">{{ 'contact.faq.start.question' | translate }}</h3>
              <p class="faq-answer">{{ 'contact.faq.start.answer' | translate }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-page {
      background: var(--color-background);
      overflow: visible;
    }

    // Hero Section
    .contact-hero {
      position: relative;
      padding: var(--spacing-20) 0 var(--spacing-16);
      background: var(--gradient-warm);
      text-align: center;
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
      margin: 0 auto;
      line-height: 1.6;
    }

    // Contact Methods
    .contact-methods {
      padding: var(--spacing-20) 0;
    }

    .methods-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--spacing-8);
    }

    .method-card {
      background: var(--color-surface);
      border-radius: var(--radius-2xl);
      padding: var(--spacing-8);
      text-align: center;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      border: 1px solid var(--color-beige-200);
    }

    .method-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }

    .method-icon {
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

    .method-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .method-description {
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-6);
      line-height: 1.6;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }

    .contact-link {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-lg);
      transition: color var(--transition-normal);
    }

    .contact-link:hover {
      color: var(--color-primary-dark);
    }

    .contact-link.emergency {
      color: var(--color-warning);
      font-size: var(--font-size-base);
    }

    .contact-hours {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
    }

    .office-address {
      font-style: normal;
      line-height: 1.6;
      color: var(--color-text-secondary);
    }

    // Contact Form
    .contact-form-section {
      padding: var(--spacing-20) 0;
      background: var(--color-beige-50);
      overflow: visible;
    }

    .form-header {
      text-align: center;
      margin-bottom: var(--spacing-12);
    }

    .form-title {
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
    }

    .form-description {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .consultation-form {
      background: var(--color-surface);
      border-radius: var(--radius-2xl);
      padding: var(--spacing-10);
      box-shadow: var(--shadow-lg);
      max-width: 800px;
      margin: 0 auto;
      overflow: visible;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-6);
      overflow: visible;
    }

    .form-group {
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

    /* Apply filter-group styling to select form groups */
    .form-group.filter-group {
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

    .form-group.filter-group::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transition: transform var(--transition-normal);
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }

    .form-group.filter-group:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary-light);
    }

    .form-group.filter-group:hover::before {
      transform: scaleX(1);
    }

    /* Style filter labels to match companions page */
    .form-group.filter-group .filter-label {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
      margin-bottom: var(--spacing-4);
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .form-group::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transition: transform var(--transition-normal);
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }

    .form-group:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary-light);
    }

    .form-group:hover::before {
      transform: scaleX(1);
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    .form-label {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
      margin-bottom: var(--spacing-4);
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    .form-input,
    .form-textarea {
      padding: var(--spacing-4) var(--spacing-5);
      border: 2px solid var(--color-beige-300);
      border-radius: var(--radius-lg);
      font-size: var(--font-size-base);
      font-family: var(--font-family-primary);
      transition: all var(--transition-normal);
      background: var(--color-surface);
      color: var(--color-text-primary);
      box-shadow: var(--shadow-sm);
      min-height: 48px;
      width: 100%;
      display: block;
    }


    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1), var(--shadow-md);
      transform: translateY(-1px);
    }


    .checkbox-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-3);
      margin-top: var(--spacing-2);
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      cursor: pointer;
      padding: var(--spacing-2);
      border-radius: var(--radius-md);
      transition: background-color var(--transition-normal);
    }

    .checkbox-item:hover {
      background-color: var(--color-beige-100);
    }

    .checkbox-item input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: var(--color-primary);
    }

    .checkbox-label {
      font-size: var(--font-size-base);
      color: var(--color-text-primary);
    }

    .privacy-consent {
      background: var(--color-beige-50);
      padding: var(--spacing-4);
      border-radius: var(--radius-lg);
      margin-top: var(--spacing-4);
    }

    .privacy-consent a {
      color: var(--color-primary);
      text-decoration: none;
    }

    .privacy-consent a:hover {
      text-decoration: underline;
    }

    .form-actions {
      margin-top: var(--spacing-8);
      display: flex;
      justify-content: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2);
      padding: var(--spacing-4) var(--spacing-8);
      border: none;
      border-radius: var(--radius-full);
      font-family: var(--font-family-primary);
      font-weight: var(--font-weight-semibold);
      text-decoration: none;
      cursor: pointer;
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .btn-primary {
      background: var(--gradient-primary);
      color: white;
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }

    .btn-primary:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }

    .btn-lg {
      padding: var(--spacing-5) var(--spacing-10);
      font-size: var(--font-size-lg);
      min-height: 56px;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    // FAQ Section
    .faq-section {
      padding: var(--spacing-20) 0;
    }

    .section-title {
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      text-align: center;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-12);
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-8);
    }

    .faq-item {
      background: var(--color-surface);
      padding: var(--spacing-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-beige-200);
    }

    .faq-question {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-3);
    }

    .faq-answer {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    // Mobile Responsiveness
    @media (max-width: 768px) {
      .hero-title {
        font-size: var(--font-size-3xl);
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .consultation-form {
        padding: var(--spacing-6);
      }

      .checkbox-group {
        grid-template-columns: 1fr;
      }

      .methods-grid,
      .faq-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  isLoading = true;
  isSubmitting = false;

  // Select options for custom selects
  relationshipOptions: SelectOption[] = [];
  urgencyOptions: SelectOption[] = [];

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    relationship: '',
    services: {
      companionship: false,
      mobility: false,
      technology: false,
      errands: false,
      meals: false,
      respite: false
    },
    urgency: '',
    message: '',
    privacyConsent: false
  };

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    // Initialize select options
    this.initializeSelectOptions();

    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 1100);
  }

  private initializeSelectOptions() {
    // Relationship options
    this.relationshipOptions = [
      { value: 'student', label: this.translateService.instant('contact.form.relationshipOptions.student') },
      { value: 'community-service', label: this.translateService.instant('contact.form.relationshipOptions.communityService') },
      { value: 'court-ordered', label: this.translateService.instant('contact.form.relationshipOptions.courtOrdered') },
      { value: 'personal-growth', label: this.translateService.instant('contact.form.relationshipOptions.personalGrowth') },
      { value: 'career-development', label: this.translateService.instant('contact.form.relationshipOptions.careerDevelopment') },
      { value: 'retirement-volunteer', label: this.translateService.instant('contact.form.relationshipOptions.retirementVolunteer') }
    ];

    // Urgency options
    this.urgencyOptions = [
      { value: 'immediately', label: this.translateService.instant('contact.form.urgencyOptions.immediately') },
      { value: 'within-week', label: this.translateService.instant('contact.form.urgencyOptions.week') },
      { value: 'within-month', label: this.translateService.instant('contact.form.urgencyOptions.month') },
      { value: 'planning-ahead', label: this.translateService.instant('contact.form.urgencyOptions.planning') }
    ];
  }

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // TODO: Implement actual form submission
    console.log('Form submitted:', this.formData);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      alert('Thank you for your interest! We will contact you within 24 hours.');
      this.resetForm();
    }, 2000);
  }

  private resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      relationship: '',
      services: {
        companionship: false,
        mobility: false,
        technology: false,
        errands: false,
        meals: false,
        respite: false
      },
      urgency: '',
      message: '',
      privacyConsent: false
    };
  }
}