"use client";

import PageWrapper from "@/components/PageWrapper";
import { Calendar, Download, Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <PageWrapper>
            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Content Section */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Available for work</span>
                            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                                Let's work <span className="text-primary">together.</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                                I help SaaS and agency teams scale with custom automation and AI agents. Let's build something efficient that saves your team hours.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 group">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                                    <Mail className="size-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase">Email Me</p>
                                    <a href="mailto:K1ngceework97@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                                        K1ngceework97@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-4">
                                <a
                                    href="https://cal.com/nwachukwu-cyril-st5fot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    <Calendar className="size-5" />
                                    Book a Call
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
                                >
                                    <Download className="size-5" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-slate-100 dark:bg-slate-800/30 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-primary/10 shadow-xl">
                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@company.com"
                                    required
                                    className="w-full bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">How can I help you?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project, automation needs, or AI goals..."
                                    required
                                    rows={5}
                                    className="w-full bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                onClick={(e) => { e.preventDefault(); alert("Thanks for the message! (Placeholder for actual form logic)"); }}
                                className="w-full bg-primary text-background-dark py-4 rounded-xl font-black text-lg hover:brightness-110 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <p className="text-center text-xs text-slate-500 italic mt-2">
                                I typically respond within 24 hours.
                            </p>
                        </form>
                    </div>

                </div>
            </main>
        </PageWrapper>
    );
}
