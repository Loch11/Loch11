/* ============================================
   LOCH11 — main.js
   Shared JS across all pages
   ============================================ */

// ---------- AOS Init ----------
AOS.init({
  duration: 650,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

// ---------- Nav: scroll class + hamburger ----------
(function () {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  // Add .scrolled class on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
})();

// ---------- Footer year ----------
(function () {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// ---------- Smooth anchor scroll (for same-page links) ----------
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
