import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar } from "lucide-react";

export default function CoachOSAcquisitionCaseStudy() {
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
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">n8n</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">VAPI</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">WhatsApp API</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">AI Agents</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-100">
                        CoachOS: AI <span className="text-primary">Client Acquisition</span> System
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                        A 24/7 AI operating system that handles the entire client acquisition pipeline for coaches and consultants, across WhatsApp and voice calls simultaneously.
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
                                    Coaches lose clients they never even speak to. Not because their program isn&apos;t good enough, but because of slow follow-up, missed calls, unqualified discovery calls, no-shows with no recovery, and leads going cold with no system to keep them warm. Every one of these gaps costs coaches real money every single week.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    The Solution
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    CoachOS handles the entire front-end of a coaching business automatically. A prospect messages on WhatsApp at any hour and gets an instant, intelligent, personalised response. A prospect who prefers to call gets a full voice conversation with an AI that knows the program inside out, handles objections, and books discovery calls without the coach touching their phone. One hour before every discovery call, the coach receives a full briefing on the prospect including what they asked, what they care about, and their lead score. No-shows get a warm recovery message with a rebook link 15 minutes later. After every session, a professional recap is generated and sent to the client automatically.
                                </p>
                            </div>
                        </section>

                        {/* Video Demo Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Project Demo</h2>
                            <div className="w-full aspect-[16/9] rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden relative group">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/9u6ihjYqm-g"
                                    title="CoachOS AI Client Acquisition System Demo"
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
                                        <p className="font-bold text-lg mb-1">Full Pipeline Automated</p>
                                        <p className="text-slate-600 dark:text-slate-400">Complete client acquisition pipeline automated end to end — from first touch to booked discovery call.</p>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-3 bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Zero Missed Leads</p>
                                        <p className="text-slate-600 dark:text-slate-400">Every inbound lead across WhatsApp and voice channels is captured, qualified, and responded to instantly — 24/7.</p>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-3 bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Automatic No-Show Recovery</p>
                                        <p className="text-slate-600 dark:text-slate-400">Discovery call no-shows receive a warm recovery message with a rebook link automatically within 15 minutes.</p>
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
                                        {['n8n', 'VAPI', 'WhatsApp API', 'LLM Workflows', 'AI Agents'].map(tech => (
                                            <li key={tech} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 className="size-4 text-primary" /> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-3">Tags</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">AI Agent</span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Automation</span>
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
