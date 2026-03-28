'use client'
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { techStack } from "../data/content";

// Category color map
const categoryColors = {
  language: "#FBBF24",
  frontend: "#60A5FA",
  backend: "#34D399",
  tools: "#A78BFA",
};

// Map tech names to their devicon class names or CDN icon URLs
// Using devicons CDN: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/
const techIconMap = {
  // Languages
  "JavaScript":    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  "TypeScript":    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  "Python":        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  "C++":           { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  "C":             { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  "Java":          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  // Frontend
  "React":         { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  "Next.js":       { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  "Tailwind CSS":  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  "Framer Motion": { icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
  // Backend
  "Node.js":       { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  "Express":       { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  "RestAPI":       { icon: null }, // fallback to category dot
  "PostgreSQL":    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  "Redis":         { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  "GraphQL":       { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  // Tools
  "Docker":        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  "Git":           { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  "AWS":           { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  "Linux":         { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
};

function TechBadge({ tech }) {
  const color = categoryColors[tech.category] || "#9A9590";
  const iconData = techIconMap[tech.name];
  const iconUrl = iconData?.icon;
  const shouldInvert = iconData?.invert;

  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-full border bg-[#141414] mx-2 select-none"
      style={{
        borderColor: `${color}22`,
        background: `linear-gradient(135deg, #141414, #181818)`,
      }}
    >
      {/* Icon or fallback dot */}
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={tech.name}
          width={18}
          height={18}
          className="flex-shrink-0 object-contain"
          style={shouldInvert ? { filter: "invert(1)" } : {}}
          loading="lazy"
        />
      ) : (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: color, boxShadow: `0 0 6px ${color}66` }}
        />
      )}
      <span className="text-sm font-mono font-medium text-[#F0EDE6] whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

// Single infinite carousel row
function CarouselRow({ items, direction = 1, speed = 35 }) {
  const doubled = [...items, ...items];
  const totalWidth = items.length * 175;

  return (
    <div className="overflow-hidden py-2 relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0E0E0E] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex tech-track"
        animate={{ x: direction > 0 ? [0, -totalWidth] : [-totalWidth, 0] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {doubled.map((tech, i) => (
          <TechBadge key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStackSection() {
  const half = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, half);
  const row2 = techStack.slice(half);

  return (
    <SectionWrapper id="tech" className="py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-xs font-mono text-[#FBBF24] tracking-[0.25em] uppercase">
            04 / Tech Stack
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[#FBBF24]/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#F0EDE6]">
            Tools of the trade.
          </h2>
          <p className="text-[#9A9590] mt-3 text-sm">
            Technologies I work with daily.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: color }}
              />
              <span className="text-xs font-mono text-[#5C5854] capitalize tracking-wide">{cat}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Carousels — full width, no horizontal padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-3"
      >
        <CarouselRow items={row1} direction={1} speed={40} />
        <CarouselRow items={row2} direction={-1} speed={50} />
      </motion.div>

      {/* Hover hint */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        <p className="text-[10px] font-mono text-[#3C3835] tracking-widest text-center">
          HOVER TO PAUSE
        </p>
      </div>
    </SectionWrapper>
  );
}