'use client';
import React from 'react';

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/news" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-12 hover:underline">
          ← Back to Bulletins
        </a>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase tracking-widest text-[#2563EB]">
            <span>August 6, 2026</span>
            <span className="bg-[#2563EB] text-white px-2 py-0.5">Material Innovation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8 italic">
            Material Science in 2026: Why Advanced Composites are the New Standard for Professional Woofers
          </h1>
        </header>

        <div className="prose prose-zinc max-w-none font-medium text-zinc-700 leading-relaxed space-y-8">
          <p className="text-xl font-bold text-black italic border-l-4 border-[#2563EB] pl-6">
            In the high-pressure world of 2026 professional audio, the focus has shifted to the material science of the cone itself—achieving the perfect balance of lightness and extreme rigidity.
          </p>

          {/* 碳纤维纹理配图 */}
          <div className="my-12">
            <img 
              src="https://sc02.alicdn.com/kf/A24cc7ea07a30410f9b59b4ca89bb88c2L.png" 
              alt="Carbon Fiber Reinforced Pulp Texture" 
              className="w-full bg-zinc-50 border border-zinc-100 p-2 shadow-sm" 
            />
            <p className="text-[10px] text-zinc-400 uppercase mt-4 text-center tracking-widest font-bold">Close-up: CORETONE CFRP (Carbon Fiber Reinforced Pulp) weave</p>
          </div>

          <section>
            <h2 className="text-2xl font-black uppercase text-black mb-4">1. Breaking the "Breakup"</h2>
            <p>Traditional paper pulp often suffers from "cone breakup" when driven by high-power amplifiers. The latest <strong>CORETONE Exact Series</strong> drivers solve this by weaving micro-strands of carbon fiber into a high-grade cellulose matrix, ensuring physical integrity during long-excursion movements.</p>
          </section>

          {/* 18寸单元展示配图 */}
          <div className="my-12">
            <img 
              src="https://sc02.alicdn.com/kf/Ab1fe30efab41492880ab2b8a715e18ddv.png" 
              alt="CORETONE 18-inch High-Power Driver" 
              className="w-full bg-zinc-50 border border-zinc-100 p-8" 
            />
          </div>

          <section>
            <h2 className="text-2xl font-black uppercase text-black mb-4">2. The Multi-Layer Advantage</h2>
            <p>Flagship models like the <a href="/products/18tbx100" className="text-[#2563EB] underline font-bold">18TBX100</a> incorporate a multi-layer sandwich construction. This proprietary damping layer effectively neutralizes internal resonances, allowing the driver to behave like a perfect piston.</p>
          </section>

          <div className="pt-12 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">CORETONE AUDIO Editorial Team</p>
            <a href="/products/18tbx100" className="bg-[#2563EB] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all">
              Explore 18TBX100 Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
