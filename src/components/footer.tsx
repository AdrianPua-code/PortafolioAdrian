import { portfolioData } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";
import { Gamepad2 } from "./icons";

type FooterProps = {
  data: typeof portfolioData.es.footer;
};

const Footer = ({ data }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = data.copyright.replace('{YEAR}', currentYear.toString());

  return (
    <footer className="bg-background border-t border-border/20 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg">Adrian Samudio</span>
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            {copyrightText}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/adrian-yusef-samudio-p%C3%BAa-260343375" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/AdrianPua-code" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
