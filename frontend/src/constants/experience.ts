export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  icon: string;
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
  detailedDescription: string;
  responsibilities: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Oximay (PVT) Ltd",
    location: "Sri Lanka",
    period: "2025 - Present",
    type: "Full-time",
    icon: "Code",
    description:
      "Building and shipping client-facing web products, Chrome extensions, and automation tools with strong focus on performance, UX, and delivery speed.",
    achievements: [
      "Delivered multiple production-ready web and extension projects for product and client teams.",
      "Built automation products for content workflows, analytics dashboards, and AI-powered experiences.",
      "Improved API and UI responsiveness using caching, query optimization, and cleaner data flows.",
      "Collaborated in Agile execution with rapid iteration, code reviews, and deployment support.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "Chrome Extension MV3",
    ],
    color: "from-purple-400 to-pink-400",
    detailedDescription: `At Oximay, I work as a full-stack developer delivering modern web applications and automation-focused products. My work covers frontend architecture, backend API development, extension workflows, and real-world production delivery under timeline constraints.

I contribute across the full lifecycle: planning, implementation, QA, optimization, and release support. This role strengthened my ability to build scalable interfaces and reliable backend services while collaborating closely with product and design stakeholders.`,
    responsibilities: [
      "Developed responsive frontend interfaces using React, Next.js, and Tailwind CSS.",
      "Implemented and maintained backend endpoints, validation, and integration layers.",
      "Built and maintained browser extension workflows and automation logic.",
      "Improved deployment quality through collaborative testing and issue triage.",
      "Worked with team members in sprint planning, code reviews, and delivery follow-ups.",
    ],
    projects: [
      {
        name: "Gemini Automation Product Suite",
        description:
          "Delivered multiple automation-focused web products and extension workflows for AI-driven media tools.",
        technologies: ["React", "Vite", "Node.js", "Express", "Chrome Extension MV3", "Firebase"],
      },
      {
        name: "Analytics & Dashboard Interfaces",
        description:
          "Implemented UI systems and API integrations for data-heavy dashboard modules and admin workflows.",
        technologies: ["React", "TypeScript", "REST API", "Tailwind CSS"],
      },
      {
        name: "Client Web Products",
        description:
          "Built and shipped polished product pages and conversion-focused experiences for internal and external initiatives.",
        technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
      }
    ],
    skills: [
      "Full-Stack Development",
      "API Development",
      "Extension Development",
      "UI Engineering",
      "Agile Methodology",
      "Team Collaboration",
    ],
  },
  {
    id: 2,
    title: "Intern PHP Laravel Web Developer",
    company: "Vampior Designs",
    location: "Kurunegala District, North Western Province, Sri Lanka",
    period: "Aug 2025 - Oct 2025",
    type: "Internship",
    icon: "Briefcase",
    description:
      "Completed a hands-on internship focused on Laravel web application development, API implementation, and responsive frontend delivery.",
    achievements: [
      "Developed and maintained Laravel (PHP 8+) and MySQL web modules.",
      "Implemented REST APIs, authentication flows, and CRUD operations.",
      "Delivered responsive UI using Blade templates, HTML, CSS, Bootstrap, and JavaScript.",
      "Collaborated on UI/UX improvements, performance optimizations, and validation/routing updates.",
      "Contributed through Git/GitHub workflow, daily stand-ups, and code reviews.",
    ],
    technologies: [
      "Laravel",
      "PHP 8+",
      "MySQL",
      "REST APIs",
      "Blade",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Git",
      "GitHub",
    ],
    color: "from-blue-400 to-cyan-400",
    detailedDescription: `During my internship at Vampior Designs, I worked as a PHP Laravel Web Developer Intern and gained hands-on experience in building and maintaining dynamic web applications.

I collaborated with senior developers to implement RESTful APIs, authentication systems, CRUD features, and responsive user interfaces while following modern coding practices and team workflows.`,
    responsibilities: [
      "Developed and maintained web applications using Laravel and MySQL.",
      "Implemented authentication, routing, validation, and CRUD operations.",
      "Built responsive frontend templates using Blade, Bootstrap, and JavaScript.",
      "Integrated third-party APIs and supported feature optimization.",
      "Participated in stand-ups, code reviews, and Git-based collaboration.",
    ],
    projects: [
      {
        name: "Laravel Client Web Modules",
        description: "Developed and maintained feature modules for client web applications.",
        technologies: ["Laravel", "PHP", "MySQL", "Blade"],
      },
      {
        name: "API and Auth Features",
        description: "Implemented secure API endpoints and authentication-related flows.",
        technologies: ["REST APIs", "Laravel", "MySQL"],
      },
    ],
    skills: [
      "Laravel Framework",
      "PHP Development",
      "API Integration",
      "Database Design",
      "Front-End Development",
      "Git/GitHub",
      "Team Collaboration",
      "Problem Solving",
    ],
  },
  {
    id: 3,
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 - Present",
    type: "Freelance",
    icon: "Award",
    description:
      "Worked with local and international clients to design and develop practical web solutions, landing pages, and business automation flows.",
    achievements: [
      "Completed multiple client projects with repeat work and referrals.",
      "Delivered portfolio websites, automation tools, and product landing pages.",
      "Improved delivery quality through better requirement discovery and planning.",
    ],
    technologies: ["React", "Next.js", "JavaScript", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
    color: "from-amber-400 to-orange-400",
    detailedDescription: `Built freelance products for businesses and creators by balancing technical implementation with clear communication and milestone-based delivery.

Working independently strengthened my ability to understand business requirements, translate them into scoped technical plans, and deliver reliable outcomes across varied domains.`,
    responsibilities: [
      "Gathered client requirements and translated them into technical specifications",
      "Designed and developed custom websites and web applications",
      "Implemented SEO and performance best practices",
      "Provided post-launch maintenance and support",
      "Managed timelines, communication, and release quality",
    ],
    projects: [
      {
        name: "Business Websites & Landing Pages",
        description:
          "Built conversion-focused product and service websites with modern responsive layouts.",
        technologies: ["React", "Next.js", "Tailwind CSS", "SEO"],
      },
      {
        name: "Portfolio and Personal Brand Sites",
        description:
          "Designed and developed polished portfolio sites for professionals across domains.",
        technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      },
      {
        name: "Custom Automation Extensions",
        description:
          "Developed browser extension workflows for repetitive content and media operations.",
        technologies: ["React", "Vite", "Chrome Extension MV3"],
      },
    ],
    skills: [
      "Web Development",
      "Client Communication",
      "Project Management",
      "Requirement Analysis",
      "SEO Optimization",
      "Responsive Design",
    ],
  },
];
