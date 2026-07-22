import Link from 'next/link';
import { getProducts } from '../../lib/get-products';

export default function ProductsPage() {
  const products = getProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Product Catalog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          High-performance audio components engineered for professional sound reinforcement.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link 
            key={product.slug} 
            href={`/products/${product.slug}`}
            className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
          >
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {product.category}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                {product.title}
              </h2>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                View Details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
