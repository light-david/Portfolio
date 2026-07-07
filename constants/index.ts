// ─── Navigation ────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "GitHub",     href: "#github"     },
  { label: "Contact",    href: "#contact"    },
];

// ─── Hero Stats ─────────────────────────────────────
export const HERO_STATS = [
  { value: 7,  suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Shipped"  },
  { value: 4,  suffix: "",  label: "Core Domains"       },
];

// ─── Skills ─────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    id:    "languages",
    title: "Languages",
    emoji: "💻",
    accent: "#8b5cf6",
    skills: [
      { name: "Python",     level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Go",         level: 72 },
      { name: "SQL",        level: 88 },
      { name: "Bash",       level: 85 },
    ],
    pills: ["asyncio", "type hints", "scripting", "OOP"],
  },
  {
    id:    "web",
    title: "Web & APIs",
    emoji: "🌐",
    accent: "#06b6d4",
    skills: [
      { name: "React",    level: 85 },
      { name: "Node.js",  level: 80 },
      { name: "FastAPI",  level: 82 },
      { name: "Django",   level: 75 },
      { name: "REST",     level: 90 },
      { name: "GraphQL",  level: 72 },
    ],
    pills: ["JWT", "WebSockets", "OpenAPI", "OAuth2"],
  },
  {
    id:    "data",
    title: "Data & ML",
    emoji: "🧠",
    accent: "#e879f9",
    skills: [
      { name: "Pandas",        level: 92 },
      { name: "Apache Spark",  level: 80 },
      { name: "TensorFlow",    level: 78 },
      { name: "Scikit-Learn",  level: 82 },
      { name: "Airflow",       level: 78 },
      { name: "dbt",           level: 75 },
    ],
    pills: ["NumPy", "BigQuery", "ETL", "Kafka"],
  },
  {
    id:    "cloud",
    title: "Cloud & DevOps",
    emoji: "☁️",
    accent: "#34d399",
    skills: [
      { name: "AWS",        level: 85 },
      { name: "Docker",     level: 88 },
      { name: "Kubernetes", level: 80 },
      { name: "Terraform",  level: 82 },
      { name: "GCP",        level: 70 },
      { name: "Azure",      level: 72 },
    ],
    pills: ["Helm", "CI/CD", "GitHub Actions", "Linux"],
  },
];

// ─── Projects ───────────────────────────────────────
export const PROJECTS = [
  {
    id: 1, category: "mine",
    title: "Cloud Data Pipeline Platform",
    description:
      "End-to-end ELT pipeline orchestrated with Apache Airflow, transforming 50M+ raw events/day into analytics-ready tables in BigQuery using dbt, with automated data quality checks.",
    tags: ["Python", "Airflow", "dbt", "BigQuery", "Terraform"],
    github: "https://github.com/aroroted-ops",
    demo: null,
    accent: "#8b5cf6",
  },
  {
    id: 2, category: "mine",
    title: "ML Model Serving API",
    description:
      "High-throughput FastAPI service wrapping scikit-learn & TensorFlow models with A/B traffic splitting, auto-scaling on Kubernetes, and Prometheus metrics.",
    tags: ["FastAPI", "Python", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/aroroted-ops",
    demo: null,
    accent: "#06b6d4",
  },
  {
    id: 3, category: "mine",
    title: "Real-time Analytics Dashboard",
    description:
      "React + WebSocket dashboard consuming Kafka streams; server-side aggregations in Go, deployed via GitHub Actions with zero-downtime blue-green strategy.",
    tags: ["React", "Go", "Kafka", "WebSockets", "GCP"],
    github: "https://github.com/light-david",
    demo: null,
    accent: "#e879f9",
  },
  {
    id: 4, category: "mine",
    title: "DevOps Infrastructure Kit",
    description:
      "Modular Terraform library covering VPC, EKS clusters, RDS, and IAM with sensible defaults; used across 3 production environments.",
    tags: ["Terraform", "AWS", "EKS", "RDS", "Bash"],
    github: "https://github.com/aroroted-ops",
    demo: null,
    accent: "#34d399",
  },
  {
    id: 5, category: "explored",
    title: "Vector Search Engine",
    description:
      "Explored semantic search with pgvector and OpenAI embeddings; built a RAG pipeline for internal documentation Q&A.",
    tags: ["Python", "PostgreSQL", "pgvector", "OpenAI"],
    github: "https://github.com/light-david",
    demo: null,
    accent: "#f59e0b",
  },
  {
    id: 6, category: "contributed",
    title: "Open Source ETL Framework",
    description:
      "Contributed connector plugins and documentation improvements to a popular open-source Python ETL library used by 10K+ developers.",
    tags: ["Python", "Open Source", "ETL", "Docs"],
    github: "https://github.com/aroroted-ops",
    demo: null,
    accent: "#f97316",
  },
];

// ─── Experience ─────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 1,
    role: "Senior Data Engineer",
    company: "Tech Company",
    period: "2022 – Present",
    location: "Remote · Lagos, Nigeria",
    description:
      "Design and maintain cloud-native data pipelines processing 100M+ events/day on AWS. Lead a team of 4 engineers; reduced pipeline latency by 60% through architectural optimisations.",
    tags: ["AWS", "Python", "Airflow", "dbt", "Terraform"],
    accent: "#8b5cf6",
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Software Studio",
    period: "2020 – 2022",
    location: "Lagos, Nigeria",
    description:
      "Built customer-facing React applications backed by FastAPI micro-services; introduced TypeScript across the front-end and cut production bugs by 40%.",
    tags: ["React", "FastAPI", "TypeScript", "Docker", "PostgreSQL"],
    accent: "#06b6d4",
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "Analytics Consultancy",
    period: "2018 – 2020",
    location: "Lagos, Nigeria",
    description:
      "Delivered BI dashboards in Tableau and Power BI for clients across FMCG, fintech, and telco. Automated reporting workflows in Python, saving 20+ analyst-hours per week.",
    tags: ["Python", "SQL", "Tableau", "Power BI", "Excel"],
    accent: "#e879f9",
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Startup",
    period: "2017 – 2018",
    location: "Lagos, Nigeria",
    description:
      "Developed REST APIs in Django and maintained PostgreSQL databases for a B2B SaaS product; wrote integration tests and participated in on-call rotation.",
    tags: ["Django", "PostgreSQL", "Python", "REST APIs"],
    accent: "#34d399",
  },
];

// ─── GitHub Profiles ────────────────────────────────
export const GITHUB_PROFILES = [
  {
    username: "aroroted-ops",
    label:    "Ops & Cloud",
    bio:      "Cloud infrastructure, DevOps tooling, Terraform modules, and data pipeline configurations.",
    url:      "https://github.com/aroroted-ops",
    accent:   "#8b5cf6",
    repos: [
      { name: "infra-terraform-kit",   desc: "Modular Terraform for AWS/GCP",          stars: 24 },
      { name: "k8s-data-platform",     desc: "Kubernetes data platform blueprints",     stars: 18 },
      { name: "airflow-dag-library",   desc: "Production-ready Airflow DAG collection", stars: 31 },
      { name: "devops-scripts",        desc: "Bash & Python ops automation scripts",    stars: 12 },
    ],
  },
  {
    username: "light-david",
    label:    "Dev & Projects",
    bio:      "Full-stack apps, ML experiments, open-source contributions, and personal projects.",
    url:      "https://github.com/light-david",
    accent:   "#06b6d4",
    repos: [
      { name: "ml-model-api",      desc: "FastAPI model serving with A/B testing",       stars: 42 },
      { name: "realtime-dashboard",desc: "React + Kafka real-time analytics UI",         stars: 37 },
      { name: "vector-search-rag", desc: "RAG pipeline with pgvector + OpenAI",          stars: 29 },
      { name: "portfolio",         desc: "This portfolio — Next.js 14 + Three.js",       stars: 15 },
    ],
  },
];

// ─── FAQ ────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: "Are you available for freelance or contract work?",
    a: "Yes — I take on select projects that align with my expertise in data engineering, cloud infrastructure, and full-stack development. Reach out with details and we can explore fit.",
  },
  {
    q: "What is your preferred tech stack?",
    a: "On the backend I reach for Python (FastAPI / Django) or Go; cloud-side I lean AWS but am comfortable on GCP and Azure. For front-end work I use React with TypeScript and Tailwind.",
  },
  {
    q: "How do I best reach you?",
    a: "Email is best — primary for professional enquiries, secondary for dev-related outreach. LinkedIn also works well for a more formal introduction. I typically respond within 24 hours on business days.",
  },
  {
    q: "Do you offer consulting or mentorship?",
    a: "Yes, on a case-by-case basis. I enjoy mentoring developers getting into cloud or data engineering. For consulting, I take short-to-medium engagements where I can make a meaningful contribution.",
  },
  {
    q: "Can you work with international clients and teams?",
    a: "Absolutely. I have extensive experience collaborating with distributed, international teams across multiple time zones. Async-first workflows are second nature to me.",
  },
];

// ─── Social links ────────────────────────────────────
export const SOCIALS = [
  { label: "GitHub (Ops)",   href: "https://github.com/aroroted-ops",                         icon: "github"   },
  { label: "GitHub (Dev)",   href: "https://github.com/light-david",                          icon: "github"   },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/david-arorote",               icon: "linkedin" },
];
