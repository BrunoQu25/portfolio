'use client';

import Link from "next/link";
import Circle from "./animations/circle";
import TechCarousel from "./components/TechCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent font-sans">
      <main className="relative z-10 flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-transparent sm:items-start">
        <div className="flex w-full items-start gap-8">
          <div className="flex my-auto">
            <Circle />
          </div>
          <div>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
              Bruno Quadrelli
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Full Stack Developer about to finish my Software Engineer Career at ORT Uruguay. I love creating digital end-to-end solutions
              to solve real-world problems and continuously learning new technologies. I am passionate about Artifficial Intelligence, that is why I learned about it.
            </p>
          </div>
        </div>
        <div className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          <TechCarousel />
        </div>
        <div className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 flex gap-4">
          <Link href="/about">
            <div className="btn-gradient">
              <button className="hover:cursor-pointer">
                More about me
              </button>
            </div>
          </Link>
          <Link href="/work">
            <div className="btn-gradient">
              <button className="hover:cursor-pointer">
                Check my work
              </button>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
