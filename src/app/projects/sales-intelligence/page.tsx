import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LineChart, CheckCircle2, Lock, Calendar } from "lucide-react";

export default function SalesIntelligenceCaseStudy() {
    return (
        <PageWrapper>
            <main className="max-w-7xl mx-auto px-6 py-12 flex-grow">

                {/* Back Link */}
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="size-4" /> Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="mb-16">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Python / FastAPI</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">n8n</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">GPT-4.x</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-100">
                        AI-Powered Sales <span className="text-primary">Intelligence</span> Automation
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                        Automates sales intelligence from emails and meetings to surface follow-ups, risks, and pipeline insights seamlessly into CRM configurations.
                    </p>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Story */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Problem & Solution */}
                        <section className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">report_problem</span>
                                    The Problem
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    High-ticket sales teams lose extensive hours to manual CRM data entry and sifting through email threads. Critical meeting action items are often lost, and follow-up opportunities are missed simply due to tracking fatigue. Sales leaders needed a seamless intelligence layer that actively pulled insights instead of requiring manual push.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    The Solution
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    We developed an intelligence pipeline powered by Python (FastAPI) and n8n to integrate directly with Gmail and Calendar APIs. The AI monitors designated threads and calendar events, transcribes meeting data if necessary, and extracts structured follow-up items. Twilio WhatsApp alerts are surfaced to account executives when specific keywords or deal risks are detected.
                                </p>
                            </div>
                        </section>

                        {/* Video Demo Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Project Demo</h2>
                            {/* Replace the 'src' URL below with your actual YouTube or Vimeo embed link */}
                            <div className="w-full aspect-[16/9] rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden relative group">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/dc6nFFGvzKQ"
                                    title="Project Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>

                        {/* Results */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">The Results</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="col-span-1 sm:col-span-3 bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Eliminated CRM Copy-Paste</p>
                                        <p className="text-slate-600 dark:text-slate-400">Massively reduced the administrative pipeline workload for agents.</p>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-3 bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Improved Follow-Up Coverage</p>
                                        <p className="text-slate-600 dark:text-slate-400">Automated deal risk detection ensures zero blind spots.</p>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-3 bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Repeatable Reporting</p>
                                        <p className="text-slate-600 dark:text-slate-400">Weekly insight summaries delivered without active engineering time.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Project Details</h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Technologies Used</p>
                                    <ul className="space-y-2">
                                        {['Python', 'FastAPI', 'n8n', 'Airtable', 'Gmail API', 'Google Calendar API', 'Twilio WhatsApp', 'Gemini/GPT'].map(tech => (
                                            <li key={tech} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 className="size-4 text-primary" /> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-3">Links</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400">
                                            <Lock className="size-4 shrink-0" />
                                            <p className="text-sm font-medium">Private demo available</p>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-xs text-slate-500 italic">Code repository available upon request under NDA constraints.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-sm font-semibold mb-4 text-slate-900 dark:text-white">Want a similar system?</p>
                                    <a href="https://cal.com/nwachukwu-cyril-st5fot" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-primary text-background-dark py-3 rounded-xl font-bold hover:brightness-110 transition-all">
                                        <Calendar className="size-4" /> Book a Call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </PageWrapper>
    );
}
