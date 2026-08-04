/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    // --- 优化的爆品系列 (置顶展示) ---
    {
      "slug": "08n12",
      "title": "08N12 Woofer Speaker Bass Professional Subwoofer 8 Inch Speaker",
      "image": "https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg"
    },
    {
      "slug": "12ndl76",
      "title": "12NDL76 800w Neodymium Line Array Woofer Speaker 12 Inch Subwoofer",
      "image": "https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png"
    },
    {
      "slug": "15tbx100",
      "title": "15TBX100 15\" Professional LF Driver",
      "image": "https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png"
    },
    {
      "slug": "18tbx100",
      "title": "18TBX100 18\" Professional Subwoofer",
      "image": "https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png"
    },
    {
      "slug": "21nc152",
      "title": "21NC152 21\" High End Subwoofer",
      "image": "https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg"
    },
    {
      "slug": "10nw64",
      "title": "10NW64 10\" Professional Neodymium Woofer",
      "image": "https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png"
    },

    // --- 其他标准系列 ---
    {
      "slug": "18sw1352",
      "title": "18SW1352 18\" Subwoofer",
      "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
    },
    {
      "slug": "hd08n50-16",
      "title": "HD08N50-16 8\" Neodymium Woofer",
      "image": "https://s.alicdn.com/@sc04/kf/Hcea1485f8a724101b30748c3e9cd7dd9j.png"
    },
    {
      "slug": "hd10n75",
      "title": "HD10N75 10\" Neodymium Woofer",
      "image": "https://s.alicdn.com/@sc04/kf/H7dc7672b996c4ba6ae4c746dd97f2551X.png"
    },
    {
      "slug": "hd12nc402",
      "title": "HD12NC402 12\" Neodymium Woofer",
      "image": "https://s.alicdn.com/@sc04/kf/H1c616559e4b94104942626480aa96a57s.png"
    },
    {
      "slug": "hd12nl400c",
      "title": "HD12NL400C 12\" Neodymium Subwoofer",
      "image": "https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg"
    },
    {
      "slug": "hd15g401",
      "title": "HD15G401 15\" Ferrite Woofer",
      "image": "https://s.alicdn.com/@sc04/kf/He41fb50c244343ad992900535e53debcH.png"
    },
    {
      "slug": "hd15n401",
      "title": "HD15N401 15\" Neodymium Woofer",
      "image": "https://s.alicdn.com/@sc04/kf/H06d21a681c0d4453b343612f7202158dR.png"
    },
    {
      "slug": "hd15nl400c",
      "title": "HD15NL400C 15\" Neodymium Subwoofer",
      "image": "https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg"
    },
    {
      "slug": "hd18g401",
      "title": "HD18G401 18\" Ferrite Subwoofer",
      "image": "https://s.alicdn.com/@sc04/kf/H8294f2bba734450dafc5367034411b83W.png"
    },
    {
      "slug": "hd18sw125",
      "title": "HD18SW125 18\" Neodymium Subwoofer",
      "image": "https://s.alicdn.com/@sc04/kf/H698bea7bae2b49d084fcde55ac46d260n.jpg"
    },
    {
      "slug": "hd18x451",
      "title": "HD18X451 18\" Ferrite Subwoofer",
      "image": "https://s.alicdn.com/@sc04/kf/H4597dc9b82b346d4b7c62a740320f198S.jpg"
    },
    {
      "slug": "hd21sf330-2",
      "title": "HD21SF330-2 21\" Ferrite Subwoofer",
      "image": "https://s.alicdn.com/@sc04/kf/H04c3e74274c44908add23802070638U.jpg"
    },
    {
      "slug": "hdcx1275-75",
      "title": "HDCX1275-75 12\" Coaxial Speaker",
      "image": "https://s.alicdn.com/@sc04/kf/H691c71da65be45ea80b1d36bc406ed18Y.jpg"
    },
    {
      "slug": "hde-1080",
      "title": "HDE-1080 Neodymium HF Driver",
      "image": "https://s.alicdn.com/@sc04/kf/Hf54cbec419ce409f9d6dd2b4201a06b2m.jpg"
    },
    {
      "slug": "hde-914",
      "title": "HDE-914 Neodymium HF Driver",
      "image": "https://s.alicdn.com/@sc04/kf/Hcdea117476054b87870ab8eedad688f8j.jpg"
    },
    {
      "slug": "hdnk-1000",
      "title": "HDNK-1000 Neodymium HF Driver",
      "image": "https://s.alicdn.com/@sc04/kf/H0103de543a04459cb6d8d94f50c12f0eh.jpg"
    }
  ];

  return (
    <main className="bg-white py-24">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-[#004691] text-white px-2 py-0.5 rounded font-black text-lg">CT</div>
             <span className="text-[#004691] font-bold tracking-[0.2em] uppercase text-xs">CoreTone Audio Assets</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight">Professional Speaker Drivers</h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group cursor-pointer block text-decoration-none">
              <div className="aspect-square bg-gray-50 mb-6 overflow-hidden flex items-center justify-center p-8 border border-gray-100 group-hover:border-blue-200 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-base mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight text-black leading-snug">{product.title}</h3>
              <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">Professional Audio</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
