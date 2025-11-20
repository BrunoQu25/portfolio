'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
      <nav className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-3 py-2 shadow-lg">
        {/* Home Icon */}
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          aria-label="Home"
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>

        {/* Divider */}
        <div className="h-6 w-px bg-white/20" />

        {/* Navigation Links */}
        <Link
          href="/about"
          className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white hover:bg-white/10 transition-colors"
        >
          <span className="text-lg">@</span>
          <span>About</span>
        </Link>

        <Link
          href="/work"
          className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white hover:bg-white/10 transition-colors"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
          <span>Work</span>
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white hover:bg-white/10 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>Contact</span>
        </Link>

      </nav>
    </header>
  );
}
