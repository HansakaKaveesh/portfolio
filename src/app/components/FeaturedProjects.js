"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TbSparkles } from "react-icons/tb";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiMysql,
  SiPhp,
} from "react-icons/si";

// ---- Glass bubble with animated outline ----
function GlassBubble({ children, className = "" }) {
  return (
    <div
      className={[
        "relative max-w-xl rounded-2xl bg-white/10 ring-1 ring-white/15",
        "backdrop-blur-md text-white/90 shadow-[0_10px_40px_rgba(80,0,200,.25)]",
        "px-6 py-5 overflow-hidden group",
        className,
      ].join(" ")}
    >
      {/* animated gradient border overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-70 transition bg-[conic-gradient(at_top_left,_#ec4899,_#8b5cf6,_#06b6d4,_#ec4899)] animate-spin-slow" />
      {/* subtle gradient tint */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-300/10 via-white/5 to-fuchsia-400/10" />
      {/* subtle highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10"
        style={{
          WebkitMaskImage:
            "radial-gradient(70% 180% at 50% -30%, black, transparent)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "radial-gradient(70% 180% at 50% -30%, black, transparent)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

// ---- Screenshot with hover overlay ----
function ScreenshotFrame({ src, alt }) {
  return (
    <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 shadow-[0_15px_60px_rgba(80,0,200,.25)] group">
      <div className="absolute -inset-12 -z-10 blur-3xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(139,92,246,.35),transparent)]" />
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 640px, (min-width: 768px) 480px, 100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-sm font-semibold">
        <span className="text-white/90">🔍 View Project</span>
      </div>
    </div>
  );
}

// ---- Row ----
function ProjectRow({
  featured,
  title,
  role,
  year,
  description,
  image,
  href,
  flip,
  tech,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = `project-${title}`;
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [title]);

  const layoutTextCol = ["md:col-span-6", flip ? "md:order-2" : "md:order-1"].join(
    " "
  );
  const layoutImageCol = [
    "md:col-span-6",
    flip ? "md:order-1 md:pr-8 md:translate-y-4" : "md:order-2 md:pl-8 md:translate-y-4",
  ].join(" ");

  const animationClass = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <div
      id={`project-${title}`}
      className={`relative py-16 md:py-24 transition-all duration-700 ${animationClass}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-[80%] blur-3xl bg-[radial-gradient(60%_70%_at_50%_0%,rgba(139,92,246,.18),transparent)]" />
      </div>

      <div className="grid items-center gap-8 md:grid-cols-12">
        {/* Text */}
        <div className={layoutTextCol}>
          <p className="text-xs uppercase tracking-[0.18em] text-violet-300/80">
            {featured}
          </p>
          <h3 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline decoration-pink-400/60 underline-offset-4"
            >
              {title}
            </a>
          </h3>
          {(role || year) && (
            <p className="mt-1 text-xs text-slate-300/80">
              {year && <span>{year}</span>}
              {year && role && <span className="px-1.5">•</span>}
              {role && <span>{role}</span>}
            </p>
          )}

          <div className={flip ? "md:flex md:justify-end" : ""}>
            <GlassBubble className="mt-5 hover:scale-[1.01] transition-transform">
              <p className="text-sm leading-6 md:text-base md:leading-7">
                {description}
              </p>
              {tech?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {tech.map(({ icon, label }, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-sm text-white/90"
                    >
                      {icon} {label}
                    </span>
                  ))}
                </div>
              )}
            </GlassBubble>
          </div>
        </div>

        {/* Image */}
        <div className={layoutImageCol}>
          <a href={href} target="_blank" rel="noreferrer noopener" className="block">
            <ScreenshotFrame src={image.src} alt={image.alt} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ---- Section ----
export default function FeaturedProjects() {
  const projects = [
    {
      title: "Visual Learning Management System",
      featured: "Web App",
      role: "Full‑stack development",
      year: "2024",
      description:
        "A web app for visualizing personalized learning data, with recommended resources, top topics, and insights.",
      image: { src: "/Synapz.png", alt: "Visual Learning LMS mockup" },
      href: "https://synapzedu.infinityfreeapp.com/",
      flip: false,
      tech: [
        { icon: <SiPhp className="text-indigo-400" />, label: "PHP" },
        { icon: <SiMysql className="text-blue-400" />, label: "MySQL" },
        { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind" },
      ],
    },
    {
      title: "Temple & Dhamma School Website",
      featured: "Community Website",
      role: "Design & Frontend",
      year: "2023",
      description:
        "A website for a temple & Dhamma school, featuring event listings, resource sharing, and community content.",
      image: { src: "/tem.png", alt: "Temple website mockup" },
      href: "https://srisudarshanaramaviharaya.vercel.app",
      flip: true,
      tech: [
        { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
        { icon: <SiReact className="text-cyan-400" />, label: "React" },
        { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 md:py-32 px-6 lg:px-10 bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white"
    >
      {/* Section heading */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300/80">
          Selected work
        </p>
        <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
          Featured{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-400 animate-gradient bg-[length:200%_200%]">
            Projects
          </span>
        </h2>
        <p className="mt-4 text-gray-300 text-base">
          A selection of my most exciting and impactful web projects, combining
          development and design.
        </p>
      </div>

      {/* Projects */}
      <div className="mx-auto max-w-6xl">
        {projects.map((proj, idx) => (
          <div key={proj.title}>
            <ProjectRow {...proj} />
            {idx === 0 && (
              <div className="my-10 flex items-center justify-center gap-6 text-violet-200/70 animate-pulse">
                <TbSparkles className="h-6 w-6" />
                <TbSparkles className="h-6 w-6" />
                <TbSparkles className="h-6 w-6" />
              </div>
            )}
          </div>
        ))}

        {/* CTA */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-4 text-center">
          <a
            href="/projects/web-development"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-1 transition"
          >
            See all web projects 🚀
          </a>
          <a
            href="/projects/graphic-design"
            className="inline-flex items-center gap-2 border border-violet-400/70 text-violet-200 font-semibold py-3 px-6 rounded-xl hover:bg-violet-500/20 hover:-translate-y-1 transition"
          >
            View graphic design work
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        @keyframes gradient-shift {
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