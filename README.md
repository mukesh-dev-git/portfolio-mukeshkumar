<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:171717,100:FD853A&height=200&section=header&text=Mukeshkumar%20%C2%B7%20Portfolio&fontSize=44&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=AI%2FML%20Engineer&descAlignY=58&descSize=18" width="100%" alt="Portfolio banner"/>

<a href="https://mukesh.chillflareinnovations.com"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1200&color=FD853A&center=true&vCenter=true&width=720&lines=AI%2FML%2C+LLM+agents%2C+embedded+and+full-stack;Projects%2C+hackathon+wins+and+certifications;React+%2B+Vite+%2B+Framer+Motion" alt="Typing summary"/></a>

<br/>

[![Live](https://img.shields.io/badge/Live-mukesh.chillflareinnovations.com-000000?logo=vercel&logoColor=white)](https://mukesh.chillflareinnovations.com)
[![React](https://img.shields.io/badge/React%2019-61DAFB?logo=react&logoColor=black)](package.json)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](vite.config.ts)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](tsconfig.json)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white)](src/motion.ts)
<br/>
[![Status](https://img.shields.io/badge/Status-Live%20%C2%B7%20Oct%202026%20content-2ea44f)](#-status)
[![License](https://img.shields.io/badge/License-MIT%20(code)-blue)](LICENSE)

</div>

---

## <img src="https://api.iconify.design/lucide/user.svg?color=%23FD853A" width="26" align="top" alt=""/> Overview

My personal portfolio, live at **[mukesh.chillflareinnovations.com](https://mukesh.chillflareinnovations.com)** (also [mukeshkumar-portfolio.vercel.app](https://mukeshkumar-portfolio.vercel.app)), as the founder page under Chillflare Innovations. The layout and motion follow JCREA's "Product Designer Portfolio" Figma Community template; the content comes from my 2026-27 resume.

| Section | Content |
|---|---|
| Hero | Name, role, SIH 2025 badge, photo on an animated semicircle |
| What I Do | AI/ML, LLMs & Agents, Embedded & IoT, Full-Stack & Cloud |
| Experience | Chillflare Innovations (Founder), IQMaths (SWE Intern), St. Joseph's College of Engineering |
| Why Hire Me | Summary with animated counters (Amazon ML Challenge rank, SIH win) |
| Projects | Filterable project cards with a detail panel and GitHub links for public repos |
| Achievements | Auto-scrolling strip of hackathon results |
| Contact | Email form (opens your mail client) |
| Certifications | Meta Front-End Developer professional certificate as a folder of its 9 courses, plus Infosys Springboard certificates; each opens in a pop-up viewer (pdf.js, loaded on demand) |

## <img src="https://api.iconify.design/lucide/sparkles.svg?color=%23FD853A" width="26" align="top" alt=""/> Animations

The Figma prototype's easing curves are ported to Framer Motion in [`src/motion.ts`](src/motion.ts):

| Figma | Used for |
|---|---|
| Ease-in-and-out back `[0.68,-0.6,0.32,1.6]` | Hover morphs (service cards, buttons) |
| Ease-out back `[0.34,1.56,0.64,1]` | Click morphs |
| Gentle spring (100 / 15) | Shared-layout pills: nav, hero CTA, project filters |
| Quick spring (300 / 20) | Small icon motion |

Sections reveal on scroll, the timeline draws itself, the achievements strip loops and pauses on hover, and everything respects `prefers-reduced-motion`.

## <img src="https://api.iconify.design/lucide/network.svg?color=%23FD853A" width="26" align="top" alt=""/> How It Works

```mermaid
flowchart LR
    C[src/data/content.ts] --> R[React components]
    M[src/motion.ts] --> R
    R --> V[Vite build]
    V --> D[dist/]
    D --> H[Vercel]
    P[public/<br/>images, PDFs, Figma assets] --> V

    classDef host fill:#171717,stroke:#FD853A,color:#fff
    classDef page fill:#FFF1E8,stroke:#FD853A,color:#222
    class H host
    class C,M,R,V,D,P page
```

## <img src="https://api.iconify.design/lucide/zap.svg?color=%23FD853A" width="26" align="top" alt=""/> Run Locally

```bash
git clone https://github.com/mukesh-dev-git/portfolio-mukeshkumar.git
cd portfolio-mukeshkumar
npm install
npm run dev
```

`npm run build` type-checks and writes `dist/`. To change text, links or projects, edit [`src/data/content.ts`](src/data/content.ts) and push; Vercel redeploys from `main` and builds a preview for every other branch.

## <img src="https://api.iconify.design/lucide/folder-tree.svg?color=%23FD853A" width="26" align="top" alt=""/> Project Structure

```
portfolio-mukeshkumar/
├── index.html
├── src/
│   ├── App.tsx
│   ├── motion.ts          # easing and variants from the Figma prototype
│   ├── styles.css         # design tokens and section styles
│   ├── data/content.ts    # all copy, projects, achievements, certificates
│   └── components/        # Navbar, Hero, Services, Experience, WhyMe, Projects, ...
├── public/
│   ├── myself.png
│   ├── assets/figma/      # template shapes, textures and icons
│   ├── carosal/           # achievement photos
│   ├── hackathon/         # hackathon certificates and photos
│   ├── coursera/          # course certificates (PDF)
│   └── springboard/       # Infosys Springboard certificates (PDF)
└── vercel.json
```

## <img src="https://api.iconify.design/lucide/gauge.svg?color=%23FD853A" width="26" align="top" alt=""/> Status

Live. Rebuilt in October 2026 from a single CDN-React page to React + Vite with the new design. The previous version is in the git history.

Next updates:
- Swap in a cut-out photo to match the template's hero
- Add photos for the Amazon ML, HAC'KP and YESummit achievement cards

## <img src="https://api.iconify.design/lucide/scale.svg?color=%23FD853A" width="26" align="top" alt=""/> License

The code is MIT, see [LICENSE](LICENSE). My photos, certificates and personal content are not covered by that license; certificates belong to their issuers. The visual design is based on JCREA's portfolio template from the Figma Community.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FD853A,100:171717&height=110&section=footer&animation=fadeIn" width="100%" alt=""/>

</div>
