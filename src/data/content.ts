export type Lang = "en" | "pt"

type Text = Record<Lang, string>

export interface Links {
  appStore?: string
  playStore?: string
  web?: string
  github?: string
}

export interface Project {
  id: string
  name: string
  kind: Text
  tagline: Text
  description: Text
  role: Text
  stack: string[]
  links: Links
  shots: number
  badge?: Text
}

export const profile = {
  name: "Rodrigo Vieira",
  email: "rodriigovieira@gmail.com",
  linkedin: "https://www.linkedin.com/in/rodriigovieira/",
  github: "https://github.com/rodriigovieira",
}

export const products: Project[] = [
  {
    id: "pandapdv",
    name: "PandaPDV",
    kind: { en: "Restaurant POS · iOS, Android, Web", pt: "PDV para restaurantes · iOS, Android, Web" },
    tagline: {
      en: "A complete point-of-sale and operations system for restaurants.",
      pt: "Sistema completo de PDV e gestão para restaurantes.",
    },
    description: {
      en: "Tables, orders, kitchen tickets, delivery and WhatsApp ordering in one product — and it keeps working when the internet drops. Designed, built and operated end to end: mobile apps, web admin, backend, printing service and landing page.",
      pt: "Mesas, comandas, cozinha, delivery e pedidos pelo WhatsApp em um só produto — e continua funcionando quando a internet cai. Projetado, construído e operado de ponta a ponta: apps, painel web, backend, serviço de impressão e site.",
    },
    role: { en: "Founder & sole engineer", pt: "Fundador e único engenheiro" },
    stack: ["React Native", "Flutter", "React", "Convex", "Node.js", "Electron"],
    links: {
      web: "https://www.pandapdv.com.br",
      appStore: "https://apps.apple.com/br/app/pandapdv-gest%C3%A3o-completa/id6758158610",
      playStore: "https://play.google.com/store/apps/details?id=com.br.pandapdv",
    },
    shots: 3,
  },
  {
    id: "kipizza",
    name: "KiPizza Aracaju",
    kind: { en: "Food ordering · iOS, Android", pt: "Delivery · iOS, Android" },
    tagline: {
      en: "Online ordering app for a pizzeria in Aracaju.",
      pt: "App de pedidos online para uma pizzaria em Aracaju.",
    },
    description: {
      en: "Full menu with 30+ flavours, half-and-half pizzas, cart, delivery and order tracking — backed by the same platform that became PandaPDV. Rated 5★ on the App Store.",
      pt: "Cardápio completo com mais de 30 sabores, pizzas meio a meio, carrinho, delivery e acompanhamento do pedido — sobre a mesma plataforma que virou o PandaPDV. Nota 5★ na App Store.",
    },
    role: { en: "Designed, built & published", pt: "Projetado, construído e publicado" },
    stack: ["React Native", "Firebase", "Node.js"],
    links: {
      appStore: "https://apps.apple.com/br/app/kipizza-aracaju/id6449227757",
      playStore: "https://play.google.com/store/apps/details?id=com.kipizza",
    },
    shots: 3,
  },
]

export const clients: Project[] = [
  {
    id: "qeepsake",
    name: "Qeepsake",
    kind: { en: "Family journal · iOS, Android, Web", pt: "Diário da família · iOS, Android, Web" },
    tagline: {
      en: "The family photo journal seen on Shark Tank.",
      pt: "O diário de fotos da família que apareceu no Shark Tank.",
    },
    description: {
      en: "Owned the React Native app and the Next.js web project. Rebuilt the mobile release pipeline on EAS, and worked directly with the CEO, product and marketing to plan and ship.",
      pt: "Responsável pelo app React Native e pelo projeto web em Next.js. Reconstruí o pipeline de publicação mobile com EAS e trabalhei direto com CEO, produto e marketing.",
    },
    role: { en: "Senior Software Engineer · 2023–2024", pt: "Engenheiro de Software Sênior · 2023–2024" },
    stack: ["React Native", "Expo / EAS", "Next.js", "TypeScript"],
    links: {
      appStore: "https://apps.apple.com/us/app/qeepsake-family-photo-album/id1332312787",
      web: "https://www.qeepsake.com",
    },
    shots: 3,
    badge: { en: "4.9★ · 14k+ ratings", pt: "4,9★ · 14 mil+ avaliações" },
  },
  {
    id: "avodahmed",
    name: "AvodahMed",
    kind: { en: "Healthcare AI · iOS, Android, Web", pt: "IA para saúde · iOS, Android, Web" },
    tagline: {
      en: "AI ambient scribe that writes clinical notes for doctors.",
      pt: "Escriba com IA que gera as notas clínicas para médicos.",
    },
    description: {
      en: "Maintained and extended the React Native app and contributed to the Next.js products, with tRPC and Drizzle on the backend and automated releases with fastlane.",
      pt: "Mantive e evoluí o app React Native e contribuí nos produtos Next.js, com tRPC e Drizzle no backend e publicação automatizada com fastlane.",
    },
    role: { en: "Senior Software Engineer · 2025–2026", pt: "Engenheiro de Software Sênior · 2025–2026" },
    stack: ["React Native", "Next.js", "tRPC", "Drizzle", "fastlane"],
    links: {
      appStore: "https://apps.apple.com/us/app/avodahmed/id6740938902",
      playStore: "https://play.google.com/store/apps/details?id=com.avodahmed.nsight.app",
      web: "https://avodahmed.com",
    },
    shots: 3,
  },
  {
    id: "tvl",
    name: "The Voice Library",
    kind: { en: "Digital storytelling · iOS, Web", pt: "Histórias digitais · iOS, Web" },
    tagline: {
      en: "Record and share life stories, privately and securely.",
      pt: "Grave e compartilhe histórias de vida com privacidade e segurança.",
    },
    description: {
      en: "Built new features for the React Native app and a Next.js admin dashboard so the team could manage content and users.",
      pt: "Desenvolvi novas funcionalidades no app React Native e um painel administrativo em Next.js para a equipe gerenciar conteúdo e usuários.",
    },
    role: { en: "Senior Software Engineer · 2024–2025", pt: "Engenheiro de Software Sênior · 2024–2025" },
    stack: ["React Native", "Next.js", "TypeScript"],
    links: {
      appStore: "https://apps.apple.com/us/app/tvl/id945256287",
      web: "https://thevoicelibrary.com",
    },
    shots: 3,
  },
  {
    id: "rewardmenow",
    name: "Reward Me Now",
    kind: { en: "Employee benefits · iOS, Android", pt: "Benefícios corporativos · iOS, Android" },
    tagline: {
      en: "Employee rewards and discounts at 130+ UK brands.",
      pt: "Recompensas e descontos para colaboradores em mais de 130 marcas do Reino Unido.",
    },
    description: {
      en: "Mobile development for a UK rewards and recognition platform used by hundreds of companies.",
      pt: "Desenvolvimento mobile para uma plataforma de recompensas e reconhecimento usada por centenas de empresas no Reino Unido.",
    },
    role: { en: "Mobile developer", pt: "Desenvolvedor mobile" },
    stack: ["React Native"],
    links: {
      appStore: "https://apps.apple.com/gb/app/reward-me-now/id1289615311",
      playStore: "https://play.google.com/store/apps/details?id=com.redu.Ashleigh",
    },
    shots: 3,
  },
]

export interface Tool {
  name: string
  description: Text
  link: string
  linkLabel: Text
}

export const tools: Tool[] = [
  {
    name: "Panda Code",
    description: {
      en: "Open-source macOS app for running many Claude Code and Codex agent sessions side by side, with a self-hosted iPhone companion to follow them on the go.",
      pt: "App open source para macOS que roda várias sessões de agentes Claude Code e Codex lado a lado, com um app de iPhone self-hosted para acompanhar de qualquer lugar.",
    },
    link: "https://github.com/rodriigovieira/panda-code",
    linkLabel: { en: "Source on GitHub", pt: "Código no GitHub" },
  },
  {
    name: "MedSlides",
    description: {
      en: "AI-generated slide decks for doctors. Runs entirely in the browser and exports to PowerPoint.",
      pt: "Apresentações de slides para médicos geradas por IA. Roda no navegador e exporta para PowerPoint.",
    },
    link: "https://medslides.vercel.app",
    linkLabel: { en: "Try it", pt: "Experimentar" },
  },
]

export interface Job {
  company: string
  title: Text
  period: string
  summary: Text
}

export const experience: Job[] = [
  {
    company: "AvodahMed",
    title: { en: "Senior Software Engineer", pt: "Engenheiro de Software Sênior" },
    period: "2025 – 2026",
    summary: {
      en: "React Native app and Next.js products for an AI clinical documentation startup.",
      pt: "App React Native e produtos Next.js para uma startup de documentação clínica com IA.",
    },
  },
  {
    company: "The Voice Library",
    title: { en: "Senior Software Engineer (part-time)", pt: "Engenheiro de Software Sênior (meio período)" },
    period: "2024 – 2025",
    summary: {
      en: "New features for the React Native app and a Next.js admin dashboard.",
      pt: "Novas funcionalidades no app React Native e painel administrativo em Next.js.",
    },
  },
  {
    company: "Qeepsake",
    title: { en: "Senior Software Engineer", pt: "Engenheiro de Software Sênior" },
    period: "2023 – 2024",
    summary: {
      en: "Owned web (Next.js) and mobile (React Native). Rebuilt CI/CD and releases on EAS.",
      pt: "Responsável pelo web (Next.js) e mobile (React Native). Reconstruí CI/CD e publicação com EAS.",
    },
  },
  {
    company: "Foxbox",
    title: { en: "Software Engineer", pt: "Engenheiro de Software" },
    period: "2021 – 2022",
    summary: {
      en: "React Native on a 100K+ user app with a small product team, and on a 5M+ user app with 300+ engineers.",
      pt: "React Native em um app com mais de 100 mil usuários e em outro com mais de 5 milhões de usuários e 300+ engenheiros.",
    },
  },
  {
    company: "Integrafácil",
    title: { en: "Full-stack Software Engineer", pt: "Engenheiro de Software Full-stack" },
    period: "2019 – 2021",
    summary: {
      en: "Gym app for booking classes and workouts (React Native) and an access-control system running in 300+ gyms across several countries (React, Node).",
      pt: "App de academia para agendar aulas e ver treinos (React Native) e um sistema de controle de acesso em mais de 300 academias em vários países (React, Node).",
    },
  },
]

export const stack = [
  "React Native",
  "Expo / EAS",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "tRPC",
  "Drizzle",
  "Convex",
  "Firebase",
  "Electron",
  "fastlane",
  "App Store & Play releases",
]

export const copy = {
  en: {
    htmlLang: "en",
    title: "Rodrigo Vieira — Senior Mobile & Full-stack Engineer",
    description:
      "Senior software engineer building React Native and Next.js apps that ship to the App Store and Google Play. Available for freelance and contract work.",
    nav: { work: "Work", experience: "Experience", contact: "Contact" },
    switchLabel: "Português",
    switchHref: "/pt/",
    role: "Senior Software Engineer",
    location: "Florianópolis, Brazil · working remotely with teams in the US, UK and Brazil",
    headline: "I build mobile and web apps that people actually use.",
    intro:
      "React Native, Next.js and Node. For 7 years I've taken apps from first commit to the App Store and Google Play — for startups, for teams of hundreds, and for my own products.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See the apps",
    available: "Available for new projects",
    stats: [
      { value: "5M+", label: "users on the largest app I've worked on" },
      { value: "4.9★", label: "Qeepsake, 14k+ App Store ratings" },
      { value: "6", label: "live apps on the stores, below" },
    ],
    productsTitle: "My own products",
    productsLead: "Designed, built, published and run by me — code, infrastructure and the store listings.",
    clientsTitle: "Client work",
    clientsLead: "Apps I've built and maintained for startups and product teams. All live today.",
    toolsTitle: "Tools & side projects",
    experienceTitle: "Experience",
    stackTitle: "What I work with",
    earlier:
      "Earlier: BestClean (laundry operations), Ulocal (local-business discovery), i4fit (gym workouts, used by dozens of gyms in Brazil).",
    contactTitle: "Let's build something",
    contactLead:
      "Tell me what you're building and where it's stuck. I usually reply within a day.",
    emailMe: "Email me",
    appStore: "App Store",
    playStore: "Google Play",
    website: "Website",
    screenshots: "screenshots",
    footer: "Built with Astro. Source on",
  },
  pt: {
    htmlLang: "pt-BR",
    title: "Rodrigo Vieira — Engenheiro Mobile e Full-stack Sênior",
    description:
      "Engenheiro de software sênior que cria apps em React Native e Next.js publicados na App Store e Google Play. Disponível para projetos freelance.",
    nav: { work: "Trabalhos", experience: "Experiência", contact: "Contato" },
    switchLabel: "English",
    switchHref: "/",
    role: "Engenheiro de Software Sênior",
    location: "Florianópolis, Brasil · trabalhando remoto com times dos EUA, Reino Unido e Brasil",
    headline: "Eu construo apps mobile e web que as pessoas realmente usam.",
    intro:
      "React Native, Next.js e Node. Há 7 anos levo apps do primeiro commit até a App Store e o Google Play — para startups, para times de centenas de pessoas e para os meus próprios produtos.",
    ctaPrimary: "Começar um projeto",
    ctaSecondary: "Ver os apps",
    available: "Disponível para novos projetos",
    stats: [
      { value: "5M+", label: "usuários no maior app em que trabalhei" },
      { value: "4,9★", label: "Qeepsake, 14 mil+ avaliações na App Store" },
      { value: "6", label: "apps publicados nas lojas, abaixo" },
    ],
    productsTitle: "Meus produtos",
    productsLead: "Projetados, construídos, publicados e operados por mim — código, infraestrutura e publicação nas lojas.",
    clientsTitle: "Trabalhos para clientes",
    clientsLead: "Apps que construí e mantive para startups e times de produto. Todos no ar hoje.",
    toolsTitle: "Ferramentas e projetos paralelos",
    experienceTitle: "Experiência",
    stackTitle: "Com o que eu trabalho",
    earlier:
      "Antes: BestClean (gestão de lavanderia), Ulocal (descoberta de negócios locais), i4fit (treinos de academia, usado por dezenas de academias no Brasil).",
    contactTitle: "Vamos construir algo",
    contactLead:
      "Me conte o que você está construindo e onde travou. Costumo responder em até um dia.",
    emailMe: "Mande um e-mail",
    appStore: "App Store",
    playStore: "Google Play",
    website: "Site",
    screenshots: "capturas de tela",
    footer: "Feito com Astro. Código no",
  },
} as const
