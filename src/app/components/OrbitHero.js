// src/app/components/OrbitHero.js
import React from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiAdobexd,
  SiAdobeillustrator,
} from "react-icons/si";

// Reusable circular icon badge (no TypeScript types)
function Badge({ children, label }) {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-full
                 bg-white/10 ring-1 ring-white/15 backdrop-blur-sm text-white/95 
                 hover:bg-white/20 transition text-xl shadow-md hover:shadow-teal-400/40"
      title={label}
      aria-label={label}
    >
      {children}
    </span>
  );
}

// Single orbit ring with one badge rotating around (no TypeScript types)
function Orbit({ radius = 260, duration = "45s", delay = "0s", children, ringOpacity = 0.2 }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-violet-400/25"
      style={{
        width: radius * 2,
        height: radius * 2,
        transform: "translate(-50%, -50%)",
        boxShadow: `0 0 0 1px rgba(167, 139, 250, ${ringOpacity}) inset`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 animate-spin pointer-events-none"
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function OrbitHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-start pt-16 pb-24 px-6 
                 bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white"
      aria-label="About Hansaka Wijesinghe"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-[-200px] mx-auto h-[500px] max-w-xl rounded-full bg-purple-500/25 blur-[140px]" />
        <div className="absolute -bottom-40 -left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
      </div>

      {/* Heading / Intro */}
      <div className="mt-4 text-center max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300/80">
          Web Developer & Graphic Designer
        </p>
      
        <p className="mt-3 text-sm md:text-base text-white/80">
          I&apos;m currently looking to join a{" "}
          <span className="underline decoration-pink-400/70 decoration-2 underline-offset-4">
            cross-functional
          </span>{" "}
          team that values improving people&apos;s lives through accessible
          design and thoughtful engineering.
        </p>
      </div>

      {/* Dev + Design tech badges */}
      <div className="mt-6 space-y-3">
        {/* Dev tools */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300/90">
          <span className="mr-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Development
          </span>
          <Badge label="React">
            <SiReact />
          </Badge>
          <Badge label="Next.js">
            <SiNextdotjs />
          </Badge>
          <Badge label="JavaScript">
            <SiJavascript />
          </Badge>
          <Badge label="CSS3">
            <SiCss3 />
          </Badge>
          <Badge label="Tailwind CSS">
            <SiTailwindcss />
          </Badge>
          <Badge label="Node.js">
            <SiNodedotjs />
          </Badge>
          <Badge label="Express">
            <SiExpress />
          </Badge>
          <Badge label="MongoDB">
            <SiMongodb />
          </Badge>
        </div>

        {/* Design tools */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300/90">
          <span className="mr-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Design
          </span>
          <Badge label="Figma">
            <SiFigma />
          </Badge>
          <Badge label="Adobe XD">
            <SiAdobexd />
          </Badge>
          <Badge label="Illustrator">
            <SiAdobeillustrator />
          </Badge>
        </div>
      </div>

      {/* Fan wires */}
      <div
        className="relative h-14 w-full max-w-xl mt-5 pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(9)].map((_, i) => {
          const spread = 40;
          const angle = -spread / 2 + (i * spread) / 8;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-0 h-24 w-[2px] 
                         bg-gradient-to-b from-transparent via-violet-400/25 to-transparent"
              style={{
                transform: `translateX(-50%) rotate(${angle}deg)`,
                transformOrigin: "top center",
              }}
            />
          );
        })}
      </div>

      {/* Orbit system + central logo */}
      <div className="relative mt-10 w-full max-w-4xl aspect-[2.4/1]">
        {/* Background glow ellipse */}
        <div
          className="absolute inset-0 rounded-full blur-3xl 
                        bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,.35),transparent_70%)]"
          aria-hidden="true"
        />

        {/* Orbits */}
        <Orbit radius={260} duration="90s" ringOpacity={0.1}>
          <Badge label="JavaScript">
            <SiJavascript />
          </Badge>
        </Orbit>
        <Orbit radius={200} duration="55s" ringOpacity={0.15} delay="-6s">
          <Badge label="React">
            <SiReact />
          </Badge>
        </Orbit>
        <Orbit radius={150} duration="35s" ringOpacity={0.2} delay="-12s">
          <Badge label="Next.js">
            <SiNextdotjs />
          </Badge>
        </Orbit>

        {/* Decorative elliptical rings */}
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                       rounded-[50%] border border-violet-400/15"
            style={{
              width: `${92 - idx * 6}%`,
              height: `${52 - idx * 4}%`,
            }}
            aria-hidden="true"
          />
        ))}

        {/* Center glowing sphere with logo */}
        <div
          className="absolute left-1/2 top-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full
                     bg-[radial-gradient(circle_at_50%_40%,#8b5cf6_20%,#5b21b6_70%,transparent_80%)]
                     ring-2 ring-white/10 shadow-xl flex items-center justify-center overflow-hidden
                     group hover:scale-105 transition-transform duration-500"
        >
          <div className="absolute inset-0 rounded-full bg-teal-400/20 animate-ping" />
          <Image
            src="/Wijex logoW.png" // ensure this file exists in /public
            alt="Wijex logo"
            fill
            className="object-contain relative z-10 transition-transform duration-700 
                       group-hover:scale-110 group-hover:rotate-3"
            sizes="176px"
            priority
          />
        </div>
      </div>

      {/* CTA row */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white
                     shadow-lg shadow-teal-500/40 hover:bg-teal-400 hover:-translate-y-0.5 transition-transform"
        >
          View projects
        </a>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-teal-400 px-6 py-2.5 text-sm font-semibold text-teal-300
                     hover:bg-teal-500 hover:text-white hover:-translate-y-0.5 transition-transform"
        >
          Let&apos;s work together
        </a>
      </div>
    </section>
  );
}