import type { portfolioData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

type ExperienceSectionProps = {
    data: typeof portfolioData.es.experience;
};

const ExperienceSection = ({ data }: ExperienceSectionProps) => {
    return (
        <section id={data.id} className="bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16 text-primary text-glow">
                    {data.title}
                </h2>
                <div className="relative">
                    {/* The timeline line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border/50 hidden md:block" />

                    <div className="space-y-12">
                        {data.timeline.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="md:absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center pixel-border-primary hidden md:flex">
                                    <Briefcase className="w-5 h-5 text-accent-foreground" />
                                </div>
                                <Card className={`md:w-5/12 bg-card/80 backdrop-blur-sm border-border/50 shadow-lg ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                    <CardHeader>
                                        <CardDescription className="text-accent font-headline tracking-wider">{item.date}</CardDescription>
                                        <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-bold text-foreground mb-2">{item.company}</p>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
