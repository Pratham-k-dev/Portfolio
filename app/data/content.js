// ============================================================
// CONTENT CONFIGURATION — Edit this file to personalize your portfolio
// ============================================================

export const personalInfo = {
  name: "Pratham Kulkarni",              // ← Your full name
  tagline: "Building things for the web.",
  location: "Pune, India",      // ← Your city/country
  email: "you@email.com",         // ← Your email
  github: "https://github.com/Pratham-k-dev",   // ← GitHub URL
  linkedin: "https://www.linkedin.com/in/pratham-kulkarni-5253a8335/", // ← LinkedIn URL
  
  resumeUrl: "/resume.pdf",       // ← Drop resume.pdf in /public/
  bio: "I'm a passionate developer who loves crafting elegant solutions to complex problems. I specialize in building high-performance applications with clean, maintainable code. When I'm not coding, I'm competitive programming or exploring new technologies.",
  // ↑ Replace with your actual bio (2–3 sentences)
};

export const typingRoles = [
  "Full Stack Engineer",
  "Competitive Programmer",
  "React Developer",
  "Problem Solver",
  // ← Add or remove roles as you like
];

export const projects = [
  {
    id: 1,
    title: "CareerHex",           // ← Replace with your project name
    description: "A full-stack web app that does something amazing with real-time data and seamless UX.",
    image: null,                       // ← Path like "/projects/alpha.png" once you add images
    tags: ["Next.js", "PostgreSQL", "OpenAi Api", "Tailwind", "GitHub Api", "LeetCode GraphQl", "OAuth"],
    github: "https://github.com/yourhandle/project",
    live: "https://yourproject.live",
    featured: true,
    featuredDescription: "A developer career readiness analyzer, generates AI based inisghts, Recommendations, Roadmap, by evaluating GitHub activity, LeetCode stats, and self-reported data",
    // ↑ Longer description for the featured card
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An intelligent tool powered by AI/ML that automates repetitive tasks.",
    image: null,
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    github: "https://github.com/yourhandle/project-beta",
    live: null,
    featured: false,
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A mobile-first progressive web app for tracking personal goals.",
    image: null,
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourhandle/project-gamma",
    live: "https://gamma.live",
    featured: false,
  },
  {
    id: 4,
    title: "Project Delta",
    description: "CLI tooling and automation scripts for developer productivity.",
    image: null,
    tags: ["Go", "CLI", "Shell"],
    github: "https://github.com/yourhandle/project-delta",
    live: null,
    featured: false,
  },
  // {
  //   id: 5,
  //   title: "Project Epsilon",
  //   description: "A real-time collaborative editor with conflict resolution.",
  //   image: null,
  //   tags: ["WebSockets", "CRDTs", "TypeScript"],
  //   github: "https://github.com/yourhandle/project-epsilon",
  //   live: "https://epsilon.live",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "Project Zeta",
  //   description: "Competitive programming solutions and algorithmic visualizations.",
  //   image: null,
  //   tags: ["C++", "Algorithms", "React"],
  //   github: "https://github.com/yourhandle/project-zeta",
  //   live: null,
  //   featured: false,
  // },
];

export const techStack = [
  // Languages
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "C++", category: "language" },
  { name: "C", category: "language" },
  { name: "Java", category: "language" },
  
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "RestAPI", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "GraphQL", category: "backend" },
  // Tools
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Linux", category: "tools" },
  
  // ← Add/remove technologies as needed
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];
