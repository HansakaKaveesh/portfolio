"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiUserPlus } from "react-icons/fi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaRocket, FaFacebook } from "react-icons/fa";

// Typing effect hook
function useTypedText(words = [], speed = 120, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= words.length) return;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
      if (forward && subIndex === words[index].length) {
        setForward(false);
      } else if (!forward && subIndex === 0) {
        setForward(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, words, speed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : ""}`;
}

export default function Hero() {
  const typedText = useTypedText(
    ["modern apps", "responsive UIs", "delightful experiences"],
    120,
    1500
  );

  return (
    <section
      className="relative isolate min-h-screen flex flex-col items-center justify-center px-6 text-center text-white overflow-hidden bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/programmer-night.jpg')" }}
      aria-label="Hero section"
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95 z-0" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-500/20 blur-[140px] rounded-full animate-pulse z-0" />
      <div className="absolute -bottom-24 -right-20 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full z-0" />

      {/* Floating Avatar */}
      <div className="mb-8 relative z-10 animate-float">
        <div
          className="p-[3px] rounded-full shadow-lg"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #14b8a6, #22d3ee, #6366f1, #14b8a6)",
          }}
        >
          <div className="rounded-full p-1 backdrop-blur-md bg-white/10 shadow-inner border border-white/10 relative">
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
        Hi, I&apos;m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 animate-gradient bg-[length:200%_200%]">
          Hansaka Wijesinghe
        </span>
      </h1>

      {/* Typing subheading */}
      <p className="mt-5 max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-300 z-10 leading-relaxed">
        I build{" "}
        <span className="text-teal-300 font-semibold">{typedText}</span>
      </p>

      {/* Tech chips */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiReact className="text-cyan-300" /> React
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiNextdotjs className="text-white" /> Next.js
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiTailwindcss className="text-sky-400" /> Tailwind
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiPhp className="text-indigo-400" /> PHP
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/90">
          <SiMysql className="text-yellow-400" /> MySQL
        </span>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-teal-500/40"
        >
          <FaRocket /> View Projects
        </a>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 border border-teal-400 text-teal-300 hover:bg-teal-600 hover:text-white py-3 px-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-teal-500/30"
        >
          <FiUserPlus /> Hire Me
        </a>
      </div>

      {/* Socials */}
      <div className="mt-8 flex items-center gap-4 z-10">
        {[
          { href: "https://github.com/", icon: <FaGithub className="text-2xl" /> },
          { href: "https://linkedin.com/", icon: <FaLinkedin className="text-sky-300 text-2xl" /> },
          { href: "https://twitter.com/", icon: <FaFacebook className="text-cyan-300 text-2xl" /> },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-transform hover:scale-110 shadow-lg"
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
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}