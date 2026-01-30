"use client";

import type { portfolioData, Achievement } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Unlock } from 'lucide-react';

type AchievementsSectionProps = {
    data: typeof portfolioData.es.achievements;
    achievements: Achievement[];
};

const AchievementsSection = ({ data, achievements }: AchievementsSectionProps) => {
    const unlockedCount = achievements.filter(a => a.unlocked).length;

    const handleViewClick = () => {
        document.getElementById(data.id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id={data.id} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-4 text-primary text-glow">
                    {data.title}
                </h2>
                {unlockedCount < achievements.length && <p className="text-muted-foreground">{data.unlockMessage}</p>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((ach) => (
                    <Card key={ach.id} className={`bg-card/50 transition-all duration-500 ${ach.unlocked ? 'border-accent shadow-accent/20 shadow-lg' : 'border-border/20'}`}>
                        <CardHeader className="flex-row items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${ach.unlocked ? 'bg-accent/20' : 'bg-muted'}`}>
                                <ach.icon className={`w-8 h-8 transition-colors ${ach.unlocked ? 'text-accent' : 'text-muted-foreground'}`} />
                            </div>
                            <div>
                                <CardTitle className={`font-headline text-xl transition-colors ${ach.unlocked ? 'text-accent' : 'text-muted-foreground'}`}>
                                    {ach.unlocked ? ach.title : '???'}
                                </CardTitle>
                                {ach.unlocked ? 
                                    <CardDescription>{ach.description}</CardDescription> :
                                    <CardDescription>Bloqueado</CardDescription>
                                }
                            </div>
                        </CardHeader>
                        <CardContent className='text-center'>
                             {ach.unlocked ? <Unlock className="mx-auto text-green-500" /> : <Lock className="mx-auto text-red-500" />}
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <Button onClick={handleViewClick} variant="outline" className="font-headline">
                    {data.viewButton}
                </Button>
            </div>
        </section>
    );
};

export default AchievementsSection;
