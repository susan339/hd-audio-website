'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const inter = Inter({ subsets: ['latin'] })

// --- Portal-based Inquiry Modal ---
const InquiryModal = ({ isOpen, onClose, email }) => {
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
    const mailtoLink = `mailto:${email}?subject=New Inquiry&body=Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0AWhatsApp: ${formData.get('whatsapp')}%0D%0AMessage: ${formData.get('message')}`;
    window.location.href = mailtoLink;
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg p-10 shadow-2xl rounded-sm border-t-8 border-blue-600 relative text-black">
        <button onClick={onClose} className="absolute top-6 right-8 text-2xl text-zinc-300 hover:text-black transition-colors">✕</button>
        <h3 className="text-3xl font-black tracking-tighter mb-1 uppercase">Send Inquiry</h3>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-10 font-bold">Professional Audio Solutions</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Full Name</label>
            <input name="name" required placeholder="Enter your name" className="w-full border-b-2 border-zinc-100 py-3 text-sm focus:border-blue-600 outline-none transition-colors" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Email</label>
              <input name="email" required type="email" placeholder="email@example.com" className="w-full border-b-2 border-zinc-100 py-3 text-sm focus:border-blue-600 outline-none transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">WhatsApp</label>
              <input name="whatsapp" placeholder="+123..." className="w-full border-b-2 border-zinc-100 py-3 text-sm focus:border-blue-600 outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Message</label>
            <textarea name="message" required placeholder="Tell us what you need..." className="w-full border-b-2 border-zinc-100 py-3 text-sm h-32 focus:border-blue-600 outline-none resize-none transition-colors"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold py-5 uppercase tracking-[0.4em] text-[11px] hover:bg-blue-600 transition-all shadow-xl">Submit Request</button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState({ whatsapp: '8615521083699', email: '1123696584@qq.com' });

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-[#2563EB] text-white w-9 h-9 flex items-center justify-center font-bold text-base rounded-md tracking-tight">CT</div>
                <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-xl">
                  <span className="text-[#0a0f1d]">CORETONE</span>
                  <span className="text-[#64748b]">AUDIO</span>
                </div>
              </div>
              
              <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-widest text-gray-900 uppercase">
                <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                <a href="/products" className="hover:text-blue-600 transition-colors">Products</a>
                <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
              </div>

              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="hidden sm:block text-[13px] font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-all uppercase"
                >
                  Inquiry
                </button>
                
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px' }}>
            <div className="flex flex-col p-8 space-y-8 text-xl font-black uppercase tracking-tighter text-black">
              <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="/products" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button 
                onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
                className="bg-black text-white py-4 text-center"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </nav>

        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} email={settings.email} />

        <main className="pt-24 min-h-[calc(100vh-200px)]">
          {children}
        </main>

        <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-[100] group flex items-center">
          <div className="bg-black text-white text-[9px] font-black px-4 py-2 mr-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all uppercase tracking-[0.3em]">Chat with us</div>
          <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.7 1.445 5.703 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></div>
        </a>
      </body>
    </html>
  )
}
