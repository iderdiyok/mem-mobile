// Lädt Header und Footer als wiederverwendbare Komponenten
// Barrierearm: setzt ARIA-Attribute und fokussierbare Navigationspunkte

async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    const html = await res.text();
    el.innerHTML = html;
    // Initialisierung, wenn Header/Footer Funktionen benötigen
    if (selector === '#site-header') initHeaderInteractions();
  } catch (e) {
    console.error('Komponente konnte nicht geladen werden:', url, e);
  }
}

function initHeaderInteractions() {
  const btn = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  if (!btn || !menu) return;

  // ARIA-States toggeln
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('hidden');
  });

  // Schließt Menü bei Fokusverlust/ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.add('hidden');
    }
  });
}

// Globale Initialisierung: Header/Footer laden
window.addEventListener('DOMContentLoaded', () => {
  loadComponent('#site-header', '/components/header.html');
  loadComponent('#site-footer', '/components/footer.html');
});
