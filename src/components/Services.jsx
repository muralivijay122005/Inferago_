// components/Services.jsx
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { TbBrowserPlus } from "react-icons/tb";
import { LuBot, LuLayoutTemplate, LuWrench } from "react-icons/lu";
import Reveal from "./Reveal";

const TECH_SERVICES_URL = "https://techservices.inferago.com/";

const GRADIENT = "linear-gradient(90deg,#FF3300 0%,#FFCB83 40%,#0077FF 85%)";

const services = [
  {
    icon: TbBrowserPlus,
    title: "Web & Software",
    desc: "Websites, applications, APIs, and digital products.",
  },
  {
    icon: LuBot,
    title: "AI & Automation",
    desc: "AI solutions and intelligent workflows for modern businesses.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Product Design",
    desc: "UI/UX, prototyping, and product experiences.",
  },
  {
    icon: LuWrench,
    title: "Tech Support",
    desc: "Maintenance, optimization, and ongoing development.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-black inter-regular overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <Reveal className="flex justify-center mb-8">
          <span className="text-sm tracking-normal text-white/50 uppercase border border-white/10 rounded-full px-4 py-1.5">
            Services
          </span>
        </Reveal>

        {/* Headline */}
        <div className="text-center mb-14">
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl inter-medium text-white tracking-tight leading-tight mb-4">
              Technology that moves<br className="hidden md:block" /> ideas forward.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide">
              Beyond our products, the Inferago team designs, builds, and supports technology for modern businesses.
            </p>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.title} delay={i * 110} className="h-full">
                <a
                  href={TECH_SERVICES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift-card glass-badge group relative overflow-hidden rounded-2xl p-6 h-full flex flex-col"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute -top-24 -right-16 w-[220px] h-[160px] opacity-0 group-hover:opacity-40 blur-[60px] pointer-events-none transition-opacity duration-700"
                    style={{ background: GRADIENT }}
                  />

                  {/* Icon + arrow row */}
                  <div className="relative z-10 flex items-start justify-between mb-5">
                    <div className="w-fit bg-white/5 border border-white/15 p-2.5 rounded-xl">
                      <Icon className="text-xl text-white" strokeWidth={1.8} />
                    </div>
                    <HiArrowUpRight className="text-sm text-white/30 transition-all duration-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-sm text-white mb-1">{svc.title}</h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-white/50 inter-light leading-5">{svc.desc}</p>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={150}>
          <div className="mt-10 glass-badge relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div
              className="absolute -bottom-24 right-0 w-[60%] h-[160px] opacity-30 blur-[80px] pointer-events-none"
              style={{ background: "linear-gradient(90deg,#FF3300 0%,#FFCB83 40%,#0077FF 85%)" }}
            />
            <div className="relative z-10 text-center md:text-left">
              <p className="text-base md:text-lg inter-medium text-white tracking-tight mb-1">
                Have a project in mind?
              </p>
              <p className="text-sm text-white/40 inter-light leading-5">
                Let's talk about what we can build together.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={TECH_SERVICES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 px-6 py-2.5 text-sm text-white/70 border border-white/15 rounded-full hover:text-white hover:border-white/30 transition-all duration-300"
              >
                Tech Services <HiArrowUpRight className="text-sm" />
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="shrink-0 flex items-center gap-2 px-6 py-2.5 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 active:scale-95 inter-medium"
              >
                Get in Touch <HiArrowUpRight className="text-sm" />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Services;
