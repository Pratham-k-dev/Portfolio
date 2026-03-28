'use client'
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo, typingRoles } from "../data/content";


// Typing / backspace hook
function useTypingAnimation(words, typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

// Profile image placeholder with tilt on mouse move
function ProfileCard() {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto"
    >
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-2xl bg-amber-400/10 blur-2xl scale-110 pointer-events-none" />

      {/* Image frame */}
      <div className="relative w-full h-full rounded-full border border-[rgba(251,191,36,0.2)] overflow-hidden bg-[#181818]">
        {/* ↓ Replace this div with an <img> tag pointing to your photo */}
        <img src="/myimg.jpeg"className="relative -top-15 w-[105%]"/>{/*image hereee*/}

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FBBF24]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#FBBF24]/10 to-transparent" />
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute -bottom-4 -right-4 bg-[#1E1E1E] border border-[rgba(251,191,36,0.25)] rounded-xl px-4 py-2 shadow-xl"
      >
        <span className="text-xs font-mono text-[#FBBF24] tracking-widest">AVAILABLE</span>
      </motion.div>

      {/* Floating stat */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
        className="absolute -top-4 -left-4 bg-[#1E1E1E] border border-[rgba(240,237,230,0.1)] rounded-xl px-4 py-2 shadow-xl"
      >
        <span className="text-xs font-mono text-[#9A9590] tracking-wider">
          {/* ← Replace with your years of experience or another stat */}
          2+ yrs
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const typedText = useTypingAnimation(typingRoles);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,237,230,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,230,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] rounded-full bg-[#FBBF24]/4 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-[#FBBF24]/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Greeting chip */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(251,191,36,0.2)] bg-[rgba(251,191,36,0.05)] text-[#FBBF24] text-xs font-mono tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
                HELLO, WORLD
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-2xl sm:text-6xl lg:text-6xl font-light leading-[1.05] tracking-tight text-[#F0EDE6]"
            >
              {/* ← Replace "Your Name" — it reads from data/content.js */}
              {personalInfo.name}
            </motion.h1>

            {/* Typing role */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="font-mono text-lg sm:text-xl text-[#FBBF24]">
                {typedText}
              </span>
              <span className="cursor-blink inline-block w-0.5 h-5 bg-[#FBBF24]" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base text-[#9A9590] leading-relaxed max-w-md"
            >
              {/* ← Replace with your short bio */}
              {personalInfo.bio.split(". ").slice(0, 2).join(". ") + "."}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-6 py-3 bg-[#FBBF24] text-[#0E0E0E] font-medium text-sm rounded-full hover:bg-[#F59E0B] transition-all duration-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.35)] active:scale-95"
              >
                View Projects
                <span className="inline-block ml-1.5 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </button>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 border border-[rgba(240,237,230,0.15)] text-[#F0EDE6] font-medium text-sm rounded-full hover:border-[rgba(240,237,230,0.3)] hover:bg-[rgba(240,237,230,0.04)] transition-all duration-300 active:scale-95"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Location */}
            <motion.p
              variants={itemVariants}
              className="text-xs font-mono text-[#5C5854] tracking-widest"
            >
              📍 {personalInfo.location}
            </motion.p>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileCard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-[#5C5854] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#5C5854] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
