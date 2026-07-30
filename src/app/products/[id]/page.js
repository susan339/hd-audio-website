'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { id } = useParams();
  
  const product = {
    name: '18TBX100 Subwoofer',
    fullName: '18TBX100 18-inch Professional High Output Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    // 您的品牌化定制规格书
    datasheetImage: 'https://sc02.alicdn.com/kf/Ade66ae6849ad4e5c9e84235340209ce6X.png',
    // 全量 5 图系统
    moreImages: [
      'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
      'https://sc02.alicdn.com/kf/Hb70670f50c4247558911d851d4005bcfT.jpg',
      'https://sc02.alicdn.com/kf/Hdb9abaa829074bb8915ecd506716ffd57.jpg',
      'https://sc02.alicdn.com/kf/Hca61ef226c954f3f946dea13ef682c61E.jpg',
      'https://sc02.alicdn.com/kf/H3966798aa5314a258a1dbe1a8767cc52t.jpg'
    ],
    specs: [
      { label: 'Nominal Impedance', value: '8 Ω' },
      { label: 'Power Handling (AES)', value: '1200 W' },
      { label: 'Sensitivity (1W/1m)', value: '98.0 dB' },
      { label: 'Frequency Range', value: '35 - 1000 Hz' },
      { label: 'Voice Coil Diameter', value: '100 mm (4.0 in)' },
      { label: 'Magnet Material', value: 'Professional Ferrite' }
    ]
  };

  const [displayImage, setDisplayImage] = useState(product.mainImage);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-8 selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* 图片交互系统 */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 p-8 aspect-square flex items-center justify-center rounded-3xl shadow-xl overflow-hidden group">
            <img src={displayImage} className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110" alt="Product" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.moreImages.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setDisplayImage(img)} 
                className={`border-2 p-2 aspect-square rounded-xl cursor-pointer transition-all ${displayImage === img ? 'border-blue-600' : 'border-gray-100 hover:border-gray-300'}`}
              >
                <img src={img} className="max-h-full object-contain mx-auto" alt="Thumb" />
              </div>
            ))}
          </div>
        </div>

        {/* 规格大表与一键上新逻辑 */}
        <div className="text-left">
          <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4 font-sans">Precision Engineering</h1>
          <h2 className="text-[56px] font-black text-black leading-none mb-10 uppercase tracking-tighter">{product.name}</h2>
          
          <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl mb-12">
             <div className="bg-zinc-900 px-10 py-4 border-b border-zinc-800 text-white font-bold tracking-widest text-[11px] uppercase">Technical Specifications</div>
             <div className="divide-y divide-zinc-800">
               {product.specs.map(spec => (
                 <div key={spec.label} className="grid grid-cols-2 px-10 py-5 hover:bg-zinc-900 transition-colors">
                    <span className="text-zinc-500 text-[13px] font-bold uppercase">{spec.label}</span>
                    <span className="text-white text-[13px] font-black text-right">{spec.value}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* 按钮区域 */}
          <div className="flex flex-wrap gap-6 mt-12">
             <a href="/contact" className="bg-[#2563EB] text-white px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-blue-700 transition-all text-center min-w-[220px]">
                Inquiry Now
             </a>
             <a href={product.datasheetImage} target="_blank" rel="noreferrer" className="border-2 border-black text-black px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all text-center min-w-[220px]">
                Download PDF
             </a>
          </div>

          {/* 品牌咨询邮箱展示 */}
          <div className="mt-12 pt-8 border-t border-gray-100">
             <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-2">Technical Support</p>
             <p className="text-[18px] font-black text-black">coretoneaudio01@163.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
