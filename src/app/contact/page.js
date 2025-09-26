import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-teal-500/25 blur-[180px]" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/25 blur-[160px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project idea or want to collaborate? I’d love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-400 text-xl" />
              <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white transition">
                hello@example.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400 text-xl" />
              <a href="tel:+01012345678" className="text-gray-300 hover:text-white transition">
                +01 012 345 678
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-400 text-xl" />
              <span className="text-gray-300">Colombo, Sri Lanka</span>
            </div>

            <div className="flex gap-4 pt-4 text-xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition text-sky-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition text-cyan-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/yourformid" // replace with your Formspree or backend endpoint
            method="POST"
            className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 backdrop-blur-sm"
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-teal-500/40 transition-transform hover:-translate-y-1"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}