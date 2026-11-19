# NorthStar Cleaning

A modern, responsive cleaning service website concept designed to demonstrate a professional digital experience for residential and commercial cleaning businesses.

**Live Demo:** https://northstar-cleaning.ai.studio

**Repository:** https://github.com/rafael-d-santos-dev/northstar-cleaning

> **Portfolio Concept:** NorthStar Cleaning is a fictional business created for portfolio demonstration purposes. Business information, contact details, pricing, statistics, service claims, and customer testimonials are illustrative and do not represent a real company or verified customer experiences.

---

## Overview

NorthStar Cleaning is a business website concept focused on presenting cleaning services, pricing options, and customer inquiry experiences through a polished and responsive interface.

The project combines a clean visual identity, clear content hierarchy, conversion-focused sections, and interactive frontend features.

Its goal is to demonstrate how a traditional service business can be presented through a modern digital experience.

## Features

### 1. Responsive Business Website

- Responsive desktop and mobile layouts.
- Mobile navigation with accessible controls.
- Hero section with primary calls to action.
- Service highlights and trust indicators.
- Structured service and pricing sections.
- Contact information and inquiry interface.

### 2. Cleaning Services

Three illustrative service categories:

- Residential Cleaning
- Commercial Cleaning
- Deep Cleaning

Each service includes a description and a list of example features.

### 3. Pricing Plans

Three illustrative service plans:

- Essential
- Professional
- Premium

Features:
- Pricing comparison cards.
- Highlighted recommended plan.
- Plan selection connected to the inquiry form.

All prices and plan details are fictional demonstration content.

### 4. Interactive Quote Request Form

- Name, email, phone, service, and message fields.
- Required-field validation.
- Email and phone format validation.
- Accessible error feedback.
- Anti-spam honeypot field.
- Submission feedback and confirmation state.

The project includes optional Supabase client configuration through environment variables. When Supabase is not configured, a local in-memory fallback is used for demonstration purposes. This fallback does not provide persistent storage.

### 5. NorthStar Service Advisor — Assistant Concept

An interactive conversational guide designed to help visitors explore cleaning services and pricing options.

Features:
- Interactive conversation interface.
- Service and plan recommendations.
- Dynamic recommendation cards based on existing project data.
- Service selection connected to the quote request form.
- Reset and close controls.
- Accessible dialog semantics and live message announcements.

> **Important:** The Service Advisor is a predefined interactive concept, not a live AI integration. It does not use an LLM, external AI API, or remote knowledge base.

### 6. Additional Interactions

- WhatsApp contact interface with explicit demo feedback.
- Pricing selection and form handoff.
- Interactive feedback notifications.
- Scroll-based reveal effects.
- Responsive navigation behavior.

Contact information and communication endpoints are illustrative placeholders. No real WhatsApp conversation or business communication is configured.

---

## Technology Stack

- **Vite** — Development server and production bundler.
- **JavaScript (ES Modules)** — Application logic and interactions.
- **HTML5** — Semantic page structure.
- **CSS3** — Responsive layouts, visual styling, and animations.
- **Supabase JavaScript Client** — Optional database client integration.

The application uses a lightweight frontend architecture without a React framework.

## Project Structure

```text
northstar-cleaning/
├── index.html
├── main.js
├── assistant.js
├── style.css
├── assistant.css
├── package.json
├── package-lock.json
└── public/
    └── images/
```

The project may contain additional assets and configuration files depending on the current repository version.

## Getting Started

### Requirements

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Optional Supabase Configuration

The application supports optional Supabase client initialization through environment variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Without these variables, the application uses an in-memory demonstration fallback.

A production implementation would require a properly configured database, table schema, Row Level Security policies, and appropriate validation and security controls.

Never expose a Supabase service-role key in frontend environment variables.

## Accessibility & Responsive Design

The project includes accessibility considerations such as:

- Semantic HTML structure.
- Skip navigation link.
- Accessible mobile navigation controls.
- Form labels and validation feedback.
- Keyboard interaction support.
- ARIA attributes for interactive components.
- Dialog semantics for the Service Advisor.
- Live announcements for dynamic feedback.
- Responsive layouts for mobile and desktop.

These implementations do not replace a complete accessibility audit with assistive technologies.

## Before Real-World Use

Before adapting this concept for an actual cleaning business, the following would be necessary:

- Replace fictional business information and contact details.
- Replace illustrative prices and service descriptions.
- Obtain permission for production imagery.
- Replace sample testimonials with genuine customer feedback and consent.
- Configure and secure the production database.
- Implement appropriate data protection and privacy practices.
- Connect real communication and booking channels.
- Review all business claims and service guarantees.
- Perform production security, accessibility, and performance testing.

## Project Purpose

NorthStar Cleaning is an independent portfolio project created to demonstrate:

- Business website development.
- Responsive frontend engineering.
- Interactive form experiences.
- Conversion-focused UI design.
- JavaScript application architecture.
- Optional database integration.
- Conversational interface concepts.
- Accessibility considerations.

This is a fictional portfolio concept, not commissioned client work.

## Author

**Rafael Douglas**

GitHub: https://github.com/rafael-d-santos-dev

## License

This repository is a portfolio demonstration. No open-source license has been granted.
