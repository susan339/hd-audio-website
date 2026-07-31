import React from 'react';
import Link from 'next/link';

export default function ProductDetailPage({ params }) {
  const id = params.id;

  const db = {
    '21nc152': { 
      name: '21NC152 21" High End Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png', 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg'], 
      specs: { 'Power': '4000W Peak', 'Fs': '32 Hz', 'Re': '3.3 Ohm', 'Qts': '0.30', 'Vas': '168 L', 'BL': '32.5 T.m', 'Mms': '460 g', 'Sens': '97dB' },
      datasheet: 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg'
    },
    '18tbx100': { 
      name: '18TBX100 18" Professional Subwoofer', cat: 'Subwoofer', 
      imgs: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg'], 
      specs: { 'Power': '2400W Peak', 'Fs': '30 Hz', 'Re': '5.1 Ohm', 'Qts': '0.31', 'Vas': '256 L', 'BL': '25.5 T.m', 'Mms': '209 g', 'Sens': '98dB' },
      datasheet: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg'
    },
    '15tbx100': { 
      name: '15TBX100 15" Professional LF Driver', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'], 
      specs: { 'Power': '2000W Peak', 'Fs': '35 Hz', 'Re': '5.1 Ohm', 'Qts': '0.28', 'Vas': '113 L', 'BL': '22.1 T.m', 'Mms': '163 g', 'Sens': '96dB' },
      datasheet: 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'
    },
    '10nw64': { 
      name: '10NW64 10" Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/A927cc47369c54ce28f6a0d4883609a7a6.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
      specs: { 'Power': '600W Max', 'Fs': '59 Hz', 'Re': '5.2 Ohm', 'Qts': '0.25', 'Vas': '26 L', 'BL': '18.3 T.m', 'Mms': '47 g', 'Sens': '96dB' },
      datasheet: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'
    },
    '12ndl76': { 
      name: '12NDL76 12" Professional Neodymium Woofer', cat: 'LF Driver', 
      imgs: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg'], 
      specs: { 'Power': '800W Peak', 'Fs': '50 Hz', 'Re': '5.3 Ohm', 'Qts': '0.20', 'Vas': '73 L', 'Sens': '100dB' },
      datasheet: 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg'
    }
  };

  const p = db[id];
  if (!p) return <div style={{ paddingTop: '100px', textAlign: 'center', color: 'white' }}>Asset Not Found</div>;

  return (
    <div style={{ backgroundColor: '#0A0A0A', color: 'white', minHeight: '100vh', padding: '128px 24px' }}>
      <Link href="/products" style={{ color: '#A3A3A3', textDecoration: 'none', fontSize: '12px' }}>← Back to Catalog</Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginTop: '48px' }}>
        <div>
          <div style={{ backgroundColor: 'white', padding: '48px', aspectRatio: '1/1' }}>
            <img src={p.imgs[0]} alt={p.name} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            {p.imgs.map((img, i) => (
              <img key={i} src={img} style={{ width: '80px', height: '80px', border: '1px solid #262626', opacity: '0.6' }} alt="" />
            ))}
          </div>
        </div>

        <div>
          <span style={{ backgroundColor: '#E11D4822', color: '#E11D48', padding: '4px 12px', fontSize: '10px', fontWeight: 'bold' }}>{p.cat}</span>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '24px 0' }}>{p.name}</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: '#262626', border: '1px solid #262626' }}>
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k} style={{ backgroundColor: '#0A0A0A', padding: '24px' }}>
                <p style={{ fontSize: '10px', color: '#A3A3A3' }}>{k}</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{v}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', display: 'flex', gap: '24px' }}>
            <a href="https://wa.me/8615521083699" target="_blank" style={{ flex: 1, backgroundColor: '#E11D48', color: 'white', textAlign: 'center', padding: '20px', textDecoration: 'none', fontWeight: 'bold' }}>INQUIRY NOW</a>
            <a href={p.datasheet} target="_blank" style={{ flex: 1, border: '1px solid white', color: 'white', textAlign: 'center', padding: '20px', textDecoration: 'none', fontWeight: 'bold' }}>DOWNLOAD PDF SPECS</a>
          </div>
        </div>
      </div>
    </div>
  );
}
