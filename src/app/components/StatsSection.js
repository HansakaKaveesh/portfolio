import {
  FaPencilRuler,
  FaObjectGroup,
  FaSearch,
  FaEnvelope,
  FaMagic,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaPencilRuler size={24} />,
    title: 'Web Design',
    projects: '120 Projects',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    icon: <FaObjectGroup size={24} />,
    title: 'UI/UX Design',
    projects: '241 Projects',
    accent: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: <FaSearch size={24} />,
    title: 'Web Research',
    projects: '240 Projects',
    accent: 'from-cyan-500 to-teal-500',
  },
  {
    icon: <FaEnvelope size={24} />,
    title: 'Marketing',
    projects: '331 Products',
    accent: 'from-amber-500 to-orange-500',
  },
];

const stats = [
  { number: '20k+', label: 'Projects Completed' },
  { number: '10k+', label: 'Natural Products' },
  { number: '200+', label: 'Client Reviews' },
  { number: '1,000+', label: 'Satisfied Clients' },
];

export default function StatsSection() {
  return (
    <section className="relative px-6 py-20 max-w-7xl mx-auto">
      {/* Decorative blobs 
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" /> */}

      {/* Header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 text-sm text-pink-400/90 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
          <FaMagic className="text-pink-400" /> Our Expertise
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Crafting Delightful Digital Experiences
        </h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-pink-100/80">
          From product research to pixel-perfect design and impactful marketing, we bring ideas to life.
        </p>
      </div>

      {/* Services/Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="group rounded-2xl p-[1px] bg-gradient-to-br from-pink-600/60 via-fuchsia-500/60 to-violet-500/60 shadow-lg hover:shadow-pink-600/30 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col items-center text-center border border-white/5">
              {/* Icon ring */}
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white ring-1 ring-white/10 bg-gradient-to-br ${service.accent}`}
                aria-hidden="true"
              >
                {service.icon}
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-pink-200/90">{service.projects}</p>

              {/* Subtle divider + CTA */}
              <div className="mt-4 h-px w-10 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <a
                href="#projects"
                className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-pink-300 hover:text-white transition"
                aria-label={`Explore ${service.title} work`}
              >
                Explore <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Experience + Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Experience Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
          <div className="absolute -right-8 -top-6 opacity-[0.06] text-[10rem] font-black text-white pointer-events-none select-none">
            10
          </div>
          <div className="bg-gradient-to-r from-gray-900 to-pink-950 p-10">
            <h2 className="text-4xl font-black mb-4 text-pink-400 relative z-10">
              10 Years of Experience
            </h2>
            <ul className="space-y-3 text-pink-100/90 text-sm leading-relaxed relative z-10">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-pink-400 mt-[2px]" />
                <span>
                  Industry-leading expertise to elevate strategy and brand positioning.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-pink-400 mt-[2px]" />
                <span>
                  Streamlined workflows for faster delivery and scalable design systems.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-pink-400 mt-[2px]" />
                <span>
                  Human-centered solutions that convert and keep users engaged.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-pink-500/25 hover:to-fuchsia-500/25 transition-shadow"
            >
              <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/5 shadow-md hover:shadow-pink-600/25 transition">
                <div className="flex items-center justify-center gap-2">
                  <FaStar className="text-pink-400" aria-hidden="true" />
                  <h3 className="text-3xl font-extrabold text-white">{stat.number}</h3>
                </div>
                <p className="text-xs md:text-sm text-pink-200 mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex items-center justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-pink-600/40 transition"
          aria-label="Start a project"
        >
          Start a Project <FaArrowRight />
        </a>
      </div>
    </section>
  );
}