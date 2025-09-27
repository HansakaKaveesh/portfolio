import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-gray-300 border-t border-white/10 overflow-hidden">
      {/* Background Aurora Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-indigo-500/20 rounded-full blur-[200px] animate-pulse-slower pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500/10 to-violet-500/20 rounded-full blur-[180px] animate-pulse-slow pointer-events-none" />

      {/* Outer container */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 z-10">
        
        {/* Logo & About */}
        <div>
          <h2
            className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]"
          >
            Hansaka Wijesinghe
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Crafting delightful, modern web experiences with Next.js, Tailwind CSS, and a touch of glowing magic ✨
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group inline-block"
                >
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:hello@example.com" className="hover:text-teal-300 transition-colors">
                hello@example.com
              </a>
            </li>
            <li>Location: 🌍 Colombo, Sri Lanka</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            {[{ icon: FaGithub, link: 'https://github.com/', label: 'GitHub' },
              { icon: FaLinkedin, link: 'https://linkedin.com/', label: 'LinkedIn' },
              { icon: FaTwitter, link: 'https://twitter.com/', label: 'Twitter' },
              { icon: FaInstagram, link: 'https://instagram.com/', label: 'Instagram'}
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/20 backdrop-blur-sm transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-400/30"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
        © {new Date().getFullYear()} Hansaka Wijesinghe. All rights reserved.
      </div>
    </footer>
  );
}