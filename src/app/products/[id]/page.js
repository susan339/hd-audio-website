'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const productData = {
  '21nc152': {
    name: '21NC152 21" High End Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/Ae6126836c5404d778810df5af8276f7dD.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H59244c55478f482097993793a0e721c3f.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/Ae6126836c5404d778810df5af8276f7dD.png', 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/H59244c55478f482097993793a0e721c3f.jpg'],
    specs: [
      { label: 'Continuous Power', value: '4000 W' }, { label: 'AES Power', value: '2000 W' },
      { label: 'Fs (Resonant Frequency)', value: '32 Hz' }, { label: 'Re (DC Resistance)', value: '3.3 Ω' },
      { label: 'Qts (Total Q Factor)', value: '0.30' }, { label: 'Vas (Equivalent Vol)', value: '168 L' },
      { label: 'BL (Force Factor)', value: '32.5 Tm' }, { label: 'Mms (Effective Mass)', value: '460 g' },
      { label: 'Xmax (Linear Excursion)', value: '±16 mm' }
    ]
  },
  '18tbx100': {
    name: '18TBX100 18" Professional Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'],
    specs: [
      { label: 'Continuous Power', value: '2400 W' }, { label: 'AES Power', value: '1200 W' },
      { label: 'Fs', value: '30 Hz' }, { label: 'Re', value: '5.1 Ω' },
      { label: 'Qts', value: '0.31' }, { label: 'Vas', value: '256 L' },
      { label: 'BL', value: '25.5 Tm' }, { label: 'Mms', value: '209 g' },
      { label: 'Xmax', value: '±9 mm' }
    ]
  },
  '15tbx100': {
    name: '15TBX100 15" Professional LF Driver',
    mainImage: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg'],
    specs: [
      { label: 'Continuous Power', value: '2000 W' }, { label: 'AES Power', value: '1000 W' },
      { label: 'Fs', value: '35 Hz' }, { label: 'Re', value: '5.1 Ω' },
      { label: 'Qts', value: '0.28' }, { label: 'Vas', value: '113 L' },
      { label: 'BL', value: '22.1 Tm' }, { label: 'Mms', value: '163 g' },
      { label: 'Xmax', value: '±9 mm' }
    ]
  },
  '12ndl76': {
    name: '12NDL76 12" Professional Neodymium Woofer',
    mainImage: 'https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H4fbc8dc63be0433283e35d79ff19ece6Q.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png', 'https://sc02.alicdn.com/kf/H4fbc8dc63be0433283e35d79ff19ece6Q.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'],
    specs: [
      { label: 'Peak Power', value: '800 W' }, { label: 'AES Power', value: '400 W' },
      { label: 'Fs', value: '50 Hz' }, { label: 'Re', value: '5.3 Ω' },
      { label: 'Qts', value: '0.20' }, { label: 'Vas', value: '73 L' },
      { label: 'BL', value: '17.7 Tm' }, { label: 'Mms', value: '53 g' },
      { label: 'Voice Coil', value: '76 mm' }
    ]
  },
  '10nw64': {
    name: '10NW64 10" Professional Neodymium Woofer',
    mainImage: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    moreImages: ['https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg'],
    specs: [
      { label: 'Max Power', value: '600 W' }, { label: 'AES Power', value: '300 W' },
      { label: 'Fs', value: '59 Hz' }, { label: 'Re', value: '5.2 Ω' },
      { label: 'Qts', value: '0.25' }, { label: 'Vas', value: '26 L' },
      { label: 'BL', value: '18.3 Tm' }, { label: 'Mms', value: '47 g' },
      { label: 'Coil', value: '64 mm' }
    ]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [displayImage, setDisplayImage] = useState(product?.mainImage || '');

  if (!product) return <div className="pt-48 text-center text-zinc-400 font-mono tracking-widest bg-white min-h-screen uppercase text-xs">Asset Syncing...</div>;

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-40 pb-24 px-8 text-black">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="bg-white border border-zinc-100 p-12 aspect-square flex items-center justify-center rounded-sm shadow-sm overflow-hidden group">
            <img src={displayImage} alt={product.name} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="grid grid-cols-6 gap-3">
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisplayImage(img)} className={`border-2 p-1 aspect-square rounded-sm cursor-pointer transition-all bg-white flex items-center justify-center ${displayImage === img ? 'border-blue-600' : 'border-zinc-100'}`}>
                <img src={img} alt="" className="max-h-full object-contain mx-auto" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <Link href="/products" className="text-zinc-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-12 no-underline">← Back to Assets</Link>
          <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.5em] uppercase mb-6 italic">Engineering Grade Verified Asset</h1>
          <h2 className="text-[64px] font-black leading-none mb-12 uppercase tracking-tighter">{product.name}</h2>
          
          <div className="bg-white rounded-sm border border-zinc-200 overflow-hidden shadow-sm mb-12">
             <div className="bg-zinc-50 px-10 py-5 border-b border-zinc-200 font-bold tracking-widest text-[11px] uppercase text-zinc-400">Technical Telemetry // System Values</div>
             <div className="divide-y divide-zinc-100">
               {product.specs.map(spec => (
                 <div key={spec.label} className="grid grid-cols-2 px-10 py-5 hover:bg-zinc-50 transition-colors">
                    <span className="text-zinc-400 text-[13px] font-bold uppercase">{spec.label}</span>
                    <span className="text-black text-[14px] font-black text-right uppercase">{spec.value}</span>
                 </div>
               ))}
             </div>
          </div>

          <div className="flex gap-6 mt-auto">
             <a href="https://wa.me/8615521083699" target="_blank" className="flex-1 bg-blue-600 text-white py-6 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all shadow-lg text-center no-underline">Inquiry Now</a>
             <a href={product.datasheetImage} target="_blank" rel="noreferrer" className="flex-1 border-2 border-black text-black py-6 font-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center no-underline">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
