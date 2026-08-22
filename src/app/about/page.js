/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About CORETONE AUDIO | Leading Professional Speaker Manufacturer',
  description: 'Founded in 2011, CORETONE AUDIO (Exact Pro Audio Drivers) is a premium transducer manufacturer in Guangzhou. Discover our legacy in high-performance sound engineering.',
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-black text-white px-3 py-0.5 rounded-sm font-black text-lg italic tracking-tighter">CT</div>
            <span className="text-[#2563EB] font-black tracking-[0.4em] uppercase text-[10px]">Since 2011 · Manufacturing Excellence</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-black leading-[0.85] uppercase italic mb-12">
            The Science <br />of Impact.
          </h1>
          <p className="text-zinc-400 font-bold text-lg md:text-2xl tracking-tight max-w-3xl leading-relaxed">
            CORETONE AUDIO is a leading professional transducer manufacturer dedicated to the pursuit of uncompromised acoustic performance.
          </p>
        </div>
      </section>

      {/* Brand Legacy - EEAT SEO Section */}
      <section className="py-24 px-6 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic border-l-4 border-[#2563EB] pl-6">
              Our Legacy: Exact Pro Audio Drivers
            </h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed font-medium">
              <p>
                Strategically located in the <strong>Panyu Audio Cluster of Guangzhou</strong>, CORETONE AUDIO has evolved into a global powerhouse for professional sound reinforcement components. Our brand, <strong>Exact Pro Audio Drivers</strong>, is synonymous with precision engineering and high-pressure reliability.
              </p>
              <p>
                From massive 21-inch neodymium subwoofers to high-frequency compression drivers, every component is crafted using state-of-the-art materials like carbon-fiber reinforced cones and advanced thermal management systems.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" 
                alt="CORETONE AUDIO Manufacturing Facility" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-[10px] tracking-[0.5em] uppercase vertical-text">Factory Direct</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Technical SEO Focus */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <h3 className="text-[#2563EB] font-black text-xs uppercase tracking-widest mb-6">01. Precision Engineering</h3>
              <p className="text-zinc-500 font-bold text-sm leading-relaxed">
                Utilizing Klippel R&D systems and advanced FEA magnetic modeling to ensure linear excursion and ultra-low distortion.
              </p>
            </div>
            <div className="p-10 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <h3 className="text-[#2563EB] font-black text-xs uppercase tracking-widest mb-6">02. OEM/ODM Expertise</h3>
              <p className="text-zinc-500 font-bold text-sm leading-relaxed">
                Trusted partner for global audio brands. We provide bespoke transducer solutions tailored to specific cabinet architectures.
              </p>
            </div>
            <div className="p-10 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <h3 className="text-[#2563EB] font-black text-xs uppercase tracking-widest mb-6">03. Global Reliability</h3>
              <p className="text-zinc-500 font-bold text-sm leading-relaxed">
                Field-tested in the most demanding concert environments. Our drivers are built to deliver consistent performance, tour after tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white text-center overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic leading-none">
            Ready to upgrade <br />your sound?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/products" className="bg-[#2563EB] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
              View Catalog
            </Link>
            <Link href="/inquiry" className="border-2 border-white text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-black transition-all">
              Contact Engineering
            </Link>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute -bottom-20 -right-20 text-[200px] font-black text-zinc-900/50 uppercase italic select-none">
          EXACT
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="py-12 px-6 border-t border-zinc-100 text-center">
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">
          © 2026 CORETONE AUDIO · Professional Audio Solutions · Guangzhou, China
        </p>
      </footer>
    </main>
  );
}
