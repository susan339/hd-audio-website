'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

// --- Inline Inquiry Modal ---
const InquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const mailtoLink = `mailto:1123696584@qq.com?subject=New Inquiry&body=Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0AWhatsApp: ${formData.get('whatsapp')}%0D%0AMessage: ${formData.get('message')}`;
    window.location.href = mailtoLink;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg p-8 shadow-2xl rounded-sm border-t-8 border-blue-600 relative text-black">
        <button onClick={onClose} className="absolute top-4 right-6 text-2xl text-zinc-400 hover:text-black">✕</button>
        <h3 className="text-2xl font-black tracking-tighter mb-2">SEND INQUIRY</h3>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-8 font-bold">CORETONE AUDIO SOLUTIONS</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input name="name" required placeholder="Full Name *" className="w-full border border-zinc-200 px-4 py-3 text-sm focus:border-blue-600 outline-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input name="email" required type="email" placeholder="Email Address *" className="w-full border border-zinc-200 px-4 py-3 text-sm focus:border-blue-600 outline-none" />
            <input name="whatsapp" placeholder="WhatsApp Number" className="w-full border border-zinc-200 px-4 py-3 text-sm focus:border-blue-600 outline-none" />
          </div>
          <textarea name="message" required placeholder="Your Requirements *" className="w-full border border-zinc-200 px-4 py-3 text-sm h-32 focus:border-blue-600 outline-none resize-none"></textarea>
          <button type="submit" className="w-full bg-black text-white font-bold py-4 uppercase tracking-[0.3em] text-[11px] hover:bg-blue-600 transition-all">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-[#2563EB] text-white w-9 h-9 flex items-center justify-center font-bold text-base rounded-md tracking-tight shadow-sm">CT</div>
              <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-xl">
                <span className="text-[#0a0f1d]">CORETONE</span>
                <span className="text-[#64748b]">AUDIO</span>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-12 text-[11px] font-bold tracking-[0.2em] text-zinc-900">
              <a href="/" className="hover:text-blue-600 transition-colors uppercase">Home</a>
              <a href="/products" className="hover:text-blue-600 transition-colors uppercase">Products</a>
              <a href="#" className="hover:text-blue-600 transition-colors uppercase">About Us</a>
              <a href="#" className="hover:text-blue-600 transition-colors uppercase">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://wa.me/8615521083699" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-[#25D366] rounded-full hover:scale-110 transition-transform shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.7 1.445 5.703 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              {isMounted && (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="hidden sm:block text-[11px] font-bold border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-all uppercase tracking-[0.2em]"
                >
                  Inquiry
                </button>
              )}
            </div>
          </div>
        </nav>

        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <div className="pt-20">
          {children}
        </div>

        <a href="https://wa.me/8615521083699" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[100] group flex items-center">
          <div className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-lg mr-3 shadow-xl opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest">Chat on WhatsApp</div>
          <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.7 1.445 5.703 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></div>
        </a>

        <section className="w-full">
          <img src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" alt="Global Project Portfolio" className="w-full h-auto block" />
        </section>

        <footer className="bg-zinc-900 text-white py-12 px-6">
          <div className="container mx-auto text-center flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#2563EB] text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-md tracking-tight">CT</div>
              <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-lg">
                <span className="text-white">CORETONE</span>
                <span className="text-[#64748b]">AUDIO</span>
              </div>
            </div>
            <p className="text-gray-400 text-[11px] tracking-[0.2em] uppercase mb-4 text-center">© 2026 CORETONE AUDIO. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
