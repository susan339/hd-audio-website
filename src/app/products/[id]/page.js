import React from 'react';
import ProductDetailClient from '../../../components/ProductDetailClient';

// 使用您提供的 100% 准确的数据库
const db = {
  '08n12': { 
    name: '08N12 Woofer Speaker Bass Professional Subwoofer 8 Inch Speaker', 
    cat: 'LF DRIVER', 
    main: 'https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg', 
    pdf: 'https://sc02.alicdn.com/kf/Hff04c6e35b1e4fc293411c0f03264f9c4.jpg',
    imgs: ['https://sc02.alicdn.com/kf/H4cdbc222344e4c63b9fdc3070565eddfr.jpg','https://sc02.alicdn.com/kf/Hff04c6e35b1e4fc293411c0f03264f9c4.jpg','https://sc02.alicdn.com/kf/He1c846b0a6104cc79226763caebf32ddN.jpg','https://sc02.alicdn.com/kf/Hb1b20a6737e347fea045d8415c5ba516h.jpg','https://sc02.alicdn.com/kf/H733cc14dce8e482394f12ce021c2c646b.jpg','https://sc02.alicdn.com/kf/H6f7b70e6202d41df8bb72561946caf63x.jpg','https://sc02.alicdn.com/kf/H5f5d46ff8c4645929015523994dfb16eH.jpg'],
    specs: [{ l: 'Nominal Power (AES)', v: '150 W' },{ l: 'Maximum Power', v: '300 W' },{ l: 'Sensitivity (1w/1m)', v: '92 dB' },{ l: 'Frequency Response', v: '84-3.2K Hz' },{ l: 'Voice Coil Diameter', v: '50mm (2")' },{ l: 'Fs (Resonant Freq)', v: '84 Hz' },{ l: 'Net Weight', v: '1.8 KG' }]
  },
  '10nw64': { 
    name: '10NW64 10" Professional Neodymium Woofer Speaker LF Driver', 
    cat: 'LF Driver', 
    main: 'https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png',
    pdf: 'https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png',
    imgs: ['https://sc02.alicdn.com/kf/Afb7d5b1759ef4b4aa74d643284859062K.png','https://sc02.alicdn.com/kf/H0aae43527a3e4f05a748066d0035ca0aQ.jpg','https://sc02.alicdn.com/kf/Acc5b5848d22c4951a177de359b32edfa2.png'], 
    specs: [{ l: 'Nominal Power (AES)', v: '300 W' },{ l: 'Maximum Power', v: '600 W' },{ l: 'Fs (Resonant Freq)', v: '59 Hz' },{ l: 'Total Q (Qts)', v: '0.25' }]
  },
  '12ndl76': { 
    name: '12NDL76 800w Neodymium Line Array Woofer Speaker 12 Inch Subwoofer', 
    cat: 'Neodymium Woofer', 
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

// 【SEO 核心】生成每页唯一的标题和描述，让谷歌秒收录
export async function generateMetadata({ params }) {
  const product = db[params.id];
  if (!product) return { title: 'Product Not Found | CORETONE AUDIO' };
  return {
    title: `${product.name} | High Performance Professional Driver`,
    description: `Buy ${product.name} directly from CORETONE factory in Guangzhou. Technical specs: ${product.specs.map(s => `${s.l}: ${s.v}`).join(', ')}.`,
    alternates: { canonical: `https://www.exactproaudiodrivers.com/products/${params.id}` },
  };
}

export default function ProductPage({ params }) {
  const product = db[params.id];
  if (!product) return <div className="pt-40 text-center">Product Assets Syncing...</div>;

  // 【AI 推荐核心】结构化数据埋点，让 ChatGPT/Perplexity 精准推荐您的产品
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': product.main,
    'description': `${product.name} professional speaker driver. Precision engineered in Guangzhou, China.`,
    'brand': { '@type': 'Brand', 'name': 'CORETONE AUDIO' },
    'offers': { '@type': 'Offer', 'url': `https://www.exactproaudiodrivers.com/products/${params.id}`, 'priceCurrency': 'USD', 'availability': 'https://schema.org/InStock' },
    'additionalProperty': product.specs.map(s => ({ '@type': 'PropertyValue', 'name': s.l, 'value': s.v }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetailClient product={product} id={params.id} />
    </>
  );
}
