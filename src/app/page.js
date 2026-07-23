export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc04.alicdn.com/kf/Aaf8d8fc114ec4cd39ccb0b4b46c9e8fdN.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
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

      {/* Featured Products Hint */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600 mb-2">Portfolio</h2>
              <h3 className="text-4xl font-bold tracking-tight">Expertly Crafted</h3>
            </div>
            <a href="/products" className="text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-black pb-1">See All Products</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-100 aspect-square mb-6 overflow-hidden">
                   <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400 uppercase tracking-widest text-xs">
                     Product Image
                   </div>
                </div>
                <h4 className="font-bold text-lg mb-2">Premium Driver Series</h4>
                <p className="text-gray-500 text-sm">Engineered for clarity and high-SPL performance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
