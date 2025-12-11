"use client";

import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaUserCheck,
  FaLaptopCode,
  FaStar,
} from "react-icons/fa";

const STATS = [
  {
    icon: <FaBriefcase className="text-teal-300 text-2xl" />,
    value: 2,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <FaLaptopCode className="text-cyan-300 text-2xl" />,
    value: 10,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <FaUserCheck className="text-pink-300 text-2xl" />,
    value: 10,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <FaStar className="text-yellow-300 text-2xl" />,
    value: 50,
    suffix: "+",
    label: "Tech & Design Skills",
  },
];

export default function StatsAlt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const statsSection = document.getElementById("stats-alt");
      if (!statsSection) return;
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        setVisible(true);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="stats-alt"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white px-6 py-24"
    >
      {/* Glow decoration */}
      <div className="absolute -top-48 left-1/3 w-[600px] h-[600px] rounded-full bg-teal-500/15 blur-[180px]" />
      <div className="absolute -bottom-48 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/15 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300/80">
          Highlights
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
          My{" "}
          <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Journey in Numbers
          </span>
        </h2>
        <p className="mt-3 text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          A quick snapshot of my experience as a web developer & graphic
          designer—projects shipped, clients helped, and skills sharpened.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              className={[
                "relative flex flex-col items-center text-center",
                "rounded-2xl bg-white/5 border border-white/10 px-4 py-6",
                "backdrop-blur-md shadow-[0_18px_45px_rgba(15,23,42,0.65)]",
                "transition-transform transition-opacity duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{
                transitionDelay: visible ? `${idx * 100}ms` : "0ms",
              }}
            >
              {/* subtle gradient ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 via-transparent to-violet-500/15 opacity-60" />
              {/* content */}
              <div className="relative flex flex-col items-center">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/30 border border-white/15 mb-3 shadow-lg">
                  {s.icon}
                </div>

                {/* Counter value */}
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(0,200,200,0.3)]">
                  {visible ? (
                    <Counter end={s.value} suffix={s.suffix} />
                  ) : (
                    <>0{s.suffix}</>
                  )}
                </div>

                {/* Label */}
                <p className="mt-2 text-gray-300 text-xs md:text-sm">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations for gradient if you want to reuse */}
      <style jsx global>{`
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

// Counter component
function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!end || end <= 0) {
      setCount(0);
      return;
    }

    let current = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / end));

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}