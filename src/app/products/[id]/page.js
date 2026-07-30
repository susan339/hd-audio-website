'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { id } = useParams();
  
  // 模拟从数据库获取 18TBX100 的详细数据
  const product = {
    name: '18TBX100 Subwoofer',
    fullName: '18TBX100 18-inch Professional High Output Subwoofer',
    specs: [
      { label: 'Nominal Diameter', value: '460 mm (18.0 in)' },
      { label: 'Nominal Impedance', value: '8 Ω' },
      { label: 'Continuous Power Handling', value: '2400 W' },
      { label: 'Nominal Power Handling (AES)', value: '1200 W' },
      { label: 'Sensitivity (1W/1m)', value: '98.0 dB' },
      { label: 'Frequency Range', value: '35 - 1000 Hz' },
      { label: 'Voice Coil Diameter', value: '100 mm (4.0 in)' },
      { label: 'Winding Material', value: 'Copper' },
      { label: 'Magnet Material', value: 'Ferrite Ring' }
    ],
    mainImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    moreImages: [
      'https://sc02.alicdn.com/kf/H63004381283c44ba2993303e750d39395Y.png',
      'https://sc02.alicdn.com/kf/Afb38a5120bb7401e96354faccb6bd0c3J.png'
    ]
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* 图片画廊 */}
        <div className="space-y-6">
          <div className="bg-[#F8FAFC] border border-gray-100 p-12 aspect-square flex items-center justify-center rounded-2xl shadow-sm">
            <img src={product.mainImage} className="max-h-full object-contain" alt={product.name} />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.moreImages.map((img, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-4 aspect-square rounded-xl cursor-pointer hover:border-blue-500 transition-all">
                <img src={img} className="max-h-full object-contain mx-auto" alt="Detail" />
              </div>
            ))}
          </div>
        </div>

        {/* 详细参数表 */}
        <div className="text-left">
          <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.3em] uppercase mb-4">Acoustic Transducer</h1>
          <h2 className="text-[48px] font-black text-black leading-none mb-8 uppercase tracking-tighter">{product.name}</h2>
          
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
             <div className="bg-zinc-900 px-8 py-4 border-b border-zinc-800 text-white font-bold tracking-widest text-[11px] uppercase">Technical Specifications</div>
             <div className="divide-y divide-zinc-800">
               {product.specs.map(spec => (
                 <div key={spec.label} className="grid grid-cols-2 px-8 py-4 hover:bg-zinc-900 transition-all">
                    <span className="text-zinc-500 text-[12px] font-medium uppercase">{spec.label}</span>
                    <span className="text-white text-[12px] font-bold text-right">{spec.value}</span>
                 </div>
               ))}
             </div>
          </div>

          <div className="mt-12">
             <a href="https://wa.me/8615521083699" className="bg-[#2563EB] text-white px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all inline-block">Direct Inquiry</a>
          </div>
        </div>
      </div>
    </div>
  );
}
