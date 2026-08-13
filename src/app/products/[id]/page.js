/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const db = {
  // --- 新增产品：DN-4599 ---
  'dn-4599': {
    name: 'DN-4599 Dual Voice Coil Midrange 3.5-inch Neodymium Compression Driver',
    cat: 'Compression Driver',
    main: 'https://sc02.alicdn.com/kf/H2299c61e60234dcea91535dd708f5bc7y.jpg', // 第二张图作为主封面
    pdf: 'https://sc02.alicdn.com/kf/H02180dd7481c43079ede08669575302bl.jpg', // 第一张图作为参数下载
    imgs: [
      'https://sc02.alicdn.com/kf/H2299c61e60234dcea91535dd708f5bc7y.jpg', // 封面
      'https://sc02.alicdn.com/kf/H02180dd7481c43079ede08669575302bl.jpg', // 参数图
      'https://sc02.alicdn.com/kf/H4e0b4f66cc1c4f0d924301390a47dc95I.jpg',
      'https://sc02.alicdn.com/kf/H5f65cb018bcd482098ff4a5fb0f00bd2o.jpg',
      'https://sc02.alicdn.com/kf/H261a866617c445df87397938e3c9710bW.jpg',
      'https://sc02.alicdn.com/kf/H225247511ea040bfae8cffd654cb96ecr.jpg',
      'https://sc02.alicdn.com/kf/H1d3507aa4088474ea685aa8c964f29cbA.jpg'
    ],
    specs: [
      { l: 'Throat Diameter', v: '50/2 mm/inch' },
      { l: 'Nominal Power Handling', v: '400 W' },
      { l: 'Program Power', v: '800 W' },
      { l: 'Sensitivity (1w/1m)', v: '123 dB' },
      { l: 'Frequency Range', v: '300-8K Hz' },
      { l: 'Voice Coil Diameter', v: '3.5/90*2 PCS mm/inch' },
      { l: 'Magnet Grade', v: 'Neodymium' },
      { l: 'Net Weight', v: '3.2 KG' }
    ]
  },
  // --- 原有 6 款核心产品（保持不动） ---
  '08n12': { 
    name: '08N12 Woofer Speaker Bass Professional Subwoofer 8 Inch Speaker', cat: 'LF DRIVER', 
    main: 'https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg', 
    pdf: 'https://sc02.alicdn.com/kf/Hff04c6e35b1e4fc293411c0f03264f9c4.jpg',
    imgs: ['https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg','https://sc02.alicdn.com/kf/Hff04c6e35b1e4fc293411c0f03264f9c4.jpg','https://sc02.alicdn.com/kf/He1c846b0a6104cc79226763caebf32ddN.jpg','https://sc02.alicdn.com/kf/Hb1b20a6737e347fea045d8415c5ba516h.jpg','https://sc02.alicdn.com/kf/H733cc14dce8e482394f12ce021c2c646b.jpg','https://sc02.alicdn.com/kf/H6f7b70e6202d41df8bb72561946caf63x.jpg','https://sc02.alicdn.com/kf/H5f5d46ff8c4645929015523994dfb16eH.jpg'],
    specs: [{ l: 'Nominal Power (AES)', v: '150 W' },{ l: 'Maximum Power', v: '300 W' },{ l: 'Sensitivity (1w/1m)', v: '92 dB' },{ l: 'Frequency Response', v: '84-3.2K Hz' },{ l: 'Voice Coil Diameter', v: '50mm (2")' },{ l: 'Fs (Resonant Freq)', v: '84 Hz' },{ l: 'Net Weight', v: '1.8 KG' }]
  },
  '10nw64': { 
    name: '10NW64 10" Professional Neodymium Woofer Speaker LF Driver', cat: 'LF Driver', 
    main: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png',
    pdf: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    imgs: ['https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png','https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg','https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
    specs: [{ l: 'Nominal Power (AES)', v: '300 W' },{ l: 'Maximum Power', v: '600 W' },{ l: 'Fs (Resonant Freq)', v: '59 Hz' },{ l: 'Total Q (Qts)', v: '0.25' }]
  },
  '12ndl76': { 
    name: '12NDL76 800w Neodymium Line Array Woofer Speaker 12 Inch Subwoofer', cat: 'Neodymium Woofer', 
    main: 'https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png', 
    pdf: 'https://sc02.alicdn.com/kf/Hf6809e5843724984bd6e363b89295dad8.jpg',
    imgs: ['https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png','https://sc02.alicdn.com/kf/Hcf4020c94bcc461da00591825f85a5b8H.jpg','https://sc02.alicdn.com/kf/He4a878abf8e14ebd9442832d7bef77e23.jpg','https://sc02.alicdn.com/kf/Head93db391b34f6f8c72c603b56efbb4m.jpg','https://sc02.alicdn.com/kf/H79164637fbba472ab12ab461425252652.jpg','https://sc02.alicdn.com/kf/Hf6809e5843724984bd6e363b89295dad8.jpg'],
    specs: [{ l: 'Nominal Power (AES)', v: '400 W' },{ l: 'Maximum Power', v: '800 W' },{ l: 'Fs (Resonant Freq)', v: '52 Hz' },{ l: 'Sensitivity (1w/1m)', v: '97 dB' },{ l: 'Total Q (Qts)', v: '0.34' },{ l: 'Net Weight', v: '4.0 KG' }]
  },
  '15tbx100': { 
    name: '15TBX100 15" Professional LF Driver Bass Speaker 2000W Max', cat: 'LF Driver', 
    main: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 
    pdf: 'https://sc02.alicdn.com/kf/Hb383bf4277d54312bb4a66cfafb4d14eo.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png','https://sc02.alicdn.com/kf/H5b53a9fa6e4f48e48364a71e197a6dc0l.jpg','https://sc02.alicdn.com/kf/H6c5faaacd9f74bbc91e759ebe6ccc7b0V.jpg','https://sc02.alicdn.com/kf/Hadbac915b70148879cc6a68752905e626.jpg','https://sc02.alicdn.com/kf/H84bc4dfdf4954e49a2ade24a77d0e64ap.jpg','https://sc02.alicdn.com/kf/H1ef6972b6f614297b212802ad7764115l.jpg','https://sc02.alicdn.com/kf/Hb383bf4277d54312bb4a66cfafb4d14eo.jpg'],
    specs: [{ l: 'Maximum Power', v: '2000 W' },{ l: 'Fs (Resonant Freq)', v: '41 Hz' },{ l: 'Sensitivity (1w/1m)', v: '97 dB' },{ l: 'Voice Coil Diameter', v: '100mm (4")' },{ l: 'Total Q (Qts)', v: '0.31' },{ l: 'Equiv. Volume (Vas)', v: '128 L' }]
  },
  '18tbx100': { 
    name: '18TBX100 18" Professional Subwoofer Bass Speaker 2400W Peak', cat: 'Subwoofer', 
    main: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 
    pdf: 'https://sc02.alicdn.com/kf/H707137ef9abe417b89a9349cafee270be.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png','https://sc02.alicdn.com/kf/H54b476584419482eb70e8f6414f4531az.jpg','https://sc02.alicdn.com/kf/H2f7a29a75a5e40ce99dbe75293fedd09T.jpg','https://sc02.alicdn.com/kf/H7d7e738635214a1c9e01355c2b67515dE.jpg','https://sc02.alicdn.com/kf/H6bf1fceae54344279b9f59db82d84059A.jpg','https://sc02.alicdn.com/kf/H707137ef9abe417b89a9349cafee270be.jpg'],
    specs: [{ l: 'Power Handling', v: '2400W Peak' }, { l: 'Fs', v: '34 Hz' }, { l: 'Qts', v: '0.33' }, { l: 'Vas', v: '265 L' }]
  },
  '21nc152': { 
    name: '21NC152 21" High End Neodymium Subwoofer 4000W Max', cat: 'Subwoofer', 
    main: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
    pdf: 'https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg',
    imgs: ['https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg','https://sc02.alicdn.com/kf/H73bb88a5f4b643a0a4371c4b4e175d39d.jpg','https://sc02.alicdn.com/kf/H57a1b11ab09f4e2daba0bd1e4bf92ad3m.jpg','https://sc02.alicdn.com/kf/H505bbb5873744b24acac0f276fdde84ar.jpg','https://sc02.alicdn.com/kf/H6ed3366fa2304b35b21b9ecd6463f3a0R.jpg','https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg'], 
    specs: [{ l: 'Power Handling', v: '4000W Max' }, { l: 'Fs', v: '31 Hz' }, { l: 'Qts', v: '0.48' }, { l: 'Vas', v: '252.8 L' }] 
  }
};

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id; 
  const p = db[id];
  const [disp, setDisp] = useState('');

  useEffect(() => {
    if (p) setDisp(p.main);
  }, [p]);

  if (!p) return <div style={{ paddingTop: '200px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh', color: '#666' }}>SYNCING ASSET DATA...</div>;

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', color: 'black', fontFamily: 'sans-serif' }}>
      <title>{`${p.name} | CORETONE AUDIO`}</title>
      <meta name="description" content={`Leading Professional Audio Driver Manufacturer. Specs: ${p.specs.map(s => `${s.l}:${s.v}`).join(', ')}`} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <div style={{ backgroundColor: 'white', padding: '48px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f1f3f5', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={disp} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginTop: '24px' }}>
            {p.imgs.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setDisp(img)} 
                style={{ border: disp === img ? '2px solid #2563EB' : '1px solid #dee2e6', padding: '4px', cursor: 'pointer', backgroundColor: 'white', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', opacity: disp === img ? 1 : 0.6 }}
              >
                <img src={img} alt="Thumbnail" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link href="/products" style={{ color: '#2563EB', textDecoration: 'none', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>← Back to Catalog</Link>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '32px', gap: '12px' }}>
             <div style={{ backgroundColor: '#000', color: 'white', padding: '2px 8px', borderRadius: '4px', fontWeight: '900', fontSize: '20px' }}>CT</div>
             <span style={{ fontSize: '12px', fontWeight: '900', color: '#2563EB', letterSpacing: '1px' }}>CORETONE AUDIO ENGINEERING</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', margin: '16px 0', letterSpacing: '-2px', lineHeight: '1.1' }}>{p.name}</h1>
          
          <div style={{ border: '1px solid #dee2e6', backgroundColor: 'white', marginBottom: '48px', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 40px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', fontSize: '10px', fontWeight: '900', color: '#666', textTransform: 'uppercase' }}>Technical Telemetry</div>
            {p.specs.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '16px 40px', borderBottom: '1px solid #f1f3f5' }}>
                <span style={{ color: '#999', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase' }}>{s.l}</span>
                <span style={{ textAlign: 'right', fontWeight: '900', fontSize: '13px' }}>{s.v}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <a href={`https://wa.me/8615521083699?text=I'm interested in ${p.name}`} target="_blank" rel="noopener noreferrer" style={{ flex: 1, backgroundColor: '#2563EB', color: 'white', textAlign: 'center', padding: '24px', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase', borderRadius: '8px' }}>Inquiry Now</a>
            <a href={p.pdf} target="_blank" rel="noopener noreferrer" style={{ flex: 1, border: '2px solid black', color: 'black', textAlign: 'center', padding: '24px', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase', borderRadius: '8px' }}>Download PDF</a>
          </div>
          <p style={{ marginTop: '32px', textAlign: 'center', fontSize: '10px', color: '#999', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Precision Engineered in Guangzhou, China</p>
        </div>
      </div>
    </div>
  );
}
