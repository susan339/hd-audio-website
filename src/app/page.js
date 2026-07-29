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
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-screen bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://sc02.alicdn.com/kf/Af43f3e2b09274fd8ba0820ed1295602aG.png" className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-8 pt-20">
          <div className="max-w-4xl text-left">
            <div className="text-gray-400 text-[24px] font-normal tracking-[0.25em] uppercase mb-12 mt-20">21” | 18” | 15”</div>
            <span className="inline-block bg-[#2563EB] text-white px-4 py-1 text-[13px] font-bold tracking-[0.3em] uppercase mb-10">Premium Sound Engineering</span>
            <h1 className="text-[96px] font-black leading-[1] text-white tracking-[-4.8px] mb-2 uppercase">PRO AUDIO</h1>
            <h1 className="text-[96px] font-black leading-[1] tracking-[-4.8px] mb-10 uppercase text-white/20" style={{WebkitTextStroke: '1.5px rgba(255,255,255,0.4)'}}>DRIVERS & SYSTEMS</h1>
            <p className="text-white text-[22px] font-bold tracking-[0.1em] mb-16 uppercase leading-tight max-w-2xl">PREMIUM REPLACEMENTS. <br /> UNCOMPROMISED PERFORMANCE.</p>
            <div className="flex gap-6">
              <a href="/products" className="bg-[#2563EB] text-white px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-blue-700">VIEW PRODUCTS</a>
              <button onClick={() => window.location.href='https://wa.me/8615521083699'} className="border-2 border-white text-white px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">ABOUT US</button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGY */}
      <section className="bg-white py-32 px-8">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-16 uppercase text-black">CORE TECHNOLOGY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              {[
                { id: '01', title: '4000W Peak Performance', desc: 'Engineered for extreme reliability.' },
                { id: '02', title: 'Neodymium High-Efficiency', desc: 'High-grade N52 neodymium magnets.' },
                { id: '03', title: 'Carbon Fiber Reinforced Cone', desc: 'Ultra-light and rigid cone material.' }
              ].map(item => (
                <div key={item.id} className="flex gap-8 group">
                  <span className="text-[#2563EB] font-black text-xl leading-none mt-1">{item.id}</span>
                  <div><h4 className="font-bold text-xl mb-3 text-black uppercase tracking-tight">{item.title}</h4><p className="text-zinc-500 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <img src="https://sc02.alicdn.com/kf/H2e52a71768c3494fa0940aacc3e7f585y.jpg" alt="Tech" className="w-full h-auto border-4 border-zinc-100 rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ONE-STOP SERVICE (PRODUCT GRID) */}
      <section className="bg-white py-32 px-8 border-t border-zinc-100 text-center">
        <h2 className="text-[60px] font-black leading-[1] tracking-[-3px] uppercase text-black mb-24">ONE-STOP SERVICE</h2>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
          {products.map(card => (
            <div key={card.name} className="bg-black rounded-[40px] h-80 relative flex items-center overflow-visible group cursor-pointer hover:scale-[1.02] transition-all">
               <div className="absolute -left-12 w-64 h-64 bg-white rounded-full border-4 border-black/10 shadow-2xl flex items-center justify-center p-8 group-hover:scale-105 transition-all">
                  <img src={card.image} alt={card.name} className="max-h-full object-contain" />
               </div>
               <div className="ml-auto w-[55%] pr-10 text-center flex flex-col items-center">
                  <h3 className="text-white text-2xl font-black mb-4 uppercase">{card.name}</h3>
                  <ul className="text-zinc-500 text-[11px] font-bold tracking-widest uppercase mb-8">{card.desc.map(d => <li key={d}>• {d}</li>)}</ul>
                  <a href="/products" className="bg-[#2563EB] text-white px-8 py-2 text-[10px] font-black rounded-full uppercase tracking-widest">MORE</a>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section className="relative h-[600px] bg-black overflow-hidden flex items-end justify-center pb-24">
        <img src="https://sc02.alicdn.com/kf/H0daa452f96124bb8820b9c7800aa6382v.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Portfolio" />
        <div className="relative z-10 w-full max-w-2xl px-8 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
      </section>
    </div>
  );
}
