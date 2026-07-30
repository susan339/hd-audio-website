'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const productData = {
  '15tbx100': {
    name: '15TBX100 LF Driver',
    mainImage: 'https://sc02.alicdn.com/kf/H19cf0f9679ea4b31be0b9d7a83aefc84C.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/Aa3856bb609b04d98b1bce706f744fb06D.png',
    moreImages: [
      'https://sc02.alicdn.com/kf/H19cf0f9679ea4b31be0b9d7a83aefc84C.jpg',
      'https://sc02.alicdn.com/kf/H4405f6fa52e3428e9891792b2ab20b507.jpg',
      'https://sc02.alicdn.com/kf/H577a557e275348f086a7419fe0b67afbP.jpg',
      'https://sc02.alicdn.com/kf/H8786eab86be041218b63e4797db6138e2.jpg'
    ],
    specs: [{ label: 'Power', value: '2000W' }, { label: 'Voice Coil', value: '4"' }, { label: 'Sensitivity', value: '97dB' }]
  },
  '18tbx100': {
    name: '18TBX100 Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/Ade66ae6849ad4e5c9e84235340209ce6X.png',
    moreImages: ['https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg'],
    specs: [{ label: 'Power', value: '1200W' }, { label: 'Voice Coil', value: '4"' }, { label: 'Sensitivity', value: '98dB' }]
  },
  '21nc152': {
    name: '21NC152 Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/A751a3e51169048bd9ba1c863719826ebY.png',
    moreImages: [
      'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
      'https://sc02.alicdn.com/kf/H73bb88a5f4b643a0a4371c4b4e175d39d.jpg',
      'https://sc02.alicdn.com/kf/H57a1b11ab09f4e2daba0bd1e4bf92ad3m.jpg'
    ],
    specs: [{ label: 'Power', value: '4000W' }, { label: 'Voice Coil', value: '6"' }, { label: 'Magnet', value: 'Neodymium' }]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [displayImage, setDisplayImage] = useState(product?.mainImage || '');

  if (!product) return <div className="pt-48 text-center uppercase font-black">Data Link Interrupted.</div>;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 text-black selection:bg-blue-600 selection:text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8 text-left">
          <div className="bg-white border border-gray-100 p-8 aspect-square flex items-center justify-center rounded-3xl shadow-xl overflow-hidden group">
            <img src={displayImage} className="max-h-full w-auto object-contain transition-transform group-hover:scale-105 duration-500" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisplayImage(img)} className={`border-2 p-2 aspect-square rounded-xl cursor-pointer ${displayImage === img ? 'border-blue-600' : 'border-gray-100'}`}><img src={img} className="max-h-full mx-auto" /></div>
            ))}
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-[56px] font-black uppercase mb-10 tracking-tighter leading-none">{product.name}</h2>
          <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl p-2 border border-zinc-800">
             {product.specs.map(spec => (
               <div key={spec.label} className="grid grid-cols-2 px-10 py-5 border-b border-zinc-900 last:border-0">
                  <span className="text-zinc-500 font-bold uppercase">{spec.label}</span>
                  <span className="text-white font-black text-right">{spec.value}</span>
               </div>
             ))}
          </div>
          <div className="flex gap-6 mt-12">
             <a href="/contact" className="bg-blue-600 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-blue-700 transition-all text-center">Inquiry Now</a>
             <a href={product.datasheetImage} target="_blank" className="border-2 border-black text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center">Datasheet</a>
          </div>
        </div>
      </div>
    </div>
  );
}
