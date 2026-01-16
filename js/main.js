// Allgemeine, seitenübergreifende JS-Funktionen
// dezente Hover-/Scroll-Effekte und Performance-Kleinigkeiten

// Intersect-Observer für sanfte Fade-In Animationen
(function initFadeIns() {
  const els = document.querySelectorAll('[data-fade]');
  if (!('IntersectionObserver' in window) || els.length === 0) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-3', 'transition', 'duration-700');
    obs.observe(el);
  });
})();

// Einfache, barrierearme Carousel-Logik
function initCarousel() {
  const root = document.querySelector('#carousel');
  if (!root) return;
  const track = root.querySelector('[data-track]');
  const slides = Array.from(root.querySelectorAll('[data-slide]'));
  const prevBtn = root.querySelector('[data-prev]');
  const nextBtn = root.querySelector('[data-next]');
  const dots = Array.from(root.querySelectorAll('[data-dot]'));
  let index = 0;
  let timer;

  function update() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
    slides.forEach((s, i) => s.setAttribute('aria-hidden', String(i !== index)));
    dots.forEach((d, i) => {
      d.classList.toggle('bg-brand-primary', i === index);
      d.classList.toggle('bg-gray-300', i !== index);
    });
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => { index = (index + 1) % slides.length; update(); }, 5000);
  }
  function stopAuto() { if (timer) clearInterval(timer); }

  prevBtn?.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; update(); startAuto(); });
  nextBtn?.addEventListener('click', () => { index = (index + 1) % slides.length; update(); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { index = i; update(); startAuto(); }));

  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', startAuto);
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { index = (index - 1 + slides.length) % slides.length; update(); }
    if (e.key === 'ArrowRight') { index = (index + 1) % slides.length; update(); }
  });

  update();
  startAuto();
}

window.addEventListener('DOMContentLoaded', () => {
  initCarousel();
});
