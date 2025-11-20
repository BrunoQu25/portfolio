import { Technology } from "../objects/technologies";
import { Project } from "../objects/project";
import Image from "next/image";

export default function ProjectCard({ onClick, ...project }: Project & { onClick?: () => void }) {

    return (
        <div
            className="group relative cursor-pointer"
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <div className="relative overflow-hidden bg-gradient-to-r from-zinc-900 to-zinc-900 border border-zinc-700 p-4 rounded-xl group-hover:-translate-y-1 transition-all duration-300">
                <div className="dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative w-full h-48">
                        <Image src={project.imageUrl[0]} alt={project.title} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">{project.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.briefDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies && (project.technologies.length > 0) && (project.technologies.map((tech) => (
                            <span key={tech.name} className="bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-sm font-medium px-3 py-1 rounded-full">{tech.name}</span>
                        )))}
                    </div>
                </div>
            </div>
        </div>
    );
}