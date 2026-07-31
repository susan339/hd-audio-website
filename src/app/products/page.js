'use client';
/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const allProducts = [
    { id: '21nc152', name: '21NC152 21" High End Subwoofer', category: 'high-end-subwoofer', desc: ['4000W Peak Power', '153mm Voice Coil', '97dB Sensitivity'], image: 'https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png' },
    { id: '18tbx100', name: '18TBX100 18" Pro Subwoofer', category: 'high-end-subwoofer', desc: ['2400W Peak Power', '100mm Voice Coil', '98dB Sensitivity'], image: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png' },
    { id: '15tbx100', name: '15TBX100 15" Professional LF Driver', category: 'lf-drivers', desc: ['2000W Peak Power', '100mm Voice Coil', '96dB Sensitivity'], image: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png' },
    { id: '12ndl76', name: '12NDL76 12" Neodymium Woofer', category: 'lf-drivers', desc: ['800W Maximum Power', '76mm Voice Coil', '97dB Sensitivity'], image: 'https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png' },
    { id: '10nw64', name: '10NW64 10" Professional Neodymium Woofer', category: 'lf-drivers', desc: ['600W Maximum Power', '64mm Voice Coil', '96dB Sensitivity'], image: 'https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png' }
  ];

  const displayedProducts = categoryFilter 
    ? allProducts.filter(p => p.category === categoryFilter)
    : allProducts;

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-40 pb-24 px-8 text-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-baseline justify-between mb-20 border-b border-zinc-200 pb-8">
          <h1 className="text-[80px] font-black leading-none tracking-tighter uppercase m-0">
            {categoryFilter ? categoryFilter.replace(/-/g, ' ') : 'Our Collection'}
          </h1>
          <p className="font-mono text-zinc-400 text-sm tracking-widest uppercase italic">Verified Audio Assets // Performance Grade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProducts.map(product => (
            <a href={`/products/${product.id}`} key={product.id} className="group block bg-white border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 no-underline text-black">
              {/* 图片区域：100% 宽度，大图展示 */}
              <div className="aspect-square bg-white flex items-center justify-center p-10 overflow-hidden relative border-b border-zinc-50">
                <img src={product.image} alt={product.name} className="max-h-full w-full object-contain transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-black text-white text-[10px] font-black px-3 py-1 tracking-widest uppercase">{product.category.replace(/-/g, ' ')}</div>
              </div>
              
              {/* 文字描述区域 */}
              <div className="p-8">
                <h3 className="text-[22px] font-black uppercase mb-6 leading-tight tracking-tighter group-hover:text-blue-600 transition-colors h-14 overflow-hidden">{product.name}</h3>
                <div className="space-y-2 mb-8">
                  {product.desc.map(d => (
                    <div key={d} className="flex items-center gap-2 text-zinc-400 font-bold text-[11px] tracking-wide uppercase">
                      <span className="w-1 h-1 bg-blue-600 rounded-full" /> {d}
                    </div>
                  ))}
                </div>
                <div className="w-full py-4 border-2 border-black text-center text-[12px] font-black tracking-widest uppercase group-hover:bg-black group-hover:text-white transition-all">
                  Exploration Details →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center font-mono">LOADING ASSETS...</div>}><ProductsContent /></Suspense>;
}
