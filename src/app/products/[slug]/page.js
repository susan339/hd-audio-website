import { getProductBySlug } from '../../../lib/get-products';
import Link from 'next/link';

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/products" className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-8">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Catalog
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Product Info & Specs Table */}
        <div className="flex flex-col">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.title}</h1>
          
          <div className="prose prose-gray max-w-none mb-10">
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.content.split('###')[0].trim()}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {product.specs.map((spec, index) => (
                    <tr key={index}>
                      <td className="py-3 text-sm font-medium text-gray-500">{spec.label}</td>
                      <td className="py-3 text-sm font-bold text-gray-900 text-right">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Full Content / Detailed Specs Section */}
      {product.content.includes('###') && (
        <div className="border-t border-gray-100 pt-12">
          <div className="prose prose-blue max-w-none">
            <div 
              className="text-gray-700 whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ 
                __html: product.content.substring(product.content.indexOf('###')).replace(/###/g, '<h3 class="text-2xl font-bold mt-8 mb-4">').replace(/\n- /g, '<br/>• ')
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
