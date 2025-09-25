import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export type SupportedLanguage = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<SupportedLanguage>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private isChangingLanguageSubject = new BehaviorSubject<boolean>(false);
  public isChangingLanguage$ = this.isChangingLanguageSubject.asObservable();

  // Language configuration
  public readonly languages = {
    'en': {
      code: 'en',
      name: 'English',
      flag: '🇨🇦',
      dir: 'ltr'
    },
    'fr': {
      code: 'fr',
      name: 'Français',
      flag: '🇨🇦',
      dir: 'ltr'
    }
  } as const;

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Set up available languages
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');

    // Load translations immediately
    this.translate.setTranslation('en', {
      "accessibility": {
        "skip": {
          "nav": "Skip to main content"
        }
      },
      "brand": {
        "name": "KindCompanion",
        "logoAlt": "KindCompanion Logo",
        "homeAriaLabel": "KindCompanion Home",
        "tagline": "Montreal"
      },
      "nav": {
        "home": "Home",
        "about": "About Us",
        "services": "Opportunities",
        "companions": "Our Volunteers",
        "contact": "Contact",
        "bookConsultation": "Apply to Volunteer"
      },
      "language": {
        "switch": {
          "english": "Switch to English",
          "french": "Changer en français"
        }
      },
      "home": {
        "loading": {
          "message": "Welcome to KindCompanion",
          "subMessage": "Loading your personalized experience..."
        },
        "hero": {
          "badge": "Community Volunteer Network",
          "title": "Meaningful <span class=\"gradient-text\">Volunteer Opportunities</span> Helping Elderly in Montreal",
          "description": "Connect with elderly community members while earning volunteer hours for your studies, community service requirements, or personal growth.",
          "ctaPrimary": "Join as Volunteer",
          "ctaSecondary": "Learn About Opportunities",
          "stat1": {
            "number": "200+",
            "label": "Active Volunteers"
          },
          "stat2": {
            "number": "15,000+",
            "label": "Hours Completed"
          },
          "imageText": "Community Volunteer Program"
        },
        "features": {
          "title": "Why Volunteer With Us?",
          "subtitle": "Perfect for students, community service requirements, and meaningful impact",
          "feature1": {
            "title": "Student-Friendly",
            "description": "Perfect for students needing volunteer hours for applications, scholarships, or academic requirements."
          },
          "feature2": {
            "title": "Community Service Hours",
            "description": "Approved hours for court requirements, school programs, and PEI mandatory community service."
          },
          "feature3": {
            "title": "Flexible Scheduling",
            "description": "Choose your hours and commitments to fit around your studies, work, or other responsibilities."
          }
        },
        "services": {
          "badge": "Volunteer Opportunities",
          "title": "Volunteer Opportunities<br>That Make a Difference",
          "description": "From friendly visits to helping with technology, our volunteers provide meaningful companionship while gaining valuable life experience and community hours.",
          "item1": "Weekly friendly visits and conversations",
          "item2": "Technology support and digital literacy",
          "item3": "Light assistance with daily activities",
          "item4": "Companionship for walks and outings",
          "cta": "View All Opportunities",
          "card1": "Companionship",
          "card2": "Learning",
          "card3": "Community Service"
        },
        "cta": {
          "title": "Ready to Make a<br>Meaningful Impact?",
          "description": "Join our volunteer program today and start earning community service hours while building meaningful connections with elderly community members.",
          "primary": "Apply to Volunteer",
          "phone": "Call (514) 555-0123"
        }
      },
      "footer": {
        "tagline": "Community Volunteer Program • Montreal",
        "description": "Volunteer opportunities designed to connect caring individuals with elderly community members while providing verified community service hours.",
        "badge": {
          "certified": "Verified & Trained",
          "support": "24/7 Support"
        },
        "services": {
          "title": "Volunteer Opportunities",
          "companionship": "Weekly Companionship",
          "mobility": "Mobility Support",
          "technology": "Technology Assistance",
          "errands": "Errand Support",
          "meals": "Meal Preparation",
          "respite": "Respite Care"
        },
        "support": {
          "title": "Support & Resources",
          "faq": "Frequently Asked Questions",
          "safety": "Safety & Training",
          "resources": "Volunteer Resources",
          "testimonials": "Volunteer Stories",
          "hours": "Hour Verification",
          "procedures": "Emergency Procedures"
        },
        "company": {
          "title": "Program",
          "about": "About Our Program",
          "joinTeam": "Become a Volunteer",
          "news": "News & Updates",
          "community": "Community Partnerships",
          "partners": "Academic Partners",
          "areas": "Service Areas"
        },
        "contact": {
          "title": "Get In Touch",
          "phoneLabel": "Phone",
          "emailLabel": "Email",
          "addressLabel": "Service Area",
          "addressValue": "Greater Montreal Area",
          "emergencyLine": "24/7 Support Line:"
        },
        "rights": "All rights reserved.",
        "legal": {
          "privacy": "Privacy Policy",
          "terms": "Terms of Service",
          "accessibility": "Accessibility",
          "cookies": "Cookie Policy"
        },
        "social": {
          "follow": "Follow Us:"
        }
      },
      "contact": {
        "hero": {
          "title": "Join Our Volunteer Community",
          "description": "Ready to make a difference in your community while earning volunteer hours? Contact us to learn about volunteer opportunities and start your meaningful journey helping elderly community members."
        },
        "phone": {
          "title": "Call Our Volunteer Coordinator",
          "description": "Speak with our volunteer coordinator. Available during business hours.",
          "hours": "Monday - Friday: 8am - 8pm",
          "emergency": "Emergency: (514) 555-0911"
        },
        "email": {
          "title": "Email Our Team",
          "description": "Send us questions about volunteer opportunities and we'll respond within 24 hours.",
          "response": "Response within 24 hours"
        },
        "visit": {
          "title": "Visit Our Office",
          "description": "Meet our team in person to learn about volunteer opportunities.",
          "hours": "By appointment only"
        },
        "address": {
          "street": "1234 Saint-Catherine Street West",
          "city": "Montreal, QC H3G 1P5",
          "country": "Canada"
        },
        "form": {
          "title": "Apply to Volunteer",
          "description": "Fill out the form below to get started with your volunteer application. Our volunteer coordinator will contact you within 24 hours to discuss opportunities and next steps.",
          "firstName": "First Name *",
          "lastName": "Last Name *",
          "email": "Email Address *",
          "phone": "Phone Number *",
          "relationship": "Your Interest in Volunteering",
          "services": "Volunteer Areas of Interest",
          "urgency": "When would you like to start?",
          "message": "Tell us about your availability and interests",
          "messagePlaceholder": "Share your availability, any special skills, volunteer hour requirements, and what interests you most about helping elderly community members...",
          "privacy": "I agree to the Privacy Policy and consent to being contacted by KindCompanion.",
          "submit": "Submit Application",
          "sending": "Sending...",
          "relationshipOptions": {
            "select": "Please select...",
            "student": "Student needing volunteer hours",
            "communityService": "Community service requirement",
            "courtOrdered": "Court-ordered community service",
            "personalGrowth": "Personal growth and experience",
            "careerDevelopment": "Career development in healthcare",
            "retirementVolunteer": "Retirement volunteer activity"
          },
          "servicesOptions": {
            "companionship": "Weekly friendly visits and conversations",
            "mobility": "Mobility assistance and walking support",
            "technology": "Technology support and digital literacy",
            "errands": "Light assistance with daily activities",
            "meals": "Activity coordination and social events",
            "respite": "Family communication and updates"
          },
          "urgencyOptions": {
            "select": "Please select...",
            "immediately": "As soon as possible",
            "week": "Within a week",
            "month": "Within a month",
            "planning": "Planning ahead"
          }
        },
        "faq": {
          "title": "Frequently Asked Questions",
          "cost": {
            "question": "Is there any cost for volunteering?",
            "answer": "No, our volunteer program is completely free. We provide all training, background checks, and support at no cost to volunteers. You'll earn verified community service hours and gain valuable experience while helping elderly community members."
          },
          "screening": {
            "question": "How do you screen volunteers?",
            "answer": "All volunteers undergo thorough background checks, reference verification, skills assessment, and comprehensive training. We ensure all volunteers are certified in first aid and CPR for the safety of both volunteers and elderly participants."
          },
          "emergency": {
            "question": "What happens in case of an emergency?",
            "answer": "Volunteers are trained to handle emergencies and have direct access to our 24/7 support line. We maintain emergency contacts and medical information for all participants and coordinate with healthcare providers when needed."
          },
          "start": {
            "question": "How quickly can I start volunteering?",
            "answer": "After completing our application and training process, most volunteers can begin within 1-2 weeks. We match volunteers with elderly participants based on availability, interests, and location for the best experience for everyone."
          }
        }
      },
      "error": {
        "404": {
          "title": "Page Not Found",
          "description": "We can't seem to find the page you're looking for. It might have been moved, deleted, or you may have entered the wrong URL."
        },
        "suggestions": {
          "title": "Here are some helpful links instead:"
        },
        "link": {
          "home": "Go to Homepage",
          "services": "Our Volunteer Opportunities",
          "contact": "Contact Us"
        },
        "action": {
          "back": "Go Back",
          "home": "Return Home"
        }
      },
      "companions": {
        "loading": {
          "message": "Loading Our Volunteers...",
          "subMessage": "Discovering amazing volunteers making a difference"
        },
        "hero": {
          "title": "Meet Our Amazing Volunteers",
          "description": "Our dedicated volunteers come from all walks of life, united by their passion for helping elderly community members. Each volunteer is trained, background-checked, and committed to making a meaningful difference through companionship and support."
        },
        "stats": {
          "volunteers": "Active Volunteers",
          "trained": "Background Checked",
          "languages": "Languages Spoken"
        },
        "filters": {
          "title": "Find Volunteers by Interest",
          "description": "Explore volunteers who share specific interests, speak different languages, or have experience in areas that matter to you.",
          "interests": "Volunteer Interests",
          "allInterests": "All Interests",
          "specialty": {
            "all": "All Specialties",
            "dementia": "Dementia Care",
            "mobility": "Mobility Support",
            "technology": "Technology Support",
            "meals": "Meal Preparation",
            "medical": "Medical Support"
          },
          "language": {
            "all": "All Languages",
            "english": "English",
            "french": "French",
            "spanish": "Spanish",
            "italian": "Italian",
            "portuguese": "Portuguese",
            "mandarin": "Mandarin"
          },
          "availability": {
            "all": "All Times",
            "morning": "Mornings",
            "afternoon": "Afternoons",
            "evening": "Evenings",
            "overnight": "Overnight",
            "weekend": "Weekends"
          }
        },
        "featured": {
          "title": "Featured Companions"
        },
        "badge": {
          "featured": "Featured"
        },
        "detail": {
          "experience": "Experience:",
          "languages": "Languages:"
        },
        "action": {
          "request": "Request {{name}}"
        },
        "all": {
          "title": "All Available Companions"
        },
        "availability": {
          "available": "Available",
          "limited": "Limited",
          "busy": "Busy"
        },
        "why": {
          "title": "Why Choose Our Companions?",
          "screening": {
            "title": "Rigorous Screening",
            "description": "Every companion undergoes comprehensive background checks, reference verification, and skills assessment to ensure safety and quality."
          },
          "training": {
            "title": "Ongoing Training",
            "description": "Our companions receive continuous education in elderly care, first aid, CPR, and specialized conditions like dementia."
          },
          "compassion": {
            "title": "Genuine Compassion",
            "description": "We select companions who demonstrate genuine care, patience, and understanding in working with elderly individuals."
          }
        },
        "cta": {
          "title": "Ready to Meet Your Perfect Companion?",
          "description": "Schedule a complimentary consultation to discuss your needs and meet potential companions. We'll help you find the perfect match for your loved one's care.",
          "schedule": "Schedule Free Consultation",
          "call": "Call (514) 555-0123"
        }
      },
      "booking": {
        "hero": {
          "title": "Apply to Volunteer Today",
          "subtitle": "Take the first step towards making a meaningful difference in your community. Our volunteer application is completely free and helps us understand your interests and availability to create the perfect volunteer experience.",
          "badge": {
            "free": "100% Free",
            "flexible": "Flexible Hours",
            "meaningful": "Meaningful Impact"
          }
        },
        "form": {
          "title": "Submit Your Volunteer Application",
          "subtitle": "Fill out the form below and we'll contact you within 24 hours to discuss volunteer opportunities and next steps."
        },
        "personal": {
          "title": "Personal Information",
          "firstName": "First Name *",
          "lastName": "Last Name *",
          "firstName.error": "First name is required"
        }
      },
      "services": {
        "loading": {
          "message": "Loading Volunteer Opportunities...",
          "subMessage": "Discovering meaningful ways to make a difference..."
        },
        "hero": {
          "title": "Volunteer Opportunities",
          "subtitle": "Meaningful volunteer opportunities designed to help elderly community members while providing you with valuable experience and community service hours."
        },
        "section": {
          "title": "Ways to Make a Difference",
          "subtitle": "Choose volunteer activities that match your interests, schedule, and the impact you want to make"
        },
        "companionship": {
          "title": "Friendly Companionship",
          "description": "Provide engaging conversation, shared activities, and emotional support to combat loneliness and maintain social connections for elderly community members.",
          "feature1": "Friendly conversation and active listening",
          "feature2": "Board games, puzzles, and recreational activities",
          "feature3": "Reading together and discussing books",
          "feature4": "Sharing memories and life stories",
          "feature5": "Emotional support during difficult times",
          "impact": "Perfect for community service hours"
        },
        "mobility": {
          "title": "Walking Companionship",
          "description": "Provide safe, supportive companionship during walks and light physical activities to help maintain independence and wellness.",
          "feature1": "Accompanied walks and outdoor activities",
          "feature2": "Light exercise and stretching support",
          "feature3": "Assistance with mobility exercises",
          "feature4": "Safety monitoring during activities",
          "feature5": "Encouragement for staying active"
        },
        "technology": {
          "title": "Technology Support",
          "description": "Help elderly community members stay connected with family and friends through technology, bridging the digital divide with patience and understanding.",
          "feature1": "Smartphone and tablet tutorials",
          "feature2": "Video calling setup and support",
          "feature3": "Social media and messaging guidance",
          "feature4": "Online safety and security education",
          "feature5": "Digital photo organization and sharing"
        },
        "errands": {
          "title": "Errand Assistance",
          "description": "Provide practical support with daily tasks and errands, helping maintain independence and ensuring essential needs are met.",
          "feature1": "Grocery shopping and pharmacy visits",
          "feature2": "Banking and appointment accompaniment",
          "feature3": "Light meal preparation assistance",
          "feature4": "Organization and decluttering help",
          "feature5": "Transportation to medical appointments"
        },
        "meals": {
          "title": "Meal Preparation",
          "description": "Support nutritious eating through meal planning, preparation, and sharing meals together to promote health and social connection.",
          "feature1": "Simple meal preparation and cooking",
          "feature2": "Grocery planning and healthy choices",
          "feature3": "Kitchen organization and safety",
          "feature4": "Sharing meals and conversation",
          "feature5": "Special dietary accommodation support"
        },
        "respite": {
          "title": "Respite Care",
          "description": "Provide temporary relief and support for family caregivers while ensuring continuous companionship and care for elderly community members.",
          "feature1": "Supervised companionship and activities",
          "feature2": "Medication reminders and safety monitoring",
          "feature3": "Light household task assistance",
          "feature4": "Emergency contact and communication",
          "feature5": "Family updates and peace of mind"
        },
        "pricing": {
          "mobility": "Great for fitness-focused volunteers",
          "technology": "Perfect for tech-savvy students",
          "errands": "Ideal for flexible scheduling",
          "meals": "Perfect for cooking enthusiasts",
          "respite": "Advanced volunteer opportunity"
        },
        "process": {
          "title": "How It Works",
          "subtitle": "Our simple, caring approach to getting started",
          "step1": {
            "title": "Free Consultation",
            "description": "We start with a comprehensive assessment of needs, preferences, and goals to create a personalized volunteer plan."
          },
          "step2": {
            "title": "Volunteer Matching",
            "description": "Our team carefully matches you with elderly community members based on personality, interests, and availability."
          },
          "step3": {
            "title": "Volunteer Service Begins",
            "description": "You start providing meaningful companionship and support, with regular check-ins and feedback."
          },
          "step4": {
            "title": "Ongoing Support",
            "description": "Our volunteer coordinator monitors progress, provides training, and ensures volunteer hour verification."
          }
        },
        "coverage": {
          "title": "Service Areas & Availability",
          "description": "KindCompanion proudly serves the Greater Montreal Area with flexible volunteer opportunities to meet students' schedule needs.",
          "inHome": {
            "title": "In-Home Visits",
            "description": "Volunteer companions in the comfort of elderly members' homes"
          },
          "flexible": {
            "title": "Flexible Scheduling",
            "description": "Weekly, bi-weekly, or monthly volunteer options available"
          },
          "montreal": {
            "title": "Greater Montreal",
            "description": "Serving Montreal, Laval, Longueuil, and surrounding areas"
          },
          "emergency": {
            "title": "24/7 Support Line",
            "description": "Always available for volunteer questions or concerns"
          }
        },
        "insurance": {
          "title": "Volunteer Requirements",
          "privatePay": {
            "label": "Background Check",
            "status": "✓ Required"
          },
          "ramq": {
            "label": "Training Completion",
            "status": "Required"
          },
          "private": {
            "label": "Hour Verification",
            "status": "✓ Provided"
          },
          "veterans": {
            "label": "References",
            "status": "✓ Required"
          },
          "consultation": {
            "title": "Free Application",
            "subtitle": "No commitment required"
          }
        },
        "cta": {
          "title": "Ready to Get Started?",
          "description": "Apply today and discover how volunteering with elderly community members can provide meaningful experience and verified community service hours.",
          "consultation": "Apply Now",
          "phone": "(514) 555-0123"
        }
      },
      "about": {
        "loading": {
          "message": "About Our Volunteer Program",
          "subMessage": "Loading our mission and community impact..."
        },
        "hero": {
          "title": "About Our Volunteer Program",
          "subtitle": "Community-driven volunteer opportunities connecting caring individuals with elderly community members while providing verified community service hours."
        },
        "mission": {
          "title": "Our Mission",
          "description1": "To create meaningful connections between volunteers and elderly community members while providing students and community members with valuable volunteer hours for academic, legal, or personal development requirements.",
          "description2": "We believe that meaningful volunteer work should benefit everyone involved - providing elderly individuals with companionship and support while offering volunteers valuable experience and verified community service hours."
        },
        "stats": {
          "volunteers": "200+ ACTIVE VOLUNTEERS",
          "experience": "YEARS EXPERIENCE",
          "support": "SUPPORT AVAILABLE"
        },
        "values": {
          "title": "Our Core Values",
          "subtitle": "The principles that guide everything we do",
          "compassion": {
            "title": "Compassion",
            "description": "We approach every interaction with empathy, kindness, and genuine care for each individual's unique needs and circumstances."
          },
          "respect": {
            "title": "Respect",
            "description": "We honor the wisdom, experiences, and preferences of our clients, ensuring they maintain their dignity and autonomy."
          },
          "trust": {
            "title": "Trust",
            "description": "We build lasting relationships through reliability, transparency, and unwavering commitment to safety and confidentiality."
          },
          "excellence": {
            "title": "Excellence",
            "description": "We continuously strive for the highest standards in training, service delivery, and professional development."
          }
        },
        "story": {
          "title": "Our Story",
          "description1": "KindCompanion was founded in 2008 by Marie Dubois, a registered nurse who witnessed firsthand the profound impact that meaningful companionship could have on elderly individuals' well-being.",
          "description2": "What started as a small, family-centered service has grown into Montreal's most trusted companion care provider. We've remained true to our founding principles: treating every client like family, providing personalized care, and fostering genuine connections that brighten lives.",
          "description3": "Today, our team of carefully selected and trained companions serves hundreds of families across the Greater Montreal Area, offering everything from daily companionship to specialized support services. But our heart remains the same - helping people age with grace, dignity, and joy.",
          "founder": {
            "title": "Founded with Love",
            "date": "MONTREAL, 2008",
            "quote": "\"After caring for my own grandmother, I realized how much difference genuine companionship could make. KindCompanion was born from the belief that no one should face aging alone.\"",
            "signature": "- Marie Dubois, Founder"
          }
        },
        "features": {
          "title": "Why Choose KindCompanion",
          "subtitle": "Professional excellence meets personal care",
          "screened": {
            "title": "Thoroughly Screened",
            "description": "All companions undergo comprehensive background checks, reference verification, and professional training."
          },
          "certified": {
            "title": "Certified Professionals",
            "description": "Our team includes certified caregivers, healthcare professionals, and trained companion specialists."
          },
          "insured": {
            "title": "Fully Insured",
            "description": "Comprehensive liability and bonding insurance provides complete peace of mind for families."
          },
          "support": {
            "title": "24/7 Support",
            "description": "Our support team is available around the clock for emergencies, questions, and care coordination."
          },
          "matching": {
            "title": "Personalized Matching",
            "description": "We carefully match companions to clients based on personality, interests, and specific care needs."
          },
          "bilingual": {
            "title": "Bilingual Services",
            "description": "Our companions are fluent in French and English, with additional language support available."
          }
        },
        "cta": {
          "title": "Ready to Learn More?",
          "description": "Contact us today for a free consultation and discover how KindCompanion can enhance your loved one's quality of life.",
          "consultation": "Schedule Consultation",
          "phone": "(514) 555-0123"
        }
      }
    });

    this.translate.setTranslation('fr', {
      "accessibility": {
        "skip": {
          "nav": "Aller au contenu principal"
        }
      },
      "brand": {
        "name": "BonCompagnon",
        "logoAlt": "Logo BonCompagnon",
        "homeAriaLabel": "Accueil BonCompagnon",
        "tagline": "Montréal"
      },
      "nav": {
        "home": "Accueil",
        "about": "À Propos",
        "services": "Opportunités",
        "companions": "Nos Bénévoles",
        "contact": "Contact",
        "bookConsultation": "Postuler comme Bénévole"
      },
      "language": {
        "switch": {
          "english": "Switch to English",
          "french": "Changer en français"
        }
      },
      "home": {
        "loading": {
          "message": "Bienvenue à KindCompanion",
          "subMessage": "Chargement de votre expérience personnalisée..."
        },
        "hero": {
          "badge": "Réseau de Bénévoles Communautaire",
          "title": "<span class=\"gradient-text\">Opportunités de Bénévolat</span> Significatives Aidant les Aînés à Montréal",
          "description": "Connectez-vous avec les membres âgés de la communauté tout en gagnant des heures de bénévolat pour vos études, exigences de service communautaire, ou croissance personnelle.",
          "ctaPrimary": "Rejoindre comme Bénévole",
          "ctaSecondary": "En Savoir Plus sur les Opportunités",
          "stat1": {
            "number": "200+",
            "label": "Bénévoles Actifs"
          },
          "stat2": {
            "number": "15,000+",
            "label": "Heures Complétées"
          },
          "imageText": "Programme de Bénévolat Communautaire"
        },
        "features": {
          "title": "Pourquoi Faire du Bénévolat avec Nous?",
          "subtitle": "Parfait pour les étudiants, exigences de service communautaire, et impact significatif",
          "feature1": {
            "title": "Convivial pour Étudiants",
            "description": "Parfait pour les étudiants ayant besoin d'heures de bénévolat pour des demandes, bourses d'études, ou exigences académiques."
          },
          "feature2": {
            "title": "Heures de Service Communautaire",
            "description": "Heures approuvées pour les exigences judiciaires, programmes scolaires, et service communautaire obligatoire de l'ÎPÉ."
          },
          "feature3": {
            "title": "Horaire Flexible",
            "description": "Choisissez vos heures et engagements pour s'adapter à vos études, travail, ou autres responsabilités."
          }
        },
        "services": {
          "badge": "Opportunités de Bénévolat",
          "title": "Opportunités de Bénévolat<br>Qui Font une Différence",
          "description": "Des visites amicales à l'aide avec la technologie, nos bénévoles offrent une compagnie significative tout en gagnant une expérience de vie précieuse et des heures communautaires.",
          "item1": "Visites amicales et conversations hebdomadaires",
          "item2": "Support technologique et littératie numérique",
          "item3": "Aide légère avec les activités quotidiennes",
          "item4": "Compagnie pour promenades et sorties",
          "cta": "Voir Toutes les Opportunités",
          "card1": "Compagnie",
          "card2": "Apprentissage",
          "card3": "Service Communautaire"
        },
        "cta": {
          "title": "Prêt à Faire un<br>Impact Significatif?",
          "description": "Rejoignez notre programme de bénévolat aujourd'hui et commencez à gagner des heures de service communautaire tout en développant des connexions significatives avec les membres âgés de la communauté.",
          "primary": "Postuler pour Être Bénévole",
          "phone": "Appelez (514) 555-0123"
        }
      },
      "footer": {
        "tagline": "Programme de Bénévolat Communautaire • Montréal",
        "description": "Opportunités de bénévolat conçues pour connecter des personnes attentionnées avec des membres âgés de la communauté tout en fournissant des heures de service communautaire vérifiées.",
        "badge": {
          "certified": "Vérifié & Formé",
          "support": "Support 24/7"
        },
        "services": {
          "title": "Opportunités de Bénévolat",
          "companionship": "Compagnie Hebdomadaire",
          "mobility": "Support de Mobilité",
          "technology": "Assistance Technologique",
          "errands": "Support de Courses",
          "meals": "Préparation de Repas",
          "respite": "Soins de Répit"
        },
        "support": {
          "title": "Support et Ressources",
          "faq": "Questions Fréquentes",
          "safety": "Sécurité et Formation",
          "resources": "Ressources pour Bénévoles",
          "testimonials": "Témoignages de Bénévoles",
          "hours": "Vérification d'Heures",
          "procedures": "Procédures d'Urgence"
        },
        "company": {
          "title": "Programme",
          "about": "À Propos de Notre Programme",
          "joinTeam": "Devenir Bénévole",
          "news": "Nouvelles et Mises à Jour",
          "community": "Partenariats Communautaires",
          "partners": "Partenaires Académiques",
          "areas": "Zones de Service"
        },
        "contact": {
          "title": "Nous Contacter",
          "phoneLabel": "Téléphone",
          "emailLabel": "Courriel",
          "addressLabel": "Zone de Service",
          "addressValue": "Grand Montréal",
          "emergencyLine": "Ligne de Support 24/7:"
        },
        "rights": "Tous droits réservés.",
        "legal": {
          "privacy": "Politique de Confidentialité",
          "terms": "Conditions de Service",
          "accessibility": "Accessibilité",
          "cookies": "Politique de Cookies"
        },
        "social": {
          "follow": "Suivez-nous:"
        }
      },
      "contact": {
        "hero": {
          "title": "Rejoignez Notre Communauté de Bénévoles",
          "description": "Prêt à faire une différence dans votre communauté tout en gagnant des heures de bénévolat? Contactez-nous pour en savoir plus sur les opportunités de bénévolat et commencer votre parcours significatif d'aide aux membres âgés de la communauté."
        },
        "phone": {
          "title": "Appelez Notre Coordinateur de Bénévoles",
          "description": "Parlez avec notre coordinateur de bénévoles. Disponible pendant les heures d'ouverture.",
          "hours": "Lundi - Vendredi: 8h - 20h",
          "emergency": "Urgence: (514) 555-0911"
        },
        "email": {
          "title": "Écrivez à Notre Équipe",
          "description": "Envoyez-nous des questions sur les opportunités de bénévolat et nous répondrons dans les 24 heures.",
          "response": "Réponse dans les 24 heures"
        },
        "visit": {
          "title": "Visitez Notre Bureau",
          "description": "Rencontrez notre équipe en personne pour en savoir plus sur les opportunités de bénévolat.",
          "hours": "Sur rendez-vous seulement"
        },
        "address": {
          "street": "1234 Rue Sainte-Catherine Ouest",
          "city": "Montréal, QC H3G 1P5",
          "country": "Canada"
        },
        "form": {
          "title": "Postuler pour Être Bénévole",
          "description": "Remplissez le formulaire ci-dessous pour commencer votre candidature de bénévolat. Notre coordinateur de bénévoles vous contactera dans les 24 heures pour discuter des opportunités et des prochaines étapes.",
          "firstName": "Prénom *",
          "lastName": "Nom *",
          "email": "Adresse Courriel *",
          "phone": "Numéro de Téléphone *",
          "relationship": "Votre Intérêt pour le Bénévolat",
          "services": "Domaines d'Intérêt pour le Bénévolat",
          "urgency": "Quand aimeriez-vous commencer?",
          "message": "Parlez-nous de votre disponibilité et intérêts",
          "messagePlaceholder": "Partagez votre disponibilité, compétences spéciales, exigences d'heures de bénévolat, et ce qui vous intéresse le plus dans l'aide aux membres âgés de la communauté...",
          "privacy": "J'accepte la Politique de Confidentialité et consens à être contacté par KindCompanion.",
          "submit": "Soumettre la Candidature",
          "sending": "Envoi en cours...",
          "relationshipOptions": {
            "select": "Veuillez sélectionner...",
            "student": "Étudiant ayant besoin d'heures de bénévolat",
            "communityService": "Exigence de service communautaire",
            "courtOrdered": "Service communautaire ordonné par le tribunal",
            "personalGrowth": "Croissance personnelle et expérience",
            "careerDevelopment": "Développement de carrière en soins de santé",
            "retirementVolunteer": "Activité bénévole de retraite"
          },
          "servicesOptions": {
            "companionship": "Visites amicales et conversations hebdomadaires",
            "mobility": "Assistance de mobilité et support de marche",
            "technology": "Support technologique et littératie numérique",
            "errands": "Aide légère avec les activités quotidiennes",
            "meals": "Coordination d'activités et événements sociaux",
            "respite": "Communication familiale et mises à jour"
          },
          "urgencyOptions": {
            "select": "Veuillez sélectionner...",
            "immediately": "Dès que possible",
            "week": "Dans une semaine",
            "month": "Dans un mois",
            "planning": "Planification à l'avance"
          }
        },
        "faq": {
          "title": "Questions Fréquemment Posées",
          "cost": {
            "question": "Y a-t-il des coûts pour faire du bénévolat?",
            "answer": "Non, notre programme de bénévolat est entièrement gratuit. Nous fournissons toute la formation, les vérifications d'antécédents et le soutien sans frais pour les bénévoles. Vous gagnerez des heures de service communautaire vérifiées et une expérience précieuse en aidant les membres âgés de la communauté."
          },
          "screening": {
            "question": "Comment examinez-vous les bénévoles?",
            "answer": "Tous les bénévoles subissent des vérifications d'antécédents approfondies, une vérification des références, une évaluation des compétences et une formation complète. Nous nous assurons que tous les bénévoles sont certifiés en premiers soins et RCR pour la sécurité des bénévoles et des participants âgés."
          },
          "emergency": {
            "question": "Que se passe-t-il en cas d'urgence?",
            "answer": "Les bénévoles sont formés pour gérer les urgences et ont un accès direct à notre ligne de soutien 24/7. Nous maintenons des contacts d'urgence et des informations médicales pour tous les participants et coordonnons avec les fournisseurs de soins de santé au besoin."
          },
          "start": {
            "question": "À quelle vitesse puis-je commencer le bénévolat?",
            "answer": "Après avoir complété notre processus de candidature et de formation, la plupart des bénévoles peuvent commencer dans 1-2 semaines. Nous jumelons les bénévoles avec des participants âgés basés sur la disponibilité, les intérêts et l'emplacement pour la meilleure expérience pour tous."
          }
        }
      },
      "error": {
        "404": {
          "title": "Page Non Trouvée",
          "description": "Nous ne pouvons pas trouver la page que vous recherchez. Elle a peut-être été déplacée, supprimée, ou vous avez peut-être entré une URL incorrecte."
        },
        "suggestions": {
          "title": "Voici quelques liens utiles à la place:"
        },
        "link": {
          "home": "Aller à l'Accueil",
          "services": "Nos Opportunités de Bénévolat",
          "contact": "Nous Contacter"
        },
        "action": {
          "back": "Retour",
          "home": "Retourner à l'Accueil"
        }
      },
      "companions": {
        "loading": {
          "message": "Chargement de Nos Bénévoles...",
          "subMessage": "Découverte d'incroyables bénévoles qui font la différence"
        },
        "hero": {
          "title": "Rencontrez Nos Bénévoles Extraordinaires",
          "description": "Nos bénévoles dévoués viennent de tous les horizons, unis par leur passion d'aider les membres âgés de la communauté. Chaque bénévole est formé, vérifié par vérification des antécédents, et engagé à faire une différence significative grâce à la compagnie et au soutien."
        },
        "stats": {
          "volunteers": "Bénévoles Actifs",
          "trained": "Vérification d'Antécédents",
          "languages": "Langues Parlées"
        },
        "filters": {
          "title": "Trouver des Bénévoles par Intérêt",
          "description": "Explorez les bénévoles qui partagent des intérêts spécifiques, parlent différentes langues, ou ont de l'expérience dans les domaines qui vous importent.",
          "interests": "Intérêts des Bénévoles",
          "allInterests": "Tous les Intérêts",
          "specialty": {
            "all": "Toutes les Spécialités",
            "dementia": "Soins de Démence",
            "mobility": "Support de Mobilité",
            "technology": "Support Technologique",
            "meals": "Préparation de Repas",
            "medical": "Support Médical"
          },
          "language": {
            "all": "Toutes les Langues",
            "english": "Anglais",
            "french": "Français",
            "spanish": "Espagnol",
            "italian": "Italien",
            "portuguese": "Portugais",
            "mandarin": "Mandarin"
          },
          "availability": {
            "all": "Tous les Horaires",
            "morning": "Matins",
            "afternoon": "Après-midis",
            "evening": "Soirs",
            "overnight": "Nuits",
            "weekend": "Fins de Semaine"
          }
        },
        "featured": {
          "title": "Bénévoles Vedettes"
        },
        "badge": {
          "featured": "Vedette"
        },
        "detail": {
          "experience": "Expérience:",
          "languages": "Langues:"
        },
        "action": {
          "request": "Demander {{name}}"
        },
        "all": {
          "title": "Tous les Bénévoles Disponibles"
        },
        "availability": {
          "available": "Disponible",
          "limited": "Limité",
          "busy": "Occupé"
        },
        "why": {
          "title": "Pourquoi Choisir Nos Bénévoles?",
          "screening": {
            "title": "Sélection Rigoureuse",
            "description": "Chaque bénévole subit des vérifications d'antécédents complètes, une vérification des références, et une évaluation des compétences pour assurer la sécurité et la qualité."
          },
          "training": {
            "title": "Formation Continue",
            "description": "Nos bénévoles reçoivent une formation continue en soins aux personnes âgées, premiers secours, RCR, et conditions spécialisées comme la démence."
          },
          "compassion": {
            "title": "Compassion Authentique",
            "description": "Nous sélectionnons des bénévoles qui démontrent un soin authentique, de la patience, et de la compréhension en travaillant avec les personnes âgées."
          }
        },
        "cta": {
          "title": "Prêt à Rencontrer Votre Bénévole Parfait?",
          "description": "Planifiez une consultation gratuite pour discuter de vos besoins et rencontrer des bénévoles potentiels. Nous vous aiderons à trouver le partenaire parfait pour les soins de votre proche.",
          "schedule": "Planifier une Consultation Gratuite",
          "call": "Appelez (514) 555-0123"
        }
      },
      "booking": {
        "hero": {
          "title": "Postulez comme Bénévole Aujourd'hui",
          "subtitle": "Faites le premier pas vers un impact significatif dans votre communauté. Notre candidature de bénévolat est entièrement gratuite et nous aide à comprendre vos intérêts et votre disponibilité pour créer l'expérience bénévole parfaite.",
          "badge": {
            "free": "100% Gratuit",
            "flexible": "Horaires Flexibles",
            "meaningful": "Impact Significatif"
          }
        },
        "form": {
          "title": "Soumettez Votre Candidature de Bénévolat",
          "subtitle": "Remplissez le formulaire ci-dessous et nous vous contactons dans les 24 heures pour discuter des opportunités de bénévolat et des prochaines étapes."
        },
        "personal": {
          "title": "Informations Personnelles",
          "firstName": "Prénom *",
          "lastName": "Nom *",
          "firstName.error": "Le prénom est requis"
        }
      },
      "services": {
        "loading": {
          "message": "Chargement des Opportunités de Bénévolat...",
          "subMessage": "Découverte de moyens significatifs de faire une différence..."
        },
        "hero": {
          "title": "Opportunités de Bénévolat",
          "subtitle": "Opportunités de bénévolat significatives conçues pour aider les membres âgés de la communauté tout en vous fournissant une expérience précieuse et des heures de service communautaire."
        },
        "section": {
          "title": "Façons de Faire une Différence",
          "subtitle": "Choisissez des activités bénévoles qui correspondent à vos intérêts, votre horaire, et l'impact que vous voulez faire"
        },
        "companionship": {
          "title": "Compagnie Amicale",
          "description": "Fournir des conversations engageantes, des activités partagées, et un soutien émotionnel pour combattre la solitude et maintenir les connexions sociales pour les membres âgés de la communauté.",
          "feature1": "Conversation amicale et écoute active",
          "feature2": "Jeux de société, puzzles, et activités récréatives",
          "feature3": "Lecture ensemble et discussion de livres",
          "feature4": "Partage de souvenirs et d'histoires de vie",
          "feature5": "Soutien émotionnel pendant les moments difficiles",
          "impact": "Parfait pour les heures de service communautaire"
        },
        "mobility": {
          "title": "Compagnie de Marche",
          "description": "Fournir une compagnie sûre et solidaire pendant les promenades et les activités physiques légères pour aider à maintenir l'indépendance et le bien-être.",
          "feature1": "Promenades accompagnées et activités extérieures",
          "feature2": "Support d'exercices légers et d'étirement",
          "feature3": "Assistance avec les exercices de mobilité",
          "feature4": "Surveillance de sécurité pendant les activités",
          "feature5": "Encouragement pour rester actif"
        },
        "technology": {
          "title": "Assistance Technologique",
          "description": "Aider les membres âgés de la communauté à rester connectés avec famille et amis grâce à la technologie, comblant la fracture numérique avec patience et compréhension.",
          "feature1": "Tutoriels pour smartphone et tablette",
          "feature2": "Configuration et support d'appels vidéo",
          "feature3": "Guide des médias sociaux et messagerie",
          "feature4": "Éducation à la sécurité en ligne",
          "feature5": "Organisation et partage de photos numériques"
        },
        "errands": {
          "title": "Assistance de Courses",
          "description": "Fournir un soutien pratique pour les tâches quotidiennes et les courses, aidant à maintenir l'indépendance et s'assurer que les besoins essentiels sont satisfaits.",
          "feature1": "Achats d'épicerie et visites à la pharmacie",
          "feature2": "Accompagnement bancaire et aux rendez-vous",
          "feature3": "Aide à la préparation de repas légers",
          "feature4": "Aide à l'organisation et au désencombrement",
          "feature5": "Transport vers les rendez-vous médicaux"
        },
        "meals": {
          "title": "Préparation de Repas",
          "description": "Soutenir une alimentation nutritive grâce à la planification, la préparation de repas, et partager les repas ensemble pour promouvoir la santé et les connexions sociales.",
          "feature1": "Préparation et cuisine de repas simples",
          "feature2": "Planification d'épicerie et choix sains",
          "feature3": "Organisation et sécurité de la cuisine",
          "feature4": "Partager les repas et la conversation",
          "feature5": "Support pour régimes alimentaires spéciaux"
        },
        "respite": {
          "title": "Soins de Répit",
          "description": "Fournir un soulagement temporaire et un soutien aux aidants familiaux tout en assurant une compagnie et des soins continus pour les membres âgés de la communauté.",
          "feature1": "Compagnie supervisée et activités",
          "feature2": "Rappels de médicaments et surveillance de sécurité",
          "feature3": "Aide avec les tâches ménagères légères",
          "feature4": "Contact d'urgence et communication",
          "feature5": "Mises à jour familiales et tranquillité d'esprit"
        },
        "pricing": {
          "mobility": "Idéal pour bénévoles axés sur la condition physique",
          "technology": "Parfait pour étudiants doués en technologie",
          "errands": "Idéal pour horaires flexibles",
          "meals": "Parfait pour les passionnés de cuisine",
          "respite": "Opportunité de bénévolat avancée"
        },
        "process": {
          "title": "Comment ça Fonctionne",
          "subtitle": "Notre approche simple et attentionnée pour commencer",
          "step1": {
            "title": "Consultation Gratuite",
            "description": "Nous commençons par une évaluation complète des besoins, préférences et objectifs pour créer un plan de bénévolat personnalisé."
          },
          "step2": {
            "title": "Jumelage de Bénévoles",
            "description": "Notre équipe vous jumelle soigneusement avec des membres âgés de la communauté selon la personnalité, les intérêts et la disponibilité."
          },
          "step3": {
            "title": "Le Service Bénévole Commence",
            "description": "Vous commencez à fournir une compagnie significative et un soutien, avec des suivis réguliers et des commentaires."
          },
          "step4": {
            "title": "Soutien Continu",
            "description": "Notre coordinateur de bénévoles surveille les progrès, offre la formation et assure la vérification des heures bénévoles."
          }
        },
        "coverage": {
          "title": "Zones de Service et Disponibilité",
          "description": "KindCompanion dessert fièrement la région du Grand Montréal avec des opportunités de bénévolat flexibles pour répondre aux besoins d'horaires des étudiants.",
          "inHome": {
            "title": "Visites à Domicile",
            "description": "Compagnons bénévoles dans le confort des maisons des membres âgés"
          },
          "flexible": {
            "title": "Horaires Flexibles",
            "description": "Options de bénévolat hebdomadaires, bi-hebdomadaires ou mensuelles disponibles"
          },
          "montreal": {
            "title": "Grand Montréal",
            "description": "Desservant Montréal, Laval, Longueuil et les environs"
          },
          "emergency": {
            "title": "Ligne de Soutien 24/7",
            "description": "Toujours disponible pour les questions ou préoccupations des bénévoles"
          }
        },
        "insurance": {
          "title": "Exigences de Bénévolat",
          "privatePay": {
            "label": "Vérification des Antécédents",
            "status": "✓ Requise"
          },
          "ramq": {
            "label": "Completion de Formation",
            "status": "Requise"
          },
          "private": {
            "label": "Vérification d'Heures",
            "status": "✓ Fournie"
          },
          "veterans": {
            "label": "Références",
            "status": "✓ Requises"
          },
          "consultation": {
            "title": "Candidature Gratuite",
            "subtitle": "Aucun engagement requis"
          }
        },
        "cta": {
          "title": "Prêt à Commencer?",
          "description": "Postulez aujourd'hui et découvrez comment faire du bénévolat avec des membres âgés de la communauté peut fournir une expérience significative et des heures de service communautaire vérifiées.",
          "consultation": "Postuler Maintenant",
          "phone": "(514) 555-0123"
        }
      },
      "about": {
        "loading": {
          "message": "À Propos de Notre Programme de Bénévolat",
          "subMessage": "Chargement de notre mission et impact communautaire..."
        },
        "hero": {
          "title": "À Propos de Notre Programme de Bénévolat",
          "subtitle": "Opportunités de bénévolat communautaires connectant des personnes attentionnées avec des membres âgés de la communauté tout en fournissant des heures de service communautaire vérifiées."
        },
        "mission": {
          "title": "Notre Mission",
          "description1": "Créer des connexions significatives entre les bénévoles et les membres âgés de la communauté tout en fournissant aux étudiants et membres de la communauté des heures de bénévolat précieuses pour des exigences académiques, légales, ou de développement personnel.",
          "description2": "Nous croyons que le travail bénévole significatif devrait profiter à tous les participants - fournissant aux personnes âgées de la compagnie et du soutien tout en offrant aux bénévoles une expérience précieuse et des heures de service communautaire vérifiées."
        },
        "stats": {
          "volunteers": "200+ BÉNÉVOLES ACTIFS",
          "experience": "ANNÉES D'EXPÉRIENCE",
          "support": "SUPPORT DISPONIBLE"
        },
        "values": {
          "title": "Nos Valeurs Fondamentales",
          "subtitle": "Les principes qui guident tout ce que nous faisons",
          "compassion": {
            "title": "Compassion",
            "description": "Nous approchons chaque interaction avec empathie, gentillesse, et un soin véritable pour les besoins et circonstances uniques de chaque individu."
          },
          "respect": {
            "title": "Respect",
            "description": "Nous honorons la sagesse, les expériences et les préférences de nos clients, s'assurant qu'ils maintiennent leur dignité et autonomie."
          },
          "trust": {
            "title": "Confiance",
            "description": "Nous construisons des relations durables grâce à la fiabilité, la transparence, et un engagement inébranlable envers la sécurité et la confidentialité."
          },
          "excellence": {
            "title": "Excellence",
            "description": "Nous nous efforçons continuellement d'atteindre les plus hauts standards en formation, prestation de services, et développement professionnel."
          }
        },
        "story": {
          "title": "Notre Histoire",
          "description1": "KindCompanion a été fondé en 2008 par Marie Dubois, une infirmière autorisée qui a été témoin de première main de l'impact profond que la compagnie significative pouvait avoir sur le bien-être des personnes âgées.",
          "description2": "Ce qui a commencé comme un petit service centré sur la famille est devenu le fournisseur de soins de compagnie le plus fiable de Montréal. Nous sommes restés fidèles à nos principes fondateurs: traiter chaque client comme de la famille, fournir des soins personnalisés, et favoriser des connexions authentiques qui illuminent les vies.",
          "description3": "Aujourd'hui, notre équipe de compagnons soigneusement sélectionnés et formés sert des centaines de familles dans la région du Grand Montréal, offrant tout de la compagnie quotidienne aux services de soutien spécialisés. Mais notre cœur reste le même - aider les gens à vieillir avec grâce, dignité et joie.",
          "founder": {
            "title": "Fondé avec Amour",
            "date": "MONTRÉAL, 2008",
            "quote": "\"Après avoir pris soin de ma propre grand-mère, j'ai réalisé à quel point la compagnie authentique pouvait faire une différence. KindCompanion est né de la conviction que personne ne devrait faire face au vieillissement seul.\"",
            "signature": "- Marie Dubois, Fondatrice"
          }
        },
        "features": {
          "title": "Pourquoi Choisir KindCompanion",
          "subtitle": "L'excellence professionnelle rencontre les soins personnels",
          "screened": {
            "title": "Entièrement Vérifiés",
            "description": "Tous les compagnons subissent des vérifications d'antécédents complètes, vérification de références, et formation professionnelle."
          },
          "certified": {
            "title": "Professionnels Certifiés",
            "description": "Notre équipe comprend des aidants certifiés, des professionnels de la santé, et des spécialistes de compagnon formés."
          },
          "insured": {
            "title": "Entièrement Assurés",
            "description": "L'assurance responsabilité et de cautionnement complète offre une tranquillité d'esprit totale pour les familles."
          },
          "support": {
            "title": "Support 24/7",
            "description": "Notre équipe de soutien est disponible 24 heures sur 24 pour les urgences, questions et coordination des soins."
          },
          "matching": {
            "title": "Jumelage Personnalisé",
            "description": "Nous jumelons soigneusement les compagnons aux clients selon la personnalité, les intérêts, et les besoins de soins spécifiques."
          },
          "bilingual": {
            "title": "Services Bilingues",
            "description": "Nos compagnons parlent couramment français et anglais, avec support linguistique supplémentaire disponible."
          }
        },
        "cta": {
          "title": "Prêt à en Savoir Plus?",
          "description": "Contactez-nous aujourd'hui pour une consultation gratuite et découvrez comment KindCompanion peut améliorer la qualité de vie de votre proche.",
          "consultation": "Planifier une Consultation",
          "phone": "(514) 555-0123"
        }
      }
    });

    // Check if running in browser
    if (typeof window !== 'undefined') {
      // First check localStorage for saved preference
      const savedLanguage = localStorage.getItem('preferred-language') as SupportedLanguage;
      if (savedLanguage && this.isValidLanguage(savedLanguage)) {
        this.setLanguage(savedLanguage);
        return;
      }

      // Detect browser language as fallback
      const browserLanguage = this.detectBrowserLanguage();
      this.setLanguage(browserLanguage || 'en');
    } else {
      // Server-side rendering fallback
      this.setLanguage('en');
    }
  }

  private detectBrowserLanguage(): SupportedLanguage | null {
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language || (navigator as any).userLanguage;

      if (browserLang) {
        if (browserLang.toLowerCase().startsWith('fr')) {
          return 'fr';
        }
        return 'en'; // Default to English
      }
    }
    return null;
  }

  private isValidLanguage(lang: string): lang is SupportedLanguage {
    return lang === 'en' || lang === 'fr';
  }

  private setLanguage(language: SupportedLanguage): void {
    this.translate.use(language);
    this.currentLanguageSubject.next(language);
  }

  public getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguageSubject.value;
  }

  public getCurrentLanguageInfo() {
    return this.languages[this.getCurrentLanguage()];
  }

  public switchLanguage(language: SupportedLanguage): void {
    if (!this.isValidLanguage(language)) {
      console.warn(`Unsupported language: ${language}`);
      return;
    }

    // Start loading state
    this.isChangingLanguageSubject.next(true);

    // Save preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', language);
    }

    // Simulate loading time for better UX
    setTimeout(() => {
      // Switch language instantly with ngx-translate (no reload needed!)
      this.setLanguage(language);
      console.log(`Language switched to: ${language}`);

      // End loading state after a brief delay
      setTimeout(() => {
        this.isChangingLanguageSubject.next(false);
      }, 300);
    }, 800);
  }

  public getLanguageFromUrl(): SupportedLanguage {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/fr')) {
        return 'fr';
      }
    }
    return 'en';
  }

  public isCurrentLanguage(language: SupportedLanguage): boolean {
    return this.getCurrentLanguage() === language;
  }

  public getAlternateLanguage(): SupportedLanguage {
    return this.getCurrentLanguage() === 'en' ? 'fr' : 'en';
  }

  // Utility methods for templates
  public isEnglish(): boolean {
    return this.getCurrentLanguage() === 'en';
  }

  public isFrench(): boolean {
    return this.getCurrentLanguage() === 'fr';
  }

  // Format dates according to current locale
  public formatDate(date: Date): string {
    const locale = this.getCurrentLanguage() === 'fr' ? 'fr-CA' : 'en-CA';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Format currency according to current locale
  public formatCurrency(amount: number): string {
    const locale = this.getCurrentLanguage() === 'fr' ? 'fr-CA' : 'en-CA';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'CAD'
    }).format(amount);
  }
}