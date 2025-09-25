import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'Loading Support Resources...'"
      [subMessage]="'Gathering FAQ, safety information, and family resources'"
      [fullscreen]="true">
    </app-loading>

    <div class="support-page" *ngIf="!isLoading">
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Support & Resources</h1>
            <p class="hero-subtitle">Everything you need to know about KindCompanion services</p>
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
            <a (click)="scrollToSection('faq')" class="nav-item" [class.active]="activeSection === 'faq'">FAQ</a>
            <a (click)="scrollToSection('safety')" class="nav-item" [class.active]="activeSection === 'safety'">Safety & Security</a>
            <a (click)="scrollToSection('resources')" class="nav-item" [class.active]="activeSection === 'resources'">Family Resources</a>
            <a (click)="scrollToSection('testimonials')" class="nav-item" [class.active]="activeSection === 'testimonials'">Testimonials</a>
            <a (click)="scrollToSection('insurance')" class="nav-item" [class.active]="activeSection === 'insurance'">Insurance & Billing</a>
            <a (click)="scrollToSection('emergency')" class="nav-item" [class.active]="activeSection === 'emergency'">Emergency Procedures</a>
          </nav>

          <!-- FAQ Section -->
          <div id="faq" class="content-block">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-grid">
              <div class="faq-item">
                <h3>How do I book a companion?</h3>
                <p>You can book a companion through our online booking system or by calling our office directly. We'll match you with the perfect companion based on your needs and preferences.</p>
              </div>
              <div class="faq-item">
                <h3>What are your service hours?</h3>
                <p>We offer flexible scheduling from 6 AM to 10 PM, seven days a week. Emergency services are available 24/7.</p>
              </div>
              <div class="faq-item">
                <h3>How are companions screened?</h3>
                <p>All companions undergo comprehensive background checks, reference verification, and extensive training before joining our team.</p>
              </div>
              <div class="faq-item">
                <h3>Can I request the same companion each time?</h3>
                <p>Absolutely! We encourage building long-term relationships and will do our best to schedule your preferred companion.</p>
              </div>
            </div>
          </div>

          <!-- Safety Section -->
          <div id="safety" class="content-block">
            <h2>Safety & Security</h2>
            <div class="safety-grid">
              <div class="safety-item">
                <div class="safety-icon">🛡️</div>
                <h3>Background Checks</h3>
                <p>Comprehensive criminal background checks and reference verification for all companions.</p>
              </div>
              <div class="safety-item">
                <div class="safety-icon">📋</div>
                <h3>Training & Certification</h3>
                <p>All companions complete specialized elderly care training and maintain current certifications.</p>
              </div>
              <div class="safety-item">
                <div class="safety-icon">📞</div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock support hotline for emergencies and immediate assistance.</p>
              </div>
              <div class="safety-item">
                <div class="safety-icon">🔒</div>
                <h3>Privacy Protection</h3>
                <p>PIPEDA-compliant privacy protection and confidential handling of personal information.</p>
              </div>
            </div>
          </div>

          <!-- Resources Section -->
          <div id="resources" class="content-block">
            <h2>Family Resources</h2>
            <div class="resources-grid">
              <div class="resource-item">
                <h3>Caregiver Guide</h3>
                <p>Comprehensive guide for families navigating elderly care decisions.</p>
                <a href="#" class="resource-link">Download PDF</a>
              </div>
              <div class="resource-item">
                <h3>Safety Checklist</h3>
                <p>Home safety checklist to ensure a secure environment for elderly loved ones.</p>
                <a href="#" class="resource-link">Download PDF</a>
              </div>
              <div class="resource-item">
                <h3>Communication Tips</h3>
                <p>Effective communication strategies for elderly care and family coordination.</p>
                <a href="#" class="resource-link">Read More</a>
              </div>
            </div>
          </div>

          <!-- Testimonials Section -->
          <div id="testimonials" class="content-block">
            <h2>Client Testimonials</h2>
            <div class="testimonials-grid">
              <div class="testimonial-item">
                <div class="testimonial-content">
                  <p>"KindCompanion has been a blessing for our family. Marie has become like family to my mother."</p>
                </div>
                <div class="testimonial-author">
                  <strong>Sarah L.</strong>
                  <span>Daughter of client</span>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-content">
                  <p>"Professional, caring, and reliable. I couldn't ask for better companion services."</p>
                </div>
                <div class="testimonial-author">
                  <strong>Robert M.</strong>
                  <span>Client since 2022</span>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-content">
                  <p>"The peace of mind knowing my father is in good hands is priceless."</p>
                </div>
                <div class="testimonial-author">
                  <strong>Michelle D.</strong>
                  <span>Family member</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Insurance Section -->
          <div id="insurance" class="content-block">
            <h2>Insurance & Billing</h2>
            <div class="insurance-content">
              <div class="insurance-item">
                <h3>Insurance Coverage</h3>
                <p>We work with most major insurance providers and can help verify your coverage. Services may be covered under home care or respite care benefits.</p>
              </div>
              <div class="insurance-item">
                <h3>Billing Options</h3>
                <ul>
                  <li>Direct insurance billing available</li>
                  <li>Flexible payment plans</li>
                  <li>Online payment portal</li>
                  <li>Detailed service reports</li>
                </ul>
              </div>
              <div class="insurance-item">
                <h3>Cost Transparency</h3>
                <p>No hidden fees or surprise charges. All costs are discussed upfront with detailed service agreements.</p>
              </div>
            </div>
          </div>

          <!-- Emergency Section -->
          <div id="emergency" class="content-block">
            <h2>Emergency Procedures</h2>
            <div class="emergency-content">
              <div class="emergency-contact">
                <h3>24/7 Emergency Line</h3>
                <p class="emergency-number">
                  <a href="tel:+1-514-555-0911">(514) 555-0911</a>
                </p>
              </div>
              <div class="emergency-procedures">
                <h3>Emergency Protocol</h3>
                <ol>
                  <li>Call 911 if immediate medical attention is required</li>
                  <li>Contact our emergency line to notify us of the situation</li>
                  <li>Companions are trained in first aid and emergency response</li>
                  <li>We coordinate with emergency services and family members</li>
                  <li>Follow-up care and support is provided</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .support-page {
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

    .faq-grid,
    .safety-grid,
    .resources-grid,
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-6);
    }

    .faq-item,
    .safety-item,
    .resource-item,
    .testimonial-item {
      padding: var(--spacing-6);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-md);
    }

    .faq-item h3,
    .resource-item h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-3);
      color: var(--color-primary);
    }

    .safety-item {
      text-align: center;
    }

    .safety-icon {
      font-size: 2rem;
      margin-bottom: var(--spacing-3);
    }

    .safety-item h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-3);
    }

    .resource-link {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
    }

    .resource-link:hover {
      text-decoration: underline;
    }

    .testimonial-item {
      background: var(--color-gray-50);
    }

    .testimonial-content {
      margin-bottom: var(--spacing-4);
    }

    .testimonial-content p {
      font-style: italic;
      font-size: var(--font-size-lg);
    }

    .testimonial-author strong {
      display: block;
      margin-bottom: var(--spacing-1);
    }

    .testimonial-author span {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }

    .insurance-content,
    .emergency-content {
      display: grid;
      gap: var(--spacing-8);
    }

    .insurance-item,
    .emergency-contact,
    .emergency-procedures {
      padding: var(--spacing-6);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-md);
    }

    .insurance-item h3,
    .emergency-contact h3,
    .emergency-procedures h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-4);
      color: var(--color-primary);
    }

    .emergency-number {
      text-align: center;
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
    }

    .emergency-number a {
      color: var(--color-warning);
      text-decoration: none;
    }

    .emergency-procedures ol {
      margin-left: var(--spacing-4);
    }

    .emergency-procedures li {
      margin-bottom: var(--spacing-2);
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
    }
  `]
})
export class SupportComponent implements OnInit, AfterViewInit {
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
    }, 1000);
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