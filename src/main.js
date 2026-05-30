// import './style.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { initContactForm } from './contact.js'
import { FIRESLAB_PRODUCTS } from '../products.js'

window.FIRESLAB_PRODUCTS = FIRESLAB_PRODUCTS

gsap.registerPlugin(ScrollTrigger)

const projectsData = [
  { id: 1, name: "Grand Hyatt Water System", location: "Mumbai, Maharashtra", category: "hotel", product: "Pressurized Hot Water Tanks", image: "/app1.jpg", desc: "Installed 12 × 2000L pressurized tanks for centralized hot water supply." },
  { id: 2, name: "Apollo Hospital HVAC", location: "Delhi, NCR", category: "hospital", product: "Spiral Heat Exchangers", image: "/app2.jpg", desc: "Complete heat exchanger network for 450-bed facility." },
  { id: 3, name: "Raheja Residency", location: "Pune, Maharashtra", category: "residential", product: "Modular Panel Tanks", image: "/app3.jpg", desc: "Rooftop modular storage for 300-unit residential tower." },
  { id: 4, name: "Olympic-size Pool Heating", location: "Bengaluru, Karnataka", category: "pool", product: "Shell & Tube Heat Exchanger", image: "/app4.jpg", desc: "Year-round pool temperature maintenance with 40% energy savings." },
  { id: 5, name: "Tata Steel Plant", location: "Jamshedpur, Jharkhand", category: "industrial", product: "Corrugated Tube Heat Exchanger", image: "/app5.jpg", desc: "Industrial process water heating for large-scale steel production." },
  { id: 6, name: "ITC Maurya Hotel", location: "New Delhi, Delhi", category: "hotel", product: "Glass Lined Tanks", image: "/app6.jpg", desc: "Premium glass-lined tanks for 5-star potable water standards." },
  { id: 7, name: "Fortis Hospital Network", location: "Noida, UP", category: "hospital", product: "Pressurized Hot Water Tanks", image: "/app1.jpg", desc: "Multi-building hospital complex hot water infrastructure." },
  { id: 8, name: "Poultry Hatchery, UP", location: "Lucknow, UP", category: "industrial", product: "Heating Elements", image: "/app2.jpg", desc: "Precision temperature control for 1.2 million eggs per cycle." },
  { id: 9, name: "Marriott Resort", location: "Goa", category: "hotel", product: "Spiral Heat Exchangers", image: "/app3.jpg", desc: "Luxury resort thermal systems with solar integration." },
];

const solutionsData = [
  {
    category: 'Hot Water Storage',
    title: 'PRESSURIZED',
    title2: 'TANK SYSTEMS',
    description: 'High-capacity pressurized tanks from 300L to 5000L. Built with SS 304/316 steel, reinforced spiral coils, and tested up to 10 Bar. Ideal for hotels, hospitals, and industrial plants requiring reliable hot water at scale.',
    image: '/tank-1.png'
  },
  {
    category: 'Thermal Transfer',
    title: 'SPIRAL HEAT',
    title2: 'EXCHANGERS',
    description: 'Achieve 97% standby volume efficiency with our self-cleaning spiral design. No gaskets to fail, minimal pressure drop, and maximum thermal output. The standard for demanding industrial heating applications.',
    image: '/exchanger-1.png'
  },
  {
    category: 'Modular Storage',
    title: 'PANEL TANK',
    title2: 'SYSTEMS',
    description: 'Site-assembled stainless steel sectional tanks with 25+ year service life. Perfect for rooftops, basements, and locations with restricted access. Available in virtually any capacity.',
    image: '/panel-tank.png'
  },
  {
    category: 'Industrial Grade',
    title: 'SHELL & TUBE',
    title2: 'EXCHANGERS',
    description: 'Maximum heat transfer rates of 3,500–5,000 W/m²K using advanced turbulator rod technology. Engineered for process heating in food industry, HVAC, and industrial plants.',
    image: '/p5.png'
  },
  {
    category: 'Corrosion Resistant',
    title: 'GLASS LINED',
    title2: 'TANKS',
    description: 'Porcelain enamel coating to DIN 4753 standards for potable water applications. Superior protection against corrosion and bacterial growth. The preferred choice for 5-star hospitality projects.',
    image: '/p3.png'
  },
  {
    category: 'Custom Built',
    title: 'HEATING',
    title2: 'ELEMENTS',
    description: 'Custom wattage industrial heating elements for precise temperature control. Stainless steel sheath, flanged connections, available in single or three-phase configurations for any industrial application.',
    image: '/p4.png'
  },
];

// Functions
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
  
  grid.innerHTML = filtered.map(p => `
    <div class="project-card reveal" data-category="${p.category}">
      <div class="project-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="project-tag">${p.product}</span>
      </div>
      <div class="project-info">
        <div class="project-location"><i data-lucide="map-pin"></i> ${p.location}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
  if (typeof revealObserver !== 'undefined') {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }
}

function updateExpandedDetails(idx) {
  const container = document.getElementById('active-solution-details');
  if (!container) return;
  
  const s = solutionsData[idx];
  container.innerHTML = `
    <div class="expanded-sol-content">
      <div class="expanded-text">
        <span class="sol-tag">${s.category}</span>
        <h2>${s.title} ${s.title2}</h2>
        <p class="large-desc">${s.description}</p>
        <div class="sol-features-grid">
          <div class="feature-item"><i data-lucide="check-circle"></i> <span>High efficiency heat transfer</span></div>
          <div class="feature-item"><i data-lucide="check-circle"></i> <span>Industrial grade SS 316L</span></div>
          <div class="feature-item"><i data-lucide="check-circle"></i> <span>Low maintenance design</span></div>
          <div class="feature-item"><i data-lucide="check-circle"></i> <span>Certified safety standards</span></div>
        </div>
        <a href="#contact" class="btn btn-green">Request Quote for this Solution</a>
      </div>
      <div class="expanded-image">
        <img src="${s.image}" alt="${s.title}">
      </div>
    </div>
  `;
  
  if (window.lucide) window.lucide.createIcons();
  gsap.from('.expanded-sol-content > *', { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' });
}

// Solutions Animation Logic
let solOrder = [0, 1, 2, 3, 4, 5];
let solDetailsEven = true;
let solClicks = 0;

let solOffsetTop = 200;
let solOffsetLeft = 700;
let solCardWidth = 200;
let solCardHeight = 300;
let solGap = 40;
let solNumberSize = 50;
const solEase = "sine.inOut";

function getSolCard(index) { return `#sol-card${index}`; }
function getSolCardContent(index) { return `#sol-card-content-${index}`; }
function getSolSliderItem(index) { return `#sol-slide-item-${index}`; }

function solInit() {
  const [active, ...rest] = solOrder;
  const detailsActive = solDetailsEven ? "#sol-details-even" : "#sol-details-odd";
  const detailsInactive = solDetailsEven ? "#sol-details-odd" : "#sol-details-even";
  const { innerHeight: height, innerWidth: width } = window;
  solOffsetTop = height - 430;
  solOffsetLeft = width - 830;

  gsap.set("#sol-pagination", { top: solOffsetTop + 330, left: solOffsetLeft, y: 200, opacity: 0, zIndex: 60 });
  gsap.set(getSolCard(active), { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  gsap.set(getSolCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, y: 100 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .sol-text`, { y: 100 });
  gsap.set(`${detailsInactive} .sol-title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .sol-title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .sol-desc`, { y: 50 });
  gsap.set(`${detailsInactive} .sol-cta`, { y: 60 });

  gsap.set(".sol-progress-fg", { width: 420 * (1 / solOrder.length) * (active + 1) });

  rest.forEach((i, index) => {
    gsap.set(getSolCard(i), { x: solOffsetLeft + 400 + index * (solCardWidth + solGap), y: solOffsetTop, width: solCardWidth, height: solCardHeight, zIndex: 30, borderRadius: 10 });
    gsap.set(getSolCardContent(i), { x: solOffsetLeft + 400 + index * (solCardWidth + solGap), zIndex: 40, y: solOffsetTop + solCardHeight - 100 });
    gsap.set(getSolSliderItem(i), { x: (index + 1) * solNumberSize });
  });

  gsap.set(".solutions-indicator", { x: -window.innerWidth });

  const startDelay = 0.6;
  gsap.to(".sol-cover", { x: width + 400, delay: 0.5, ease: solEase, onComplete: () => { setTimeout(() => { solLoop(); }, 500); } });
  rest.forEach((i, index) => {
    gsap.to(getSolCard(i), { x: solOffsetLeft + index * (solCardWidth + solGap), zIndex: 30, delay: 0.05 * index + startDelay, ease: solEase });
    gsap.to(getSolCardContent(i), { x: solOffsetLeft + index * (solCardWidth + solGap), zIndex: 40, delay: 0.05 * index + startDelay, ease: solEase });
  });
  gsap.to("#sol-pagination", { y: 0, opacity: 1, ease: solEase, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, y: 0, ease: solEase, delay: startDelay });
}

function solStep() {
  return new Promise((resolve) => {
    solOrder.push(solOrder.shift());
    solDetailsEven = !solDetailsEven;

    const detailsActive = solDetailsEven ? "#sol-details-even" : "#sol-details-odd";
    const detailsInactive = solDetailsEven ? "#sol-details-odd" : "#sol-details-even";

    document.querySelector(`${detailsActive} .sol-place-box .sol-text`).textContent = solutionsData[solOrder[0]].category;
    document.querySelector(`${detailsActive} .sol-title-1`).textContent = solutionsData[solOrder[0]].title;
    document.querySelector(`${detailsActive} .sol-title-2`).textContent = solutionsData[solOrder[0]].title2;
    document.querySelector(`${detailsActive} .sol-desc`).textContent = solutionsData[solOrder[0]].description;

    updateExpandedDetails(solOrder[0]);

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease: solEase });
    gsap.to(`${detailsActive} .sol-text`, { y: 0, delay: 0.1, duration: 0.7, ease: solEase });
    gsap.to(`${detailsActive} .sol-title-1`, { y: 0, delay: 0.15, duration: 0.7, ease: solEase });
    gsap.to(`${detailsActive} .sol-title-2`, { y: 0, delay: 0.15, duration: 0.7, ease: solEase });
    gsap.to(`${detailsActive} .sol-desc`, { y: 0, delay: 0.3, duration: 0.4, ease: solEase });
    gsap.to(`${detailsActive} .sol-cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease: solEase });
    gsap.set(detailsInactive, { zIndex: 12 });

    const [active, ...rest] = solOrder;
    const prv = rest[rest.length - 1];

    gsap.set(getSolCard(prv), { zIndex: 10 });
    gsap.set(getSolCard(active), { zIndex: 20 });
    gsap.to(getSolCard(prv), { scale: 1.5, ease: solEase });

    gsap.to(getSolCardContent(active), { y: solOffsetTop + solCardHeight - 10, opacity: 0, duration: 0.3, ease: solEase });
    gsap.to(getSolSliderItem(active), { x: 0, ease: solEase });
    gsap.to(getSolSliderItem(prv), { x: -solNumberSize, ease: solEase });
    gsap.to(".sol-progress-fg", { width: 420 * (1 / solOrder.length) * (active + 1), ease: solEase });

    gsap.to(getSolCard(active), {
      x: 0, y: 0, ease: solEase, width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
      onComplete: () => {
        const xNew = solOffsetLeft + (rest.length - 1) * (solCardWidth + solGap);
        gsap.set(getSolCard(prv), { x: xNew, y: solOffsetTop, width: solCardWidth, height: solCardHeight, zIndex: 30, borderRadius: 10, scale: 1 });
        gsap.set(getSolCardContent(prv), { x: xNew, y: solOffsetTop + solCardHeight - 100, opacity: 1, zIndex: 40 });
        gsap.set(getSolSliderItem(prv), { x: rest.length * solNumberSize });
        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .sol-text`, { y: 100 });
        gsap.set(`${detailsInactive} .sol-title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .sol-title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .sol-desc`, { y: 50 });
        gsap.set(`${detailsInactive} .sol-cta`, { y: 60 });
        solClicks -= 1;
        if (solClicks > 0) solStep();
      },
    });

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = solOffsetLeft + index * (solCardWidth + solGap);
        gsap.set(getSolCard(i), { zIndex: 30 });
        gsap.to(getSolCard(i), { x: xNew, y: solOffsetTop, width: solCardWidth, height: solCardHeight, ease: solEase, delay: 0.1 * (index + 1) });
        gsap.to(getSolCardContent(i), { x: xNew, y: solOffsetTop + solCardHeight - 100, opacity: 1, zIndex: 40, ease: solEase, delay: 0.1 * (index + 1) });
        gsap.to(getSolSliderItem(i), { x: (index + 1) * solNumberSize, ease: solEase });
      }
    });
  });
}

async function solLoop() {
  await new Promise(r => gsap.to(".solutions-indicator", { x: 0, duration: 2, onComplete: r }));
  await new Promise(r => gsap.to(".solutions-indicator", { x: window.innerWidth, duration: 0.8, delay: 0.3, onComplete: r }));
  gsap.set(".solutions-indicator", { x: -window.innerWidth });
  await solStep();
  solLoop();
}

async function solStart() {
  const cardsHtml = solutionsData.map((i, index) => `<div class="sol-card" id="sol-card${index}" style="background-image:url(${i.image})"></div>`).join('');
  const cardContentsHtml = solutionsData.map((i, index) => `
    <div class="sol-card-content" id="sol-card-content-${index}">
      <div class="sol-content-start"></div>
      <div class="sol-content-place">${i.category}</div>
      <div class="sol-content-title-1">${i.title}</div>
      <div class="sol-content-title-2">${i.title2}</div>
    </div>`).join('');
  const slideNumbersHtml = solutionsData.map((_, index) => `<div class="sol-item" id="sol-slide-item-${index}">${index + 1}</div>`).join('');
  
  const demoEl = document.getElementById('solutions-demo');
  const numbersEl = document.getElementById('sol-slide-numbers');
  if (demoEl) {
    demoEl.innerHTML = cardsHtml + cardContentsHtml;
    demoEl.querySelectorAll('.sol-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        solClicks += 1;
        if (solClicks === 1) solStep();
        const expandedSec = document.getElementById('expanded-details');
        if (expandedSec) {
          setTimeout(() => {
            expandedSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      });
    });
  }
  if (numbersEl) numbersEl.innerHTML = slideNumbersHtml;
  solInit();
}

// Global
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)

function initIcons() { if (window.lucide) window.lucide.createIcons() }

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('stats-bar')) animateNumbers();
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Hero Slider
function initHero() {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function show(idx) {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));
    slides[idx].classList.add('active');
    indicators[idx].classList.add('active');
    current = idx;
  }

  function next() {
    let n = (current + 1) % slides.length;
    show(n);
  }

  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      clearInterval(timer);
      show(i);
      timer = setInterval(next, 6000);
    });
  });

  setTimeout(() => {
    show(0);
  }, 50);

  timer = setInterval(next, 6000);
}

window.addEventListener('load', () => {
  initIcons();
  initHero();
  renderProductCards();
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  
  const solutionsAnimated = document.querySelector('.solutions-animated');
  if (solutionsAnimated) {
    const solutionsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { solStart(); solutionsObserver.disconnect(); }
    }, { threshold: 0.3 });
    solutionsObserver.observe(solutionsAnimated);
  }

  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  renderProjects();
  initContactForm();

  // Modal close listeners
  document.getElementById('modal-close').addEventListener('click', closeProductModal);
  document.getElementById('product-modal').addEventListener('click', function(e) {
    if (e.target === this) closeProductModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProductModal();
  });

  // Intercept wheel events on overlay → scroll the container, not the page
  document.getElementById('product-modal').addEventListener('wheel', function(e) {
    const container = this.querySelector('.product-modal-container');
    if (container) {
      container.scrollTop += e.deltaY;
      e.preventDefault();
    }
  }, { passive: false });
});

function animateNumbers() {
  const numbers = document.querySelectorAll('.number')
  numbers.forEach(num => {
    if (num.classList.contains('animated')) return
    num.classList.add('animated')
    const target = parseInt(num.getAttribute('data-target'))
    let frame = 0, totalFrames = 120;
    const timer = setInterval(() => {
      frame++;
      num.textContent = Math.round(target * (frame / totalFrames));
      if (frame >= totalFrames) { num.textContent = target; clearInterval(timer); }
    }, 16);
  })
}

const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
})

const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

const capFilter = document.getElementById("capacity-filter");
const rangeVal = document.getElementById("range-val");
const tableRows = document.querySelectorAll("#specs-body tr");
if (capFilter) {
  capFilter.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    rangeVal.textContent = val + "L";
    tableRows.forEach((row) => {
      const rowCap = parseInt(row.getAttribute("data-cap"));
      if (rowCap <= val) row.style.display = "table-row"; else row.style.display = "none";
    });
  });
}

document.querySelector('.sol-arrow-right')?.addEventListener('click', () => { solClicks += 1; if (solClicks === 1) solStep(); });
document.querySelector('.sol-arrow-left')?.addEventListener('click', () => { solOrder.unshift(solOrder.pop()); solInit(); });

const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });
}

// =============================================
// PRODUCT CARDS — Dynamic render from products.js
// =============================================
function renderProductCards() {
  const grid = document.getElementById('products-grid-dynamic');
  if (!grid || typeof FIRESLAB_PRODUCTS === 'undefined') return;

  grid.innerHTML = FIRESLAB_PRODUCTS.map(p => `
    <div class="product-card">
      <div class="card-image">
        <img src="${p.cardImage}" alt="${p.cardTitle}">
        ${p.cardBadge ? `<div class="card-badge">${p.cardBadge}</div>` : ''}
      </div>
      <div class="card-body">
        <h3>${p.cardTitle}</h3>
        <p>${p.cardDesc}</p>
        <ul class="card-specs">
          ${p.cardSpecs.map(s => `
            <li><i data-lucide="${s.icon}"></i> ${s.text}</li>
          `).join('')}
        </ul>
        <button class="btn btn-outline btn-sm" onclick="openProductModal('${p.id}')">
          View Details
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();

  // Add drag to scroll functionality
  const slider = document.querySelector('.horizontal-scroll-wrapper');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}

// =============================================
// PRODUCT MODAL — Open / Close / Toggle FAQ
// =============================================
window.openProductModal = function(productId) {
  if (typeof FIRESLAB_PRODUCTS === 'undefined') return;
  const p = FIRESLAB_PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-hero">
      <img src="${p.cardImage}" alt="${p.modalTitle}">
      <div class="modal-hero-text">
        <h2 id="modal-title-heading">${p.modalTitle}</h2>
        <p class="modal-tagline">${p.modalTagline}</p>
      </div>
    </div>

    <p class="modal-description">${p.modalDescription.replace(/\n\n/g, '</p><p class="modal-description">')}</p>

    <h3 class="modal-section-title">Key Features</h3>
    <div class="modal-features-grid">
      ${p.features.map(f => `
        <div class="modal-feature-card">
          <h4>${f.title}</h4>
          <p>${f.desc}</p>
        </div>
      `).join('')}
    </div>

    ${p.materials ? `
    <h3 class="modal-section-title">Available Materials</h3>
    ${p.materials.map(m => `
      <div class="modal-material">
        <h4>${m.name}</h4>
        <p>${m.desc}</p>
        <strong>Suitable For:</strong>
        <ul class="modal-suitable-list">${m.suitableFor.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
    `).join('')}` : ''}

    <h3 class="modal-section-title">Technical Specifications</h3>
    <table class="modal-specs-table">
      <thead><tr><th>Parameter</th><th>Specification</th></tr></thead>
      <tbody>
        ${p.specs.map(s => `
          <tr><td>${s.param}</td><td>${s.value}</td></tr>
        `).join('')}
      </tbody>
    </table>

    ${p.compatibleSystems ? `
    <h3 class="modal-section-title">Compatible Systems</h3>
    <ul class="modal-list">
      ${p.compatibleSystems.map(s => `<li><i data-lucide="check-circle"></i> ${s}</li>`).join('')}
    </ul>` : ''}

    <h3 class="modal-section-title">Applications</h3>
    <ul class="modal-list">
      ${p.applications.map(a => `<li><i data-lucide="check-circle"></i> ${a}</li>`).join('')}
    </ul>

    ${p.whyChoose ? `
    <h3 class="modal-section-title">Why Choose Our ${p.cardTitle}?</h3>
    <ul class="modal-list">
      ${p.whyChoose.map(w => `<li><i data-lucide="check-circle"></i> ${w}</li>`).join('')}
    </ul>` : ''}

    <h3 class="modal-section-title">Industries We Serve</h3>
    <ul class="modal-list modal-list-grid">
      ${p.industries.map(i => `<li><i data-lucide="building-2"></i> ${i}</li>`).join('')}
    </ul>

    <h3 class="modal-section-title">Frequently Asked Questions</h3>
    <div class="modal-faqs">
      ${p.faqs.map((f, i) => `
        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(${i})">
            <span>${f.q}</span>
            <i data-lucide="chevron-down" class="faq-icon"></i>
          </button>
          <div class="faq-answer" id="faq-${i}">
            <p>${f.a}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="modal-cta">
      <p>${p.ctaText}</p>
      <a href="#contact" class="btn btn-green" onclick="closeProductModal()">Request a Quote</a>
    </div>
  `;

  document.getElementById('product-modal').classList.add('active');
  lenis.stop(); // Stop Lenis smooth scroll so background doesn't scroll
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
  // Scroll overlay to top
  document.getElementById('product-modal').scrollTop = 0;
}

window.closeProductModal = function() {
  document.getElementById('product-modal').classList.remove('active');
  document.body.style.overflow = '';
  lenis.start(); // Resume Lenis smooth scroll
}

window.toggleFaq = function(index) {
  const answer = document.getElementById(`faq-${index}`);
  const btn = answer.previousElementSibling;
  answer.classList.toggle('open');
  btn.classList.toggle('open');
}

// =============================================
// Carousel Logic (Products Page)
// =============================================
function initCarousel() {
  const imgSlider = document.getElementById('carousel-img-slider');
  const infoBox = document.getElementById('carousel-info-box');
  const indicatorsBox = document.getElementById('carousel-indicators');
  
  if (!imgSlider || typeof FIRESLAB_PRODUCTS === 'undefined') return;

  // Filter products based on URL ?app= parameter
  const urlParams = new URLSearchParams(window.location.search);
  const appFilter = urlParams.get('app');
  let activeProducts = FIRESLAB_PRODUCTS;

  if (appFilter) {
    const filterKeyword = appFilter.toLowerCase();
    const mappedKeyword = {
      'hotels': 'hotel',
      'hospitals': 'hospital',
      'pools': 'commercial', // Mapped to commercial since 'pools' is not in products.js data
      'industrial': 'industr',
      'residential': 'residential',
      'hatcheries': 'commercial' // Mapped to commercial since 'hatcheries' is not in data
    }[filterKeyword] || filterKeyword;

    activeProducts = FIRESLAB_PRODUCTS.filter(p => {
      const appsStr = (p.applications || []).join(' ').toLowerCase();
      const indsStr = (p.industries || []).join(' ').toLowerCase();
      return appsStr.includes(mappedKeyword) || indsStr.includes(mappedKeyword);
    });

    if (activeProducts.length === 0) activeProducts = FIRESLAB_PRODUCTS; // Fallback if no match
  }

  const total = activeProducts.length;
  imgSlider.style.setProperty('--total', total);

  let imgHTML = '';
  let infoHTML = '';
  let dotsHTML = '';

  activeProducts.forEach((product, i) => {
    imgHTML += `
      <div class="img-item ${i === 0 ? 'active' : ''}" style="--i:${i};">
          <div class="item">
              <img src="${product.cardImage}" alt="${product.cardTitle}">
          </div>
      </div>
    `;

    infoHTML += `
      <div class="info-item ${i === 0 ? 'active' : ''}">
          <span class="info-tagline">${product.cardBadge || product.category}</span>
          <h2 class="info-title">${product.cardTitle}</h2>
          <p class="info-desc">${product.cardDesc}</p>
          
          <ul class="info-specs">
            <li><i data-lucide="check-circle"></i> High Quality Engineering</li>
            <li><i data-lucide="shield-check"></i> Standard Compliant</li>
            <li><i data-lucide="zap"></i> Maximum Efficiency</li>
          </ul>

          <div class="info-btns">
              <button class="btn btn-green" onclick="openProductModal('${product.id}')">View Details</button>
          </div>
      </div>
    `;

    dotsHTML += `<span class="indicator-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`;
  });

  imgSlider.innerHTML = imgHTML;
  infoBox.innerHTML = infoHTML;
  indicatorsBox.innerHTML = dotsHTML;
  
  if (window.lucide) window.lucide.createIcons();

  const imgItems = document.querySelectorAll('.img-item');
  const infoItems = document.querySelectorAll('.info-item');
  const dots = document.querySelectorAll('.indicator-dot');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  let indexSlider = 0;
  let index = 0;

  const updateCarousel = () => {
    const isMobile = window.innerWidth <= 991;
    
    if (!isMobile) {
      const angle = 360 / total;
      imgSlider.style.transform = `rotate(${indexSlider * angle}deg)`;

      const items = document.querySelectorAll('.item');
      items.forEach(item => {
          item.style.transform = `rotate(${indexSlider * -angle}deg)`;
      });
    }

    document.querySelector('.img-item.active').classList.remove('active');
    imgItems[index].classList.add('active');

    document.querySelector('.info-item.active').classList.remove('active');
    infoItems[index].classList.add('active');

    document.querySelector('.indicator-dot.active').classList.remove('active');
    dots[index].classList.add('active');
  };

  if(nextBtn) {
    nextBtn.addEventListener('click', () => {
        indexSlider++;
        index++;
        if (index > total - 1) index = 0;
        updateCarousel();
    });
  }

  if(prevBtn) {
    prevBtn.addEventListener('click', () => {
        indexSlider--;
        index--;
        if (index < 0) index = total - 1;
        updateCarousel();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.getAttribute('data-index'));
      const diff = targetIndex - index;
      indexSlider += diff;
      index = targetIndex;
      updateCarousel();
    });
  });
}

document.addEventListener('DOMContentLoaded', initCarousel);


