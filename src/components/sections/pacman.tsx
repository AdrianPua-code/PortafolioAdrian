"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Gamepad2, Ghost, Apple } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type PacmanSectionProps = {
  data: typeof portfolioData.es.pacman;
  onGhostEaten: (ghostId: number) => void;
  onGameStart: () => void;
};

// Game settings
const TILE_SIZE = 24;
const ROWS = 15;
const COLS = 19;
const GHOST_IDS = [1, 2, 3, 4];
const GHOST_COLORS = {
  1: 'text-red-500', // Blinky
  2: 'text-pink-400', // Pinky
  3: 'text-cyan-400', // Inky
  4: 'text-orange-400', // Clyde
};

const layout = [
  "###################",
  "#........#........#",
  "#.##.###.#.###.##.#",
  "#@##.###.#.###.##@#",
  "#.................#",
  "#.##.#.#####.#.##.#",
  "#....#...#...#....#",
  "####.### # ###.####",
  "   #.#   G   #.#   ",
  "####.### # ###.####",
  "#....#...#...#....#",
  "#.##.#.#####.#.##.#",
  "#.................#",
  "#.##.###.#.###.##.#",
  "#@...............@#",
  "###################",
];

const PacmanSection = ({ data, onGhostEaten, onGameStart }: PacmanSectionProps) => {
  const [gameState, setGameState] = useState('idle');
  const [pacman, setPacman] = useState({ x: 9, y: 11 });
  const [ghosts, setGhosts] = useState<{ id: number; x: number; y: number; vulnerable: boolean }[]>([]);
  const [dots, setDots] = useState(0);
  const [score, setScore] = useState(0);
  const [vulnerableTimer, setVulnerableTimer] = useState(0);

  const gameLoopRef = useRef<NodeJS.Timeout>();
  const pacmanDirRef = useRef({ x: 0, y: -1 });

  const startGame = () => {
    onGameStart();
    pacmanDirRef.current = { x: 0, y: -1 };
    setPacman({ x: 9, y: 11 });
    const initialGhosts = GHOST_IDS.map((id, i) => ({
      id,
      x: 8 + i,
      y: 7,
      vulnerable: false,
    }));
    setGhosts(initialGhosts);
    let dotCount = 0;
    layout.forEach(row => row.split('').forEach(char => {
      if(char === '.') dotCount++;
    }));
    setDots(dotCount);
    setScore(0);
    setGameState('playing');
  };

  const movePacman = useCallback(() => {
    setPacman(p => {
      const nextPos = { x: p.x + pacmanDirRef.current.x, y: p.y + pacmanDirRef.current.y };
      const tile = layout[nextPos.y]?.[nextPos.x];
      if (tile === '#') return p;
      return nextPos;
    });
  }, []);
  
  const moveGhosts = useCallback(() => {
    setGhosts(gs => gs.map(g => {
        // simple random movement
        const dirs = [{x:0, y:1}, {x:0, y:-1}, {x:1, y:0}, {x:-1, y:0}];
        const validDirs = dirs.filter(dir => {
            const nextY = g.y + dir.y;
            const nextX = g.x + dir.x;
            return layout[nextY]?.[nextX] !== '#';
        });
        const dir = validDirs[Math.floor(Math.random() * validDirs.length)] || {x:0,y:0};
        return { ...g, x: g.x + dir.x, y: g.y + dir.y };
    }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      const keyMap = { ArrowUp: {x:0, y:-1}, ArrowDown: {x:0, y:1}, ArrowLeft: {x:-1, y:0}, ArrowRight: {x:1, y:0} };
      if (e.key in keyMap) {
        e.preventDefault();
        pacmanDirRef.current = keyMap[e.key as keyof typeof keyMap];
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);
  
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(() => {
        movePacman();
        moveGhosts();

        // Collision detection and game logic
        setPacman(p => {
          let newP = {...p};
          // Dot eating
          if (layout[p.y][p.x] === '.') {
            setScore(s => s + 10);
            setDots(d => d-1);
            layout[p.y] = layout[p.y].substring(0, p.x) + ' ' + layout[p.y].substring(p.x + 1);
          }
          // Power pellet
          if (layout[p.y][p.x] === '@') {
            setScore(s => s + 50);
            setVulnerableTimer(100); // 10 seconds
            layout[p.y] = layout[p.y].substring(0, p.x) + ' ' + layout[p.y].substring(p.x + 1);
            setGhosts(gs => gs.map(g => ({...g, vulnerable: true})));
          }
          return newP;
        });

        // Ghost collision
        setGhosts(gs => {
            let newGhosts = [...gs];
            const p = pacman;
            newGhosts.forEach((g, i) => {
                if (g.x === p.x && g.y === p.y) {
                    if (g.vulnerable) {
                        onGhostEaten(g.id);
                        setScore(s => s + 200);
                        newGhosts[i] = {...g, x: 9, y: 7, vulnerable: false};
                    } else {
                        setGameState('gameover');
                    }
                }
            });
            return newGhosts;
        });
        
        // Vulnerable timer
        if (vulnerableTimer > 0) {
            setVulnerableTimer(t => t - 1);
            if (vulnerableTimer === 1) {
                setGhosts(gs => gs.map(g => ({...g, vulnerable: false})));
            }
        }

      }, 100);
    } else {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameState, movePacman, moveGhosts, onGhostEaten, vulnerableTimer]);


  const renderTile = (char: string, x: number, y: number) => {
    const key = `${x}-${y}`;
    if (char === '#') return <div key={key} style={{ width: TILE_SIZE, height: TILE_SIZE }} className="bg-blue-800" />;
    
    let content = null;
    if (pacman.x === x && pacman.y === y) {
      content = <motion.div animate={{ rotate: [0, 20, 0]}} transition={{duration: 0.5, repeat: Infinity}}><Gamepad2 className="text-yellow-400 w-full h-full" /></motion.div>;
    } else if (ghosts.some(g => g.x === x && g.y === y)) {
      const ghost = ghosts.find(g => g.x === x && g.y === y)!;
      content = <Ghost className={cn("w-full h-full ghost-float", ghost.vulnerable ? 'text-blue-300 vulnerable-blink' : GHOST_COLORS[ghost.id as keyof typeof GHOST_COLORS])} />;
    } else if (char === '.') {
      content = <div className="w-1 h-1 bg-yellow-200 rounded-full" />;
    } else if (char === '@') {
      content = <Apple className="w-4 h-4 text-green-400 animate-pulse" />;
    }

    return <div key={key} style={{ width: TILE_SIZE, height: TILE_SIZE }} className="flex items-center justify-center">{content}</div>;
  };

  return (
    <section id={data.id} className="bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-glow animate-text-flicker">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{data.instructions}</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-black p-2 pixel-border-primary inline-block">
             <div className="grid" style={{ gridTemplateColumns: `repeat(${COLS}, ${TILE_SIZE}px)` }}>
              {layout.map((row, y) => row.split('').map((char, x) => renderTile(char, x, y)))}
            </div>
          </div>
          
          <div className='h-16'>
            {gameState === 'idle' && <Button onClick={startGame} className="font-headline text-lg tracking-wider animate-pulse">{data.playButton}</Button>}
            {gameState === 'gameover' && (
              <div className='text-center'>
                <p className="text-4xl font-headline text-red-500 mb-2">{data.gameOver}</p>
                <Button onClick={startGame} className="font-headline text-lg">{data.playButton} de Nuevo</Button>
              </div>
            )}
            {gameState === 'playing' && <p className="text-2xl font-headline text-primary">{data.score}: {score}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacmanSection;
