'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const productData = {
  '15tbx100': {
    name: '15TBX100 LF Driver',
    seoTitle: '15TBX100 15" High Power Driver | 2000W Professional Woofer',
    mainImage: 'https://sc02.alicdn.com/kf/H19cf0f9679ea4b31be0b9d7a83aefc84C.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/Aa3856bb609b04d98b1bce706f744fb06D.png',
    moreImages: [
      'https://sc02.alicdn.com/kf/H19cf0f9679ea4b31be0b9d7a83aefc84C.jpg',
      'https://sc02.alicdn.com/kf/H4405f6fa52e3428e9891792b2ab20b507.jpg',
      'https://sc02.alicdn.com/kf/H577a557e275348f086a7419fe0b67afbP.jpg',
      'https://sc02.alicdn.com/kf/H8786eab86be041218b63e4797db6138e2.jpg',
      'https://sc02.alicdn.com/kf/H098fe37f0d36417e981b35af6821d701T.jpg',
      'https://sc02.alicdn.com/kf/H20971cc31ed14557967a821dec24c2636.jpg'
    ],
    specs: [
      { label: 'Nominal Power (AES)', value: '1000 W' },
      { label: 'Maximum Power', value: '2000 W' },
      { label: 'Sensitivity (1W/1m)', value: '97.0 dB' },
      { label: 'Voice Coil Diameter', value: '100 mm (4.0 in)' },
      { label: 'Fs (Resonant Frequency)', value: '41 Hz' }
    ]
  },
  '18tbx100': {
    name: '18TBX100 Subwoofer',
    seoTitle: '18TBX100 18" Professional Subwoofer | 2400W Peak High Output',
    mainImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/Ade66ae6849ad4e5c9e84235340209ce6X.png',
    moreImages: [
      'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
      'https://sc02.alicdn.com/kf/Hb70670f50c4247558911d851d4005bcfT.jpg',
      'https://sc02.alicdn.com/kf/Hdb9abaa829074bb8915ecd506716ffd57.jpg',
      'https://sc02.alicdn.com/kf/Hca61ef226c954f3f946dea13ef682c61E.jpg',
      'https://sc02.alicdn.com/kf/H3966798aa5314a258a1dbe1a8767cc52t.jpg'
    ],
    specs: [
      { label: 'Nominal Impedance', value: '8 Ω' },
      { label: 'Continuous Power', value: '2400 W' },
      { label: 'Sensitivity (1W/1m)', value: '98.0 dB' },
      { label: 'Voice Coil Diameter', value: '100 mm (4.0 in)' },
      { label: 'Magnet Material', value: 'Professional Ferrite' }
    ]
  },
  '21nc152': {
    name: '21NC152 Subwoofer',
    seoTitle: '21NC152 21" Neodymium Subwoofer | 4000W Max Extreme Power',
    mainImage: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/A751a3e51169048bd9ba1c863719826ebY.png',
    moreImages: [
      'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
      'https://sc02.alicdn.com/kf/H73bb88a5f4b643a0a4371c4b4e175d39d.jpg',
      'https://sc02.alicdn.com/kf/H57a1b11ab09f4e2daba0bd1e4bf92ad3m.jpg',
      'https://sc02.alicdn.com/kf/H505bbb5873744b24acac0f276fdde84ar.jpg',
      'https://sc02.alicdn.com/kf/H6ed3366fa2304b35b21b9ecd6463f3a0R.jpg'
    ],
    specs: [
      { label: 'Maximum Power', value: '4000 W' },
      { label: 'Voice Coil Diameter', value: '152 mm (6.0 in)' },
      { label: 'Magnet Material', value: 'Neodymium' },
      { label: 'Sensitivity (1W/1m)', value: '97.0 dB' },
      { label: 'Net Weight', value: '22.2 KG' }
    ]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [displayImage, setDisplayImage] = useState(product?.mainImage || '');

  if (!product) return <div className="pt-48 text-center text-black">Asset Offline.</div>;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 text-black selection:bg-blue-600 selection:text-white text-left">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 p-8 aspect-square flex items-center justify-center rounded-[40px] shadow-2xl overflow-hidden group">
            <img src={displayImage} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="grid grid-cols-6 gap-3">
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisplayImage(img)} className={`border-2 p-1.5 aspect-square rounded-xl cursor-pointer transition-all ${displayImage === img ? 'border-blue-600 ring-2 ring-blue-50' : 'border-gray-100 hover:border-gray-300'}`}>
                <img src={img} className="max-h-full object-contain mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.5em] uppercase mb-6">CoreTone Precision Asset</h1>
          <h2 className="text-[52px] font-black leading-none mb-10 uppercase tracking-tighter">{product.name}</h2>
          <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl border border-zinc-800">
             <div className="bg-zinc-900 px-10 py-5 border-b border-zinc-800 flex justify-between items-center font-bold tracking-widest text-xs uppercase text-white">Technical Readout</div>
             <div className="divide-y divide-zinc-800">
               {product.specs.map(spec => (
                 <div key={spec.label} className="grid grid-cols-2 px-10 py-5 hover:bg-zinc-900 transition-colors">
                    <span className="text-zinc-500 text-[13px] font-bold uppercase">{spec.label}</span>
                    <span className="text-white text-[13px] font-black text-right uppercase">{spec.value}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="flex gap-6 mt-12">
             <a href="/contact" className="bg-[#2563EB] text-white px-16 py-6 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all shadow-lg text-center min-w-[240px]">Inquiry Now</a>
             <a href={product.datasheetImage} target="_blank" rel="noreferrer" className="border-2 border-black text-black px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center min-w-[240px]">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
