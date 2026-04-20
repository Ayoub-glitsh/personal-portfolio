# 🚀 Personal Portfolio — Ayoub Aguezzar

> A modern, responsive personal portfolio built with **Next.js 15**, showcasing projects, technical skills, blog articles, and professional background.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Sections](#sections)
- [Projects Showcased](#projects-showcased)
- [Blog Articles](#blog-articles)
- [Gallery](#gallery)
- [Deployment](#deployment)
- [Author](#author)

---

## <a id="overview"></a>🌟 Overview

This is my personal developer portfolio — a clean, minimalist, and highly interactive website that presents my work, skills, and passions as a **Software Engineering & Data Engineering** student.

It features smooth scroll animations, light/dark mode support, interactive accordion sections, hover micro-animations, and a fully responsive layout optimized for all screen sizes.

---

## <a id="features"></a>✨ Features

| Feature | Details |
|---------|---------|
| 🎨 **Modern UI/UX** | Clean design with smooth animations via Framer Motion |
| 🌙 **Dark / Light Mode** | Theme toggle with persistent preferences |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile |
| ⚡ **Fast Performance** | Built with Next.js 15 + Turbopack |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, and structured data |
| 🖱️ **Smooth Scrolling** | Custom scroll via Lenis |
| 🧩 **Micro-Interactions** | Hover effects, card rotations, accordion toggles |
| 📊 **Analytics** | Vercel Analytics + Speed Insights integrated |

---

## <a id="tech-stack"></a>🛠️ Tech Stack

### Frontend

| Technology | Version | Role |
|-----------|---------|------|
| [Next.js](https://nextjs.org/) | 15.5.9 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animation library |
| [Lenis](https://lenis.darkroom.engineering/) | 1.3 | Smooth scroll library |
| [Phosphor Icons](https://phosphoricons.com/) | 2 | Icon library |

### Tooling & Deployment

| Tool | Purpose |
|------|---------|
| [Vercel](https://vercel.com/) | Hosting & CI/CD |
| [Vercel Analytics](https://vercel.com/analytics) | Traffic insights |
| [ESLint](https://eslint.org/) | Code linting |
| [Prettier](https://prettier.io/) | Code formatting |
| [Turbopack](https://turbo.build/pack) | Fast bundler for development |

---

## <a id="project-structure"></a>📁 Project Structure

```
personal-portfolio/
├── public/
│   ├── projects/              # Project & blog preview images
│   │   ├── restaurant.png
│   │   ├── weather-map.png
│   │   ├── devops.png (URL)
│   │   ├── metadata_api.png
│   │   ├── gemini-cli.png
│   │   ├── mongodb-backup.png
│   │   ├── microsoft-office.png
│   │   └── mongodb-tips.png
│   └── signature.svg
│
├── src/
│   └── app/
│       ├── components/
│       │   ├── Items/
│       │   │   ├── Cards/
│       │   │   │   ├── ProjectCard.tsx    # Project card component
│       │   │   │   └── BlogCard.tsx       # Blog card component
│       │   │   ├── Nav/
│       │   │   │   └── Links.tsx          # Social links
│       │   │   ├── Name.tsx
│       │   │   ├── Title.tsx
│       │   │   └── SubTitle.tsx
│       │   └── origin/
│       │       ├── AboutMe.tsx            # About Me section
│       │       ├── LatestProjects.tsx     # Projects section
│       │       ├── InkSpace.tsx           # Blog section
│       │       ├── MyDevSpace.tsx         # Skills section
│       │       ├── NuggetsOfKnowHow.tsx   # Accordion tips section
│       │       ├── Main.tsx               # Hero section
│       │       └── Footer.tsx
│       │
│       ├── info/
│       │   ├── Blogs.tsx                  # Blog posts data
│       │   ├── Buttons.tsx                # Nav buttons data
│       │   ├── Descriptions.tsx           # Project descriptions & images
│       │   ├── Nuggets.tsx                # Nuggets of know-how data
│       │   ├── Projects.tsx               # Projects list data
│       │   └── Tech.tsx                   # Tech stack data
│       │
│       ├── globals.css                    # Global styles
│       ├── layout.tsx                     # Root layout + metadata
│       └── page.tsx                       # Home page
│
├── next.config.ts                         # Next.js configuration
├── tailwind.config.ts                     # Tailwind configuration
├── tsconfig.json
├── package.json
└── vercel.json
```

---

## <a id="getting-started"></a>🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ayoub-glitsh/personal-portfolio.git
cd personal-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) 🎉

---

## <a id="available-scripts"></a>📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

---

## <a id="sections"></a>📄 Sections

The portfolio is organized into the following sections:

| Section | Description |
|---------|-------------|
| **Hero** | Introduction, name, and navigation |
| **About Me** | Background, education, and professional summary |
| **My DevSpace** | Interactive tech stack grid |
| **Latest Projects** | Highlighted projects with images and links |
| **InkSpace** | Blog articles published on Medium |
| **Nuggets of Know-How** | Interactive accordion with dev tips |
| **Footer** | Social links and contact info |

---

## <a id="projects-showcased"></a>💼 Projects Showcased

| Project | Description | Link |
|---------|-------------|------|
| **Restaurant** | Moroccan restaurant showcase with Vanilla JS & CSS | [GitHub](https://github.com/Ayoub-glitsh/Restaurant) |
| **Morocco Weather Map** | Real-time weather map of Morocco with Next.js 14 | [GitHub](https://github.com/Ayoub-glitsh/morocco-weather-map) |
| **DevOps CI/CD Automation** | GitHub & GitLab pipeline synchronization via YAML | [GitHub](https://github.com/Ayoub-glitsh/DevOps-Github-Gitlab-CI-CD-Automation-Yml) |
| **Website Metadata API REST** | RESTful API to extract metadata from any public URL | [GitHub](https://github.com/Ayoub-glitsh/Website-Metadata-API-REST) |

---

## <a id="gallery"></a>🖼️ Gallery

<h2 align="center">📸 Galerie</h2>
<p align="center">Captures d'écran de l'application</p>

<table>
  <tr>
    <td align="center" width="50%">
      <img src="https://res.cloudinary.com/dqgsl5uu4/image/upload/f_auto,q_auto/im_01_kui8zv" alt="Hero Section" width="100%" />
      <br />
      <strong>Page d'accueil</strong>
      <br />
      <em>Interface de bienvenue avec navigation principale</em>
    </td>
    <td align="center" width="50%">
      <img src="" alt="About Me Section" width="100%" />
      <br />
      <strong>À propos de moi</strong>
      <br />
      <em>Parcours académique et résumé professionnel détaillé</em>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="" alt="Tech Stack Section" width="100%" />
      <br />
      <strong>Stack Technique</strong>
      <br />
      <em>Grille interactive des technologies et outils maîtrisés</em>
    </td>
    <td align="center" width="50%">
      <img src="" alt="Projects Section" width="100%" />
      <br />
      <strong>Derniers Projets</strong>
      <br />
      <em>Galerie de projets avec liens directs vers GitHub</em>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="" alt="Blog Section" width="100%" />
      <br />
      <strong>Espace InkSpace</strong>
      <br />
      <em>Articles techniques publiés sur ma plateforme Medium</em>
    </td>
    <td align="center" width="50%">
      <img src="" alt="Nuggets of Know-How" width="100%" />
      <br />
      <strong>Pépites de Savoir</strong>
      <br />
      <em>Accordéon interactif partageant des astuces de développement</em>
    </td>
  </tr>
</table>

---

## <a id="blog-articles"></a>📝 Blog Articles

Published on [Medium](https://medium.com/me/stories?tab=posts-published):

| Article | Link |
|---------|------|
| **Introducing Gemini CLI** | [Read on Medium](https://medium.com/@ayoub.aguezar.dev/introducing-gemini-cli-the-ai-powered-terminal-assistant-0e6656ace652) |
| **MongoDB Administration** | [Read on Medium](https://medium.com/@ayoub.aguezar.dev/sauvegarde-et-restauration-dune-base-mongodb-guide-pratique-78ed01df6b7d) |
| **Microsoft Office with PowerShell** | [Read on Medium](https://medium.com/@ayoub.aguezar.dev/installer-microsoft-office-facilement-avec-powershell-la-m%C3%A9thode-simple-et-efficace-3baa6af49c3c) |
| **MongoDB Tips** | [Read on Medium](https://medium.com/@ayoub.aguezar.dev/comment-jautomatise-la-suppression-de-toutes-mes-bases-utilisateur-mongodb-en-toute-s%C3%A9curit%C3%A9-f1149ccd6676) |

---

## <a id="deployment"></a>🌐 Deployment

This project is deployed on **Vercel** using the Next.js framework preset.

```
Framework:        Next.js
Build Command:    npm run build
Output Directory: .next (auto-detected)
Node.js Version:  18.x
```

To deploy your own version:

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Select **Next.js** as the framework preset
4. Click **Deploy** ✅

---

## <a id="author"></a>👨‍💻 Author

**Ayoub Aguezzar**
Software Engineering & Data Engineering Student

[![GitHub](https://img.shields.io/badge/GitHub-Ayoub--glitsh-black?logo=github)](https://github.com/Ayoub-glitsh)
[![Medium](https://img.shields.io/badge/Medium-@ayoub.aguezar.dev-black?logo=medium)](https://medium.com/@ayoub.aguezar.dev)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and adapt it for your own portfolio.

---

<p align="center">Built with ❤️ by <strong>Ayoub Aguezzar</strong></p>
