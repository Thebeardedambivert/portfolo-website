import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowRight, Building2, LineChart, PieChart, Mic, BrainCircuit, Bot } from "lucide-react";

export default function Projects() {
    return (
        <PageWrapper>
            <main className="max-w-7xl mx-auto px-6 py-12 flex-grow">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                        Featured <span className="text-primary">Projects</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                        A selection of high-impact AI agents and automation systems designed to bridge the gap between complex data and actionable business intelligence.
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-3 mb-12">
                    <button className="px-4 py-2 rounded-full bg-primary text-background-dark text-sm font-bold">All Work</button>
                    <button className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">AI Agents</button>
                    <button className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">Automation</button>
                    <button className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">SaaS</button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

                    {/* Project 1 — PropVid */}
                    <div className="group relative flex flex-col bg-slate-100 dark:bg-slate-800/40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all">
                        <div className="aspect-video w-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <Building2 className="size-16 text-primary/40" />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">Python</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">LangGraph</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">Gemini</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">PropVid: AI Real Estate Agent</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Realtors can go from raw property photos to a published YouTube listing video in under 10 minutes, with zero manual editing.
                            </p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-xs font-medium text-slate-500 mb-4">
                                    <span className="font-bold text-primary">Results:</span> Automated full pipeline after upload • Under ~10 minutes in tests • Zero manual editing steps
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <Link href="/projects/propvid" className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link">
                                        View Details <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs text-slate-400 italic">Demo available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 — Sales Intelligence */}
                    <div className="group relative flex flex-col bg-slate-100 dark:bg-slate-800/40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all">
                        <div className="aspect-video w-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <LineChart className="size-16 text-primary/40" />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">FastAPI</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">n8n</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">GPT-4</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sales Intelligence Automation</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Automates sales intelligence from emails and meetings to surface follow-ups, risks, and pipeline insights.
                            </p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-xs font-medium text-slate-500 mb-4">
                                    <span className="font-bold text-primary">Results:</span> Eliminated manual CRM copy-paste • Improved follow-up coverage • Repeatable reporting
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <Link href="/projects/sales-intelligence" className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link">
                                        View Details <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs text-slate-400 italic">Private Demo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 — Coaching BI */}
                    <div className="group relative flex flex-col bg-slate-100 dark:bg-slate-800/40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all">
                        <div className="aspect-video w-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <PieChart className="size-16 text-primary/40" />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">Claude</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">n8n</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">Tally</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Coaching BI Platform</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                Turns transcripts + client data into consistent weekly intelligence reports and coaching recommendations.
                            </p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-xs font-medium text-slate-500 mb-4">
                                    <span className="font-bold text-primary">Results:</span> Reduced manual reporting workload • Standardized report cadence • Engagement-drop early warning
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <Link href="/projects/coaching-bi" className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link">
                                        View Details <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs text-slate-400 italic">Sanitized Exports</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 — CoachOS Acquisition */}
                    <div className="group relative flex flex-col bg-slate-100 dark:bg-slate-800/40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all">
                        <div className="aspect-video w-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <Mic className="size-16 text-primary/40" />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">n8n</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">VAPI</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">WhatsApp API</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">CoachOS: AI Client Acquisition System</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                A 24/7 AI operating system handling the entire client acquisition pipeline across WhatsApp and voice calls simultaneously.
                            </p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-xs font-medium text-slate-500 mb-4">
                                    <span className="font-bold text-primary">Results:</span> Full pipeline automated end-to-end • Zero missed leads • No-show recovery in 15 minutes
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <Link href="/projects/coachos-acquisition" className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link">
                                        View Details <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs text-slate-400 italic">Demo available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 5 — CoachOS Backend */}
                    <div className="group relative flex flex-col bg-slate-100 dark:bg-slate-800/40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all">
                        <div className="aspect-video w-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-sky-500/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <BrainCircuit className="size-16 text-primary/40" />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">n8n</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">Airtable</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">DocuSeal</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">CoachOS: Automated Business Backend</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                A fully automated operating system monitoring every client in real time — proposals, contracts, payments, and follow-ups handled automatically.
                            </p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-xs font-medium text-slate-500 mb-4">
                                    <span className="font-bold text-primary">Results:</span> One-click proposal-to-contract • Real-time client health scoring • Zero manual follow-up
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <Link href="/projects/coachos-backend" className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link">
                                        View Details <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs text-slate-400 italic">Demo available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 6 — AI Brand Agent */}
                    <div className="group relative flex flex-col bg-slate-100 dark:bg-slate-800/40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all">
                        <div className="aspect-video w-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <Bot className="size-16 text-primary/40" />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">n8n</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">Pinecone</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">Gemini</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI Brand Agent for a Creative Strategist</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                                A complete AI brand agent that handles every enquiry, captures every lead, and sends every proposal automatically — 24/7.
                            </p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-xs font-medium text-slate-500 mb-4">
                                    <span className="font-bold text-primary">Results:</span> Zero response time on enquiries • Proposals automated post-capture • Inbox monitoring eliminated
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <Link href="/projects/ai-brand-agent" className="inline-flex items-center gap-2 text-primary text-sm font-bold group/link">
                                        View Details <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs text-slate-400 italic">Demo available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </PageWrapper>
    );
}
