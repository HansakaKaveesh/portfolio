"use client";
import { useEffect, useState } from "react";
import { FaBriefcase, FaUserCheck, FaLaptopCode, FaStar } from "react-icons/fa";

export default function StatsAlt() {
  const stats = [
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
      label: "Tech Skills",
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const statsSection = document.getElementById("stats-alt");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setVisible(true);
        }
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
        <h2 className="text-3xl md:text-4xl font-extrabold">
          My <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Highlights</span>
        </h2>
        <p className="mt-3 text-gray-300 max-w-xl mx-auto">
          Key achievements and numbers that define my journey.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group hover:scale-105 transition transform duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/10 mb-3 shadow-lg group-hover:shadow-cyan-400/40 transition">
                {s.icon}
              </div>
              {/* Counter value */}
              <div className="text-4xl font-extrabold bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(0,200,200,0.3)]">
                {visible ? <Counter end={s.value} suffix={s.suffix} /> : "0"}
              </div>
              {/* Label */}
              <p className="text-gray-300 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter component
function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
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