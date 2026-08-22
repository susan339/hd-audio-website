/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import products from '../data/products.json';

export const metadata = {
  title: 'Engineering Catalog | Professional Audio Transducers',
  description: 'Explore CORETONE AUDIO full range of high-end Neodymium drivers, Compression drivers, and Subwoofers. Precision engineered for professional sound systems.',
};

export default function ProductsPage() {
  return (
    <main className="bg-[#FBFBFC] py-32 min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-100 pb-12 text-left">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-black text-white px-2.5 py-0.5 rounded-sm font-black text-sm italic tracking-tighter">CT</div>
                <span className="text-[#2563EB] font-black tracking-[0.3em] uppercase text-[9px]">Acoustic Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-none uppercase italic">
                Transducer <br />Assets
            </h1>
          </div>
          <div className="md:text-right text-left">
             <p className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Manufacturing Facility: Guangzhou, China</p>
             <a href="/inquiry" className="inline-block bg-[#2563EB] text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-lg">Inquiry For Batch Quote</a>
          </div>
        </header>

        {/* Luxopack Style Grid - 列表页展示核心 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group block bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="aspect-square bg-white flex items-center justify-center p-12 relative">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-blue-50 text-[#2563EB] text-[9px] font-black px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest">Details →</span>
                </div>
              </div>
              <div className="px-8 pb-10">
                <div className="h-px w-full bg-zinc-50 mb-6"></div>
                <h3 className="font-black text-xl mb-3 group-hover:text-[#2563EB] transition-colors uppercase tracking-tight leading-tight text-zinc-900">
                  {p.title}
                </h3>
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Verified Component · 2026 Edition</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
