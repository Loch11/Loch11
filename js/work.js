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
