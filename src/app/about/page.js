'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4 uppercase">WHO WE ARE</h1>
          <p className="text-blue-500 font-bold tracking-[0.4em] uppercase text-sm">Innovation in Sound Engineering since 2011</p>
        </div>
      </section>
      <section className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-8 uppercase italic border-l-8 border-blue-600 pl-6">Our Legacy</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-6 font-light">Founded in 2011, CORETONE AUDIO has dedicated over 15 years to the pursuit of acoustic perfection. We specialize in high-performance transducers and pro-audio systems.</p>
        </div>
        <div className="space-y-12">
          <div className="border-b border-zinc-100 pb-8"><h3 className="text-xl font-black mb-2 uppercase tracking-tight">Precision Engineering</h3><p className="text-zinc-500 text-sm font-light uppercase tracking-widest">State-of-the-art simulation software and testing facilities.</p></div>
          <div><h3 className="text-xl font-black mb-2 uppercase tracking-tight">Global Distribution</h3><p className="text-zinc-500 text-sm font-light uppercase tracking-widest">Powering night clubs and stadiums across 40+ countries.</p></div>
        </div>
      </section>
    </div>
  );
}
