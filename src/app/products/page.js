"use client";
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: '18tbx100', name: '18TBX100 18" Professional Subwoofer', cat: 'Subwoofer', img: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg' },
    { id: '21nc152', name: '21NC152 21" High End Subwoofer', cat: 'Subwoofer', img: 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg' },
    { id: '10nw64', name: '10NW64 10" Professional Neodymium Woofer', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png' },
    { id: '15tbx100', name: '15TBX100 15" Professional LF Driver', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg' },
    { id: '12ndl76', name: '12NDL76 12" Professional Neodymium Woofer', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png' }
  ];

  return (
    <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6 bg-[#0A0A0A] text-white min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter">Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id} className="bg-[#141414] border border-[#262626] flex flex-col group hover:border-[#E11D48] transition-all overflow-hidden">
            <div className="aspect-square p-8 bg-white flex items-center justify-center">
              <img src={p.img} alt={p.name} className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1">
              <p className="text-[10px] text-[#A3A3A3] uppercase mb-1">{p.cat}</p>
              <h3 className="text-xl font-bold uppercase mb-6 leading-tight">{p.name}</h3>
              <div className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mt-auto">VIEW ASSET DETAILS →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
