"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    
    <main className="bg-white text-gray-900">

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white border-b z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">DHARANI R</h1>
          <div className="flex space-x-3">
  {[
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "qualification", label: "Qualification" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ].map((item) => (
    <a
  key={item.id}
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById(item.id);
    if (section) {
      let yOffset = 0; // default for most sections (centered)
      if (item.id === "qualification") {
        yOffset = -80; // slightly up
      }

      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(item.id);
    }
  }}
  href={`#${item.id}`}
  className={`px-4 py-2 rounded-md font-medium transition-all duration-300
    ${
      activeSection === item.id
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }
  `}
>
  {item.label}
</a>



  ))}
</div>



        </nav>
      </header>

      {/* Hero */}
     <section
  id="home"
  className="min-h-screen flex items-center bg-slate-50 px-6 scroll-mt-24"
>

  <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE – PHOTO */}
    <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center md:justify-end md:-ml-12"
>
  <div className="relative">
    <div className="absolute inset-0 rounded-2xl bg-blue-100 blur-xl"></div>

    <Image
      src="/images/passport size photo.jpg"
      alt="Dharani Profile Photo"
      width={320}
      height={400}
      className="relative rounded-2xl object-cover border border-slate-200 shadow-lg bg-white"
    />
  </div>
</motion.div>


    {/* RIGHT SIDE – CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center md:text-left"
    >
      <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
        Hi, I’m Dharani
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Final-year Computer Science student and aspiring Software Developer with
        strong interest in building scalable, user-centric web applications.
      </p>

      <p className="mt-4 text-slate-600">
        Skilled in React, Next.js, Java. Actively preparing
        for software engineering roles and passionate about continuous learning.
      </p>

      {/* ACTION BUTTONS */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Hire Me
        </a>

        <a
  href="#projects"
  className="px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
>
  View Projects
</a>


        <a
          href="/resume/DharaniR_Resume.pdf"
          download
          className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
        >
          Download Resume
        </a>
      </div>
    </motion.div>

  </div>
</section>




      {/* About */}
      <section
  id="about"
  className="min-h-screen flex flex-col justify-center py-40 bg-gray-50"
>


      
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">About Me</h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
             "I am a motivated Computer Science undergraduate with hands-on experience in web and mobile development, specializing in JavaScript, React.js, and Next.js. I thrive on building user-focused, scalable solutions and have demonstrated my skills through internships, hackathons, and innovative projects. Passionate about clean code, problem-solving, and continuous learning, I aim to grow into a product-minded engineer contributing to impactful technology solutions."
          </p>
        </div>
        
      </section>

      {/* Qualification */}
<section id="qualification" className="py-40 bg-white">
  
  <div className="max-w-6xl mx-auto px-6 flex flex-col justify-center h-full">
  <h2 className="text-4xl font-semibold text-slate-900 text-center mb-12">
    Qualification
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Academic Card */}
    <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-slate-900">Academic</h3>
      <p className="mt-4 text-slate-600">
        Strong academic foundation in Computer Science with coursework in
        Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks.
      </p>
    </div>

    {/* Skills Card */}
    <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-slate-900">Skills</h3>
      <p className="mt-4 text-slate-600">
        Proficient in HTML, Java, JavaScript, React, Next.js, Tailwind CSS, and Git.
      </p>
    </div>
  </div>
</div>


</section>
{/* Certifications */}
<section id="certifications" className="min-h-screen flex flex-col justify-center py-40 bg-gray-50">
  
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
      Certifications
    </h2>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Certificate 1 */}
  <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-slate-900">
      AWS cloud practitioner (2025)
    </h3>
    <p className="mt-2 text-slate-600">Platform: AWS</p>
    <p className="text-sm text-slate-500 mt-1">
      Covered core AWS services, cloud concepts, deployment best practices, and foundational cloud architecture.
    </p>
    <a
    href="/certificates/AWS.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-blue-600 font-medium hover:underline"
  >
    View Certificate →
  </a>
  </div>

  {/* Certificate 2 */}
  <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-slate-900">
      PowerBI Data Analyst Associate (2024)
    </h3>
    <p className="mt-2 text-slate-600">Platform: Microsoft</p>
    <p className="text-sm text-slate-500 mt-1">
      It covered data modeling, visualization, DAX calculations, report creation, and business insights using Power BI
    </p>
    <a
    href="/certificates/powerBI.jpg.jpeg"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-blue-600 font-medium hover:underline"
  >
    View Certificate →
  </a>
  </div>

  {/* Certificate 3 – CENTERED */}
  <div className="md:col-span-2 flex justify-center">
    <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition w-full md:w-1/2">
      <h3 className="text-lg font-semibold text-slate-900">
        React (The Complete Guide)- 2025
      </h3>
      <p className="mt-2 text-slate-600">Platform: Udemy</p>
      <p className="text-sm text-slate-500 mt-1">
        It covered building dynamic UIs, component-based architecture, state management, hooks, routing, and full-stack React applications.
      </p>
      <a
    href="/certificates/react.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-blue-600 font-medium hover:underline"
  >
    View Certificate →
  </a>
    </div>
  </div>

</div>


  </div>
  
</section>


      {/* Projects */}
<section id="projects" className="min-h-screen flex flex-col justify-center py-40 bg-gray-50">
  
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
      Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <Project
  title="Portfolio Website"
  image="/projects/Digital port.png"
  description="Next.js + Tailwind project"
/>

<Project
  title="Emotion-Based music recommendation website"
  image="/projects/emotion.png"
  description="Modern e-commerce user interface featuring product listings, filters, cart layout, and clean UI components."
/>

<Project
  title="Secure file sharing system"
  image="/projects/secure.png"
  description="Interactive dashboard with charts, analytics cards, and data visualization designed for admin use cases."
/>

    </div>

  </div>

</section>


      {/* Contact */}
      <section id="contact" className="py-24">
      
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="mt-4 text-gray-600">Let’s work together</p>

          <form
  action="https://formsubmit.co/dharanirajamanickam7@gmail.com"
  method="POST"
  className="mt-12 grid gap-6"
>
  {/* Disable captcha */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Email subject */}
  <input type="hidden" name="_subject" value="New Portfolio Contact!" />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="border p-4 rounded-xl"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="border p-4 rounded-xl"
  />

  <textarea
    name="message"
    placeholder="Message"
    rows={4}
    required
    className="border p-4 rounded-xl"
  />

  <button
    type="submit"
    className="bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 transition"
  >
    Send Message
  </button>
</form>
<div className="mt-6 flex gap-6 justify-center">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/dharani4/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 hover:text-blue-600 transition text-2xl"
  >
    <FaLinkedin />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/dharanir83"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 hover:text-black transition text-2xl"
  >
    <FaGithub />
  </a>
</div>

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
function Project({ title, image, description }) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-[center_top] translate-y-2 transition-transform duration-300 hover:scale-105"

        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">
          {description}
        </p>
      </div>

    </div>
  );
}




