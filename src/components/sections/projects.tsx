import Image from 'next/image';
import type { portfolioData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProjectsSectionProps = {
    data: typeof portfolioData.es.projects;
};

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
    return (
        <section id={data.id}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary text-glow">
                    {data.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.items.map((project, index) => {
                        const projectCard = (
                            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`transition-transform duration-300 group-hover:scale-105 ${
                    project.image.includes('Quoki') || 
                    project.title.includes('Quoki') || 
                    project.title.includes('Mobile App') ||
                    project.title.includes('App movil')
                        ? 'object-contain p-3' 
                        : 'object-cover'
                }`}
                data-ai-hint={project.imageHint}
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                }}
                priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <CardHeader className="p-0 mb-4">
                                        <CardTitle className="font-headline text-2xl text-primary group-hover:text-glow transition-all">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 mb-4 flex-grow">
                                        <p className="text-muted-foreground">{project.description}</p>
                                    </CardContent>
                                    <CardFooter className="p-0 flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="font-mono bg-accent/20 text-accent border-accent/30">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </CardFooter>
                                </div>
                            </Card>
                        );

                        if (project.link) {
                            return (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    {projectCard}
                                </a>
                            );
                        }

                        return projectCard;
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
