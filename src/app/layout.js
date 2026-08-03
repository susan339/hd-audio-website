'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const settings = { whatsapp: '8615521083699' };

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
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' },
  ];

  return (
    <html lang="en">
      <head>
        {/* 核心修复：直接通过代码生成 CT 蓝色小图标，无需上传图片文件 */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%232563EB'/><text y='50%' x='50%' font-size='60' font-weight='900' font-family='Arial, sans-serif' fill='white' text-anchor='middle' dominant-baseline='central'>CT</text></svg>" />
        <title>CORETONE AUDIO | Professional Speaker Manufacturer</title>
      </head>
      <body className={`${inter.className} bg-white antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-3">
                {/* 恢复 CT 蓝色正方形标识 */}
                <div className="bg-[#2563EB] text-white w-9 h-9 flex items-center justify-center font-bold text-base rounded-md tracking-tight">CT</div>
                <div className="flex items-center space-x-1.5 font-bold tracking-[0.05em] text-xl">
                  <span className="text-[#0a0f1d]">CORETONE</span>
                  <span className="text-[#64748b]">AUDIO</span>
                </div>
              </div>
              
              {/* PC端导航：13px 纯黑加粗 */}
              <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-widest text-black uppercase">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="hover:text-[#2563EB] transition-colors">{link.name}</a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {/* 点击跳转到独立询盘页 */}
                <a href="/inquiry" className="hidden sm:block text-[12px] font-bold bg-black text-white px-8 py-2.5 hover:bg-[#2563EB] transition-all uppercase tracking-widest">
                  Inquiry
                </a>
                
                {/* 移动端汉堡菜单 */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-black">
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

          {/* 手机端菜单 */}
          <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px' }}>
            <div className="flex flex-col p-8 space-y-8 text-xl font-black uppercase tracking-tighter text-black">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ))}
              <a href="/inquiry" onClick={() => setIsMenuOpen(false)} className="bg-black text-white py-4 text-center">Inquiry</a>
            </div>
          </div>
        </nav>
        
        <main className="pt-20 min-h-screen">
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
