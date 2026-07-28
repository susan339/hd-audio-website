'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const inter = Inter({ subsets: ['latin'] })

const InquiryModal = ({ isOpen, onClose, email }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg p-10 shadow-2xl rounded-sm border-t-8 border-blue-600 relative text-black">
        <button onClick={onClose} className="absolute top-6 right-8 text-2xl text-zinc-300 hover:text-black transition-colors">✕</button>
        <h3 className="text-3xl font-black tracking-tighter mb-1 uppercase">Send Inquiry</h3>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-10 font-bold">Professional Audio Solutions</p>
        <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${email}?subject=New Inquiry`; onClose(); }} className="space-y-6">
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Full Name</label>
            <input required className="w-full border-b-2 border-zinc-100 py-3 text-sm outline-none" />
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold py-5 uppercase tracking-[0.4em] text-[11px] hover:bg-blue-600">Submit Request</button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const settings = { whatsapp: '8615521083699', email: '1123696584@qq.com' };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-[#2563EB] text-white w-9 h-9 flex items-center justify-center font-bold text-base rounded-md tracking-tight">CT</div>
                <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-xl text-black">
                  <span>CORETONE</span><span className="text-[#64748b]">AUDIO</span>
                </div>
              </div>
              <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-widest text-gray-900 uppercase">
                <a href="/" className="hover:text-blue-600">Home</a>
                <a href="/products" className="hover:text-blue-600">Products</a>
                <a href="/about" className="hover:text-blue-600">About</a>
                <a href="#" className="hover:text-blue-600">Contact</a>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="hidden sm:block text-[13px] font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-all uppercase">Inquiry</button>
            </div>
          </div>
        </nav>
        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} email={settings.email} />
        <main className="pt-24 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
