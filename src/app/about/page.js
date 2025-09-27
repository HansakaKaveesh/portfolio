import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiPhp,
  SiMysql
} from 'react-icons/si';

export default function About() {
  const skills = [
    { name: 'React', icon: <SiReact className="text-cyan-400 text-3xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white text-3xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300 text-3xl" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-400 text-3xl" /> },
    { name: 'UI/UX', icon: <SiFigma className="text-pink-400 text-3xl" /> },
    { name: 'PHP', icon: <SiPhp className="text-indigo-400 text-3xl" /> },
    { name: 'SQL / MySQL', icon: <SiMysql className="text-blue-400 text-3xl" /> },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0615] via-[#120a26] to-[#1a1025] text-white px-6 py-28"
    >
      {/* Background Aurora Glow */}
      <div className="absolute -top-56 left-1/3 w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[180px] animate-pulse-slow" />
      <div className="absolute -bottom-56 right-1/4 w-[650px] h-[650px] rounded-full bg-blue-500/20 blur-[160px] animate-pulse-slower" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Me
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate web developer crafting modern, responsive digital
            experiences that delight users and deliver results.
          </p>
        </div>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Avatar */}
          <div className="relative flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden ring-4 ring-teal-400/50 shadow-xl shadow-teal-500/40 animate-float-slow">
              <Image
                src="/my.jpg"
                alt="Hansaka Wijesinghe"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-white/10 animate-ping" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I’m{' '}
              <span className="text-teal-300 font-semibold">
                Hansaka Wijesinghe
              </span>
              , a dedicated front-end developer with a flair for building
              polished, user‑friendly interfaces. My focus is on clean code,
              sleek visuals, and creating meaningful interactions that connect
              people with technology.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-400 mt-1" />
                <span>
                  <strong>Experience:</strong> 2+ years in building responsive,
                  performant web apps with React, Next.js, and backend
                  solutions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-400 mt-1" />
                <span>
                  <strong>Specialties:</strong> UI/UX design, component
                  libraries, animations, full‑stack solutions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-400 mt-1" />
                <span>
                  <strong>Mindset:</strong> Always learning, always iterating — 
                  with user experience at the center.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">Core Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 text-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 bg-white/10 border border-white/10 rounded-2xl shadow hover:shadow-teal-500/30 hover:-translate-y-2 transition-transform relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 via-transparent to-indigo-400/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative">{skill.icon}</div>
                <p className="mt-2 text-sm font-semibold text-white/90">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 bg-[length:200%_auto] hover:bg-[position:100%_0] transition-all duration-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1"
          >
            Let’s Work Together 🚀
          </a>
        </div>
      </div>
    </section>
  );
}