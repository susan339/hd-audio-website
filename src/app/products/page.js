
export default function ProductsPage() {
  const products = [
  {
    "slug": "18sw1352",
    "title": "18SW1352 18\\\" Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd08n50-16",
    "title": "HD08N50-16 8\\\" Neodymium Woofer",
    "image": "https://s.alicdn.com/@sc04/kf/Hcea1485f8a724101b30748c3e9cd7dd9j.png"
  },
  {
    "slug": "hd10n75",
    "title": "HD10N75 10\\\" Neodymium Woofer",
    "image": "https://s.alicdn.com/@sc04/kf/H7dc7672b996c4ba6ae4c746dd97f2551X.png"
  },
  {
    "slug": "hd12nc402",
    "title": "HD12NC402 12\\\" Neodymium Woofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1c616559e4b94104942626480aa96a57s.png"
  },
  {
    "slug": "hd12nl400c",
    "title": "HD12NL400C 12\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg"
  },
  {
    "slug": "hd15g401",
    "title": "HD15G401 15\\\" Ferrite Woofer",
    "image": "https://s.alicdn.com/@sc04/kf/He41fb50c244343ad992900535e53debcH.png"
  },
  {
    "slug": "hd15n401",
    "title": "HD15N401 15\\\" Neodymium Woofer",
    "image": "https://s.alicdn.com/@sc04/kf/H06d21a681c0d4453b343612f7202158dR.png"
  },
  {
    "slug": "hd15nl400c",
    "title": "HD15NL400C 15\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg"
  },
  {
    "slug": "hd15sf100",
    "title": "HD15SF100 15\\\" Ferrite Woofer",
    "image": "https://s.alicdn.com/@sc04/kf/H954484c1f4f24c78be9a5cb95693b3d6M.jpg"
  },
  {
    "slug": "hd18g401",
    "title": "HD18G401 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H8294f2bba734450dafc5367034411b83W.png"
  },
  {
    "slug": "hd18n125a",
    "title": "HD18N125A 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/Hc84ff75905d949a1bb39f8eb71f5e759t.jpg"
  },
  {
    "slug": "hd18n455",
    "title": "HD18N455 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18nc152a",
    "title": "HD18NC152A 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1f98b0f1b98f48f6a325ebfbdeb46490P.png"
  },
  {
    "slug": "hd18nw100",
    "title": "HD18NW100 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18sf130",
    "title": "HD18SF130 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18sf135",
    "title": "HD18SF135 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18sf330",
    "title": "HD18SF330 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18sw100",
    "title": "HD18SW100 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18sw115",
    "title": "HD18SW115 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18sw125",
    "title": "HD18SW125 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H698bea7bae2b49d084fcde55ac46d260n.jpg"
  },
  {
    "slug": "hd18tbw100",
    "title": "HD18TBW100 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18tbx100",
    "title": "HD18TBX100 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18x401",
    "title": "HD18X401 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd18x451",
    "title": "HD18X451 18\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H4597dc9b82b346d4b7c62a740320f198S.jpg"
  },
  {
    "slug": "hd18x455",
    "title": "HD18X455 18\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hd21fc330",
    "title": "HD21FC330 21\\\" Ferrite Subwoofer",
    "image": "ALIBABA_IMAGE_URL_OR_PLACEHOLDER"
  },
  {
    "slug": "hd21n125a",
    "title": "HD21N125A 21\\\" Neodymium Subwoofer",
    "image": "ALIBABA_IMAGE_URL_OR_PLACEHOLDER"
  },
  {
    "slug": "hd21n150a",
    "title": "HD21N150A 21\\\" Neodymium Subwoofer",
    "image": "ALIBABA_IMAGE_URL_OR_PLACEHOLDER"
  },
  {
    "slug": "hd21nc152",
    "title": "HD21NC152 21\\\" Neodymium Subwoofer",
    "image": "https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg"
  },
  {
    "slug": "hd21nc152a",
    "title": "HD21NC152A 21\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H01b9c3a7a12c4306b901375cd4e00bcbs.jpg"
  },
  {
    "slug": "hd21nl152",
    "title": "HD21NL152 21\\\" Neodymium Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H82cd13efe7be4425bc0b3037e9f52d5ar.jpg"
  },
  {
    "slug": "hd21sf2802",
    "title": "HD21SF2802 21\\\" Ferrite Subwoofer",
    "image": "ALIBABA_IMAGE_URL_OR_PLACEHOLDER"
  },
  {
    "slug": "hd21sf330-2",
    "title": "HD21SF330-2 21\\\" Ferrite Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H04c3e74274c44908add23802070638U.jpg"
  },
  {
    "slug": "hdcx1275-75",
    "title": "HDCX1275-75 12\\\" Coaxial Speaker",
    "image": "https://s.alicdn.com/@sc04/kf/H691c71da65be45ea80b1d36bc406ed18Y.jpg"
  },
  {
    "slug": "hde-1080",
    "title": "HDE-1080 Neodymium HF Driver",
    "image": "https://s.alicdn.com/@sc04/kf/Hf54cbec419ce409f9d6dd2b4201a06b2m.jpg"
  },
  {
    "slug": "hde-914",
    "title": "HDE-914 Neodymium HF Driver",
    "image": "https://s.alicdn.com/@sc04/kf/Hcdea117476054b87870ab8eedad688f8j.jpg"
  },
  {
    "slug": "hdnk-1000",
    "title": "HDNK-1000 Neodymium HF Driver",
    "image": "https://s.alicdn.com/@sc04/kf/H0103de543a04459cb6d8d94f50c12f0eh.jpg"
  },
  {
    "slug": "hdpd1845",
    "title": "HD/PD1845 18\\\" Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hdpd1852-2",
    "title": "HD/PD1852-2 18\\\" Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "hdw-1880",
    "title": "HDW-1880 18\\\" Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  },
  {
    "slug": "subwoofer-18",
    "title": "18 Inch High-Power Subwoofer",
    "image": "https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg"
  }
];

  return (
    <main className="bg-white py-24">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Collection</h2>
          <h1 className="text-5xl font-bold tracking-tight">Professional Speakers</h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.slug} className="group cursor-pointer">
              <div className="aspect-square bg-gray-50 mb-6 overflow-hidden flex items-center justify-center p-8">
                <img 
                  src={product.image.replace('ALIBABA_IMAGE_URL_OR_PLACEHOLDER', 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg')} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{product.title}</h3>
              <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Professional Audio</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
