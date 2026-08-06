'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 全量找回 6 款核心产品的详情图、参数图、规格数据
const fullDb = {
  '08n12': {
    name: '08N12 8" Neodymium Line Array Woofer',
    cat: 'Woofer',
    main: 'https://sc02.alicdn.com/kf/H06d21a681c0d4453b343612f7202158dR.png',
    pdf: '#',
    imgs: ['https://sc02.alicdn.com/kf/H06d21a681c0d4453b343612f7202158dR.png'],
    specs: [{ 'l': 'Nominal Diameter', 'v': '8 inch' }, { 'l': 'Power Handling', 'v': '200 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }]
  },
  '10nw64': {
    name: '10NW64 10" Neodymium Woofer',
    cat: 'Woofer',
    main: 'https://s.alicdn.com/@sc04/kf/H7dc7672b996c4ba6ae4c746dd97f2551X.png',
    pdf: '#',
    imgs: ['https://s.alicdn.com/@sc04/kf/H7dc7672b996c4ba6ae4c746dd97f2551X.png'],
    specs: [{ 'l': 'Nominal Diameter', 'v': '10 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '350 W' }]
  },
  '12ndl76': {
    name: '12NDL76 12" Neodymium Line Array Woofer',
    cat: 'Woofer',
    main: 'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
    pdf: '#',
    imgs: [
      'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
      'https://sc02.alicdn.com/kf/H63be3d489f644837894a8677c7f6696eK.jpg', // 找回的参数图
      'https://sc02.alicdn.com/kf/H053a8128df2b4a5392e2b347b85c889fB.jpg'  // 详情图
    ],
    specs: [{ 'l': 'Nominal Diameter', 'v': '12 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '400 W' }]
  },
  '15tbx100': {
    name: '15TBX100 15" Ferrite Subwoofer',
    cat: 'Subwoofer',
    main: 'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
    pdf: '#',
    imgs: [
      'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
      'https://sc02.alicdn.com/kf/H63be3d489f644837894a8677c7f6696eK.jpg'
    ],
    specs: [{ 'l': 'Nominal Diameter', 'v': '15 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '400 W' }]
  },
  '18tbx100': {
    name: '18TBX100 18" Ferrite Subwoofer',
    cat: 'Subwoofer',
    main: 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
    pdf: '#',
    imgs: [
      'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
      'https://sc02.alicdn.com/kf/H97e68e47f5264b97a78e789ed18e6988L.jpg', // 找回的关键参数曲线图
      'https://sc02.alicdn.com/kf/H382898c62c3e449db12a32c6988898144.jpg'
    ],
    specs: [{ 'l': 'Nominal Diameter', 'v': '18 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Nominal Power (AES)', 'v': '1200 W' }, { 'l': 'Fs', 'v': '34 Hz' }]
  },
  '21nc152': {
    name: '21NC152 21" Neodymium Subwoofer',
    cat: 'Subwoofer',
    main: 'https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg',
    pdf: '#',
    imgs: [
      'https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg',
      'https://sc02.alicdn.com/kf/Hfc86617a264a4d65a98d3637e96b3687v.jpg' // 找回的参数大图
    ],
    specs: [{ 'l': 'Nominal Diameter', 'v': '21 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power (AES)', 'v': '2000 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }]
  }
};

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;
  const product = fullDb[id];
  const [activeImg, setActiveImg] = useState('');

  useEffect(() => {
    if (product) setActiveImg(product.main);
  }, [product]);

  if (!product) return <div className="min-h-screen bg-white text-zinc-300 flex items-center justify-center font-bold tracking-widest uppercase italic">Loading Assets...</div>;

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-40 pb-24 px-6 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* 左侧：多图展示区（支持切换） */}
        <div>
          <div className="bg-white p-12 aspect-square flex items-center justify-center border border-zinc-100 shadow-xl rounded-2xl overflow-hidden group">
            <img src={activeImg} alt={product.name} className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          {/* 缩略图滚动条 */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {product.imgs.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setActiveImg(img)} 
                className={`aspect-square bg-white border-2 p-2 cursor-pointer transition-all rounded-lg overflow-hidden ${activeImg === img ? 'border-[#2563EB] shadow-lg' : 'border-zinc-100 opacity-50 hover:opacity-100'}`}
              >
                <img src={img} alt={`${product.name} thumbnail ${i}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：详细信息 */}
        <div className="flex flex-col">
          <Link href="/products" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 hover:text-[#2563EB] transition-colors mb-12 flex items-center gap-2 italic">
            ← Engineering Catalog
          </Link>
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-[#2563EB] text-white px-2 py-0.5 rounded font-black text-lg shadow-lg">CT</div>
             <span className="text-[#2563EB] font-bold tracking-[0.3em] uppercase text-[10px]">Professional Sound Engineering</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12 italic">
            {product.name}
          </h1>

          <div className="bg-white border border-zinc-100 mb-12 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-4 flex justify-between items-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Technical Specifications</p>
              <span className="bg-green-100 text-green-600 text-[9px] font-bold px-3 py-1 rounded-full uppercase">Factory Verified</span>
            </div>
            {product.specs.map((s, i) => (
              <div key={i} className="flex justify-between px-8 py-4 border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{s.l}</span>
                <span className="text-sm font-black uppercase tracking-tight">{s.v}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href={`https://wa.me/8615521083699?text=I'm interested in ${product.name}`} target="_blank" className="bg-[#2563EB] text-white py-6 text-center font-black uppercase tracking-[0.2em] text-[11px] hover:bg-black transition-all rounded-xl shadow-xl shadow-blue-500/20">
              Get Quote via WhatsApp
            </a>
            <a href="#" className="border-2 border-black text-black py-6 text-center font-black uppercase tracking-[0.2em] text-[11px] hover:bg-black hover:text-white transition-all rounded-xl">
              Download Full PDF
            </a>
          </div>
          <p className="mt-8 text-center text-zinc-300 text-[10px] font-bold uppercase tracking-[0.3em] italic">Precision Crafted in Panyu Audio Hub, Guangzhou</p>
        </div>
      </div>
    </div>
  );
}
