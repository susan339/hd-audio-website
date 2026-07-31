"use client";
import React, { use } from 'react';
import Link from 'next/link';

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const id = params.id;

  const db = {
    '21nc152': { 
      name: '21NC152 21" High End Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png', 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'], 
      specs: { 'Fs': '32 Hz', 'Re': '3.3 Ohm', 'Qts': '0.30', 'Vas': '168 L', 'BL': '32.5 T.m', 'Mms': '460 g', 'Power': '4000W Peak', 'Sens': '97dB', 'Coil': '153mm (6")' } 
    },
    '18tbx100': { 
      name: '18TBX100 18" Professional Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'], 
      specs: { 'Fs': '30 Hz', 'Re': '5.1 Ohm', 'Qts': '0.31', 'Vas': '256 L', 'BL': '25.5 T.m', 'Mms': '209 g', 'Power': '2400W Peak', 'Sens': '98dB', 'Coil': '100mm (4")' } 
    },
    '15tbx100': { 
      name: '15TBX100 15" Professional LF Driver', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'], 
      specs: { 'Fs': '35 Hz', 'Re': '5.1 Ohm', 'Qts': '0.28', 'Vas': '113 L', 'BL': '22.1 T.m', 'Mms': '163 g', 'Power': '2000W Peak', 'Sens': '96dB', 'Coil': '100mm (4")' } 
    },
    '10nw64': { 
      name: '10NW64 10" Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
      specs: { 'Fs': '59 Hz', 'Re': '5.2 Ohm', 'Qts': '0.25', 'Vas': '26 L', 'BL': '18.3 T.m', 'Mms': '47 g', 'Power': '600W Max', 'Sens': '96dB', 'Coil': '64mm (2.5")' },
      datasheet: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'
    },
    '12ndl76': { 
      name: '12NDL76 12" Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'], 
      specs: { 'Fs': '50 Hz', 'Re': '5.3 Ohm', 'Qts': '0.20', 'Vas': '73 L', 'Power': '800W Max', 'Sens': '97dB', 'Coil': '76mm (3")' } 
    }
  };

  const p = db[id];
  if (!p) return <div className="pt-48 text-center bg-[#0A0A0A] min-h-screen text-white uppercase font-mono tracking-widest text-xs">Asset Node: NOT FOUND</div>;

  return (
    <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6 bg-[#0A0A0A] text-white min-h-screen">
      <Link href="/products" className="text-[#A3A3A3] hover:text-[#E11D48] text-[10px] uppercase mb-12 inline-block font-mono tracking-[0.3em] transition-colors">← Back to Catalog</Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="bg-white border border-[#262626] p-12 aspect-square flex items-center justify-center overflow-hidden group">
            <img src={p.imgs[0]} alt={p.name} className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {p.imgs.map((img, i) => (
              <div key={i} className="bg-[#141414] border border-[#262626] p-4 aspect-square flex items-center justify-center overflow-hidden hover:border-[#E11D48] transition-colors cursor-pointer group">
                <img src={img} alt="" className="max-h-full w-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <span className="px-3 py-1 bg-[#E11D48]/10 text-[#E11D48] text-[9px] font-mono uppercase tracking-widest border border-[#E11D48]/20">{p.cat}</span>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mt-6 mb-4 leading-none">{p.name}</h1>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-[#262626] pt-8">
            {Object.entries(p.specs).map(([key, val]) => (
              <div key={key} className="border-b border-[#262626] pb-4 bg-[#141414]/30 p-6 group hover:bg-[#141414] transition-colors">
                <p className="text-[9px] text-[#A3A3A3] uppercase mb-1 font-mono">{key}</p>
                <p className="text-xl font-bold text-white tracking-tight group-hover:text-[#E11D48] transition-colors">{val}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="https://wa.me/8615521083699" target="_blank" className="flex-1 bg-[#E11D48] text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-[#BE123C] transition-all">Inquiry Now</a>
            {p.datasheet && (
              <a href={p.datasheet} target="_blank" className="flex-1 border border-white text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Download Specs (PDF)</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
