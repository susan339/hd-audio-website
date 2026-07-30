'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const productData = {
  '15tbx100': {
    name: '15TBX100 LF Driver',
    seoTitle: '15TBX100 15" High Power LF Driver | 2000W Professional Woofer',
    seoDesc: 'Professional 15-inch LF driver 15TBX100 featuring a 4-inch voice coil and 2000W peak power. Ideal for bass enclosures.',
    mainImage: 'https://sc02.alicdn.com/kf/H19cf0f9679ea4b31be0b9d7a83aefc84C.jpg', // 红标主图
    datasheetImage: 'https://sc02.alicdn.com/kf/Aa3856bb609b04d98b1bce706f744fb06D.png', // 品牌规格书
    moreImages: [
      'https://sc02.alicdn.com/kf/H19cf0f9679ea4b31be0b9d7a83aefc84C.jpg',
      'https://sc02.alicdn.com/kf/H4405f6fa52e3428e9891792b2ab20b507.jpg',
      'https://sc02.alicdn.com/kf/H577a557e275348f086a7419fe0b67afbP.jpg',
      'https://sc02.alicdn.com/kf/H8786eab86be041218b63e4797db6138e2.jpg',
      'https://sc02.alicdn.com/kf/H098fe37f0d36417e981b35af6821d701T.jpg',
      'https://sc02.alicdn.com/kf/H20971cc31ed14557967a821dec24c2636.jpg'
    ],
    specs: [
      { label: 'Nominal Diameter', value: '380 mm (15.0 in)' },
      { label: 'Continuous Power Handling', value: '2000 W' },
      { label: 'Nominal Power (AES)', value: '1000 W' },
      { label: 'Sensitivity (1W/1m)', value: '97.0 dB' },
      { label: 'Voice Coil Diameter', value: '100 mm (4.0 in)' },
      { label: 'Fs (Resonant Frequency)', value: '41 Hz' },
      { label: 'Qts (Total Q)', value: '0.31' },
      { label: 'Vas (Equivalent Volume)', value: '128.0 L' }
    ]
  },
  '21nc152': { /* 保持 21NC152 数据不变 */ },
  '18tbx100': { /* 保持 18TBX100 数据不变 */ }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [displayImage, setDisplayImage] = useState(product?.mainImage || '');

  if (!product) return <div className="pt-48 text-center text-black">Product Not Found.</div>;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 text-black">
      <head><title>{product.seoTitle}</title><meta name="description" content={product.seoDesc} /></head>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 p-8 aspect-square flex items-center justify-center rounded-3xl shadow-xl overflow-hidden group">
            <img src={displayImage} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="grid grid-cols-6 gap-4">
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisplayImage(img)} className={`border-2 p-2 aspect-square rounded-xl cursor-pointer transition-all ${displayImage === img ? 'border-blue-600' : 'border-gray-100'}`}>
                <img src={img} className="max-h-full object-contain mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-left">
          <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4">CoreTone Engineering</h1>
          <h2 className="text-[56px] font-black text-black leading-none mb-10 uppercase tracking-tighter">{product.name}</h2>
          <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl mb-12 border border-zinc-800">
             <div className="bg-zinc-900 px-10 py-5 border-b border-zinc-800 flex justify-between items-center"><span className="text-white font-bold tracking-widest text-[12px] uppercase">Technical Readout</span></div>
             <div className="divide-y divide-zinc-800">
               {product.specs.map(spec => (
                 <div key={spec.label} className="grid grid-cols-2 px-10 py-5 hover:bg-zinc-900 transition-colors">
                    <span className="text-zinc-500 text-[13px] font-bold uppercase">{spec.label}</span>
                    <span className="text-white text-[13px] font-black text-right">{spec.value}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="flex gap-6">
             <a href="/contact" className="bg-[#2563EB] text-white px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all text-center min-w-[200px]">Inquiry Now</a>
             <a href={product.datasheetImage} target="_blank" rel="noreferrer" className="border-2 border-black text-black px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center min-w-[200px]">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
