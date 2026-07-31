/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const db = {
  '21nc152': {
    name: '21NC152 21" High End Subwoofer',
    main: 'https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png',
    datasheet: 'https://sc02.alicdn.com/kf/H59244c55478f482097993793a0e721c3f.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A936e4fd63dbf48e79c3b40d22dc41c8fN.png', 'https://sc02.alicdn.com/kf/Hf3f2d988eaf0468db650dd2d05e6f088i.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg', 'https://sc02.alicdn.com/kf/Hf93507b974e14066965e6ce2d508e6059.jpg'],
    specs: [{ l: 'Power', v: '4000W Peak' }, { l: 'Fs', v: '32 Hz' }, { l: 'Qts', v: '0.30' }, { l: 'Vas', v: '168 L' }, { l: 'Sens', v: '97 dB' }, { l: 'Coil', v: '153mm' }]
  },
  '18tbx100': {
    name: '18TBX100 18" Professional Subwoofer',
    main: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png',
    datasheet: 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/Hdbcc4cabe1024dfb9210c95c7944ee40J.jpg', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg'],
    specs: [{ l: 'Power', v: '2400W Peak' }, { l: 'Fs', v: '30 Hz' }, { l: 'Qts', v: '0.31' }, { l: 'Sens', v: '98 dB' }, { l: 'Coil', v: '100mm' }]
  },
  '15tbx100': {
    name: '15TBX100 15" Professional LF Driver',
    main: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png',
    datasheet: 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg'],
    specs: [{ l: 'Power', v: '2000W Peak' }, { l: 'Fs', v: '35 Hz' }, { l: 'Sens', v: '96 dB' }, { l: 'Vas', v: '113 L' }]
  },
  '12ndl76': {
    name: '12NDL76 12" Professional Neodymium Woofer',
    main: 'https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png',
    datasheet: 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg',
    imgs: ['https://sc02.alicdn.com/kf/Af414e56b3b954c16a1a87934dc56284es.png', 'https://sc02.alicdn.com/kf/H0c065ca85a044873a0e04aedb2063de0W.jpg', 'https://sc02.alicdn.com/kf/H13eb77b0713c4712a3a6dd5cd5e55398l.jpg'],
    specs: [{ l: 'Power', v: '800W Peak' }, { l: 'Fs', v: '50 Hz' }, { l: 'Sens', v: '100 dB' }, { l: 'Voice Coil', v: '76mm' }]
  },
  '10nw64': {
    name: '10NW64 10" Professional Neodymium Woofer',
    main: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png',
    datasheet: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    imgs: ['https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/H6b31a62135254b64ac8de6a39fcfe683h.jpg', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'],
    specs: [{ l: 'Max Power', v: '600 W' }, { l: 'Fs', v: '59 Hz' }, { l: 'Qts', v: '0.25' }, { l: 'Vas', v: '26 L' }, { l: 'Coil', v: '64mm' }]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const p = db[id];
  const [disp, setDisp] = useState(p?.main || '');

  if (!p) return <div style={{ paddingTop: '200px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh' }}>ASSET NODE OFFLINE</div>;

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', color: 'black', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <div style={{ backgroundColor: 'white', padding: '48px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f1f3f5' }}>
            <img src={disp} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginTop: '24px' }}>
            {p.imgs.map((img, i) => (
              <div key={i} onClick={() => setDisp(img)} style={{ border: disp === img ? '2px solid #2563EB' : '1px solid #dee2e6', padding: '4px', cursor: 'pointer', backgroundColor: 'white' }}>
                <img src={img} alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link href="/products" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>← Back to Assets</Link>
          <h2 style={{ fontSize: '56px', fontWeight: '900', textTransform: 'uppercase', margin: '32px 0', letterSpacing: '-2px' }}>{p.name}</h2>
          <div style={{ border: '1px solid #dee2e6', backgroundColor: 'white', marginBottom: '48px' }}>
            <div style={{ padding: '16px 40px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', fontSize: '10px', fontWeight: '900', color: '#adb5bd', textTransform: 'uppercase' }}>Technical Telemetry</div>
            {p.specs.map(s => (
              <div key={s.l} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '16px 40px', borderBottom: '1px solid #f1f3f5' }}>
                <span style={{ color: '#adb5bd', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase' }}>{s.l}</span>
                <span style={{ textAlign: 'right', fontWeight: '900', fontSize: '13px' }}>{s.v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="https://wa.me/8615521083699" target="_blank" style={{ flex: 1, backgroundColor: '#2563EB', color: 'white', textAlign: 'center', padding: '24px', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase' }}>Inquiry Now</a>
            <a href={p.datasheet} target="_blank" style={{ flex: 1, border: '2px solid black', color: 'black', textAlign: 'center', padding: '24px', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase' }}>Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
