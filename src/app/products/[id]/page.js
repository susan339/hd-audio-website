/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const db = {
  '15tbx100': { 
    name: '15TBX100 15" Professional LF Driver', cat: 'LF Driver', 
    main: 'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png', 
    pdf: 'https://sc02.alicdn.com/kf/Hb383bf4277d54312bb4a66cfafb4d14eo.jpg',
    imgs: [
      'https://sc02.alicdn.com/kf/A36d0f7cd77a84d39acc2da4ad4636e4a8.png',
      'https://sc02.alicdn.com/kf/H5b53a9fa6e4f48e48364a71e197a6dc0l.jpg',
      'https://sc02.alicdn.com/kf/H6c5faaacd9f74bbc91e759ebe6ccc7b0V.jpg',
      'https://sc02.alicdn.com/kf/Hadbac915b70148879cc6a68752905e626.jpg',
      'https://sc02.alicdn.com/kf/H84bc4dfdf4954e49a2ade24a77d0e64ap.jpg',
      'https://sc02.alicdn.com/kf/H1ef6972b6f614297b212802ad7764115l.jpg',
      'https://sc02.alicdn.com/kf/Hb383bf4277d54312bb4a66cfafb4d14eo.jpg'
    ],
    specs: [
      { l: 'Maximum Power', v: '2000 W' }, 
      { l: 'Fs (Resonant Freq)', v: '41 Hz' }, 
      { l: 'Sensitivity (1w/1m)', v: '97 dB' }, 
      { l: 'Voice Coil Diameter', v: '100mm (4")' }, 
      { l: 'Total Q (Qts)', v: '0.31' }, 
      { l: 'Equiv. Volume (Vas)', v: '128 L' }, 
      { l: 'Force Factor (BL)', v: '23 N/A' },
      { l: 'Effective Mass (Mms)', v: '123 g' }
    ]
  },
  '18tbx100': { 
    name: '18TBX100 18" Professional Subwoofer', cat: 'Subwoofer', 
    main: 'https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 
    pdf: 'https://sc02.alicdn.com/kf/H707137ef9abe417b89a9349cafee270be.jpg',
    imgs: ['https://sc02.alicdn.com/kf/A78ae9eb6e6874da09992e68402a8180fQ.png', 'https://sc02.alicdn.com/kf/H54b476584419482eb70e8f6414f4531az.jpg', 'https://sc02.alicdn.com/kf/H2f7a29a75a5e40ce99dbe75293fedd09T.jpg', 'https://sc02.alicdn.com/kf/H7d7e738635214a1c9e01355c2b67515dE.jpg', 'https://sc02.alicdn.com/kf/H6bf1fceae54344279b9f59db82d84059A.jpg', 'https://sc02.alicdn.com/kf/H707137ef9abe417b89a9349cafee270be.jpg'],
    specs: [{ l: 'Power Handling', v: '2400W Peak' }, { l: 'Fs', v: '34 Hz' }, { l: 'Qts', v: '0.33' }, { l: 'Vas', v: '265 L' }]
  },
  '21nc152': { 
    name: '21NC152 21" High End Subwoofer', cat: 'Subwoofer', 
    main: 'https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg',
    pdf: 'https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg',
    imgs: ['https://sc02.alicdn.com/kf/H3c86bdd1e83048df9ad37e95d1c66404l.jpg', 'https://sc02.alicdn.com/kf/H73bb88a5f4b643a0a4371c4b4e175d39d.jpg', 'https://sc02.alicdn.com/kf/H57a1b11ab09f4e2daba0bd1e4bf92ad3m.jpg', 'https://sc02.alicdn.com/kf/H505bbb5873744b24acac0f276fdde84ar.jpg', 'https://sc02.alicdn.com/kf/H6ed3366fa2304b35b21b9ecd6463f3a0R.jpg', 'https://sc02.alicdn.com/kf/H1ccd4c00370242febf8cc7a4b110e3ed5.jpg'], 
    specs: [{ l: 'Power Handling', v: '4000W Max' }, { l: 'Fs', v: '31 Hz' }, { l: 'Qts', v: '0.48' }, { l: 'Vas', v: '252.8 L' }] 
  },
  '12ndl76': { 
    name: '12NDL76 800w Neodymium Line Array Woofer Speaker 12 Inch Subwoofer', 
    cat: 'Neodymium Woofer', 
    main: 'https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png', // 主图保持不动
    pdf: 'https://sc02.alicdn.com/kf/Hf6809e5843724984bd6e363b89295dad8.jpg',
    imgs: [
      'https://sc02.alicdn.com/kf/Af79f5df638b24911a87c60587caf53b8B.png', // 主图
      'https://sc02.alicdn.com/kf/Hcf4020c94bcc461da00591825f85a5b8H.jpg', // 侧面
      'https://sc02.alicdn.com/kf/He4a878abf8e14ebd9442832d7bef77e23.jpg', // 背面磁钢
      'https://sc02.alicdn.com/kf/Head93db391b34f6f8c72c603b56efbb4m.jpg', // 接线端子细节
      'https://sc02.alicdn.com/kf/H79164637fbba472ab12ab461425252652.jpg', // 正面鼓纸
      'https://sc02.alicdn.com/kf/Hf6809e5843724984bd6e363b89295dad8.jpg'  // 技术参数与频响曲线
    ],
    specs: [
      { l: 'Nominal Power (AES)', v: '400 W' },
      { l: 'Maximum Power', v: '800 W' },
      { l: 'Fs (Resonant Freq)', v: '52 Hz' },
      { l: 'Sensitivity (1w/1m)', v: '97 dB' },
      { l: 'Frequency Response', v: '52-3.5K Hz' },
      { l: 'Voice Coil Diameter', v: '76mm (3")' },
      { l: 'Total Q (Qts)', v: '0.34' },
      { l: 'Equiv. Volume (Vas)', v: '72 L' },
      { l: 'Net Weight', v: '4.0 KG' }
    ]
  },
  '10nw64': { 
    name: '10NW64 10" Professional Neodymium Woofer', cat: 'LF Driver', 
    main: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png',
    pdf: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    imgs: ['https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png', 'https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg', 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
    specs: [{ l: 'Max Power', v: '600 W' }, { l: 'Fs', v: '59 Hz' }, { l: 'Qts', v: '0.25' }]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const p = db[id];
  const [disp, setDisp] = useState(p ? p.main : '');

  if (!p) return <div style={{ paddingTop: '200px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh', color: '#666' }}>SYNCING ASSET DATA...</div>;

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', color: 'black', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <div style={{ backgroundColor: 'white', padding: '48px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f1f3f5' }}>
            <img 
              src={disp} 
              alt={p.name} // SEO 命名优化：通过 alt 标签关联爆品标题
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginTop: '24px' }}>
            {p.imgs.map((img, i) => (
              <div key={i} onClick={() => setDisp(img)} style={{ border: disp === img ? '2px solid black' : '1px solid #dee2e6', padding: '4px', cursor: 'pointer', backgroundColor: 'white', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={img} alt={`${p.name} - view ${i + 1}`} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link href="/products" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>← Back to Assets</Link>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '32px', gap: '12px' }}>
             <div style={{ backgroundColor: '#004691', color: 'white', padding: '2px 8px', borderRadius: '4px', fontWeight: '900', fontSize: '20px' }}>CT</div>
             <span style={{ fontSize: '12px', fontWeight: '900', color: '#004691', letterSpacing: '1px' }}>CORETONE AUDIO</span>
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', margin: '16px 0', letterSpacing: '-2px', lineHeight: '1' }}>{p.name}</h2>
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
            <a href={p.pdf} target="_blank" style={{ flex: 1, border: '2px solid black', color: 'black', textAlign: 'center', padding: '24px', textDecoration: 'none', fontWeight: '900', textTransform: 'uppercase' }}>Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
}
