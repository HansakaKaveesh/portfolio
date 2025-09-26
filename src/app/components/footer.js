import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-gray-300 border-t border-white/10">
      {/* Outer container */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Logo & About */}
        <div>
          <h2
            className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent"
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
                  className="hover:text-teal-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:hello@example.com" className="hover:text-teal-300">hello@example.com</a></li>
            <li>Location: 🌍 Colombo, Sri Lanka</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-8 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hansaka Wijesinghe. All rights reserved.
      </div>
    </footer>
  );
}