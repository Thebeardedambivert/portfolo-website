import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Terminal, Workflow, Layers, Webhook } from "lucide-react";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-12 pb-10 px-4 sm:pt-16 sm:pb-14 sm:px-6 lg:pt-20 lg:pb-16 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Text block — always first; desktop buttons live inside here */}
          <div className="flex-1 w-full space-y-6 lg:space-y-8 order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              AI automations + web apps that <span className="text-primary">reduce busywork</span>.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              AI Automation Engineer • React + Python • n8n/Zapier • Remote. I build robust architectures that handle complex logic and scale with your business needs.
            </p>
            {/* Desktop-only CTA buttons — hidden on mobile, shown on lg+ */}
            <div className="hidden lg:flex gap-4 pt-2">
              <a
                href="https://cal.com/nwachukwu-cyril-st5fot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2 group"
              >
                Book a Call
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <Link
                href="/projects"
                className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-xl text-base font-bold transition-all"
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Hero image — order-2 on mobile (between headline and buttons), order-last on desktop */}
          <div className="flex-1 w-full max-w-[420px] sm:max-w-[500px] order-2 lg:order-last">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" alt="Abstract 3D digital neural network visualization" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" />
              </div>
            </div>
          </div>

          {/* Mobile-only CTA buttons — order-3 (below image), hidden on lg+ */}
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 order-3 lg:hidden">
            <a
              href="https://cal.com/nwachukwu-cyril-st5fot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2 group"
            >
              Book a Call
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <Link
              href="/projects"
              className="w-full sm:w-auto text-center bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-xl text-base font-bold transition-all"
            >
              View My Work
            </Link>
          </div>

        </div>
      </section>


      {/* Tech Marquee */}
      <div className="w-full border-y border-primary/10 py-8 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-around items-center gap-8 opacity-80 sm:opacity-60 sm:grayscale hover:grayscale-0 hover:opacity-100 transition-all text-slate-700 dark:text-slate-300">
            <span className="text-xl font-bold flex items-center gap-2"><Code2 /> React</span>
            <span className="text-xl font-bold flex items-center gap-2"><Terminal /> Python</span>
            <span className="text-xl font-bold flex items-center gap-2"><Workflow /> n8n</span>
            <span className="text-xl font-bold flex items-center gap-2"><Layers /> LangGraph</span>
            <span className="text-xl font-bold flex items-center gap-2"><Webhook /> Zapier</span>
          </div>
        </div>
      </div>

      {/* Proof Section */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="px-6 py-3 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-semibold">Workflow automation</div>
          <div className="px-6 py-3 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-semibold">Multi-step pipelines</div>
          <div className="px-6 py-3 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-semibold">Agent orchestration</div>
          <div className="px-6 py-3 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-semibold">Production-minded</div>
        </div>

        <div className="mt-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Professional Bio</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Specializing in AI agents, automation pipelines, and production-ready systems. I build robust architectures that handle complex logic and scale with your business needs. With a deep background in Fullstack engineering and LLM orchestration, I bridge the gap between experimental AI and reliable enterprise software.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4">Core Services</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">web</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Web Apps</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Performance-focused React and Next.js applications integrated with AI capabilities and intuitive user interfaces.
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-primary size-4" /> Responsive Dashboard</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-primary size-4" /> Real-time UI updates</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">api</span>
            </div>
            <h3 className="text-xl font-bold mb-4">APIs & Backend</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Scalable Python backends and custom API integrations ensuring seamless data flow across your technical stack.
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-primary size-4" /> FastAPI Development</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-primary size-4" /> Database Management</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all group">
            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Automation</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Complex n8n and Zapier workflows combined with AI agents to automate repetitive tasks and optimize workflows.
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-primary size-4" /> AI Agentic Workflows</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-primary size-4" /> Error Handling & Logs</li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
