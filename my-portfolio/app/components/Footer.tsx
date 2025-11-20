import SocialMedia from "./socialMedia";

export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 py-6 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-black">
            <div className="flex items-center justify-between px-16">
                <span>© {new Date().getFullYear()} Bruno Quadrelli Portfolio. All rights reserved.</span>
                <SocialMedia />
            </div>
        </footer>
    );
}