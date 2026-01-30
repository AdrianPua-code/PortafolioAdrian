import type { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';

type HeroSectionProps = {
  data: typeof portfolioData.es.hero;
};

const HeroSection = ({ data }: HeroSectionProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center bg-background">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-primary text-glow">
          {data.title}
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-headline text-muted-foreground">
          {data.subtitle}
        </p>
        <Button 
          onClick={handleScroll}
          size="lg"
          className="mt-12 font-headline text-xl tracking-widest animate-text-flicker bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:scale-110"
        >
          {data.cta}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
