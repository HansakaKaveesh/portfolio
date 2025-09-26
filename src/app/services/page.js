"use client";
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine, FaServer, FaTools } from "react-icons/fa";

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
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white px-6 py-24"
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[160px]" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">
              Services
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Helping you turn ideas into production-ready projects with clean
            code, modern design, and full-stack expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-md
                         hover:shadow-teal-400/20 hover:-translate-y-1 transition transform
                         backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-white/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1 transition"
          >
            Let’s Build Something Great 🚀
          </a>
        </div>
      </div>
    </section>
  );
}