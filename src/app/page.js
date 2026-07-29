'use client';
import React, { useState } from 'react';

export default function HomePage() {
  return (
    <div className="bg-white selection:bg-[#2563EB] selection:text-white">
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
              <button className="bg-[#2563EB] text-white px-10 py-5 font-bold text-sm tracking-[2.8px] uppercase hover:bg-blue-700">View Products</button>
              <button className="border border-white text-white px-10 py-5 font-bold text-sm tracking-[2.8px] uppercase hover:bg-white hover:text-black">About Us</button>
            </div>
          </div>
          <div className="hidden lg:block border-r-2 border-[#3B82F6] pr-6 text-right">
             <span className="text-white font-black text-6xl tracking-tighter uppercase leading-none">EXACT</span><br/>
             <span className="text-[#3B82F6] font-bold text-[10px] tracking-[0.4em] uppercase">TRANSDUCERS // 18"</span>
          </div>
        </div>
      </section>
    </div>
  );
}
