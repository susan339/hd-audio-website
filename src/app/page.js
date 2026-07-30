import React from 'react';

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://sc02.alicdn.com/kf/H148b186beaaa4c09851d5dc291ceb877R.jpg" alt="Hero Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    {/* 增加 pt-32 确保文字不会被顶部的导航栏遮挡 */}
    <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-left">
      <div className="max-w-4xl">
        <h2 className="text-[#2563EB] font-bold tracking-[0.3em] uppercase text-[10px] sm:text-sm mb-6">Premium Sound Engineering</h2>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-tight text-white uppercase">
          PRO AUDIO DRIVERS <br /> & SYSTEMS
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.15em] text-white uppercase mb-8 opacity-90">
          PREMIUM REPLACEMENTS.<br />UNCOMPROMISED PERFORMANCE.
        </p>
        <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-xl leading-relaxed font-light">
          Experience the peak of audio performance with our precision-engineered transducers and complete sound reinforcement systems.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/products" className="bg-[#2563EB] hover:bg-blue-700 text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">View Products</a>
          <a href="/inquiry" className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
);

const OneStopService = () => {
  const categories = [
    { title: 'High End Subwoofer', img: 'https://sc02.alicdn.com/kf/A4a6b9694aaac4a03b7ba68697228428cd.png', features: ['Super high power', 'Heavy low bass'] },
    { title: 'LF Drivers', img: 'https://sc02.alicdn.com/kf/Afb38a5120bb7401e96354faccb6bd0c3J.png', features: ['2" to 24" range', 'Nightclubs & Concerts'] },
    { title: 'HF Drivers', img: 'https://sc02.alicdn.com/kf/A7d1ce08c83c44ba2993303e750d39395Y.png', features: ['Superb power handling', 'High sensitivity'] },
    { title: 'Coaxial Speakers', img: 'https://sc02.alicdn.com/kf/Ab6b752927fda41ca927f97f50969de77N.png', features: ['Full range performance', 'Compact design'] }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center text-black">
        <h2 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter uppercase">ONE-STOP SERVICE</h2>
        <p className="text-lg md:text-xl font-medium mb-12 text-zinc-600 uppercase tracking-widest">OEM/ODM Service are available</p>
        
        {/* 恢复 4 大产品专区，且适配移动端垂直排列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 max-w-7xl mx-auto px-4 mt-20">
          {categories.map((cat, i) => (
            <div key={i} className="relative flex flex-col md:flex-row items-center bg-black text-white rounded-[2rem] p-8 md:p-6 h-auto md:h-72 group hover:scale-[1.02] transition-all">
              <div className="relative md:absolute -top-16 md:top-auto md:-left-12 w-56 h-56 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center overflow-hidden z-20 shadow-2xl p-6 border-4 border-zinc-900/10 mb-8 md:mb-0">
                <img src={cat.img} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" alt={cat.title} />
              </div>
              <div className="w-full md:ml-auto md:w-[55%] text-center md:text-left relative z-10">
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{cat.title}</h3>
                <ul className="text-xs space-y-2 opacity-80 font-light mb-6">
                  {cat.features.map((f, j) => <li key={j}>• {f}</li>)}
                </ul>
                <div className="text-center md:text-right">
                  <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1.5 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"> &lt; More </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioBanner = () => (
  <section className="w-full overflow-hidden">
    <img src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" alt="Portfolio" className="w-full h-auto block" />
  </section>
);

export default function Home() {
  return (
    <div className="font-sans antialiased text-black bg-white">
      <main><Hero /><OneStopService /><PortfolioBanner /></main>
      <footer className="bg-black text-white py-20 px-4 text-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase">© 2026 CORETONE AUDIO. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
