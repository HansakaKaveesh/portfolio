"use client";
import { useEffect, useState } from "react";
import { FaBriefcase, FaUserCheck, FaLaptopCode, FaStar } from "react-icons/fa";

export default function Stats() {
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

  // ✅ Animated counter state
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const statsSection = document.getElementById("stats");
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
      id="stats"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] rounded-full bg-teal-500/20 blur-[180px]" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Some{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">
            Numbers
          </span>
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          A snapshot of milestones I’ve achieved and skills I’ve developed.
        </p>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-[2px] rounded-2xl bg-gradient-to-br from-teal-500/20 via-cyan-400/20 to-indigo-500/20 shadow-lg hover:shadow-teal-400/40 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center">
                {/* Icon circle */}
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/20 border border-white/10">
                  {s.icon}
                </div>

                {/* Counter */}
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  {visible ? (
                    <Counter end={s.value} suffix={s.suffix} />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-gray-300 text-sm mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Counter component
function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
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