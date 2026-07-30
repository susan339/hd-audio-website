'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const productData = {
  '21nc152': {
    name: '21NC152 Subwoofer',
    fullName: '21NC152 21-inch Neodymium High Output Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
    // 您的品牌化定制规格书
    datasheetImage: 'https://sc02.alicdn.com/kf/A751a3e51169048bd9ba1c863719826ebY.png',
    moreImages: [
      'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
      'https://sc02.alicdn.com/kf/H73bb88a5f4b643a0a4371c4b4e175d39d.jpg',
      'https://sc02.alicdn.com/kf/H57a1b11ab09f4e2daba0bd1e4bf92ad3m.jpg',
      'https://sc02.alicdn.com/kf/H505bbb5873744b24acac0f276fdde84ar.jpg',
      'https://sc02.alicdn.com/kf/H6ed3366fa2304b35b21b9ecd6463f3a0R.jpg'
    ],
    specs: [
      { label: 'Nominal Power Handling (AES)', value: '2000 W' },
      { label: 'Maximum Power', value: '4000 W' },
      { label: 'Sensitivity (1W/1m)', value: '97.0 dB' },
      { label: 'Voice Coil Diameter', value: '152 mm (6.0 in)' },
      { label: 'Fs (Resonant Frequency)', value: '31 Hz' },
      { label: 'BL Product', value: '37 T·m' },
      { label: 'Vas (Equivalent Air Volume)', value: '252.8 L' },
      { label: 'Net Weight', value: '22.2 KG' }
    ]
  },
  '18tbx100': {
    name: '18TBX100 Subwoofer',
    fullName: '18TBX100 18-inch Professional Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/Ade66ae6849ad4e5c9e84235340209ce6X.png',
    moreImages: [
      'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
      'https://sc02.alicdn.com/kf/Hb70670f50c4247558911d851d4005bcfT.jpg',
      'https://sc02.alicdn.com/kf/Hdb9abaa829074bb8915ecd506716ffd57.jpg',
      'https://sc02.alicdn.com/kf/Hca61ef226c954f3f946dea13ef682c61E.jpg'
    ],
    specs: [
      { label: 'Nominal Impedance', value: '8 Ω' },
      { label: 'Power Handling (AES)', value: '1200 W' },
      { label: 'Sensitivity (1W/1m)', value: '98.0 dB' },
      { label: 'Frequency Range', value: '35 - 1000 Hz' }
    ]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [displayImage, setDisplayImage] = useState(product?.mainImage || '');

  if (!product) return <div className="pt-48 text-center">Product Not Found.</div>;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 p-8 aspect-square flex items-center justify-center rounded-3xl shadow-xl overflow-hidden group">
            <img src={displayImage} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisplayImage(img)} className={`border-2 p-2 aspect-square rounded-xl cursor-pointer transition-all ${displayImage === img ? 'border-blue-600' : 'border-gray-100 hover:border-gray-300'}`}>
                <img src={img} className="max-h-full object-contain mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-left">
          <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4">Precision Engineering</h1>
          <h2 className="text-[56px] font-black text-black leading-none mb-10 uppercase tracking-tighter">{product.name}</h2>
          <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl mb-12 border border-zinc-800">
             <div className="bg-zinc-900 px-10 py-5 border-b border-zinc-800 flex justify-between items-center"><span className="text-white font-bold tracking-widest text-[12px] uppercase">Technical Telemetry</span></div>
             <div className="divide-y divide-zinc-800">
               {product.specs.map(spec => (
                 <div key={spec.label} className="grid grid-cols-2 px-10 py-5 hover:bg-zinc-900 transition-colors">
                    <span className="text-zinc-500 text-[13px] font-bold uppercase">{spec.label}</span>
                    <span className="text-white text-[13px] font-black text-right">{spec.value}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="flex gap-6 mt-12">
             <a href="/contact" className="bg-[#2563EB] text-white px-16 py-6 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all shadow-lg text-center min-w-[200px]">Inquiry Now</a>
             <a href={product.datasheetImage} target="_blank" rel="noreferrer" className="border-2 border-black text-black px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center min-w-[200px]">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
