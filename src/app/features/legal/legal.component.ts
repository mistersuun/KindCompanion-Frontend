import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'Loading Legal Information...'"
      [subMessage]="'Preparing privacy policy, terms, and accessibility details'"
      [fullscreen]="true">
    </app-loading>

    <div class="legal-page" *ngIf="!isLoading">
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Legal Information</h1>
            <p class="hero-subtitle">Our commitment to transparency and compliance</p>
          </div>
        </div>
        <div class="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--color-background)"></path>
          </svg>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <nav class="section-nav">
            <a (click)="scrollToSection('privacy')" class="nav-item" [class.active]="activeSection === 'privacy'">Privacy Policy</a>
            <a (click)="scrollToSection('terms')" class="nav-item" [class.active]="activeSection === 'terms'">Terms of Service</a>
            <a (click)="scrollToSection('accessibility')" class="nav-item" [class.active]="activeSection === 'accessibility'">Accessibility</a>
            <a (click)="scrollToSection('cookies')" class="nav-item" [class.active]="activeSection === 'cookies'">Cookie Policy</a>
          </nav>

          <!-- Privacy Policy Section -->
          <div id="privacy" class="content-block">
            <h2>Privacy Policy</h2>
            <div class="legal-content">
              <div class="last-updated">Last updated: January 15, 2025</div>

              <h3>1. Information We Collect</h3>
              <p>At KindCompanion, we collect information necessary to provide quality companion services. This includes:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, address, phone number, email, emergency contacts</li>
                <li><strong>Health Information:</strong> Medical conditions, medications, dietary restrictions, mobility needs</li>
                <li><strong>Service Information:</strong> Care preferences, companion notes, service history</li>
                <li><strong>Billing Information:</strong> Payment details, insurance information</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul>
                <li>Provide personalized companion services</li>
                <li>Match you with appropriate companions</li>
                <li>Coordinate care with healthcare providers</li>
                <li>Process billing and insurance claims</li>
                <li>Communicate important service updates</li>
                <li>Improve our services and ensure quality care</li>
              </ul>

              <h3>3. Information Sharing</h3>
              <p>We only share your information when:</p>
              <ul>
                <li>Required for service delivery (assigned companions, supervisors)</li>
                <li>Necessary for billing and insurance processing</li>
                <li>Requested by authorized family members or healthcare providers</li>
                <li>Required by law or for emergency situations</li>
              </ul>

              <h3>4. Data Security</h3>
              <p>We maintain strict security measures including:</p>
              <ul>
                <li>Encrypted data storage and transmission</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access on a need-to-know basis</li>
                <li>Staff training on privacy protection</li>
              </ul>

              <h3>5. Your Rights</h3>
              <p>Under PIPEDA, you have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Withdraw consent (subject to service requirements)</li>
                <li>File a complaint with the Privacy Commissioner</li>
              </ul>

              <h3>6. Contact Information</h3>
              <p>For privacy-related questions, contact our Privacy Officer:</p>
              <div class="contact-info">
                <p>Email: privacy@kindcompanion.com</p>
                <p>Phone: (514) 555-0123</p>
                <p>Mail: KindCompanion Privacy Officer, 123 Main St, Montreal, QC H3A 1A1</p>
              </div>
            </div>
          </div>

          <!-- Terms of Service Section -->
          <div id="terms" class="content-block">
            <h2>Terms of Service</h2>
            <div class="legal-content">
              <div class="last-updated">Last updated: January 15, 2025</div>

              <h3>1. Service Agreement</h3>
              <p>By using KindCompanion services, you agree to these terms and conditions. Our companion services are provided subject to availability and client needs assessment.</p>

              <h3>2. Service Scope</h3>
              <p>KindCompanion provides non-medical companion services including:</p>
              <ul>
                <li>Companionship and social interaction</li>
                <li>Light housekeeping and meal preparation</li>
                <li>Transportation assistance</li>
                <li>Medication reminders (non-medical)</li>
                <li>Activity support and engagement</li>
              </ul>

              <h3>3. What We Don't Provide</h3>
              <p>Our services do not include:</p>
              <ul>
                <li>Medical care or nursing services</li>
                <li>Personal care assistance (bathing, dressing)</li>
                <li>Heavy lifting or physical labor</li>
                <li>Pet care or childcare services</li>
                <li>Financial or legal advice</li>
              </ul>

              <h3>4. Client Responsibilities</h3>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate information about care needs</li>
                <li>Maintaining a safe environment for companions</li>
                <li>Treating companions with respect and dignity</li>
                <li>Timely payment for services provided</li>
                <li>Notifying us of changes in care needs</li>
              </ul>

              <h3>5. Cancellation Policy</h3>
              <ul>
                <li><strong>Same-day cancellation:</strong> Full service charge applies</li>
                <li><strong>24-hour notice:</strong> 50% of service charge</li>
                <li><strong>48-hour notice:</strong> No charge</li>
                <li><strong>Emergency cancellations:</strong> Evaluated case-by-case</li>
              </ul>

              <h3>6. Payment Terms</h3>
              <p>Payment is due within 30 days of service. We accept:</p>
              <ul>
                <li>Direct insurance billing (where applicable)</li>
                <li>Credit card payments</li>
                <li>Electronic fund transfer</li>
                <li>Cheque payment</li>
              </ul>

              <h3>7. Limitation of Liability</h3>
              <p>KindCompanion's liability is limited to the cost of services provided. We are not responsible for pre-existing conditions or situations beyond our control.</p>
            </div>
          </div>

          <!-- Accessibility Section -->
          <div id="accessibility" class="content-block">
            <h2>Accessibility Statement</h2>
            <div class="legal-content">
              <div class="last-updated">Last updated: January 15, 2025</div>

              <h3>Our Commitment</h3>
              <p>KindCompanion is committed to ensuring digital accessibility for all users, including those with disabilities. We strive to make our website accessible to the widest possible audience.</p>

              <h3>Accessibility Standards</h3>
              <p>Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content accessible to people with disabilities.</p>

              <h3>Accessibility Features</h3>
              <ul>
                <li><strong>Keyboard Navigation:</strong> Full website navigation using keyboard only</li>
                <li><strong>Screen Reader Support:</strong> Compatible with popular screen reading software</li>
                <li><strong>High Contrast:</strong> Sufficient color contrast for text readability</li>
                <li><strong>Scalable Text:</strong> Text can be enlarged up to 200% without loss of functionality</li>
                <li><strong>Clear Navigation:</strong> Consistent and predictable navigation structure</li>
                <li><strong>Alternative Text:</strong> Descriptive alt text for all images</li>
              </ul>

              <h3>Ongoing Efforts</h3>
              <p>We continuously work to improve accessibility through:</p>
              <ul>
                <li>Regular accessibility audits and testing</li>
                <li>User feedback integration</li>
                <li>Staff training on accessibility best practices</li>
                <li>Technology updates and improvements</li>
              </ul>

              <h3>Service Accessibility</h3>
              <p>Our companion services are designed to be accessible to clients with various needs:</p>
              <ul>
                <li>Companions trained in disability awareness</li>
                <li>Adaptive communication techniques</li>
                <li>Mobility assistance support</li>
                <li>Sensory impairment accommodations</li>
              </ul>

              <h3>Feedback</h3>
              <p>We welcome feedback about the accessibility of our website and services. Please contact us:</p>
              <div class="contact-info">
                <p>Email: accessibility@kindcompanion.com</p>
                <p>Phone: (514) 555-0123</p>
                <p>TTY: (514) 555-0124</p>
              </div>
            </div>
          </div>

          <!-- Cookie Policy Section -->
          <div id="cookies" class="content-block">
            <h2>Cookie Policy</h2>
            <div class="legal-content">
              <div class="last-updated">Last updated: January 15, 2025</div>

              <h3>What Are Cookies</h3>
              <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how you interact with our site.</p>

              <h3>Types of Cookies We Use</h3>

              <h4>Essential Cookies</h4>
              <p>These cookies are necessary for the website to function properly:</p>
              <ul>
                <li>Session management and security</li>
                <li>Form completion and submission</li>
                <li>Language and accessibility preferences</li>
                <li>Shopping cart and booking functionality</li>
              </ul>

              <h4>Analytics Cookies</h4>
              <p>These help us understand how visitors use our website:</p>
              <ul>
                <li>Page views and user journey tracking</li>
                <li>Performance monitoring and optimization</li>
                <li>Error detection and reporting</li>
              </ul>

              <h4>Functional Cookies</h4>
              <p>These enhance your experience on our website:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Personalized content delivery</li>
                <li>Chat and support functionality</li>
              </ul>

              <h3>Third-Party Cookies</h3>
              <p>We may use third-party services that place cookies on your device:</p>
              <ul>
                <li><strong>Google Analytics:</strong> Website performance analysis</li>
                <li><strong>Social Media:</strong> Sharing and interaction features</li>
                <li><strong>Payment Processors:</strong> Secure payment processing</li>
              </ul>

              <h3>Cookie Management</h3>
              <p>You can control cookies through:</p>
              <ul>
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                <li><strong>Our Cookie Consent Tool:</strong> Manage preferences on our website</li>
                <li><strong>Third-Party Opt-out:</strong> Use provider-specific opt-out tools</li>
              </ul>

              <h3>Impact of Disabling Cookies</h3>
              <p>Disabling cookies may affect:</p>
              <ul>
                <li>Website functionality and user experience</li>
                <li>Ability to remember preferences and settings</li>
                <li>Online booking and form submission</li>
                <li>Personalized content delivery</li>
              </ul>

              <h3>Contact Us</h3>
              <p>For questions about our cookie policy:</p>
              <div class="contact-info">
                <p>Email: privacy@kindcompanion.com</p>
                <p>Phone: (514) 555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .legal-page {
      min-height: 100vh;
    }

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
      margin-bottom: var(--spacing-4);
    }

    .hero-subtitle {
      font-size: var(--font-size-xl);
      opacity: 0.9;
    }

    .content-section {
      padding: var(--spacing-20) 0;
    }

    .section-nav {
      display: flex;
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-12);
      padding: var(--spacing-4);
      background: var(--color-gray-50);
      border-radius: var(--radius-lg);
      overflow-x: auto;
    }

    .nav-item {
      padding: var(--spacing-3) var(--spacing-4);
      border-radius: var(--radius-md);
      text-decoration: none;
      color: var(--color-text-secondary);
      font-weight: var(--font-weight-medium);
      white-space: nowrap;
      transition: all var(--transition-normal);
    }

    .nav-item:hover,
    .nav-item.active {
      background: var(--color-primary);
      color: white;
    }

    .content-block {
      margin-bottom: var(--spacing-16);
      padding: var(--spacing-8);
      background: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }

    .content-block h2 {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-8);
      color: var(--color-text-primary);
    }

    .last-updated {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
      font-style: italic;
      margin-bottom: var(--spacing-6);
      padding: var(--spacing-2) var(--spacing-4);
      background: var(--color-gray-50);
      border-radius: var(--radius-md);
      display: inline-block;
    }

    .legal-content h3 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      margin: var(--spacing-8) 0 var(--spacing-4) 0;
      color: var(--color-primary);
    }

    .legal-content h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin: var(--spacing-6) 0 var(--spacing-3) 0;
      color: var(--color-text-primary);
    }

    .legal-content p {
      margin-bottom: var(--spacing-4);
      line-height: 1.7;
      color: var(--color-text-secondary);
    }

    .legal-content ul {
      margin: var(--spacing-4) 0;
      padding-left: var(--spacing-6);
    }

    .legal-content li {
      margin-bottom: var(--spacing-2);
      line-height: 1.6;
      color: var(--color-text-secondary);
    }

    .legal-content strong {
      color: var(--color-text-primary);
      font-weight: var(--font-weight-semibold);
    }

    .contact-info {
      background: var(--color-gray-50);
      padding: var(--spacing-4);
      border-radius: var(--radius-md);
      margin: var(--spacing-4) 0;
    }

    .contact-info p {
      margin-bottom: var(--spacing-2);
      font-family: var(--font-family-mono);
      font-size: var(--font-size-sm);
    }

    .contact-info p:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .section-nav {
        flex-wrap: wrap;
      }

      .content-block {
        padding: var(--spacing-4);
      }

      .hero-title {
        font-size: var(--font-size-2xl);
      }

      .legal-content h3 {
        font-size: var(--font-size-lg);
      }

      .legal-content ul {
        padding-left: var(--spacing-4);
      }
    }

    @media (max-width: 480px) {
      .section-nav {
        gap: var(--spacing-2);
      }

      .nav-item {
        font-size: var(--font-size-sm);
        padding: var(--spacing-2) var(--spacing-3);
      }
    }
  `]
})
export class LegalComponent implements OnInit, AfterViewInit {
  isLoading = true;
  activeSection = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          this.activeSection = fragment;
          setTimeout(() => this.scrollToSectionInitial(fragment), 100);
        }
      });
    }, 800);
  }

  ngAfterViewInit() {
    if (this.activeSection) {
      this.scrollToSectionInitial(this.activeSection);
    }
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private scrollToSectionInitial(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}