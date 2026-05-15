// import './style.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
