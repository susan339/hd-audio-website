'use client';
import React, { useState } from 'react';

export default function HomePage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="bg-white selection:bg-[#2563EB] selection:text-white">
      {/* SECTION 1: HERO - 100% Mirror */}
      <section className="relative h-screen bg-black overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://sc02.alicdn.com/kf/Af43f3e2b09274fd8ba0820ed1295602aG.png" className="w-full h-full object-cover opacity-60 grayscale" alt="Hero" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-8 pt-20 flex justify-between items-center">
          <div className="max-w-4xl">
            <span className="inline-block bg-[#3B82F6] text-white px-4 py-1.5 text-[14px] font-bold tracking-[0.3em] uppercase mb-10">Premium Sound Engineering</span>
            <h1 className="text-[96px] font-black leading-[1] text-white tracking-[-4.8px] mb-6 uppercase">PRO AUDIO <br/><span className="text-[#71717A]">DRIVERS & SYSTEMS</span></h1>
            <p className="text-[#D1D5DB] text-[24px] font-bold tracking-[0.15em] mb-14 max-w-xl uppercase leading-tight">PREMIUM REPLACEMENTS. <br/> UNCOMPROMISED PERFORMANCE.</p>
            <div className="flex gap-4">
              <a href="/products" className="bg-[#2563EB] text-white px-10 py-5 font-bold text-sm tracking-[2.8px] uppercase hover:bg-blue-700 text-center">View Products</a>
              <button onClick={() => window.location.href='https://wa.me/8615521083699'} className="border border-white text-white px-10 py-5 font-bold text-sm tracking-[2.8px] uppercase hover:bg-white hover:text-black transition-all">About Us</button>
            </div>
          </div>
          <div className="hidden lg:block border-r-2 border-[#3B82F6] pr-6 text-right">
             <span className="text-white font-black text-6xl tracking-tighter uppercase leading-none">EXACT</span><br/>
             <span className="text-[#3B82F6] font-bold text-[10px] tracking-[0.4em] uppercase">TRANSDUCERS // 18"</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE TECHNOLOGY - Restoration */}
      <section className="bg-white py-24 px-8 border-b border-zinc-100">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[#2563EB] font-bold tracking-[0.3em] text-[12px] uppercase mb-4 block">Core Technology</span>
          <h2 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-16 uppercase text-black text-left">THE APEX OF <br/>BASS POWER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12 text-left">
              {[
                { id: '01', title: '4000W Peak Performance', desc: 'Engineered for extreme reliability under high-load environments.' },
                { id: '02', title: 'Neodymium High-Efficiency', desc: 'High-grade N52 neodymium magnets for superior flux.' },
                { id: '03', title: 'Carbon Fiber Reinforced Cone', desc: 'Ultra-light and rigid cone material ensures minimum distortion.' }
              ].map(item => (
                <div key={item.id} className="flex gap-8 group">
                  <span className="text-[#3B82F6] font-bold text-lg mt-1">{item.id}</span>
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

      {/* SECTION 3: PROJECT PORTFOLIO - Restoration */}
      <section className="relative h-[600px] bg-black overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://sc02.alicdn.com/kf/H0daa452f96124bb8820b9c7800aa6382v.jpg" className="w-full h-full object-cover opacity-60" alt="Portfolio" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 px-8">
          <h2 className="text-[52px] md:text-[60px] font-black text-white leading-tight uppercase tracking-[-2px] mb-8">GLOBAL PROJECT PORTFOLIO. <br /> TRUSTED WORLDWIDE.</h2>
          <div className="relative w-full max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-4 bg-white/10 blur-xl rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white blur-sm rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
      </section>

      {/* SECTION 4: GLOBAL PORTFOLIO MAP - Restoration */}
      <section className="py-24 bg-white">
         <div className="max-w-[1280px] mx-auto px-8 text-center">
            <h2 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-16 uppercase text-black">GLOBAL PORTFOLIO</h2>
            <img src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" alt="Map" className="w-full h-auto grayscale" />
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 text-white px-8 border-t border-zinc-900">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center">
           <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#2563EB] rounded-sm flex items-center justify-center font-black text-xs">CT</div>
              <span className="font-bold text-sm tracking-widest uppercase">Exact Pro Audio</span>
           </div>
           <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase">© 2026 PREMIUM REPLACEMENTS // UNCOMPROMISED PERFORMANCE</p>
        </div>
      </footer>
    </div>
  );
}
