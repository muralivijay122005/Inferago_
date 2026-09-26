// components/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { LuCopy, LuCheck, LuMail } from "react-icons/lu";
import Reveal from "./Reveal";

const EMAIL = "contact@inferago.com";
const GRADIENT = "linear-gradient(90deg,#FF3300 0%,#FFCB83 40%,#0077FF 85%)";

const fieldClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.07]";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  // Opens the visitor's mail app with the message pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const subject = `Inquiry from ${name}`;
    const body = `${data.get("message")}\n\n${name}\n${data.get("email")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-black inter-regular overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <Reveal className="flex justify-center mb-8">
          <span className="text-sm tracking-normal text-white/50 uppercase border border-white/10 rounded-full px-4 py-1.5">
            Contact Us
          </span>
        </Reveal>

        {/* Headline */}
        <div className="text-center mb-14">
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl inter-medium text-white tracking-tight leading-tight mb-4">
              Let's build something together.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide">
              Have a question, a use case in mind, or want a live demo? Send us a message and our team will get back to you.
            </p>
          </Reveal>
        </div>

        {/* Card */}
        <Reveal delay={150} threshold={0.1}>
          <div className="glass-badge relative overflow-hidden rounded-3xl">
            <div
              className="absolute -top-32 -left-20 w-[70%] h-[260px] opacity-60 blur-[90px] pointer-events-none"
              style={{ background: GRADIENT }}
            />

            <div className="relative z-10 grid md:grid-cols-2">

              {/* Email panel */}
              <div className="flex flex-col justify-between gap-12 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                <div>
                  <div className="bg-white/5 border border-white/25 w-fit p-2 rounded-lg mb-6">
                    <LuMail className="text-2xl text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-2xl md:text-3xl inter-medium text-white tracking-tight leading-tight mb-3">
                    Talk to our team.
                  </h3>
                  <p className="text-sm text-white/45 inter-light leading-6 tracking-wide max-w-sm">
                    Whether you're evaluating Inferago for your organization or have a project in mind, we'd love to hear from you.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/40 tracking-widest uppercase mb-3">Email us</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-center gap-2 text-xl md:text-2xl text-white tracking-tight"
                  >
                    <span className="relative">
                      {EMAIL}
                      <span
                        className="absolute left-0 -bottom-1 h-px w-0 bg-white group-hover:w-full transition-all duration-500"
                      />
                    </span>
                    <HiArrowUpRight className="text-base text-white/50 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mt-5 flex items-center gap-2 px-4 py-2 text-xs text-white/70 border border-white/15 rounded-full hover:text-white hover:border-white/30 transition-all duration-300 active:scale-95"
                  >
                    {copied ? <LuCheck className="text-sm" /> : <LuCopy className="text-sm" />}
                    {copied ? "Copied" : "Copy email"}
                  </button>
                </div>
              </div>

              {/* Form panel */}
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs text-white/40 tracking-widest uppercase">Name</span>
                    <input name="name" type="text" placeholder="John Doe" required className={fieldClass} />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs text-white/40 tracking-widest uppercase">Email</span>
                    <input name="email" type="email" placeholder="john@company.com" required className={fieldClass} />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-xs text-white/40 tracking-widest uppercase">Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your use case or question..."
                    required
                    className={`${fieldClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="group flex inter-medium items-center justify-center gap-2 w-full sm:w-auto px-8 py-2.5 text-sm text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 active:scale-95"
                >
                  Send Message
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;
