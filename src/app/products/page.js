'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  // 这是您的全量产品数据库
  const allProducts = [
    { 
      id: '15tbx100', 
      name: '15TBX100 LF Driver', 
      category: 'lf-drivers',
      desc: ['2000W Peak Power', '100mm (4") Voice Coil', '97dB High Sensitivity'], 
      image: 'https://sc02.alicdn.com/kf/H19cf0f9679ea4b31be0b9d7a83aefc84C.jpg' 
    },
    { 
      id: '21nc152', 
      name: '21NC152 Neodymium Subwoofer', 
      category: 'high-end-subwoofer',
      desc: ['4000W Peak Power', '152mm (6") Voice Coil', '97dB High Sensitivity'], 
      image: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg' 
    },
    { 
      id: '18tbx100', 
      name: '18TBX100 Subwoofer', 
      category: 'high-end-subwoofer',
      desc: ['1200W Peak Power', '4" Copper Voice Coil', '98dB Sensitivity'], 
      image: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg' 
    }
  ];

  const displayedProducts = categoryFilter 
    ? allProducts.filter(p => p.category === categoryFilter)
    : allProducts;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 text-black selection:bg-[#2563EB] selection:text-white text-left">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-[60px] font-black leading-[1] tracking-[-3px] mb-8 uppercase">
          {categoryFilter ? categoryFilter.replace(/-/g, ' ') : 'OUR COLLECTION'}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
          {displayedProducts.map(card => (
            <div key={card.id} className="bg-black rounded-[40px] h-80 relative flex items-center overflow-visible group cursor-pointer hover:scale-[1.02] transition-all duration-500 shadow-2xl">
              <div className="absolute -left-12 w-64 h-64 bg-white rounded-full border-4 border-black/10 shadow-2xl flex items-center justify-center p-10 group-hover:scale-105 transition-all">
                <img src={card.image} alt={card.name} className="max-h-full object-contain" />
              </div>
              <div className="flex-1 ml-48 pr-6 text-center flex flex-col items-center">
                <h3 className="text-white text-[24px] font-black uppercase mb-4 tracking-tighter leading-tight">{card.name}</h3>
                <ul className="text-zinc-500 text-[11px] font-bold tracking-widest space-y-1 mb-8 uppercase">
                   {card.desc.map(d => <li key={d}>• {d}</li>)}
                </ul>
                <a href={`/products/${card.id}`} className="bg-[#2563EB] text-white px-8 py-2 text-[10px] font-black rounded-full uppercase tracking-widest hover:bg-blue-700 transition-colors">DETAILS</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-48 text-center uppercase font-bold tracking-widest">Initiating Asset Retrieval...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
