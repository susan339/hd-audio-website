import React from 'react';

// --- Components ---

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-xl italic">H</span>
          </div>
          <span className="text-xl font-bold tracking-tighter">HD AUDIO</span>
        </div>
        <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-widest text-gray-900">
          {['PRODUCTS', 'SOLUTIONS', 'OEM/ODM', 'PROJECTS', 'ABOUT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors uppercase">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-[13px] font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-all uppercase">
            Inquiry
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center bg-[#050505] overflow-hidden pt-20">
    {/* Abstract Background Element */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
    
    <div className="relative max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-6 text-sm">Engineering Sound Excellence</h2>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
        PRO AUDIO<br />DRIVERS & SYSTEMS
      </h1>
      <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
        High-performance loudspeaker components and customized audio solutions for global sound projects. Precision-engineered in China.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="bg-blue-600 text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-blue-700 transition-all">
          Explore Products
        </button>
        <button className="bg-transparent text-white border border-white/30 px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          OEM Solutions
        </button>
      </div>
    </div>
  </section>
);

const CategoryCard = ({ title, img }) => (
  <div className="group relative bg-gray-100 h-[450px] overflow-hidden cursor-pointer">
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10"></div>
    <div className="absolute bottom-10 left-10 z-20">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="w-10 h-[2px] bg-blue-600 group-hover:w-24 transition-all duration-500"></div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse group-hover:scale-105 transition-transform duration-700">
      {/* This is a placeholder for actual product images */}
      <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold italic opacity-20 text-4xl uppercase">
        {title}
      </div>
    </div>
  </div>
);

const Features = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-black mb-6 leading-tight">PRECISION<br />MANUFACTURING</h2>
          <p className="text-gray-500 leading-loose mb-8">
            Our state-of-the-art facility combines advanced R&D with strict quality control protocols to ensure every driver delivers perfect acoustic performance.
          </p>
          <ul className="space-y-4 font-bold text-sm tracking-wide uppercase">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 mr-3"></span> 100% Acoustic Testing</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 mr-3"></span> Custom Voice Coil Design</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 mr-3"></span> Global Logistics Support</li>
          </ul>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CategoryCard title="LINE ARRAY" img="" />
          <CategoryCard title="SUBWOOFERS" img="" />
          <CategoryCard title="STAGE MONITORS" img="" />
          <CategoryCard title="OEM DRIVERS" img="" />
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="bg-blue-600 py-20">
    <div className="max-w-4xl mx-auto px-4 text-center text-white">
      <h2 className="text-4xl font-black mb-8">READY TO START YOUR NEXT PROJECT?</h2>
      <p className="text-blue-100 text-lg mb-10 opacity-80">
        Contact our engineering team today for a customized quote or technical consultation.
      </p>
      <button className="bg-white text-blue-600 px-12 py-5 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all">
        Contact Us
      </button>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="font-sans antialiased text-black selection:bg-blue-600 selection:text-white">
      <Nav />
      <Hero />
      <Features />
      <CTA />
      
      <footer className="bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-sm">
                <span className="text-white font-black text-lg italic">H</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">HD AUDIO</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Professional audio equipment manufacturer providing high-end sound solutions for the global market.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition">Product Catalog</a></li>
              <li><a href="#" className="hover:text-white transition">OEM Services</a></li>
              <li><a href="#" className="hover:text-white transition">Global Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-mono">
              <li>info@exactproaudiodrivers.com</li>
              <li>WhatsApp: +86-XXXX-XXXX</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[11px] uppercase tracking-widest text-gray-600">
          <p>© 2026 HD AUDIO TECHNOLOGY. ALL RIGHTS RESERVED.</p>
          <p>Designed for professional sound.</p>
        </div>
      </footer>
    </div>
  );
}