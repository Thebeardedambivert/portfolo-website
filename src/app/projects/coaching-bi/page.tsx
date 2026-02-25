import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowLeft, PieChart, CheckCircle2, Calendar, FileText } from "lucide-react";

export default function CoachingBICaseStudy() {
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
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Claude / Gemini</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">n8n</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Google APIs</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-100">
                        Coaching <span className="text-primary">Business Intelligence</span> Platform
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                        Turns raw transcripts and client data points into consistent, actionable weekly intelligence reports and coaching recommendations.
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
                                    High-end coaching firms record hundreds of hours of client calls every month. Extracting actionable insights, tracking sentiment changes over time, and identifying churn risk required manual review of transcripts or disjointed note-taking applications. The result was a fragmented view of client health and delayed interventions.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    The Solution
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    We developed an automated transcription and analysis ingestion layer using Whisper and n8n. These transcripts are fed through OpenRouter via Claude/GPT models structured to assess engagement metrics, extract key friction points, and output standardized data matrices. The data is securely visualized on Google Sheets and aggregated via Tally forms, creating a centralized command center.
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
                                    src="https://www.youtube.com/embed/6r-IWnzo9rw"
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
                                        <p className="font-bold text-lg mb-1">Reduced Manual Workload</p>
                                        <p className="text-slate-600 dark:text-slate-400">Saved coaching staff 15+ hours per week previously spent on summarizing notes.</p>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-3 bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Standardized Reporting Cadence</p>
                                        <p className="text-slate-600 dark:text-slate-400">Created uniform, objective intelligence metrics across distinct coaching styles.</p>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-3 bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Engagement Drop Detection</p>
                                        <p className="text-slate-600 dark:text-slate-400">Implemented an early warning system that flags clients at risk of churn.</p>
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
                                        {['n8n', 'OpenRouter', 'Claude/GPT/Gemini', 'Google Sheets API', 'Google Drive API', 'Gmail API', 'Tally', 'Whisper'].map(tech => (
                                            <li key={tech} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 className="size-4 text-primary" /> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-3">Links</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary group transition-colors hover:bg-primary/20 cursor-pointer">
                                            <FileText className="size-4 shrink-0" />
                                            <p className="text-sm font-medium">View Sanitized Exports</p>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-xs text-slate-500 italic">We are considering open-sourcing a generalized version of the pipeline. Reach out for details.</p>
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
