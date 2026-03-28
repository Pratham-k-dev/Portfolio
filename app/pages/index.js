import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import { personalInfo } from "../data/content";

export default function Index() {
  return (
    <>
      <Head>
        {/* ← Update these meta tags with your info */}
        <title>{personalInfo.name} — Portfolio</title>
        <meta
          name="description"
          content={`${personalInfo.name} — ${personalInfo.tagline}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} — Portfolio`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
      </Head>

      {/* Film grain overlay */}
      <div className="grain" aria-hidden />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
