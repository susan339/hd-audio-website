/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: '21nc152', name: '21NC152 21" High End Subwoofer', cat: 'Subwoofer', img: 'https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png' },
    { id: '18tbx100', name: '18TBX100 18" Professional Subwoofer', cat: 'Subwoofer', img: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png' },
    { id: '15tbx100', name: '15TBX100 15" Professional LF Driver', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png' },
    { id: '12ndl76', name: '12NDL76 12" Professional Neodymium Woofer', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png' },
    { id: '10nw64', name: '10NW64 10" Professional Neodymium Woofer', cat: 'LF Driver', img: 'https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png' }
  ];

  return (
    <div style={{ backgroundColor: '#0A0A0A', color: 'white', minHeight: '100vh', padding: '160px 24px 80px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '80px', letterSpacing: '-4px' }}>Our Collection</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {products.map((p) => (
            <Link href={`/products/${p.id}`} key={p.id} style={{ backgroundColor: '#141414', border: '1px solid #262626', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'all 0.4s' }}>
              <div style={{ aspectRatio: '1/1', padding: '40px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={p.img} alt={p.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <p style={{ fontSize: '10px', color: '#E11D48', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '2px' }}>{p.cat}</p>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '32px' }}>{p.name}</h3>
                <div style={{ color: '#A3A3A3', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', border: '1px solid #262626', padding: '12px', textAlign: 'center', letterSpacing: '1px' }}>View Asset Details →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
