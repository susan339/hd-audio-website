"use client";
import React, { use } from 'react';
import Link from 'next/link';

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const id = params.id;

  const db = {
    '18tbx100': { 
      name: '18TBX100 18" Professional Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg'], 
      specs: { 'Power Handling': '1200W Peak', 'Sensitivity': '98dB', 'Voice Coil': '100mm (4")' } 
    },
    '21nc152': { 
      name: '21NC152 21" High End Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/Hfaad25085cb04ef18632a91b573c816eD.jpg', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'], 
      specs: { 'Power Handling': '4000W Peak', 'Sensitivity': '97dB', 'Voice Coil': '153mm (6")' } 
    },
    '10nw64': { 
      name: '10NW64 10" Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
      specs: { 'Power': '600W Max', 'Sens': '96dB', 'Coil': '64mm (2.5")', 'Magnet': 'Neodymium' },
      datasheet: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'
    },
    '15tbx100': { 
      name: '15TBX100 15" Professional LF Driver', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/H742e3f23a59846b0a1d4883609a7a6.png'], 
      specs: { 'Power Handling': '2000W Peak', 'Sensitivity': '96dB', 'Voice Coil': '100mm (4")' } 
    },
    '12ndl76': { 
      name: '12NDL76 12" Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg'], 
      specs: { 'Power Handling': '800W Max', 'Sensitivity': '97dB', 'Voice Coil': '76mm (3")' } 
    }
  };

  const p = db[id];
  if (!p) return <div className="pt-48 text-center bg-[#0A0A0A] min-h-screen text-white uppercase font-mono">Asset Not Found</div>;

  return (
    <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6 bg-[#0A0A0A] text-white min-h-screen">
      <Link href="/products" className="text-[#A3A3A3] hover:text-white text-[10px] uppercase mb-12 inline-block font-mono tracking-widest">← Back to Catalog</Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* 图片画廊：恢复多图展示 */}
        <div className="space-y-6">
          <div className="bg-white border border-[#262626] p-12 aspect-square flex items-center justify-center overflow-hidden">
            <img src={p.imgs[0]} alt={p.name} className="max-h-full w-auto object-contain transition-all duration-700" />
          </div>
          {p.imgs.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {p.imgs.slice(1).map((img, i) => (
                <div key={i} className="bg-[#141414] border border-[#262626] p-4 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={img} alt="" className="max-h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 内容区：恢复参数表和下载 */}
        <div className="space-y-12">
          <div>
            <span className="px-3 py-1 bg-[#E11D48]/10 text-[#E11D48] text-[9px] font-mono uppercase tracking-widest border border-[#E11D48]/20">{p.cat}</span>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mt-6 mb-4 leading-none">{p.name}</h1>
            <p className="text-[#A3A3A3] text-[11px] font-mono uppercase tracking-widest italic border-l-2 border-[#E11D48] pl-4">Verified Professional Audio Component</p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-[#262626] pt-8">
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k} className="border-b border-[#262626] pb-4 bg-[#141414]/30 p-4">
                <p className="text-[9px] text-[#A3A3A3] uppercase mb-1 font-mono tracking-tighter">{k}</p>
                <p className="text-xl font-bold text-white tracking-tight">{v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="https://wa.me/8615521083699" target="_blank" className="flex-1 bg-[#E11D48] text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-[#BE123C] transition-all shadow-lg">Inquiry Now</a>
            {p.datasheet && (
              <a href={p.datasheet} target="_blank" className="flex-1 border border-white text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Download Specs (PDF)</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
