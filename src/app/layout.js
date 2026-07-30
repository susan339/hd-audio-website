'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const inter = Inter({ subsets: ['latin'] })

// --- Inquiry Modal (带邮箱+WhatsApp字段，提交跳转) ---
const InquiryModal = ({ isOpen, onClose, whatsappNumber }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = `*New Inquiry*%0D%0A*Name:* ${formData.get('name')}%0D%0A*Email:* ${formData.get('email')}%0D%0A*WhatsApp:* ${formData.get('whatsapp')}%0D%0A*Message:* ${formData.get('message')}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg p-10 shadow-2xl rounded-sm border-t-8 border-[#2563EB] relative text-black text-left">
        <button onClick={onClose} className="absolute top-6 right-8 text-2xl text-zinc-300 hover:text-black">✕</button>
        <h3 className="text-3xl font-black tracking-tighter mb-1 uppercase">Send Inquiry</h3>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-10 font-bold">Professional Audio Solutions</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Full Name</label>
            <input name="name" required placeholder="Enter your name" className="w-full border-b-2 border-zinc-100 py-3 text-sm focus:border-[#2563EB] outline-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
              <input name="email" required type="email" placeholder="email@example.com" className="w-full border-b-2 border-zinc-100 py-3 text-sm focus:border-[#2563EB] outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">WhatsApp / Phone</label>
              <input name="whatsapp" placeholder="+123..." className="w-full border-b-2 border-zinc-100 py-3 text-sm focus:border-[#2563EB] outline-none" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Your Message</label>
            <textarea name="message" required placeholder="Tell us what you need..." className="w-full border-b-2 border-zinc-100 py-3 text-sm h-32 focus:border-[#2563EB] outline-none resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold py-5 uppercase tracking-[0.4em] text-[11px] hover:bg-[#2563EB] transition-all shadow-xl">Submit to WhatsApp</button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const settings = { whatsapp: '8615521083699', email: '1123696584@qq.com' };

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '#' },
    { name: 'OEM/ODM', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'News', href: '#' },
    { name: 'About', href: '/about' },
  ];

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-3">
                {/* 恢复 CT 蓝色标识 */}
                <div className="bg-[#2563EB] text-white w-9 h-9 flex items-center justify-center font-bold text-base rounded-md tracking-tight">CT</div>
                <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-xl">
                  <span className="text-[#0a0f1d]">CORETONE</span>
                  <span className="text-[#64748b]">AUDIO</span>
                </div>
              </div>
              {/* PC端：13px 纯黑导航 */}
              <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-widest text-black uppercase">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="hover:text-[#2563EB] transition-colors">{link.name}</a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                {/* 恢复黑色 Inquiry 按钮 */}
                <button onClick={() => setIsModalOpen(true)} className="hidden sm:block text-[12px] font-bold bg-black text-white px-8 py-2.5 hover:bg-[#2563EB] transition-all uppercase tracking-widest">Inquiry</button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-black">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px' }}>
            <div className="flex flex-col p-8 space-y-8 text-xl font-black uppercase tracking-tighter text-black">
              {navLinks.map(link => (<a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>))}
              <button onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }} className="bg-black text-white py-4 text-center">Inquiry</button>
            </div>
          </div>
        </nav>
        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} whatsappNumber={settings.whatsapp} />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
