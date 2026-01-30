"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData, Language, NavLink } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Gamepad2 } from "./icons";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

type HeaderProps = {
  lang: Language;
  setLang: (lang: Language) => void;
  navLinks: NavLink[];
};

const LanguageSwitcher = ({ lang, setLang }: { lang: Language, setLang: (lang: Language) => void }) => (
  <div className="flex items-center p-1 bg-secondary rounded-full">
    <Button
      size="sm"
      variant={lang === "es" ? "default" : "ghost"}
      onClick={() => setLang("es")}
      className={cn("rounded-full h-7 w-12 text-sm", lang === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground')}
    >
      ES
    </Button>
    <Button
      size="sm"
      variant={lang === "en" ? "default" : "ghost"}
      onClick={() => setLang("en")}
      className={cn("rounded-full h-7 w-12 text-sm", lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground')}
    >
      EN
    </Button>
  </div>
);

const Header = ({ lang, setLang, navLinks }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="font-headline text-base text-muted-foreground hover:text-primary transition-colors text-glow-accent-hover"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50" : "bg-transparent")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-primary animate-text-flicker" />
            <span className="font-headline text-xl font-bold text-foreground">Adrian Samudio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems}
          </nav>
          <div className="hidden md:block">
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-6 mt-12 text-center">
                    {navItems}
                    <div className="mx-auto mt-4">
                        <LanguageSwitcher lang={lang} setLang={setLang} />
                    </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
