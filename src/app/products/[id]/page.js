"use client";
import React, { useState, use } from 'react';
import Link from 'next/link';
import { ChevronLeft, FileText, ShieldCheck } from 'lucide-react';

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const id = params.id;
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // 【核心数据】在此处添加或修改产品参数，确保 SEO 100% 准确
  const localProducts = {
    '18tbx100': { name: '18TBX100 18" Professional Subwoofer', category: 'Subwoofer', images: ['https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg'], specs: { 'Power': '1200W Peak', 'Sensitivity': '98dB', 'Voice Coil': '100mm (4")' } },
    '21nc152': { name: '21NC152 21" High End Subwoofer', category: 'Subwoofer', images: ['https://sc02.alicdn.com/kf/H292d3f23a59846b0a1d4883609a7a6.png'], specs: { 'Power': '4000W Peak', 'Sensitivity': '97dB', 'Voice Coil': '153mm (6")' } },
    '10nw64': { 
      name: '10NW64 10" Professional Neodymium Woofer', 
      category: 'LF Driver', 
      images: [
        'https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png', 
        'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg',
        'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'
      ], 
      specs: { 'Power': '600W Max', 'Sensitivity': '96dB', 'Voice Coil': '64mm (2.5")', 'Magnet': 'Neodymium' },
      datasheet_url: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'
    },
    '15tbx100': { name: '15TBX100 15" Professional LF Driver', category: 'LF Driver', images: ['https://sc02.alicdn.com/kf/H742e3f23a59846b0a1d4883609a7a6.png'], specs: { 'Power': '2000W Peak', 'Sensitivity': '96dB', 'Voice Coil': '100mm (4")' } },
    '12ndl76': { name: '12NDL76 12" Professional Neodymium Woofer', category: 'LF Driver', images: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg'], specs: { 'Power': '800W Max', 'Sensitivity': '97dB', 'Voice Coil': '76mm (3")' } }
  };

  const product = localProducts[id];
  if (!product) return <div className="pt-48 text-center bg-[#0A0A0A] min-h-screen text-white">Asset not found.</div>;

  return (
    <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6 bg-[#0A0A0A] text-white">
      <Link href="/products" className="inline-flex items-center gap-2 text-[#A3A3A3] hover:text-white font-mono text-[10px] uppercase mb-12">
        <ChevronLeft size={14} /> Back to Catalog
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="bg-[#141414] border border-[#262626] p-12 aspect-square flex items-center justify-center">
            <img src={product.images[0]} alt={product.name} className="max-h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(1).map((img, i) => (
              <div key={i} className="bg-[#141414] border border-[#262626] p-4 aspect-square flex items-center justify-center">
                <img src={img} alt={product.name} className="max-h-full w-auto object-contain grayscale" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <span className="px-3 py-1 bg-[#E11D48]/10 text-[#E11D48] text-[9px] font-mono uppercase tracking-[0.2em]">{product.category}</span>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mt-4 mb-8">{product.name}</h1>
            <div className="flex gap-6 text-[#A3A3A3] font-mono text-[11px] uppercase tracking-widest">
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#E11D48]" /> 5Y Warranty</span>
              <span className="flex items-center gap-2"><FileText size={14} className="text-[#E11D48]" /> Datasheet Ready</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="bg-[#0A0A0A] p-6">
                <p className="text-[10px] text-[#A3A3A3] uppercase mb-1">{key}</p>
                <p className="text-xl font-bold text-white tracking-tight">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-6 pt-8 border-t border-[#262626]">
            <a href="https://wa.me/8615521083699" target="_blank" className="flex-1 bg-[#E11D48] text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-[#BE123C] transition-colors">Inquiry Now</a>
            {product.datasheet_url && (
              <a href={product.datasheet_url} target="_blank" className="flex-1 border border-white text-white py-5 text-center font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                <FileText size={18} /> Download Specs
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
