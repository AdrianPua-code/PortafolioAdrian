import type { portfolioData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

type CertificationsSectionProps = {
    data: typeof portfolioData.es.certifications;
};

const CertificationsSection = ({ data }: CertificationsSectionProps) => {
    return (
        <section id={data.id} className="bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary text-glow">
                    {data.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <Card className="h-full bg-card hover:bg-secondary/50 transition-colors duration-300 pixel-border transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
                                <CardHeader className="flex-row items-center gap-4">
                                    <cert.icon className="w-10 h-10 text-accent" />
                                    <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors">
                                        {cert.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{cert.issuer}</p>
                                    <div className="flex items-center text-accent text-sm mt-4 group-hover:text-glow-accent">
                                        <span>Ver Credencial</span>
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
