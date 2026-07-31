"use client";
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: '18tbx100', name: '18TBX100 18" Professional Subwoofer', category: 'Subwoofer', image: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg', specs: { 'Power': '1200W', 'Sens': '98dB' } },
    { id: '21nc152', name: '21NC152 21" High End Subwoofer', category: 'Subwoofer', image: 'https://sc02.alicdn.com/kf/H292d3f23a59846b0a1d4883609a7a6.png', specs: { 'Power': '4000W', 'Sens': '97dB' } },
    { id: '10nw64', name: '10NW64 10" Neodymium Woofer', category: 'LF Driver', image: 'https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png', specs: { 'Power': '600W', 'Sens': '96dB' } },
    { id: '15tbx100', name: '15TBX100 15" Professional LF Driver', category: 'LF Driver', image: 'https://sc02.alicdn.com/kf/H742e3f23a59846b0a1d4883609a7a6.png', specs: { 'Power': '2000W', 'Sens': '96dB' } },
    { id: '12ndl76', name: '12NDL76 12" Neodymium Woofer', category: 'LF Driver', image: 'https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', specs: { 'Power': '800W', 'Sens': '97dB' } }
  ];

  return (
    <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6 bg-[#0A0A0A] text-white min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter">Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id} className="bg-[#141414] border border-[#262626] flex flex-col group hover:border-[#E11D48] transition-all overflow-hidden">
            <div className="aspect-square p-8 bg-white flex items-center justify-center">
              <img src={p.image} alt={p.name} className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-8">
              <p className="text-[10px] text-[#A3A3A3] uppercase mb-1">{p.category}</p>
              <h3 className="text-xl font-bold uppercase mb-6 leading-tight">{p.name}</h3>
              <div className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest">VIEW DETAILS →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
