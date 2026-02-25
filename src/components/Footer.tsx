import Link from "next/link";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-primary/10 bg-slate-50 dark:bg-slate-900/30 py-12 px-6 lg:px-12 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined">rocket_launch</span>
                        Cyril Nwachukwu
                    </div>
                    <p className="text-sm text-slate-500">Built by Cyril © {new Date().getFullYear()}. All rights reserved.</p>
                </div>
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/cyril-nwachukwu-96b029173/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                        <Linkedin className="size-6" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~0117cdb0fab9412bc8" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors hover:-translate-y-1 transform duration-200" title="Upwork Profile">
                        <ExternalLink className="size-6" />
                    </a>
                    <a href="https://x.com/bearded_cee" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                        <Twitter className="size-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
