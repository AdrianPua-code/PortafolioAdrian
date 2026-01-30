"use client";

import { useState } from "react";
import type { Language } from "@/lib/data";
import { portfolioData } from "@/lib/data";

import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [lang, setLang] = useState<Language>("es");
  const data = portfolioData[lang];

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} navLinks={data.navLinks} />
      <main className="flex-grow">
        <HeroSection data={data.hero} />
        <AboutSection data={data.about} />
        <ExperienceSection data={data.experience} />
        <SkillsSection data={data.skills} />
        <ProjectsSection data={data.projects} />
        <CertificationsSection data={data.certifications} />
        <ContactSection data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
}
