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
            <span>August 9, 2026</span>
            <span className="bg-[#2563EB] text-white px-2 py-0.5">Acoustic Engineering</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8 italic">
            Precision at the Peak: Why Phase Integrity in Compression Drivers Defines the 2026 Audio Landscape
          </h1>
        </header>

        <div className="prose prose-zinc max-w-none font-medium text-zinc-700 leading-relaxed space-y-8">
          <p className="text-xl font-bold text-black italic border-l-4 border-[#2563EB] pl-6">
            In the shift toward immersive spatial audio, the differentiator in 2026 is no longer just high-frequency extension, but the absolute temporal accuracy of the wavefront.
          </p>

          {/* 相位塞技术配图 */}
          <div className="my-12">
            <img 
              src="https://sc02.alicdn.com/kf/A62d6717f8d9546ec9f31ad58f67ebef58.png" 
              alt="CORETONE Radial-Path Phase Plug Technology" 
              className="w-full bg-zinc-50 border border-zinc-100 p-2 shadow-sm" 
            />
            <p className="text-[10px] text-zinc-400 uppercase mt-4 text-center tracking-widest font-bold">Internal View: CORETONE proprietary Radial-Path Phase Plug geometry</p>
          </div>

          <section>
            <h2 className="text-2xl font-black uppercase text-black mb-4">1. The Anatomy of Phase Alignment</h2>
            <p>Destructive interference at high frequencies often results in harsh, fatiguing sound. The 2026 <strong>CORETONE Exact Series</strong> utilizes optimized acoustic path lengths through the phase plug, ensuring that every sound wave reaches the throat exit simultaneously for a perfectly coherent wavefront.</p>
          </section>

          {/* 驱动器展示配图 */}
          <div className="my-12">
            <img 
              src="https://sc02.alicdn.com/kf/A733e2e6fb2e94312bc3895004d82fb22w.png" 
              alt="CORETONE High-Frequency Compression Driver" 
              className="w-full bg-zinc-50 border border-zinc-100 p-8" 
            />
          </div>

          <section>
            <h2 className="text-2xl font-black uppercase text-black mb-4">2. Material Innovation</h2>
            <p>Beyond geometry, CORETONE is introducing <strong>Hybrid-Composite Diaphragms</strong>. By integrating the rigidity of aerospace alloys with modern self-damping polymers, we have virtually eliminated the ultrasonic "ringing" that compromises high-SPL performances.</p>
          </section>

          <div className="pt-12 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">CORETONE AUDIO R&D Team</p>
            <a href="/products" className="bg-[#2563EB] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all">
              Explore Exact HF Series
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
