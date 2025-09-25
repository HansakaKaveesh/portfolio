import React from 'react';
import Image from 'next/image';
import { FiMapPin, FiGlobe, FiUserPlus, FiArrowDownCircle } from 'react-icons/fi';
import { SiNextdotjs, SiTailwindcss, SiReact } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter, FaRocket } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-screen flex flex-col items-center justify-center px-6 text-center text-white overflow-hidden bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/programmer-night.jpg')" }}
      aria-label="Hero section"
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/100 z-0 pointer-events-none" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-teal-500/25 blur-[110px] rounded-full z-0 pointer-events-none" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-[480px] h-[480px] bg-indigo-500/20 blur-[120px] rounded-full z-0" />

      {/* Avatar */}
      <div className="mb-8 relative z-10">
        <div
          className="p-[3px] rounded-full"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #14b8a6, #22d3ee, #6366f1, #14b8a6)',
          }}
        >
          <div className="rounded-full p-1 backdrop-blur-md bg-white/5 shadow-inner border border-white/10">
            <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-teal-500 shadow-xl transition-transform duration-300 hover:scale-105">
              <Image
                src="/my.jpg"
                alt="Profile photo"
                fill
                sizes="(min-width: 640px) 10rem, 9rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
        Hi, I&apos;m{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">
          Hansaka Wijesinghe
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-5 max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-300 z-10 leading-relaxed">
        Web developer crafting{' '}
        <span className="text-teal-300 font-medium">modern</span>,{' '}
        <span className="text-teal-300 font-medium">responsive</span> user experiences with{' '}
        <span className="inline-flex items-center gap-1 text-teal-300 font-semibold">
          <SiNextdotjs className="text-white/90" aria-hidden="true" /> Next.js
        </span>{' '}
        &{' '}
        <span className="inline-flex items-center gap-1 text-teal-300 font-semibold">
          <SiTailwindcss aria-hidden="true" /> Tailwind CSS
        </span>.
      </p>

      {/* Tech chips */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 z-10">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-sm text-white/90">
          <SiReact className="text-cyan-300" aria-hidden="true" /> React
        </span>
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-sm text-white/90">
          <SiNextdotjs className="text-white/90" aria-hidden="true" /> Next.js
        </span>
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-sm text-white/90">
          <SiTailwindcss className="text-teal-300" aria-hidden="true" /> Tailwind
        </span>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/40"
          aria-label="View projects"
        >
          <FaRocket className="text-white" aria-hidden="true" /> View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-teal-400 text-teal-300 hover:bg-teal-600 hover:text-white py-3 px-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-teal-500/30 hover:-translate-y-1"
          aria-label="Hire me"
        >
          <FiUserPlus aria-hidden="true" /> Hire Me
        </a>
      </div>

      {/* Socials */}
      <div className="mt-8 flex items-center gap-4 z-10">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
        >
          <FaGithub className="text-white/90 group-hover:text-white text-xl" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
        >
          <FaLinkedin className="text-sky-300 group-hover:text-sky-200 text-xl" aria-hidden="true" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="group inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
        >
          <FaTwitter className="text-cyan-300 group-hover:text-cyan-200 text-xl" aria-hidden="true" />
        </a>
      </div>

      {/* Meta */}
      <div className="mt-10 text-sm text-gray-300 z-10 flex items-center gap-4">
        <span className="inline-flex items-center gap-2">
          <FiMapPin className="text-teal-300" aria-hidden="true" /> San Francisco
        </span>
        <span className="inline-flex items-center gap-2">
          <FiGlobe className="text-teal-300" aria-hidden="true" /> Available Worldwide
        </span>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-teal-300/90">
        <FiArrowDownCircle
          className="animate-bounce motion-reduce:animate-none text-3xl"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}