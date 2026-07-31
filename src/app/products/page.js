import React from 'react';
import { Link } from 'react-router-dom';
import { DataMonitor } from '../components/products/DataMonitor';
import { Search, ArrowRight } from 'lucide-react';

const ProductsPage = () => {
  // 包含全部 5 款已发布产品
  const products = [
    {
      id: '18tbx100',
      name: '18TBX100 18" Professional Subwoofer',
      model_id: '18TBX100',
      category: 'Subwoofer',
      images: ['https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg'],
      specs: { 'Power': '1200W Peak', 'Sensitivity': '98dB', 'Voice Coil': '100mm' }
    },
    {
      id: '21nc152',
      name: '21NC152 21" High End Subwoofer',
      model_id: '21NC152',
      category: 'Subwoofer',
      images: ['https://sc02.alicdn.com/kf/H292d3f23a59846b0a1d4883609a7a6.png'], // 之前上好的图
      specs: { 'Power': '4000W Peak', 'Sensitivity': '97dB', 'Voice Coil': '153mm' }
    },
    {
      id: '10nw64',
      name: '10NW64 10" Professional Neodymium Woofer',
      model_id: '10NW64',
      category: 'LF Driver',
      images: ['https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png'],
      specs: { 'Power': '600W Max', 'Sensitivity': '96dB', 'Voice Coil': '64mm' }
    },
    {
      id: '15tbx100',
      name: '15TBX100 15" Professional LF Driver',
      model_id: '15TBX100',
      category: 'LF Driver',
      images: ['https://sc02.alicdn.com/kf/H742e3f23a59846b0a1d4883609a7a6.png'], 
      specs: { 'Power': '2000W Peak', 'Sensitivity': '96dB', 'Voice Coil': '100mm' }
    },
    {
      id: '12ndl76',
      name: '12NDL76 12" Professional Neodymium Woofer',
      model_id: '12NDL76',
      category: 'LF Driver',
      images: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png'],
      specs: { 'Power': '800W Max', 'Sensitivity': '97dB', 'Voice Coil': '76mm' }
    }
  ];

  return (
    <div className="pt-32 pb-24 max-w-[1500px] mx-auto px-6">
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter uppercase mb-6">Our <br />Collection</h1>
          <p className="text-zinc-500 font-mono text-sm tracking-[0.3em] border-l-4 border-[#2563EB] pl-6 max-w-xl uppercase font-bold">
            Verified Assets // Performance Audio
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="bg-white border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
            <div className="aspect-square relative overflow-hidden bg-white p-8">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black text-white text-[10px] font-bold tracking-widest uppercase">{product.category}</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between bg-black text-white">
              <div>
                <p className="font-mono text-[10px] text-[#A1A1AA] mb-2 tracking-widest uppercase">{product.model_id}</p>
                <h3 className="text-2xl font-bold uppercase leading-tight mb-8 tracking-tighter">{product.name}</h3>
                <DataMonitor specs={product.specs} />
              </div>
              <div className="mt-8 flex items-center justify-center gap-3 bg-[#2563EB] text-white py-3 font-bold text-[11px] uppercase tracking-widest hover:bg-blue-700 transition-colors">
                View Details <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
