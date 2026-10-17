import './style.css'
import { createClient } from '@supabase/supabase-js'

const WHATSAPP_NUMBER = '15551234567'
const PHONE_DISPLAY = '+1 (555) 123-4567'
const EMAIL_DISPLAY = 'hello@northstarcleaning.com'
const ADDRESS_DISPLAY = '48 Market Street, Boston, MA 02108'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

const DEMO_LABEL = '<span class="demo-badge">Sample</span>'

const icon = {
  star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  checkSmall: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  mapPin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  home: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  building: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>',
  sparkles: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.94 14.66A2 2 0 0 0 12 13l.66-1.06a2 2 0 0 1 3.34 0L16.66 13a2 2 0 0 0 2.06 1 2 2 0 0 1 2.28 2.4l-.14.72a2 2 0 0 0 1 2.18l.07.05a2 2 0 0 1-1 3.65h-.16a2 2 0 0 0-2.18 1l-.06.1a2 2 0 0 1-3.44 0L13.4 23a2 2 0 0 0-2.18-1H11a2 2 0 0 1-2-3.46l.06-.05a2 2 0 0 0 1-2.18l-.14-.72a2 2 0 0 1 2.28-2.4z"/><path d="M5 3v4M3 5h4M6 17v4M4 19h4"/></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  award: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  compass: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  whatsapp: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
  info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
}

const services = [
  {
    icon: icon.home,
    title: 'Residential Cleaning',
    desc: 'Thorough, top-to-bottom home cleaning that keeps your living space fresh and healthy.',
    features: ['Dust & surface wipe-down', 'Kitchen & bathroom sanitize', 'Floor mopping & vacuuming', 'Flexible weekly or monthly'],
  },
  {
    icon: icon.building,
    title: 'Commercial Cleaning',
    desc: 'Professional cleaning for offices, retail, and workplaces — minimal disruption, maximum shine.',
    features: ['After-hours scheduling', 'Desk & common area care', 'Restroom restocking', 'Daily, weekly, or custom plans'],
  },
  {
    icon: icon.sparkles,
    title: 'Deep Cleaning',
    desc: 'A detailed intensive clean for move-ins, move-outs, or those times that need extra attention.',
    features: ['Inside appliance cleaning', 'Grout & tile scrubbing', 'Baseboards & blinds', 'Wall & door wipe-down'],
  },
]

const plans = [
  {
    name: 'Essential',
    desc: 'Perfect for small homes and apartments.',
    price: '$89',
    unit: '/ visit',
    features: ['Up to 1,000 sq ft', '1 cleaning specialist', 'Standard clean checklist', 'Bi-weekly scheduling', 'Eco-friendly products'],
    featured: false,
  },
  {
    name: 'Professional',
    desc: 'Our most popular plan for family homes.',
    price: '$149',
    unit: '/ visit',
    features: ['Up to 2,500 sq ft', '2 cleaning specialists', 'Deep clean checklist', 'Weekly or bi-weekly', 'Eco-friendly products', 'Priority booking'],
    featured: true,
  },
  {
    name: 'Premium',
    desc: 'Comprehensive care for large or busy spaces.',
    price: '$229',
    unit: '/ visit',
    features: ['Up to 4,000 sq ft', '3 cleaning specialists', 'Deep + specialty clean', 'Custom schedule', 'Eco-friendly products', 'Dedicated team lead', 'Satisfaction guarantee'],
    featured: false,
  },
]

const testimonials = [
  {
    quote: "NorthStar transformed our office. The team is punctual, thorough, and always professional. Our workspace has never looked better.",
    name: 'Sarah Mitchell',
    role: 'Office Manager, BlueWave Tech',
    initials: 'SM',
  },
  {
    quote: "I've tried several cleaning services and none compare. They pay attention to the details others miss. Highly recommend!",
    name: 'James Okafor',
    role: 'Homeowner',
    initials: 'JO',
  },
  {
    quote: "The deep clean before our move-in was incredible. Every surface sparkled. Worth every penny and then some.",
    name: 'Priya Sharma',
    role: 'New Homeowner',
    initials: 'PS',
  },
]

const HERO_IMG = 'https://images.pexels.com/photos/6195288/pexels-photo-6195288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2'
const HERO_IMG_MOBILE = 'https://images.pexels.com/photos/6195288/pexels-photo-6195288.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'

document.querySelector('#app').innerHTML = `
  <a href="#main-content" class="skip-link">Skip to content</a>
  <nav class="navbar" id="navbar" aria-label="Main navigation">
    <div class="container navbar__inner">
      <a href="#home" class="brand" aria-label="NorthStar Cleaning home">
        <span class="brand__icon">${icon.compass}</span>
        <span class="brand__name">North<span>Star</span></span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="#contact" class="btn btn--ghost">Get a Quote</a>
        <a href="#contact" class="btn btn--primary">Get Started</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <main id="main-content">
  <section class="hero" id="home">
    <div class="container hero__grid">
      <div class="hero__content">
        <span class="hero__badge">${icon.shield} Bonded & Insured Cleaning Pros</span>
        <h1 class="hero__title">Spotless Spaces, <span>Effortless</span> Living</h1>
        <p class="hero__desc">NorthStar Cleaning delivers reliable, eco-friendly residential and commercial cleaning. We handle the mess so you don't have to.</p>
        <div class="hero__actions">
          <a href="#contact" class="btn btn--primary">Get a Free Quote</a>
          <a href="#services" class="btn btn--ghost">View Services</a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="num">500+</span>
            <span class="label">Happy Clients</span>
            ${DEMO_LABEL}
          </div>
          <div class="hero__stat">
            <span class="num">12+</span>
            <span class="label">Years Experience</span>
            ${DEMO_LABEL}
          </div>
          <div class="hero__stat">
            <span class="num">4.9</span>
            <span class="label">Average Rating</span>
            ${DEMO_LABEL}
          </div>
        </div>
      </div>
      <div class="hero__image">
        <div class="hero__image-wrapper">
          <img
            src="${HERO_IMG_MOBILE}"
            srcset="${HERO_IMG_MOBILE} 800w, ${HERO_IMG} 1260w"
            sizes="(max-width: 960px) 100vw, 600px"
            width="1260" height="800"
            alt="Two professional cleaners in protective gear vacuuming and disinfecting a bright modern living room"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div class="hero__floating hero__floating--tl" role="presentation">
          <span class="fi-icon">${icon.check}</span>
          <div><div class="fi-title">100% Satisfaction</div><div class="fi-sub">Guaranteed clean</div></div>
        </div>
        <div class="hero__floating hero__floating--br" role="presentation">
          <span class="fi-icon">${icon.leaf}</span>
          <div><div class="fi-title">Eco-Friendly</div><div class="fi-sub">Safe products</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="trust" aria-label="Service highlights">
    <div class="container trust__inner">
      <div class="trust__item">${icon.award} Award-Winning Service</div>
      <div class="trust__item">${icon.shield} Fully Insured & Bonded</div>
      <div class="trust__item">${icon.leaf} Eco-Friendly Products</div>
      <div class="trust__item">${icon.clock} Flexible Scheduling</div>
      <div class="trust__item">${icon.check} Background-Checked Staff</div>
    </div>
  </section>

  <section class="section" id="services" aria-labelledby="services-title">
    <div class="container">
      <div class="section__header reveal">
        <span class="section__eyebrow">What We Do</span>
        <h2 class="section__title" id="services-title">Cleaning Services Tailored to You</h2>
        <p class="section__subtitle">From cozy apartments to busy offices, we have a cleaning solution designed around your space and schedule.</p>
      </div>
      <div class="services__grid">
        ${services.map((s, i) => `
          <article class="service-card reveal" style="transition-delay:${i * 100}ms">
            <div class="service-card__icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <ul>${s.features.map(f => `<li>${icon.checkSmall} <span>${f}</span></li>`).join('')}</ul>
          </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="section pricing" id="pricing" aria-labelledby="pricing-title">
    <div class="container">
      <div class="section__header reveal">
        <span class="section__eyebrow">Pricing</span>
        <h2 class="section__title" id="pricing-title">Simple, Transparent Pricing</h2>
        <p class="section__subtitle">No hidden fees. Choose the plan that fits your space, and cancel anytime.</p>
        <div class="demo-note" style="margin-top:1rem;">${icon.info} Pricing shown below is sample data for demonstration purposes.</div>
      </div>
      <div class="pricing__grid">
        ${plans.map((p, i) => `
          <article class="price-card ${p.featured ? 'price-card--featured' : ''} reveal" style="transition-delay:${i * 100}ms">
            ${p.featured ? '<span class="price-card__tag">Most Popular</span>' : ''}
            <h3>${p.name}</h3>
            <p class="price-card__desc">${p.desc}</p>
            <div class="price-card__price">${p.price}<small> ${p.unit}</small></div>
            <ul class="price-card__features">
              ${p.features.map(f => `<li>${icon.check} <span>${f}</span></li>`).join('')}
            </ul>
            <a href="#contact" class="btn ${p.featured ? 'btn--primary' : 'btn--ghost'} btn--block">Choose ${p.name}</a>
          </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="section" id="testimonials" aria-labelledby="testimonials-title">
    <div class="container">
      <div class="section__header reveal">
        <span class="section__eyebrow">Reviews</span>
        <h2 class="section__title" id="testimonials-title">What Our Clients Say</h2>
        <p class="section__subtitle">We're proud to be trusted by homes and businesses across the region.</p>
        <div class="demo-note" style="margin-top:1rem;">${icon.info} Reviews below are fictional samples for this portfolio concept.</div>
      </div>
      <div class="testimonials__grid">
        ${testimonials.map((t, i) => `
          <figure class="testimonial reveal" style="transition-delay:${i * 100}ms">
            <div class="testimonial__stars" aria-label="5 out of 5 stars">${icon.star}${icon.star}${icon.star}${icon.star}${icon.star}</div>
            <blockquote class="testimonial__quote">"${t.quote}"</blockquote>
            <figcaption class="testimonial__person">
              <div class="testimonial__avatar" aria-hidden="true">${t.initials}</div>
              <div><div class="testimonial__name">${t.name}</div><div class="testimonial__role">${t.role}</div></div>
            </figcaption>
          </figure>`).join('')}
      </div>
    </div>
  </section>

  <section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="container">
      <div class="section__header reveal">
        <span class="section__eyebrow">Get In Touch</span>
        <h2 class="section__title" id="contact-title">Request Your Free Quote</h2>
        <p class="section__subtitle">Tell us about your space and we'll get back to you with a tailored cleaning plan.</p>
      </div>
      <div class="contact__grid">
        <div class="contact__info reveal">
          <div class="contact__info-item">
            <span class="ci-icon">${icon.phone}</span>
            <div><div class="ci-label">Call us</div><div class="ci-value">${PHONE_DISPLAY}</div></div>
          </div>
          <div class="contact__info-item">
            <span class="ci-icon">${icon.mail}</span>
            <div><div class="ci-label">Email us</div><div class="ci-value">${EMAIL_DISPLAY}</div></div>
          </div>
          <div class="contact__info-item">
            <span class="ci-icon">${icon.mapPin}</span>
            <div><div class="ci-label">Visit us</div><div class="ci-value">${ADDRESS_DISPLAY}</div></div>
          </div>
          <div class="contact__info-item">
            <span class="ci-icon">${icon.clock}</span>
            <div><div class="ci-label">Hours</div><div class="ci-value">Mon–Sat, 7am–7pm</div></div>
          </div>
          <div class="demo-note" style="background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.15);color:var(--primary-100);">
            ${icon.info} All contact details above are sample placeholders for this demo website.
          </div>
        </div>
        <form class="contact__form reveal" id="contactForm" novalidate aria-describedby="form-instructions">
          <p id="form-instructions" style="font-size:0.85rem;color:var(--text-muted);margin-bottom:var(--space-3);">
            Fields marked with <span style="color:var(--error-500)">*</span> are required.
          </p>
          <div id="formFeedback" class="form-feedback" role="alert" aria-live="polite"></div>
          <div class="form-row">
            <div class="form-group">
              <label for="cf-name">Full Name <span style="color:var(--error-500)">*</span></label>
              <input type="text" id="cf-name" name="name" class="form-control" placeholder="Jane Doe" required autocomplete="name" />
            </div>
            <div class="form-group">
              <label for="cf-phone">Phone</label>
              <input type="tel" id="cf-phone" name="phone" class="form-control" placeholder="+1 (555) 000-0000" autocomplete="tel" />
            </div>
          </div>
          <div class="form-group">
            <label for="cf-email">Email <span style="color:var(--error-500)">*</span></label>
            <input type="email" id="cf-email" name="email" class="form-control" placeholder="jane@example.com" required autocomplete="email" />
          </div>
          <div class="form-group">
            <label for="cf-service">Service of Interest</label>
            <select id="cf-service" name="service" class="form-control">
              <option value="">Select a service…</option>
              <option>Residential Cleaning</option>
              <option>Commercial Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cf-message">Message <span style="color:var(--error-500)">*</span></label>
            <textarea id="cf-message" name="message" class="form-control" placeholder="Tell us about your space, size, and any special requests…" required></textarea>
          </div>
          <button type="submit" class="btn btn--primary btn--block" id="submitBtn">Send Request</button>
        </form>
      </div>
    </div>
  </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="#home" class="brand">
            <span class="brand__icon">${icon.compass}</span>
            <span class="brand__name">North<span style="color:var(--primary-400)">Star</span></span>
          </a>
          <p>Professional, eco-friendly cleaning for homes and businesses. Spotless spaces, effortlessly.</p>
        </div>
        <div class="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Residential</a></li>
            <li><a href="#services">Commercial</a></li>
            <li><a href="#services">Deep Cleaning</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#contact">${PHONE_DISPLAY}</a></li>
            <li><a href="#contact">${EMAIL_DISPLAY}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} NorthStar Cleaning — Fictional Portfolio Concept. All content is for demonstration only.</span>
        <span class="demo-badge">Demo Website</span>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20NorthStar%20Cleaning!%20I'd%20like%20a%20quote." class="whatsapp-fab" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp (demo link)">
    ${icon.whatsapp}
  </a>
`

/* Navbar scroll + mobile toggle */
const navbar = document.getElementById('navbar')
const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')

window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 20)
}, { passive: true })

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav-links--open')
  navToggle.classList.toggle('nav-toggle--open', isOpen)
  navToggle.setAttribute('aria-expanded', String(isOpen))
})

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('nav-toggle--open')
    navLinks.classList.remove('nav-links--open')
    navToggle.setAttribute('aria-expanded', 'false')
  })
})

/* Close mobile menu on Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('nav-links--open')) {
    navToggle.classList.remove('nav-toggle--open')
    navLinks.classList.remove('nav-links--open')
    navToggle.setAttribute('aria-expanded', 'false')
    navToggle.focus()
  }
})

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href')
    if (href === '#') return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

/* Reveal on scroll */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

/* Contact form — saves to Supabase, shows demo-aware feedback */
const form = document.getElementById('contactForm')
const feedback = document.getElementById('formFeedback')
const submitBtn = document.getElementById('submitBtn')

function clearErrors() {
  form.querySelectorAll('.form-control--error').forEach(el => el.classList.remove('form-control--error'))
}

function markError(field) {
  field.classList.add('form-control--error')
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  clearErrors()
  feedback.className = 'form-feedback'
  feedback.textContent = ''

  const nameField = form.name
  const emailField = form.email
  const messageField = form.message

  const data = {
    name: nameField.value.trim(),
    email: emailField.value.trim(),
    phone: form.phone.value.trim() || null,
    service: form.service.value || null,
    message: messageField.value.trim(),
  }

  let hasError = false

  if (!data.name) {
    markError(nameField)
    hasError = true
  }
  if (!data.email) {
    markError(emailField)
    hasError = true
  }
  if (!data.message) {
    markError(messageField)
    hasError = true
  }

  if (hasError) {
    feedback.classList.add('form-feedback--error')
    feedback.textContent = 'Please fill in all required fields.'
    const firstError = form.querySelector('.form-control--error')
    if (firstError) firstError.focus()
    return
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  if (!emailOk) {
    markError(emailField)
    feedback.classList.add('form-feedback--error')
    feedback.textContent = 'Please enter a valid email address.'
    emailField.focus()
    return
  }

  submitBtn.disabled = true
  submitBtn.textContent = 'Sending…'

  try {
    const { error } = await supabase.from('contact_submissions').insert(data)
    if (error) throw error

    feedback.classList.add('form-feedback--success')
    feedback.innerHTML = `Thanks, ${data.name.split(' ')[0]}! Your request has been saved. ${icon.info} <strong>This is a demo</strong> — no real message was sent to any business. The form data was stored in the demo database.`
    form.reset()
  } catch (err) {
    feedback.classList.add('form-feedback--demo')
    feedback.innerHTML = `Could not reach the demo database, but your form looks great. ${icon.info} This is a fictional portfolio project — no real message was sent.`
  } finally {
    submitBtn.disabled = false
    submitBtn.textContent = 'Send Request'
  }
})
