"use client";

import { useState } from "react";
import Image from "next/image";
import FrozenKeyboard from "@/components/FrozenKeyboardLazy";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import CopyEmail from "@/components/CopyEmail";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";
import type { Lang } from "@/lib/i18n";

const GITHUB = "https://github.com/AliHaiderRoy";
const LINKEDIN = "https://www.linkedin.com/in/ali-haider-1496a4413/";
const EMAIL = "alihaider.devpro@gmail.com";
const CV_HREF = "/AliHaider_CV-cloud-use.pdf";
const PROFILE = "/ali.png";

// Localised content lives in `{ es, en }` objects inside these arrays so the
// page can be a straightforward array.map() at render time. Tech names stay
// as plain strings (they're brand names, not localised).
type Localised = { es: string; en: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4" | "project5";
};

const projects: Project[] = [
  {
    num: "01",
    name: {
      es: "FundFlow — Plataforma de crowdfunding descentralizado",
      en: "FundFlow — Decentralized Crowdfunding Platform",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Solidity",
      "Ethereum",
      "Hardhat",
      "Supabase",
    ],
    desc: {
      es: "Plataforma de crowdfunding full stack on-chain: campañas, fondeo, retiros y reembolsos con contratos Ethereum y MetaMask.",
      en: "A full-stack decentralized crowdfunding platform for campaigns, funding, withdrawals, and refunds with Ethereum contracts and MetaMask.",
    },
    details: {
      es: "Desarrollé FundFlow con Next.js, React, TypeScript, NestJS, PostgreSQL/Supabase, Solidity, Hardhat y Socket.IO. Integré contratos inteligentes y MetaMask para fondeo, retiros, reembolsos y transacciones on-chain. Gemini AI para generar campañas, analizarlas, detectar fraude y dar soporte. JWT, RBAC, actualizaciones en tiempo real, recompensas, dashboards y APIs REST, con frontend y backend separados.",
      en: "Built FundFlow with Next.js, React, TypeScript, NestJS, PostgreSQL/Supabase, Solidity, Hardhat, and Socket.IO. Integrated Ethereum smart contracts and MetaMask for campaign funding, withdrawals, refunds, and on-chain transactions. Google Gemini AI for campaign generation, analysis, fraud detection, recommendations, and support. JWT auth, RBAC, real-time updates, rewards, dashboards, and REST APIs across separate frontend and backend architectures.",
    },
    github: "https://github.com/AliHaiderRoy/funddefi",
    highlights: ["nextdotjs", "nestjs", "solidity", "ethereum"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      es: "HMS — Sistema de gestión de hostales",
      en: "HMS — Hostel Management System",
    },
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "MongoDB",
    ],
    desc: {
      es: "Sistema integral para operaciones de hostal: estudiantes, habitaciones, cuotas y flujos administrativos, con cuatro roles.",
      en: "A comprehensive hostel system for student records, room allocation, fees, and admin workflows, with four user roles.",
    },
    details: {
      es: "Web moderna y responsiva con Next.js, React, Tailwind CSS y shadcn/ui, backend NestJS y MongoDB. Dashboards y control de acceso para Super Admin, Admin, Warden y Student. Módulos de hostal, estudiantes, habitaciones, asistencia, cuotas y quejas. Autenticación, autorización, APIs REST y permisos por rol para proteger datos sensibles, con una arquitectura pensada para coordinar administradores, wardens y estudiantes.",
      en: "A modern, responsive web app with Next.js, React, Tailwind CSS, and shadcn/ui, and a scalable NestJS + MongoDB backend. Role-based dashboards and access control for Super Admin, Admin, Warden, and Student. Dedicated modules for hostel management, students, room allocation, attendance, fees, and complaints. Secure authentication, authorization, REST APIs, and role-based permissions to protect hostel and student data, with architecture for coordination between administrators, wardens, and students.",
    },
    highlights: ["nextdotjs", "react", "nestjs", "mongodb"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      es: "Adiba Accessories Hub",
      en: "Adiba Accessories Hub",
    },
    stack: ["Shopify", "Payments", "SEO"],
    desc: {
      es: "E-commerce en Shopify de accesorios para ordenador y móvil, con una interfaz moderna, pagos seguros y diseño mobile-first.",
      en: "A Shopify ecommerce platform for computer and mobile accessories with a modern interface, secure payments, and mobile-friendly design.",
    },
    details: {
      es: "Desarrollé la tienda en Shopify con pasarelas de pago seguras, herramientas de gestión de productos e integración de soporte al cliente. El diseño mobile-friendly y la optimización SEO aumentaron la visibilidad online.",
      en: "Developed a Shopify-based store with secure payment gateways, product management tools, and customer-support integration. Mobile-friendly design and SEO optimisation increased online visibility.",
    },
    highlights: ["javascript", "nodedotjs", "git", "docker"],
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: {
      es: "GB FoodHub — Pedidos y gestión de restaurantes",
      en: "GB FoodHub — Food Ordering & Restaurant Management Platform",
    },
    stack: [
      "Flutter",
      "Next.js",
      "React",
      "Supabase",
      "Riverpod",
      "Firebase",
    ],
    desc: {
      es: "Ecosistema de pedidos para Gilgit-Baltistan: app Flutter, dashboard Next.js y backend Supabase en producción.",
      en: "A production-ready food ordering ecosystem for Gilgit-Baltistan: Flutter customer app, Next.js dashboard, and Supabase backend.",
    },
    details: {
      es: "App de cliente con Flutter, Riverpod, GoRouter, Supabase, FCM y almacenamiento seguro de tokens: descubrimiento, menú, carrito, checkout, seguimiento, favoritos, reseñas y perfil. Dashboard Next.js 15 / React 19 para dueños, staff, admins y cajeros: menús, pedidos en vivo, analítica, ingresos, ajustes y POS. PostgreSQL con RLS, auth, storage, Realtime y Edge Functions. RBAC para clientes, dueños, staff, cajeros, admins y super admins. Pedidos en tiempo real desde la app y el POS. Pagos COD, tarjeta, Stripe, JazzCash y EasyPaisa, más notificaciones, reseñas e imágenes.",
      en: "Customer app with Flutter, Riverpod, GoRouter, Supabase, Firebase Cloud Messaging, and secure token storage — restaurant discovery, browsing, cart, checkout, order tracking, favorites, reviews, and profile. Next.js 15 / React 19 dashboard for owners, staff, admins, and cashiers: menus, live orders, analytics, revenue, settings, administration, and POS billing. Supabase PostgreSQL with RLS, authentication, storage, Realtime, and Edge Functions. RBAC for customers, restaurant owners, staff, cashiers, admins, and super admins. Real-time orders from the mobile app and POS. Payments: Cash on Delivery, card, Stripe, JazzCash, and EasyPaisa, plus notifications, reviews, image storage, and Edge Functions for payments, analytics, and email.",
    },
    github: "https://github.com/AliHaiderRoy/gb-food-hub",
    highlights: ["flutter", "nextdotjs", "react", "postgresql"],
    align: "right",
    section: "project4",
  },
  {
    num: "05",
    name: {
      es: "GBK Tour App",
      en: "GBK Tour App",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Maps",
    ],
    desc: {
      es: "Plataforma turística de Gilgit-Baltistan y Azad Kashmir: provincias, distritos, destinos y hoteles cercanos.",
      en: "A complete tourism platform showcasing provinces, districts, tourist spots, and nearby hotels across Gilgit-Baltistan and Azad Kashmir.",
    },
    details: {
      es: "Diseñé y desarrollé la plataforma de turismo de extremo a extremo. Integré diseño responsivo, mapas interactivos y una base de datos optimizada. Colaboré con el equipo de UI/UX para mejorar usabilidad y rendimiento, con una carga un 40 % más rápida.",
      en: "Designed and developed a complete tourism platform with responsive design, interactive maps, and optimised database structures. Collaborated with the UI/UX team to improve usability and app performance, resulting in a 40% faster loading experience.",
    },
    highlights: ["nextdotjs", "react", "tailwindcss", "postgresql"],
    align: "left",
    section: "project5",
  },
];

const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    company: "APPRIC (SMC-Private) Limited",
    period: { es: "Mar 2026 — Presente", en: "Mar 2026 — Present" },
    location: { es: "Gilgit, Pakistán", en: "Gilgit, Pakistan" },
    summary: {
      es: "Full Stack y Lead Developer en APPRIC Software House. Especializado en aplicaciones web, móviles y blockchain: Next.js, React, TypeScript, Node.js, NestJS, Flutter, PostgreSQL, MongoDB, Supabase, Ethereum y Solidity. APIs REST, sistemas por rol, tiempo real, e-commerce y dApps, con arquitectura, clientes y software listo para producción.",
      en: "Full Stack and Lead Developer at APPRIC Software House, specializing in modern web, mobile, and blockchain apps. Next.js, React, TypeScript, Node.js, NestJS, Flutter, PostgreSQL, MongoDB, and Supabase. Strong in REST APIs, role-based systems, real-time apps, eCommerce, and decentralized apps with Ethereum and Solidity. Team leadership, client communication, system architecture, and production-ready software.",
    },
    bullets: [
      {
        es: "Desarrollo y mantengo aplicaciones web, móviles y blockchain con tecnologías y frameworks actuales.",
        en: "Develop and maintain modern web, mobile, and blockchain applications using current technologies and frameworks.",
      },
      {
        es: "Llevo el desarrollo full stack: frontend, backend, bases de datos, APIs, autenticación y despliegue.",
        en: "Handle full-stack development, including frontend, backend, databases, APIs, authentication, and deployment.",
      },
      {
        es: "Colaboro con developers, diseñadores y clientes para entender requisitos y entregar soluciones escalables.",
        en: "Collaborate with developers, designers, and clients to understand requirements and deliver scalable digital solutions.",
      },
      {
        es: "Participo en planificación, desarrollo, testing, despliegue y mantenimiento continuo.",
        en: "Participate in project planning, development, testing, deployment, and ongoing maintenance.",
      },
      {
        es: "Aseguro que las aplicaciones sean seguras, responsivas, usables y optimizadas en rendimiento.",
        en: "Ensure applications are secure, responsive, user-friendly, and optimized for performance.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Flutter",
      "Solidity",
      "Ethereum",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
    ],
  },
];

const education: Array<{
  title: Localised;
  place: string;
  period: Localised;
  detail?: Localised;
}> = [
  {
    title: {
      es: "BSCS — Grado en Ciencias de la Computación",
      en: "BSCS — Bachelor of Science in Computer Science",
    },
    place: "KIU (Karakoram International University)",
    period: { es: "2022 — 2026", en: "2022 — 2026" },
    detail: { es: "CGPA: 3.00", en: "CGPA: 3.00" },
  },
  {
    title: { es: "Intermediate", en: "Intermediate" },
    place: "Al-Mustafa Public School and Degree College, Gilgit",
    period: { es: "2020 — 2022", en: "2020 — 2022" },
    detail: { es: "Nota: A", en: "Grade: A" },
  },
  {
    title: { es: "Matriculación", en: "Matriculation" },
    place: "Al-Mustafa Public School and Degree College, Gilgit",
    period: { es: "2018 — 2020", en: "2018 — 2020" },
    detail: { es: "Nota: B", en: "Grade: B" },
  },
];

const certifications: Localised[] = [
  {
    es: "Frontend Development — UConnect (2022). Interfaces responsivas y usables para servicios de cliente.",
    en: "Frontend Development — UConnect (2022). Developed responsive and user-friendly interfaces to support client services.",
  },
  {
    es: "Blockchain Technology — NUST University (2023). Conceptos de blockchain, sistemas descentralizados y Web3.",
    en: "Blockchain Technology — NUST University (2023). Blockchain concepts, decentralized systems, and emerging Web3 technologies.",
  },
  {
    es: "Backend Development — UFusion (2024). Sistemas backend para servicios de cliente y funcionalidad de aplicaciones.",
    en: "Backend Development — UFusion (2024). Developed and managed backend systems to support client services and application functionality.",
  },
];

const languages: Localised[] = [
  { es: "Inglés · conversacional", en: "English · conversational" },
  { es: "Urdu · fluido", en: "Urdu · fluent" },
  { es: "Shina · nativo", en: "Shina · native" },
];

const interests: Localised[] = [
  {
    es: "Viajar y conocer culturas",
    en: "Traveling and exploring new cultures",
  },
  {
    es: "Tecnología e innovación",
    en: "Technology and software innovation",
  },
  {
    es: "Negocio y emprendimiento",
    en: "Business development and entrepreneurship",
  },
  { es: "Crecimiento personal", en: "Personal growth" },
  {
    es: "Atletismo (disco y jabalina)",
    en: "Athletics (discus throw, javelin throw)",
  },
];

function pick<T>(loc: { es: T; en: T }, lang: Lang): T {
  return loc[lang];
}

// Hero name split per word so each can rise independently. Whitespace
// preserved as its own span so the line wraps naturally if needed.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead (see below) so it scrolls
            away and the rest of the page is clean, fast 2D. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <Image
              src={PROFILE}
              alt="Ali Haider"
              width={40}
              height={40}
              className="rounded-full object-cover object-top ring-1 ring-ice-400/50"
              priority
            />
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              Ali Haider
            </span>
            {/* Wrapper (not the pill itself) carries the hide: .status-pill
                hard-sets display:inline-flex, which beats Tailwind's .hidden
                due to CSS source order, so hiding must happen on a parent. */}
            <span className="hidden md:inline-flex">
              <span className="status-pill">{t("header.availability")}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="frost-btn !py-1.5 !px-3 !text-xs"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
            </span>
            <LanguagePicker />
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {/* Mobile-only 3D centerpiece. Lives inside the hero (scrolls away
                with it) and takes pointer events so keycaps are tappable.
                FrozenKeyboard renders nothing (and no empty gap) when WebGL2
                isn't available. */}
            {isMobile && <FrozenKeyboard mobile />}
            <div className="mt-2 md:mt-20">
              <div
                className="mb-6 fade-in-up pointer-events-auto"
                style={{ ["--d" as string]: "0ms" }}
              >
                <Image
                  src={PROFILE}
                  alt="Ali Haider, Full Stack and Blockchain Developer"
                  width={160}
                  height={160}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover object-top ring-2 ring-ice-100/40 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.65)]"
                  priority
                />
              </div>
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "80ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92]">
                <HeroWord text="Ali" delay={120} />
                <br />
                <HeroWord text="Haider" delay={260} className="text-ice-400" />
              </h1>
              <p
                className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                style={{ ["--d" as string]: "520ms" }}
              >
                {t("hero.roleLine")}
                <br />
                {t("hero.tagline")}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href={CV_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn frost-btn--primary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  {t("hero.cv")}
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>(
                        '[data-kb-section="contact"]'
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {t("hero.hire")}
                </button>
                <div className="basis-full h-0 md:hidden" aria-hidden />
                <CopyEmail email={EMAIL} className="frost-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M4 6h16v12H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </CopyEmail>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* Stack — desktop relies on the 200vh scroll + sticky title while
              the keyboard does the talking on hover. On mobile (md:) that
              choreography is gone, so we drop the tall scroll and render a
              real, legible skills grid with the same taglines. */}
          <section
            data-kb-section="stack"
            className="relative md:min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[150vh]">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">{t("stack.hint")}</span>
                    <span className="md:hidden">{t("stack.hintMobile")}</span>
                  </p>
                </Reveal>
              </div>

              {/* Mobile skills grid (recovers the hover interaction as static
                  content the keyboard can't surface on touch). */}
              {isMobile && (
                <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {t(`keyboard.taglines.${s.slug}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Experience — title is sticky at top-24 (feels anchored) but sits
              BEHIND the cards (z-0 vs. card wrapper's z-10), so as you scroll
              the card slides over the title. The section has no extra filler
              beyond the cards, so when you scroll past the last card the
              section ends and the title un-pins and exits the viewport at the
              same time — giving the "anchored then both disappear" feel. */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Education */}
          <section
            data-kb-section="education"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("education.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("education.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {education.map((ed, idx) => (
                <Reveal
                  key={`${ed.place}-${ed.period.en}`}
                  delay={idx * 80}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ice-50 tracking-tight">
                        {pick(ed.title, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">{ed.place}</p>
                      {ed.detail ? (
                        <p className="text-ice-300 text-sm mt-1">
                          {pick(ed.detail, lang)}
                        </p>
                      ) : null}
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(ed.period, lang)}
                    </span>
                  </header>
                </Reveal>
              ))}

              <Reveal
                delay={280}
                as="article"
                className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-ice-50 tracking-tight mb-4">
                  {t("education.certsTitle")}
                </h3>
                <ul className="space-y-2.5">
                  {certifications.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-ice-100 leading-relaxed"
                    >
                      <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                      <span>{pick(c, lang)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={360}
                as="article"
                className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-ice-50 tracking-tight mb-4">
                  {t("education.langsTitle")}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((l, i) => (
                    <span key={i} data-cursor="hover" className="frost-chip">
                      {pick(l, lang)}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal
                delay={420}
                as="article"
                className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-ice-50 tracking-tight mb-4">
                  {t("education.interestsTitle")}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {interests.map((item, i) => (
                    <span key={i} data-cursor="hover" className="frost-chip">
                      {pick(item, lang)}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : // Right-aligned cards get extra right padding on md+ so
                      // the action buttons ("Ver más") don't sit under the
                      // fixed SectionNav dots on the right edge. On mobile they
                      // collapse to a normal left-aligned full-width card.
                      "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Contact — copy pinned to the left so the (large, hero-posed)
              keyboard on the right has room to bob its random keys. */}
          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  {t("contact.kicker")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <a
                    href={CV_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                      <path d="M14 3v5h5" />
                    </svg>
                    {t("hero.cv")}
                  </a>
                  <CopyEmail email={EMAIL} className="frost-btn">
                    {t("contact.copyEmail")}
                  </CopyEmail>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.github")}
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.linkedin")}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
