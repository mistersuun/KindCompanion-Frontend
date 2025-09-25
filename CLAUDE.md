# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KindCompanion-Frontend is an Angular-based website for a healthcare companion service targeting elderly individuals in Montreal. The application serves multiple user types:
- Elderly clients seeking companionship services
- Family members researching services for elderly relatives
- Admin staff managing operations through a dashboard

## Architecture & Design Principles

### Accessibility-First Design
- WCAG 2.1 AA compliance with enhanced elderly-friendly features
- Large, easily clickable interface elements with high contrast
- Scalable typography system with user-controllable font sizes
- Simplified navigation patterns with consistent layouts
- Screen reader compatibility and keyboard navigation

### Bilingual Implementation
- English/French bilingual functionality for Montreal market
- Proper Canadian French localization
- Language switcher with persistent preferences
- Culturally appropriate content and imagery for Quebec's elderly population
- SEO optimization for both languages with hreflang implementation

### User Experience Strategy
- Elderly-focused interface design with minimal cognitive load
- Family member integration for dual-user experience
- Trust-building elements throughout (testimonials, companion profiles, security info)
- Progressive web app features for mobile accessibility
- Error-resistant forms with clear validation and guidance

## Development Commands

*Note: This repository is in early setup phase. Standard Angular commands will apply once initialized:*

```bash
# Install dependencies
npm install

# Development server
ng serve

# Build for production
ng build --prod

# Run tests
ng test

# Run e2e tests
ng e2e

# Lint code
ng lint
```

## Key Implementation Areas

### Customer-Facing Features
- Multi-page website (Home, About, Services, How It Works, Pricing, Contact, Blog, FAQ)
- Service inquiry and booking workflow with intake forms
- Companion matching system with detailed profiles
- Family portal for monitoring services
- Testimonial and success story management
- Online scheduling with calendar integration

### Admin Dashboard
- Real-time analytics and business intelligence
- Client management with detailed profiles and service history
- Companion management with performance tracking
- Financial dashboard with revenue analysis
- Automated reporting with customizable KPIs
- Communication log system for all interactions

### Technical Requirements
- Responsive design optimized for tablet usage by elderly demographics
- PIPEDA compliance for Canadian privacy regulations
- Fast loading times critical for elderly user retention
- Local SEO optimization for Montreal market
- Robust error handling and recovery systems

## Content Strategy

### Trust Building Elements
- Comprehensive companion vetting process information
- Safety protocols and emergency procedures
- Insurance coverage details
- Background check verification
- Success metrics and outcome data

### Conversion Optimization
- Multiple conversion funnels (consultation booking, inquiry forms, newsletters)
- Progressive information disclosure to reduce overwhelm
- Clear pricing calculator with sliding scale options
- Downloadable resources for family decision-making
- Referral system with word-of-mouth incentives

## Development Priorities

1. **Foundation Phase**: Complete website architecture with accessibility and bilingual functionality
2. **Customer Experience Phase**: Service inquiry workflow, companion matching, family portal
3. **Analytics Phase**: Admin dashboard with comprehensive business intelligence
4. **Optimization Phase**: Performance testing, A/B testing framework, ongoing improvements

## Special Considerations

- Elderly user focus groups should validate all UX decisions
- Cultural sensitivity required for Quebec market localization
- Healthcare-adjacent compliance considerations for service delivery
- Scalability planning for expansion to other Canadian cities