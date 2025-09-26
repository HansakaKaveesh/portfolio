'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  const menuItems = [
    { label: 'Home', href: '/' },       // ✅ internal pages
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Project', href: '/project' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialIcons = [
    { icon: <FaInstagram aria-hidden="true" />, link: '#', label: 'Instagram' },
    { icon: <FaLinkedin aria-hidden="true" />, link: '#', label: 'LinkedIn' },
    { icon: <FaTwitter aria-hidden="true" />, link: '#', label: 'Twitter' },
  ];

  // Scroll state handling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = menuItems.map((m) => m.href.replace('#', ''));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) =>
        entry.isIntersecting && setActive(entry.target.id)
      ),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.2 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [menuItems]);

  const headerClasses = [
    'sticky top-0 z-50',
    'backdrop-blur-xl bg-black/40 supports-[backdrop-filter]:bg-black/30',
    scrolled ? 'shadow-md border-b border-white/10' : '',
    'transition-colors duration-300',
  ].join(' ');

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* ✅ Logo with Link */}
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9">
            <Image
              src="/Wijex logo.png"
              alt="Brand logo"
              fill
              className="object-contain rounded-full border border-teal-400 shadow-md"
              priority
            />
          </div>
          <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
            Hansaka Wijesinghe
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {menuItems.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <Link
                key={label}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'relative transition-colors duration-200',
                  isActive ? 'text-teal-300' : 'text-white/80 hover:text-teal-300',
                  'link-underline',
                ].join(' ')}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side (desktop socials + CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-2 text-lg">
            {socialIcons.map(({ icon, link, label }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 hover:shadow-teal-400/40 transition transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            className="ml-2 px-4 py-2.5 text-sm rounded-md font-medium bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md hover:scale-105 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-2xl relative z-10"
          aria-controls="mobileMenu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Menu with Link */}
      <div
        id="mobileMenu"
        className={[
          'md:hidden overflow-hidden bg-black/95 border-t border-white/10 transition-all',
          isOpen ? 'animate-slide-down' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block text-white/90 text-base hover:text-teal-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="mt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition transform hover:scale-105 text-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile socials can remain <a> because external */}
          <div className="flex gap-4 text-lg pt-3 justify-center">
            {socialIcons.map(({ icon, link, label }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 hover:shadow-teal-400/40 transition transform hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}