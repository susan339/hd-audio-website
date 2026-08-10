'use client';
import React from 'react';

// 包含全部三篇新闻的完整数据源
const newsData = [
  {
    "id": "2026-08-09-hf-phase-accuracy",
    "date": "2026-08-09",
    "category": "Acoustic Engineering",
    "title": "Precision at the Peak: Why Phase Integrity Defines the 2026 Audio Landscape",
    "excerpt": "Explore how CORETONE AUDIO redefines high-frequency clarity using Radial-Path Phase Plugs and Hybrid-Composite diaphragms.",
    "image": "https://sc02.alicdn.com/kf/A733e2e6fb2e94312bc3895004d82fb22w.png",
    "url": "/news/phase-integrity-compression-drivers-hf-tech-2026"
  },
  {
    "id": "2026-08-06-material-science",
    "date": "2026-08-06",
    "category": "Material Innovation",
    "title": "Material Science in 2026: Why Advanced Composites are the New Standard",
    "excerpt": "Explore how CORETONE AUDIO uses Carbon Fiber Reinforced Pulp to eliminate cone breakup in 2026 woofers.",
    "image": "https://sc02.alicdn.com/kf/Ab1fe30efab41492880ab2b8a715e18ddv.png",
    "url": "/news/pro-audio-material-science-composite-cones-2026"
  },
  {
    "id": "2026-08-03-subwoofer-tech",
    "date": "2026-08-03",
    "category": "Technology & Innovation",
    "title": "The Evolution of High-Power Subwoofer Drivers in 2026: Why Thermal Management is the Key",
    "excerpt": "Discover how CORETONE AUDIO's Exact Series redefines 18-inch subwoofer performance through advanced thermal engineering.",
    "image": "https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png",
    "url": "/news/subwoofer-thermal-management-2026"
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
