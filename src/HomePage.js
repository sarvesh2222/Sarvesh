import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sarvesh Kharade</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#ideas" className="hover:text-blue-500">Ideas</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-20 text-center" id="about">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg">
          I'm a product and project management enthusiast passionate about solving real-world problems, optimizing workflows, and creating high-impact digital solutions. Here, I showcase my ideas and side projects.
        </p>
      </section>

      <section className="py-20 px-6 bg-white" id="projects">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Supply Chain Dashboard</h3>
            <p>Built an interactive Tableau dashboard to monitor KPIs in real-time. Reduced delays by 27%.</p>
          </div>
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">AI Traffic Surveillance</h3>
            <p>Led an AI-based project to identify congestion patterns and reduce urban traffic delays.</p>
          </div>
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">NPI Readiness Tracker</h3>
            <p>Developed a PM tool for tracking New Product Introduction tasks and supplier dependencies.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6" id="ideas">
        <h2 className="text-3xl font-bold text-center mb-12">Ideas & Insights</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Why Tesla's NPI Strategy Works</h4>
            <p className="text-gray-700">Breakdown of Tesla's agile approach to rapid prototyping and supplier integration.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">How AI Can Automate Root Cause Analysis</h4>
            <p className="text-gray-700">Exploring use cases in predictive maintenance and Six Sigma quality checks.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center" id="contact">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg">Email: sarveshsanjay.kharade@sjsu.edu | LinkedIn: /in/sarvesh-kharade</p>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Sarvesh Kharade. All rights reserved.</p>
      </footer>
    </div>
  );
} 