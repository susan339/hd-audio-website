/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: '21nc152', name: '21NC152 21" High End Subwoofer', cat: 'Subwoofer', img: 'https://sc02.alicdn.com/kf/Ae6126836c5404d778810df5af8276f7dD.png' },
    { id: '18tbx100', name: '18TBX100 18" Professional Subwoofer', cat: 'Subwoofer', img: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png' },
    { id: '15tbx100', name: '15TBX100 15" Professional LF Driver', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png' },
    { id: '12ndl76', name: '12NDL76 12" Professional Neodymium Woofer', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png' },
    { id: '10nw64', name: '10NW64 10" Professional Neodymium Woofer', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png' }
  ];

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', color: 'black', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '80px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '80px', letterSpacing: '-4px', borderBottom: '1px solid #dee2e6', paddingBottom: '32px' }}>Our Collection</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '40px' }}>
          {products.map((p) => (
            <Link href={`/products/${p.id}`} key={p.id} style={{ display: 'block', backgroundColor: 'white', border: '1px solid #f1f3f5', textDecoration: 'none', color: 'inherit', transition: '0.3s' }}>
              <div style={{ aspectRatio: '1/1', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', overflow: 'hidden', position: 'relative', borderBottom: '1px solid #f8f9fa' }}>
                <img src={p.img} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                <div style={{ position: 'absolute', top: '24px', left: '24px', backgroundColor: 'black', color: 'white', fontSize: '10px', fontWeight: '900', padding: '4px 12px', letterSpacing: '1px' }}>{p.cat}</div>
              </div>
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '24px', height: '3.5rem', overflow: 'hidden' }}>{p.name}</h3>
                <div style={{ width: '100%', padding: '16px 0', border: '2px solid black', textAlign: 'center', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase' }}>Exploration Details →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
