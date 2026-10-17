export const profile = {
  firstName: "Mukeshkumar",
  fullName: "Mukeshkumar M",
  role: "AI/ML Engineer",
  tagline: "Applied AI, Embedded & Full-Stack",
  location: "Chennai, Tamil Nadu, India",
  email: "mukeshkumar.cse24@gmail.com",
  github: "https://github.com/mukesh-dev-git",
  linkedin: "https://www.linkedin.com/in/mukeshkumar-m-582a07326",
  photo: { src: "/myself.png", cutout: false },
  heroQuote:
    "Researches before building, runs the experiments, keeps what moves a measured result.",
  summary:
    "Pre-final-year CSE student (2028) working across ML, embedded systems and full-stack software. I pick up new technologies fast and research before building. I founded Chillflare Innovations, led the SIH 2025 winning team, and was POC of an image-classification team at the HAC’KP 2026 finals.",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export type Service = { title: string; blurb: string; stack: string[] };

export const services: Service[] = [
  {
    title: "AI / ML Engineering",
    blurb: "Retrieval, ranking and vision pipelines measured against real leaderboards.",
    stack: ["PyTorch", "LightGBM", "Transformers", "dense retrieval", "OpenCV", "SageMaker"],
  },
  {
    title: "LLMs & Agents",
    blurb: "Tool-calling agents and on-device inference that keeps data local.",
    stack: ["LangChain", "llama.cpp", "NPU inference", "Groq", "Amazon Bedrock", "MCP"],
  },
  {
    title: "Embedded & IoT",
    blurb: "Firmware for sensing, control and long-range radio on real hardware.",
    stack: ["STM32", "Embedded C", "ESP32", "LoRa / LoRaWAN", "MQTT", "Sensors"],
  },
  {
    title: "Full-Stack & Cloud",
    blurb: "Web apps and APIs from database to deployment.",
    stack: ["Next.js", "React", "Node.js", "FastAPI", "MongoDB", "AWS CDK"],
  },
];

export type Job = { org: string; period: string; role: string; detail: string };

export const experience: Job[] = [
  {
    org: "Chillflare Innovations",
    period: "2026 – Present",
    role: "Founder",
    detail:
      "Lead a 3-person team shipping ChillFlare, an active cooling and heating vessel built with TANCAM (TIDCO × Dassault Systèmes); built its ambient-relative control algorithm.",
  },
  {
    org: "IQMaths Technologies, Chennai",
    period: "Jun 2026 – Jul 2026",
    role: "Software Engineer Intern",
    detail:
      "Shipped LMS features for Malaysian and USA clients; led the dev team on task breakdown, code reviews and delivery.",
  },
  {
    org: "St. Joseph’s College of Engineering",
    period: "2024 – 2028 (expected)",
    role: "B.E. Computer Science",
    detail: "Pre-final-year CSE. Higher secondary at Velammal Vidyalaya, Chennai: 92% in CBSE Class XII.",
  },
];

export const stats = [
  { value: 88, prefix: "#", suffix: "", label: "of 32,000+ teams, Amazon ML Challenge 2026" },
  { value: 2025, prefix: "", suffix: "", label: "Smart India Hackathon winner, team lead" },
];

export type ProjectCategory = "AI/ML" | "Embedded/IoT" | "Full-Stack" | "Hackathon";

export type Project = {
  title: string;
  short: string;
  event?: string;
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  link?: string;
  accent: [string, string];
};

export const projects: Project[] = [
  {
    title: "Business Entity Resolution",
    short: "Entity Resolution",
    event: "Amazon ML Challenge 2026 · Rank 88 of 32,000+ teams",
    description:
      "A 12-stage pipeline matching 1.7M reference businesses to ~10M noisy records across the US, India and France: 5-channel blocking, a fine-tuned multilingual-e5 retriever, a two-pass LightGBM re-ranker and 4 mDeBERTa-v3 cross-encoders. Macro F0.5 rose from 0.939 to 0.9898, on SageMaker Pipelines.",
    tags: ["Python", "PyTorch", "LightGBM", "AWS SageMaker"],
    categories: ["AI/ML", "Hackathon"],
    accent: ["#232F3E", "#FF9900"],
  },
  {
    title: "iQForge",
    short: "iQForge",
    event: "iQOO Hackathon 2026",
    description:
      "An Android app that reviews pull requests, diagnoses failed CI runs and ships code using Qwen2.5-Coder-1.5B on the iQOO 15’s Hexagon NPU, so source code never leaves the phone.",
    tags: ["Kotlin", "llama.cpp", "On-device NPU"],
    categories: ["AI/ML", "Hackathon"],
    link: "https://github.com/mukesh-dev-git/iqforge",
    accent: ["#0F172A", "#FD853A"],
  },
  {
    title: "Kerala Image Location",
    short: "Kerala Image Location",
    event: "HAC’KP 2026 Finals · Kerala Police Cyberdome · POC",
    description:
      "An offline MCP tool that tells investigators whether a photo was taken in Kerala, with evidence: OWLv2 detection, EasyOCR and a SigLIP + logistic-regression classifier (CV AUC 0.91). 88.1% Kerala precision on a locked 200-image test, ~0.7 s per image.",
    tags: ["Python", "SigLIP", "OWLv2", "MCP"],
    categories: ["AI/ML", "Hackathon"],
    accent: ["#14532D", "#4ADE80"],
  },
  {
    title: "Raksha-Drishti",
    short: "Raksha-Drishti",
    event: "KSP Datathon 2026",
    description:
      "A statewide crime-records intelligence portal for Karnataka SCRB: entity fusion, AI-assisted contradiction detection, geospatial hotspots and a grounded ask-anything assistant.",
    tags: ["Next.js 15", "Zoho Catalyst", "LLM"],
    categories: ["AI/ML", "Full-Stack", "Hackathon"],
    link: "https://github.com/mukesh-dev-git/Raksha-Drishti-v2",
    accent: ["#1E1B4B", "#818CF8"],
  },
  {
    title: "ChillFlare",
    short: "ChillFlare",
    event: "Chillflare Innovations",
    description:
      "An active cooling and heating vessel. Ambient-relative control algorithm, thermistor sensing and PWM fan control on ESP32 and STM32.",
    tags: ["ESP32", "STM32", "Control", "Hardware"],
    categories: ["Embedded/IoT"],
    accent: ["#0C4A6E", "#38BDF8"],
  },
  {
    title: "PowerMET Smart Meter",
    short: "PowerMET",
    event: "Powerenv Technologies",
    description:
      "AC power meter on STM32 measuring RMS voltage and current, sending readings over 433 MHz LoRa to an ESP32 gateway and a React dashboard; continued as a LoRaWAN energy-meter design.",
    tags: ["STM32", "LoRa", "ESP32", "React"],
    categories: ["Embedded/IoT", "Full-Stack"],
    link: "https://github.com/mukesh-dev-git/SM-POC-Frontend",
    accent: ["#422006", "#EAB308"],
  },
  {
    title: "PulseCartAI",
    short: "PulseCartAI",
    description: "An AI-assisted commerce platform.",
    tags: ["JavaScript", "AI"],
    categories: ["Full-Stack"],
    link: "https://github.com/mukesh-dev-git/PulseCartAI",
    accent: ["#3B0764", "#E879F9"],
  },
  {
    title: "3D Mesh Watermarking",
    short: "3D Mesh WM",
    description:
      "Hiding colour and grayscale images inside a 3D mesh with GMM and GraphSAGE vertex clustering, evaluated against rotation, scaling, noise, remeshing and cropping attacks.",
    tags: ["PyTorch Geometric", "scikit-learn", "trimesh"],
    categories: ["AI/ML"],
    link: "https://github.com/mukesh-dev-git/3DMESH_WM",
    accent: ["#1E1B4B", "#14B8A6"],
  },
];

export type Achievement = { title: string; detail: string; image?: string };

export const achievements: Achievement[] = [
  { title: "Winner, Smart India Hackathon 2025", detail: "Team lead of the winning team, AXEFORTUNE.", image: "/hackathon/sih-winner-2025.jpeg" },
  { title: "Rank 88, Amazon ML Challenge 2026", detail: "Out of 32,000+ teams, business entity resolution." },
  { title: "Finalist, HAC’KP 2026", detail: "Kerala Police Cyberdome; awarded at the c0c0n 2026 conference." },
  { title: "Winner, YESummit 2026", detail: "Startup pitching, Rs 25,000 prize." },
  { title: "Top 12, TN Police Hackathon", detail: "Cyber Wing track.", image: "/carosal/tamilnadu police haathon.png" },
  { title: "National Finalist, Vertex Innovate", detail: "National-level hackathon finals.", image: "/hackathon/nation finalist-vertex-innovate.jpeg" },
  { title: "International Top 100, HackHazard", detail: "Global online hackathon.", image: "/hackathon/internation-top 100-hackhazard.jpeg" },
  { title: "3rd Prize, SRM Datakon", detail: "Data hackathon, SRM.", image: "/hackathon/3rd prize=srm-datakon.jpeg" },
  { title: "2nd Prize, Ideathon", detail: "St. Joseph’s College of Engineering.", image: "/hackathon/2nd-prize-ideathon-st.joseph college of engineering.jpeg" },
];

export const marquee = [
  "Machine Learning",
  "LLM Agents",
  "Computer Vision",
  "Embedded Systems",
  "LoRa / IoT",
  "Full-Stack",
  "AWS SageMaker",
];

export type Course = { title: string; file?: string };
export type Cert = { title: string; issuer: string; file: string; kind?: string; date?: string; verify?: string; courses?: Course[] };

export const certifications: Cert[] = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera · Meta",
    kind: "Professional Certificate",
    date: "Mar 2026",
    file: "/coursera/meta front-end developer professional certificate.pdf",
    verify: "https://coursera.org/verify/professional-cert/WSZY2108I7D6",
    courses: [
      { title: "Introduction to Front-End Development", file: "/coursera/introduction to front end development.pdf" },
      { title: "Programming with JavaScript", file: "/coursera/programming with javascript.pdf" },
      { title: "Version Control", file: "/coursera/version control.pdf" },
      { title: "HTML and CSS in depth" },
      { title: "React Basics" },
      { title: "Advanced React" },
      { title: "Principles of UX/UI Design" },
      { title: "Front-End Developer Capstone" },
      { title: "Coding Interview Preparation" },
    ],
  },
  { title: "Front-End Developer", issuer: "Infosys Springboard", file: "/springboard/mukeshkumar_frontendDeveloper_certificate.pdf" },
  { title: "Java Programming Fundamentals", issuer: "Infosys Springboard", file: "/springboard/java programming fundamentals.pdf" },
  { title: "Networking & Web Technology", issuer: "Infosys Springboard", file: "/springboard/mukeshkumar_networkingAndWebTechnology_certificate.pdf" },
  { title: "JavaScript", issuer: "Infosys Springboard", file: "/springboard/mukeshkumar_javascript_certificate.pdf" },
  { title: "HTML5", issuer: "Infosys Springboard", file: "/springboard/MukeshKumar_HTML5_certificate.pdf" },
  { title: "CSS", issuer: "Infosys Springboard", file: "/springboard/mukeshkumar_css_certificate.pdf" },
];
