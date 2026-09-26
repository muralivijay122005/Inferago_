// components/About.jsx
import React from "react";
import {
  LuWorkflow,
  LuDatabase,
  LuShieldCheck,
  LuFileCheck,
  LuSparkles,
  LuPlug,
  LuScale,
  LuCircleCheck,
  LuScrollText,
  LuEye,
  LuSlidersHorizontal,
  LuClipboardList,
  LuQuote,
  LuHistory,
  LuTriangleAlert,
  LuShieldQuestion,
} from "react-icons/lu";
import Reveal from "./Reveal";

const capabilities = [
  {
    icon: LuWorkflow,
    title: "AI Workflows",
    desc: "Understand what happens across AI-powered workflows and automations.",
  },
  {
    icon: LuDatabase,
    title: "Data & Tool Access",
    desc: "See what data is accessed, which tools are called, and where actions are going.",
  },
  {
    icon: LuShieldCheck,
    title: "Security & Governance",
    desc: "Evaluate actions against security policies and identify potentially risky activity.",
  },
  {
    icon: LuFileCheck,
    title: "Audit & Control",
    desc: "Keep a clear record of decisions and provide control over sensitive actions.",
  },
];

const flow = [
  { icon: LuSparkles, label: "AI Request" },
  { icon: LuDatabase, label: "Data Access" },
  { icon: LuPlug, label: "Tool / API Action" },
  { icon: LuScale, label: "Risk & Policy Evaluation" },
  { icon: LuCircleCheck, label: "Decision" },
  { icon: LuScrollText, label: "Audit Trail" },
];

const insights = [
  {
    icon: LuHistory,
    title: "What happened",
    desc: "The full chain of requests, data access, and tool calls.",
  },
  {
    icon: LuTriangleAlert,
    title: "Why it matters",
    desc: "The risk and policy context behind each action.",
  },
  {
    icon: LuShieldQuestion,
    title: "Should it be allowed",
    desc: "A clear decision to allow, flag, review, or block.",
  },
];

const layer = [
  {
    icon: LuEye,
    title: "Observe",
    desc: "See actions, data access, tool calls, and workflow activity.",
  },
  {
    icon: LuScale,
    title: "Evaluate",
    desc: "Understand risk and evaluate actions against defined policies.",
  },
  {
    icon: LuSlidersHorizontal,
    title: "Control",
    desc: "Allow, flag, review, or block actions when needed.",
  },
  {
    icon: LuClipboardList,
    title: "Audit",
    desc: "Maintain evidence of activity, decisions, and outcomes.",
  },
];

const systems = ["AI Applications", "AI Workflows", "RAG", "Agents", "Automation", "APIs"];

const GRADIENT = "linear-gradient(90deg,#FF3300 0%,#FFCB83 40%,#0077FF 85%)";

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-black inter-regular overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= INTRO ================= */}
        <Reveal className="flex justify-center mb-8">
          <span className="text-sm tracking-normal text-white/50 uppercase border border-white/10 rounded-full px-4 py-1.5">
            About Us
          </span>
        </Reveal>

        <div className="text-center mb-20 md:mb-28">
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl inter-medium text-white tracking-tight leading-tight mb-4">
              AI is becoming part of every workflow.
              <br className="hidden md:block" /> Security needs to be part of it too.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide">
              Inferago is building the security and governance layer that helps organizations see,
              understand, and control the actions their AI systems take.
            </p>
          </Reveal>
        </div>

        {/* ================= CAPABILITIES ================= */}
        <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-center mb-24 md:mb-32">
          <Reveal direction="left" className="md:col-span-2 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl inter-medium text-white tracking-tight leading-tight mb-4">
              Built for AI that does more than generate.
            </h3>
            <p className="text-sm text-white/40 inter-light leading-6 tracking-wide">
              AI systems are no longer limited to generating text or answering questions. They access
              business data, call tools, trigger workflows, interact with APIs, and take actions across
              connected systems.
            </p>
          </Reveal>

          <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 110} direction="right" className="h-full">
                  <div className="lift-card glass-badge group relative overflow-hidden rounded-2xl p-6 h-full">
                    <div
                      className="absolute -top-24 -right-16 w-[220px] h-[160px] opacity-0 group-hover:opacity-40 blur-[60px] pointer-events-none transition-opacity duration-700"
                      style={{ background: GRADIENT }}
                    />
                    <div className="relative z-10 w-fit bg-white/5 border border-white/15 p-2.5 rounded-xl mb-5">
                      <Icon className="text-xl text-white" strokeWidth={1.8} />
                    </div>
                    <p className="relative z-10 text-sm text-white mb-1">{c.title}</p>
                    <p className="relative z-10 text-sm text-white/50 inter-light leading-5">
                      {c.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ================= FLOW ================= */}
        <Reveal className="mb-24 md:mb-32" threshold={0.2}>
          <div className="glass-badge relative overflow-hidden rounded-3xl px-6 py-12 md:px-12 md:py-16">
            <div
              className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120%] h-[260px] opacity-40 blur-[100px] pointer-events-none"
              style={{ background: GRADIENT }}
            />

            <div className="relative z-10 text-center mb-12 md:mb-14">
              <h3 className="text-2xl md:text-4xl inter-medium text-white tracking-tight mb-3">
                From AI activity to actionable security
              </h3>
              <p className="text-sm text-white/40 inter-light tracking-wide">
                Every AI-driven workflow tells a story.
              </p>
            </div>

            {/* Desktop: horizontal */}
            <div className="relative z-10 hidden md:block">
              <div className="absolute top-6 left-[8.33%] right-[8.33%] h-px bg-white/10" />
              <div className="flow-line absolute top-6 left-[8.33%] right-[8.33%] h-px bg-white/60">

              </div>
              <div className="grid grid-cols-6">
                {flow.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.label} delay={300 + i * 140} className="flex flex-col items-center text-center px-2">
                      <div
                        className="node-pulse relative w-12 h-12 rounded-2xl bg-black border border-white/15 flex items-center justify-center mb-4"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        <Icon className="text-lg text-white/90" strokeWidth={1.6} />
                      </div>
                      <span className="text-xs text-white/30 mb-1">0{i + 1}</span>
                      <span className="text-xs text-white/80 leading-5">{s.label}</span>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Mobile: vertical */}
            <div className="relative z-10 md:hidden max-w-xs mx-auto">
              <div className="absolute top-6 bottom-6 left-6 w-px bg-white/10" />
              <div className="flow-line is-vertical absolute top-6 bottom-6 left-6 w-px bg-white/60">

              </div>
              <div className="space-y-5">
                {flow.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.label} delay={i * 110} direction="left" className="flex items-center gap-4">
                      <div className="relative shrink-0 w-12 h-12 rounded-2xl bg-black border border-white/15 flex items-center justify-center">
                        <Icon className="text-lg text-white/90" strokeWidth={1.6} />
                      </div>
                      <div>
                        <span className="block text-xs text-white/30">0{i + 1}</span>
                        <span className="text-sm text-white/80">{s.label}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 mt-12 md:mt-16 rounded-2xl bg-black/50 border border-white/10 p-5 md:p-6">
              <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
                <Reveal direction="left" className="md:col-span-2">
                  <p className="text-lg md:text-2xl inter-medium text-white tracking-tight leading-snug mb-2">
                    Don't just see what your AI generates. Understand what it does.
                  </p>
                  <p className="text-sm text-white/50 inter-light leading-6">
                    Inferago brings the context behind AI activity into one place.
                  </p>
                </Reveal>

                <div className="md:col-span-3 divide-y divide-white/10 md:border-l md:border-white/10 md:pl-8">
                  {insights.map((q, i) => {
                    const Icon = q.icon;
                    return (
                      <Reveal key={q.title} delay={150 + i * 110} direction="right">
                        <div className="group flex items-center gap-4 py-3">
                          <div className="shrink-0 bg-white/5 border border-white/15 p-2 rounded-lg transition-colors duration-500 group-hover:bg-white/10">
                            <Icon className="text-base text-white" strokeWidth={1.8} />
                          </div>
                          <div className="flex-1 min-w-0 sm:flex sm:items-baseline sm:gap-3">
                            <p className="text-sm text-white shrink-0 sm:w-36">{q.title}</p>
                            <p className="text-sm text-white/50 inter-light leading-5">{q.desc}</p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= ONE LAYER ================= */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-12">
            <Reveal>
              <h3 className="text-2xl md:text-4xl inter-medium text-white tracking-tight mb-4">
                One layer. More visibility. More control.
              </h3>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide">
                Inferago is designed to work around the AI systems and workflows organizations already use.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {layer.map((l, i) => {
              const Icon = l.icon;
              return (
                <Reveal key={l.title} delay={i * 120} className="bg-black">
                  <div className="group relative h-full p-6 md:p-7 transition-colors duration-500 hover:bg-white/[0.03]">
                    <div className="flex items-center justify-between mb-8">
                      <Icon className="text-xl text-white/80 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.6} />
                      <span className="text-xs text-white/20">0{i + 1}</span>
                    </div>
                    <p className="text-base inter-medium text-white mb-2">{l.title}</p>
                    <p className="text-sm text-white/45 inter-light leading-5">{l.desc}</p>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-white/80 group-hover:w-full transition-all duration-700" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ================= SYSTEMS ================= */}
        <div className="mb-24 md:mb-32 text-center">
          <Reveal>
            <h3 className="text-2xl md:text-4xl inter-medium text-white tracking-tight mb-4">
              Built for the AI systems you already use.
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide mb-10">
              Inferago is designed to provide a consistent security and governance layer across different
              AI systems and technologies.
            </p>
          </Reveal>

          <Reveal delay={200} direction="none" className="marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max gap-3">
              {[...systems, ...systems].map((s, i) => (
                <span
                  key={i}
                  aria-hidden={i >= systems.length}
                  className="glass-badge shrink-0 rounded-full px-5 py-2 text-sm text-white/70 whitespace-nowrap"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ================= TEAM / MISSION ================= */}
        <Reveal threshold={0.25}>
          <div className="glass-badge relative overflow-hidden rounded-3xl max-w-4xl mx-auto px-6 py-10 md:px-12 md:py-12 text-center">
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[110%] h-[200px] opacity-50 blur-[90px] pointer-events-none"
              style={{ background: GRADIENT }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <LuQuote className="text-3xl md:text-4xl text-white/40 mx-auto mb-5" />

              <p className="text-xl md:text-3xl inter-medium text-white tracking-tight leading-snug mb-5">
                AI should be able to move fast without becoming impossible to understand or control.
              </p>

              <p className="text-sm text-white/45 inter-light leading-6 tracking-wide max-w-lg mx-auto mb-7">
                Built by a team building for the next generation of AI. Our focus is making AI security
                practical for the real systems organizations are putting into production.
              </p>

              <span className="inline-block text-xs md:text-sm text-white/70 border border-white/15 bg-white/5 rounded-full px-4 py-1.5">
                Make AI actions visible. Make them accountable.
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;
