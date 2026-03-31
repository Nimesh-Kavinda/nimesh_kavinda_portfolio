export interface PortfolioProjectFeature {
  title: string;
  description: string;
  implementation: string;
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  company?: string;
  status?: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string;
  longDescription: string;
  features: PortfolioProjectFeature[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "BusyBooks",
    category: "Web App",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "Digital library app with personalized recommendations, reading, and listening workflows.",
    image: "/project/source/Busy%20Book/Screenshot%20(132).png",
    images: [
      "/project/source/Busy%20Book/Screenshot%20(132).png",
      "/project/source/Busy%20Book/Screenshot%20(133).png",
      "/project/source/Busy%20Book/Screenshot%20(134).png",
      "/project/source/Busy%20Book/Screenshot%20(135).png",
      "/project/source/Busy%20Book/Screenshot%20(136).png",
      "/project/source/Busy%20Book/Screenshot%20(137).png",
      "/project/source/Busy%20Book/Screenshot%20(138).png",
      "/project/source/Busy%20Book/Screenshot%20(139).png",
      "/project/source/Busy%20Book/Screenshot%20(140).png",
      "/project/source/Busy%20Book/Screenshot%20(141).png",
      "/project/source/Busy%20Book/Screenshot%20(142).png",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "React Query", "Axios", "MUI"],
    liveUrl: "https://busybooks-busybooks-4dznxo-bda4e3-139-59-233-104.traefik.me/",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-cyan-400 to-blue-500",
    longDescription:
      "BusyBooks is a multi-page reading experience that combines onboarding, personalized category recommendations, and book discovery with full read and listen views. The frontend integrates with a REST API and uses Firebase authentication for secure access.",
    features: [
      {
        title: "Personalized Discovery",
        description: "Built personalized category recommendations and daily suggestions for each user.",
        implementation:
          "Connected recommendation and user library endpoints with React Query caching, then added skeleton states for smoother UX on slow networks.",
      },
      {
        title: "Secure Auth Flows",
        description: "Implemented authentication-protected routes across dashboard and reading flows.",
        implementation:
          "Integrated Firebase Authentication and ensured auth tokens were attached to all protected endpoints.",
      },
    ],
  },
  {
    id: 2,
    title: "Gemini Image Site",
    category: "AI Tool",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "Next.js AI image generator with secure server proxy, dummy mode, and gallery tooling.",
    image: "/project/source/Gemini%20Image%20Site/test.png",
    images: ["/project/source/Gemini%20Image%20Site/test.png"],
    technologies: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "TypeScript"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-indigo-400 to-blue-500",
    longDescription:
      "A modern AI image generator that proxies requests server-side to protect credentials. The UI supports advanced prompt options, multi-image generation, and a gallery with downloads and ZIP export.",
    features: [
      {
        title: "Secure API Proxy",
        description: "Protected provider credentials through a server-side proxy.",
        implementation:
          "Implemented a Next.js App Router API route to proxy generation requests and keep secrets out of the client.",
      },
      {
        title: "Batch Generation UX",
        description: "Added parallel generation with visible progress and export tools.",
        implementation:
          "Implemented parallel processing, queue synchronization fixes, and gallery multi-select ZIP export.",
      },
    ],
  },
  {
    id: 3,
    title: "Gemini Watermark Removal Extension",
    category: "Chrome Extension",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "Chrome extension for Gemini image downloads with client-side watermark reconstruction.",
    image: "/project/source/Gemini%20watermark%20remover/watermark%20remover.png",
    images: ["/project/source/Gemini%20watermark%20remover/watermark%20remover.png"],
    technologies: ["React", "Vite", "Tailwind CSS", "Chrome Extension MV3"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-violet-400 to-indigo-500",
    longDescription:
      "A Chrome extension that detects Gemini generated images, injects download actions, and applies reverse alpha blending to reconstruct original pixels under watermark areas on the client side.",
    features: [
      {
        title: "DOM Detection Pipeline",
        description: "Injected controls dynamically as Gemini image elements appeared.",
        implementation:
          "Used MutationObserver-based scanning plus content script injection to keep buttons stable during dynamic page updates.",
      },
      {
        title: "Watermark Reconstruction",
        description: "Reconstructed masked regions locally without server dependency.",
        implementation:
          "Built a reverse alpha blending workflow driven by pre-captured alpha maps and one-click download handlers.",
      },
    ],
  },
  {
    id: 4,
    title: "GLabs Automator",
    category: "Landing Page",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "Automation-focused landing and privacy experience for Google Labs AI tooling.",
    image: "/project/source/G%20labs%20automater/screencapture-localhost-5173-2026-03-17-00_40_20.png",
    images: [
      "/project/source/G%20labs%20automater/screencapture-localhost-5173-2026-03-17-00_40_20.png",
      "/project/source/G%20labs%20automater/screencapture-localhost-5173-2026-03-17-00_40_35.png",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "AOS"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: false,
    color: "from-green-400 to-cyan-500",
    longDescription:
      "A product website and policy flow for a Chrome extension that automates Google Labs AI tools like Flow, Whisk, ImageFX, and MusicFX, with a strong privacy-first communication strategy.",
    features: [
      {
        title: "Story-Driven Landing",
        description: "Created a complete hero-to-FAQ narrative around automation value.",
        implementation:
          "Built modular sections for features, use cases, and how-it-works with animation polish.",
      },
      {
        title: "Privacy Messaging",
        description: "Documented data handling clearly to improve trust.",
        implementation:
          "Shipped a dedicated privacy policy page and tuned long-form responsive readability.",
      },
    ],
  },
  {
    id: 5,
    title: "Badgy - Gmail Attachment Downloader",
    category: "Chrome Extension",
    company: "Freelance",
    status: "Completed",
    description:
      "Bulk Gmail attachment downloader with sender/date filters and ZIP bundling.",
    image: "/project/source/Badgy/Screenshot%20(144).png",
    images: [
      "/project/source/Badgy/Screenshot%20(144).png",
      "/project/source/Badgy/Screenshot%20(145).png",
    ],
    technologies: ["React", "Vite", "Chrome Extension MV3", "JSZip", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-amber-400 to-orange-500",
    longDescription:
      "Badgy is a Chrome extension that downloads Gmail attachments in bulk. It supports filters by sender, subject, and date range and bundles files into ZIP archives with progress feedback.",
    features: [
      {
        title: "Bulk ZIP Downloads",
        description: "Downloaded attachments in batches with cancellation and progress states.",
        implementation:
          "Built popup + content script Gmail integration and ZIP packaging with JSZip for grouped exports.",
      },
      {
        title: "Offline Trial Logic",
        description: "Implemented a 3-day trial flow without backend licensing.",
        implementation:
          "Added reinstall-resistant local trial persistence and validation checks at extension startup.",
      },
    ],
  },
  {
    id: 6,
    title: "HabitFlow",
    category: "SaaS",
    company: "Freelance",
    status: "Completed",
    description:
      "Habit tracking platform with subscriptions, analytics, and real-time sync.",
    image: "/project/source/Habit%20Traker/Screenshot%20(146).png",
    images: [
      "/project/source/Habit%20Traker/Screenshot%20(146).png",
      "/project/source/Habit%20Traker/Screenshot%20(147).png",
      "/project/source/Habit%20Traker/Screenshot%20(148).png",
      "/project/source/Habit%20Traker/Screenshot%20(149).png",
      "/project/source/Habit%20Traker/Screenshot%20(150).png",
      "/project/source/Habit%20Traker/Screenshot%20(151).png",
      "/project/source/Habit%20Traker/Screenshot%20(152).png",
    ],
    technologies: ["React", "Firebase", "Stripe", "Express", "Socket.IO", "Tailwind CSS"],
    liveUrl: "http://habbittracker-habbittracker-wpjuyt-8e1c6c-139-59-233-104.traefik.me/",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-emerald-400 to-teal-500",
    longDescription:
      "HabitFlow is a subscription-based habit tracking application with streak analytics, Firebase auth/data, Stripe billing integration, and realtime updates.",
    features: [
      {
        title: "Subscription Architecture",
        description: "Integrated Stripe plans with feature access control.",
        implementation:
          "Implemented subscription tiers and access checks across app routes and backend endpoints.",
      },
      {
        title: "Realtime Sync",
        description: "Delivered live habit state updates across sessions.",
        implementation:
          "Migrated critical subscription data to Realtime Database and added Socket.IO synchronization.",
      },
    ],
  },
  {
    id: 7,
    title: "Pinterest Pin Sorter",
    category: "Chrome Extension",
    company: "Freelance",
    status: "Completed",
    description:
      "Pinterest analytics and sorting extension with custom exports and viral insights.",
    image: "/project/source/Pintrest%20Pin%20Sorter/Screenshot%20(106).png",
    images: [
      "/project/source/Pintrest%20Pin%20Sorter/Screenshot%20(106).png",
      "/project/source/Pintrest%20Pin%20Sorter/Screenshot%20(109).png",
      "/project/source/Pintrest%20Pin%20Sorter/Screenshot%20(155).png",
    ],
    technologies: ["React", "Vite", "Chrome Extension MV3", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: false,
    color: "from-rose-400 to-red-500",
    longDescription:
      "A Pinterest extension that surfaces hidden pin data, identifies viral posts, and exports analytics for marketing and research workflows.",
    features: [
      {
        title: "Board Intelligence",
        description: "Exposed deeper pin metrics and sorting controls for large boards.",
        implementation:
          "Built profile scan toggles, analytics panels, and sorting actions tailored to heavy datasets.",
      },
      {
        title: "Flexible Export",
        description: "Allowed both selected exports and full dataset export.",
        implementation:
          "Added user-defined export counts and reusable export actions from analytics views.",
      },
    ],
  },
  {
    id: 8,
    title: "ProductHub",
    category: "Web App",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "Project and content operations dashboard with AI-assisted content workflows.",
    image: "/project/source/Product%20Hub/Screenshot%20(156).png",
    images: [
      "/project/source/Product%20Hub/Screenshot%20(156).png",
      "/project/source/Product%20Hub/Screenshot%20(157).png",
      "/project/source/Product%20Hub/Screenshot%20(158).png",
      "/project/source/Product%20Hub/Screenshot%20(159).png",
      "/project/source/Product%20Hub/Screenshot%20(160).png",
      "/project/source/Product%20Hub/Screenshot%202026-03-01%20124017.png",
    ],
    technologies: ["React", "Vite", "MUI", "Framer Motion"],
    liveUrl: "https://redesign-producthub-mo3vbs-ef0dc8-139-59-233-104.traefik.me/",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-sky-400 to-indigo-500",
    longDescription:
      "ProductHub is an operations dashboard for projects, content pipelines, activity logs, and AI-assisted workflows such as blogs, email campaigns, and social content.",
    features: [
      {
        title: "Operations Workspace",
        description: "Centralized project + content workflows in one dashboard.",
        implementation:
          "Built modular MUI dashboard sections with responsive grid/list modes and quick action modals.",
      },
      {
        title: "Fast Demo Persistence",
        description: "Persisted user-created project entries for quick continuity.",
        implementation:
          "Added localStorage-backed project state with adaptive modal behavior for smaller screens.",
      },
    ],
  },
  {
    id: 9,
    title: "TextToVideo",
    category: "AI Tool",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "Text-to-video converter UI with prompt batching and advanced generation settings.",
    image: "/project/source/Text%20to%20Video/Screenshot%20(161).png",
    images: [
      "/project/source/Text%20to%20Video/Screenshot%20(161).png",
      "/project/source/Text%20to%20Video/Screenshot%20(162).png",
      "/project/source/Text%20to%20Video/Screenshot%20(163).png",
      "/project/source/Text%20to%20Video/Screenshot%20(164).png",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Radix UI"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-fuchsia-400 to-violet-500",
    longDescription:
      "A text-to-video generation interface with a themed landing page and a full converter workspace, including queue management, prompt file uploads, and output preview panels.",
    features: [
      {
        title: "Batch Prompt Pipeline",
        description: "Supported TXT/CSV/JSON prompt ingestion with queue controls.",
        implementation:
          "Implemented batch upload parsing, delay controls, and a multi-panel conversion workspace.",
      },
      {
        title: "Advanced Settings",
        description: "Enabled deeper control over generation quality and output shape.",
        implementation:
          "Added configuration for duration, style, and aspect ratios plus result history views.",
      },
    ],
  },
  {
    id: 10,
    title: "WearIt",
    category: "Chrome Extension",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "Virtual try-on extension with apparel detection and side panel AI workflow.",
    image: "/project/source/Wear%20it/Screenshot%20(177).png",
    images: [
      "/project/source/Wear%20it/Screenshot%20(177).png",
      "/project/source/Wear%20it/Screenshot%20(178).png",
      "/project/source/Wear%20it/Screenshot%20(179).png",
      "/project/source/Wear%20it/Screenshot%20(180).png",
      "/project/source/Wear%20it/Screenshot%20(181).png",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Chrome Extension MV3", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: false,
    color: "from-purple-400 to-pink-500",
    longDescription:
      "WearIt injects a Try On action into apparel images on fashion websites and opens a side panel where users can run AI try-on workflows with robust dynamic page handling.",
    features: [
      {
        title: "Apparel Detection",
        description: "Scored product imagery using vocabulary-based detection signals.",
        implementation:
          "Developed a scoring engine and mutation-aware reinjection logic for dynamic content feeds.",
      },
      {
        title: "Extension-to-Panel Sync",
        description: "Connected content actions into a React-driven side panel workflow.",
        implementation:
          "Used Chrome storage event flows to coordinate content script events with side panel state.",
      },
    ],
  },
  {
    id: 11,
    title: "X Developer API Dashboard",
    category: "Web App",
    company: "Oximay (PVT) Ltd",
    status: "Completed",
    description:
      "React dashboard with secure Express proxy to demonstrate X API workflows.",
    image: "/project/source/X-developer%20api/screencapture-localhost-5173-2026-03-17-01_50_25.png",
    images: ["/project/source/X-developer%20api/screencapture-localhost-5173-2026-03-17-01_50_25.png"],
    technologies: ["React", "Vite", "Express", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Nimesh-Kavinda",
    featured: true,
    color: "from-blue-500 to-cyan-400",
    longDescription:
      "A demo dashboard that showcases search, trends, mentions, counts, list workflows, and media insights from X APIs while keeping bearer credentials secured on the server.",
    features: [
      {
        title: "Secure OAuth Proxy",
        description: "Kept all sensitive bearer credentials server-side.",
        implementation:
          "Implemented Express proxy routes with explicit CORS and token handling for frontend-safe access.",
      },
      {
        title: "Workflow Cards",
        description: "Presented multiple API capabilities with consistent UX patterns.",
        implementation:
          "Built reusable React API cards/hooks and surfaced rate limit and error metadata clearly.",
      },
    ],
  },
];
