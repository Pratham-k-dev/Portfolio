'use client'
import { motion } from "framer-motion";

// Tag badge
function Tag({ label }) {
  return (
    <span className="px-2.5 py-0.5 text-xs font-mono text-[#9A9590] border border-[rgba(240,237,230,0.1)] rounded-full bg-[rgba(240,237,230,0.03)]">
      {label}
    </span>
  );
}

// GitHub icon
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

// External link icon
function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  );
}

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-2xl border border-[rgba(240,237,230,0.08)] bg-[#141414] overflow-hidden hover:border-[rgba(251,191,36,0.18)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-400"
    >
      {/* Image / preview area */}
      <div className="relative h-44 bg-[#0E0E0E] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // Placeholder: stylized gradient with project initials
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#181818] via-[#0E0E0E] to-[#141414]" />
            <span className="relative font-display text-5xl font-light text-[rgba(251,191,36,0.12)] select-none tracking-widest">
              {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#FBBF24]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-body font-semibold text-[#F0EDE6] group-hover:text-[#FBBF24] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-[#9A9590] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-[rgba(240,237,230,0.06)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#9A9590] hover:text-[#F0EDE6] transition-colors duration-200"
            >
              <GithubIcon />
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#9A9590] hover:text-[#FBBF24] transition-colors duration-200 ml-auto"
            >
              Live <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Featured project — larger card with split layout
export function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-[rgba(251,191,36,0.15)] bg-[#141414] overflow-hidden hover:border-[rgba(251,191,36,0.3)] transition-all duration-400"
    >
      {/* Glow accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBBF24]/30 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Visual side */}
        <div className="relative h-64 lg:h-full min-h-[280px] bg-[#0E0E0E] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1600] via-[#0E0E0E] to-[#0E0E0E]" />
              <span className="relative font-display text-8xl font-light text-[rgba(251,191,36,0.08)] select-none tracking-widest">
                {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        {/* Text side */}
        <div className="p-8 lg:p-10 flex flex-col justify-center gap-5">
          <div>
            <span className="text-xs font-mono text-[#FBBF24] tracking-widest">FEATURED PROJECT</span>
            <h3 className="font-display text-3xl font-light text-[#F0EDE6] mt-2">{project.title}</h3>
          </div>

          <p className="text-[#9A9590] leading-relaxed text-sm">
            {project.featuredDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => <Tag key={t} label={t} />)}
          </div>

          <div className="flex items-center gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#9A9590] hover:text-[#F0EDE6] transition-colors font-medium"
              >
                <GithubIcon />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#FBBF24] hover:text-[#F59E0B] transition-colors font-medium"
              >
                Live Demo <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
