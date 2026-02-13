# 🐾 Hussain Cattery — Premium Global Breed Showcase

> A high-performance, mobile-first **Next.js** application for a WCF & FCI registered cattery established in 2017.
> Built as a BCA portfolio project demonstrating production-grade frontend engineering.

---

## ⚡ Technical Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 with custom luxury palette |
| **Typography** | Ubuntu (sans-serif) + Playfair Display (serif) via `next/font/google` |
| **Animations** | Framer Motion — GPU-accelerated, `transform`/`opacity` only |
| **Scroll** | Lenis — momentum-based smooth scrolling (iOS + Android) |
| **State** | React Context API (Currency, Theming) |
| **SEO** | JSON-LD Schema, OpenGraph, automated Sitemap & Robots |

---

## 🎨 Design System

**Custom "Premium Neutral" palette:**

| Token | Hex | Usage |
|---|---|---|
| `cat-cream` | `#FDF8F5` | Background, canvas |
| `cat-coral` | `#FF8E5E` | Primary CTAs, accents |
| `cat-beige` | `#F5E6D3` | Cards, dividers |
| `cat-charcoal` | `#2D3748` | Text, headings |
| `cat-slate` | `#5B6E74` | Secondary text |

---

## 🚀 Key Features

### 🌍 Dynamic Currency Converter
- Real-time exchange rates via open API
- 24-hour `localStorage` caching for performance
- `Intl.NumberFormat` locale-aware formatting (₹ / $ / €)
- Global Context API — works across all components

### 📊 Technical SEO
- **JSON-LD** `LocalBusiness` schema with 9 `knowsAbout` entries
- **OpenGraph** metadata with `en_IN` locale
- **Automated** `sitemap.xml` and `robots.txt` via Next.js conventions
- **Semantic HTML**: single `<h1>`, proper heading hierarchy, keyword-rich `alt` text

### 📱 Mobile-First UX
- 100% responsive — tested on Android & iOS
- `touch-action-manipulation` on all interactive elements (0ms tap delay)
- Minimum 48px touch targets on all buttons
- `inputMode="tel"` for numeric keyboards
- 16px minimum font-size to prevent iOS auto-zoom

### ⚡ Performance Engineering
- **Lenis** smooth scroll synced to device refresh rate
- **Framer Motion** — all animations use `transform`/`opacity` only (no layout thrashing)
- `will-change-transform` on Hero image for GPU compositing
- **Deferred Crisp Chat** — loads after 5s or 200px scroll (preserves FCP)
- `next/font` — zero layout shift font loading with `font-display: swap`

### 🐱 Application Features
- **Breed Gallery** — 7 premium breeds with flip-card modals and live availability badge
- **Reservation Form** — WhatsApp-integrated lead generation with pre-filled messages
- **Care Guide** — 6 SEO-rich expert articles (Grooming, Vaccinations, WCF Standards, Transport, Genetics, FCI Registration)
- **About Timeline** — Scroll-triggered brand story (2017 → Present)
- **Testimonials** — Auto-scrolling marquee with Google review integration
- **Google Maps** — Embedded location with floating "Visit Us" card
- **FAQ Accordion** — Animated with Framer Motion, brand-colored
- **Floating WhatsApp** — Official SVG, online indicator, chat preview bubble, breathing animation
- **WCF/FCI Badge Bar** — Social proof just above footer

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/hussain-cattery.git

# Navigate into the project
cd hussain-cattery

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, providers, JSON-LD)
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Design tokens & Tailwind config
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   └── robots.ts           # Search engine crawl rules
├── components/
│   ├── Hero.tsx            # Hero section with trust badge
│   ├── KittenGallery.tsx   # Breed showcase with modals
│   ├── ReservationForm.tsx # WhatsApp lead-gen form
│   ├── AboutTimeline.tsx   # Scroll-triggered brand story
│   ├── CareGuide.tsx       # SEO content grid (6 guides)
│   ├── Testimonials.tsx    # Auto-scrolling reviews
│   ├── FAQSection.tsx      # Animated accordion
│   ├── GoogleMapSection.tsx# Embedded location
│   ├── CatteryMoments.tsx  # Social wall
│   ├── CertifiedBadgeBar.tsx # WCF/FCI trust bar
│   ├── FloatingContactButtons.tsx # WhatsApp + Call
│   ├── CurrencySwitcher.tsx # INR/USD/EUR toggle
│   ├── Price.tsx           # Locale-aware price display
│   ├── CrispChat.tsx       # Deferred live chat
│   └── SmoothScroll.tsx    # Lenis wrapper
├── context/
│   └── CurrencyContext.tsx # Global currency state + API
└── lib/
    └── utils.ts            # Utility functions
```

---

## 📈 Performance Targets

| Metric | Target |
|---|---|
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |

---

## 👨‍💻 Developer

**Zahid Hussain** — BCA Student & Frontend Developer

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

---

## 📄 License

This project is proprietary software for Hussain Cattery. All rights reserved.
