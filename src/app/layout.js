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
  const [settings, setSettings] = useState({ whatsapp: '8615521083699', email: '1123696584@qq.com' });

  useEffect(() => {
    // Try to fetch settings from public/settings.json or content/settings.json
    // For simplicity in a CSR environment, we'd usually fetch from a known path.
    // However, since we are a Client Component, we can't easily read from /content/ directly without an API route.
    // But we can assume the defaults or maybe the user will update them in the admin.
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 py-5">
          <div className="container mx-auto px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Stylized H Logo */}
              <div className="bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl rounded-none tracking-tighter">H</div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black tracking-tighter text-xl text-black">HD AUDIO</span>
                <span className="text-[8px] font-bold tracking-[0.4em] text-blue-600 uppercase">Pro Systems</span>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-12 text-[10px] font-black tracking-[0.3em] text-zinc-900 uppercase">
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="/products" className="hover:text-blue-600 transition-colors">Products</a>
              <a href="#" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-6">
              <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-[#25D366] rounded-full hover:scale-110 transition-transform shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.7 1.445 5.703 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <button 
                id="main-inquiry-btn"
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:block text-[10px] font-black border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-all uppercase tracking-[0.3em] shadow-sm"
              >
                Inquiry
              </button>
            </div>
          </div>
        </nav>

        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} email={settings.email} />

        <main className="pt-24 min-h-[calc(100vh-200px)]">
          {children}
        </main>

        <footer className="bg-zinc-950 text-white py-20 px-8 mt-20">
          <div className="container mx-auto flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-10">
              <div className="bg-white text-black w-8 h-8 flex items-center justify-center font-black text-lg">H</div>
              <span className="font-black tracking-tighter text-2xl uppercase">HD Audio</span>
            </div>
            <p className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase mb-8 font-bold text-center">Engineered for Performance. Driven by Passion.</p>
            <div className="flex space-x-8 text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Global Support</a>
            </div>
            <p className="text-zinc-600 text-[9px] tracking-widest uppercase">© 2026 HD AUDIO GROUP. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

        {/* Floating WhatsApp for all pages */}
        <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-[100] group flex items-center">
          <div className="bg-black text-white text-[9px] font-black px-4 py-2 mr-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all uppercase tracking-[0.3em]">Chat with us</div>
          <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.7 1.445 5.703 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></div>
        </a>
      </body>
    </html>
  )
}
