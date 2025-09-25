import React from 'react';
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
} from 'react-icons/si';

function Badge({ children, label }) {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm text-white/95 hover:bg-white/20 transition"
      title={label}
      aria-label={label}
    >
      {children}
    </span>
  );
}

/* A circular orbit that rotates its child around the center */
function Orbit({ radius = 260, duration = '45s', delay = '0s', children, ringOpacity = 0.18 }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-violet-400/20"
      style={{
        width: radius * 2,
        height: radius * 2,
        transform: 'translate(-50%, -50%)',
        boxShadow: `0 0 0 1px rgba(167, 139, 250, ${ringOpacity}) inset`,
      }}
      aria-hidden="true"
    >
      {/* Rotator uses Tailwind's built-in spin; we override duration & delay via style */}
      <div
        className="absolute inset-0 animate-spin pointer-events-none"
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        {/* Place the icon at the top of the orbit */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: 0 }}>
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
      aria-label="Join a cross-functional team"
    >
      {/* Headline */}
      <div className="mt-2 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          I&apos;m currently looking to join a{' '}
          <span className="underline decoration-pink-400/70 decoration-2 underline-offset-4">
            cross-functional
          </span>{' '}
          team
        </h2>
        <p className="mt-3 text-white/80">
          that values improving people&apos;s lives through accessible design
        </p>
      </div>

      {/* Top tech badges */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 z-10">
        <Badge label="Figma"><SiFigma /></Badge>
        <Badge label="React"><SiReact /></Badge>
        <Badge label="CSS3"><SiCss3 /></Badge>
        <Badge label="Node"><SiNodedotjs /></Badge>
        <Badge label="Tailwind"><SiTailwindcss /></Badge>
        <Badge label="JavaScript"><SiJavascript /></Badge>

        <Badge label="Adobe XD"><SiAdobexd /></Badge>
        <Badge label="Next.js"><SiNextdotjs /></Badge>
        <Badge label="Illustrator"><SiAdobeillustrator /></Badge>
        <Badge label="Express"><SiExpress /></Badge>
        <Badge label="MongoDB"><SiMongodb /></Badge>
      </div>

      {/* Fan “wires” connecting badges downwards */}
      <div className="relative h-12 w-full max-w-xl mt-2 pointer-events-none" aria-hidden="true">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-0 h-24 w-[2px] bg-gradient-to-b from-transparent via-violet-400/20 to-violet-400/0"
            style={{
              transform: `translateX(-50%) rotate(${(-18 + i * 6)}deg)`,
              transformOrigin: 'top center',
            }}
          />
        ))}
      </div>

      {/* Central area */}
      <div className="relative mt-10 w-full max-w-4xl aspect-[2.4/1]">
        {/* Background glow ellipse */}
        <div className="absolute inset-0 rounded-full blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,.25),transparent_65%)]" />

        {/* Orbits */}
        <div className="absolute inset-0">
          <Orbit radius={260} duration="70s" ringOpacity={0.12}>
            <Badge label="JS"><SiJavascript /></Badge>
          </Orbit>
          <Orbit radius={220} duration="45s" ringOpacity={0.16} delay="-4s">
            <Badge label="React"><SiReact /></Badge>
          </Orbit>
          <Orbit radius={180} duration="28s" ringOpacity={0.20} delay="-8s">
            <Badge label="Next.js"><SiNextdotjs /></Badge>
          </Orbit>
        </div>

        {/* Decorative elliptical tracks */}
        <div className="absolute left-1/2 top-[58%] -translate-x-1/2 w-[92%] h-[52%] rounded-[50%] border border-violet-400/15" />
        <div className="absolute left-1/2 top-[62%] -translate-x-1/2 w-[86%] h-[48%] rounded-[50%] border border-violet-400/12" />
        <div className="absolute left-1/2 top-[66%] -translate-x-1/2 w-[78%] h-[44%] rounded-[50%] border border-violet-400/10" />

        {/* Center glowing sphere */}
        <div
          className="absolute left-1/2 top-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full
                     bg-[radial-gradient(circle_at_50%_40%,#8b5cf6_15%,#5b21b6_60%,transparent_65%)]
                     ring-2 ring-white/10 shadow-glow flex items-center justify-center"
        >
          <span className="text-5xl font-black tracking-wider text-white/95 drop-shadow-[0_0_18px_rgba(255,255,255,.45)]">
            Σ
          </span>
        </div>
      </div>
    </section>
  );
}