/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const productData = {
  '21nc152': {
    name: '21NC152 21" High End Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
    datasheetImage: 'https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg',
    moreImages: [
      'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
      'https://sc02.alicdn.com/kf/H73bb88a5f4b643a0a4371c4b4e175d39d.jpg',
      'https://sc02.alicdn.com/kf/H57a1b11ab09f4e2daba0bd1e4bf92ad3m.jpg',
      'https://sc02.alicdn.com/kf/H505bbb5873744b24acac0f276fdde84ar.jpg',
      'https://sc02.alicdn.com/kf/H6ed3366fa2304b35b21b9ecd6463f3a0R.jpg',
      'https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg'
    ],
    specs: [{ label: 'Power (AES)', value: '2000W' }, { label: 'Power (Max)', value: '4000W' }, { label: 'Fs', value: '31 Hz' }, { label: 'Re', value: '5.6 Ohm' }, { label: 'Qts', value: '0.48' }, { label: 'Vas', value: '252.8 L' }, { label: 'BL', value: '37 Tm' }, { label: 'Le', v: '1.75 mH' }]
  },
  '18tbx100': {
    name: '18TBX100 18" Professional Subwoofer',
    mainImage: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'],
    specs: [{ label: 'Power', value: '2400W Peak' }, { label: 'Fs', value: '30 Hz' }, { label: 'Qts', value: '0.31' }, { label: 'Vas', value: '256 L' }]
  },
  '15tbx100': {
    name: '15TBX100 15" Professional LF Driver',
    mainImage: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg'],
    specs: [{ label: 'Power', value: '2000W Peak' }, { label: 'Fs', value: '35 Hz' }, { label: 'Sens', value: '96 dB' }]
  },
  '12ndl76': {
    name: '12NDL76 12" Professional Neodymium Woofer',
    mainImage: 'https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg',
    moreImages: ['https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'],
    specs: [{ label: 'Peak Power', value: '800 W' }, { label: 'Fs', value: '50 Hz' }, { label: 'Qts', value: '0.20' }, { label: 'Voice Coil', value: '76mm' }]
  },
  '10nw64': {
    name: '10NW64 10" Professional Neodymium Woofer',
    mainImage: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png',
    datasheetImage: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    moreImages: ['https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg'],
    specs: [{ label: 'Max Power', value: '600 W' }, { label: 'Fs', value: '59 Hz' }, { label: 'Qts', value: '0.25' }]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? productData[id] : null;
  const [disp, setDisp] = useState(product ? product.mainImage : '');

  if (!product) return <div style={{ paddingTop: '200px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh', color: '#666' }}>ASSET NODE OFFLINE...</div>;

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', color: 'black', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <div style={{ backgroundColor: 'white', padding: '48px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f1f3f5' }}>
            <img src={disp} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', marginTop: '24px' }}>
            {product.moreImages.map((img, i) => (
              <div key={i} onClick={() => setDisp(img)} style={{ border: disp === img ? '2px solid black' : '1px solid #dee2e6', padding: '4px', cursor: 'pointer', backgroundColor: 'white', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link href="/products" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>← Back to Assets</Link>
          <h2 style={{ fontSize: '56px', fontWeight: '900', textTransform: 'uppercase', margin: '32px 0', letterSpacing: '-2px' }}>{product.name}</h2>
          <div style={{ border: '1px solid #dee2e6', backgroundColor: 'white', marginBottom: '48px' }}>
            <div style={{ padding: '16px 40px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', fontSize: '10px', fontWeight: '900', color: '#adb5bd', textTransform: 'uppercase' }}>Technical Telemetry</div>
            {product.specs.map(s => (
              <div key={s.label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '16px 40px', borderBottom: '1px solid #f1f3f5' }}>
                <span style={{ color: '#adb5bd', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase' }}>{s.label}</span>
                <span style={{ textAlign: 'right', fontWeight: '900', fontSize: '13px' }}>{s.value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="https://wa.me/8615521083699" target="_blank" style={{ flex: 1, backgroundColor: '#2563EB', color: 'white', textAlign: 'center', padding: '24px', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase' }}>Inquiry Now</a>
            <a href={product.datasheetImage} target="_blank" style={{ flex: 1, border: '2px solid black', color: 'black', textAlign: 'center', padding: '24px', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase' }}>Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
