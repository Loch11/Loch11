/* ============================================
   LOCH11 — work.js
   Gallery tab switching on work page
   ============================================ */

(function () {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.gallery-section');

  if (!tabBtns.length) return;

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = this.dataset.target;

      // Update active tab button
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Show the matching section, hide others
      sections.forEach(function (section) {
        if (section.id === target) {
          section.classList.add('active');
          // Re-trigger AOS for newly visible items
          AOS.refresh();
        } else {
          section.classList.remove('active');
        }
      });

      // Scroll to top of gallery area smoothly
      const header = document.querySelector('.page-header');
      if (header) {
        const offset = header.offsetTop + header.offsetHeight - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // If URL has a hash matching a tab, activate it on load
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchBtn = document.querySelector(`.tab-btn[data-target="${hash}"]`);
    if (matchBtn) matchBtn.click();
  }
})();

// ---------- Lightbox ----------
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  // Add click listener to every gallery image
  document.querySelectorAll('.logo-item img, .type-item img, .character-item img, .illustration-item img').forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;

      // Grab the caption from the h4 sibling
      const label = this.closest('.logo-item, .type-item, .character-item, .illustration-item')
        .querySelector('h4');
      lightboxCaption.textContent = label ? label.textContent : '';

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close on X button
  lightboxClose.addEventListener('click', closeLightbox);

  // Close on backdrop click
  lightboxBackdrop.addEventListener('click', closeLightbox);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }
});