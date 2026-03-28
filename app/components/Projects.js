'use client'
import { motion } from "framer-motion";
import SectionWrapper, { StaggerContainer, StaggerItem } from "./SectionWrapper";
import ProjectCard, { FeaturedProject } from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="py-28">
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
            03 / Projects
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
            Things I&apos;ve built.
          </h2>
          <p className="text-[#9A9590] mt-3 max-w-lg text-sm leading-relaxed">
            A selection of projects ranging from full-stack applications to developer tools.
            {/* ← Customize this subtitle */}
          </p>
        </motion.div>

        {/* Featured project */}
        {featuredProject && (
          <div className="mb-12">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Grid of other projects */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          delay={0.1}
        >
          {otherProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
