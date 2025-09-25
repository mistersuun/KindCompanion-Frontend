import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CustomSelectComponent, SelectOption } from '../../shared/components/custom-select/custom-select.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, CustomSelectComponent],
  template: `
    <div class="booking-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">{{ 'booking.hero.title' | translate }}</h1>
            <p class="hero-subtitle">{{ 'booking.hero.subtitle' | translate }}</p>
            <div class="hero-badges">
              <div class="badge">
                <span class="badge-icon">✓</span>
                <span>{{ 'booking.hero.badge.free' | translate }}</span>
              </div>
              <div class="badge">
                <span class="badge-icon">🎯</span>
                <span>{{ 'booking.hero.badge.flexible' | translate }}</span>
              </div>
              <div class="badge">
                <span class="badge-icon">🎆</span>
                <span>{{ 'booking.hero.badge.meaningful' | translate }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--color-background)"></path>
          </svg>
        </div>
      </section>

      <!-- Booking Form Section -->
      <section class="form-section">
        <div class="container">
          <div class="form-container">
            <div class="form-header">
              <h2>{{ 'booking.form.title' | translate }}</h2>
              <p>{{ 'booking.form.subtitle' | translate }}</p>
            </div>

            <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="booking-form">
              <!-- Personal Information -->
              <div class="form-section-group">
                <h3 class="section-title">{{ 'booking.personal.title' | translate }}</h3>

                <div class="form-row">
                  <div class="form-group">
                    <label for="firstName">{{ 'booking.personal.firstName' | translate }}</label>
                    <input
                      id="firstName"
                      type="text"
                      formControlName="firstName"
                      class="form-control"
                      [class.error]="bookingForm.get('firstName')?.invalid && bookingForm.get('firstName')?.touched"
                    >
                    <div class="error-message" *ngIf="bookingForm.get('firstName')?.invalid && bookingForm.get('firstName')?.touched">
                      <span>{{ 'booking.personal.firstName.error' | translate }}</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="lastName">{{ 'booking.personal.lastName' | translate }}</label>
                    <input
                      id="lastName"
                      type="text"
                      formControlName="lastName"
                      class="form-control"
                      [class.error]="bookingForm.get('lastName')?.invalid && bookingForm.get('lastName')?.touched"
                    >
                    <div class="error-message" *ngIf="bookingForm.get('lastName')?.invalid && bookingForm.get('lastName')?.touched">
                      <span>{{ 'booking.personal.lastName.error' | translate }}</span>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="email">{{ 'booking.personal.email' | translate }}</label>
                    <input
                      id="email"
                      type="email"
                      formControlName="email"
                      class="form-control"
                      [class.error]="bookingForm.get('email')?.invalid && bookingForm.get('email')?.touched"
                    >
                    <div class="error-message" *ngIf="bookingForm.get('email')?.invalid && bookingForm.get('email')?.touched">
                      <span *ngIf="bookingForm.get('email')?.errors?.['required']">{{ 'booking.personal.email.required' | translate }}</span>
                      <span *ngIf="bookingForm.get('email')?.errors?.['email']">{{ 'booking.personal.email.invalid' | translate }}</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="phone">{{ 'booking.personal.phone' | translate }}</label>
                    <input
                      id="phone"
                      type="tel"
                      formControlName="phone"
                      class="form-control"
                      placeholder="(514) 555-0123"
                      [class.error]="bookingForm.get('phone')?.invalid && bookingForm.get('phone')?.touched"
                    >
                    <div class="error-message" *ngIf="bookingForm.get('phone')?.invalid && bookingForm.get('phone')?.touched">
                      <span>{{ 'booking.personal.phone.error' | translate }}</span>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="relationshipToClient">{{ 'booking.personal.relationship' | translate }}</label>
                  <app-custom-select
                    [options]="relationshipOptions"
                    [placeholder]="'Select relationship'"
                    [hasError]="!!(bookingForm.get('relationshipToClient')?.invalid && bookingForm.get('relationshipToClient')?.touched)"
                    formControlName="relationshipToClient">
                  </app-custom-select>
                  <div class="error-message" *ngIf="bookingForm.get('relationshipToClient')?.invalid && bookingForm.get('relationshipToClient')?.touched">
                    <span>{{ 'booking.personal.relationship.error' | translate }}</span>
                  </div>
                </div>
              </div>

              <!-- Client Information -->
              <div class="form-section-group">
                <h3 class="section-title">{{ 'booking.client.title' | translate }}</h3>

                <div class="form-row">
                  <div class="form-group">
                    <label for="clientAge">{{ 'booking.client.age' | translate }}</label>
                    <app-custom-select
                      [options]="ageOptions"
                      [placeholder]="'Select age range'"
                      formControlName="clientAge">
                    </app-custom-select>
                  </div>

                  <div class="form-group">
                    <label for="livingArrangement">{{ 'booking.client.living' | translate }}</label>
                    <app-custom-select
                      [options]="livingArrangementOptions"
                      [placeholder]="'Select living situation'"
                      formControlName="livingArrangement">
                    </app-custom-select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="address">{{ 'booking.client.address' | translate }}</label>
                  <textarea
                    id="address"
                    formControlName="address"
                    class="form-control"
                    rows="2"
                    placeholder="Enter the address where services would be provided"
                  ></textarea>
                  <small class="form-help">{{ 'booking.client.address.help' | translate }}</small>
                </div>
              </div>

              <!-- Care Needs -->
              <div class="form-section-group">
                <h3 class="section-title">{{ 'booking.needs.title' | translate }}</h3>

                <div class="form-group">
                  <label>{{ 'booking.needs.services' | translate }}</label>
                  <div class="checkbox-group">
                    <label class="checkbox-label">
                      <input type="checkbox" formControlName="needCompanionship">
                      <span class="checkmark"></span>
                      <span>{{ 'booking.needs.companionship' | translate }}</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" formControlName="needMobility">
                      <span class="checkmark"></span>
                      <span>{{ 'booking.needs.mobility' | translate }}</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" formControlName="needTechnology">
                      <span class="checkmark"></span>
                      <span>{{ 'booking.needs.technology' | translate }}</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" formControlName="needErrands">
                      <span class="checkmark"></span>
                      <span>{{ 'booking.needs.errands' | translate }}</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" formControlName="needMeals">
                      <span class="checkmark"></span>
                      <span>{{ 'booking.needs.meals' | translate }}</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" formControlName="needRespite">
                      <span class="checkmark"></span>
                      <span>{{ 'booking.needs.respite' | translate }}</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="urgency">{{ 'booking.needs.urgency' | translate }}</label>
                    <app-custom-select
                      [options]="urgencyOptions"
                      [placeholder]="'Select timeframe'"
                      formControlName="urgency">
                    </app-custom-select>
                  </div>

                  <div class="form-group">
                    <label for="hoursNeeded">{{ 'booking.needs.hours' | translate }}</label>
                    <app-custom-select
                      [options]="hoursNeededOptions"
                      [placeholder]="'Select hours'"
                      formControlName="hoursNeeded">
                    </app-custom-select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="preferredTimes">{{ 'booking.needs.times' | translate }}</label>
                  <textarea
                    id="preferredTimes"
                    formControlName="preferredTimes"
                    class="form-control"
                    rows="3"
                    placeholder="e.g., Monday-Friday mornings, weekends, evenings, specific days..."
                  ></textarea>
                </div>
              </div>

              <!-- Additional Information -->
              <div class="form-section-group">
                <h3 class="section-title">{{ 'booking.additional.title' | translate }}</h3>

                <div class="form-group">
                  <label for="medicalConditions">{{ 'booking.additional.medical' | translate }}</label>
                  <textarea
                    id="medicalConditions"
                    formControlName="medicalConditions"
                    class="form-control"
                    rows="3"
                    placeholder="Please share any medical conditions, mobility challenges, dietary restrictions, or special care needs we should know about..."
                  ></textarea>
                  <small class="form-help">{{ 'booking.additional.medical.help' | translate }}</small>
                </div>

                <div class="form-group">
                  <label for="additionalNotes">{{ 'booking.additional.notes' | translate }}</label>
                  <textarea
                    id="additionalNotes"
                    formControlName="additionalNotes"
                    class="form-control"
                    rows="4"
                    placeholder="Tell us more about what you're looking for, any specific preferences for companions, questions about our services, or anything else we should know..."
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="preferredConsultationTime">{{ 'booking.additional.consultation' | translate }}</label>
                  <app-custom-select
                    [options]="consultationTimeOptions"
                    [placeholder]="'Select preferred time'"
                    formControlName="preferredConsultationTime">
                  </app-custom-select>
                </div>
              </div>

              <!-- Consent & Privacy -->
              <div class="form-section-group">
                <div class="consent-group">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      formControlName="privacyConsent"
                      [class.error]="bookingForm.get('privacyConsent')?.invalid && bookingForm.get('privacyConsent')?.touched"
                    >
                    <span class="checkmark"></span>
                    <span>{{ 'booking.consent.privacy' | translate }}</span>
                  </label>
                  <div class="error-message" *ngIf="bookingForm.get('privacyConsent')?.invalid && bookingForm.get('privacyConsent')?.touched">
                    <span>{{ 'booking.consent.privacy.error' | translate }}</span>
                  </div>

                  <label class="checkbox-label">
                    <input type="checkbox" formControlName="marketingOptIn">
                    <span class="checkmark"></span>
                    <span>{{ 'booking.consent.marketing' | translate }}</span>
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="form-actions">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  [disabled]="bookingForm.invalid || isSubmitting"
                >
                  <span *ngIf="!isSubmitting">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <span>{{ 'booking.submit.text' | translate }}</span>
                  </span>
                  <span *ngIf="isSubmitting" class="loading-text">
                    <div class="spinner"></div>
                    <span>{{ 'booking.submit.loading' | translate }}</span>
                  </span>
                </button>
                <p class="form-footer-text">{{ 'booking.submit.footer' | translate }}
                  We'll contact you within 24 hours to schedule your free consultation.
                  For immediate assistance, call <a href="tel:+1-514-555-0123">(514) 555-0123</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Success Message -->
      <div class="success-overlay" [class.show]="showSuccess" (click)="closeSuccess()">
        <div class="success-modal" (click)="$event.stopPropagation()">
          <div class="success-content">
            <div class="success-icon">✓</div>
            <h2>{{ 'booking.success.title' | translate }}</h2>
            <p>{{ 'booking.success.message' | translate }}</p>
            <div class="next-steps">
              <h3>{{ 'booking.success.nextSteps' | translate }}</h3>
              <ol>
                <li>{{ 'booking.success.step1' | translate }}</li>
                <li>{{ 'booking.success.step2' | translate }}</li>
                <li>{{ 'booking.success.step3' | translate }}</li>
              </ol>
            </div>
            <button class="btn btn-primary" (click)="closeSuccess()">{{ 'booking.success.close' | translate }}</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .booking-page {
      min-height: 100vh;
      background: var(--color-background);
    }

    // Hero Section
    .hero-section {
      background: var(--gradient-primary);
      color: white;
      padding: var(--spacing-20) 0 var(--spacing-16);
      text-align: center;
      position: relative;
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
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-6);
    }

    .hero-subtitle {
      font-size: var(--font-size-lg);
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto var(--spacing-8);
      line-height: 1.6;
    }

    .hero-badges {
      display: flex;
      justify-content: center;
      gap: var(--spacing-6);
      flex-wrap: wrap;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      background: rgba(255, 255, 255, 0.2);
      padding: var(--spacing-3) var(--spacing-4);
      border-radius: var(--radius-full);
      font-weight: var(--font-weight-medium);
    }

    .badge-icon {
      font-size: var(--font-size-lg);
    }

    // Form Section
    .form-section {
      padding: var(--spacing-20) 0;
    }

    .form-container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: var(--spacing-10);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
    }

    .form-header {
      text-align: center;
      margin-bottom: var(--spacing-10);
    }

    .form-header h2 {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
    }

    .form-header p {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
    }

    // Form Groups
    .form-section-group {
      margin-bottom: var(--spacing-10);
      padding: var(--spacing-8);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-lg);
      background: var(--color-gray-50);
    }

    .section-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-primary);
      margin-bottom: var(--spacing-6);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .section-title::before {
      content: '';
      width: 4px;
      height: 24px;
      background: var(--color-primary);
      border-radius: 2px;
    }

    // Form Controls
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-6);
      margin-bottom: var(--spacing-6);
    }

    .form-group {
      margin-bottom: var(--spacing-6);
    }

    .form-group label {
      display: block;
      font-weight: var(--font-weight-medium);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-2);
    }

    .form-control {
      width: 100%;
      padding: var(--spacing-3) var(--spacing-4);
      border: 2px solid var(--color-gray-300);
      border-radius: var(--radius-md);
      font-size: var(--font-size-base);
      transition: all var(--transition-normal);
      background: white;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
    }

    .form-control.error {
      border-color: var(--color-error);
    }

    .form-control:disabled {
      background: var(--color-gray-100);
      cursor: not-allowed;
    }

    .form-help {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
      margin-top: var(--spacing-1);
    }

    .error-message {
      color: var(--color-error);
      font-size: var(--font-size-sm);
      margin-top: var(--spacing-1);
      display: block;
    }

    // Checkboxes
    .checkbox-group {
      display: grid;
      gap: var(--spacing-3);
    }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-3);
      cursor: pointer;
      padding: var(--spacing-3);
      border-radius: var(--radius-md);
      transition: background-color var(--transition-normal);
    }

    .checkbox-label:hover {
      background: rgba(0, 122, 255, 0.05);
    }

    .checkbox-label input[type="checkbox"] {
      display: none;
    }

    .checkmark {
      width: 20px;
      height: 20px;
      border: 2px solid var(--color-gray-400);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-normal);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .checkbox-label input[type="checkbox"]:checked + .checkmark {
      background: var(--color-primary);
      border-color: var(--color-primary);
    }

    .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
      content: '✓';
      color: white;
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-bold);
    }

    // Consent Group
    .consent-group {
      background: white;
      padding: var(--spacing-6);
      border-radius: var(--radius-md);
      border: 1px solid var(--color-gray-200);
    }

    .consent-group .checkbox-label {
      font-size: var(--font-size-sm);
      line-height: 1.5;
    }

    .consent-group a {
      color: var(--color-primary);
      text-decoration: underline;
    }

    // Form Actions
    .form-actions {
      text-align: center;
      padding-top: var(--spacing-8);
      border-top: 1px solid var(--color-gray-200);
    }

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
    }

    .btn-primary {
      background: var(--gradient-primary);
      color: white;
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .btn-lg {
      padding: var(--spacing-4) var(--spacing-10);
      font-size: var(--font-size-lg);
    }

    .loading-text {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .form-footer-text {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      margin-top: var(--spacing-4);
      line-height: 1.5;
    }

    .form-footer-text a {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
    }

    // Success Modal
    .success-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      z-index: var(--z-modal);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all var(--transition-normal);
    }

    .success-overlay.show {
      opacity: 1;
      visibility: visible;
    }

    .success-modal {
      background: white;
      border-radius: var(--radius-xl);
      padding: var(--spacing-10);
      max-width: 500px;
      width: 90vw;
      max-height: 80vh;
      overflow-y: auto;
      transform: scale(0.9);
      transition: transform var(--transition-normal);
    }

    .success-overlay.show .success-modal {
      transform: scale(1);
    }

    .success-content {
      text-align: center;
    }

    .success-icon {
      width: 80px;
      height: 80px;
      background: var(--color-secondary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
      margin: 0 auto var(--spacing-6);
    }

    .success-content h2 {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
    }

    .success-content p {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-6);
    }

    .next-steps {
      background: var(--color-gray-50);
      padding: var(--spacing-6);
      border-radius: var(--radius-lg);
      margin-bottom: var(--spacing-8);
      text-align: left;
    }

    .next-steps h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-4);
      color: var(--color-text-primary);
    }

    .next-steps ol {
      padding-left: var(--spacing-5);
    }

    .next-steps li {
      margin-bottom: var(--spacing-2);
      color: var(--color-text-secondary);
    }

    // Responsive Design
    @media (max-width: 768px) {
      .hero-title {
        font-size: var(--font-size-2xl);
      }

      .hero-badges {
        gap: var(--spacing-4);
      }

      .form-container {
        padding: var(--spacing-6);
        margin: 0 var(--spacing-4);
      }

      .form-section-group {
        padding: var(--spacing-6);
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: var(--spacing-4);
      }

      .success-modal {
        padding: var(--spacing-6);
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: var(--spacing-16) 0 var(--spacing-12);
      }

      .form-section {
        padding: var(--spacing-16) 0;
      }

      .hero-badges {
        flex-direction: column;
        align-items: center;
      }

      .badge {
        justify-content: center;
      }
    }
  `]
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  isSubmitting = false;
  showSuccess = false;

  // Select options
  relationshipOptions: SelectOption[] = [
    { value: '', label: 'Select relationship' },
    { value: 'self', label: 'I am the person needing care' },
    { value: 'spouse', label: 'Spouse/Partner' },
    { value: 'adult-child', label: 'Adult Child' },
    { value: 'sibling', label: 'Sibling' },
    { value: 'other-family', label: 'Other Family Member' },
    { value: 'friend', label: 'Friend' },
    { value: 'other', label: 'Other' }
  ];

  ageOptions: SelectOption[] = [
    { value: '', label: 'Select age range' },
    { value: '65-70', label: '65-70' },
    { value: '71-75', label: '71-75' },
    { value: '76-80', label: '76-80' },
    { value: '81-85', label: '81-85' },
    { value: '86-90', label: '86-90' },
    { value: '90+', label: '90+' }
  ];

  livingArrangementOptions: SelectOption[] = [
    { value: '', label: 'Select living situation' },
    { value: 'own-home', label: 'Own Home' },
    { value: 'family-home', label: 'Living with Family' },
    { value: 'senior-residence', label: 'Senior Residence' },
    { value: 'assisted-living', label: 'Assisted Living' },
    { value: 'other', label: 'Other' }
  ];

  urgencyOptions: SelectOption[] = [
    { value: '', label: 'Select timeframe' },
    { value: 'asap', label: 'As soon as possible (within a week)' },
    { value: '2-weeks', label: 'Within 2 weeks' },
    { value: 'month', label: 'Within a month' },
    { value: 'planning', label: 'Just planning for the future' }
  ];

  hoursNeededOptions: SelectOption[] = [
    { value: '', label: 'Select hours' },
    { value: '5-10', label: '5-10 hours' },
    { value: '10-20', label: '10-20 hours' },
    { value: '20-30', label: '20-30 hours' },
    { value: '30-40', label: '30-40 hours' },
    { value: '40+', label: '40+ hours' }
  ];

  consultationTimeOptions: SelectOption[] = [
    { value: '', label: 'Select preferred time' },
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 7 PM)' },
    { value: 'flexible', label: 'I\'m flexible' }
  ];

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.bookingForm = this.fb.group({
      // Personal Information
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      relationshipToClient: ['', [Validators.required]],

      // Client Information
      clientAge: [''],
      livingArrangement: [''],
      address: [''],

      // Care Needs
      needCompanionship: [false],
      needMobility: [false],
      needTechnology: [false],
      needErrands: [false],
      needMeals: [false],
      needRespite: [false],
      urgency: [''],
      hoursNeeded: [''],
      preferredTimes: [''],

      // Additional Information
      medicalConditions: [''],
      additionalNotes: [''],
      preferredConsultationTime: [''],

      // Consent
      privacyConsent: [false, [Validators.requiredTrue]],
      marketingOptIn: [false]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      // Get form data
      const formData = this.bookingForm.value;

      // Collect selected services
      const selectedServices = [];
      if (formData.needCompanionship) selectedServices.push('Daily Companionship');
      if (formData.needMobility) selectedServices.push('Mobility Assistance');
      if (formData.needTechnology) selectedServices.push('Technology Support');
      if (formData.needErrands) selectedServices.push('Errands & Transportation');
      if (formData.needMeals) selectedServices.push('Meal Preparation');
      if (formData.needRespite) selectedServices.push('Respite Care');

      // Prepare submission data
      const submissionData = {
        ...formData,
        selectedServices,
        submittedAt: new Date().toISOString(),
        source: 'website-booking-form'
      };

      // Simulate API call (replace with actual API call later)
      setTimeout(() => {
        console.log('Booking form submitted:', submissionData);

        // For now, just show success message
        // In production, this would be sent to backend API
        this.isSubmitting = false;
        this.showSuccess = true;

        // Reset form
        this.bookingForm.reset();
        this.initializeForm();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

      }, 2000); // Simulate network delay

    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.bookingForm.controls).forEach(key => {
        const control = this.bookingForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });

      // Scroll to first error
      const firstErrorElement = document.querySelector('.form-control.error');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  closeSuccess() {
    this.showSuccess = false;
  }
}