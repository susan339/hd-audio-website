import "./globals.css";

export default function RootLayout({ children }) {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '#' },
    { name: 'News', path: '#' },
    { name: 'Contact', path: '#' },
  ];

  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased m-0 p-0 bg-white">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 px-8 py-6 flex justify-between items-center h-[84px]">
          {/* 左上角清空：仅保留隐形文字占位，确保导航栏平衡 */}
          <div className="flex items-center gap-3">
             <span className="font-bold text-[18px] text-black tracking-tight">HD AUDIO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 font-bold text-[13px] tracking-[1.3px] uppercase">
            {menuItems.map(item => (
              <a key={item.name} href={item.path} className="text-black hover:text-[#2563EB] transition-colors">{item.name}</a>
            ))}
            <a href="https://wa.me/8615521083699" className="border-2 border-black px-6 py-2 text-black hover:bg-black hover:text-white transition-all">INQUIRY</a>
          </div>
        </nav>
        {children}
        {/* Footer */}
        <footer className="bg-black py-12 text-white px-8 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-[15px] tracking-tight uppercase">CORETONE AUDIO</div>
            <p className="text-zinc-500 text-[10px] font-medium tracking-[0.35em] uppercase mt-6 md:mt-0">© 2026 PREMIUM REPLACEMENTS // UNCOMPROMISED PERFORMANCE</p>
          </div>
        </footer>
        {/* WhatsApp */}
        <a href="https://wa.me/8615521083699" target="_blank" className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 4.7 1.1L22 2l-1.5 5.5Z"/></svg>
        </a>
      </body>
    </html>
  );
}
