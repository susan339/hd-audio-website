import React from 'react';

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-[#2563EB] text-white w-9 h-9 flex items-center justify-center font-bold text-base rounded-md tracking-tight">CT</div>
          <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-xl">
            <span className="text-[#0a0f1d]">CORETONE</span>
            <span className="text-[#64748b]">AUDIO</span>
          </div>
        </div>
        <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-widest text-gray-900">
          {['PRODUCTS', 'SOLUTIONS', 'OEM/ODM', 'PROJECTS', 'ABOUT'].map((item) => (
            <a key={item} href={item === 'PRODUCTS' ? '/products' : `#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors uppercase">
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
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://sc02.alicdn.com/kf/Af43f3e2b09274fd8ba0820ed1295602aG.png" 
        alt="Hero Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="container relative z-10 mx-auto px-6">
      <div className="max-w-4xl">
        <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-6">Premium Sound Engineering</h2>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-tight text-white">
          PRO AUDIO DRIVERS <br /> & SYSTEMS
        </h1>
        <p className="text-xl md:text-2xl font-bold tracking-[0.15em] text-white uppercase mb-8 opacity-90">
          PREMIUM REPLACEMENTS.<br />UNCOMPROMISED PERFORMANCE.
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-xl leading-relaxed font-light">
          Experience the peak of audio performance with our precision-engineered transducers and complete sound reinforcement systems.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">
            View Products
          </a>
          <a href="#" className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">
            About Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedProduct = () => (
  <section className="py-24 bg-[#0a0a0a] text-white border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img 
            src="https://sc04.alicdn.com/kf/Ha1a1668e09f4492da0a33c0fd2345aeG.jpg" 
            alt="HD21NC152 Neodymium Subwoofer" 
            className="relative z-10 w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm block mb-4">Core Technology</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">THE APEX OF<br />BASS POWER</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                <span className="text-blue-500 font-bold">01</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">4000W Peak Performance</h4>
                <p className="text-gray-400 font-light leading-relaxed">Engineered for extreme reliability under high-load sound reinforcement environments.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                <span className="text-blue-500 font-bold">02</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Neodymium High-Efficiency</h4>
                <p className="text-gray-400 font-light leading-relaxed">High-grade N52 neodymium magnets provide superior magnetic flux and significant weight reduction.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                <span className="text-blue-500 font-bold">03</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Carbon Fiber Reinforced Cone</h4>
                <p className="text-gray-400 font-light leading-relaxed">Ultra-light and rigid cone material ensures minimum distortion and lightning-fast transient response.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OneStopService = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 text-center text-black">
      <h2 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter uppercase">ONE-STOP SERVICE</h2>
      <p className="text-lg md:text-xl font-medium mb-2 text-zinc-600">15+ years experience professional speaker manufacturer</p>
      <p className="text-md md:text-lg font-medium mb-8 uppercase tracking-widest text-zinc-400">OEM/ODM Service are available</p>
      
      <div className="mb-20">
        <a href="/products" className="bg-black text-white px-10 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border border-black hover:bg-transparent hover:text-black transition-all">
          VIEW MORE
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-7xl mx-auto px-4">
        {/* Card 1: High End Subwoofer */}
        <div className="relative flex items-center bg-black text-white rounded-[2rem] p-6 h-72 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
          <img 
            src="https://sc02.alicdn.com/kf/A8981d32c40ea44698602d0babaff43d1P.png" 
            className="absolute -left-12 w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20"
            alt="High End Subwoofer"
          />
          <div className="ml-auto w-[55%] text-left relative z-10">
            <h3 className="text-2xl font-bold mb-4">High End Subwoofer</h3>
            <ul className="text-xs space-y-2 opacity-80 font-light mb-6">
              <li>• Super high power</li>
              <li>• Heavy low bass</li>
              <li>• Long excursion</li>
            </ul>
            <div className="text-right">
              <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1.5 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                &lt; More
              </a>
            </div>
          </div>
          <div className="absolute inset-0 opacity-40 pointer-events-none rounded-[2rem] overflow-hidden">
             <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://sc04.alicdn.com/kf/A770450178687439698fea0ebdda6d926e.jpg')] bg-cover bg-center opacity-30 mix-blend-screen"></div>
          </div>
        </div>

        {/* Card 2: LF Drivers */}
        <div className="relative flex items-center bg-black text-white rounded-[2rem] p-6 h-72 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
          <img 
            src="https://sc02.alicdn.com/kf/A5fb99b3619704667ab0da02fb4d9dc8dQ.png" 
            className="absolute -left-12 w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20"
            alt="LF Drivers"
          />
          <div className="ml-auto w-[55%] text-left relative z-10">
            <h3 className="text-2xl font-bold mb-4">LF Drivers</h3>
            <ul className="text-xs space-y-2 opacity-80 font-light mb-6">
              <li>• Rich range from 2" to 24"</li>
              <li>• Best option for Nightclubs, Concert halls</li>
              <li>• Live show, Outdoor/Indoor</li>
            </ul>
            <div className="text-right">
              <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1.5 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                &lt; More
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: HF Drivers */}
        <div className="relative flex items-center bg-black text-white rounded-[2rem] p-6 h-72 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
          <img 
            src="https://sc02.alicdn.com/kf/A8bbdb7c43c394bb793d7dff42fc58a73q.png" 
            className="absolute -left-12 w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20"
            alt="HF Drivers"
          />
          <div className="ml-auto w-[55%] text-left relative z-10">
            <h3 className="text-2xl font-bold mb-4">HF Drivers</h3>
            <ul className="text-xs space-y-2 opacity-80 font-light mb-6">
              <li>• Superb power handling</li>
              <li>• High sensitivity</li>
              <li>• Low distortion</li>
            </ul>
            <div className="text-right">
              <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1.5 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                &lt; More
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Coaxial Speakers */}
        <div className="relative flex items-center bg-black text-white rounded-[2rem] p-6 h-72 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
          <img 
            src="https://sc02.alicdn.com/kf/Ac462388269f94b2d8050f592f998ecde4.png" 
            className="absolute -left-12 w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20"
            alt="Coaxial Speakers"
          />
          <div className="ml-auto w-[55%] text-left relative z-10">
            <h3 className="text-2xl font-bold mb-4">Coaxial Speakers</h3>
            <ul className="text-xs space-y-2 opacity-80 font-light mb-6">
              <li>• Super high power</li>
              <li>• Heavy low bass</li>
              <li>• Long excursion</li>
            </ul>
            <div className="text-right">
              <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1.5 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                &lt; More
              </a>
            </div>
          </div>
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
    <div className="font-sans antialiased text-black selection:bg-blue-600 selection:text-white bg-white">
      <Nav />
      <main>
        <Hero />
        <FeaturedProduct />
        <OneStopService />
        <CTA />
      </main>
      
      <footer className="bg-black text-white py-20 px-4 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#2563EB] text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-md tracking-tight">CT</div>
              <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-lg">
                <span className="text-white">CORETONE</span>
                <span className="text-[#64748b]">AUDIO</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">© 2026 CORETONE AUDIO. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
