'use client';
import React from 'react';

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 这里移除了图标，改为纯文字链接 */}
        <a href="/news" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-12 hover:underline">
          ← Back to Bulletins
        </a>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase tracking-widest text-[#2563EB]">
            <span>August 3, 2026</span>
            <span className="bg-[#2563EB] text-white px-2 py-0.5">Technology & Innovation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            The Evolution of High-Power Subwoofer Drivers in 2026: Why Thermal Management is the New Pro Audio Battlefield
          </h1>
        </header>

        <div className="prose prose-zinc max-w-none font-medium text-zinc-700 leading-relaxed space-y-8">
          <p className="text-xl font-bold text-black italic border-l-4 border-[#2563EB] pl-6">
            As the professional audio industry advances through 2026, the defining metric for success is no longer just nominal power handling; it is thermal stability.
          </p>

          {/* 产品配图 */}
          <div className="my-12">
            <img 
              src="https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png" 
              alt="18TBX100" 
              className="w-full bg-zinc-50 border border-zinc-100 p-8" 
            />
          </div>

          <section>
            <h2 className="text-2xl font-black uppercase text-black mb-4">1. Heat as the Silent Enemy</h2>
            <p>In modern pro audio applications, subwoofers are often pushed to sustain input power exceeding 1500W. Since only a tiny fraction of this is converted into sound, the vast majority becomes heat. If not managed, this leads to <strong>Power Compression</strong> and <strong>Acoustic Fatigue</strong>, where the system loses efficiency and clarity at critical moments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-black mb-4">2. The CORETONE Solution</h2>
            <p>CORETONE has implemented a comprehensive cooling architecture in the <strong>18TBX100</strong>. This "Exact" system uses Forced Fluid Dynamic Ventilation, acting as a natural air pump during the coil's high-speed movement.</p>
          </section>

          <section className="bg-zinc-900 text-white p-10 rounded-sm my-12">
            <h3 className="text-xl font-black uppercase mb-4 text-[#2563EB]">Technical Specs Recap</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono tracking-widest uppercase">
              <li>• 2400W Peak Power</li>
              <li>• 98dB Sensitivity</li>
              <li>• 34Hz Resonance (Fs)</li>
              <li>• 4.5" Voice Coil</li>
            </ul>
          </section>

          <div className="pt-12 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">CORETONE AUDIO Editorial Team</p>
            <a href="/products/18tbx100" className="bg-[#2563EB] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all">
              View Product Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
