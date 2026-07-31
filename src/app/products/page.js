'use client';
/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const allProducts = [
    { id: '21nc152', name: '21NC152 21" High End Subwoofer', category: 'high-end-subwoofer', desc: ['4000W Peak Power', '152mm (6") Voice Coil', '97dB High Sensitivity'], image: 'https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png' },
    { id: '18tbx100', name: '18TBX100 18" Professional Subwoofer', category: 'high-end-subwoofer', desc: ['2400W Peak Power', '100mm (4") Voice Coil', '98dB Sensitivity'], image: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png' },
    { id: '10nw64', name: '10NW64 10" Neodymium Woofer', category: 'lf-drivers', desc: ['600W Maximum Power', '64mm (2.5") Voice Coil', '96dB High Sensitivity'], image: 'https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png' },
    { id: '15tbx100', name: '15TBX100 15" Professional LF Driver', category: 'lf-drivers', desc: ['2000W Peak Power', '100mm (4") Voice Coil', '96dB High Sensitivity'], image: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png' },
    { id: '12ndl76', name: '12NDL76 12" Neodymium Woofer', category: 'lf-drivers', desc: ['800W Maximum Power', '76mm (3") Voice Coil', '97dB High Sensitivity'], image: 'https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png' }
  ];

  const displayedProducts = categoryFilter 
    ? allProducts.filter(p => p.category === categoryFilter)
    : allProducts;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 text-black selection:bg-[#2563EB] selection:text-white text-left">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-12 uppercase">
          {categoryFilter ? categoryFilter.replace(/-/g, ' ') : 'OUR COLLECTION'}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {displayedProducts.map(card => (
            <div key={card.id} className="bg-black rounded-[40px] h-80 relative flex items-center overflow-visible group cursor-pointer hover:scale-[1.02] transition-all duration-500 shadow-2xl">
              <div className="absolute -left-12 w-64 h-64 bg-white rounded-full border-4 border-black/10 shadow-2xl flex items-center justify-center p-10 group-hover:scale-105 transition-all">
                <img src={card.image} alt={card.name} className="max-h-full object-contain" />
              </div>
              <div className="flex-1 ml-48 pr-6 text-center flex flex-col items-center">
                <h3 className="text-white text-[22px] font-black uppercase mb-4 tracking-tighter leading-tight">{card.name}</h3>
                <ul className="text-zinc-500 text-[10px] font-bold tracking-widest space-y-1 mb-8 uppercase">{card.desc.map(d => <li key={d}>• {d}</li>)}</ul>
                <a href={`/products/${card.id}`} className="bg-[#2563EB] text-white px-8 py-2 text-[10px] font-black rounded-full uppercase tracking-widest hover:bg-blue-700 transition-colors no-underline">DETAILS</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return <Suspense fallback={<div>Loading assets...</div>}><ProductsContent /></Suspense>;
}
