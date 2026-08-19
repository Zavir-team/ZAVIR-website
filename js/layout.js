/* ==========================================================================
   ZAVIR-tech — Shared Layout (navbar, mobile menu, footer)
   Injected on every page for consistent multi-page navigation.
   ========================================================================== */

"use strict";

const NAV_PAGES = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "about", label: "About", href: "about.html" },
  { id: "services", label: "Services", href: "services.html" },
  { id: "portfolio", label: "Portfolio", href: "portfolio.html" },
  { id: "technologies", label: "Technologies", href: "technologies.html" },
  { id: "team", label: "Team", href: "team.html" },
  { id: "case-studies", label: "Case Studies", href: "case-studies.html" },
  { id: "contact", label: "Contact", href: "contact.html" },
];

const THEME_TOGGLE_SVG = `
            <svg
              class="theme-toggle__sun"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              class="theme-toggle__moon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>`;

function getCurrentPage() {
  return document.body.dataset.page || "home";
}

function navLinkClass(pageId, baseClass) {
  return pageId === getCurrentPage() ? `${baseClass} is-active` : baseClass;
}

function renderNavbar() {
  const links = NAV_PAGES.map(
    ({ id, label, href }) =>
      `<li><a href="${href}" class="${navLinkClass(id, "navbar__link")}">${label}</a></li>`
  ).join("\n          ");

  return `
    <header class="navbar" id="navbar">
      <div class="scroll-progress" id="scrollProgress" aria-hidden="true"><span></span></div>
      <nav class="navbar__inner container" aria-label="Main navigation">
        <a href="index.html" class="navbar__logo" data-company-name aria-label="ZAVIR-tech — Home">
          <img src="images/logo/zavir-logo.jpg" alt="ZAVIR-tech Logo" class="navbar__logo-image" data-logo-theme="true">
        </a>

        <ul class="navbar__links" id="navLinks">
          ${links}
        </ul>

        <div class="navbar__actions">
          <button class="theme-toggle" id="themeToggle" aria-label="Switch to dark mode" aria-pressed="false" title="Switch color theme">
            ${THEME_TOGGLE_SVG}
          </button>
          <a href="contact.html" class="btn btn--primary btn--sm navbar__cta">Request a Consultation</a>
          <button
            class="hamburger"
            id="hamburger"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobileMenu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>`;
}

function renderMobileMenu() {
  const links = NAV_PAGES.map(
    ({ id, label, href }) =>
      `<li><a href="${href}" class="${navLinkClass(id, "mobile-menu__link")}">${label}</a></li>`
  ).join("\n        ");

  return `
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true" inert>
      <ul class="mobile-menu__links">
        ${links}
      </ul>
      <a href="contact.html" class="btn btn--primary mobile-menu__cta">Request a Consultation</a>
    </div>`;
}

function renderFooter() {
  return `
    <footer class="footer" aria-label="Footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__brand">
            <a href="index.html" class="navbar__logo" data-company-name aria-label="ZAVIR-tech — Home">
              <img src="images/logo/zavir-logo.jpg" alt="ZAVIR-tech Logo" class="navbar__logo-image" data-logo-theme="true">
            </a>
            <p class="footer__tagline">
              Professional software development and digital solutions for businesses worldwide.
            </p>

            <p class="footer__newsletter-note">
              Have a project in mind? <a href="mailto:zavirtechnology@gmail.com">Email our team</a>.
            </p>
          </div>

          <nav class="footer__col" aria-label="Company links">
            <h3 class="footer__heading">Company</h3>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html#process">Our Process</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="case-studies.html">Case Studies</a></li>
            </ul>
          </nav>

          <nav class="footer__col" aria-label="Quick links">
            <h3 class="footer__heading">Quick Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="technologies.html">Technologies</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>

          <nav class="footer__col" aria-label="Services links">
            <h3 class="footer__heading">Services</h3>
            <ul>
              <li><a href="services.html">Web Development</a></li>
              <li><a href="services.html">Mobile Apps</a></li>
              <li><a href="services.html">AI Solutions</a></li>
              <li><a href="services.html">Cloud Solutions</a></li>
            </ul>
          </nav>

          <div class="footer__col" aria-label="Social media">
            <h3 class="footer__heading">Social</h3>
            <ul class="footer__socials">
              <li>
                <button type="button" data-social-coming-soon="GitHub" aria-label="GitHub link not yet available">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                </button>
              </li>
              <li>
                <a href="https://www.facebook.com/share/19PV6jZUD2/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.95v-8.437H7.078v-3.513h3.047V9.405c0-3.017 1.792-4.684 4.533-4.684 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.93-1.956 1.887v2.277h3.328l-.532 3.513h-2.796v8.437C19.612 23.082 24 18.092 24 12.073z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029Vb89jT8JZg40094sPX3a" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 00-3.478-8.416"/>
                  </svg>
                </a>
              </li>
              <li>
                <button type="button" data-social-coming-soon="LinkedIn" aria-label="LinkedIn link not yet available">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </li>
            </ul>
            <p class="social-coming-soon" id="socialComingSoon" role="status" aria-live="polite"></p>
          </div>
        </div>

        <div class="footer__bottom">
          <p>© <span id="year"></span> ZAVIR-tech. All rights reserved.</p>
          <p class="footer__legal-note">Contact us for privacy and service information.</p>
        </div>
      </div>
    </footer>`;
}

function renderBackToTop() {
  return `
    <button class="back-to-top" id="backToTop" aria-label="Back to top" data-ripple>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>`;
}

function injectLayout() {
  const headerSlot = document.getElementById("site-header");
  const mobileSlot = document.getElementById("site-mobile-menu");
  const footerSlot = document.getElementById("site-footer");
  const backToTopSlot = document.getElementById("site-back-to-top");

  if (headerSlot) headerSlot.outerHTML = renderNavbar();
  if (mobileSlot) mobileSlot.outerHTML = renderMobileMenu();
  if (footerSlot) footerSlot.outerHTML = renderFooter();
  if (backToTopSlot) backToTopSlot.outerHTML = renderBackToTop();
}

injectLayout();
