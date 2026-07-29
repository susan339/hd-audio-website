'use client';
import React from 'react';

export default function HomePage() {
  const products = [
    { name: 'High End Subwoofer', desc: ['Super high power', 'Heavy low bass'], image: 'https://sc02.alicdn.com/kf/A4a6b9694aaac4a03b7ba68697228428cd.png' },
    { name: 'LF Drivers', desc: ['Rich range from 2" to 24"', 'Best option for Nightclubs'], image: 'https://sc02.alicdn.com/kf/Afb38a5120bb7401e96354faccb6bd0c3J.png' },
    { name: 'HF Drivers', desc: ['Superb power handling', 'High sensitivity'], image: 'https://sc02.alicdn.com/kf/A7d1ce08c83c44ba2993303e750d39395Y.png' },
    { name: 'Coaxial Speakers', desc: ['Super high power', 'Long excursion'], image: 'https://sc02.alicdn.com/kf/Ab6b752927fda41ca927f97f50969de77N.png' },
  ];

  return (
    <div className="bg-white selection:bg-[#2563EB] selection:text-white">
      {/* SECTION 1: HERO - Exact Screen Align */}
      <section className="relative h-screen bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://sc02.alicdn.com/kf/Af43f3e2b09274fd8ba0820ed1295602aG.png" className="w-full h-full object-cover opacity-70" alt="Hero" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Top Centered Header Decoration (Fixed) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center flex flex-col items-center gap-4">
           <div className="text-gray-500 text-[22px] font-normal tracking-[0.25em] uppercase">21” | 18” | 15”</div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-12 pt-20">
          <div className="max-w-5xl">
            <span className="inline-block bg-[#2563EB] text-white px-4 py-1 text-[13px] font-bold tracking-[0.3em] uppercase mb-10">Premium Sound Engineering</span>
            <h1 className="text-[96px] font-black leading-[1] text-white tracking-[-4.8px] mb-2 uppercase">PRO AUDIO</h1>
            <h1 className="text-[96px] font-black leading-[1] tracking-[-4.8px] mb-10 uppercase text-white/10" style={{WebkitTextStroke: '1.5px rgba(255,255,255,0.4)'}}>DRIVERS & SYSTEMS</h1>
            <p className="text-white text-[22px] font-bold tracking-[0.1em] mb-16 uppercase leading-tight max-w-2xl">PREMIUM REPLACEMENTS. <br /> UNCOMPROMISED PERFORMANCE.</p>
            <div className="flex gap-6">
              <a href="/products" className="bg-[#2563EB] text-white px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-blue-700">VIEW PRODUCTS</a>
              <button onClick={() => window.location.href='https://wa.me/8615521083699'} className="border-2 border-white text-white px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">ABOUT US</button>
            </div>
          </div>
          
          {/* EXACT Logo Branding Strip */}
          <div className="absolute right-12 bottom-1/2 translate-y-1/2 hidden lg:flex flex-col items-end gap-2 border-r-[3px] border-[#2563EB] pr-6">
             <span className="text-white font-black text-8xl tracking-tighter uppercase opacity-90">EXACT</span>
             <span className="text-[#2563EB] font-bold text-xs tracking-[0.4em] uppercase mt-2">TRANSDUCERS // 18"</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE TECH */}
      <section className="bg-white py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[#2563EB] font-bold tracking-[0.3em] text-[12px] uppercase mb-4 block">Core Technology</span>
          <h2 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-16 uppercase text-black text-left">THE APEX OF <br/>BASS POWER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              {[
                { id: '01', title: '4000W Peak Performance', desc: 'Engineered for extreme reliability under high-load.' },
                { id: '02', title: 'Neodymium High-Efficiency', desc: 'High-grade N52 neodymium magnets.' },
                { id: '03', title: 'Carbon Fiber Reinforced Cone', desc: 'Ultra-light and rigid cone material.' }
              ].map(item => (
                <div key={item.id} className="flex gap-8 group">
                  <span className="text-[#2563EB] font-black text-xl leading-none mt-1">{item.id}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-black uppercase tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <img src="https://sc02.alicdn.com/kf/H2e52a71768c3494fa0940aacc3e7f585y.jpg" alt="Tech" className="w-full h-auto border-4 border-zinc-100 rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* SECTION 3: ONE-STOP SERVICE (RESTORED 4 CARDS) */}
      <section className="bg-white py-32 px-8 border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto text-center mb-24">
           <h2 className="text-[60px] font-black leading-[1] tracking-[-3px] uppercase text-black">ONE-STOP SERVICE</h2>
           <p className="text-gray-500 font-light text-lg tracking-widest uppercase mt-4">Professional speaker manufacturer // OEM/ODM Available</p>
        </div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-36">
          {products.map(card => (
            <div key={card.name} className="bg-black rounded-[40px] h-80 relative flex items-center overflow-visible group cursor-pointer hover:scale-[1.02] transition-all">
               <div className="absolute -left-12 w-64 h-64 bg-white rounded-full border-4 border-black/10 shadow-2xl flex items-center justify-center p-8 group-hover:scale-105 transition-all">
                  <img src={card.image} alt={card.name} className="max-h-full object-contain" />
               </div>
               <div className="ml-auto w-[55%] pr-10 text-center flex flex-col items-center">
                  <h3 className="text-white text-2xl font-black mb-4 uppercase leading-tight">{card.name}</h3>
                  <ul className="text-gray-500 text-[11px] font-bold tracking-widest uppercase mb-8">
                    {card.desc.map(d => <li key={d}>• {d}</li>)}
                  </ul>
                  <a href="/products" className="bg-[#2563EB] text-white px-8 py-2 text-[10px] font-black rounded-full uppercase tracking-widest">MORE</a>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROJECT PORTFOLIO - No Ghosting (Fixed) */}
      <section className="relative h-[600px] bg-black overflow-hidden flex items-end justify-center pb-24">
        <div className="absolute inset-0 z-0">
          <img src="https://sc02.alicdn.com/kf/H0daa452f96124bb8820b9c7800aa6382v.jpg" className="w-full h-full object-cover opacity-60" alt="Portfolio" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 w-full max-w-2xl px-8">
          {/* Only Horizontal Flare Divider (Removed overlapping text) */}
          <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-4 bg-white/5 blur-xl rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white blur-sm rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL PORTFOLIO MAP */}
      <section className="py-32 bg-white text-center">
         <h2 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-16 uppercase text-black">GLOBAL PORTFOLIO</h2>
         <img src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" alt="Map" className="w-full max-w-[1280px] mx-auto h-auto grayscale hover:grayscale-0 transition-all duration-1000" />
      </section>
    </div>
  );
}
