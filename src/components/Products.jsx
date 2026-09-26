// components/Products.jsx
import React from "react";
import { GoShieldLock } from "react-icons/go";
import { LuScale, LuScrollText } from "react-icons/lu";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "./Reveal";

const Products = () => {
  const products = [
    {
      icon: GoShieldLock,
      iconProps: { strokeWidth: 0.5 },
      title: "AI Security & Governance",
      desc: "Understand and secure AI-driven systems with visibility into actions, data access, tool usage, and external interactions.",
      useStrokeOnly: false,
    },
    {
      icon: LuScale,
      iconProps: { strokeWidth: 2 },
      title: "Risk & Policy Engine",
      desc: "Evaluate AI actions against security policies, identify risky activity, and provide the context behind every decision.",
      useStrokeOnly: true,
    },
    {
      icon: LuScrollText,
      iconProps: { strokeWidth: 2 },
      title: "Audit & Control",
      desc: "Track decisions, maintain an evidence trail, and give teams control over sensitive AI actions.",
      useStrokeOnly: true,
    },
  ];

  const gradientOffsets = ["left-60", "-left-20", "-left-[80%]"];

  return (
    <section id="products" className="py-12 md:py-24 bg-black inter-regular">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <Reveal className="mb-8">
            <span className="text-sm tracking-normal text-white/50 uppercase border border-white/10 rounded-full px-4 py-1.5 inter-regular">
              Products
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl inter-medium text-white tracking-tight leading-tight mb-4">
              Security for AI that acts.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide">
              See, evaluate, and control what your AI systems do, from the first request to the final audit trail.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((product, i) => {
            const IconComponent = product.icon;
            const gradientId = `icon-grad-${i}`;
            const isStrokeOnly = product.useStrokeOnly ?? false;

            return (
              <Reveal key={i} delay={i * 130} className="h-full">
                <div
                  className="
                    lift-card
                    group
                    glass-badge
                    relative
                    overflow-hidden
                    rounded-2xl
                    p-5
                    h-full
                    flex
                    flex-col
                    max-w-[280px] mx-auto md:max-w-none
                  "
                >
                  {/* Shared gradient background */}
                  <div
                    className={`
                      absolute
                      -top-30
                      ${gradientOffsets[i]}
                      w-[120%]
                      h-[200px]
                      bg-[linear-gradient(90deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
                      opacity-75
                      blur-[80px]
                      pointer-events-none
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    `}
                  />

                  {/* ICON BOX */}
                  <div className="bg-white/5 border border-white/25 relative mb-4 w-fit p-2 rounded-lg overflow-hidden">
                    {/* SVG Gradient Definition */}
                    <svg
                      width="0"
                      height="0"
                      className="absolute"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id={gradientId}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="white" stopOpacity="1" />
                          <stop
                            offset="100%"
                            stopColor="white"
                            stopOpacity="0.2"
                          />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Icon with conditional gradient */}
                    <IconComponent
                      className="text-2xl relative z-10"
                      style={{
                        ...(isStrokeOnly
                          ? { stroke: `url(#${gradientId})` }
                          : {
                            fill: `url(#${gradientId})`,
                            stroke: `url(#${gradientId})`,
                          }),
                      }}
                      {...product.iconProps}
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 text-sm mb-1">{product.title}</h3>

                  {/* DESCRIPTION */}
                  <p className="relative z-10 text-sm text-white/50 flex-1 tracking-normal leading-5 inter-light">
                    {product.desc}
                  </p>

                  {/* BUTTON */}
                  <button
                    className="
                      relative z-10
                      mt-4 md:mt-10
                      px-4
                      py-2
                      text-sm
                      inter-medium
                      bg-white
                      text-black
                      rounded-full
                      flex
                      items-center
                      justify-center
                      gap-1.5
                      w-fit
                      hover:bg-white/90
                      transition-all
                      duration-300
                      active:scale-95
                    "
                  >
                    Learn More
                    <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
