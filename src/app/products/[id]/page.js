/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const db = {
  'hd12nl400c': {
  'name': 'HD12NL400C 12\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '12 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '400 W'
}, {
  'l': 'Sensitivity',
  'v': '96 dB'
}]
},
  'hd10n75': {
  'name': 'HD10N75 10\" Neodymium Woofer',
  'cat': 'Woofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H7dc7672b996c4ba6ae4c746dd97f2551X.png',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H7dc7672b996c4ba6ae4c746dd97f2551X.png'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '10 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '350 W'
}, {
  'l': 'Voice Coil Diameter',
  'v': '75 mm'
}]
},
  'hd18sf130': {
  'name': 'HD18SF130 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1200 W'
}, {
  'l': 'Frequency Response',
  'v': '38-1200 Hz'
}, {
  'l': 'Fs',
  'v': '38 Hz'
}]
},
  'hd18nw100': {
  'name': 'HD18NW100 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1200 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1000 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hd18n125a': {
  'name': 'HD18N125A 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/Hc84ff75905d949a1bb39f8eb71f5e759t.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/Hc84ff75905d949a1bb39f8eb71f5e759t.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1200 W'
}, {
  'l': 'Frequency Response',
  'v': '40-1500 Hz'
}, {
  'l': 'Fs',
  'v': '40 Hz'
}]
},
  'hd18sf135': {
  'name': 'HD18SF135 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1000 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hdpd1852-2': {
  'name': 'HD/PD1852-2 18\" Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1000 W'
}, {
  'l': 'Frequency Response',
  'v': '30-2000 Hz'
}, {
  'l': 'Fs',
  'v': '30 Hz'
}]
},
  'hde-1080': {
  'name': 'HDE-1080 Neodymium HF Driver',
  'cat': 'HF Driver',
  'main': 'https://s.alicdn.com/@sc04/kf/Hf54cbec419ce409f9d6dd2b4201a06b2m.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/Hf54cbec419ce409f9d6dd2b4201a06b2m.jpg'],
  'specs': [{
  'l': 'Throat Diameter',
  'v': '1.4 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Voice Coil Diameter',
  'v': '100 mm (4.0 inch)'
}, {
  'l': 'Magnet Type',
  'v': 'Neodymium'
}]
},
  'hd18n455': {
  'name': 'HD18N455 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '38-1200 Hz'
}, {
  'l': 'Fs',
  'v': '38 Hz'
}]
},
  'hdw-1880': {
  'name': 'HDW-1880 18\" Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1000 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1500 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hdcx1275-75': {
  'name': 'HDCX1275-75 12\" Coaxial Speaker',
  'cat': 'Coaxial Speaker',
  'main': 'https://s.alicdn.com/@sc04/kf/H691c71da65be45ea80b1d36bc406ed18Y.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H691c71da65be45ea80b1d36bc406ed18Y.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '12 inch'
}, {
  'l': 'Power Handling (AES)',
  'v': '400 W'
}, {
  'l': 'LF Voice Coil',
  'v': '75 mm (3 inch)'
}, {
  'l': 'HF Voice Coil',
  'v': '75 mm (3 inch)'
}]
},
  'hd21nl152': {
  'name': 'HD21NL152 21\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H82cd13efe7be4425bc0b3037e9f52d5ar.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H82cd13efe7be4425bc0b3037e9f52d5ar.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '34-1500 Hz'
}, {
  'l': 'Fs',
  'v': '34 Hz'
}]
},
  'subwoofer-18': {
  'name': '18 Inch High-Power Subwoofer',
  'cat': 'Subwoofer',
  'main': '',
  'pdf': '#',
  'imgs': [],
  'specs': [{
  'l': 'Power Handling',
  'v': '1200W RMS'
}, {
  'l': 'Frequency Range',
  'v': '35Hz - 1000Hz'
}, {
  'l': 'Impedance',
  'v': '8 Ohms'
}]
},
  'hd21sf2802': {
  'name': 'HD21SF2802 21\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'ALIBABA_IMAGE_URL_OR_PLACEHOLDER',
  'pdf': '#',
  'imgs': ['ALIBABA_IMAGE_URL_OR_PLACEHOLDER'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1800 W'
}, {
  'l': 'Frequency Response',
  'v': '34-1200 Hz'
}, {
  'l': 'Fs',
  'v': '34 Hz'
}]
},
  'hd15nl400c': {
  'name': 'HD15NL400C 15\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/Hfdeb7c97246f4c289e9d539223ba06fdH.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '15 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '400 W'
}, {
  'l': 'Sensitivity',
  'v': '97 dB'
}, {
  'l': 'Frequency Range',
  'v': '45-2500 Hz'
}]
},
  'hd15g401': {
  'name': 'HD15G401 15\" Ferrite Woofer',
  'cat': 'Woofer',
  'main': 'https://s.alicdn.com/@sc04/kf/He41fb50c244343ad992900535e53debcH.png',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/He41fb50c244343ad992900535e53debcH.png'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '15 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '800 W'
}, {
  'l': 'Maximum Power',
  'v': '1600 W'
}, {
  'l': 'Sensitivity',
  'v': '98 dB'
}]
},
  'hde-914': {
  'name': 'HDE-914 Neodymium HF Driver',
  'cat': 'HF Driver',
  'main': 'https://s.alicdn.com/@sc04/kf/Hcdea117476054b87870ab8eedad688f8j.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/Hcdea117476054b87870ab8eedad688f8j.jpg'],
  'specs': [{
  'l': 'Throat Diameter',
  'v': '1.4 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '120 W'
}, {
  'l': 'Frequency Range',
  'v': '500-20000 Hz'
}]
},
  'hd18tbx100': {
  'name': 'HD18TBX100 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1200 W'
}, {
  'l': 'Frequency Response',
  'v': '34-1000 Hz'
}, {
  'l': 'Fs',
  'v': '34 Hz'
}]
},
  'hd21fc330': {
  'name': 'HD21FC330 21\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'ALIBABA_IMAGE_URL_OR_PLACEHOLDER',
  'pdf': '#',
  'imgs': ['ALIBABA_IMAGE_URL_OR_PLACEHOLDER'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1200 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hd21n125a': {
  'name': 'HD21N125A 21\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'ALIBABA_IMAGE_URL_OR_PLACEHOLDER',
  'pdf': '#',
  'imgs': ['ALIBABA_IMAGE_URL_OR_PLACEHOLDER'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1200 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1800 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hdnk-1000': {
  'name': 'HDNK-1000 Neodymium HF Driver',
  'cat': 'HF Driver',
  'main': 'https://s.alicdn.com/@sc04/kf/H0103de543a04459cb6d8d94f50c12f0eh.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H0103de543a04459cb6d8d94f50c12f0eh.jpg'],
  'specs': [{
  'l': 'Throat Diameter',
  'v': '1.5 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '150 W'
}, {
  'l': 'Magnet Type',
  'v': 'Neodymium'
}]
},
  'hd12nc402': {
  'name': 'HD12NC402 12\" Neodymium Woofer',
  'cat': 'Woofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1c616559e4b94104942626480aa96a57s.png',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1c616559e4b94104942626480aa96a57s.png'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '12 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '450 W'
}, {
  'l': 'Sensitivity',
  'v': '98 dB'
}]
},
  'hdpd1845': {
  'name': 'HD/PD1845 18\" Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '800 W'
}, {
  'l': 'Frequency Response',
  'v': '36-2000 Hz'
}, {
  'l': 'Fs',
  'v': '36 Hz'
}]
},
  'hd21sf330-2': {
  'name': 'HD21SF330-2 21\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H04c3e74274c44908add23802070638U.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H04c3e74274c44908add23802070638U.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '2000 W'
}, {
  'l': 'Frequency Response',
  'v': '33-1200 Hz'
}, {
  'l': 'Fs',
  'v': '33 Hz'
}]
},
  'hd18nc152a': {
  'name': 'HD18NC152A 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1f98b0f1b98f48f6a325ebfbdeb46490P.png',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1f98b0f1b98f48f6a325ebfbdeb46490P.png'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '2000 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1000 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hd18tbw100': {
  'name': 'HD18TBW100 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '34-1000 Hz'
}, {
  'l': 'Fs',
  'v': '34 Hz'
}]
},
  'hd21n150a': {
  'name': 'HD21N150A 21\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'ALIBABA_IMAGE_URL_OR_PLACEHOLDER',
  'pdf': '#',
  'imgs': ['ALIBABA_IMAGE_URL_OR_PLACEHOLDER'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1500 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hd18x401': {
  'name': 'HD18X401 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '30-1000 Hz'
}, {
  'l': 'Fs',
  'v': '30 Hz'
}]
},
  'hd21nc152': {
  'name': 'HD21NC152 21\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg',
  'pdf': '#',
  'imgs': ['https://sc04.alicdn.com/kf/He3b8e453bc6e40b6b61b2e2fe434c40by/21-Speaker-Low-Frequency-DJ-Big-Power.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power (AES)',
  'v': '2000 W'
}, {
  'l': 'Sensitivity',
  'v': '97 dB'
}, {
  'l': 'Fs',
  'v': '31 Hz'
}]
},
  'hd18sw100': {
  'name': 'HD18SW100 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1200 W'
}, {
  'l': 'Frequency Response',
  'v': '40-1500 Hz'
}, {
  'l': 'Fs',
  'v': '40 Hz'
}]
},
  'hd21nc152a': {
  'name': 'HD21NC152A 21\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H01b9c3a7a12c4306b901375cd4e00bcbs.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H01b9c3a7a12c4306b901375cd4e00bcbs.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '21 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '2000 W'
}, {
  'l': 'Frequency Response',
  'v': '33-1200 Hz'
}, {
  'l': 'Fs',
  'v': '33 Hz'
}]
},
  'hd18sf330': {
  'name': 'HD18SF330 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '2000 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1000 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hd15sf100': {
  'name': 'HD15SF100 15\" Ferrite Woofer',
  'cat': 'Woofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H954484c1f4f24c78be9a5cb95693b3d6M.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H954484c1f4f24c78be9a5cb95693b3d6M.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '15 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '800 W'
}, {
  'l': 'Maximum Power',
  'v': '1600 W'
}, {
  'l': 'Voice Coil Diameter',
  'v': '100 mm'
}]
},
  'hd18x451': {
  'name': 'HD18X451 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H4597dc9b82b346d4b7c62a740320f198S.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H4597dc9b82b346d4b7c62a740320f198S.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1600 W'
}, {
  'l': 'Frequency Response',
  'v': '38-1000 Hz'
}, {
  'l': 'Fs',
  'v': '38 Hz'
}]
},
  'hd15n401': {
  'name': 'HD15N401 15\" Neodymium Woofer',
  'cat': 'Woofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H06d21a681c0d4453b343612f7202158dR.png',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H06d21a681c0d4453b343612f7202158dR.png'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '15 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '1000 W'
}, {
  'l': 'Sensitivity',
  'v': '97 dB'
}, {
  'l': 'Voice Coil Diameter',
  'v': '100 mm (4.0 inch)'
}]
},
  'hd18sw125': {
  'name': 'HD18SW125 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H698bea7bae2b49d084fcde55ac46d260n.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H698bea7bae2b49d084fcde55ac46d260n.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '2000 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1000 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hd18g401': {
  'name': 'HD18G401 18\" Ferrite Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H8294f2bba734450dafc5367034411b83W.png',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H8294f2bba734450dafc5367034411b83W.png'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '900 W'
}, {
  'l': 'Frequency Response',
  'v': '31-1000 Hz'
}, {
  'l': 'Fs',
  'v': '31 Hz'
}]
},
  'hd08n50-16': {
  'name': 'HD08N50-16 8\" Neodymium Woofer',
  'cat': 'Woofer',
  'main': 'https://s.alicdn.com/@sc04/kf/Hcea1485f8a724101b30748c3e9cd7dd9j.png',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/Hcea1485f8a724101b30748c3e9cd7dd9j.png'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '8 inch'
}, {
  'l': 'Rated Impedance',
  'v': '16 ohm'
}, {
  'l': 'Power Handling (AES)',
  'v': '200 W'
}, {
  'l': 'Maximum Power',
  'v': '400 W'
}]
},
  '18sw1352': {
  'name': '18SW1352 18\" Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (RMS)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '32-800 Hz'
}, {
  'l': 'Fs',
  'v': '32 Hz'
}]
},
  'hd18x455': {
  'name': 'HD18X455 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1600 W'
}, {
  'l': 'Frequency Response',
  'v': '35-1000 Hz'
}, {
  'l': 'Fs',
  'v': '35 Hz'
}]
},
  'hd18sw115': {
  'name': 'HD18SW115 18\" Neodymium Subwoofer',
  'cat': 'Subwoofer',
  'main': 'https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg',
  'pdf': '#',
  'imgs': ['https://s.alicdn.com/@sc04/kf/H1d3fee8f30104d258eeb9f8901968673Q.jpg'],
  'specs': [{
  'l': 'Nominal Diameter',
  'v': '18 inch'
}, {
  'l': 'Rated Impedance',
  'v': '8 ohm'
}, {
  'l': 'Nominal Power (AES)',
  'v': '1500 W'
}, {
  'l': 'Frequency Response',
  'v': '38-1200 Hz'
}, {
  'l': 'Fs',
  'v': '38 Hz'
}]
}
};

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id; // å³é®ä¿®å¤ï¼å¹éæä»¶å¤¹åç§° [id]
  const p = db[id];
  const [disp, setDisp] = useState('');

  useEffect(() => {
    if (p) setDisp(p.main);
  }, [p]);

  if (!p) return <div style={{ paddingTop: '200px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh', color: '#666' }}>SYNCING ASSET DATA...</div>;

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', color: 'black', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <div style={{ backgroundColor: 'white', padding: '48px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f1f3f5' }}>
            <img src={disp} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
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
          <Link href="/products" style={{ color: '#adb5bd', textDecoration: 'none', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>â Back to Assets</Link>
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
