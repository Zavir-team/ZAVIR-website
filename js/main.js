/* ==========================================================================
   ZAVIR-tech — Main JavaScript
   Navbar, mobile menu, theme toggle, portfolio filter, slider,
   form validation, newsletter, back-to-top, ripple.
   ========================================================================== */

"use strict";

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ==========================================================================
   1. Sticky Navbar (transparent → blurred) + Active link highlighting
   ========================================================================== */
const navbar = $("#navbar");
const scrollProgress = $("#scrollProgress span");
const navLinks = $$(".navbar__link");
const mobileNavLinks = $$(".mobile-menu__link");
const sections = $$("main section[id]");
const currentPage = document.body.dataset.page;

function onScrollNavbar() {
  if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 24);
}

function onScrollProgress() {
  if (!scrollProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function pageFromHref(href) {
  if (!href) return "";
  const base = href.split("#")[0].replace(/^\.\//, "");
  if (!base || base === "/") return "home";
  return base.replace(/\.html$/, "").replace("index", "home");
}

function setActiveNavFromPage() {
  if (!currentPage) return;
  [...navLinks, ...mobileNavLinks].forEach((link) => {
    link.classList.toggle("is-active", pageFromHref(link.getAttribute("href")) === currentPage);
  });
}

/* Highlight the nav link matching the section currently in view (same-page anchors). */
if (navLinks.length && sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href && href.startsWith("#")) {
            link.classList.toggle("is-active", href === `#${id}`);
          }
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}
setActiveNavFromPage();

function scrollToPageHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.querySelector(hash);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener("load", scrollToPageHash);

/* ==========================================================================
   3. Mobile Menu
   ========================================================================== */
const hamburger = $("#hamburger");
const mobileMenu = $("#mobileMenu");

function toggleMobileMenu(force) {
  if (!mobileMenu || !hamburger) return;
  const open = force !== undefined ? force : !mobileMenu.classList.contains("is-open");
  mobileMenu.classList.toggle("is-open", open);
  hamburger.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileMenu.setAttribute("aria-hidden", String(!open));
  if (open) {
    mobileMenu.removeAttribute("inert");
    mobileMenu.querySelector("a")?.focus();
  } else {
    mobileMenu.setAttribute("inert", "");
  }
}

if (hamburger) hamburger.addEventListener("click", () => toggleMobileMenu());

// Close menu after choosing a link
$$(".mobile-menu__link, .mobile-menu__cta").forEach((link) =>
  link.addEventListener("click", () => toggleMobileMenu(false))
);

// Close menu with Escape key (keyboard accessibility)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("is-open")) {
    toggleMobileMenu(false);
    if (hamburger) hamburger.focus();
    return;
  }

  if (e.key === "Tab" && mobileMenu && mobileMenu.classList.contains("is-open")) {
    const focusable = $$('a[href], button:not([disabled])', mobileMenu);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

document.addEventListener("click", (e) => {
  if (!mobileMenu || !hamburger || !mobileMenu.classList.contains("is-open")) return;
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) toggleMobileMenu(false);
});

/* ==========================================================================
   4. Dark / Light Theme Toggle (persisted in localStorage)
   ========================================================================== */
const themeToggle = $("#themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    themeToggle.setAttribute("aria-pressed", String(next === "dark"));
    themeToggle.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
    
    // Update logo based on theme
    updateLogoForTheme(next);
    
    // Dispatch custom event for other listeners
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: next } }));
  });
}

if (themeToggle) {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

// Function to update logo based on theme
function updateLogoForTheme(theme) {
  const logoImages = document.querySelectorAll('.navbar__logo-image[data-logo-theme="true"]');
  const logoSrc = theme === 'dark' 
    ? 'images/logo/zavir-logo-removebg-preview (1).png' 
    : 'images/logo/zavir-logo.jpg';
  
  logoImages.forEach(img => {
    img.src = logoSrc;
  });
}

// Update logo on initial load based on current theme
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = document.documentElement.dataset.theme || 'light';
  updateLogoForTheme(currentTheme);
});

// Also listen for custom theme change events for dynamically added elements
document.addEventListener('themeChanged', (e) => {
  updateLogoForTheme(e.detail.theme);
});

/* ==========================================================================
   5. Back to Top
   ========================================================================== */
const backToTop = $("#backToTop");

function onScrollBackToTop() {
  if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 600);
}

if (backToTop) {
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/* Single scroll listener, throttled with rAF for performance. */
let scrollTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      onScrollNavbar();
      onScrollBackToTop();
      onScrollProgress();
      scrollTicking = false;
    });
  },
  { passive: true }
);
onScrollNavbar();
onScrollProgress();

/* ==========================================================================
   6. Portfolio Filtering
   ========================================================================== */
function initPortfolioFilter() {
  const filterButtons = $$(".filter-btn");
  const projectCards = $$(".project-card");

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    if (btn.dataset.filterBound) return;
    btn.dataset.filterBound = "true";
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));

      projectCards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-filtered-out", !match);
        if (match) {
          card.style.animation = "none";
          void card.offsetWidth;
          card.style.animation = "";
        }
      });
    });
  });
}

initPortfolioFilter();
document.addEventListener("contentApplied", initPortfolioFilter);

/* ==========================================================================
   7. Testimonial Slider (autoplay + arrows + dots + swipe)
   ========================================================================== */
const sliderTrack = $("#sliderTrack");
const slides = sliderTrack ? $$(".testimonial-card", sliderTrack) : [];
const dotsWrap = $("#sliderDots");
let currentSlide = 0;
let autoplayTimer = null;

if (sliderTrack && dotsWrap && slides.length) {
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  const dots = $$(".slider__dot", dotsWrap);

  function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === currentSlide));
    restartAutoplay();
  }

  function restartAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => goToSlide(currentSlide + 1), 6000);
  }

  $("#sliderPrev")?.addEventListener("click", () => goToSlide(currentSlide - 1));
  $("#sliderNext")?.addEventListener("click", () => goToSlide(currentSlide + 1));

  let touchStartX = 0;
  sliderTrack.addEventListener("touchstart", (e) => (touchStartX = e.touches[0].clientX), { passive: true });
  sliderTrack.addEventListener(
    "touchend",
    (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) goToSlide(currentSlide + (delta < 0 ? 1 : -1));
    },
    { passive: true }
  );

  goToSlide(0);
}

/* ==========================================================================
   8. Contact Form Validation
   ========================================================================== */
const contactForm = $("#contactForm");
const formSuccess = $("#formSuccess");

const validators = {
  name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name (min. 2 characters)."),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address.",
  company: () => "", // optional
  service: (v) => (v.trim() ? "" : "Please select a service."),
  phone: (v) =>
    v.trim() === "" || /^[+\d][\d\s\-()]{6,}$/.test(v.trim())
      ? ""
      : "Please enter a valid phone number.",
  message: (v) => (v.trim().length >= 10 ? "" : "Please tell us a bit more (min. 10 characters)."),
};

function validateField(field) {
  const error = validators[field.name] ? validators[field.name](field.value) : "";
  const wrapper = field.closest(".form-field");
  const errorElement = wrapper.querySelector(".form-field__error");
  if (!errorElement.id) errorElement.id = `${field.id}-error`;
  field.setAttribute("aria-invalid", String(Boolean(error)));
  field.setAttribute("aria-describedby", errorElement.id);
  wrapper.classList.toggle("has-error", Boolean(error));
  errorElement.textContent = error;
  return !error;
}

// Live validation on blur
if (contactForm) {
  $$("input:not([type='hidden']), select, textarea", contactForm).forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.closest(".form-field").classList.contains("has-error")) validateField(field);
    });
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fields = $$("input:not([type='hidden']), select, textarea", contactForm);
  const allValid = fields.map(validateField).every(Boolean);

  if (!allValid) {
    // Focus the first invalid field for keyboard users
    const firstError = $(".form-field.has-error input, .form-field.has-error select, .form-field.has-error textarea", contactForm);
    if (firstError) firstError.focus();
    return;
  }

  const submitBtn = $("button[type='submit']", contactForm);
  const originalBtnText = submitBtn ? submitBtn.textContent : "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
  }
  formSuccess.hidden = true;
  formSuccess.classList.remove("contact-form__success--error");

  const formData = new FormData(contactForm);
  formData.set("_replyto", formData.get("email") || "");

  fetch("https://formsubmit.co/ajax/zavirtechnology@gmail.com", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  })
    .then(async (res) => {
      const result = await res.json().catch(() => null);
      if (!res.ok || !result || (result.success !== true && result.success !== "true")) {
        throw new Error("Request was not accepted");
      }
      return result;
    })
    .then(() => {
      contactForm.reset();
      formSuccess.textContent =
        "Thank you. Your message has been received. Our team will respond shortly.";
      formSuccess.classList.remove("contact-form__success--error");
      formSuccess.hidden = false;
      setTimeout(() => (formSuccess.hidden = true), 6000);
    })
    .catch(() => {
      formSuccess.textContent =
        "Something went wrong sending your message. Please email us directly at zavirtechnology@gmail.com.";
      formSuccess.classList.add("contact-form__success--error");
      formSuccess.hidden = false;
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  });
}

/* ==========================================================================
   9. Ripple Effect on Buttons ([data-ripple])
   ========================================================================== */
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-ripple]");
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
});

/* ==========================================================================
  10. Footer year
   ========================================================================== */
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const socialComingSoon = $("#socialComingSoon");
if (socialComingSoon) {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-social-coming-soon]");
    if (!button) return;
    socialComingSoon.textContent = `${button.dataset.socialComingSoon} link is not yet available.`;
  });
}
