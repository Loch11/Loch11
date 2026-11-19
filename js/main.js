document.addEventListener("DOMContentLoaded", () => {
  const logoWrap = document.getElementById("footerLogo");
  const displacement = document.getElementById("water-displacement");
  const turbulence = document.getElementById("water-turbulence");

  if (!logoWrap) return;

  let hasAnimated = false;

  const animateWaterSettle = () => {
    if (!displacement || !turbulence) {
      if (logoWrap) logoWrap.classList.add("is-visible");
      return;
    }

    const duration = 1800;
    const startTime = performance.now();
    const startScale = 38;

    function updateRipple(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentScale = startScale * (1 - easeOut);
      displacement.setAttribute("scale", currentScale.toFixed(2));

      const freqX = 0.015 + Math.sin(progress * Math.PI) * 0.008;
      const freqY = 0.045 - (progress * 0.02);
      turbulence.setAttribute("baseFrequency", `${freqX.toFixed(4)} ${freqY.toFixed(4)}`);

      if (progress < 1) {
        requestAnimationFrame(updateRipple);
      } else {
        logoWrap.style.filter = "none";
      }
    }

    requestAnimationFrame(updateRipple);
  };

  const triggerReveal = () => {
    if (hasAnimated) return;
    hasAnimated = true;
    logoWrap.classList.add("is-visible");
    animateWaterSettle();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerReveal();
          observer.unobserve(logoWrap);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(logoWrap);

  // FAIL-SAFE: If the observer doesn't trigger within 800ms, force it visible anyway
  setTimeout(() => {
    if (!hasAnimated) {
      triggerReveal();
    }
  }, 800);
});