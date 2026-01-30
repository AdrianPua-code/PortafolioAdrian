import type { portfolioData, Skill } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from '../icons';

type SkillsSectionProps = {
    data: typeof portfolioData.es.skills;
};

const SkillBar = ({ skill, icons }: { skill: Skill, icons: React.ComponentType<{ className?: string }>[] }) => {
    const PowerUpIcon = icons[skill.level - 1] || Star;
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{skill.name}</span>
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                        const filled = i < skill.level;
                        return (
                            <PowerUpIcon
                                key={i}
                                className={`w-5 h-5 transition-colors ${filled ? 'text-accent animate-power-up' : 'text-muted-foreground/30'}`}
                                style={{ animationDelay: `${i * 100}ms` }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const SkillsSection = ({ data }: SkillsSectionProps) => {
    return (
        <section id={data.id}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-glow">
                        {data.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{data.description}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {data.categories.map((category, index) => (
                        <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg pixel-border-primary">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl text-center text-primary">
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {category.skills.map((skill, i) => (
                                    <SkillBar key={i} skill={skill} icons={data.powerupIcons} />
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
