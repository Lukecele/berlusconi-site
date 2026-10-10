# 🏛️ Silvio Berlusconi – Portale & Citazioni Motivazionali

> *"«Da ogni male deve nascere un gran bene, un entusiasmo maggiore, una voglia incontenibile di riuscire.»"*  
> — **Silvio Berlusconi**

Un portale web e Progressive Web App (PWA) moderno e interattivo dedicato alla figura, alla retorica motivazionale e agli storici discorsi di Silvio Berlusconi: dall'ottimismo incrollabile del *"sole in tasca"* alla determinazione e resilienza imprenditoriale e comunicativa.

[![Live Demo on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://berlusconi-site.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

🌐 **Sito Live su Vercel**: [https://berlusconi-site.vercel.app](https://berlusconi-site.vercel.app)

---

## ✨ Funzionalità Principali

- **🎙️ Archivio Citazioni Dinamico (`quotes.json`)**:
  - Citazioni categorizzate per temi chiave (*Visione & Ottimismo*, *Resilienza*, *Impresa & Milan*, *Discorsi Storici*).
  - Filtro interattivo in tempo reale e ricerca rapida.
  - Generatore random di frasi motivazionali con animazioni fluide.
  - Tasto di condivisione e copia immediata negli appunti con feedback visivo.
- **🎬 Sezione Multimediale & Reel**:
  - Player video e audio integrati per i discorsi e i passaggi più celebri.
- **📱 PWA & Offline Support**:
  - Service Worker (`sw.js`) per caching e fruizione offline.
  - Web App Manifest configurato con icone per installazione su iOS/Android e Desktop.
- **🎨 Design Moderno & Immersivo**:
  - Tema scuro con accenti dorati e blu istituzionale, ambient lighting dinamico.
  - Iconografia tramite Lucide Icons.
  - Tipografia rifinita con *Plus Jakarta Sans* e *Playfair Display*.
  - Completamente responsive e ottimizzato per mobile e viewport ridotti.

---

## 🛠️ Tecnologie Utilizzate

- **HTML5 semantico** con metadati SEO, Open Graph e Twitter Cards completi.
- **CSS3 Vanilla**: CSS custom properties, grid/flexbox moderni, backdrop-filter e glow orbs.
- **JavaScript Vanilla (ES6+)**: caricamento asincrono dati, filtri reattivi, gestione audio/video, PWA registration.
- **Lucide Icons**: icone vettoriali moderne e leggere.
- **Vercel**: hosting e continuous deployment.

---

## 🚀 Avvio Locale

Non sono necessarie dipendenze o build step pesanti. È sufficiente un qualsiasi web server locale:

```bash
# Clona il repository
git clone https://github.com/Lukecele/berlusconi-site.git
cd berlusconi-site

# Avvia un server locale (es. con Python 3)
python3 -m http.server 8080

# Oppure con Node / npx
npx serve .
```

Apri quindi il browser all'indirizzo `http://localhost:8080`.

---

## 📁 Struttura del Progetto

```text
berlusconi-site/
├── assets/             # Icone, manifest assets, immagini e poster
├── index.html          # Struttura principale del portale
├── manifest.json       # Configurazione Progressive Web App
├── quotes.json         # Database JSON delle citazioni storiche
├── robots.txt          # Regole di indicizzazione crawler
├── script.js           # Logica di interazione, filtri e PWA
├── sitemap.xml         # Mappa del sito per motori di ricerca
├── style.css           # Stili dell'interfaccia e animazioni
└── sw.js               # Service Worker per caching offline
```

---

## 👤 Autore & Contatti

Realizzato da **Luca Celebrano** ([@Lukecele](https://github.com/Lukecele)).
