"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                        <span className="material-symbols-outlined text-primary">terminal</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">Cyril Nwachukwu</h2>
                </Link>
                <nav className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-slate-600 dark:text-slate-300"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                        Resume
                    </a>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://cal.com/nwachukwu-cyril-st5fot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105"
                    >
                        Book a Call
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-primary p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-background-light dark:bg-background-dark border-b border-primary/10 px-6 py-4 flex flex-col gap-4 shadow-lg">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-medium transition-colors hover:text-primary py-2 ${pathname === link.href ? "text-primary" : "text-slate-600 dark:text-slate-300"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary py-2 transition-colors"
                    >
                        Resume
                    </a>
                    <a
                        href="https://cal.com/nwachukwu-cyril-st5fot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-center text-background-dark px-6 py-3 rounded-lg text-sm font-bold mt-2"
                    >
                        Book a Call
                    </a>
                </div>
            )}
        </header>
    );
}
