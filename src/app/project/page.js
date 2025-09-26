import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal site built with Next.js, Tailwind CSS, and animations.",
      image: "/projects/portfolio.jpg",
      tags: ["Next.js", "Tailwind", "UI/UX"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourdomain.com",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce app with product listings, cart, authentication, and payments.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "Blog CMS",
      description:
        "A content management system for blogging, with markdown editor and role-based access.",
      image: "/projects/blog.jpg",
      tags: ["Next.js", "GraphQL", "Postgres"],
      github: "https://github.com/yourusername/blog-cms",
      demo: "https://blogcms-demo.com",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white px-6 py-24"
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[160px]" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the recent works I’ve built — spanning frontend,
            backend, and full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow hover:shadow-teal-500/30 transition-transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1 transition"
          >
            Want to Collaborate? 🚀
          </a>
        </div>
      </div>
    </section>
  );
}