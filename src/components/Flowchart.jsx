// components/Flowchart.jsx

import React, { useId } from "react";
import { FiLock } from "react-icons/fi";
import { LuChartLine, LuScanEye } from "react-icons/lu";
import { BsPlusLg } from "react-icons/bs";
import { RiGitBranchLine } from "react-icons/ri";
import Reveal from "./Reveal";

const GRADIENT = "linear-gradient(135deg, #FF3300 0%, #FFCB83 45%, #0077FF 100%)";

// Desktop stage is drawn on a 1100 x 600 canvas and scaled with percentages.
// Card anchors sit at x = 320 / 780 (29.09% / 70.91%), y = 190 / 410 (31.67% / 68.33%).
const features = [
  {
    Icon: FiLock,
    title: "Security",
    desc: "Protect AI agents with trusted safeguards",
    isStrokeOnly: true,
    side: "left",
    top: "31.667%",
    path: "M 320 190 H 380 C 440 190, 420 285, 460 285 H 534",
  },
  {
    Icon: RiGitBranchLine,
    title: "Automation",
    desc: "Streamline tasks with smart workflows",
    isStrokeOnly: false,
    side: "left",
    top: "68.333%",
    path: "M 320 410 H 380 C 440 410, 420 315, 460 315 H 534",
  },
  {
    Icon: LuChartLine,
    title: "Analytics",
    desc: "Gain insights from agent performance",
    isStrokeOnly: true,
    side: "right",
    top: "31.667%",
    path: "M 780 190 H 720 C 660 190, 680 285, 640 285 H 566",
  },
  {
    Icon: LuScanEye,
    title: "Real-time Monitoring",
    desc: "Track activities with full oversight",
    isStrokeOnly: true,
    side: "right",
    top: "68.333%",
    path: "M 780 410 H 720 C 660 410, 680 315, 640 315 H 566",
  },
];

// Mobile stage is drawn on a 360 x 440 canvas. Cards sit above / below the core,
// with their inner edge on the line anchor (y = 92 / 348 -> 79.09% from the far edge).
const byTitle = Object.fromEntries(features.map((f) => [f.title, f]));

const mobileFeatures = [
  {
    ...byTitle["Security"],
    row: "top",
    left: "26.39%",
    anchor: [95, 92],
    path: "M 95 92 V 170 Q 95 200 125 200 H 140",
  },
  {
    ...byTitle["Analytics"],
    row: "top",
    left: "73.61%",
    anchor: [265, 92],
    path: "M 265 92 V 170 Q 265 200 235 200 H 220",
  },
  {
    ...byTitle["Automation"],
    row: "bottom",
    left: "26.39%",
    anchor: [95, 348],
    path: "M 95 348 V 270 Q 95 240 125 240 H 140",
  },
  {
    ...byTitle["Real-time Monitoring"],
    row: "bottom",
    left: "73.61%",
    anchor: [265, 348],
    path: "M 265 348 V 270 Q 265 240 235 240 H 220",
  },
];

/* ------------------------------------------------------------------ */
/* Center core                                                         */
/* ------------------------------------------------------------------ */

const Core = ({ size = "lg" }) => {
  const lg = size === "lg";
  return (
    <div className={`relative flex items-center justify-center ${lg ? "w-[200px] h-[200px]" : "w-[150px] h-[150px]"}`}>
      {/* Glow */}
      <div
        className={`absolute rounded-3xl blur-[30px] opacity-90 ${lg ? "w-[150px] h-[150px]" : "w-[100px] h-[100px]"}`}
        style={{ background: GRADIENT }}
      />

      {/* Rotating dashed ring */}
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 w-full h-full" aria-hidden="true">
        <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeDasharray="2 6" />
      </svg>

      {/* Glass plate */}
      <div className={`absolute bg-white/5 border border-white/15 backdrop-blur-xl ${lg ? "w-[130px] h-[130px] rounded-[2rem]" : "w-[100px] h-[100px] rounded-3xl"}`} />

      {/* Logo tile */}
      <div className={`relative bg-black flex items-center justify-center border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${lg ? "w-26 h-26 rounded-3xl" : "w-20 h-20 rounded-2xl"}`}>
        <img src="./Infer_White.png" className={lg ? "w-14 h-14" : "w-10 h-10"} alt="Infer" />

        {lg && (
          <>
            <BsPlusLg className="absolute -top-8 -left-8 text-white/80 text-base" />
            <BsPlusLg className="absolute -top-8 -right-8 text-white/80 text-base" />
            <BsPlusLg className="absolute -bottom-8 -left-8 text-white/80 text-base" />
            <BsPlusLg className="absolute -bottom-8 -right-8 text-white/80 text-base" />
          </>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Flowchart                                                           */
/* ------------------------------------------------------------------ */

const Flowchart = () => {
  return (
    <section className="relative inter-regular bg-transparent overflow-hidden -mt-px">

      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-30"
        style={{ top: "-55px" }}
      />

      {/* Gradient Blob */}
      <div
        className="absolute -bottom-130 left-1/2 -translate-x-1/2 w-[800px] max-w-[160vw] h-[600px]
        bg-[linear-gradient(90deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
        opacity-70 blur-[90px] z-0 animate-blob-drift"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full px-4 md:px-6">

        {/* ========================= */}
        {/* DESKTOP (lg and up)       */}
        {/* ========================= */}

        <div className="relative hidden lg:block w-full max-w-[1100px] aspect-[11/6] mx-auto">

          {/* Connectors */}
          <Reveal direction="none" delay={250} threshold={0.1} className="absolute inset-0 z-10 pointer-events-none">
            <svg
              className="connector-draw absolute inset-0 w-full h-full"
              viewBox="0 0 1100 600"
              fill="none"
            >
              <defs>
                <linearGradient id="lineFadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineFadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.9" />
                </linearGradient>
                <radialGradient id="dotGlow">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>

              {features.map((f, i) => {
                const x = f.side === "left" ? 320 : 780;
                const y = f.top === "31.667%" ? 190 : 410;
                return (
                  <g key={f.title}>
                    {/* Anchor */}
                    <circle cx={x} cy={y} r="7" fill="none" stroke="white" strokeOpacity="0.25" />
                    <circle cx={x} cy={y} r="2.5" fill="white" />

                    {/* Dashed line */}
                    <path
                      d={f.path}
                      stroke={f.side === "left" ? "url(#lineFadeLeft)" : "url(#lineFadeRight)"}
                      strokeWidth={1.6}
                      strokeDasharray="2 4"
                      fill="none"
                    />

                    {/* Travelling signal */}
                    <circle r="6" fill="url(#dotGlow)" className="motion-dot">
                      <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${1.6 + i * 0.8}s`} path={f.path} />
                    </circle>
                  </g>
                );
              })}
            </svg>
          </Reveal>

          {/* Core */}
          <Reveal direction="zoom" threshold={0.1} className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <Core size="lg" />
          </Reveal>

          {/* Cards */}
          {features.map((f, i) => (
            <div
              key={f.title}
              className="absolute z-30 w-[clamp(210px,23%,256px)]"
              style={{
                top: f.top,
                transform: "translateY(-50%)",
                ...(f.side === "left"
                  ? { right: "calc(70.909% + 16px)" }
                  : { left: "calc(70.909% + 16px)" }),
              }}
            >
              <FeatureCard {...f} direction="zoom" delay={550 + (i % 2) * 150} />
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* MOBILE + TABLET (< lg)    */}
        {/* ========================= */}

        <div className="lg:hidden pt-4 pb-14 md:pt-8 md:pb-20">
          <div className="relative w-full max-w-[440px] aspect-[9/11] mx-auto">

            {/* Connectors */}
            <Reveal direction="none" delay={250} threshold={0.1} className="absolute inset-0 z-10 pointer-events-none">
              <svg className="connector-draw absolute inset-0 w-full h-full" viewBox="0 0 360 440" fill="none">
                <defs>
                  <linearGradient id="mLineFade" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.9" />
                  </linearGradient>
                  <radialGradient id="mDotGlow">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {mobileFeatures.map((m, i) => (
                  <g key={m.title}>
                    <circle cx={m.anchor[0]} cy={m.anchor[1]} r="2.5" fill="white" />
                    <path d={m.path} stroke="url(#mLineFade)" strokeWidth={1.5} strokeDasharray="2 4" fill="none" />
                    <circle r="5" fill="url(#mDotGlow)" className="motion-dot">
                      <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${1.6 + i * 0.65}s`} path={m.path} />
                    </circle>
                  </g>
                ))}
              </svg>
            </Reveal>

            {/* Core */}
            <Reveal direction="zoom" threshold={0.1} className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <Core size="sm" />
            </Reveal>

            {/* Cards */}
            {mobileFeatures.map((m, i) => (
              <div
                key={m.title}
                className="absolute z-30 w-[44%]"
                style={{
                  left: m.left,
                  transform: "translateX(-50%)",
                  ...(m.row === "top" ? { bottom: "calc(79.09% + 6px)" } : { top: "calc(79.09% + 6px)" }),
                }}
              >
                <FeatureCard {...m} desc={null} compact direction="zoom" delay={500 + i * 110} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Feature card                                                        */
/* ------------------------------------------------------------------ */

const FeatureCard = ({
  Icon: CardIcon,
  title,
  desc,
  isStrokeOnly = false,
  strokeWidth = 2.2,
  compact = false,
  direction = "up",
  delay = 0,
}) => {
  const uniqueId = useId();
  const gradientId = `feature-grad-${title.toLowerCase().replace(/\s+/g, "-")}-${uniqueId}`;

  return (
    <Reveal direction={direction} delay={delay} threshold={0.1} className="h-full">
      <div className={`flow-card group relative w-full h-full overflow-hidden ${compact ? "p-2 sm:p-2.5 rounded-xl" : "p-4 rounded-2xl"}`}>

        {/* Top sheen */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.07] to-transparent pointer-events-none" />

        {/* Hover light */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div
          className={`relative flex flex-row items-center ${compact ? "gap-2.5" : "gap-3.5"}`}
        >
          <div className={`flex-shrink-0 ${compact ? "w-9 h-9 rounded-lg" : "w-11 h-11 md:w-12 md:h-12 rounded-xl"} bg-white/[0.06] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] flex items-center justify-center relative overflow-hidden transition-colors duration-500 group-hover:bg-white/10`}>
            <svg width="0" height="0" className="absolute" aria-hidden="true">
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            <CardIcon
              className={compact ? "text-lg" : "text-[22px] md:text-2xl"}
              style={
                isStrokeOnly
                  ? { stroke: `url(#${gradientId})`, strokeWidth, fill: "transparent" }
                  : { fill: `url(#${gradientId})`, stroke: `url(#${gradientId})`, strokeWidth: 0 }
              }
            />
          </div>

          <div className="min-w-0">
            <h3 className={`inter-regular text-white tracking-tight leading-tight ${compact ? "text-xs sm:text-sm" : "text-sm md:text-base"}`}>
              {title}
            </h3>
            {desc && (
              <p
                className="text-white/55 text-xs md:text-sm leading-snug mt-1 inter-light line-clamp-2"
              >
                {desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Flowchart;
