'use client';

import ProjectCard from "../components/ProjectCard";
import { projects, technologies } from "../context/context";
import { Project } from "../objects/project";
import ProjectModal from "../components/ProjectModal";
import FilterCarousel from "../components/FilterCarousel";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isFilterHidden, setIsFilterHidden] = useState(true);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [isSearchHidden, setIsSearchHidden] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const handleTechClick = (techName: string) => {
        setSelectedTechs(prev =>
            prev.includes(techName)
                ? prev.filter(t => t !== techName)
                : [...prev, techName]
        );
    };

    const filteredProjects = projects.filter(project => {
        const matchesTech = selectedTechs.length === 0 ||
            selectedTechs.every(tech => project.technologies.some(t => t.name === tech));

        const matchesSearch = searchQuery === "" ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.technologies.some(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesTech && matchesSearch;
    });

    return (
        <div className="flex mt-8 min-h-screen justify-center font-sans">
            <main className="flex flex-col w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
                <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-zinc-50">
                    My work
                </h1>
                <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                    Here are some of the projects I've worked on recently. Click on each project to learn more about the technologies used and the challenges I faced during development.
                </p>
                <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-2 sm:gap-2 mt-4">
                    <div className="flex items-center w-full sm:w-auto">
                        <div className="flex cursor-pointer p-2" onClick={() => setIsSearchHidden(!isSearchHidden)}>
                            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <AnimatePresence>
                            {!isSearchHidden && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden flex-1 sm:flex-none"
                                >
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="ml-1 px-2 py-1 w-full sm:w-48 bg-transparent focus:outline-none focus:border-b-zinc-400 focus:border-b text-zinc-600 dark:text-zinc-400"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="flex items-center cursor-pointer gap-1" onClick={() => setIsFilterHidden(!isFilterHidden)}>
                        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <span className="text-zinc-400 text-sm font-medium">Filters</span>
                    </div>
                </div>
                <AnimatePresence>
                    {!isFilterHidden && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FilterCarousel
                                technologies={technologies}
                                selectedTechs={selectedTechs}
                                onTechClick={handleTechClick}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project: Project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            </main>
        </div>
    );
}