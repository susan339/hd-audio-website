import React from 'react';

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://sc02.alicdn.com/kf/H148b186beaaa4c09851d5dc291ceb877R.jpg" alt="Hero Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    {/* 增加 pt-32 确保顶部间距，增加 pb-32 确保底部内容完整 */}
    <div className="container relative z-10 mx-auto px-6 pt-32 pb-32">
      <div className="max-w-4xl">
        <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-sm mb-6">Premium Sound Engineering</h2>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-tight text-white uppercase">
          PRO AUDIO DRIVERS <br /> & SYSTEMS
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.15em] text-white uppercase mb-8 opacity-90">
          PREMIUM REPLACEMENTS.<br />UNCOMPROMISED PERFORMANCE.
        </p>
        <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-xl leading-relaxed font-light">
          Experience the peak of audio performance with our precision-engineered transducers and complete sound reinforcement systems.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">View Products</a>
          <a href="#" className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
);

// FeaturedProduct 和 OneStopService 已经集成最新的自适应逻辑
const FeaturedProduct = () => (
  <section className="py-24 bg-[#0a0a0a] text-white border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative group px-4 lg:px-0">
          <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img src="https://sc02.alicdn.com/kf/H2e52a71768c3494fa0940aacc3e7f585y.jpg" alt="Audio Driver" className="relative z-10 w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="px-6 lg:px-0 text-center lg:text-left">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm block mb-4">Core Technology</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">THE APEX OF<br />BASS POWER</h2>
          <div className="space-y-8 text-left">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mr-6 mt-1 flex-shrink-0"><span className="text-blue-500 font-bold">01</span></div>
              <div><h4 className="text-xl font-bold mb-2">4000W Peak Performance</h4><p className="text-gray-400 font-light leading-relaxed">Extreme reliability under high-load environments.</p></div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mr-6 mt-1 flex-shrink-0"><span className="text-blue-500 font-bold">02</span></div>
              <div><h4 className="text-xl font-bold mb-2">Neodymium High-Efficiency</h4><p className="text-gray-400 font-light leading-relaxed">N52 magnets for superior flux and weight reduction.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OneStopService = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6 text-center text-black">
      <h2 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter uppercase">ONE-STOP SERVICE</h2>
      <p className="text-lg md:text-xl font-medium mb-8 text-zinc-600 uppercase tracking-widest">OEM/ODM Service are available</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 max-w-7xl mx-auto px-4 mt-20">
        {/* Card 布局兼容移动端和PC端 */}
        <div className="relative flex flex-col md:flex-row items-center bg-black text-white rounded-[2rem] p-8 md:p-6 h-auto md:h-72 group hover:scale-[1.02] transition-all">
          <div className="relative md:absolute -top-16 md:top-auto md:-left-12 w-56 h-56 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center overflow-hidden z-20 shadow-2xl p-6 border-4 border-zinc-900/10 mb-8 md:mb-0">
            <img src="https://sc02.alicdn.com/kf/A4a6b9694aaac4a03b7ba68697228428cd.png" className="w-full h-full object-contain" alt="Subwoofer" />
          </div>
          <div className="w-full md:ml-auto md:w-[55%] text-center md:text-left"><h3 className="text-2xl font-bold mb-4 uppercase">High End Subwoofer</h3><a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1.5 text-[10px] uppercase hover:bg-white hover:text-black"> &lt; More </a></div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center bg-black text-white rounded-[2rem] p-8 md:p-6 h-auto md:h-72 group hover:scale-[1.02] transition-all">
          <div className="relative md:absolute -top-16 md:top-auto md:-left-12 w-56 h-56 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center overflow-hidden z-20 shadow-2xl p-6 border-4 border-zinc-900/10 mb-8 md:mb-0">
            <img src="https://sc02.alicdn.com/kf/Afb38a5120bb7401e96354faccb6bd0c3J.png" className="w-full h-full object-contain" alt="LF Drivers" />
          </div>
          <div className="w-full md:ml-auto md:w-[55%] text-center md:text-left"><h3 className="text-2xl font-bold mb-4 uppercase">LF Drivers</h3><a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1.5 text-[10px] uppercase hover:bg-white hover:text-black"> &lt; More </a></div>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioBanner = () => (
  <section className="w-full overflow-hidden">
    <img src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" alt="Portfolio" className="w-full h-auto block" />
  </section>
);

export default function Home() { return ( <div className="font-sans antialiased text-black selection:bg-blue-600 selection:text-white bg-white"><main><Hero /><FeaturedProduct /><OneStopService /><PortfolioBanner /></main><footer className="bg-black text-white py-20 px-4 text-center"><div className="max-w-7xl mx-auto"><p className="text-gray-400 text-sm tracking-widest uppercase">© 2026 CORETONE AUDIO. All Rights Reserved.</p></div></footer></div> ); }
