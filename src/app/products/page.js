/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      "slug": "08n12",
      "title": "08N12 Woofer Speaker Bass Professional Subwoofer 8 Inch Speaker",
      "image": "https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg"
    },
    {
      "slug": "10nw64",
      "title": "10NW64 10\" Professional Neodymium Woofer Speaker LF Driver",
      "image": "https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png"
    },
    {
      "slug": "12ndl76",
      "title": "12NDL76 800w Neodymium Line Array Woofer Speaker 12 Inch Subwoofer",
      "image": "https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png"
    },
    {
      "slug": "15tbx100",
      "title": "15TBX100 15\" Professional LF Driver Bass Speaker 2000W Max",
      "image": "https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png"
    },
    {
      "slug": "18tbx100",
      "title": "18TBX100 18\" Professional Subwoofer Bass Speaker 2400W Peak",
      "image": "https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png"
    },
    {
      "slug": "21nc152",
      "title": "21NC152 21\" High End Neodymium Subwoofer 4000W Max",
      "image": "https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg"
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
          <h1 className="text-5xl font-bold tracking-tight text-black">Professional Speaker Drivers</h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group cursor-pointer block text-decoration-none">
              <div className="aspect-square bg-gray-50 mb-6 overflow-hidden flex items-center justify-center p-8 border border-gray-100 group-hover:border-blue-200 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight text-black leading-snug">{product.title}</h3>
              <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">Professional Audio</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
