// script.js – Interattività, PWA Service Worker, Mobile Drawer, Filtri accessibili e Quotes

// Registrazione Service Worker (PWA Google Standards)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('PWA ServiceWorker registrato con successo:', reg.scope))
      .catch((err) => console.warn('PWA ServiceWorker registrazione fallita:', err));
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  // Inizializza icone Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  let allQuotes = [];

  // ==========================================
  // Mobile Drawer Navigation (Touch & Keyboard Accessible)
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer() {
    if (!mobileDrawer || !drawerOverlay) return;
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    if (mobileToggle) {
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden'; // Impedisce lo scroll di sfondo
  }

  function closeDrawer() {
    if (!mobileDrawer || !drawerOverlay) return;
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    if (mobileToggle) {
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // Chiudi drawer cliccando sui link interni
  document.querySelectorAll('.drawer-link').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Chiudi con tasto Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // ==========================================
  // Smooth Back to Top
  // ==========================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // Caricamento Dinamico Quotes da quotes.json
  // ==========================================
  const quoteContainer = document.getElementById('quote-list');
  try {
    const response = await fetch('quotes.json');
    if (!response.ok) throw new Error('Quotes fetch failed');
    allQuotes = await response.json();
    renderQuotes(allQuotes);
    setupFilters();
    setupDailyQuoteGenerator(allQuotes);
  } catch (error) {
    console.warn('Uso dati fallback per citazioni:', error);
    allQuotes = [
      {
        quote: "Da ogni male deve nascere un gran bene. Da ogni male deve venire un entusiasmo maggiore, una speranza maggiore, una grande voglia di riuscire e di conseguire il proprio traguardo!",
        context: "Il discorso motivazionale sulla resilienza e la capacità di trasformare le prove della vita in slancio.",
        category: "Determinazione",
        icon: "flame"
      },
      {
        quote: "Chi ci crede combatte, chi ci crede supera tutti gli ostacoli, chi ci crede vince!",
        context: "Il celebre mantra rivolto a collaboratori e sportivi.",
        category: "Determinazione",
        icon: "trophy"
      },
      {
        quote: "Lo dovete sempre avere il sole in tasca e tirarlo fuori al momento giusto. Offrirlo con un sorriso sincero a tutte le persone che incontrate.",
        context: "La regola di vita per ispirare fiducia e generosità.",
        category: "Visione di Vita",
        icon: "sun"
      },
      {
        quote: "Un imprenditore, un leader, ha il dovere morale dell'ottimismo.",
        context: "Discorso sul valore propulsivo della visione positiva nel lavoro.",
        category: "Leadership",
        icon: "sparkles"
      }
    ];
    renderQuotes(allQuotes);
    setupFilters();
    setupDailyQuoteGenerator(allQuotes);
  }

  // Render cards
  function renderQuotes(quotes) {
    if (!quoteContainer) return;
    quoteContainer.innerHTML = '';

    quotes.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'quote-card';
      card.innerHTML = `
        <div>
          <div class="quote-card-header">
            <span class="quote-badge">${item.category || 'Visione'}</span>
            <i data-lucide="${item.icon || 'quote'}"></i>
          </div>
          <p class="quote-text">“${item.quote}”</p>
        </div>
        <p class="quote-context">${item.context || 'Silvio Berlusconi'}</p>
      `;
      quoteContainer.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filtri categoria con supporto accessibilità tastiera
  function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') {
          renderQuotes(allQuotes);
        } else {
          const filtered = allQuotes.filter((q) => q.category === filter);
          renderQuotes(filtered);
        }
      });
    });
  }

  // Generatore citazione quotidiana
  function setupDailyQuoteGenerator(quotes) {
    const textEl = document.getElementById('dailyQuoteText');
    const ctxEl = document.getElementById('dailyQuoteContext');
    const btn = document.getElementById('newQuoteBtn');

    if (!textEl || !btn || !quotes.length) return;

    let currentIndex = 0;

    btn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % quotes.length;
      const q = quotes[currentIndex];
      textEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = `“${q.quote}”`;
        if (ctxEl) ctxEl.textContent = `– ${q.context}`;
        textEl.style.opacity = '1';
      }, 150);
    });
  }

  // ==========================================
  // Cookie Consent Banner (GDPR / ePrivacy)
  // ==========================================
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
  const rejectCookiesBtn = document.getElementById('rejectCookiesBtn');
  const cookieBannerLink = document.getElementById('cookieBannerLink');
  const COOKIE_KEY = 'sb_cookie_consent_v1';

  const consentValue = localStorage.getItem(COOKIE_KEY);
  if (!consentValue && cookieBanner) {
    // Mostra con piccolo delay per fluidità
    setTimeout(() => {
      cookieBanner.classList.add('visible');
    }, 800);
  }

  function setConsent(choice) {
    localStorage.setItem(COOKIE_KEY, choice);
    if (cookieBanner) {
      cookieBanner.classList.remove('visible');
    }
  }

  if (acceptCookiesBtn) acceptCookiesBtn.addEventListener('click', () => setConsent('all'));
  if (rejectCookiesBtn) rejectCookiesBtn.addEventListener('click', () => setConsent('essential'));

  // ==========================================
  // Legal Modal (Privacy Policy & Note Legali)
  // ==========================================
  const legalModalOverlay = document.getElementById('legalModalOverlay');
  const closeLegalModal = document.getElementById('closeLegalModal');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const openPrivacyBtn = document.getElementById('openPrivacyBtn');
  const openCookieBtn = document.getElementById('openCookieBtn');
  const openCopyrightBtn = document.getElementById('openCopyrightBtn');

  function openLegalModal(targetId) {
    if (!legalModalOverlay) return;
    legalModalOverlay.classList.add('open');
    legalModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (typeof targetId === 'string') {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
      }
    }
  }

  function closeLegalModalDialog() {
    if (!legalModalOverlay) return;
    legalModalOverlay.classList.remove('open');
    legalModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openPrivacyBtn) openPrivacyBtn.addEventListener('click', () => openLegalModal('legal-privacy'));
  if (openCookieBtn) openCookieBtn.addEventListener('click', () => openLegalModal('legal-cookies'));
  if (openCopyrightBtn) openCopyrightBtn.addEventListener('click', () => openLegalModal('legal-copyright'));
  if (cookieBannerLink) cookieBannerLink.addEventListener('click', () => openLegalModal('legal-cookies'));

  if (closeLegalModal) closeLegalModal.addEventListener('click', closeLegalModalDialog);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeLegalModalDialog);

  if (legalModalOverlay) {
    legalModalOverlay.addEventListener('click', (e) => {
      if (e.target === legalModalOverlay) closeLegalModalDialog();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && legalModalOverlay && legalModalOverlay.classList.contains('open')) {
      closeLegalModalDialog();
    }
  });
});
