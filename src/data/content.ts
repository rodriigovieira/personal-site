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
  /** Natural size of the store screenshots, so the frame never crops them. */
  shotSize: [number, number]
  badge?: Text
}

export const profile = {
  name: "Rodrigo Rodrigues",
  email: "hello@rodrigorodrigues.dev",
  linkedin: "https://www.linkedin.com/in/rodriigovieira/",
  github: "https://github.com/rodriigovieira",
}

export const projects: Project[] = [
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
    role: { en: "Lead Engineer", pt: "Engenheiro líder" },
    stack: ["Flutter", "React", "Convex", "Node.js", "Electron"],
    links: {
      web: "https://www.pandapdv.com.br",
      appStore: "https://apps.apple.com/br/app/pandapdv-gest%C3%A3o-completa/id6758158610",
      playStore: "https://play.google.com/store/apps/details?id=com.br.pandapdv",
    },
    shotSize: [392, 848],
  },
  {
    id: "qeepsake",
    name: "Qeepsake",
    kind: { en: "Family journal · iOS, Android, Web", pt: "Diário da família · iOS, Android, Web" },
    tagline: {
      en: "The family photo journal seen on Shark Tank.",
      pt: "O diário de fotos da família que apareceu no Shark Tank.",
    },
    description: {
      en: "Owned both sides of the product: the Next.js web app and the React Native apps for iOS and Android. Rebuilt the mobile release pipeline on EAS, and worked directly with the CEO, product and marketing to plan and ship.",
      pt: "Responsável pelos dois lados do produto: o web app em Next.js e os apps React Native para iOS e Android. Reconstruí o pipeline de publicação mobile com EAS e trabalhei direto com CEO, produto e marketing.",
    },
    role: { en: "Senior Software Engineer", pt: "Engenheiro de Software Sênior" },
    stack: ["Next.js", "React", "React Native", "Expo / EAS", "TypeScript"],
    links: {
      web: "https://qeepsake.com",
      appStore: "https://apps.apple.com/us/app/qeepsake-family-photo-album/id1332312787",
      playStore: "https://play.google.com/store/apps/details?id=co.qeepsake.qeepsakeApp",
    },
    shotSize: [392, 697],
    badge: { en: "4.9★ · 14k+ ratings", pt: "4,9★ · 14 mil+ avaliações" },
  },
  {
    id: "myfi",
    name: "MyFi",
    kind: { en: "Social trading · iOS, Android, Web", pt: "Trading social · iOS, Android, Web" },
    tagline: {
      en: "A social trading app where investors share ideas and track their performance.",
      pt: "App de trading social onde investidores compartilham ideias e acompanham seu desempenho.",
    },
    description: {
      en: "Built the product end to end for a Canadian startup: the iOS and Android apps in Expo / React Native, the Next.js admin portal and the landing page, on a Supabase backend with live market data.",
      pt: "Construí o produto de ponta a ponta para uma startup canadense: os apps iOS e Android em Expo / React Native, o painel administrativo em Next.js e a landing page, sobre um backend Supabase com dados de mercado em tempo real.",
    },
    role: { en: "Lead Engineer", pt: "Engenheiro líder" },
    stack: ["React Native", "Expo", "Next.js", "Supabase", "TypeScript"],
    links: {
      web: "https://www.myfistocks.com",
      appStore: "https://apps.apple.com/us/app/myfi-social-trading/id6756648010",
      playStore: "https://play.google.com/store/apps/details?id=com.myfistocks",
    },
    shotSize: [392, 848],
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
    role: { en: "Senior Software Engineer", pt: "Engenheiro de Software Sênior" },
    stack: ["React Native", "Next.js", "tRPC", "Drizzle", "fastlane"],
    links: {
      appStore: "https://apps.apple.com/us/app/avodahmed/id6740938902",
      playStore: "https://play.google.com/store/apps/details?id=com.avodahmed.nsight.app",
      web: "https://www.avodah.com/med",
    },
    shotSize: [392, 852],
  },
  {
    id: "tatsuki",
    name: "Tatsuki Sushi House",
    kind: { en: "Food ordering · iOS, Android, Web", pt: "Delivery · iOS, Android, Web" },
    tagline: {
      en: "Ordering app and website for a sushi restaurant in Florianópolis.",
      pt: "App e site de pedidos para um restaurante de sushi em Florianópolis.",
    },
    description: {
      en: "Customers browse the menu, customise dishes, pay with Pix or card and follow their order from the kitchen to the door — for delivery or pickup. Built in Flutter, together with the restaurant's online ordering site.",
      pt: "O cliente navega pelo cardápio, personaliza os pratos, paga com Pix ou cartão e acompanha o pedido da cozinha até a porta — para entrega ou retirada. Construído em Flutter, junto com o site de pedidos do restaurante.",
    },
    role: { en: "Lead Engineer", pt: "Engenheiro líder" },
    stack: ["Flutter", "Firebase"],
    links: {
      web: "https://www.tatsuki.com.br",
      appStore: "https://apps.apple.com/br/app/tatsuki-floripa/id6475375304",
      playStore: "https://play.google.com/store/apps/details?id=br.com.tatsuki",
    },
    shotSize: [392, 697],
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
    role: { en: "Senior Software Engineer", pt: "Engenheiro de Software Sênior" },
    stack: ["React Native", "Next.js", "TypeScript"],
    links: {
      appStore: "https://apps.apple.com/us/app/tvl/id945256287",
      web: "https://www.thevoicelibrary.net",
    },
    shotSize: [392, 697],
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
    shotSize: [392, 697],
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
    name: "MedSlides",
    description: {
      en: "AI-generated slide decks for doctors. Runs entirely in the browser and exports to PowerPoint.",
      pt: "Apresentações de slides para médicos geradas por IA. Roda no navegador e exporta para PowerPoint.",
    },
    link: "https://medslides.vercel.app",
    linkLabel: { en: "Try it", pt: "Experimentar" },
  },
]

export const pandaCode = {
  name: "Panda Code",
  description: {
    en: "A local-first macOS app for running many Claude Code and Codex agent sessions side by side, with a self-hosted iPhone companion to follow and approve them on the go. Electron and React on the desktop, Flutter on the phone, an end-to-end encrypted relay in between.",
    pt: "Um app macOS local-first para rodar várias sessões de agentes Claude Code e Codex lado a lado, com um app de iPhone self-hosted para acompanhar e aprovar de qualquer lugar. Electron e React no desktop, Flutter no celular e um relay com criptografia ponta a ponta entre eles.",
  },
  stack: ["Electron", "React", "TypeScript", "Flutter", "Convex"],
  link: "https://github.com/rodriigovieira/panda-code",
}

export interface Contribution {
  repo: string
  url: string
  stars?: string
  summary: Text
  prs: { label: string; url: string; merged: boolean }[]
}

export const contributions: Contribution[] = [
  {
    repo: "React Native — official docs",
    url: "https://github.com/react/react-native-website",
    summary: {
      en: "Rewrote the Animations guide example with React Hooks, in the official React Native documentation.",
      pt: "Reescrevi o exemplo do guia de Animações com React Hooks, na documentação oficial do React Native.",
    },
    prs: [{ label: "#1144", url: "https://github.com/react/react-native-website/pull/1144", merged: true }],
  },
  {
    repo: "React Native Paper",
    url: "https://github.com/callstack/react-native-paper",
    stars: "14k★",
    summary: {
      en: "Fixed the Dialog.ScrollArea example in Callstack's Material Design component library.",
      pt: "Corrigi o exemplo do Dialog.ScrollArea na biblioteca de componentes Material Design da Callstack.",
    },
    prs: [{ label: "#1124", url: "https://github.com/callstack/react-native-paper/pull/1124", merged: true }],
  },
  {
    repo: "react-native-navigation-drawer-extension",
    url: "https://github.com/lukebrandonfarrell/react-native-navigation-drawer-extension",
    stars: "200+★",
    summary: {
      en: "Swipe-to-close gesture, orientation support, TypeScript types and docs, and the example app.",
      pt: "Gesto de fechar deslizando, suporte a orientação de tela, tipos TypeScript e docs, e o app de exemplo.",
    },
    prs: [
      { label: "#33", url: "https://github.com/lukebrandonfarrell/react-native-navigation-drawer-extension/pull/33", merged: true },
      { label: "#34", url: "https://github.com/lukebrandonfarrell/react-native-navigation-drawer-extension/pull/34", merged: true },
      { label: "#35", url: "https://github.com/lukebrandonfarrell/react-native-navigation-drawer-extension/pull/35", merged: true },
      { label: "#36", url: "https://github.com/lukebrandonfarrell/react-native-navigation-drawer-extension/pull/36", merged: true },
    ],
  },
  {
    repo: "rn-apple-healthkit",
    url: "https://github.com/lucaspbordignon/rn-apple-healthkit",
    stars: "500+★",
    summary: {
      en: "Native iOS (Objective-C) support for reading Apple Health active minutes from React Native.",
      pt: "Suporte nativo iOS (Objective-C) para ler os minutos ativos do Apple Saúde a partir do React Native.",
    },
    prs: [{ label: "#199", url: "https://github.com/lucaspbordignon/rn-apple-healthkit/pull/199", merged: false }],
  },
  {
    repo: "redux-persist-machine · redux-nl",
    url: "https://github.com/lukebrandonfarrell/redux-persist-machine",
    summary: {
      en: "Automatic state loading, API improvements and a full TypeScript conversion for two Redux libraries used in React Native apps.",
      pt: "Carregamento automático de estado, melhorias de API e conversão completa para TypeScript de duas bibliotecas Redux usadas em apps React Native.",
    },
    prs: [
      { label: "#3", url: "https://github.com/lukebrandonfarrell/redux-persist-machine/pull/3", merged: true },
      { label: "#4", url: "https://github.com/lukebrandonfarrell/redux-persist-machine/pull/4", merged: true },
      { label: "#5", url: "https://github.com/lukebrandonfarrell/redux-persist-machine/pull/5", merged: true },
      { label: "#6", url: "https://github.com/lukebrandonfarrell/redux-persist-machine/pull/6", merged: true },
      { label: "#7", url: "https://github.com/lukebrandonfarrell/redux-persist-machine/pull/7", merged: true },
      { label: "redux-nl #5", url: "https://github.com/lukebrandonfarrell/redux-nl/pull/5", merged: true },
    ],
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
    title: "Rodrigo Rodrigues — Senior Mobile & Full-stack Engineer",
    description:
      "Senior software engineer building React Native and Next.js apps that ship to the App Store and Google Play.",
    nav: { work: "Work", experience: "Experience", openSource: "Open source", contact: "Contact" },
    switchLabel: "Português",
    switchHref: "/pt/",
    role: "Senior Software Engineer",
    headline: "I build mobile and web apps that people actually use.",
    intro:
      "React Native, Next.js and Node. For 7 years I've taken apps from first commit to the App Store and Google Play — for startups, for teams of hundreds, and for my own products.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See the apps",
    stats: [
      { value: "5M+", label: "users on the largest app I've worked on" },
      { value: "4.9★", label: "Qeepsake, 14k+ App Store ratings" },
      { value: "7", label: "live apps on the stores, below" },
    ],
    projectsTitle: "Projects",
    projectsLead: "Apps I've built and shipped — all live today. Tap through to the store or the product's site.",
    experienceTitle: "Experience",
    openSourceTitle: "Open source",
    openSourceLead: "My own open-source app, and contributions to the React Native ecosystem.",
    contributionsTitle: "Contributions",
    viewSource: "Source on GitHub",
    merged: "merged",
    openPr: "open",
    stackTitle: "What I work with",
    contactTitle: "Let's build something",
    contactLead:
      "Tell me what you're building and where it's stuck. I usually reply within a day.",
    emailMe: "Email me",
    appStore: "App Store",
    playStore: "Google Play",
    screenshots: "screenshots",
    footer: "Built with Astro. Source on",
  },
  pt: {
    htmlLang: "pt-BR",
    title: "Rodrigo Rodrigues — Engenheiro Mobile e Full-stack Sênior",
    description:
      "Engenheiro de software sênior que cria apps em React Native e Next.js publicados na App Store e Google Play.",
    nav: { work: "Trabalhos", experience: "Experiência", openSource: "Open source", contact: "Contato" },
    switchLabel: "English",
    switchHref: "/",
    role: "Engenheiro de Software Sênior",
    headline: "Eu construo apps mobile e web que as pessoas realmente usam.",
    intro:
      "React Native, Next.js e Node. Há 7 anos levo apps do primeiro commit até a App Store e o Google Play — para startups, para times de centenas de pessoas e para os meus próprios produtos.",
    ctaPrimary: "Começar um projeto",
    ctaSecondary: "Ver os apps",
    stats: [
      { value: "5M+", label: "usuários no maior app em que trabalhei" },
      { value: "4,9★", label: "Qeepsake, 14 mil+ avaliações na App Store" },
      { value: "7", label: "apps publicados nas lojas, abaixo" },
    ],
    projectsTitle: "Projetos",
    projectsLead: "Apps que construí e publiquei — todos no ar hoje. Acesse a loja ou o site de cada produto.",
    experienceTitle: "Experiência",
    openSourceTitle: "Open source",
    openSourceLead: "Meu app open source e contribuições para o ecossistema React Native.",
    contributionsTitle: "Contribuições",
    viewSource: "Código no GitHub",
    merged: "merged",
    openPr: "aberto",
    stackTitle: "Com o que eu trabalho",
    contactTitle: "Vamos construir algo",
    contactLead:
      "Me conte o que você está construindo e onde travou. Costumo responder em até um dia.",
    emailMe: "Mande um e-mail",
    appStore: "App Store",
    playStore: "Google Play",
    screenshots: "capturas de tela",
    footer: "Feito com Astro. Código no",
  },
} as const
