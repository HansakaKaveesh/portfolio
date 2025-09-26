import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const posts = [
    {
      title: "Getting Started with Next.js",
      excerpt:
        "Learn why Next.js is a powerful React framework for building production-ready apps...",
      image: "/blog/nextjs.jpg",
      date: "Feb 10, 2024",
      tags: ["Next.js", "React", "Frontend"],
      link: "/blog/nextjs-intro",
    },
    {
      title: "Tailwind CSS Tips & Tricks",
      excerpt:
        "Discover how to supercharge your workflow with Tailwind CSS utility-first classes...",
      image: "/blog/tailwind.jpg",
      date: "Jan 22, 2024",
      tags: ["Tailwind", "CSS", "Design"],
      link: "/blog/tailwind-tips",
    },
    {
      title: "Building REST APIs with Node.js",
      excerpt:
        "A beginner-friendly guide to creating scalable RESTful APIs using Node.js and Express...",
      image: "/blog/nodeapi.jpg",
      date: "Dec 15, 2023",
      tags: ["Node.js", "Backend", "API"],
      link: "/blog/node-api",
    },
  ];

  return (
    <section
      id="blog"
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[160px]" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">Blog Posts</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Read my thoughts on web development, design, and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.title}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow hover:shadow-teal-400/30 transition-transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <p className="text-xs text-gray-400">{post.date}</p>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-white transition"
                >
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}