import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Play, Calendar } from "lucide-react";

export default function PropVidCaseStudy() {
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
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Python</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">LangGraph</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Gemini 2.5 Flash</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-100">
                        PropVid: AI Real Estate <span className="text-primary">Listing Agent</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                        Realtors in Nigeria can go from raw property photos to a published YouTube listing video in under 10 minutes, with zero manual editing.
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
                                    Creating high-quality real estate video tours involves tedious scripting, recording voiceovers, and aligning images manually. For agents looking to scale, this process is an expensive bottleneck that takes up to 48 hours per listing. The challenge was building an end-to-end multi-modal pipeline requiring zero human intervention.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    The Solution
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    We engineered PropVid using LangGraph's multi-agent architecture. The system orchestrates multiple steps: Gemini 2.5 Flash analyzes the uploaded photos to identify key selling features, a writing agent crafts a targeted sales script, and ElevenLabs generates a natural voiceover. Finally, Creatomate/Cloudinary pipelines render the entire video and publish it via the YouTube Data API.
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
                                    src="https://www.youtube.com/embed/zzxUVu9CMG8"
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
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                                    <p className="text-sm text-slate-500 font-semibold mb-2">Editing Workload</p>
                                    <p className="text-3xl font-black text-primary">Zero</p>
                                    <p className="text-xs text-slate-500 mt-2">Manual editing steps required.</p>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                                    <p className="text-sm text-slate-500 font-semibold mb-2">Turnaround Time</p>
                                    <p className="text-3xl font-black text-primary">&lt; 10 min</p>
                                    <p className="text-xs text-slate-500 mt-2">From photo upload to YouTube.</p>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                                    <p className="text-sm text-slate-500 font-semibold mb-2">Process Stability</p>
                                    <p className="text-3xl font-black text-primary">100%</p>
                                    <p className="text-xs text-slate-500 mt-2">Automated full pipeline completion.</p>
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
                                        {['Python', 'LangGraph', 'Flask', 'Gemini 2.5 Flash', 'Leonardo AI', 'Creatomate', 'ElevenLabs', 'Cloudinary', 'YouTube Data API'].map(tech => (
                                            <li key={tech} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 className="size-4 text-primary" /> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-3">Links</p>
                                    <div className="space-y-3">
                                        <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                                            <span className="text-sm font-semibold flex items-center gap-2"><Play className="size-4 text-primary" /> Live Demo</span>
                                            <ArrowRight className="size-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </a>
                                        <div className="p-3">
                                            <p className="text-xs text-slate-500 italic">Code repository available upon request (contains third-party API credentials).</p>
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
