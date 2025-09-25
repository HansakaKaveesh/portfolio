'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  // 1) Stable default on SSR + initial client render
  const [theme, setTheme] = useState('light');

  const menuItems = useMemo(
    () => ['Home', 'About', 'Services', 'Blog', 'Project', 'Contact'],
    []
  );

  const socialIcons = [
    { icon: <FaInstagram aria-hidden="true" />, link: '#', label: 'Instagram' },
    { icon: <FaLinkedin aria-hidden="true" />, link: '#', label: 'LinkedIn' },
    { icon: <FaTwitter aria-hidden="true" />, link: '#', label: 'Twitter' },
  ];

  // 2) Add scroll state for header styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 3) After mount, sync theme from localStorage (safe, no hydration mismatch)
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const next = saved === 'dark' ? 'dark' : 'light';
    setTheme(next);
  }, []);

  // 4) Apply theme class to <html>
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Active section highlight
  useEffect(() => {
    const ids = menuItems.map((m) => m.toLowerCase());
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 }
    );

    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, [menuItems]);

  // Close mobile menu when resizing up
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const headerClasses = [
    'sticky top-0 z-50',
    'backdrop-blur supports-[backdrop-filter]:bg-black/50',
    scrolled ? 'bg-black/70 shadow-lg' : 'bg-black/40 shadow',
    'text-white',
    'transition-colors duration-300',
  ].join(' ');

  const toggleTheme = () => setTheme((p) => (p === 'light' ? 'dark' : 'light'));

  return (
    <header className={headerClasses}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent"
          aria-label="Graphic Art Solutions - Home"
        >
          Hansaka Wijesinghe
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'relative font-medium transition-colors duration-200',
                  isActive ? 'text-teal-300' : 'text-white/90 hover:text-teal-300',
                  'link-underline',
                ].join(' ')}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Right: socials + theme + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-3 text-xl">
            {socialIcons.map(({ icon, link, label }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition"
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>

      

          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-2xl focus:outline-none relative z-10"
          aria-label="Toggle Mobile Menu"
          aria-controls="mobileMenu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={[
          'md:hidden overflow-hidden bg-black/95 border-t border-white/10',
          isOpen ? 'animate-slide-down' : 'hidden',
        ].join(' ')}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white/90 text-lg hover:text-teal-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <span suppressHydrationWarning>
                {theme === 'dark' ? (
                  <FiSun className="text-yellow-300 text-xl" aria-hidden="true" />
                ) : (
                  <FiMoon className="text-cyan-200 text-xl" aria-hidden="true" />
                )}
              </span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex gap-4 text-xl pt-2">
            {socialIcons.map(({ icon, link, label }, index) => (
              <a
                key={index}
                href={link}
                aria-label={label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 transition"
                onClick={() => setIsOpen(false)}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .link-underline::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -6px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          height: 2px;
          width: 100%;
          max-width: 24px;
          background: linear-gradient(90deg, #14b8a6, #22d3ee, #38bdf8);
          transition: transform 200ms ease;
          border-radius: 9999px;
        }
        .link-underline:hover::after,
        .link-underline[aria-current='page']::after {
          transform: translateX(-50%) scaleX(1);
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 220ms ease-out; }
      `}</style>
    </header>
  );
}