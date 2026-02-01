"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white border-b z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">DHARANI R</h1>
          <div className="space-x-6">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
     <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

  {/* Profile Image */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Image
      src="/images/passport size photo.jpg"
      alt="Profile"
      width={180}
      height={180}
      className="rounded-full mb-6 border-4 border-gray-200"
    />
  </motion.div>

  {/* Name */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-4xl font-bold"
  >
    Hi, I'm Dharani
  </motion.h1>

  {/* Title */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="mt-3 text-gray-600"
  >
    Final-year Computer Science student | Aspiring Software Developer
  </motion.p>

  {/* Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
    className="mt-6 flex gap-4"
  >
    <a
      href="#contact"
      className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
    >
      Hire Me
    </a>

    <a
      href="#projects"
      className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
    >
      My Work
    </a>

    <a
      href="/resume/Dharani.resume_C.pdf"
      download
      className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
    >
      Download Resume
    </a>
  </motion.div>

</section>


      {/* About */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
             I build clean, responsive web applications using React, Next.js, and modern
  frontend tools. Passionate about problem-solving and learning new technologies.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">My Services</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Web Development</h3>
              <p className="mt-4 text-gray-600">
                Building fast and responsive websites using modern tools.
              </p>
            </div>

            <div className="border p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Software developer</h3>
              <p className="mt-4 text-gray-600">
                Designing clean and modern user interfaces.
              </p>
            </div>

            <div className="border p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Performance</h3>
              <p className="mt-4 text-gray-600">
                Optimized and SEO-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">My Work</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Project title="Portfolio Website" />
            <Project title="E-commerce UI" />
            <Project title="Dashboard App" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="mt-4 text-gray-600">Let’s work together</p>

          <form className="mt-12 grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-4 rounded-xl"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-4 rounded-xl"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="border p-4 rounded-xl"
            />
            <button className="bg-indigo-600 text-white py-4 rounded-xl">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t text-center text-gray-500">
        © 2026 DHARANI R . All rights reserved.
      </footer>

    </main>
  );
}

/* Project Card Component */
function Project({ title }) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      <div className="h-40 bg-indigo-100"></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">
          Next.js + Tailwind project
        </p>
      </div>
    </div>
  );
}
