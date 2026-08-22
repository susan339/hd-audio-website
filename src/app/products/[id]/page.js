/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// 资产数据库 - 保持您的 7 款核心产品数据
const db = {
  'dn-4599': {
    name: 'DN-4599 Dual Voice Coil Midrange 3.5-inch Neodymium Compression Driver',
    cat: 'Compression Driver',
    main: 'https://sc02.alicdn.com/kf/H2299c61e60234dcea91535dd708f5bc7y.jpg', 
    pdf: 'https://sc02.alicdn.com/kf/H02180dd7481c43079ede08669575302bl.jpg', 
    imgs: [
      'https://sc02.alicdn.com/kf/H2299c61e60234dcea91535dd708f5bc7y.jpg', 
      'https://sc02.alicdn.com/kf/H02180dd7481c43079ede08669575302bl.jpg', 
      'https://sc02.alicdn.com/kf/H4e0b4f66cc1c4f0d924301390a47dc95I.jpg',
      'https://sc02.alicdn.com/kf/H5f65cb018bcd482098ff4a5fb0f00bd2o.jpg',
      'https://sc02.alicdn.com/kf/H261a866617c445df87397938e3c9710bW.jpg',
      'https://sc02.alicdn.com/kf/H225247511ea040bfae8cffd654cb96ecr.jpg',
      'https://sc02.alicdn.com/kf/H1d3507aa4088474ea685aa8c964f29cbA.jpg'
    ],
    specs: [
      { l: 'Throat Diameter', v: '50/2 mm/inch' },
      { l: 'Nominal Power Handling', v: '400 W' },
      { l: 'Program Power', v: '800 W' },
      { l: 'Sensitivity (1w/1m)', v: '123 dB' },
      { l: 'Frequency Range', v: '300-8K Hz' },
      { l: 'Voice Coil Diameter', v: '3.5/90*2 PCS mm/inch' },
      { l: 'Magnet Grade', v: 'Neodymium' },
      { l: 'Net Weight', v: '3.2 KG' }
    ]
  },
  '18tbx100': { 
    name: '18TBX100 18" Professional Subwoofer Bass Speaker 2400W Peak', cat: 'Subwoofer', 
    main: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 
    pdf: 'https://sc02.alicdn.com/kf/H707137ef9abe417b89a9349cafee270be.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png','https://sc02.alicdn.com/kf/H54b476584419482eb70e8f6414f4531az.jpg','https://sc02.alicdn.com/kf/H2f7a29a75a5e40ce99dbe75293fedd09T.jpg','https://sc02.alicdn.com/kf/H7d7e738635214a1c9e01355c2b67515dE.jpg','https://sc02.alicdn.com/kf/H6bf1fceae54344279b9f59db82d84059A.jpg','https://sc02.alicdn.com/kf/H707137ef9abe417b89a9349cafee270be.jpg'],
    specs: [{ l: 'Power Handling', v: '2400W Peak' }, { l: 'Fs', v: '34 Hz' }, { l: 'Qts', v: '0.33' }, { l: 'Vas', v: '265 L' }]
  },
  '08n12': { 
    name: '08N12 Woofer Speaker Bass Professional Subwoofer 8 Inch Speaker', cat: 'LF DRIVER', 
    main: 'https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg', 
    pdf: 'https://sc02.alicdn.com/kf/Hff04c6e35b1e4fc293411c0f03264f9c4.jpg',
    imgs: ['https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg','https://sc02.alicdn.com/kf/Hff04c6e35b1e4fc293411c0f03264f9c4.jpg','https://sc02.alicdn.com/kf/He1c846b0a6104cc79226763caebf32ddN.jpg','https://sc02.alicdn.com/kf/Hb1b20a6737e347fea045d8415c5ba516h.jpg','https://sc02.alicdn.com/kf/H733cc14dce8e482394f12ce021c2c646b.jpg','https://sc02.alicdn.com/kf/H6f7b70e6202d41df8bb72561946caf63x.jpg','https://sc02.alicdn.com/kf/H5f5d46ff8c4645929015523994dfb16eH.jpg'],
    specs: [{ l: 'Nominal Power (AES)', v: '150 W' },{ l: 'Maximum Power', v: '300 W' },{ l: 'Sensitivity (1w/1m)', v: '92 dB' },{ l: 'Frequency Response', v: '84-3.2K Hz' }]
  },
  '10nw64': { 
    name: '10NW64 10" Professional Neodymium Woofer Speaker LF Driver', cat: 'LF Driver', 
    main: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png',
    pdf: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    imgs: ['https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png','https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg','https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
    specs: [{ l: 'Nominal Power (AES)', v: '300 W' },{ l: 'Maximum Power', v: '600 W' },{ l: 'Fs', v: '59 Hz' }]
  },
  '12ndl76': { 
    name: '12NDL76 800w Neodymium Line Array Woofer Speaker 12 Inch Subwoofer', cat: 'Neodymium Woofer', 
    main: 'https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png', 
    pdf: 'https://sc02.alicdn.com/kf/Hf6809e5843724984bd6e363b89295dad8.jpg',
    imgs: ['https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png','https://sc02.alicdn.com/kf/Hcf4020c94bcc461da00591825f85a5b8H.jpg','https://sc02.alicdn.com/kf/He4a878abf8e14ebd9442832d7bef77e23.jpg','https://sc02.alicdn.com/kf/Hf6809e5843724984bd6e363b89295dad8.jpg'],
    specs: [{ l: 'Nominal Power (AES)', v: '400 W' },{ l: 'Maximum Power', v: '800 W' },{ l: 'Fs', v: '52 Hz' }]
  },
  '15tbx100': { 
    name: '15TBX100 15" Professional LF Driver Bass Speaker 2000W Max', cat: 'LF Driver', 
    main: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 
    pdf: 'https://sc02.alicdn.com/kf/Hb383bf4277d54312bb4a66cfafb4d14eo.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png','https://sc02.alicdn.com/kf/H5b53a9fa6e4f48e48364a71e197a6dc0l.jpg','https://sc02.alicdn.com/kf/Hb383bf4277d54312bb4a66cfafb4d14eo.jpg'],
    specs: [{ l: 'Maximum Power', v: '2000 W' },{ l: 'Fs', v: '41 Hz' },{ l: 'Sensitivity', v: '97 dB' }]
  },
  '21nc152': { 
    name: '21NC152 21" High End Neodymium Subwoofer 4000W Max', cat: 'Subwoofer', 
    main: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
    pdf: 'https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg',
    imgs: ['https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg','https://sc02.alicdn.com/kf/H73bb88a5f4b643a0a4371c4b4e175d39d.jpg','https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg'], 
    specs: [{ l: 'Power Handling', v: '4000W Max' }, { l: 'Fs', v: '31 Hz' }, { l: 'Qts', v: '0.48' }] 
  }
};

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id; 
  const p = db[id];
  const [disp, setDisp] = useState('');

  useEffect(() => {
    if (p) setDisp(p.main);
  }, [p]);

  if (!p) return <div className="pt-40 text-center bg-white min-h-screen text-zinc-400 font-bold uppercase tracking-widest">Loading Technical Assets...</div>;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': p.name,
    'image': p.imgs,
    'description': `Leading professional audio driver from Guangzhou, China. ${p.cat} with specs: ${p.specs.map(s => `${s.l}:${s.v}`).join(', ')}`,
    'brand': { '@type': 'Brand', 'name': 'CORETONE AUDIO' },
    'offers': { '@type': 'Offer', 'url': `https://www.exactproaudiodrivers.com/products/${id}`, 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' }
  };

  return (
    <div className="bg-[#FBFBFC] min-h-screen pt-40 pb-24 px-6 text-black font-sans selection:bg-[#2563EB] selection:text-white">
      {/* AEO/SEO Metadata Simulation */}
      <title>{`${p.name} | CORETONE AUDIO Engineering`}</title>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* 左侧：视觉资产区 (5/12) */}
        <div className="lg:col-span-6">
          <div className="bg-white p-12 aspect-square flex items-center justify-center border border-zinc-100 rounded-3xl shadow-sm overflow-hidden group relative">
            <img src={disp} alt={p.name} className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-6 left-6 bg-black/5 backdrop-blur-md px-4 py-2 rounded-full border border-black/5">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/60">Industrial Grade Asset</span>
            </div>
          </div>
          
          {/* 缩略图切换矩阵 */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {p.imgs.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setDisp(img)} 
                className={`aspect-square bg-white border-2 p-2 transition-all rounded-xl overflow-hidden ${disp === img ? 'border-[#2563EB] shadow-lg scale-95' : 'border-zinc-100 opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* 右侧：规格与转化中心 (7/12) */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
             <Link href="/products" className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 hover:text-[#2563EB] transition-colors italic">← Catalog</Link>
             <div className="h-px w-12 bg-zinc-100"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2563EB]">Sound Reinforcement Excellence</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6 italic text-zinc-900">
            {p.name}
          </h1>

          <div className="flex flex-wrap gap-2 mb-12">
             <span className="bg-green-50 text-green-600 text-[10px] font-black px-4 py-1.5 rounded-full border border-green-100 uppercase tracking-widest shadow-sm shadow-green-500/5">Factory Direct Service</span>
             <span className="bg-blue-50 text-[#2563EB] text-[10px] font-black px-4 py-1.5 rounded-full border border-blue-100 uppercase tracking-widest shadow-sm shadow-blue-500/5">ISO 9001 Verified</span>
             <span className="bg-zinc-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-black/10 italic">China Audio Cluster</span>
          </div>

          {/* Luxopack 构架：结构化规格表 */}
          <div className="bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 mb-12">
            <div className="bg-zinc-50 border-b border-zinc-100 px-10 py-5 flex justify-between items-center">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 italic">Technical Telemetry</p>
              <div className="flex gap-1.5">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-[#2563EB] rounded-full opacity-30"></div>)}
              </div>
            </div>
            <div className="divide-y divide-zinc-50">
                {p.specs.map((s, i) => (
                <div key={i} className="flex justify-between px-10 py-5 hover:bg-blue-50/20 transition-colors group">
                    <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">{s.l}</span>
                    <span className="text-sm font-black uppercase tracking-tight text-zinc-900">{s.v}</span>
                </div>
                ))}
            </div>
          </div>

          {/* 转化动作区 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a 
                href={`https://wa.me/8615521083699?text=Interested in ${p.name}. Send specs & factory quote.`} 
                target="_blank" rel="noopener noreferrer" 
                className="bg-[#2563EB] text-white py-7 text-center font-black uppercase tracking-[0.2em] text-[12px] hover:bg-zinc-900 transition-all rounded-2xl shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3 active:scale-95"
            >
              Inquiry for Quote
            </a>
            <a 
                href={p.pdf} 
                target="_blank" rel="noopener noreferrer" 
                className="border-2 border-zinc-900 text-zinc-900 py-7 text-center font-black uppercase tracking-[0.2em] text-[12px] hover:bg-zinc-900 hover:text-white transition-all rounded-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              Download PDF Specs
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-zinc-100">
             <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.4em] text-center italic">
                Engineered for High-Pressure Environments. Made in Panyu, Guangzhou.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
