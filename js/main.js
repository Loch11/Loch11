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

    const duration = 1800; // 1.8 seconds to calm the water
    const startTime = performance.now();
    const startScale = 38; // Initial heavy underwater warp

    function updateRipple(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out curve so ripples decelerate smoothly
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      // Reduce warp scale down to 0
      const currentScale = startScale * (1 - easeOut);
      displacement.setAttribute("scale", currentScale.toFixed(2));

      // Gently shift wave frequency to simulate flowing water settling
      const freqX = 0.015 + Math.sin(progress * Math.PI) * 0.008;
      const freqY = 0.045 - (progress * 0.02);
      turbulence.setAttribute("baseFrequency", `${freqX.toFixed(4)} ${freqY.toFixed(4)}`);

      if (progress < 1) {
        requestAnimationFrame(updateRipple);
      } else {
        // Remove filter completely at the end for pure vector crispness
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
    { threshold: 0.1 } // Triggers when 10% of the footer is visible
  );

  observer.observe(logoWrap);

  // FAIL-SAFE: If the observer doesn't trigger within 800ms, force it visible anyway
  setTimeout(() => {
    if (!hasAnimated) {
      triggerReveal();
    }
  }, 800);
});