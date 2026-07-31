'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const productData = {
  '12ndl76': {
    name: '12NDL76 Neodymium Woofer',
    seoTitle: '12NDL76 12" 800W Neodymium Line Array Woofer | CoreTone Audio',
    seoDesc: 'High-power 12-inch neodymium line array speaker with 800W max power, 3-inch voice coil, and 97dB sensitivity.',
    mainImage: 'https://sc02.alicdn.com/kf/A9247ebeb795446b48c55380318d761d7b.png', // 红色设计主图
    datasheetImage: 'https://sc02.alicdn.com/kf/Afbccbd34544441258375dd4aa7dfed51m.png', // 品牌化规格书
    moreImages: [
      'https://sc02.alicdn.com/kf/A9247ebeb795446b48c55380318d761d7b.png',
      'https://sc02.alicdn.com/kf/H0731d5bc6b3945779201e22c0e4ab710o.jpg',
      'https://sc02.alicdn.com/kf/H1a7f29c7af4d439bba0c85b9b94e93a5Z.jpg',
      'https://sc02.alicdn.com/kf/Ha5c57ae0034341ce81e50cc5e5a98645b.jpg',
      'https://sc02.alicdn.com/kf/H62b4adc3e762425f8b7c48465202499bS.jpg'
    ],
    specs: [
      { label: 'Continuous Power', value: '800 W' },
      { label: 'Nominal Power (AES)', value: '400 W' },
      { label: 'Nominal Impedance', value: '8 Ω' },
      { label: 'Sensitivity (1W/1m)', value: '97.0 dB' },
      { label: 'Voice Coil Diameter', value: '76 mm (3.0 in)' },
      { label: 'Fs (Resonant Frequency)', value: '52 Hz' },
      { label: 'Qts (Total Q Factor)', value: '0.34' },
      { label: 'Vas (Equivalent Volume)', value: '72.0 L' },
      { label: 'Net Weight', value: '4.0 KG' }
    ]
  },
  '15tbx100': { /* 保持 15TBX100 数据 */ },
  '18tbx100': { /* 保持 18TBX100 数据 */ },
  '21nc152': { /* 保持 21NC152 数据 */ }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [displayImage, setDisplayImage] = useState(product?.mainImage || '');

  if (!product) return <div className="pt-48 text-center text-black font-black uppercase tracking-widest">Asset Node Offline.</div>;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 text-black selection:bg-blue-600 selection:text-white text-left">
      <head><title>{product.seoTitle}</title><meta name="description" content={product.seoDesc} /></head>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 p-8 aspect-square flex items-center justify-center rounded-[40px] shadow-2xl overflow-hidden group">
            <img src={displayImage} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisplayImage(img)} className={`border-2 p-2 aspect-square rounded-xl cursor-pointer transition-all ${displayImage === img ? 'border-blue-600' : 'border-gray-100'}`}>
                <img src={img} className="max-h-full object-contain mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.5em] uppercase mb-6">CoreTone Technical Asset</h1>
          <h2 className="text-[52px] font-black leading-none mb-10 uppercase tracking-tighter">{product.name}</h2>
          <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl mb-12 border border-zinc-800">
             <div className="bg-zinc-900 px-10 py-5 border-b border-zinc-800 flex justify-between items-center font-bold tracking-widest text-xs uppercase text-white">Technical Telemetry</div>
             <div className="divide-y divide-zinc-800">
               {product.specs.map(spec => (
                 <div key={spec.label} className="grid grid-cols-2 px-10 py-5 hover:bg-zinc-900 transition-colors">
                    <span className="text-zinc-500 text-[13px] font-bold uppercase">{spec.label}</span>
                    <span className="text-white text-[13px] font-black text-right uppercase">{spec.value}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="flex gap-6">
             <a href="/contact" className="bg-[#2563EB] text-white px-16 py-6 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all shadow-lg text-center min-w-[240px]">Inquiry Now</a>
             <a href={product.datasheetImage} target="_blank" rel="noreferrer" className="border-2 border-black text-black px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center min-w-[240px]">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
