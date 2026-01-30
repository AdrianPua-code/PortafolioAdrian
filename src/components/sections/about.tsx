import Image from 'next/image';
import type { portfolioData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

type AboutSectionProps = {
    data: typeof portfolioData.es.about;
};

const AboutSection = ({ data }: AboutSectionProps) => {
    return (
        <section id={data.id} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary text-glow">
                {data.title}
            </h2>
            <Card className="bg-card/50 border-0 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="p-8 flex items-center justify-center md:col-span-1">
                        <div className="relative w-48 h-48 md:w-64 md:h-64">
                            <Image
                                src={data.imageUrl}
                                alt={data.name}
                                width={400}
                                height={400}
                                data-ai-hint={data.imageHint}
                                className="rounded-full object-cover w-full h-full pixel-border-primary"
                            />
                             <div className="absolute inset-0 bg-primary/20 rounded-full mix-blend-overlay"></div>
                        </div>
                    </div>
                    <div className="md:col-span-2 bg-card/70 p-8 md:p-12">
                        <CardContent className="p-0">
                            <h3 className="font-headline text-3xl font-bold text-primary mb-4">{data.name}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                {data.bio}
                            </p>
                            <a 
                                href="/Hoja De Vida Ats - Adrian Samudio Pua.pdf" 
                                download 
                                className="inline-block"
                            >
                                <Button 
                                    className="gap-2 font-headline text-lg tracking-wider animate-pulse"
                                >
                                    <Download className="w-4 h-4" />
                                    {data.cvButtonText}
                                </Button>
                            </a>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </section>
    );
};

export default AboutSection;

    