'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SocialMedia from '../components/socialMedia';
import Certification from '../components/Certification';
import TechCarousel from '../components/TechCarousel';
import TypewriterText from '../components/TypewriterText';
import Skills from '../components/Skills';

export default function About() {
    return (
        <div className="flex mt-8 min-h-screen justify-center font-sans">
            {/* Left Sidebar Navigation */}
            <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-48">
                <ul className="space-y-4 text-zinc-400">
                    <li>
                        <a href="#introduction" className="hover:text-white transition-colors flex items-center gap-2">
                            <span className="text-2xl">—</span>
                            <span>Introduction</span>
                        </a>
                    </li>
                    <li>
                        <a href="#work-experience" className="hover:text-white transition-colors flex items-center gap-2">
                            <span className="text-2xl">—</span>
                            <span>Work Experience</span>
                        </a>
                    </li>
                    <li>
                        <a href="#education" className="hover:text-white transition-colors flex items-center gap-2">
                            <span className="text-2xl">—</span>
                            <span>Education</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-white transition-colors flex items-center gap-2">
                            <span className="text-2xl">—</span>
                            <span>Technical Skills</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <main className="relative z-10 flex flex-col w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">

                    <div className="col-span-1 flex flex-col items-center">

                        <Image
                            src="/profile.jpg"
                            alt="Profile Picture"
                            width={200}
                            height={200}
                            className="rounded-full object-cover max-h-48"
                        />

                        <div className="mt-4 flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>Montevideo, Uruguay</span>
                        </div>

                        <div className="mt-4 flex gap-3">
                            {["Spanish (Native)", "English (B2)"].map((lng) => (
                                <span
                                    key={lng}
                                    className="bg-black border border-zinc-600 px-4 py-2 rounded-full text-sm"
                                >
                                    {lng}
                                </span>
                            ))}
                        </div>

                        <section className="mt-8 w-full">
                            <h1 className="text-2xl font-bold dark:text-zinc-50 mb-4">Certifications</h1>
                            <div className="space-y-3">
                                <Certification title="Software Engineer Assistant" organization="ORT Uruguay" year="2024" />
                                <Certification title="First Certificate" organization="Cambridge University" year="2023" />
                            </div>
                        </section>

                        <section className="mt-8 w-full">
                            <h1 className="text-2xl font-bold dark:text-zinc-50 mb-4">Main Technologies</h1>
                            <TechCarousel />
                        </section>
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <div id="introduction">
                            <a href="https://calendly.com/bruqua/30min" target="_blank" rel="noopener noreferrer" className="btn-gradient mb-6 w-fit">
                                <button>
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Schedule a call</span>
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </a>

                            <h1 className="text-3xl sm:text-4xl font-bold dark:text-zinc-50 mt-2">Bruno Quadrelli</h1>
                            <h2 className="mt-2 text-xl sm:text-2xl text-zinc-700 dark:text-zinc-400 mb-4">
                                <TypewriterText
                                    texts={[
                                        "Full Stack Developer",
                                        "Backend Developer",
                                        "Frontend Developer",
                                        "Cloud Technologies Experience",
                                        "Problem Solver",
                                        "Innovative Solutions Creator",
                                        "Software Engineer student"
                                    ]}
                                    typingSpeed={100}
                                    deletingSpeed={50}
                                    pauseDuration={2000}
                                />
                            </h2>

                            <SocialMedia />

                            <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                I am a developer passionate about building comfortable and meaningful digital
                                experiences. I enjoy solving real-world problems and crafting the best solutions
                                possible. My goal is to continously learn and improve so I can deliver
                                high-quality projects that exceed expectations.
                            </p>
                        </div>

                        <section id="work-experience" className="mt-10">
                            <h1 className="text-2xl font-bold dark:text-zinc-50 mb-4">Work Experience</h1>

                            {[
                                {
                                    role: "Technical Assistant",
                                    time: "Oct 2023 - Sep 2024",
                                    company: "Arnaldo C. Castro",
                                    bullets: [
                                        "Expertise in Cloud Computing and IBM Cloud",
                                        "Onboarded clients to private cloud infrastructure",
                                        "Provided technical consultations and architectural guidance"
                                    ]
                                },
                                {
                                    role: "Student Program Internship",
                                    time: "May 2022 - May 2023",
                                    company: "IBM",
                                    bullets: [
                                        "Hands-on experience with enterprise cloud systems",
                                        "Collaborated across teams to deliver solutions",
                                        "Improved both technical and soft skills"
                                    ]
                                }
                            ].map((job) => (
                                <div key={job.role} className="mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-xl font-semibold dark:text-zinc-50">{job.role}</span>
                                        <span className="whitespace-nowrap">{job.time}</span>
                                    </div>
                                    <span className="text-cyan-500 font-medium">{job.company}</span>
                                    <ul className="mt-3 space-y-2">
                                        {job.bullets.map((b) => (
                                            <li key={b} className="flex gap-2">
                                                <span className="text-white">▹</span>{b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <section id="education" className="mt-10 space-y-6">
                            <h1 className="text-2xl font-bold dark:text-zinc-50 mb-4">Education</h1>

                            {[
                                { id: 1, title: "Software Engineering", time: "2022 - 2026", place: "ORT Uruguay" },
                                { id: 2, title: "Exchange", time: "Jan 2025 - May 2025", place: "Seville University" },
                                { id: 3, title: "Software Engineering", time: "2019 - 2022", place: "UdelaR" }
                            ].map((edu) => (
                                <div key={edu.id}>
                                    <div className="flex justify-between">
                                        <span className="text-xl font-semibold">{edu.title}</span>
                                        <span className="whitespace-nowrap">{edu.time}</span>
                                    </div>
                                    <span className="text-cyan-500">{edu.place}</span>
                                </div>
                            ))}
                        </section>
                        <section id="skills" className="mt-10 mb-4">
                            <h1 className="text-2xl font-bold dark:text-zinc-50 mb-4">Skills</h1>
                            <Skills />
                        </section>
                    </div>
                </div>

                <div className="w-full mt-16 relative">
                    <div className="border border-zinc-700 rounded-2xl bg-zinc-900/50 overflow-hidden max-w-3xl mx-auto relative z-10">
                        <div className="flex items-center gap-6">
                            <span className="text-2xl font-bold dark:text-zinc-50 m-6">Let&apos;s Connect!</span>
                        </div>
                        <span className="text-zinc-400 m-6">Feel free to reach out for collaborations or just a friendly chat.</span>
                        <div className="flex justify-center items-center m-6 gap-4">
                            <Link href="/work" className="btn-gradient">
                                <button className="hover:cursor-pointer">
                                    Check my work
                                </button>
                            </Link>
                            <Link href="/contact" className="btn-gradient">
                                <button className="hover:cursor-pointer">
                                    Contact me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
