'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const productData = {
  '21nc152': {
    name: '21NC152 21" High End Subwoofer',
    seoTitle: '21NC152 21-inch 4000W Subwoofer | CoreTone Audio',
    mainImage: 'https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H59244c55478f482097993793a0e721c3f.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png', 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg'],
    specs: [{ label: 'Power Handling', value: '4000 W' }, { label: 'Fs', value: '32 Hz' }, { label: 'Qts', value: '0.30' }, { label: 'Vas', value: '168 L' }, { label: 'BL', value: '32.5 Tm' }, { label: 'Mms', value: '460 g' }]
  },
  '18tbx100': {
    name: '18TBX100 18" Professional Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'],
    specs: [{ label: 'Power Handling', value: '2400 W' }, { label: 'Fs', value: '30 Hz' }, { label: 'Qts', value: '0.31' }, { label: 'Vas', value: '256 L' }, { label: 'BL', value: '25.5 Tm' }]
  },
  '10nw64': {
    name: '10NW64 10" Neodymium Woofer',
    mainImage: 'https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    moreImages: ['https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'],
    specs: [{ label: 'Max Power', value: '600 W' }, { label: 'Fs', value: '59 Hz' }, { label: 'Qts', value: '0.25' }, { label: 'Vas', value: '26 L' }, { label: 'Mms', value: '47 g' }]
  },
  '15tbx100': {
    name: '15TBX100 15" Professional LF Driver',
    mainImage: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg'],
    specs: [{ label: 'Power Handling', value: '2000 W' }, { label: 'Fs', value: '35 Hz' }, { label: 'Sens', value: '96 dB' }, { label: 'Vas', value: '113 L' }]
  },
  '12ndl76': {
    name: '12NDL76 12" Neodymium Woofer',
    mainImage: 'https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'],
    specs: [{ label: 'Peak Power', value: '800 W' }, { label: 'Fs', value: '50 Hz' }, { label: 'Qts', value: '0.20' }, { label: 'Voice Coil', value: '76mm' }]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [displayImage, setDisplayImage] = useState(product?.mainImage || '');

  if (!product) return <div className="pt-48 text-center text-black font-black uppercase tracking-widest bg-white min-h-screen">Asset Node Offline.</div>;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 text-black selection:bg-blue-600 selection:text-white text-left">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 p-8 aspect-square flex items-center justify-center rounded-[40px] shadow-2xl overflow-hidden group">
            <img src={displayImage} alt={product.name} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisplayImage(img)} className={`border-2 p-2 aspect-square rounded-xl cursor-pointer transition-all ${displayImage === img ? 'border-blue-600' : 'border-gray-100'}`}>
                <img src={img} alt="" className="max-h-full object-contain mx-auto" />
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
             <a href="https://wa.me/8615521083699" target="_blank" className="bg-[#2563EB] text-white px-16 py-6 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all shadow-lg text-center min-w-[200px] no-underline">Inquiry Now</a>
             <a href={product.datasheetImage} target="_blank" rel="noreferrer" className="border-2 border-black text-black px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center min-w-[200px] no-underline">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
