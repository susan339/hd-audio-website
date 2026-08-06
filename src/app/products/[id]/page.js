'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 直接内置 6 款产品的全量数据，彻底解决线上文件缺失导致的 404
const coreDb = {
  '08n12': {
    name: '08N12 8" Neodymium Line Array Woofer',
    main: 'https://sc02.alicdn.com/kf/H06d21a681c0d4453b343612f7202158dR.png',
    cat: 'Woofer',
    specs: [{ 'l': 'Nominal Diameter', 'v': '8 inch' }, { 'l': 'Power Handling', 'v': '200 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }]
  },
  '10nw64': {
    name: '10NW64 10" Neodymium Woofer',
    main: 'https://s.alicdn.com/@sc04/kf/H7dc7672b996c4ba6ae4c746dd97f2551X.png',
    cat: 'Woofer',
    specs: [{ 'l': 'Nominal Diameter', 'v': '10 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '350 W' }]
  },
  '12ndl76': {
    name: '12NDL76 12" Neodymium Line Array Woofer',
    main: 'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
    cat: 'Woofer',
    specs: [{ 'l': 'Nominal Diameter', 'v': '12 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '400 W' }]
  },
  '15tbx100': {
    name: '15TBX100 15" Ferrite Subwoofer',
    main: 'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
    cat: 'Subwoofer',
    specs: [{ 'l': 'Nominal Diameter', 'v': '15 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '400 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }]
  },
  '18tbx100': {
    name: '18TBX100 18" Ferrite Subwoofer',
    main: 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
    cat: 'Subwoofer',
    specs: [{ 'l': 'Nominal Diameter', 'v': '18 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Nominal Power (AES)', 'v': '1200 W' }, { 'l': 'Fs', 'v': '34 Hz' }]
  },
  '21nc152': {
    name: '21NC152 21" Neodymium Subwoofer',
    main: 'https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg',
    cat: 'Subwoofer',
    specs: [{ 'l': 'Nominal Diameter', 'v': '21 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power (AES)', 'v': '2000 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }]
  }
};

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;
  const product = coreDb[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-zinc-400 flex items-center justify-center font-bold tracking-widest uppercase">
        Product Assets Syncing...
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-40 pb-24 px-6 text-black selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Product Image */}
        <div className="bg-white p-12 aspect-square flex items-center justify-center border border-zinc-100 shadow-sm">
          <img src={product.main} alt={product.name} className="max-w-full max-h-full object-contain" />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center">
          <Link href="/products" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 hover:text-[#2563EB] transition-colors mb-12 flex items-center gap-2">
            ← Core Assets Catalog
          </Link>
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-[#2563EB] text-white px-2 py-0.5 rounded font-black text-lg shadow-lg shadow-blue-500/20">CT</div>
             <span className="text-[#2563EB] font-black tracking-[0.2em] uppercase text-xs">CoreTone Audio Engineering</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-12">
            {product.name}
          </h1>

          <div className="bg-white border border-zinc-100 mb-12 shadow-sm">
            <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Technical Telemetry</p>
            </div>
            {product.specs.map((s, i) => (
              <div key={i} className="flex justify-between px-8 py-4 border-b border-zinc-50 last:border-0">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{s.l}</span>
                <span className="text-sm font-black uppercase tracking-tight">{s.v}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://wa.me/8615521083699" target="_blank" className="bg-[#2563EB] text-white py-5 text-center font-black uppercase tracking-[0.2em] text-[11px] hover:bg-black transition-all">
              Inquiry for Specs
            </a>
            <a href="#" className="border-2 border-black text-black py-5 text-center font-black uppercase tracking-[0.2em] text-[11px] hover:bg-black hover:text-white transition-all">
              Download datasheet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
