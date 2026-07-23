export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc02.alicdn.com/kf/Af43f3e2b09274fd8ba0820ed1295602aG.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-6">Premium Sound Engineering</h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-tight text-white">
              PRO AUDIO DRIVERS <br /> & SYSTEMS
            </h1>
            <p className="text-xl md:text-2xl font-bold tracking-[0.15em] text-white uppercase mb-8 opacity-90">
              PREMIUM REPLACEMENTS.<br />UNCOMPROMISED PERFORMANCE.
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-xl leading-relaxed font-light">
              Experience the peak of audio performance with our precision-engineered transducers and complete sound reinforcement systems.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">
                View Products
              </a>
              <a href="#" className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm text-center">
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* One-Stop Service Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center text-zinc-900">
          <h2 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter uppercase">ONE-STOP SERVICE</h2>
          <p className="text-lg md:text-xl font-medium mb-2">15+ years experience professional speaker manufacturer</p>
          <p className="text-md md:text-lg font-medium mb-8 uppercase tracking-widest text-zinc-500">OEM/ODM Service are available</p>
          
          <div className="mb-16">
            <a href="/products" className="bg-black text-white px-8 py-2 text-xs font-bold uppercase border border-black hover:bg-transparent hover:text-black transition-all">
              VIEW MORE
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-7xl mx-auto px-4 text-white">
            {/* Card 1: High End Subwoofer */}
            <div className="relative flex items-center bg-black rounded-[2rem] p-6 h-64 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
              <img 
                src="https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg" 
                className="absolute -left-8 w-48 h-48 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                alt="High End Subwoofer"
              />
              <div className="ml-auto w-[60%] text-left relative z-10">
                <h3 className="text-2xl font-bold mb-3">High End Subwoofer</h3>
                <ul className="text-xs space-y-1 opacity-80 font-light mb-4 list-disc pl-4">
                  <li>Super high power</li>
                  <li>Heavy low bass</li>
                  <li>Long excursion</li>
                </ul>
                <div className="text-right">
                  <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    &lt; More
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 opacity-40 pointer-events-none rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 mix-blend-overlay"></div>
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[url('https://sc04.alicdn.com/kf/A770450178687439698fea0ebdda6d926e.jpg')] bg-cover bg-bottom opacity-30"></div>
              </div>
            </div>

            {/* Card 2: LF Drivers */}
            <div className="relative flex items-center bg-black rounded-[2rem] p-6 h-64 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
              <img 
                src="https://sc04.alicdn.com/kf/H74df427f41ba411faa12f562dd0e85dcX.jpg" 
                className="absolute -left-8 w-48 h-48 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                alt="LF Drivers"
              />
              <div className="ml-auto w-[60%] text-left relative z-10">
                <h3 className="text-2xl font-bold mb-3">LF Drivers</h3>
                <ul className="text-xs space-y-1 opacity-80 font-light mb-4 list-disc pl-4">
                  <li>Rich range from 2" to 24"</li>
                  <li>Best option for Nightclubs, Stadiums, Concert halls</li>
                  <li>Live show, Outdoor/Indoor</li>
                </ul>
                <div className="text-right">
                  <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    &lt; More
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 opacity-40 pointer-events-none rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
              </div>
            </div>

            {/* Card 3: HF Drivers */}
            <div className="relative flex items-center bg-black rounded-[2rem] p-6 h-64 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
              <img 
                src="https://sc04.alicdn.com/kf/Ha1a1668e09f4492da0a33c0fd2345aeG.jpg" 
                className="absolute -left-8 w-48 h-48 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                alt="HF Drivers"
              />
              <div className="ml-auto w-[60%] text-left relative z-10">
                <h3 className="text-2xl font-bold mb-3">HF Drivers</h3>
                <ul className="text-xs space-y-1 opacity-80 font-light mb-4 list-disc pl-4">
                  <li>Superb power handling</li>
                  <li>High sensitivity</li>
                  <li>Low distortion</li>
                </ul>
                <div className="text-right">
                  <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    &lt; More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4: Coaxial Speakers */}
            <div className="relative flex items-center bg-black rounded-[2rem] p-6 h-64 overflow-visible group cursor-pointer hover:scale-[1.02] transition-transform">
              <img 
                src="https://sc04.alicdn.com/kf/He48faf297e66496badaf2823b99a4a7c4.jpg" 
                className="absolute -left-8 w-48 h-48 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                alt="Coaxial Speakers"
              />
              <div className="ml-auto w-[60%] text-left relative z-10">
                <h3 className="text-2xl font-bold mb-3">Coaxial Speakers</h3>
                <ul className="text-xs space-y-1 opacity-80 font-light mb-4 list-disc pl-4">
                  <li>Super high power</li>
                  <li>Heavy low bass</li>
                  <li>Long excursion</li>
                </ul>
                <div className="text-right">
                  <a href="/products" className="inline-block border border-white/50 rounded-full px-6 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    &lt; More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
