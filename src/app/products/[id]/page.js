import React from 'react';
import ProductDetailClient from '../../../components/ProductDetailClient';
import productsData from '../data/products.json';

const specsDb = {
  '08n12': { cat: 'Woofer', specs: [{ 'l': 'Nominal Diameter', 'v': '8 inch' }, { 'l': 'Power Handling', 'v': '200 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }] },
  '10nw64': { cat: 'Woofer', specs: [{ 'l': 'Nominal Diameter', 'v': '10 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '350 W' }] },
  '12ndl76': { cat: 'Woofer', specs: [{ 'l': 'Nominal Diameter', 'v': '12 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '400 W' }] },
  '15tbx100': { cat: 'Subwoofer', specs: [{ 'l': 'Nominal Diameter', 'v': '15 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power Handling (AES)', 'v': '400 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }] },
  '18tbx100': { cat: 'Subwoofer', specs: [{ 'l': 'Nominal Diameter', 'v': '18 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Nominal Power (AES)', 'v': '1200 W' }, { 'l': 'Fs', 'v': '34 Hz' }] },
  '21nc152': { cat: 'Subwoofer', specs: [{ 'l': 'Nominal Diameter', 'v': '21 inch' }, { 'l': 'Rated Impedance', 'v': '8 ohm' }, { 'l': 'Power (AES)', 'v': '2000 W' }, { 'l': 'Sensitivity', 'v': '97 dB' }] }
};

function getProduct(id) {
  const base = productsData.find(p => p.slug === id);
  if (!base) return null;
  const extra = specsDb[id] || { cat: 'Professional Driver', specs: [{ 'l': 'Type', 'v': 'Pro Audio Component' }] };
  return { name: base.title, main: base.image, imgs: [base.image], pdf: '#', ...extra };
}

export async function generateMetadata({ params }) {
  const product = getProduct(params.id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | High Performance Professional Audio Driver`,
    description: `Buy ${product.name} directly from CORETONE AUDIO factory in Guangzhou. Premium replacement for pro-audio systems. Specs: ${product.specs.map(s => `${s.l}: ${s.v}`).join(', ')}.`,
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.id);
  if (!product) return <div className="pt-40 text-center">PRODUCT NOT FOUND</div>;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': product.main,
    'description': `${product.name} professional speaker driver engineered for high-end sound reinforcement.`,
    'brand': { '@type': 'Brand', 'name': 'CORETONE AUDIO' },
    'offers': { '@type': 'Offer', 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' },
    'additionalProperty': product.specs.map(s => ({ '@type': 'PropertyValue', 'name': s.l, 'value': s.v }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetailClient product={product} id={params.id} />
    </>
  );
}
