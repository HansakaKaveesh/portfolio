"use client";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaChartLine,
  FaServer,
  FaTools,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building modern, scalable, and performant websites using React, Next.js, and Tailwind CSS.",
      icon: <FaCode className="text-teal-400 text-3xl" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces and delightful experiences that put user needs at the center.",
      icon: <FaPaintBrush className="text-pink-400 text-3xl" />,
    },
    {
      title: "Responsive Design",
      description:
        "Ensuring seamless user experiences across desktops, tablets, and mobile devices with fluid layouts.",
      icon: <FaMobileAlt className="text-cyan-400 text-3xl" />,
    },
    {
      title: "SEO & Marketing",
      description:
        "Optimizing websites for visibility and conversion with SEO best practices and marketing integration.",
      icon: <FaChartLine className="text-green-400 text-3xl" />,
    },
    {
      title: "Backend Development",
      description:
        "Creating APIs, databases, and server logic with Node.js, Express, MongoDB, PHP and MySQL.",
      icon: <FaServer className="text-indigo-400 text-3xl" />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Offering long-term support, updates, and performance monitoring to keep your projects thriving.",
      icon: <FaTools className="text-yellow-400 text-3xl" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0615] via-[#120a26] to-[#110a1f] text-white px-6 py-28"
    >
      {/* Background aurora glows */}
      <div className="absolute -top-56 left-1/3 w-[650px] h-[650px] bg-teal-500/20 blur-[180px] rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-56 right-1/4 w-[650px] h-[650px] bg-pink-500/20 blur-[180px] rounded-full animate-pulse-slower" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Services
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Helping you turn ideas into production-ready projects with clean
            code, modern design, and full-stack expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 shadow-xl cursor-pointer 
                         transition-transform duration-500 hover:-translate-y-2 hover:shadow-teal-400/30
                         overflow-hidden backdrop-blur-sm"
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 via-transparent to-pink-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 group-hover:scale-110 transform transition duration-300 animate-float-slow">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 bg-[length:200%_auto] hover:bg-[position:100%_0] transition-all duration-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1"
          >
            Let’s Build Something Great 🚀
          </a>
        </div>
      </div>
    </section>
  );
}