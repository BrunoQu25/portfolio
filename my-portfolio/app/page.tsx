import Image from "next/image";
import TechCarousel from "./components/TechCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex">
          
          <div className="flex-2 ml-8">
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Hello, I'm
            </p>
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
              Bruno Quadrelli
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Full Stack Developer about to finish my Software Engineer Career at ORT Uruguay. I love creating digital end-to-end solutions
              to solve real-world problems and continuously learning new technologies. I am passionate about Artifficial Intelligence, that is why I learned about it.
            </p>
            <div className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              <TechCarousel />
            </div>
            <div className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 flex gap-4">
              <div className="btn-gradient">
                <button>
                  More about me
                </button>
              </div>
              <div className="btn-gradient">
                <button>
                  Check my work
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
