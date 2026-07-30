'use client';
import React from 'react';

export default function ProductsPage() {
  return (
    <div className="bg-white pt-32 pb-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-20 uppercase text-black">OUR COLLECTION</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
          <div className="bg-black rounded-[2rem] h-72 relative flex items-center overflow-visible group cursor-pointer hover:scale-[1.02] transition-all">
            <div className="absolute -left-12 w-64 h-64 bg-white rounded-full border-4 border-black/10 shadow-2xl flex items-center justify-center p-10 group-hover:scale-105 transition-all">
              <img src="https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg" className="max-h-full object-contain" alt="18TBX100" />
            </div>
            <div className="flex-1 ml-48 pr-6 text-center">
              <h3 className="text-white text-[24px] font-black uppercase mb-4 tracking-tighter">18TBX100 Subwoofer</h3>
              <ul className="text-[#A1A1AA] text-[11px] font-bold tracking-widest space-y-1 mb-8 uppercase">
                <li>• 1200W PEAK POWER</li>
                <li>• 4" COPPER VOICE COIL</li>
                <li>• 98DB SENSITIVITY</li>
              </ul>
              <a href="/products/18tbx100" className="bg-[#2563EB] text-white px-8 py-2 text-[10px] font-black rounded-full uppercase tracking-widest inline-block hover:scale-105 transition-all">MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
