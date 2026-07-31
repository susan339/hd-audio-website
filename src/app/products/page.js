/* eslint-disable */
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
    <div style={{ backgroundColor: '#0A0A0A', color: 'white', minHeight: '100vh', padding: '160px 24px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '64px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '64px' }}>Our Collection</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
        {products.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id} style={{ backgroundColor: '#141414', border: '1px solid #262626', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ aspectRatio: '1/1', padding: '32px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={p.img} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '32px' }}>
              <p style={{ fontSize: '10px', color: '#E11D48', fontWeight: 'bold', textTransform: 'uppercase' }}>{p.cat}</p>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '12px 0' }}>{p.name}</h3>
              <div style={{ color: '#A3A3A3', fontSize: '10px', border: '1px solid #262626', padding: '10px', textAlign: 'center' }}>VIEW DETAILS →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
