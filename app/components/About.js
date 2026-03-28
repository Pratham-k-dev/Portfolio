'use client'
import { motion } from "framer-motion";
import SectionWrapper, { StaggerContainer, StaggerItem } from "./SectionWrapper";
import { personalInfo } from "../data/content";

const highlights = [
  {
    icon: "⭐",
    title: "CodeChef",
    rating: "3★ Rated",
    sub: "Rating: 1612",
    link: "https://www.codechef.com/users/cry_map_60",
    // Gradient colours for the card accent
    accent: "#FBBF24",          // amber
    accentDim: "rgba(251,191,36,0.08)",
    accentBorder: "rgba(251,191,36,0.2)",
    badge: "Competitor",
  },
  {
    icon: "⚔️",
    title: "Codeforces",
    rating: "Pupil",
    sub: "Max Rating: 1265",
    link: "https://codeforces.com/profile/Pratham_k314",
    accent: "#60A5FA",          // blue
    accentDim: "rgba(96,165,250,0.08)",
    accentBorder: "rgba(96,165,250,0.2)",
    badge: "Active",
  },
  {
    icon: "🧠",
    title: "LeetCode",
    rating: "200+ Problems",
    sub: "Solved across all difficulties",
    link: "https://leetcode.com/u/pratham_coder/",
    accent: "#34D399",          // green
    accentDim: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.2)",
    badge: "Consistent",
  },
];
export default function About() {
  return (
    <SectionWrapper id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-xs font-mono text-[#FBBF24] tracking-[0.25em] uppercase">
            02 / About
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[#FBBF24]/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-light text-[#F0EDE6] leading-tight"
            >
              A developer who
              <br />
              <em className="text-[#FBBF24] not-italic">loves the craft.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-4 text-[#9A9590] leading-relaxed"
            >
              {/* ← Replace with your actual bio paragraphs */}
              <p>{personalInfo.bio}</p>
              <p>
                I care deeply about developer experience, clean abstractions, and shipping
                products that users actually enjoy. I&apos;m always learning — currently exploring
                distributed systems and systems programming.
                {/* ← Replace this paragraph with what you're currently exploring */}
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { label: "Projects Shipped", value: "12+" },   // ← Update your stats
                { label: "Open Source PRs", value: "40+" },
                { label: "Languages", value: "5+" },
                { label: "Coffee / day", value: "∞" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-[rgba(240,237,230,0.07)] bg-[#141414]"
                >
                  <div className="font-display text-3xl font-light text-[#FBBF24]">{stat.value}</div>
                  <div className="text-xs text-[#5C5854] font-mono mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Highlight cards */}
          <StaggerContainer className="space-y-4" delay={0.15}>
            {highlights.map((h) => (
              <StaggerItem key={h.title}>
                <div
                  className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{
                    borderColor: h.accentBorder,
                    background: `linear-gradient(135deg, #181818 0%, #141414 100%)`,
                  }}
                >
                  {/* Ambient glow blob in corner */}
                  <div
                    className="absolute -top-6 -right-6 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-70"
                    style={{ background: h.accent }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${h.accent}60, transparent)`,
                    }}
                  />

                  <div className="relative flex items-start gap-4">
                    {/* Icon bubble */}
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                      style={{
                        background: h.accentDim,
                        border: `1px solid ${h.accentBorder}`,
                      }}
                    >
                      {h.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Title row */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3
                          className="font-body font-semibold text-[#F0EDE6] transition-colors duration-300"
                          style={{ color: undefined }}
                        >
                          {h.title}
                        </h3>
                        {/* Badge pill */}
                        <span
                          className="flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full tracking-widest"
                          style={{
                            background: h.accentDim,
                            color: h.accent,
                            border: `1px solid ${h.accentBorder}`,
                          }}
                        >
                          {h.badge}
                        </span>
                      </div>

                      {/* Rating — prominent */}
                      <p
                        className="text-lg font-display font-light leading-tight"
                        style={{ color: h.accent }}
                      >
                        {h.rating}
                      </p>

                      {/* Sub info */}
                      <p className="text-xs text-[#5C5854] mt-0.5 font-mono">{h.sub}</p>

                      {/* View Profile link */}
                      <a
                        href={h.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-xs font-mono text-[#5C5854] transition-all duration-300 group-hover:gap-2"
                        style={{ color: undefined }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = h.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#5C5854")}
                      >
                        View Profile
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Bottom stat bar */}
                  {/* <div
                    className="relative mt-5 pt-4"
                    style={{ borderTop: `1px solid ${h.accentBorder}` }}
                  >
                    <div className="h-1 rounded-full bg-[#1E1E1E] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: h.title === "LeetCode" ? "72%" : h.title === "CodeChef" ? "58%" : "44%",
                          background: `linear-gradient(90deg, ${h.accent}88, ${h.accent})`,
                        }}
                      />
                    </div>
                    <p className="text-[10px] font-mono text-[#3C3835] mt-1.5 tracking-widest">
                      PROGRESS
                    </p>
                  </div> */}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionWrapper>
  );
}
