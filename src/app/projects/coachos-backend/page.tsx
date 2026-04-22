import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar } from "lucide-react";

export default function CoachOSBackendCaseStudy() {
    return (
        <PageWrapper>
            <main className="max-w-7xl mx-auto px-6 py-12 flex-grow">
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="size-4" /> Back to Projects
                </Link>
                <div className="mb-16">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">n8n</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Airtable</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">DocuSeal</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Paystack</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-100">
                        CoachOS: Automated Coaching <span className="text-primary">Business Backend</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                        A fully automated business operating system for coaching practices that monitors every client in real time and ensures nothing ever falls through the cracks.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">report_problem</span>
                                    The Problem
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    Most coaches lose clients quietly. Not because they coach poorly, but because nothing in their business is watching the gaps. No system flags who has gone silent, who is at risk, or whose contract is about to expire. The best coaches aren&apos;t immune to this — they just have better systems.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    The Solution
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    One click sends a proposal and emails a contract automatically via DocuSeal. A health score algorithm monitors every active client in real time. Session notes trigger personalised follow-up emails without any manual input. Payments via Paystack, contract signatures, and Slack alerts are all handled automatically inside a single n8n workflow connected to Airtable as the central data layer.
                                </p>
                            </div>
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Project Demo</h2>
                            <div className="w-full aspect-[16/9] rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/LvHKXoeD-78"
                                    title="CoachOS Automated Coaching Business Backend Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">The Results</h2>
                            <div className="space-y-4">
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">One-Click Proposal & Contract</p>
                                        <p className="text-slate-600 dark:text-slate-400">Proposal-to-contract flow reduced to a single click — DocuSeal handles generation, delivery, and signature collection automatically.</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Real-Time Client Health Monitoring</p>
                                        <p className="text-slate-600 dark:text-slate-400">A health score algorithm monitors every active client continuously with real-time risk flagging before clients go silent.</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Zero Manual Follow-Up</p>
                                        <p className="text-slate-600 dark:text-slate-400">Session notes trigger personalised follow-up emails automatically — zero manual steps required after any coaching session.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <aside className="space-y-8">
                        <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Project Details</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Technologies Used</p>
                                    <ul className="space-y-2">
                                        {['n8n', 'Airtable', 'DocuSeal', 'Paystack', 'Slack'].map(tech => (
                                            <li key={tech} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 className="size-4 text-primary" /> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-3">Tags</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">Automation</span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">AI Agent</span>
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
