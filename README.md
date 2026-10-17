# 🏛️ Silvio Berlusconi – Portale & Citazioni Motivazionali

> *"«Da ogni male deve nascere un gran bene, un entusiasmo maggiore, una voglia incontenibile di riuscire.»"*  
> — **Silvio Berlusconi**

Un portale web e Progressive Web App (PWA) moderno e interattivo dedicato alla figura, alla retorica motivazionale e agli storici discorsi di Silvio Berlusconi: dall'ottimismo incrollabile del *"sole in tasca"* alla determinazione e resilienza imprenditoriale e comunicativa.

[![Live Demo on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://berlusconi-site.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Legal Framework](https://img.shields.io/badge/Legal-Fair%20Use%20%7C%20Art.%2021%20Cost.-green?style=for-the-badge)](LEGAL.md)
[![100% Free & No-Profit](https://img.shields.io/badge/Status-100%25%20Free%20%26%20No--Profit-gold?style=for-the-badge)](LEGAL.md)
[![GDPR Compliant](https://img.shields.io/badge/GDPR-Zero%20Tracking-brightgreen?style=for-the-badge)](LEGAL.md)

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

## ⚖️ Quadro Giuridico, Licenza Libera (MIT) & No-Profit

Il progetto rispetta rigorosamente la legislazione italiana ed europea sulla tutela del diritto d'autore, della libertà di pensiero e della proprietà industriale:

1. **Licenza Software Open Source (MIT):**
   L'architettura software del sito (HTML5, CSS3, JavaScript Vanilla, manifest PWA e Service Worker) è rilasciata sotto **Licenza Open Source MIT**, gratuita, libera e replicabile da chiunque per scopi educativi, personali o di sviluppo. Consultare il file [LICENSE](LICENSE).

2. **Finalità Culturale, Storiografica & 100% No-Profit:**
   Il portale non persegue finalità lucrative, commerciali o pubblicitarie. L'opera è inquadrata nei principi di libertà di manifestazione del pensiero, ricerca storica e diritto di cronaca (**Art. 21 Cost.** e **Artt. 65 e 70 Legge 633/1941**).

3. **Diritto all'Immagine di Personaggio Notorio (Artt. 96-97 L. 633/1941):**
   La riproduzione del ritratto fotografico e dell'immagine di Silvio Berlusconi è consentita in ragione della notorietà pubblica e dell'ufficio istituzionale ricoperto, svolta con scopi culturali e nel pieno rispetto del decoro e della dignità della persona.

4. **Zero Rivendicazione di Diritti su Filmati e Marchi Terzi:**
   Nessun diritto di privativa è rivendicato su loghi aziendali (Fininvest, Mediaset/MFE, AC Milan) o sui filmati incorporati via `iframe`. Tutti i diritti multimediali originari rimangono di esclusiva proprietà dei rispettivi aventi diritto, in piena aderenza alla giurisprudenza della CGUE (*Svensson* C-466/12 e *BestWater* C-348/13).

5. **Procedura di Rimozione Immediata (Notice & Take Down):**
   Per qualsiasi richiesta di rettifica o cancellazione da parte dei titolari dei diritti, è possibile contattare direttamente: [luca.celebrano1@gmail.com](mailto:luca.celebrano1@gmail.com). Rimozione garantita entro 24-48 ore.

Dettagli esaustivi sono disponibili nel documento dedicato [LEGAL.md](LEGAL.md).

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
├── LEGAL.md            # Inquadramento giuridico, fair use e licenza d'uso
├── LICENSE             # Licenza MIT e clausola no-profit
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

Realizzato da [@Lukecele](https://github.com/Lukecele).
