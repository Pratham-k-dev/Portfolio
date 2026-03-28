'use client'
import { motion } from "framer-motion";
import SectionWrapper, { StaggerContainer, StaggerItem } from "./SectionWrapper";
import { personalInfo } from "../data/content";

function ContactLink({ href, icon, label, sub }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group flex items-center gap-4 p-5 rounded-2xl border border-[rgba(240,237,230,0.07)] bg-[#141414] hover:border-[rgba(251,191,36,0.2)] hover:bg-[#181818] transition-all duration-300"
    >
      <span className="text-2xl"><img src={icon}/></span>
      <div className="flex-1">
        <div className="font-medium text-[#F0EDE6] group-hover:text-[#FBBF24] transition-colors text-sm">
          {label}
        </div>
        <div className="text-xs text-[#5C5854] font-mono mt-0.5">{sub}</div>
      </div>
      <span className="text-[#5C5854] group-hover:text-[#FBBF24] group-hover:translate-x-1 transition-all duration-300">
        →
      </span>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-28">
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
            05 / Contact
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[#FBBF24]/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: CTA */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-light text-[#F0EDE6] leading-tight"
            >
              Let&apos;s build
              <br />
              <em className="text-[#FBBF24] not-italic">something great.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#9A9590] leading-relaxed text-sm max-w-sm"
            >
              Whether you have a project in mind, an opportunity to discuss, or just want
              to connect — my inbox is always open.
              {/* ← Customize this message */}
            </motion.p>

            <motion.a
              href={`${personalInfo.linkedin}`}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FBBF24] text-[#0E0E0E] font-semibold text-sm rounded-full hover:bg-[#F59E0B] transition-colors duration-300 hover:shadow-[0_0_32px_rgba(251,191,36,0.3)]"
            >
              Lets Connect
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </motion.a>
          </div>

          {/* Right: Links */}
          <StaggerContainer className="space-y-3" delay={0.2}>
            <StaggerItem>
              <ContactLink
                href={`${personalInfo.email}`}
                icon="/mail.svg"
                label="Email"
                sub={personalInfo.email}
              />
            </StaggerItem>
            <StaggerItem>
              <ContactLink
                href={personalInfo.github}
                icon="/github.svg"
                label="GitHub"
                sub={personalInfo.github.replace("https://", "")}
              />
            </StaggerItem>
            <StaggerItem>
              <ContactLink
                href={personalInfo.linkedin}
                icon="/Lin.svg"
                label="LinkedIn"
                sub={personalInfo.linkedin.replace("https://", "")}
              />
            </StaggerItem>
            {personalInfo.twitter && (
              <StaggerItem>
                <ContactLink
                  href={personalInfo.twitter}
                  icon=""
                  label="Twitter / X"
                  sub={personalInfo.twitter.replace("https://", "")}
                />
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-[rgba(240,237,230,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-xs font-mono text-[#3C3835] tracking-widest">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & ♥
          </span>
          <span className="text-xs font-mono text-[#3C3835] tracking-widest">
            {personalInfo.location}
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
