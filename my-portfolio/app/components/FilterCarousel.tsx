'use client';

import { useRef, useState, useEffect } from 'react';
import { Technology } from '../objects/technologies';

interface FilterCarouselProps {
    technologies: Technology[];
    selectedTechs?: string[];
    onTechClick?: (tech: string) => void;
}

export default function FilterCarousel({ technologies, selectedTechs = [], onTechClick }: FilterCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            // Allow a small tolerance of 1px for float calculation differences
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            // Check arrows after scroll animation finishes
            setTimeout(checkScroll, 500);
        }
    };

    return (
        <div className="relative w-full flex items-center group mt-4">
            {showLeftArrow && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 z-10 p-2 bg-zinc-100 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors shadow-lg"
                    aria-label="Scroll left"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            <div
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto gap-2 py-2 px-8 scrollbar-hide w-full scroll-smooth items-center"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {technologies.map((technology) => {
                    const isSelected = selectedTechs.includes(technology.name);
                    return (
                        <button
                            key={technology.name}
                            onClick={() => onTechClick?.(technology.name)}
                            className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex-shrink-0 border
                                ${isSelected
                                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black border-transparent shadow-md transform scale-105'
                                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/50 border-transparent hover:border-zinc-300 dark:hover:border-zinc-700'
                                }`}
                        >
                            {technology.name}
                        </button>
                    );
                })}
            </div>

            {showRightArrow && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 z-10 p-2 bg-zinc-100 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors shadow-lg"
                    aria-label="Scroll right"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}
