export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-zinc-900 text-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-6">Premium Sound Engineering</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              PRO AUDIO DRIVERS <br /> & SYSTEMS
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
              Experience the peak of audio performance with our precision-engineered transducers and complete sound reinforcement systems.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm">
                View Products
              </a>
              <a href="#" className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold tracking-[0.2em] uppercase transition-all text-sm">
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
