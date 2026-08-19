/* ==========================================================================
   ZAVIR-tech — Animations JavaScript
   Scroll reveal, animated counters, progress bars, typing effect,
   custom cursor, mouse-following gradient, parallax, card spotlight.
   ========================================================================== */

"use strict";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;

/* ==========================================================================
   1. Scroll Reveal (IntersectionObserver)
   Elements: .reveal with data-reveal + optional data-reveal-delay (ms)
   ========================================================================== */
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = isMobileViewport ? Math.min(Number(el.dataset.revealDelay) || 0, 120) : (el.dataset.revealDelay || 0);
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("is-revealed");
      observer.unobserve(el); // reveal once, keep it lightweight
    });
  },
  { threshold: isMobileViewport ? 0.08 : 0.12, rootMargin: isMobileViewport ? "0px 0px -20px 0px" : "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

function observeRevealElements(root = document) {
  root.querySelectorAll(".reveal:not(.is-revealed)").forEach((el) => revealObserver.observe(el));
}

document.addEventListener("contentApplied", () => observeRevealElements());

/* ==========================================================================
   2. Animated Counters + Progress Bars (stats section)
   ========================================================================== */
function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    // easeOutExpo for a premium deceleration feel
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    counter.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const card = entry.target;

      const counter = card.querySelector(".counter");
      if (counter) {
        if (prefersReducedMotion) counter.textContent = counter.dataset.target;
        else animateCounter(counter);
      }

      const bar = card.querySelector(".stat-card__bar-fill");
      if (bar) bar.style.width = `${bar.dataset.progress}%`;

      observer.unobserve(card);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll(".stat-card").forEach((card) => statsObserver.observe(card));

function observeStatCards() {
  document.querySelectorAll(".stat-card:not([data-stats-observed])").forEach((card) => {
    card.dataset.statsObserved = "true";
    statsObserver.observe(card);
  });
}

document.addEventListener("contentApplied", observeStatCards);

/* ==========================================================================
   3. Typing Effect (hero headline)
   ========================================================================== */
const typedEl = document.getElementById("typedText");
const phrases = ["Enables Business Growth", "Supports Global Operations", "Strengthens Customer Engagement", "Accelerates Delivery"];

if (typedEl && !prefersReducedMotion) {
  let phraseIndex = 0;
  let charIndex = 0; // start empty
  let deleting = false;

  function typeLoop() {
    const phrase = phrases[phraseIndex];

    if (deleting) {
      charIndex--;
      typedEl.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      setTimeout(typeLoop, 40);
    } else {
      charIndex++;
      typedEl.textContent = phrases[phraseIndex].slice(0, charIndex);
      if (charIndex === phrases[phraseIndex].length) {
        deleting = true;
        setTimeout(typeLoop, 2600); // pause on full phrase
        return;
      }
      setTimeout(typeLoop, 75);
    }
  }

  setTimeout(typeLoop, isMobileViewport ? 1600 : 3000);
}

/* ==========================================================================
   4. Custom Cursor (desktop / fine pointers only)
   ========================================================================== */
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursorDot");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (finePointer && !prefersReducedMotion) {
  let mouseX = 0, mouseY = 0;   // actual mouse position
  let ringX = 0, ringY = 0;     // lagged ring position

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Dot follows instantly
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Ring eases toward the mouse for a fluid feel
  (function animateCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursor.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateCursor);
  })();

  // Grow the ring over interactive elements
  const interactiveSelector = "a, button, input, select, textarea, [data-ripple]";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) cursor.classList.add("is-hovering");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) cursor.classList.remove("is-hovering");
  });
}

/* ==========================================================================
   5. Mouse-Following Gradient Glow
   ========================================================================== */
const mouseGlow = document.getElementById("mouseGlow");

if (finePointer && !prefersReducedMotion) {
  let glowX = window.innerWidth / 2;
  let glowY = window.innerHeight / 3;
  let targetX = glowX, targetY = glowY;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  (function animateGlow() {
    glowX += (targetX - glowX) * 0.06; // slow, dreamy follow
    glowY += (targetY - glowY) * 0.06;
    mouseGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    requestAnimationFrame(animateGlow);
  })();
} else if (mouseGlow) {
  mouseGlow.style.display = "none";
}

/* ==========================================================================
   6. Hero Parallax (orbs react to mouse via data-parallax factor)
   ========================================================================== */
const parallaxItems = document.querySelectorAll("[data-parallax]");

if (finePointer && !prefersReducedMotion && parallaxItems.length) {
  document.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    parallaxItems.forEach((item) => {
      const factor = parseFloat(item.dataset.parallax);
      // translate applied on top of the CSS float animation via CSS variable-free approach:
      item.style.translate = `${dx * factor}px ${dy * factor}px`;
    });
  });
}

/* ==========================================================================
   7. Card Spotlight (service cards track the mouse for a glow)
   ========================================================================== */
function initServiceCardSpotlight() {
  if (!finePointer) return;
  document.querySelectorAll(".service-card:not([data-spotlight-bound])").forEach((card) => {
    card.dataset.spotlightBound = "true";
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });
}

initServiceCardSpotlight();
document.addEventListener("contentApplied", initServiceCardSpotlight);

/* ==========================================================================
   8. Tech Carousel Scroll Reveal (fade in when section enters viewport)
   ========================================================================== */
const techCarousel = document.getElementById("techCarousel");

if (techCarousel && !prefersReducedMotion) {
  const techObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const items = entry.target.querySelectorAll(".tech-carousel__item");
        items.forEach((item, i) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, i * 50); // staggered fade-in
        });
        techObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  // Set initial state for animation
  const techItems = techCarousel.querySelectorAll(".tech-carousel__item");
  techItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.6s var(--ease), transform 0.6s var(--ease)";
  });

  techObserver.observe(techCarousel);
}
