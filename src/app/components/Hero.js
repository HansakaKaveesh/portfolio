"use client";
import React from 'react';
import Image from 'next/image';
import { FiUserPlus } from 'react-icons/fi';
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95 z-0 pointer-events-none" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-500/20 blur-[140px] rounded-full animate-pulse z-0 pointer-events-none" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full z-0" />

      {/* Floating Avatar */}
      <div className="mb-8 relative z-10 animate-float">
        <div
          className="p-[3px] rounded-full shadow-lg"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #14b8a6, #22d3ee, #6366f1, #14b8a6)',
          }}
        >
          <div className="rounded-full p-1 backdrop-blur-md bg-white/10 shadow-inner border border-white/10 relative">
            {/* Glowing aura */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400/20 to-cyan-400/10 blur-xl animate-pulse" />
            <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-teal-400 shadow-xl">
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
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 animate-gradient bg-[length:200%_200%]">
          Hansaka Wijesinghe
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-5 max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-300 z-10 leading-relaxed">
        Web developer crafting{' '}
        <span className="text-teal-300 font-medium">modern</span>,{' '}
        <span className="text-teal-300 font-medium">responsive</span> user
        experiences with{' '}
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
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiReact className="text-cyan-300" aria-hidden="true" /> React
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiNextdotjs className="text-white" aria-hidden="true" /> Next.js
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiTailwindcss className="text-sky-400" aria-hidden="true" /> Tailwind
        </span>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/40 focus-visible:ring-2 focus-visible:ring-teal-400"
        >
          <FaRocket aria-hidden="true" /> View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-teal-400 text-teal-300 hover:bg-teal-600 hover:text-white py-3 px-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-teal-500/30 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-teal-400"
        >
          <FiUserPlus aria-hidden="true" /> Hire Me
        </a>
      </div>

      {/* Socials */}
      <div className="mt-8 flex items-center gap-4 z-10">
        {[ 
          { href: "https://github.com/", icon: <FaGithub className="text-white text-2xl group-hover:scale-110" aria-hidden="true" />}, 
          { href: "https://linkedin.com/", icon: <FaLinkedin className="text-sky-300 text-2xl group-hover:scale-110" aria-hidden="true" />}, 
          { href: "https://twitter.com/", icon: <FaTwitter className="text-cyan-300 text-2xl group-hover:scale-110" aria-hidden="true" />}
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-transform focus-visible:ring-2 focus-visible:ring-teal-400 transform hover:scale-110 shadow-lg"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Animations */}
      <style jsx global>{`
        .animate-float {
          animation: floaty 6s ease-in-out infinite;
        }
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}