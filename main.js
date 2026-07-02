// ══════════════════════════════════════
// Navbar — scroll effect & logo reveal
// ══════════════════════════════════════
const navbar = document.getElementById('navbar');
const hero = document.getElementById('hero');
const navLogo = document.getElementById('navLogo');

function updateNavbar() {
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const scrolled = window.scrollY > heroBottom - 100;
  navbar.classList.toggle('scrolled', scrolled);
  
  // Calculate scroll progress (0 at top, 1 when scrolled past hero)
  const progress = Math.min(Math.max(window.scrollY / heroBottom, 0), 1);
  navLogo.style.setProperty('--scroll-progress', progress);
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ══════════════════
// Mobile menu toggle
// ══════════════════
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ══════════════════
// Scroll reveal
// ══════════════════
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// ══════════════════
// Smooth scroll
// ══════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ══════════════════════════════════════
// Active nav link highlight
// ══════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ══════════════════════════════════════
// Team horizontal scroll with controls
// ══════════════════════════════════════
const teamScroll = document.getElementById('teamScroll');
const teamWrapper = document.getElementById('teamWrapper');
const scrollLeftBtn = document.getElementById('teamScrollLeft');
const scrollRightBtn = document.getElementById('teamScrollRight');
const scrollDotsContainer = document.getElementById('scrollDots');

if (teamScroll && teamWrapper) {
  const cards = teamScroll.querySelectorAll('.team-card');
  const cardWidth = 244; // card width (220) + gap (24)
  const totalCards = cards.length;

  // Create dots
  const dotsCount = Math.ceil(totalCards / 3);
  for (let i = 0; i < dotsCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      teamScroll.scrollTo({ left: i * cardWidth * 3, behavior: 'smooth' });
    });
    scrollDotsContainer.appendChild(dot);
  }

  function updateScrollUI() {
    const sl = teamScroll.scrollLeft;
    const maxScroll = teamScroll.scrollWidth - teamScroll.clientWidth;

    // Arrow visibility
    scrollLeftBtn.classList.toggle('hidden', sl <= 10);
    scrollRightBtn.classList.toggle('hidden', sl >= maxScroll - 10);

    // Wrapper fade hints
    teamWrapper.classList.toggle('scrolled-start', sl > 10);
    teamWrapper.classList.toggle('scrolled-end', sl >= maxScroll - 10);

    // Active dot
    const activeDotIndex = Math.round(sl / (cardWidth * 3));
    scrollDotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === activeDotIndex);
    });
  }

  teamScroll.addEventListener('scroll', updateScrollUI);
  window.addEventListener('resize', updateScrollUI);
  updateScrollUI();

  scrollLeftBtn.addEventListener('click', () => {
    teamScroll.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
  });
  scrollRightBtn.addEventListener('click', () => {
    teamScroll.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
  });
}
