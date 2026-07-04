export const personalInfo = {
  name: "Ferdaous Sarhani",
  email: "ferdaouss.sarhani@gmail.com",
  phone: "+216 23 606 003",
  location: "Mégrine, Ben Arous, Tunisia",
  github: "https://github.com/SarhaniFerdaous",
  gitlab: "https://gitlab.com/FerdaousSarhani",
  linkedin: "https://www.linkedin.com/in/ferdaous-sarhani",
  whatsapp: "https://wa.me/21623606003",
};

export const heroRoles = [
  "AI & Data Science Student",
  "Machine Learning Engineer",
  "Full-Stack Developer",
  "RAG & LLM Developer",
  "Data Science Enthusiast",
];

export const heroBio =
  "AI & Data Science Engineering student building end-to-end ML systems, RAG-based agents, and full-stack applications. Ranked Top 10 nationally on Kaggle and Top 32 globally at Orange Digital Center Champions 2025.";

export const aboutContent = {
  headline: "Building intelligent systems",
  headlineHighlight: "at the intersection of AI and software",
  paragraphs: [
    "I'm Ferdaous Sarhani, an AI & Data Science Engineering student at TEK-UP University with a Bachelor's degree in Business Computing from ESSEC. I build end-to-end AI/ML systems, RAG-based agents, full-stack web applications, and data pipelines.",
    "Ranked Top 10 of 126 teams in a national Kaggle competition and Top 32 of 392 teams across 14 countries in Orange Digital Center Champions 2025, I'm seeking an internship or junior role in Data Engineering, Machine Learning, or AI Development.",
  ],
  highlights: [
    { label: "6+ Projects", description: "AI, ML & Full-Stack", icon: "Briefcase" },
    { label: "Top 10", description: "National Kaggle Rank", icon: "Award" },
    { label: "Top 32", description: "Global Competition", icon: "Target" },
    { label: "3 Languages", description: "Arabic · English · French", icon: "Lightbulb" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { label: "Projects Built", value: 6, suffix: "+" },
  { label: "Kaggle National Rank", value: 9, suffix: "th" },
  { label: "Global Competition Rank", value: 32, suffix: "" },
  { label: "Languages Spoken", value: 3, suffix: "" },
];

export const experienceTimeline = [
  {
    year: "2025 – Present",
    role: "Vice Chair Technical Activities (VCTA)",
    company: "IEEE TEK-UP Student Branch",
    description:
      "Leading technical workshops, study groups, and coding sessions for the TEK-UP IEEE student branch.",
    highlights: ["Workshops", "Study Groups", "IEEE"],
  },
  {
    year: "2024 – 2025",
    role: "PFE Intern — AI/ML Developer",
    company: "Tritux",
    description:
      "Built ML models and REST APIs for the Soulier d'Or football platform. Deployed vote-prediction and user-segmentation models with Grafana monitoring dashboards.",
    highlights: ["Python", "Deep Learning", "Grafana", "REST APIs"],
  },
  {
    year: "2024 – 2025",
    role: "Human Resources Assistant",
    company: "infoLAB ESSECT",
    description:
      "Coordinated recruitment, onboarding, and internal communications for a student technology lab.",
    highlights: ["Recruitment", "Onboarding", "Communications"],
  },
  {
    year: "2021 – 2023",
    role: "Marketing & Talent Management Manager",
    company: "AIESEC TACAPES",
    description:
      "Built data-driven marketing campaigns and led full recruitment cycles. Developed data processing skills using Google Sheets and reporting tools.",
    highlights: ["Marketing", "Talent Management", "Leadership"],
  },
];

export const skills: Record<
  string,
  { name: string; level: number; icon: string }[]
> = {
  Programming: [
    { name: "Python", level: 92, icon: "FileCode" },
    { name: "JavaScript", level: 85, icon: "Braces" },
    { name: "Java", level: 80, icon: "FileCode" },
    { name: "PHP", level: 78, icon: "Server" },
    { name: "SQL", level: 85, icon: "Database" },
    { name: "HTML/CSS", level: 88, icon: "Paintbrush" },
  ],
  "AI / ML": [
    { name: "TensorFlow", level: 82, icon: "Sparkles" },
    { name: "PyTorch", level: 80, icon: "Sparkles" },
    { name: "scikit-learn", level: 85, icon: "Atom" },
    { name: "LangChain", level: 88, icon: "Route" },
    { name: "RAG & LLMs", level: 90, icon: "Zap" },
    { name: "NLP", level: 83, icon: "BookOpen" },
  ],
  "Web & Mobile": [
    { name: "React", level: 85, icon: "Atom" },
    { name: "Node.js", level: 82, icon: "Server" },
    { name: "Streamlit", level: 88, icon: "Globe" },
    { name: "Bootstrap", level: 80, icon: "Layout" },
    { name: "JavaFX", level: 78, icon: "PenTool" },
    { name: "Android Studio", level: 75, icon: "Globe" },
  ],
  Databases: [
    { name: "MySQL", level: 85, icon: "Database" },
    { name: "MongoDB", level: 80, icon: "Database" },
    { name: "Firebase", level: 82, icon: "Cloud" },
    { name: "ChromaDB", level: 88, icon: "Layers" },
    { name: "Oracle", level: 70, icon: "Database" },
  ],
  Tools: [
    { name: "Git", level: 90, icon: "GitBranch" },
    { name: "GitHub", level: 90, icon: "GitBranch" },
    { name: "GitLab", level: 85, icon: "GitBranch" },
    { name: "Grafana", level: 80, icon: "Layout" },
    { name: "Apache POI", level: 75, icon: "FileCode" },
    { name: "Agile / SCRUM", level: 85, icon: "Repeat" },
  ],
};

const PROJECT_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71";

export const projects = [
  {
    id: 1,
    title: "HR Intelligent Assistant",
    category: "AI / ML",
    description:
      "Autonomous AI agent with RAG that answers HR questions from verified company documents. Supports multilingual responses and integrates real-time API tools for holidays and currency conversion.",
    tags: ["Python", "LangChain", "ChromaDB", "Streamlit", "Llama 3.3"],
    stats: { users: "RAG", performance: "LangChain", conversion: "Multilingual" },
    liveUrl: "#",
    githubUrl: "https://github.com/SarhaniFerdaous/HR-Intelligent-Assistant",
    featured: true,
    image: PROJECT_IMAGE,
  },
  {
    id: 2,
    title: "Soulier d'Or",
    category: "AI / ML",
    description:
      "AI-powered football experience platform with vote-prediction and user-segmentation ML models deployed as REST APIs, Grafana dashboards, and ML-driven push notifications.",
    tags: ["Python", "Deep Learning", "Grafana", "LangChain", "REST APIs"],
    stats: { users: "2 Models", performance: "Grafana", conversion: "REST APIs" },
    liveUrl: "#",
    githubUrl: "https://gitlab.com/pfe/SoulierDOr",
    featured: true,
    image: PROJECT_IMAGE,
  },
  {
    id: 3,
    title: "InfoZone",
    category: "Web Development",
    description:
      "Full-stack e-commerce marketplace with product management, order processing, payments, and user authentication. Includes Power BI dashboards and bilingual Arabic/French support.",
    tags: ["React", "Node.js", "Firebase", "Power BI", "Bootstrap"],
    stats: { users: "E-Commerce", performance: "Firebase", conversion: "Power BI" },
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: PROJECT_IMAGE,
  },
  {
    id: 4,
    title: "Essectify",
    category: "Mobile",
    description:
      "Android app for managing teacher schedules and absences with automated Excel report generation via Apache POI and Firebase push notifications.",
    tags: ["Java", "Android Studio", "Firestore", "Apache POI"],
    stats: { users: "Android", performance: "Firestore", conversion: "Excel Reports" },
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    image: PROJECT_IMAGE,
  },
  {
    id: 5,
    title: "Quiz Generator Platform",
    category: "Backend",
    description:
      "Quiz management system with role-based access control (admin/teacher/student), result tracking, performance analytics, and a JavaFX XML-driven UI.",
    tags: ["Java", "JavaFX", "Maven", "XML"],
    stats: { users: "3 Roles", performance: "JavaFX", conversion: "Maven" },
    liveUrl: "#",
    githubUrl: "https://github.com/SarhaniFerdaous/QuizGenerator",
    featured: false,
    image: PROJECT_IMAGE,
  },
  {
    id: 6,
    title: "CVGEN",
    category: "Web Development",
    description:
      "Web application for creating, customizing, and exporting professional CVs in PDF and HTML formats with live preview and MVC architecture.",
    tags: ["PHP", "MySQL", "PDO", "MVC"],
    stats: { users: "PDF/HTML", performance: "MVC", conversion: "MySQL" },
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    image: PROJECT_IMAGE,
  },
];

export const projectCategories = [
  "All",
  "AI / ML",
  "Web Development",
  "Mobile",
  "Backend",
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Next.js, and modern technologies.",
    price: "From $5,000",
    icon: "Globe",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Tuning",
      "API Integration",
    ],
    popular: false,
  },
  {
    id: 2,
    title: "SaaS Development",
    description:
      "End-to-end SaaS platforms with auth, billing, dashboards, and scalable architecture.",
    price: "From $15,000",
    icon: "LayoutDashboard",
    features: [
      "Multi-tenancy",
      "Stripe Billing",
      "Role-based Auth",
      "Admin Dashboard",
    ],
    popular: true,
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "Headless storefronts with fast checkout, inventory sync, and conversion optimization.",
    price: "From $8,000",
    icon: "ShoppingCart",
    features: [
      "Headless CMS",
      "Payment Gateways",
      "Cart Abandonment",
      "Analytics",
    ],
    popular: false,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces with accessibility-first design and design systems.",
    price: "From $3,000",
    icon: "MousePointer",
    features: [
      "Figma Prototypes",
      "Design Systems",
      "Accessibility Audit",
      "User Testing",
    ],
    popular: false,
  },
  {
    id: 5,
    title: "Brand Identity",
    description:
      "Complete brand packages including logos, color palettes, and design guidelines.",
    price: "From $2,500",
    icon: "PenTool",
    features: ["Logo Design", "Style Guide", "Social Assets", "Brand Strategy"],
    popular: false,
  },
  {
    id: 6,
    title: "Performance Audit",
    description:
      "Deep-dive performance analysis and optimization for Core Web Vitals.",
    price: "From $1,500",
    icon: "Zap",
    features: [
      "Lighthouse Scores",
      "Bundle Analysis",
      "Caching Strategy",
      "CDN Setup",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    content:
      "Muddsar transformed our product vision into reality. The attention to detail and technical excellence exceeded every expectation.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Reid",
    role: "Founder, Aura",
    content:
      "Working with Muddsar was a game-changer. Our conversion rate tripled within two months of launch. Truly world-class work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Voss",
    role: "CTO, Orbit",
    content:
      "The architecture Muddsar designed scaled seamlessly to 100K users without a hitch. A rare combination of craft and engineering rigor.",
    rating: 5,
  },
  {
    id: 4,
    name: "James O'Connor",
    role: "Product Lead, Zenith",
    content:
      "Muddsar delivered our healthcare platform on time and under budget, with flawless HIPAA compliance. Outstanding partner.",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Director, Flux",
    content:
      "The crypto dashboard Muddsar built handles millions in daily volume with sub-second latency. Remarkable engineering.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Kim",
    role: "VP Engineering, Voyage",
    content:
      "Muddsar's AI integration work was phenomenal. The trip planner feels magical and users absolutely love it.",
    rating: 5,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Accessible Design Systems at Scale",
    category: "Design",
    readTime: "8 min read",
    excerpt:
      "How to create component libraries that are inclusive by default and maintainable across large teams.",
  },
  {
    id: 2,
    title: "React Server Components: A Practical Guide",
    category: "Engineering",
    readTime: "12 min read",
    excerpt:
      "Deep dive into RSC architecture, when to use them, and common pitfalls to avoid in production.",
  },
  {
    id: 3,
    title: "The Future of CSS: Tailwind v4 and Beyond",
    category: "CSS",
    readTime: "6 min read",
    excerpt:
      "Exploring the new engine, zero-runtime philosophy, and what it means for modern web styling.",
  },
  {
    id: 4,
    title: "Optimizing Core Web Vitals for E-Commerce",
    category: "Performance",
    readTime: "10 min read",
    excerpt:
      "Real-world techniques that increased our client's LCP by 40% and boosted conversions by 25%.",
  },
  {
    id: 5,
    title: "State Management in 2025: Beyond Redux",
    category: "Engineering",
    readTime: "9 min read",
    excerpt:
      "Comparing Zustand, Jotai, Valtio, and TanStack Store for modern React applications.",
  },
  {
    id: 6,
    title: "Designing for Dark Mode: A Complete Guide",
    category: "Design",
    readTime: "7 min read",
    excerpt:
      "From CSS custom properties to image optimization, everything you need for perfect dark mode UX.",
  },
];

export const blogCategories = [
  "All",
  "Engineering",
  "Design",
  "CSS",
  "Performance",
];
