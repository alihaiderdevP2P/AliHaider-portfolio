# 🚀 3D Developer Portfolio

<div align="center">

### An immersive 3D developer portfolio built for the modern web.

**Next.js 16 · React Three Fiber · Three.js · Tailwind CSS v4 · TypeScript**

<br />

[🌐 **Live Portfolio**](https://ali-haider-portfolio-dev-mu.vercel.app/)
[💼 **LinkedIn**](https://www.linkedin.com/in/ali-haider-1496a4413/) · [🐙 **GitHub**](https://github.com/AliHaiderRoy/)

</div>

---

## ✨ Overview

A modern, immersive, and interactive developer portfolio featuring a **3D mechanical keyboard hero scene**, seasonal visual themes, smooth scrolling, bilingual support, interactive project showcases, and a fully responsive experience.

The portfolio is designed to showcase projects and technical skills through an engaging **3D-first user experience** while maintaining performance across desktop, tablet, and mobile devices.

---

## 🌟 Highlights

| Feature                        | Description                                                                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⌨️ **Interactive 3D Keyboard** | A full mechanical keyboard rendered with React Three Fiber and Three.js. Keys respond to real keyboard input with physics-based animations and sound effects. |
| 🍂 **Seasonal Themes**         | Four complete visual themes — Winter, Spring, Summer, and Autumn — dynamically change colors, gradients, UI elements, and 3D scene lighting.                  |
| 🚀 **Project Showcases**       | Interactive project cards with detailed modal dialogs, image carousels, technology badges, live demos, and source-code links.                                 |
| 🌍 **Bilingual Support**       | Lightweight custom ES/EN internationalisation system with no external dependencies.                                                                           |
| 🌀 **Smooth Scrolling**        | Smooth scrolling powered by Lenis with intersection-observer-based reveal animations.                                                                         |
| 🖱️ **Custom Cursor**          | Custom cursor interactions with hover states and magnetic effects on interactive elements.                                                                    |
| 🧲 **Magnetic Targets**        | Buttons and interactive elements feature magnetic snap interactions for a more engaging experience.                                                           |
| 📱 **Responsive Design**       | Mobile-first design optimised for recruiters and visitors browsing on phones and tablets.                                                                     |
| 🔒 **Security Headers**        | HSTS, X-Frame-Options, Content-Type-Options, Referrer-Policy, and Permissions-Policy configured out of the box.                                               |
| ⚡ **Performance Focused**      | Lazy loading, optimised fonts, standalone production builds, and WebGL performance considerations.                                                            |

---

## 🛠️ Tech Stack

| Layer                   | Technology                                                  |
| ----------------------- | ----------------------------------------------------------- |
| **Framework**           | [Next.js 16](https://nextjs.org/)                           |
| **3D Engine**           | [Three.js](https://threejs.org/)                            |
| **3D React**            | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) |
| **3D Utilities**        | [@react-three/drei](https://github.com/pmndrs/drei)         |
| **Styling**             | [Tailwind CSS v4](https://tailwindcss.com/)                 |
| **Animations / Scroll** | [Lenis](https://github.com/darkroomengineering/lenis)       |
| **Icons**               | [Simple Icons](https://simpleicons.org/)                    |
| **Language**            | TypeScript                                                  |
| **Rendering**           | WebGL                                                       |
| **Deployment**          | Vercel / Docker                                             |
| **Package Manager**     | npm                                                         |

---

## 🎨 Interactive Experience

The portfolio focuses on creating an experience rather than simply presenting information.

### ⌨️ 3D Keyboard

The hero section contains a fully interactive mechanical keyboard built with:

* React Three Fiber
* Three.js
* Physics-based key animations
* Keyboard input detection
* Sound effects
* Technology logos displayed on keycaps

Pressing keys on the keyboard triggers interactive animations to make the hero section feel alive.

### 🌈 Seasonal Themes

The interface supports four different seasonal themes:

* ❄️ Winter
* 🌸 Spring
* ☀️ Summer
* 🍁 Autumn

Each theme changes the overall visual language of the portfolio, including:

* Colors
* Gradients
* Backgrounds
* UI elements
* 3D lighting
* Visual effects

---

## 📸 Project Showcase

Projects are presented through interactive cards.

Each project can contain:

* Project title
* Short description
* Detailed description
* Technology stack
* Project screenshots
* Live website
* GitHub repository
* Status badge
* Technology highlights
* Image carousel

This makes it easy for recruiters and visitors to quickly explore individual projects.

---

## 🌍 Bilingual Support

The portfolio includes a lightweight custom internationalisation system supporting:

🇪🇸 **Spanish**

🇬🇧 **English**

No external i18n dependency is required.

Translations are maintained inside:

```text
lib/i18n.ts
```

---

## 📁 Project Structure

```text
3d-portfolio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── FrozenKeyboard.tsx
│   ├── FrozenBackground.tsx
│   ├── Carousel.tsx
│   ├── ProjectModal.tsx
│   ├── SeasonProvider.tsx
│   ├── SeasonPicker.tsx
│   ├── LanguageProvider.tsx
│   ├── LanguagePicker.tsx
│   ├── CustomCursor.tsx
│   ├── MagneticTargets.tsx
│   ├── Reveal.tsx
│   ├── SectionNav.tsx
│   ├── ScrollProgress.tsx
│   ├── CopyEmail.tsx
│   └── smooth-scroll.tsx
│
├── lib/
│   ├── i18n.ts
│   └── seasons.ts
│
├── public/
│   ├── fonts/
│   ├── projects/
│   └── sounds/
│
├── Dockerfile
├── next.config.ts
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* **Node.js 20+**
* **npm 10+**

### 1. Clone the Repository

```bash
git clone https://github.com/AliHaiderRoy/3d-portfolio.git
```

### 2. Navigate to the Project

```bash
cd 3d-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

Create an optimised production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🐳 Docker

The project includes a multi-stage Dockerfile optimised for production.

### Build Docker Image

```bash
docker build -t 3d-portfolio .
```

### Run Container

```bash
docker run -p 3000:3000 3d-portfolio
```

The application will then be available at:

```text
http://localhost:3000
```

---

## ➕ Adding a New Project

Projects are defined inside:

```text
app/page.tsx
```

Example:

```typescript
{
  num: "05",

  name: {
    es: "Mi Proyecto",
    en: "My Project"
  },

  stack: [
    "Next.js",
    "TypeScript"
  ],

  desc: {
    es: "Descripción corta",
    en: "Short description"
  },

  details: {
    es: "Descripción larga del proyecto...",
    en: "Long project description..."
  },

  url: "https://myproject.com",

  github: "https://github.com/AliHaiderRoy/repository",

  media: [
    "/projects/my-project/1.png"
  ],

  highlights: [
    "nextdotjs",
    "typescript"
  ],

  badge: {
    es: "En desarrollo",
    en: "In progress"
  },

  align: "left",

  section: "project5"
}
```

---

## 🎨 Customising Themes

Seasonal theme variables are defined in:

```text
app/globals.css
```

Themes use CSS custom properties with selectors such as:

```css
[data-season="winter"]
[data-season="spring"]
[data-season="summer"]
[data-season="autumn"]
```

You can modify existing themes or create completely new ones.

---

## 🌐 Adding Translations

Translations are stored in:

```text
lib/i18n.ts
```

The project uses a simple structure:

```typescript
{
  es: "Texto en español",
  en: "English text"
}
```

You can extend the dictionary with additional UI strings or languages.

---

## ☁️ Deployment

### ▲ Vercel

The recommended deployment platform is Vercel.

**[🚀 Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/AliHaiderRoy/3d-portfolio)**

### 🐳 Docker / Self-Hosted

The included Dockerfile can be deployed to platforms such as:

* Railway
* Fly.io
* Coolify
* VPS
* AWS
* DigitalOcean
* Other Docker-compatible platforms

---

## ⚡ Performance

Performance is an important part of the project.

### Optimisations Include

* ⚡ Next.js standalone output
* 📦 Optimised production dependencies
* 🖼️ Lazy-loaded project screenshots
* 🔤 `next/font` font optimisation
* 🚀 Turbopack development workflow
* 📱 Responsive WebGL rendering
* 🎮 Touch-friendly interactions
* 🐳 Multi-stage Docker builds
* 🧹 Minimal production image

---

## 🔐 Security

The application includes several security-related HTTP headers:

* `Strict-Transport-Security`
* `X-Frame-Options`
* `X-Content-Type-Options`
* `Referrer-Policy`
* `Permissions-Policy`

These are configured through:

```text
next.config.ts
```

---

## 📄 License

This project is open source and available under the **MIT License**.

---

# 👨‍💻 About Me

## Ali Haider

**Full-Stack / Frontend Developer**

I build modern, interactive, and performance-focused web experiences using technologies such as **React, Next.js, TypeScript, Three.js, and Tailwind CSS**.

I'm interested in building products that combine strong engineering with creative user experiences.

### 🌐 Portfolio

**[ali-haider-portfolio-dev-mu.vercel.app](https://ali-haider-portfolio-dev-mu.vercel.app/)**

### 💼 LinkedIn

**[linkedin.com/in/ali-haider-1496a4413](https://www.linkedin.com/in/ali-haider-1496a4413/)**

### 🐙 GitHub

**[github.com/AliHaiderRoy](https://github.com/AliHaiderRoy/)**

---

## 🤝 Connect With Me

Interested in collaborating, discussing a project, or connecting?

Feel free to reach out:

**🌐 Portfolio**
[Visit my portfolio →](https://ali-haider-portfolio-dev-mu.vercel.app/)

**💼 LinkedIn**
[Connect with me →](https://www.linkedin.com/in/ali-haider-1496a4413/)

**🐙 GitHub**
[View my repositories →](https://github.com/AliHaiderRoy/)

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

**Built with ❤️ by Ali Haider**

[🌐 Portfolio](https://ali-haider-portfolio-dev-mu.vercel.app/) · [💼 LinkedIn](https://www.linkedin.com/in/ali-haider-1496a4413/) · [🐙 GitHub](https://github.com/AliHaiderRoy/)

</div>
