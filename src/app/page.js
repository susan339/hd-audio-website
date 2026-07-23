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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {/* Subwoofer */}
            <div className="bg-white border border-zinc-100 p-4 shadow-sm hover:shadow-xl transition-shadow">
              <div className="bg-zinc-900 text-white py-2 font-bold mb-4">Subwoofer</div>
              <div className="aspect-[4/3] flex items-center justify-center mb-2 overflow-hidden">
                <img src="https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg" alt="Subwoofer" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* LF Driver */}
            <div className="bg-white border border-zinc-100 p-4 shadow-sm hover:shadow-xl transition-shadow">
              <div className="bg-zinc-800 text-white py-2 font-bold mb-4">LF Driver</div>
              <div className="aspect-[4/3] flex items-center justify-center mb-2 overflow-hidden">
                <img src="https://sc04.alicdn.com/kf/H74df427f41ba411faa12f562dd0e85dcX.jpg" alt="LF Driver" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* HF Driver */}
            <div className="bg-white border border-zinc-100 p-4 shadow-sm hover:shadow-xl transition-shadow">
              <div className="bg-zinc-900 text-white py-2 font-bold mb-4">HF Driver</div>
              <div className="aspect-[4/3] flex items-center justify-center mb-2 overflow-hidden">
                <img src="https://sc04.alicdn.com/kf/Ha1a1668e09f4492da0a33c0fd2345aeG.jpg" alt="HF Driver" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* Coaxial Speaker */}
            <div className="bg-white border border-zinc-100 p-4 shadow-sm hover:shadow-xl transition-shadow">
              <div className="bg-zinc-800 text-white py-2 font-bold mb-4">Coaxial Speaker</div>
              <div className="aspect-[4/3] flex items-center justify-center mb-2 overflow-hidden">
                <img src="https://sc04.alicdn.com/kf/He48faf297e66496badaf2823b99a4a7c4.jpg" alt="Coaxial Speaker" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
