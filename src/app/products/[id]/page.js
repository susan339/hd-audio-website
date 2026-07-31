/* eslint-disable */
import React from 'react';
import Link from 'next/link';

export default function ProductDetailPage({ params }) {
  const id = params.id;

  const db = {
    '21nc152': { 
      name: '21NC152 21 inch High End Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png', 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg'], 
      specs: { 'Continuous Power': '4000W', 'Fs': '32 Hz', 'Re': '3.3 Ohm', 'Qts': '0.30', 'Vas': '168 L', 'Sd': '1680 cm2', 'Mms': '460 g', 'BL': '32.5 Tm', 'Sens': '97dB', 'Coil': '153mm (6 inch)', 'Xmax': '16mm' },
      datasheet: 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg'
    },
    '18tbx100': { 
      name: '18TBX100 18 inch Professional Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'], 
      specs: { 'Continuous Power': '2400W', 'Fs': '30 Hz', 'Re': '5.1 Ohm', 'Qts': '0.31', 'Vas': '256 L', 'Sd': '1210 cm2', 'Mms': '209 g', 'BL': '25.5 Tm', 'Sens': '98dB', 'Coil': '100mm (4 inch)', 'Xmax': '9mm' },
      datasheet: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg'
    },
    '15tbx100': { 
      name: '15TBX100 15 inch Professional LF Driver', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg'], 
      specs: { 'Continuous Power': '2000W', 'Fs': '35 Hz', 'Re': '5.1 Ohm', 'Qts': '0.28', 'Vas': '113 L', 'Sd': '855 cm2', 'Mms': '163 g', 'BL': '22.1 Tm', 'Sens': '96dB', 'Coil': '100mm (4 inch)', 'Xmax': '9mm' },
      datasheet: 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'
    },
    '10nw64': { 
      name: '10NW64 10 inch Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
      specs: { 'Continuous Power': '600W', 'Fs': '59 Hz', 'Re': '5.2 Ohm', 'Qts': '0.25', 'Vas': '26 L', 'Sd': '320 cm2', 'Mms': '47 g', 'BL': '18.3 Tm', 'Sens': '96dB', 'Coil': '64mm (2.5 inch)', 'Magnet': 'Neodymium' },
      datasheet: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'
    },
    '12ndl76': { 
      name: '12NDL76 12 inch Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg'], 
      specs: { 'Continuous Power': '800W', 'Fs': '50 Hz', 'Re': '5.3 Ohm', 'Qts': '0.20', 'Vas': '73 L', 'Sd': '522 cm2', 'Mms': '53 g', 'Sens': '100dB', 'Coil': '76mm (3 inch)', 'Magnet': 'Neodymium' },
      datasheet: 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg'
    }
  };

  const p = id ? db[id] : null;
  if (!p) return <div style={{ textAlign: 'center', paddingTop: '100px', color: 'white' }}>Scanning Asset Node...</div>;

  return (
    <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6 bg-black text-white min-h-screen">
      <Link href="/products" className="text-zinc-400 hover:text-white text-[10px] uppercase mb-12 inline-block font-mono tracking-widest">&larr; Back to Collection</Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="bg-white border border-zinc-800 p-12 aspect-square flex items-center justify-center overflow-hidden rounded-sm"><img src={p.imgs[0]} alt={p.name} className="max-h-full w-auto object-contain" /></div>
          <div className="grid grid-cols-5 gap-2">
            {p.imgs.map((img, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-2 aspect-square flex items-center justify-center overflow-hidden hover:border-red-600 transition-all cursor-pointer"><img src={img} alt="" className="max-h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" /></div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <span className="px-3 py-1 bg-red-600/10 text-red-600 text-[9px] font-mono uppercase tracking-widest border border-red-600/20">{p.cat}</span>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mt-6 mb-4 leading-none">{p.name}</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-8">
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k} className="border-b border-zinc-800 pb-4 bg-zinc-900/30 p-4"><p className="text-[9px] text-zinc-400 uppercase mb-1 font-mono">{k}</p><p className="text-xl font-bold text-white">{v}</p></div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="https://wa.me/8615521083699" target="_blank" className="flex-1 bg-red-600 text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg">Inquiry Now</a>
            <a href={p.datasheet} target="_blank" className="flex-1 border border-white text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Download Specs (PDF)</a>
          </div>
        </div>
      </div>
    </div>
  );
}
