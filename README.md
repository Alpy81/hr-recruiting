# TalentForge HR — We Build Careers

> A modern, high-performance HR recruiting website built for a Frankfurt-based startup. Designed and developed by [WEBSYLON](https://web-sylon.de) — professional web solutions for ambitious businesses.

---

## Overview

TalentForge HR is a full-featured, production-ready recruiting platform that connects exceptional talent with leading companies. The website serves as the digital presence for a professional HR recruiting agency, featuring job listings, service pages, candidate management, employer branding, and a fully functional contact system with CV upload.

---

## ✨ Features

- **One-Page Architecture** — Smooth anchor-based navigation across all sections
- **Dynamic Hero Section** — Animated rotating keywords with professional imagery
- **Services Showcase** — 6 individual service pages with detailed process descriptions
- **Live Job Board** — Styled job listings with hover interactions and level badges
- **Employer Section** — Testimonial slider with arrow navigation and industry grid
- **Candidate Section** — Step-by-step process with image and promise cards
- **Contact Form** — Dual-mode form (Employer / Candidate) with real-time validation
- **CV Upload** — Drag & Drop file upload for candidates (PDF / Word, max 10MB)
- **Email Integration** — Live email delivery via Resend API with CV as attachment
- **Appointment Booking** — Calendly integration with custom branded page
- **Legal Pages** — Impressum, Datenschutz, AGB, Cookie-Richtlinie (GDPR compliant)
- **Cookie Banner** — Modal with category toggles (Necessary / Analytics / Marketing)
- **Fully Responsive** — Optimized from 320px to 4K, mobile-first approach
- **Leistungen Dropdown** — Hover dropdown in navbar with 6 service sub-pages

---

## 🛠 Tech Stack

| Category       | Technology                                |
| -------------- | ----------------------------------------- |
| **Framework**  | Next.js 14 (App Router)                   |
| **Styling**    | Tailwind CSS                              |
| **Animations** | Framer Motion                             |
| **Icons**      | Lucide React                              |
| **Forms**      | React Hook Form                           |
| **Email**      | Resend API                                |
| **Booking**    | Calendly Embed                            |
| **Fonts**      | Barlow Condensed, DM Sans, JetBrains Mono |
| **Deployment** | Vercel                                    |

---

## 🎨 Design System

| Token        | Value     |
| ------------ | --------- |
| Primary Cyan | `#00AEEF` |
| Cyan Light   | `#33C3F0` |
| Cyan Dark    | `#0090C8` |
| Background   | `#0A0A0A` |
| Surface      | `#111318` |
| Surface 2    | `#1A1E26` |
| Muted Text   | `#8BA3B0` |
| White        | `#FFFFFF` |

---

## 📁 Project Structure

```
hr-recruiting/
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   ├── contract_2.jpg
│   ├── consulting-team.jpg
│   └── team_meeting.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── api/kontakt/route.ts
│   │   ├── leistungen/
│   │   │   ├── executive-search/
│   │   │   ├── direct-search/
│   │   │   ├── hr-consulting/
│   │   │   ├── employer-branding/
│   │   │   ├── candidate-management/
│   │   │   └── interim-management/
│   │   ├── termin/
│   │   ├── impressum/
│   │   ├── datenschutz/
│   │   ├── agb/
│   │   └── cookies/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── CookieBanner.tsx
│   │   │   ├── LeistungPage.tsx
│   │   │   └── LegalPage.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── ProcessSection.tsx
│   │       ├── JobsSection.tsx
│   │       ├── ArbeitgeberSection.tsx
│   │       ├── KandidatenSection.tsx
│   │       └── KontaktSection.tsx
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── .env.local
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A [Resend](https://resend.com) account (free tier available)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hr-recruiting.git
cd hr-recruiting

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Resend API Key — get it at https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Recruiter's email address
RECRUITER_EMAIL=info@talentforge-hr.de
```

### Development

```bash
npm run dev
```

Open https://websylon-hr-recruiting-demo-website.netlify.app

### Production Build

```bash
npm run build
npm run start
```

---

## 📧 Email Setup (Resend)

1. Create a free account at [resend.com](https://resend.com)
2. Generate an API key under **API Keys**
3. Verify your sending domain under **Domains**
4. Add your API key to `.env.local`
5. Update `RECRUITER_EMAIL` with the recruiter's real email address

> **Note:** In test mode, emails can only be sent to the registered Resend account email. Verify your domain for production use.

---

## 📅 Calendly Setup

The booking page at `/termin` uses a Calendly embed. To update the link, edit `src/app/termin/page.tsx`:

```tsx
data-url="https://calendly.com/your-username/30min?..."
```

---

## 🌐 Deployment (Vercel)

1. Push to a **private** GitHub repository
2. Connect the repository at http://app.netlify.com
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `RECRUITER_EMAIL`
4. Deploy — Vercel handles the rest automatically

---

## 📄 Legal Pages

All legal pages use placeholder data and must be updated before going live:

| Page              | Route          | Status                       |
| ----------------- | -------------- | ---------------------------- |
| Impressum         | `/impressum`   | ⚠️ Update company data       |
| Datenschutz       | `/datenschutz` | ⚠️ Update company data       |
| AGB               | `/agb`         | ⚠️ Review with lawyer        |
| Cookie-Richtlinie | `/cookies`     | ⚠️ Update if analytics added |

---

## 🔧 Customization

### Update Company Data

Edit `src/lib/constants.ts`:

```ts
export const CONTACT_INFO = {
  email: "info@talentforge-hr.de",
  phone: "+49 (0) 69 000 000 00",
  address: "Frankfurt am Main, Deutschland",
};
```

### Update Job Listings

Edit the `JOBS` array in `src/components/sections/JobsSection.tsx`.

### Update Testimonials

Edit the `TESTIMONIALS` array in `src/components/sections/ArbeitgeberSection.tsx`.

---

## 👨‍💻 Built by

<div align="center">

<img src="/public/websylon.png" alt="WEBSYLON" width="200" />

**WEBSYLON** — Professional Web Development & Digital Solutions

_Frankfurt am Main, Germany_

</div>

---

<div align="center">
  <sub>© 2026 WEBSYLON. All rights reserved.</sub>
</div>
