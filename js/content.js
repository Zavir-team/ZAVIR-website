/* ==========================================================================
   ZAVIR-tech — Site Content
   Migrated from the previous ZAVIR-tech website.
   ========================================================================== */
"use strict";

window.siteContent = {
  company: {
    name: "ZAVIR-tech",
    tagline: "Professional software development and digital solutions for organisations worldwide.",
    description:
      "ZAVIR-tech delivers high-quality software solutions that help organisations improve operations and compete in the digital economy.",
    email: "zavirtechnology@gmail.com",
    phone: "+93 784 519 843",
    whatsapp: "+93 792060378",
    address: "Kabul, Afghanistan",
    businessHours: "Saturday - Thursday: 8:00 AM - 4:00 PM | Friday: Closed",
    founded: 2024,
    copyright: "All rights reserved.",
    social: {
      github: "",
      linkedin: "",
      whatsapp: "https://whatsapp.com/channel/0029Vb89jT8JZg40094sPX3a",
      facebook: "https://www.facebook.com/share/19PV6jZUD2/?mibextid=wwXIfr",
    },
  },

  hero: {
    badge: "Professional Software Development & Digital Solutions",
    title: "Building Digital Solutions for",
    accent: "Afghanistan and the World",
    subtitle:
      "We design, develop, and deliver robust software, websites, and mobile applications that help organisations improve operations and achieve measurable business outcomes.",
  },

  services: [
    {
      title: "Web Development",
      text:
        "Modern, responsive websites and applications built with React, Vue.js, and the latest technologies. Fast, scalable, and SEO optimized.",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      bullets: ["React & Vue.js", "Responsive Design", "Performance Optimized"],
    },
    {
      title: "Mobile Apps",
      text:
        "Native and cross-platform applications for iOS and Android with seamless user experiences, intuitive interfaces, and reliable performance.",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>',
      bullets: ["React Native", "Flutter Apps", "Native Development"],
    },
    {
      title: "Database Solutions",
      text:
        "Secure, scalable database design and management. Expert architecture for SQL, NoSQL, and cloud databases to handle growing data.",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"/></svg>',
      bullets: ["SQL & NoSQL", "Cloud Databases", "Data Security"],
    },
    {
      title: "Backend Development",
      text:
        "Robust APIs and server-side solutions with Node.js and Python. Enterprise-grade architecture for reliability and performance.",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><circle cx="7" cy="7" r="1"/><circle cx="7" cy="17" r="1"/></svg>',
      bullets: ["Node.js & Express", "Python & Django", "REST APIs"],
    },
    {
      title: "Cloud & DevOps",
      text:
        "Infrastructure as code, continuous deployment, and cloud management for scalable, reliable software systems.",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 0 1 0 9Z"/></svg>',
      bullets: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines"],
    },
    {
      title: "Consulting",
      text:
        "Strategic technology guidance and expert advice to help you make informed decisions about architecture, tools, and best practices.",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
      bullets: ["Tech Strategy", "Architecture Design", "Code Review"],
    },
  ],

  portfolio: [
    {
      title: "Rahat Solar System",
      category: "Desktop Application",
      text:
        "A local/offline database system developed for Rahat Solar System to manage sales, inventory, customers and payments efficiently without internet dependency.",
      overview:
        "A responsive desktop suite built for offline-first retail operations, helping store managers process sales, track stock, coordinate supplier purchases, and generate business reports without internet access.",
      details: "Client: Rahat Solar System · Completed: May 2025",
      platform: "Desktop",
      industry: "Retail & Distribution",
      timeline: "4 months",
      role: "Full-stack product development, UI/UX design, deployment",
      problem:
        "The client was managing sales, inventory, and supplier payments across spreadsheets and paper invoices, causing errors, stockouts, and slow financial reconciliation.",
      solution:
        "We delivered a secure Electron-based desktop application with SQLite storage, a customer ledger, supplier accounts, invoice generation, inventory alerts, and offline reporting capabilities.",
      results:
        "The business gained accurate inventory control, faster customer billing, and real-time revenue visibility — reducing invoice errors by 68% and cutting reconciliation time by over 50%.",
      features: [
        "Sales invoice creation with product search and payment tracking",
        "Customer ledger and outstanding balance management",
        "Supplier purchase orders, payments, and supplier ledger views",
        "Inventory status dashboard with low-stock alerts",
        "Offline-safe local storage with exportable sales reports",
        "Multi-currency totals and revenue summary cards",
      ],
      techStack: ["Electron", "Node.js", "SQLite", "JavaScript", "HTML", "CSS"],
      tags: ["Desktop", "Inventory", "Accounting", "Offline", "Electron"],
      categoryKey: "desktop",
      image: "images/projects/rahat-solar.png",
    },
    {
      title: "ZAVIR Business Dashboard",
      category: "Desktop Application",
      text:
        "A comprehensive desktop business management system for customer and supplier finances, invoicing, inventory control, and performance analytics.",
      overview:
        "An advanced business control dashboard for SMEs that centralizes accounting, supplier management, inventory tracking, and intelligent document capture in a unified desktop environment.",
      details: "Client: ZAVIR Software Solution · Completed: June 2026",
      platform: "Desktop",
      industry: "SMB Finance",
      timeline: "5 months",
      role: "Product design, desktop architecture, reporting system",
      problem:
        "Business owners struggled with fragmented financial data across multiple systems, making it difficult to track cash flow, manage supplier relationships, and analyze business performance in real-time.",
      solution:
        "We developed a comprehensive desktop application with integrated dashboards for revenue tracking, supplier ledgers, inventory management, and OCR-based document processing for automated data extraction.",
      results:
        "The system provided complete financial visibility, reduced manual data entry by 70%, and enabled data-driven decision making with real-time business intelligence and automated reporting.",
      features: [
        "Multi-currency financial dashboard with revenue analytics",
        "Customer and supplier relationship management",
        "Automated invoice generation and payment tracking",
        "Real-time inventory monitoring with reorder alerts",
        "OCR-powered document processing and data extraction",
        "Exportable financial reports and business analytics",
      ],
      techStack: ["Electron", "JavaScript", "SQLite", "OCR", "Chart.js"],
      tags: ["Desktop", "Accounting", "Inventory", "OCR", "Business Intelligence"],
      categoryKey: "desktop",
      image: "images/projects/rahat-solar-dashboard.jpg",
    },
    {
      title: "Lab Management System",
      category: "Desktop Application",
      text:
        "A laboratory management system for hospitals, clinics, and diagnostic centres. It helps staff manage patient tests, organise laboratory reports, and generate accurate results.",
      overview:
        "An all-in-one desktop application for laboratory operations, designed to streamline sample processing, test data entry, result generation, and billing workflows while maintaining patient confidentiality.",
      details: "Client: Lab Management System · Completed: December 2025",
      platform: "Desktop",
      industry: "Healthcare",
      timeline: "4 months",
      role: "Workflow automation, data integrity, secure reports",
      problem:
        "Laboratory staff were tracking test requests, patient data, and billing across disconnected systems, leading to delayed reports and duplicate entries.",
      solution:
        "Our application combined test order management, sample status tracking, result templates, and invoice handling into a single secure desktop environment.",
      results:
        "The lab improved turnaround time, reduced data entry errors, and delivered consistent, traceable test reports with a single point of control.",
      features: [
        "Patient record management and test order entry",
        "Sample tracking with progress status updates",
        "Automated report generation and printing",
        "Billing and payment recording integrated with test results",
        "Inventory tracking for reagents and lab supplies",
        "Staff user permissions and audit-ready history",
      ],
      techStack: ["Electron", "SQLite", "JavaScript", "HTML", "CSS"],
      tags: ["Desktop", "Healthcare", "Workflow", "Reports"],
      categoryKey: "desktop",
      image: "images/projects/lab-management-dashboard.png",
    },
    {
      title: "Zafarmal Learning Platform",
      category: "Web Platform",
      text:
        "A responsive educational platform for students, courses, and online learning management.",
      overview:
        "A modern learning portal created for students and instructors, featuring course discovery, progress tracking, responsive design, and secure content delivery.",
      details: "Client: Zafarmal · Educational Platform",
      platform: "Web",
      industry: "Education",
      timeline: "3 months",
      role: "Frontend experience, responsive UX, course management",
      problem:
        "The client needed an accessible, easy-to-use digital learning experience to reach students remotely and manage course offerings online.",
      solution:
        "We built a fully responsive web platform that supports course enrollment, student dashboards, instructor content management, and progress tracking.",
      results:
        "The platform made learning more available and engaging, improved course access, and helped administrators manage student progress with clarity.",
      features: [
        "Course catalog with filtering and search",
        "Student dashboards with progress summaries",
        "Instructor course authoring tools",
        "Responsive design for all devices",
        "Secure login and profile management",
        "Notifications for upcoming lessons and assignments",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Web"],
      tags: ["Web", "Education", "Responsive", "Learning"],
      categoryKey: "web",
      image: "images/projects/zafarmal-learning.png",
    },
    {
      title: "Prescription Management System",
      category: "AI-Enabled Desktop Application",
      text:
        "An intelligent healthcare workflow system that streamlines prescription capture, refill tracking, and secure patient records.",
      overview:
        "A desktop application that combines intelligent prescription capture with patient record management, enabling clinics to reduce errors and manage refills faster.",
      details: "Client: Dr. Abdul Jamil Haqparast · Completed: April 2026",
      platform: "Desktop",
      industry: "Healthcare",
      timeline: "5 months",
      role: "AI integration, medical workflow design, data security",
      problem:
        "Doctors and pharmacists were manually processing prescriptions, causing delays, miscommunication, and difficulty tracking refills.",
      solution:
        "We delivered a secure desktop application with AI-assisted prescription analysis, refill reminders, patient history, and pharmacy-ready printouts.",
      results:
        "Clinics gained faster prescription turnaround, fewer mistakes, and better medication adherence tracking for patients.",
      features: [
        "Prescription entry with intelligent validation",
        "Refill scheduling and reminder alerts",
        "Patient medical history and medication overview",
        "Secure record storage and printing",
        "Analytics for prescription volume and refill rates",
      ],
      techStack: ["AI", "Desktop", "JavaScript", "Electron", "Healthcare"],
      tags: ["AI", "Desktop", "Healthcare", "Prescription"],
      categoryKey: "ai",
      image: "images/projects/prescription-system.png",
    },
    {
      title: "Cloud Inventory Portal",
      category: "Cloud Platform",
      text:
        "A cloud-based inventory management system with real-time analytics and multi-location support for enterprise operations.",
      overview:
        "A scalable cloud platform that provides businesses with centralized inventory control, predictive analytics, and automated supply chain management across multiple warehouse locations.",
      details: "Client: Multi-location Retail Chain · Completed: August 2026",
      platform: "Cloud",
      industry: "Logistics & Supply Chain",
      timeline: "4 months",
      role: "Cloud architecture, real-time analytics, responsive design",
      problem:
        "Multi-location businesses struggled with fragmented inventory data, leading to stock imbalances, inefficient transfers, and inability to make data-driven supply chain decisions.",
      solution:
        "We built a comprehensive cloud-based inventory management system with real-time synchronization across locations, predictive demand forecasting, and automated reorder optimization.",
      results:
        "The platform reduced inventory holding costs by 35%, improved stock availability to 98%, and enabled AI-driven demand planning that reduced stockouts by 80%.",
      features: [
        "Real-time multi-location inventory synchronization",
        "Predictive demand forecasting and AI-powered recommendations",
        "Automated purchase order generation and supplier management",
        "Advanced analytics with custom dashboards and reports",
        "Mobile-responsive interface for warehouse operations",
        "Integration with existing ERP and accounting systems",
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Analytics"],
      tags: ["Cloud", "Analytics", "Inventory", "AI", "Supply Chain"],
      categoryKey: "cloud",
      image: "images/projects/Screenshot 2026-08-13 112716.png",
    },
    {
      title: "E-Commerce Analytics Dashboard",
      category: "Web Dashboard",
      text: "Advanced business intelligence platform with real-time analytics, customer insights, and performance tracking for e-commerce operations.",
      overview: "A comprehensive analytics dashboard designed for online retailers to monitor sales performance, customer behavior, and operational metrics in real-time.",
      details: "Client: E-Commerce Retailer · Completed: September 2026",
      platform: "Web",
      industry: "E-Commerce Analytics",
      timeline: "3 months",
      role: "UI/UX design, frontend development, data visualization",
      problem: "Online retailers lacked real-time visibility into customer behavior, sales trends, and operational performance, making it difficult to optimize marketing and inventory decisions.",
      solution: "We developed a responsive analytics dashboard with real-time data visualization, customer segmentation tools, inventory performance tracking, and automated reporting capabilities.",
      results: "The dashboard provided actionable insights that increased conversion rates by 25%, reduced customer acquisition costs by 20%, and improved inventory turnover through data-driven stocking decisions.",
      features: [
        "Real-time sales and revenue analytics with custom date ranges",
        "Customer behavior tracking and segmentation analysis",
        "Product performance metrics and inventory optimization recommendations",
        "Marketing campaign effectiveness tracking and ROI analysis",
        "Automated daily/weekly/monthly performance reports",
        "Mobile-responsive design for on-the-go business monitoring",
      ],
      techStack: ["React", "Chart.js", "Node.js", "MongoDB", "Analytics"],
      tags: ["Dashboard", "Analytics", "E-Commerce", "Real-time", "Web"],
      categoryKey: "web",
      image: "images/projects/lab-management.jpg",
    },
  ],

  technologies: {
    Frontend: ["React", "Vue.js", "Angular", "JavaScript", "HTML5", "CSS3"],
    Backend: ["Node.js", "Python", "Java", "PHP", "Express.js", "Django"],
    Database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Elasticsearch"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "GitHub", "CI/CD"],
  },

  stats: [
    { value: 20, label: "Projects Completed", progress: 85, suffix: "+" },
    { value: 6, label: "Team Members", progress: 100, suffix: "" },
    { value: 16, label: "Combined Experience", progress: 80, suffix: "+ years" },
    { value: 2, label: "Years Operating", progress: 50, suffix: "+" },
  ],

  story: {
    title: "Building better software solutions since 2024",
    paragraphs: [
      "ZAVIR-tech was founded with a clear mission: to deliver high-quality software solutions that help businesses succeed in the digital economy. What began as a small team of committed developers has grown into a dedicated group of specialists serving clients across Afghanistan and internationally.",
      "We believe in the power of clean code, innovative thinking, and close collaboration with our clients. Every project is an opportunity to create something meaningful and build lasting partnerships.",
      "Today, our team has completed more than 20 projects. This website showcases 7 selected examples, supported by 6 skilled professionals with more than 16 years of combined experience.",
    ],
  },

  values: [
    ["Quality", "We never compromise on code quality, testing, and best practices. Excellence is not optional."],
    ["Reliability", "You can count on us. We deliver on time, communicate openly, and stand behind our work."],
    ["Innovation", "We stay ahead of technology trends and continuously improve our skills and approaches."],
    ["Collaboration", "Your goals are our goals. We work closely with you as a true partner in your success."],
  ],

  team: [
    ["Sabawoon Eshaqzai", "CEO & Founder", "Leads company strategy, client partnerships, and full-stack delivery. Brings 3+ years of experience in software development and technical leadership.", "SE"],
    ["Qasim Hasanzada", "Head of Design & Frontend Development", "Leads product design and frontend quality. Brings 2+ years of experience creating accessible, intuitive, and high-performing digital products.", "QH"],
    ["Enamullah Moatasim", "CTO & Tech Lead", "Owns technical direction, software architecture, and engineering standards. Brings 3+ years of experience building scalable systems and mentoring developers.", "EM"],
    ["Sayed Ahmad Andar", "Frontend Developer", "Builds responsive React interfaces and reusable frontend systems. Brings 3+ years of experience delivering performant web applications.", "SA"],
    ["Zobair Shafiqi", "Backend Developer", "Designs secure APIs, database systems, and server-side workflows. Brings 2+ years of experience developing reliable backend services.", "ZS"],
    ["Masihullah Azizi", "DevOps Engineer", "Manages deployment workflows, cloud infrastructure, and application reliability. Brings 3+ years of experience with CI/CD and containerized systems.", "MA"],
  ],

  whyChoose: [
    ["Expert Team", "Our team of 6 skilled professionals brings expertise across web, mobile, desktop, and cloud technologies."],
    ["Quality Code", "We deliver clean, maintainable code following industry best practices with rigorous testing standards."],
    ["Timely Delivery", "We respect deadlines and deliver projects on schedule without compromising on quality."],
    ["Clear Communication", "Regular updates and transparent communication keep clients informed throughout each project."],
    ["Proven Track Record", "Our team has completed 20+ projects across healthcare, education, retail, and business operations. This site presents 7 selected examples."],
    ["Ongoing Support", "Dedicated support and maintenance services ensure your solutions continue to perform optimally."],
  ],

  caseStudies: [
    ["Enterprise System Modernization", "A local manufacturing company needed to modernize their 15-year-old legacy system that was causing operational inefficiencies and data inconsistencies.", "We analyzed their existing workflows, designed a modern cloud-based architecture, and implemented a phased migration strategy that ensured business continuity throughout the transition.", "The new system reduced processing time by 75%, eliminated data errors, and provided real-time reporting capabilities that improved decision-making by senior management."],
    ["Multi-Platform Mobile Solution", "A retail chain needed a mobile application for both customers and staff to manage inventory, process sales, and provide customer loyalty features across iOS and Android.", "We developed a cross-platform solution using React Native with a shared codebase for both platforms, integrated with their existing inventory management system, and implemented offline capabilities for uninterrupted operation.", "The app was launched within 4 months, achieved 15,000+ downloads in the first quarter, and improved customer engagement by 40% through the loyalty program integration."],
    ["Healthcare Digital Transformation", "A medical clinic needed to digitize their patient records, appointment scheduling, and prescription management while maintaining strict data security and HIPAA compliance.", "We implemented a secure, cloud-based healthcare management system with encrypted data storage, role-based access controls, and integration with pharmacy systems for electronic prescriptions.", "The digital system reduced administrative overhead by 60%, improved patient record accuracy to 99.9%, and enabled secure remote access for authorized medical staff."],
  ],

  faqs: [
    ["How quickly will you respond?", "We respond to all inquiries within one business day."],
    ["Do you offer consultations?", "Yes. We offer an initial consultation to discuss your requirements."],
    ["Do you work with international clients?", "Yes. We work with clients worldwide and coordinate schedules across time zones."],
  ],
};

function createServiceCard(service, index) {
  const delay = index * 70;
  return `
    <article class="service-card reveal" data-reveal="up" data-reveal-delay="${delay}">
      <div class="service-card__icon" aria-hidden="true">${service.icon}</div>
      <h3 class="service-card__title">${service.title}</h3>
      <p class="service-card__text">${service.text}</p>
      <ul class="service-card__bullets">${service.bullets.map((b) => `<li>✓ ${b}</li>`).join("")}</ul>
      <a href="contact.html" class="service-card__link">Contact our team <span aria-hidden="true">→</span></a>
    </article>`;
}

function createProjectCard(project, index) {
  return `
    <article class="project-card reveal" data-reveal="up" data-category="${project.categoryKey}">
      <div class="project-card__media project-card__media--image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-card__body">
        <span class="project-card__category">${project.category}</span>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__text">${project.text}</p>
        <p class="project-card__details">${project.details}</p>
        <ul class="project-card__tags">${project.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        <div class="project-card__actions">
          <button type="button" class="btn btn--primary btn--xs project-card__details-button" data-project-index="${index}" data-ripple>View Details</button>
          <a href="contact.html" class="btn btn--ghost btn--xs" data-ripple>Get Quote</a>
        </div>
        <div class="project-card__details-panel" aria-hidden="true"></div>
      </div>
    </article>`;
}

function renderProjectDetails(index, detailsPanel) {
  const project = window.siteContent.portfolio[index];
  if (!project || !detailsPanel) return;

  detailsPanel.innerHTML = `
    <img class="project-card__hero-image" src="${project.image}" alt="${project.title}" loading="lazy">
    <div class="project-card__details-grid">
      <article>
        <strong>Industry</strong>
        <p>${project.industry || "General"}</p>
      </article>
      <article>
        <strong>Platform</strong>
        <p>${project.platform || "Desktop"}</p>
      </article>
      <article>
        <strong>Timeline</strong>
        <p>${project.timeline || "N/A"}</p>
      </article>
      <article>
        <strong>Role</strong>
        <p>${project.role || "Development"}</p>
      </article>
    </div>
    <div class="project-card__detail-section">
      <h4>Overview</h4>
      <p>${project.overview || project.text}</p>
    </div>
    <div class="project-card__detail-section project-card__features-section">
      <h4>Key Features</h4>
      <ul class="project-card__features">
        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </div>
    <div class="project-card__details-grid">
      <article>
        <strong>Challenge</strong>
        <p>${project.problem || "The project presented operational challenges that required a unified, user-friendly solution."}</p>
      </article>
      <article>
        <strong>Solution</strong>
        <p>${project.solution || "We created a robust application with the necessary workflows, automation, and dashboards to solve the business problem."}</p>
      </article>
      <article>
        <strong>Results</strong>
        <p>${project.results || "The finalized solution delivered measurable improvements in efficiency, accuracy, and visibility."}</p>
      </article>
    </div>
    <div class="project-card__detail-section">
      <h4>Technology Stack</h4>
      <ul class="project-card__tech-list">
        ${project.techStack.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
    </div>
    <div class="project-card__detail-actions">
      <a href="contact.html" class="btn btn--primary btn--sm" data-ripple>Request a similar solution</a>
      <button type="button" class="btn btn--ghost btn--sm project-card__detail-close">Close Details</button>
    </div>`;
}

function toggleProjectDetails(card, index) {
  const isExpanded = card.classList.toggle("is-expanded");
  const detailsPanel = card.querySelector(".project-card__details-panel");
  if (!detailsPanel) return;

  if (isExpanded) {
    renderProjectDetails(index, detailsPanel);
    detailsPanel.setAttribute("aria-hidden", "false");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    detailsPanel.innerHTML = "";
    detailsPanel.setAttribute("aria-hidden", "true");
  }
}

function initializeProjectModal() {
  document.body.addEventListener("click", (event) => {
    const detailsButton = event.target.closest(".project-card__details-button");
    if (detailsButton) {
      const index = Number(detailsButton.dataset.projectIndex);
      const card = detailsButton.closest(".project-card");
      if (card) toggleProjectDetails(card, index);
      return;
    }

    const closeButton = event.target.closest(".project-card__detail-close");
    if (closeButton) {
      const card = closeButton.closest(".project-card");
      if (card) toggleProjectDetails(card, Number(card.querySelector(".project-card__details-button")?.dataset.projectIndex || -1));
      return;
    }
  });
}

function createStatCard(stat, index) {
  return `
    <div class="stat-card reveal" data-reveal="up" data-reveal-delay="${index * 80}">
      <span class="stat-card__value"><span class="counter" data-target="${stat.value}">0</span>${stat.suffix || ""}</span>
      <span class="stat-card__label">${stat.label}</span>
      <div class="stat-card__bar"><span class="stat-card__bar-fill" data-progress="${stat.progress}"></span></div>
    </div>`;
}

function applyContent() {
  const c = window.siteContent.company;
  const pageTitles = {
    home: `${c.name} | Global Software Development & Digital Solutions`,
    about: `About ${c.name} | Company Overview`,
    services: `Software Development Services | ${c.name}`,
    portfolio: `Portfolio | ${c.name}`,
    technologies: `Technology Stack | ${c.name}`,
    team: `Our Team | ${c.name}`,
    "case-studies": `Case Studies | ${c.name}`,
    contact: `Contact ${c.name} | Request a Consultation`,
  };
  const titleText = pageTitles[document.body.dataset.page] || `${c.name} | Digital Solutions`;
  const title = document.querySelector("title");
  if (title) title.textContent = titleText;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = `${c.description} ${c.tagline}`;
  const author = document.querySelector('meta[name="author"]');
  if (author) author.content = c.name;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = titleText;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = c.description;
  const siteName = document.querySelector('meta[property="og:site_name"]');
  if (siteName) siteName.content = c.name;

  document.querySelectorAll("[data-company-name]").forEach((el) => {
    // Set initial logo based on current theme
    const currentTheme = document.documentElement.dataset.theme || 'light';
    const logoSrc = currentTheme === 'dark' 
      ? 'images/logo/zavir-logo-removebg-preview (1).png' 
      : 'images/logo/zavir-logo.jpg';
    el.innerHTML = `<img src="${logoSrc}" alt="ZAVIR-tech Logo" class="navbar__logo-image" data-logo-theme="true">`;
    
    // Store the current theme on the element for dynamic updates
    el.dataset.currentTheme = currentTheme;
  });

  const badge = document.querySelector(".hero__badge");
  if (badge) badge.innerHTML = `<span class="hero__badge-dot" aria-hidden="true"></span>${window.siteContent.hero.badge}`;
  const heroTitle = document.querySelector(".hero__title");
  if (heroTitle) heroTitle.innerHTML = `${window.siteContent.hero.title} <span class="hero__title-accent">${window.siteContent.hero.accent}</span>`;
  const heroSubtitle = document.querySelector(".hero__subtitle");
  if (heroSubtitle) heroSubtitle.textContent = window.siteContent.hero.subtitle;

  const servicesGrid = document.querySelector(".services__grid");
  if (servicesGrid) servicesGrid.innerHTML = window.siteContent.services.map(createServiceCard).join("");

  const portfolioGrid = document.querySelector(".portfolio__grid");
  if (portfolioGrid) portfolioGrid.innerHTML = window.siteContent.portfolio.map(createProjectCard).join("");

  const techTrack = document.querySelector(".tech-carousel__track");
  if (techTrack) {
    const all = Object.entries(window.siteContent.technologies).flatMap(([group, items]) =>
      items.map((tech) => `<div class="tech-carousel__item"><span class="tech-card__dot" aria-hidden="true"></span>${tech}</div>`)
    ).join("");
    techTrack.innerHTML = `${all}${all}`;
  }

  const statsGrid = document.querySelector(".stats__grid");
  if (statsGrid) statsGrid.innerHTML = window.siteContent.stats.map(createStatCard).join("");

  const email = document.querySelector("#contactEmail");
  if (email) { email.textContent = c.email; email.href = `mailto:${c.email}`; }
  const phone = document.querySelector("#contactPhone");
  if (phone) { phone.textContent = c.phone; phone.href = `tel:${c.phone.replace(/\s/g, "")}`; }
  const whatsapp = document.querySelector("#contactWhatsApp");
  if (whatsapp && c.whatsapp) { whatsapp.textContent = c.whatsapp; whatsapp.href = `https://wa.me/${c.whatsapp.replace(/\D/g, "")}`; }
  const address = document.querySelector("#contactAddress");
  if (address) address.textContent = c.address;
  const hours = document.querySelector("#businessHours");
  if (hours) hours.textContent = c.businessHours;

  const footerTagline = document.querySelector(".footer__tagline");
  if (footerTagline) footerTagline.textContent = c.tagline;
  const footerCopyright = document.querySelector(".footer__bottom p");
  if (footerCopyright) footerCopyright.innerHTML = `© ${new Date().getFullYear()} ${c.name}. ${c.copyright}`;

  // Social links are now handled directly in HTML with external URLs
  const footerBrand = document.querySelector(".footer__brand .navbar__logo");
  if (footerBrand) {
    const currentTheme = document.documentElement.dataset.theme || 'light';
    const logoSrc = currentTheme === 'dark' 
      ? 'images/logo/zavir-logo-removebg-preview (1).png' 
      : 'images/logo/zavir-logo.jpg';
    footerBrand.innerHTML = `<img src="${logoSrc}" alt="ZAVIR-tech Logo" class="navbar__logo-image" data-logo-theme="true">`;
    
    // Store the current theme on the element for dynamic updates
    footerBrand.dataset.currentTheme = currentTheme;
  }

  const storyTitle = document.querySelector("#aboutTitle");
  if (storyTitle) storyTitle.textContent = window.siteContent.story.title;
  const story = document.querySelector("#storyContent");
  if (story) story.innerHTML = window.siteContent.story.paragraphs.map((p) => `<p>${p}</p>`).join("");

  const values = document.querySelector("#valuesGrid");
  if (values) values.innerHTML = window.siteContent.values.map((v, i) => `<article class="info-card reveal" data-reveal="up"><span class="info-card__number">0${i+1}</span><h3>${v[0]}</h3><p>${v[1]}</p></article>`).join("");

  const team = document.querySelector("#teamGrid");
  if (team) team.innerHTML = window.siteContent.team.map((m, i) => `<article class="team-card reveal" data-reveal="up" data-reveal-delay="${i*60}"><div class="team-card__avatar">${m[3]}</div><h3>${m[0]}</h3><span>${m[1]}</span><p>${m[2]}</p></article>`).join("");

  const why = document.querySelector("#whyGrid");
  if (why) why.innerHTML = window.siteContent.whyChoose.map((v, i) => `<article class="info-card info-card--numbered reveal" data-reveal="up"><span class="info-card__number">0${i+1}</span><h3>${v[0]}</h3><p>${v[1]}</p></article>`).join("");

  const cases = document.querySelector("#caseStudiesGrid");
  if (cases) cases.innerHTML = window.siteContent.caseStudies.map((s) => `<article class="case-card reveal" data-reveal="up"><h3>${s[0]}</h3><div><strong>Challenge</strong><p>${s[1]}</p></div><div><strong>Solution</strong><p>${s[2]}</p></div><div><strong>Result</strong><p>${s[3]}</p></div></article>`).join("");

  const faq = document.querySelector("#faqGrid");
  if (faq) faq.innerHTML = window.siteContent.faqs.map((f) => `<details class="faq-item"><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("");

  document.dispatchEvent(new CustomEvent("contentApplied"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    applyContent();
    initializeProjectModal();
  });
} else {
  applyContent();
  initializeProjectModal();
}
