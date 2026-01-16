# Google Search Console Setup für mem-mobile.de

## Schritte zur Einrichtung:

1. **Google Search Console aufrufen**
   - Gehe zu: https://search.google.com/search-console/
   - Melde dich mit deinem Google-Konto an

2. **Property hinzufügen**
   - Klicke auf "Property hinzufügen"
   - Wähle "URL-Präfix" und gib ein: https://www.mem-mobile.de
   - Klicke auf "Weiter"

3. **Inhaberschaft bestätigen**
   
   **Option A: HTML-Datei (Empfohlen)**
   - Lade die von Google bereitgestellte HTML-Datei herunter
   - Lade sie in das Root-Verzeichnis deiner Website hoch
   - Die Datei sollte erreichbar sein unter: https://www.mem-mobile.de/googleXXXXXXXXXXXXXXXX.html
   - Klicke auf "Bestätigen"
   
   **Option B: HTML-Tag**
   - Kopiere den Meta-Tag von Google
   - Füge ihn in den <head>-Bereich von index.html ein:
     ```html
     <meta name="google-site-verification" content="DEIN_CODE_HIER" />
     ```
   
   **Option C: Google Analytics**
   - Wenn du bereits Google Analytics verwendest, kannst du darüber verifizieren

4. **Sitemap einreichen**
   - Nach erfolgreicher Verifizierung gehe zu "Sitemaps" im Menü
   - Gib ein: sitemap.xml
   - Klicke auf "Senden"

5. **Weitere empfohlene Einstellungen**
   - **URL-Parameter**: Nicht benötigt
   - **Internationale Ausrichtung**: Deutschland
   - **Mobile Usability**: Wird automatisch überprüft
   - **Core Web Vitals**: Wichtig für Ranking - regelmäßig prüfen

## Wichtige Google Tools einrichten:

### Google Analytics 4 (GA4)
1. Erstelle ein GA4-Property auf https://analytics.google.com
2. Füge den Tracking-Code in alle Seiten ein (vor </head>):
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Business Profile
1. Erstelle/Beanspruche dein Unternehmensprofil: https://business.google.com
2. Füge alle 4 Filialen hinzu
3. Verifiziere jede Filiale (Postkartenverifizierung)
4. Füge Fotos, Öffnungszeiten, Services hinzu
5. Sammle Bewertungen von zufriedenen Kunden

## SEO Checkliste:

✅ sitemap.xml erstellt und hochgeladen
✅ robots.txt erstellt und hochgeladen
✅ Meta-Tags optimiert (Title, Description, Keywords)
✅ Structured Data (Schema.org) hinzugefügt
✅ Open Graph Tags für Social Media
✅ Canonical URLs gesetzt
✅ .htaccess für SEO optimiert
✅ Mobile-friendly Design
✅ Schnelle Ladezeiten

## Nächste Schritte:

1. **Content Marketing**
   - Blog starten mit Reparatur-Tipps
   - FAQ erweitern
   - Lokale Inhalte für Hamburg/Wilhelmsburg/Harburg

2. **Local SEO**
   - Einträge in lokalen Verzeichnissen (Yelp, GoLocal, etc.)
   - NAP (Name, Address, Phone) konsistent halten
   - Lokale Keywords verwenden

3. **Backlinks aufbauen**
   - Partnerschaften mit lokalen Unternehmen
   - Pressemitteilungen
   - Branchenverzeichnisse

4. **Monitoring**
   - Wöchentlich Search Console prüfen
   - Monatlich Rankings überwachen
   - Core Web Vitals optimieren
