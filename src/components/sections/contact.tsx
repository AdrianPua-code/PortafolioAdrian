"use client";

import { useState } from 'react';
import type { portfolioData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, ClipboardCopy, ClipboardCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type ContactSectionProps = {
  data: typeof portfolioData.es.contact;
};

const ContactSection = ({ data }: ContactSectionProps) => {
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handlePlayerSelect = (index: number) => {
    setSelectedPlayer(index);
    setIsCopied(false);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      toast({
          title: "¡Premio desbloqueado!",
          description: data.emailText,
      });
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const selectedPlayerData = selectedPlayer !== null ? data.players[selectedPlayer] : null;

  return (
    <section id={data.id} className="bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-glow animate-text-flicker">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{data.subtitle}</p>
        </div>

        <Card className="bg-black/50 pixel-border-primary text-center p-8">
          <CardContent className="p-0">
            <div className="mb-8">
              <h3 className="text-3xl font-headline text-accent animate-text-flicker">
                {selectedPlayerData ? selectedPlayerData.name : data.selectPlayer}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-8">
              {data.players.map((player, index) => (
                <div
                  key={player.id}
                  className="cursor-pointer group"
                  onClick={() => handlePlayerSelect(index)}
                >
                  <motion.div
                    className={cn(
                      "w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full flex items-center justify-center pixel-border transition-all duration-300",
                      selectedPlayer === index ? 'bg-accent/30 pixel-border-primary' : 'bg-secondary/20'
                    )}
                    whileHover={{ scale: 1.1 }}
                  >
                    <player.icon className={cn("w-12 h-12 md:w-16 md:h-16 transition-colors duration-300", selectedPlayer === index ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground')} />
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="h-24 relative">
                <AnimatePresence>
                {selectedPlayerData && (
                    <motion.div
                        key={selectedPlayer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                        <p className="text-muted-foreground mb-4">{selectedPlayerData.actionText}</p>
                        {selectedPlayerData.id === 'email' ? (
                             <div className="flex items-center gap-2 bg-background/50 border border-input p-2 rounded-lg">
                                <span className="font-mono text-foreground">{selectedPlayerData.url}</span>
                                <Button size="sm" variant="ghost" onClick={() => handleCopyEmail(selectedPlayerData.url)}>
                                    {isCopied ? <ClipboardCheck className="text-green-500" /> : <ClipboardCopy />}
                                    <span className="ml-2">{isCopied ? data.copiedButtonText : data.copyButtonText}</span>
                                </Button>
                            </div>
                        ) : (
                            <Button asChild size="lg" className="font-headline text-xl bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">
                                <a href={selectedPlayerData.url} target="_blank" rel="noopener noreferrer">
                                    {selectedPlayerData.buttonText}
                                    <ArrowRight />
                                </a>
                            </Button>
                        )}
                    </motion.div>
                )}
                </AnimatePresence>
                 {selectedPlayer === null && (
                     <div className="flex items-center justify-center h-full">
                        <p className="text-2xl font-code text-muted-foreground animate-pulse">_</p>
                    </div>
                 )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
