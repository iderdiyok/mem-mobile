// Fixed Contact Widget
document.addEventListener('DOMContentLoaded', function() {
    // Create widget HTML
    const widgetHTML = `
        <div id="contact-widget" class="fixed bottom-6 right-6 z-50">
            <!-- Toggle Button -->
            <button id="contact-widget-toggle" class="h-14 w-14 rounded-full bg-brand-primary text-white shadow-lg hover:bg-brand-primary/90 transition flex items-center justify-center group" aria-label="Kontakt Widget öffnen">
                <svg class="h-6 w-6 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </button>
            
            <!-- Widget Panel -->
            <div id="contact-widget-panel" class="hidden absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                <div class="bg-brand-primary text-white p-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h3 class="font-semibold">Kontakt</h3>
                    </div>
                    <button id="contact-widget-close" class="hover:bg-white/20 rounded p-1 transition" aria-label="Widget schließen">
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="p-4 space-y-3">
                    <!-- Telefon -->
                    <a href="tel:+4917692824777" class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-primary hover:bg-brand-primary/5 transition group">
                        <div class="h-10 w-10 rounded-full bg-brand-primary/10 text-brand-primary grid place-content-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-600">Anrufen</p>
                            <p class="font-semibold text-gray-900">+49 176 92824777</p>
                        </div>
                    </a>
                    
                    <!-- E-Mail -->
                    <a href="mailto:mem3@mem-mobile.de" class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-accent hover:bg-brand-accent/5 transition group">
                        <div class="h-10 w-10 rounded-full bg-brand-accent/10 text-brand-accent grid place-content-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-white transition">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-600">E-Mail senden</p>
                            <p class="font-semibold text-gray-900">mem3@mem-mobile.de</p>
                        </div>
                    </a>

                    <!-- WhatsApp -->
                    <a href="https://wa.me/4917692824777" target="_blank" rel="noopener" class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition group">
                        <div class="h-10 w-10 rounded-full bg-green-100 text-green-600 grid place-content-center flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-600">WhatsApp</p>
                            <p class="font-semibold text-gray-900">Chat starten</p>
                        </div>
                    </a>
                </div>
                <div class="bg-gray-50 p-3 text-center">
                    <a href="/pages/contact.html" class="text-sm text-brand-primary hover:underline font-medium">Alle Kontaktmöglichkeiten →</a>
                </div>
            </div>
        </div>
    `;

    // Inject widget into body
    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    // Get elements
    const toggleBtn = document.getElementById('contact-widget-toggle');
    const closeBtn = document.getElementById('contact-widget-close');
    const panel = document.getElementById('contact-widget-panel');

    // Toggle panel
    toggleBtn.addEventListener('click', function() {
        panel.classList.toggle('hidden');
    });

    // Close panel
    closeBtn.addEventListener('click', function() {
        panel.classList.add('hidden');
    });

    // Close panel when clicking outside
    document.addEventListener('click', function(event) {
        const widget = document.getElementById('contact-widget');
        if (!widget.contains(event.target)) {
            panel.classList.add('hidden');
        }
    });
});
