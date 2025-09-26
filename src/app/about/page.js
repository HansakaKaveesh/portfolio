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
    { name: 'React', icon: <SiReact className="text-cyan-400 text-2xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white text-2xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300 text-2xl" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-400 text-2xl" /> },
    { name: 'UI/UX', icon: <SiFigma className="text-pink-400 text-2xl" /> },
    { name: 'PHP', icon: <SiPhp className="text-indigo-400 text-2xl" /> },
    { name: 'SQL / MySQL', icon: <SiMysql className="text-blue-400 text-2xl" /> },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] rounded-full bg-teal-500/30 blur-[160px]" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">
              Me
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate web developer crafting modern, responsive digital
            experiences that delight users and deliver results.
          </p>
        </div>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="relative flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden ring-4 ring-teal-400/50 shadow-xl shadow-teal-500/40">
              <Image
                src="/my.jpg"
                alt="Hansaka Wijesinghe Photo"
                fill
                priority
                className="object-cover"
              />
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

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-400 mt-1" />
                <span>
                  <strong>Experience:</strong> 4+ years in building responsive,
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
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Core Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 bg-white/10 border border-white/10 rounded-xl shadow hover:shadow-teal-400/20 hover:-translate-y-1 transition flex flex-col items-center"
              >
                {skill.icon}
                <p className="mt-2 text-sm font-semibold text-white/90">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1 transition"
          >
            Let’s Work Together 🚀
          </a>
        </div>
      </div>
    </section>
  );
}