import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  template: `
    <app-loading
      *ngIf="isLoading"
      [message]="'Loading Company Information...'"
      [subMessage]="'Preparing careers, news, and partnership details'"
      [fullscreen]="true">
    </app-loading>

    <div class="company-page" *ngIf="!isLoading">
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Company Information</h1>
            <p class="hero-subtitle">Learn more about KindCompanion and our commitment to excellence</p>
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
            <a (click)="scrollToSection('careers')" class="nav-item" [class.active]="activeSection === 'careers'">Join Our Team</a>
            <a (click)="scrollToSection('news')" class="nav-item" [class.active]="activeSection === 'news'">News & Updates</a>
            <a (click)="scrollToSection('community')" class="nav-item" [class.active]="activeSection === 'community'">Community Involvement</a>
            <a (click)="scrollToSection('partners')" class="nav-item" [class.active]="activeSection === 'partners'">Healthcare Partners</a>
          </nav>

          <!-- Careers Section -->
          <div id="careers" class="content-block">
            <h2>Join Our Team</h2>
            <div class="careers-intro">
              <p>At KindCompanion, we believe that the best care comes from passionate, dedicated professionals. Join our team and make a meaningful difference in the lives of elderly individuals and their families.</p>
            </div>

            <div class="careers-benefits">
              <h3>Why Work With Us</h3>
              <div class="benefits-grid">
                <div class="benefit-item">
                  <div class="benefit-icon">💼</div>
                  <h4>Competitive Compensation</h4>
                  <p>Competitive wages with performance-based bonuses and comprehensive benefits package.</p>
                </div>
                <div class="benefit-item">
                  <div class="benefit-icon">📚</div>
                  <h4>Professional Development</h4>
                  <p>Ongoing training, certification support, and career advancement opportunities.</p>
                </div>
                <div class="benefit-item">
                  <div class="benefit-icon">🤝</div>
                  <h4>Supportive Environment</h4>
                  <p>Collaborative team culture with management support and work-life balance.</p>
                </div>
                <div class="benefit-item">
                  <div class="benefit-icon">🏥</div>
                  <h4>Health Benefits</h4>
                  <p>Complete health and dental coverage, extended benefits, and wellness programs.</p>
                </div>
              </div>
            </div>

            <div class="job-openings">
              <h3>Current Openings</h3>
              <div class="jobs-list">
                <div class="job-item">
                  <h4>Companion Care Specialist</h4>
                  <p>Full-time and part-time positions available. Experience preferred but training provided.</p>
                  <a href="#" class="apply-btn">Apply Now</a>
                </div>
                <div class="job-item">
                  <h4>Registered Nurse (RN)</h4>
                  <p>Lead clinical care coordination and companion supervision. QCA certification required.</p>
                  <a href="#" class="apply-btn">Apply Now</a>
                </div>
                <div class="job-item">
                  <h4>Client Coordinator</h4>
                  <p>Manage client relationships and service coordination. Customer service experience required.</p>
                  <a href="#" class="apply-btn">Apply Now</a>
                </div>
              </div>
            </div>
          </div>

          <!-- News Section -->
          <div id="news" class="content-block">
            <h2>News & Updates</h2>
            <div class="news-grid">
              <article class="news-item">
                <div class="news-date">March 15, 2025</div>
                <h3>KindCompanion Expands Services to West Island</h3>
                <p>We're excited to announce our expansion to serve families in the West Island area of Montreal, bringing our compassionate companion services to even more communities.</p>
                <a href="#" class="read-more">Read More</a>
              </article>

              <article class="news-item">
                <div class="news-date">February 20, 2025</div>
                <h3>New Partnership with Montreal General Hospital</h3>
                <p>KindCompanion is proud to partner with Montreal General Hospital to provide post-discharge companion services for elderly patients returning home.</p>
                <a href="#" class="read-more">Read More</a>
              </article>

              <article class="news-item">
                <div class="news-date">January 10, 2025</div>
                <h3>Recognition as Top Employer in Healthcare Services</h3>
                <p>We've been recognized as one of Montreal's Top Employers in Healthcare Services for our commitment to employee satisfaction and professional development.</p>
                <a href="#" class="read-more">Read More</a>
              </article>
            </div>
          </div>

          <!-- Community Section -->
          <div id="community" class="content-block">
            <h2>Community Involvement</h2>
            <div class="community-content">
              <div class="community-mission">
                <h3>Our Community Mission</h3>
                <p>At KindCompanion, we believe in giving back to the community that has supported us. We actively participate in local initiatives and support organizations that share our values of compassion, dignity, and respect for seniors.</p>
              </div>

              <div class="community-initiatives">
                <h3>Current Initiatives</h3>
                <div class="initiatives-grid">
                  <div class="initiative-item">
                    <h4>Senior Centers Support</h4>
                    <p>We regularly volunteer at local senior centers, providing companionship activities and educational workshops on aging-in-place safely.</p>
                  </div>
                  <div class="initiative-item">
                    <h4>Caregiver Education</h4>
                    <p>Free monthly seminars for family caregivers covering topics like dementia care, home safety, and stress management.</p>
                  </div>
                  <div class="initiative-item">
                    <h4>Holiday Outreach Program</h4>
                    <p>During holidays, we provide complimentary companion visits to isolated seniors in partnership with local churches and community groups.</p>
                  </div>
                  <div class="initiative-item">
                    <h4>Scholarship Program</h4>
                    <p>Annual scholarships for students pursuing careers in elderly care, healthcare, and social work at Montreal universities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Partners Section -->
          <div id="partners" class="content-block">
            <h2>Healthcare Partners</h2>
            <div class="partners-content">
              <div class="partners-intro">
                <p>We work closely with healthcare providers, medical professionals, and community organizations to ensure comprehensive care for our clients.</p>
              </div>

              <div class="partners-categories">
                <div class="partner-category">
                  <h3>Hospital Partners</h3>
                  <ul>
                    <li>Montreal General Hospital</li>
                    <li>Jewish General Hospital</li>
                    <li>Royal Victoria Hospital</li>
                    <li>St. Mary's Hospital Center</li>
                  </ul>
                </div>

                <div class="partner-category">
                  <h3>Medical Clinics</h3>
                  <ul>
                    <li>NDG Medical Clinic</li>
                    <li>Westmount Family Medicine</li>
                    <li>Plaza Côte-des-Neiges</li>
                    <li>Dorval Medical Center</li>
                  </ul>
                </div>

                <div class="partner-category">
                  <h3>Community Organizations</h3>
                  <ul>
                    <li>Montreal Council on Aging</li>
                    <li>West Island Community Resource Centre</li>
                    <li>Table de concertation des aînés de l'île de Montréal</li>
                    <li>Centraide of Greater Montreal</li>
                  </ul>
                </div>

                <div class="partner-category">
                  <h3>Professional Associations</h3>
                  <ul>
                    <li>Ordre des infirmières et infirmiers du Québec</li>
                    <li>Association québécoise de gérontologie</li>
                    <li>Canadian Association of Gerontology</li>
                    <li>Home Care Ontario</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .company-page {
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

    .careers-intro p {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-8);
      color: var(--color-text-secondary);
    }

    .careers-benefits h3,
    .job-openings h3,
    .community-mission h3,
    .community-initiatives h3 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-6);
      color: var(--color-primary);
    }

    .benefits-grid,
    .initiatives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-6);
      margin-bottom: var(--spacing-8);
    }

    .benefit-item,
    .initiative-item {
      padding: var(--spacing-6);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-md);
      text-align: center;
    }

    .benefit-icon {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-3);
    }

    .benefit-item h4,
    .initiative-item h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-3);
      color: var(--color-text-primary);
    }

    .jobs-list {
      display: grid;
      gap: var(--spacing-6);
    }

    .job-item {
      padding: var(--spacing-6);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-md);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--spacing-4);
    }

    .job-item h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-2);
    }

    .apply-btn {
      background: var(--color-primary);
      color: white;
      padding: var(--spacing-2) var(--spacing-4);
      border-radius: var(--radius-md);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
      transition: background-color var(--transition-normal);
    }

    .apply-btn:hover {
      background: var(--color-primary-dark);
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-8);
    }

    .news-item {
      padding: var(--spacing-6);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-md);
    }

    .news-date {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
      margin-bottom: var(--spacing-3);
    }

    .news-item h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-3);
      color: var(--color-text-primary);
    }

    .news-item p {
      margin-bottom: var(--spacing-4);
    }

    .read-more {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
    }

    .read-more:hover {
      text-decoration: underline;
    }

    .community-content {
      display: grid;
      gap: var(--spacing-8);
    }

    .community-mission p {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
    }

    .partners-content {
      display: grid;
      gap: var(--spacing-8);
    }

    .partners-intro p {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
    }

    .partners-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-8);
    }

    .partner-category {
      padding: var(--spacing-6);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-md);
    }

    .partner-category h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-4);
      color: var(--color-primary);
    }

    .partner-category ul {
      list-style: none;
      padding: 0;
    }

    .partner-category li {
      padding: var(--spacing-2) 0;
      border-bottom: 1px solid var(--color-gray-100);
    }

    .partner-category li:last-child {
      border-bottom: none;
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

      .job-item {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class CompanyComponent implements OnInit, AfterViewInit {
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
    }, 900);
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