<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:312E81,100:EC4899&height=200&section=header&text=Mukeshkumar%20%C2%B7%20Portfolio&fontSize=44&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Full%20Stack%20Developer&descAlignY=58&descSize=18" width="100%" alt="Portfolio banner"/>

<a href="https://mukeshkumar-portfolio.vercel.app"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1200&color=EC4899&center=true&vCenter=true&width=720&lines=About%2C+skills+and+experience;Hackathon+wins+in+an+auto-sliding+carousel;Projects+and+certifications;Single+HTML+page+%C2%B7+React+from+a+CDN" alt="Typing summary"/></a>

<br/>

[![Live](https://img.shields.io/badge/Live-mukeshkumar--portfolio.vercel.app-000000?logo=vercel&logoColor=white)](https://mukeshkumar-portfolio.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](styles.css)
[![React](https://img.shields.io/badge/React%2018-CDN-61DAFB?logo=react&logoColor=black)](index.html)
<br/>
[![Status](https://img.shields.io/badge/Status-Live%20%C2%B7%20Jan%202026%20content-2ea44f)](#-status)
[![License](https://img.shields.io/badge/License-MIT%20(code)-blue)](LICENSE)

</div>

---

## <img src="https://api.iconify.design/lucide/user.svg?color=%23EC4899" width="26" align="top" alt=""/> Overview

My personal portfolio, live at **[mukeshkumar-portfolio.vercel.app](https://mukeshkumar-portfolio.vercel.app)**. It is one static page with no build step: `index.html` loads React 18 and Babel from unpkg and renders the sections in the browser.

| Section | Content |
|---|---|
| About | Introduction and photo (`myself.png`) |
| Skills & Expertise | Technology groups |
| Experience | Co-Founder & Lead Software Developer at Powerenv Technologies (smart meters, March 2024 onward) |
| Achievements | Auto-sliding carousel of hackathon results (`carosal/`), with certificates and photos in `hackathon/` |
| Projects | Selected projects with short descriptions (no links yet) |
| Certifications & Courses | Coursera and Infosys Springboard certificates (`coursera/`, `springboard/` PDFs) |
| Contact | "Thank You" section with GitHub and LinkedIn links |

## <img src="https://api.iconify.design/lucide/network.svg?color=%23EC4899" width="26" align="top" alt=""/> How It Works

```mermaid
flowchart LR
    B[Browser] --> V[Vercel static hosting]
    V --> H[index.html + styles.css]
    H --> R[React 18 + Babel standalone<br/>from unpkg]
    R --> S[Sections and carousel<br/>rendered client-side]
    H --> A[Images and certificate PDFs<br/>served from the repo]

    classDef host fill:#000000,stroke:#EC4899,color:#fff
    classDef page fill:#EEEDFE,stroke:#7F77DD,color:#222
    class V host
    class B,H,R,S,A page
```

## <img src="https://api.iconify.design/lucide/zap.svg?color=%23EC4899" width="26" align="top" alt=""/> Run Locally

No install needed; serve the folder with any static server:

```bash
git clone https://github.com/mukesh-dev-git/portfolio-mukeshkumar.git
cd portfolio-mukeshkumar
npx serve .
```

To update the site, edit `index.html` / `styles.css`, add images or PDFs to the matching folder, and push; Vercel redeploys from `main`.

## <img src="https://api.iconify.design/lucide/folder-tree.svg?color=%23EC4899" width="26" align="top" alt=""/> Project Structure

```
portfolio-mukeshkumar/
├── index.html      # all sections as React components (type="text/babel")
├── styles.css
├── script.js       # placeholder, logic lives in index.html
├── myself.png
├── carosal/        # carousel images for the achievements slider
├── hackathon/      # hackathon certificates and photos
├── coursera/       # course certificates (PDF)
└── springboard/    # Infosys Springboard certificates (PDF)
```

## <img src="https://api.iconify.design/lucide/gauge.svg?color=%23EC4899" width="26" align="top" alt=""/> Status

Live and online. The content was last updated on 11 January 2026, so achievements and projects from later in 2026 are not on the page yet.

Notes for the next update:
- Babel compiles the JSX in the browser on every visit; a small Vite build would load faster
- Several images in `carosal/` are over 1 MB; compressing them (WebP) would speed up the first load
- The folder is spelled `carosal/`; renaming it means updating the paths in `index.html`

## <img src="https://api.iconify.design/lucide/scale.svg?color=%23EC4899" width="26" align="top" alt=""/> License

The code (`index.html`, `styles.css`, `script.js`) is MIT, see [LICENSE](LICENSE). My photos, certificates and personal content are not covered by that license; certificates belong to their issuers.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:EC4899,100:312E81&height=110&section=footer&animation=fadeIn" width="100%" alt=""/>

</div>
