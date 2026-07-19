import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-white border-b border-gray-100">
        <div className="text-2xl font-bold">HD AUDIO</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">PRODUCTS</a>
          <a href="#" className="hover:text-blue-600">SOLUTIONS</a>
          <a href="#" className="hover:text-blue-600">OEM/ODM</a>
          <a href="#" className="hover:text-blue-600">PROJECTS</a>
          <a href="#" className="hover:text-blue-600">ABOUT US</a>
          <a href="#" className="hover:text-blue-600">CONTACT</a>
        </div>
        <button className="px-5 py-2 text-white bg-blue-600 rounded-lg text-sm font-medium">Inquiry</button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 bg-gray-50 text-center">
        <h1 className="max-w-4xl text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Professional Audio Speaker Manufacturer For Global Sound Projects
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-10 leading-relaxed">
          HD Audio provides high-performance loudspeaker systems, subwoofers and customized audio solutions for distributors, rental companies and system integrators worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition">
            Request A Quote
          </button>
          <button className="px-8 py-4 bg-white border border-gray-300 rounded-lg font-bold text-lg hover:bg-gray-50 transition">
            Download Catalog
          </button>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl w-full">
          {[
            { title: "Professional R&D", desc: "Expert engineering for premium sound" },
            { title: "OEM Manufacturing", desc: "Customized solutions for your brand" },
            { title: "Quality Control", desc: "Strict testing for long-term reliability" },
            { title: "Global Support", desc: "Seamless export and technical assistance" }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-10 bg-gray-900 text-white text-center">
        <p className="text-sm opacity-60">&copy; 2026 HD Audio. All rights reserved.</p>
      </footer>
    </div>
  );
}