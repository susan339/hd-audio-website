'use client';
import React from 'react';

const newsData = [
  {
    "id": "2026-08-03-subwoofer-tech",
    "date": "2026-08-03",
    "category": "Technology & Innovation",
    "title": "The Evolution of High-Power Subwoofer Drivers in 2026: Why Thermal Management is the New Pro Audio Battlefield",
    "excerpt": "Discover how CORETONE AUDIO's Exact Series redefines 18-inch subwoofer performance through advanced thermal engineering.",
    "image": "https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png",
    "url": "/news/subwoofer-thermal-management-2026" // <-- 关键修改：指向刚才创建的新闻详情文件夹
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 italic leading-none">
            Technical <br />Bulletins
          </h1>
          <p className="text-zinc-500 font-bold text-sm tracking-[0.3em] border-l-4 border-[#2563EB] pl-6 uppercase">
            Product Release Logs & Acoustic Research
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {newsData.map((item) => (
            <article key={item.id} className="group border-t-2 border-zinc-100 pt-10">
              <div className="aspect-video overflow-hidden mb-8 bg-zinc-50 border border-zinc-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-[#2563EB]">
                <span>{item.date}</span>
                <span className="bg-[#2563EB] text-white px-2 py-0.5">{item.category}</span>
              </div>
              <h2 className="text-3xl font-black uppercase mb-6 leading-tight group-hover:text-[#2563EB] transition-colors">
                {item.title}
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                {item.excerpt}
              </p>
              <a 
                href={item.url} 
                className="inline-block bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#2563EB] transition-all"
              >
                Read Technical Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
