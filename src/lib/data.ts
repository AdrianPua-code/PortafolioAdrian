import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { LucideIcon } from 'lucide-react';
import { Code, Server, Smartphone, Cloud, BrainCircuit, Paintbrush, Award, Heart, Star, Gem, Medal, Linkedin, Github, MessageCircle, Mail } from 'lucide-react';

export type Language = "es" | "en";

export type NavLink = {
  id: string;
  label: string;
};

export type Skill = {
  name: string;
  level: number; // 1-5
  icon: React.ComponentType<{ className?: string }>;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageHint: string;
  link?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type ContactPlayer = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  actionText: string;
  buttonText: string;
};


type PortfolioContent = {
  navLinks: NavLink[];
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    id: string;
    title: string;
    bio: string;
    name: string;
    imageUrl: string;
    imageHint: string;
    cvButtonText: string;
  };
  experience: {
    id: string;
    title: string;
    timeline: ExperienceItem[];
  };
  skills: {
    id: string;
    title: string;
    description: string;
    categories: SkillCategory[];
    powerupIcons: React.ComponentType<{ className?: string }>[];
  };
  projects: {
    id: string;
    title: string;
    items: Project[];
  };
  certifications: {
    id: string;
    title: string;
    items: Certification[];
  };
  contact: {
    id: string;
    title: string;
    subtitle: string;
    selectPlayer: string;
    players: ContactPlayer[];
    emailText: string;
    copyButtonText: string;
    copiedButtonText: string;
  };
  footer: {
    copyright: string;
  };
};

const portfolioDataContent: { [key in Language]: PortfolioContent } = {
  es: {
    navLinks: [
      { id: "about", label: "Sobre Mí" },
      { id: "experience", label: "Experiencia" },
      { id: "skills", label: "Habilidades" },
      { id: "projects", label: "Proyectos" },
      { id: "certifications", label: "Certificaciones" },
      { id: "contact", label: "Contacto" },
    ],
    hero: {
      title: "Adrian Yusef Samudio Púa",
      subtitle: "Desarrollador Backend",
      cta: "PRESIONA START",
    },
    about: {
      id: "about",
      title: "NIVEL 1: SOBRE MÍ",
      name: "Adrian Yusef Samudio Púa",
      bio: "Soy un joven programador con experiencia en HTML, CSS, JavaScript, Node.js, C#, y frameworks como React, Angular y Next.js. Siempre estoy dispuesto a aprender, me apasiona la programación, el trabajo en equipo y aprender más cada día. He hecho varios proyectos como aplicaciones web, E-Commerce, API RESTful y sistemas de gestión de tareas. Cada día intento aprender cada vez más y volverme mejor poco a poco.",
      imageUrl: "/profile.jpg",
      imageHint: "portrait of a young man",
      cvButtonText: "Descargar CV"
    },
    experience: {
      id: "experience",
      title: "CRONOLOGÍA DE NIVELES",
      timeline: [
        {
          date: "2025 - PRESENTE",
          title: "Desarrollador y Soporte TI",
          company: "Industrias Bisonte",
          description: "Desarrollo de software empresarial con Node.js, JavaScript, Python, TypeScript, Next.js, Tailwind, Docker, Oracle 10G y herramientas de Google.",
        },
        {
          date: "2024",
          title: "Desarrollador de Páginas Web y Aplicaciones",
          company: "ReyparSAS",
          description: "Desarrollo de sitios web en WordPress y aplicaciones empresariales a medida con JavaScript, Python, PHP, CSS, Laravel y MySQL para optimizar funciones clave de la empresa.",
        },
      ],
    },
    skills: {
      id: "skills",
      title: "POWER-UPS Y HABILIDADES",
      description: "Mi arsenal de tecnologías para construir el próximo gran juego... o aplicación.",
      powerupIcons: [Heart, Gem, Star, Medal, Award],
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 4, icon: Code },
            { name: "Next.js", level: 4, icon: Code },
            { name: "Angular", level: 3, icon: Code },
            { name: "HTML & CSS", level: 5, icon: Paintbrush },
            { name: "TailwindCSS", level: 4, icon: Paintbrush },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 4, icon: Server },
            { name: "Python", level: 4, icon: Server },
            { name: "C#", level: 3, icon: Server },
            { name: "Laravel", level: 3, icon: Server },
            { name: "API RESTful", level: 4, icon: Server },
          ],
        },
        {
          title: "Otras Habilidades",
          skills: [
            { name: "JavaScript", level: 5, icon: BrainCircuit },
            { name: "AWS", level: 3, icon: Cloud },
            { name: "WordPress", level: 3, icon: Paintbrush },
            { name: "Trabajo en equipo", level: 5, icon: BrainCircuit },
            { name: "Flutter", level: 3, icon: Smartphone },
            { name: "Dart", level: 3, icon: Code },
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      title: "SALA DE ARCADES",
      items: [
        {
          title: "Aplicación Web Completa",
          description: "Una aplicación web multifuncional con un robusto backend y un frontend interactivo.",
          tags: ["React", "Node.js", "API"],
          image: "/InProgress.png",
          imageHint: "web application interface"
        },
        {
          title: "App movil",
          description: "Una app llamada Quoki Finance para gestionar tu dinero y ahorro, hecha en Flutter y Dart 100% para dispositivos moviles.",
          tags: ["Flutter", "Dart"],
          image: "/Quoki.png",
          imageHint: "mobile finance app",
          link: "https://github.com/AdrianPua-code/Quoki.git"
        },
        {
          title: "API RESTful",
          description: "Una API segura y escalable para servir datos a múltiples clientes.",
          tags: ["Node.js", "Express.js", "MySQL"],
          image: "/api.png",
          imageHint: "code terminal",
          link: "https://github.com/AdrianPua-code/API_TIENDA_MASCOTAS"
        },
        {
          title: "Juego web Móvil",
          description: "Juego móvil basado en el juego del impostor, donde cada jugador propone una frase y el resto debe descubrir al impostor que no la conoce.",
          tags: ["Tailwind", "Next.js", "TypeScript", "Vercel"],
          image: "/Impostor.png",
          imageHint: "impostor game interface",
          link: "https://impostor-self.vercel.app/"
        },
      ],
    },
    certifications: {
      id: "certifications",
      title: "MURO DE LOGROS",
      items: [
        { title: "Angular Certification", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-6624254f-1252-49f4-81f1-633c2bec6d9d/", icon: Award },
        { title: "Inglés B2", issuer: "EF SET", link: "https://cert.efset.org/es/anRs4D", icon: Award },
        { title: "JavaScript Certification", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-3a639e8b-8eb2-432c-b438-61053fd36f56/", icon: Award },
        { title: "AWS Cloud Practitioner", issuer: "Credly", link: "https://www.credly.com/badges/08021833-247b-4a19-8854-7987047d82bc/public_url", icon: Award },
        { title: "Multicloud", issuer: "Credly", link: "https://www.credly.com/badges/769f9e5c-a356-4f4d-8a74-42dc53a339d1/public_url", icon: Award },
      ],
    },
    contact: {
      id: "contact",
      title: "Elige tu Jugador",
      subtitle: "¿Listo para empezar una nueva aventura? ¡Contáctame!",
      selectPlayer: "Selecciona un Jugador",
      players: [
        { id: "linkedin", name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/adrian-yusef-samudio-p%C3%BAa-260343375", actionText: "Conecta profesionalmente.", buttonText: "Visitar Perfil" },
        { id: "github", name: "GitHub", icon: Github, url: "https://github.com/AdrianPua-code", actionText: "Explora mi código.", buttonText: "Ver Repositorios" },
        { id: "whatsapp", name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/573204474231", actionText: "Envíame un mensaje rápido.", buttonText: "Chatear Ahora" },
        { id: "email", name: "Email", icon: Mail, url: "Adrian.yusef.pua@gmail.com", actionText: "Copia mi correo electrónico.", buttonText: "Copiar Correo" },
      ],
      emailText: "¡Correo copiado!",
      copyButtonText: "Copiar",
      copiedButtonText: "Copiado",
    },
    footer: {
      copyright: "© {YEAR} Adrian Yusef Samudio Púa. Todos los derechos reservados.",
    },
  },
  en: {
    navLinks: [
      { id: "about", label: "About Me" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      title: "Adrian Yusef Samudio Púa",
      subtitle: "Backend Developer",
      cta: "PRESS START",
    },
    about: {
      id: "about",
      title: "LEVEL 1: ABOUT ME",
      name: "Adrian Yusef Samudio Púa",
      bio: "I am a young programmer with experience in HTML, CSS, JavaScript, Node.js, C#, and frameworks like React, Angular, and Next.js. I am always willing to learn, passionate about programming, teamwork, and learning more every day. I have completed several projects such as web applications, E-Commerce, RESTful APIs, and task management systems. Every day I try to learn more and become better little by little.",
      imageUrl: "/profile.jpg",
      imageHint: "portrait of a young man",
      cvButtonText: "Download CV"
    },
    experience: {
      id: "experience",
      title: "LEVEL TIMELINE",
      timeline: [
        {
          date: "2025 - PRESENT",
          title: "Developer & IT Support",
          company: "Industrias Bisonte",
          description: "Development of enterprise software using technologies like Node.js, JavaScript, Python, TypeScript, Next.js, Tailwind, Docker, Oracle 10G, and Google tools.",
        },
        {
          date: "2024",
          title: "Web and Application Developer",
          company: "ReyparSAS",
          description: "Development of WordPress websites and custom enterprise applications with JavaScript, Python, PHP, CSS, Laravel, and MySQL, optimizing key functions within the company.",
        },
      ],
    },
    skills: {
      id: "skills",
      title: "POWER-UPS & ABILITIES",
      description: "My arsenal of technologies to build the next great game... or application.",
      powerupIcons: [Heart, Gem, Star, Medal, Award],
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 4, icon: Code },
            { name: "Next.js", level: 4, icon: Code },
            { name: "Angular", level: 3, icon: Code },
            { name: "HTML & CSS", level: 5, icon: Paintbrush },
            { name: "TailwindCSS", level: 4, icon: Paintbrush },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 4, icon: Server },
            { name: "Python", level: 4, icon: Server },
            { name: "C#", level: 3, icon: Server },
            { name: "Laravel", level: 3, icon: Server },
            { name: "RESTful APIs", level: 4, icon: Server },
          ],
        },
        {
          title: "Other Skills",
          skills: [
            { name: "JavaScript", level: 5, icon: BrainCircuit },
            { name: "AWS", level: 3, icon: Cloud },
            { name: "WordPress", level: 3, icon: Paintbrush },
            { name: "Teamwork", level: 5, icon: BrainCircuit },
            { name: "Flutter", level: 3, icon: Smartphone },
            { name: "Dart", level: 3, icon: Code },
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      title: "ARCADE ROOM",
      items: [
        {
          title: "Full-Stack Web Application",
          description: "A multifunctional web application with a robust backend and an interactive frontend.",
          tags: ["React", "Node.js", "API"],
          image: "/InProgress.png",
          imageHint: "web application interface"
        },
        {
          title: "Mobile App",
          description: "An app called Quoki Finance to manage your money and savings, built with Flutter and Dart, 100% for mobile devices.",
          tags: ["Flutter", "Dart"],
          image: "/Quoki.png",
          imageHint: "mobile finance app",
          link: "https://github.com/AdrianPua-code/Quoki.git"
        },
        {
          title: "RESTful API",
          description: "A secure and scalable API to serve data to multiple clients.",
          tags: ["Node.js", "Express.js", "MySQL"],
          image: "/api.png",
          imageHint: "code terminal",
          link: "https://github.com/AdrianPua-code/API_TIENDA_MASCOTAS"
        },
        {
          title: "Mobile Web Game",
          description: "Mobile game based on the impostor concept, where each player submits a phrase and others must identify the impostor who doesn't know it.",
          tags: ["Tailwind", "Next.js", "TypeScript", "Vercel"],
          image: "/Impostor.png",
          imageHint: "impostor game interface",
          link: "https://impostor-self.vercel.app/"
        },
      ],
    },
    certifications: {
      id: "certifications",
      title: "ACHIEVEMENT WALL",
      items: [
        { title: "Angular Certification", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-6624254f-1252-49f4-81f1-633c2bec6d9d/", icon: Award },
        { title: "English B2", issuer: "EF SET", link: "https://cert.efset.org/es/anRs4D", icon: Award },
        { title: "JavaScript Certification", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-3a639e8b-8eb2-432c-b438-61053fd36f56/", icon: Award },
        { title: "AWS Cloud Practitioner", issuer: "Credly", link: "https://www.credly.com/badges/08021833-247b-4a19-8854-7987047d82bc/public_url", icon: Award },
        { title: "Multicloud", issuer: "Credly", link: "https://www.credly.com/badges/769f9e5c-a356-4f4d-8a74-42dc53a339d1/public_url", icon: Award },
      ],
    },
    contact: {
      id: "contact",
      title: "Choose Your Player",
      subtitle: "Ready to start a new adventure? Let's connect!",
      selectPlayer: "Select a Player",
      players: [
        { id: "linkedin", name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/adrian-yusef-samudio-p%C3%BAa-260343375", actionText: "Connect professionally.", buttonText: "Visit Profile" },
        { id: "github", name: "GitHub", icon: Github, url: "https://github.com/AdrianPua-code", actionText: "Explore my code.", buttonText: "View Repositories" },
        { id: "whatsapp", name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/573204474231", actionText: "Send me a quick message.", buttonText: "Chat Now" },
        { id: "email", name: "Email", icon: Mail, url: "Adrian.yusef.pua@gmail.com", actionText: "Copy my email address.", buttonText: "Copy Email" },
      ],
      emailText: "Email copied!",
      copyButtonText: "Copy",
      copiedButtonText: "Copied",
    },
    footer: {
      copyright: "© {YEAR} Adrian Yusef Samudio Púa. All rights reserved.",
    },
  },
};

export const portfolioData = portfolioDataContent;








