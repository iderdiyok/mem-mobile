# MEM-Mobile – Moderne, responsive Reparatur-Website

Ein statisches, leichtgewichtiges Web-Projekt mit HTML5, Tailwind CSS (CDN) und Vanilla JavaScript. Mobile-First, barrierearm, SEO-freundlich und vorbereitet für spätere Erweiterungen (CMS/Shop).

## Struktur

- assets/
  - images/
- css/
  - styles.css
- js/
  - components.js
  - main.js
- components/
  - header.html
  - footer.html
- pages/
  - services.html
  - buy-sell.html
  - contracts.html
  - contact.html
  - shop.html
  - impressum.html
  - datenschutz.html
  - barrierefreiheit.html
  - batteriehinweis.html
- index.html

## Entwicklung & Vorschau

Öffne `index.html` direkt im Browser oder nutze einen lokalen Server.

### Schnellstart (optional)

```bash
# im Projektordner
python3 -m http.server 5500
# oder
npx serve .
```

Dann im Browser: http://localhost:5500

## Tailwind

Tailwind wird per CDN eingebunden. Für Produktion kannst du später ein Build-Setup (PostCSS/tailwind.config.js) hinzufügen und ungenutzte Klassen "purgeln".

## Rechtliches

Die Seiten Impressum/Datenschutz/Barrierefreiheit/Batteriehinweis enthalten kurze Hinweise und verlinken auf die offiziellen Volltexte von mem-mobile.de. Firmendaten und Filial-Adressen sind Faktenangaben von der offiziellen Seite.
