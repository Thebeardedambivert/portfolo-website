import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar } from "lucide-react";

export default function AIBrandAgentCaseStudy() {
    return (
        <PageWrapper>
            <main className="max-w-7xl mx-auto px-6 py-12 flex-grow">
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="size-4" /> Back to Projects
                </Link>
                <div className="mb-16">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">n8n</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Gemini 2.0 Flash</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Pinecone</span>
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-primary/10 text-primary rounded-full">Supabase</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-100">
                        AI Brand Agent for a <span className="text-primary">Creative Strategist</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                        A complete AI brand agent built for a Lagos-based creative strategist that handles every enquiry, captures every lead, and sends every proposal automatically — 24/7.
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
                                    Favour Nwachukwu is a creative strategist working with founders and executives across Africa and internationally. The problem wasn&apos;t her work — it was everything around it. Enquiries going unanswered after hours, leads going cold, proposals written by hand, follow-ups missed when life got busy.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    The Solution
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    A chat widget on her site draws from a Pinecone vector knowledge base built from her actual service documents, answering questions about pricing, packages, and process with accurate, specific responses. Every lead is captured automatically to her CRM the moment a visitor expresses intent. Her inbox is monitored and personalised auto-replies are sent to inbound email enquiries. A tailored proposal is generated and sent automatically after every lead capture. Complex or sensitive conversations are escalated directly to Favour with full context.
                                </p>
                            </div>
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">Project Demo</h2>
                            <div className="w-full aspect-[16/9] rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/rrGXXdn1r3E"
                                    title="AI Brand Agent for a Creative Strategist Demo"
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
                                        <p className="font-bold text-lg mb-1">Zero Response Time</p>
                                        <p className="text-slate-600 dark:text-slate-400">Enquiry response time reduced to zero — every visitor question answered instantly and accurately, 24/7, using her actual service knowledge.</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Automated Proposal Delivery</p>
                                        <p className="text-slate-600 dark:text-slate-400">Proposal generation and delivery fully automated after every lead capture — tailored to the prospect, sent without any manual input.</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
                                    <CheckCircle2 className="size-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">Inbox Monitoring Eliminated</p>
                                        <p className="text-slate-600 dark:text-slate-400">Manual inbox monitoring eliminated entirely — inbound email enquiries are detected and replied to automatically with personalised responses.</p>
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
                                        {['n8n', 'Gemini 2.0 Flash', 'Pinecone', 'Supabase', 'Netlify'].map(tech => (
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
