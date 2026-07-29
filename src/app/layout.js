import "./globals.css";

export const metadata = {
  title: "CORETONE AUDIO - Professional Audio Drivers",
  description: "Premium replacements, uncompromised performance.",
};

export default function RootLayout({ children }) {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '#' },
    { name: 'OEM/ODM', path: '#' },
    { name: 'Projects', path: '#' },
    { name: 'About', path: '#' },
  ];

  return (
    <html lang="en">
      <body className="antialiased m-0 p-0 bg-white min-h-screen">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 px-8 py-5 flex justify-between items-center h-[81px]">
          {/* CORETONE AUDIO LOGO */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#2563EB] rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm">CT</div>
            <div className="flex items-center gap-1.5 font-bold text-[20px] tracking-tight text-black">
              <span>CORETONE</span>
              <span className="text-gray-400 font-medium uppercase">AUDIO</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 font-bold text-[13px] tracking-[1.3px] uppercase">
            {menuItems.map(item => (
              <a key={item.name} href={item.path} className="text-black hover:text-[#2563EB] transition-colors">{item.name}</a>
            ))}
            <a href="https://wa.me/8615521083699" className="border-2 border-black px-6 py-2 text-black hover:bg-black hover:text-white transition-all">INQUIRY</a>
          </div>
        </nav>

        <main>{children}</main>

        {/* WhatsApp */}
        <a href="https://wa.me/8615521083699" target="_blank" className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 4.7 1.1L22 2l-1.5 5.5Z"/></svg>
        </a>
      </body>
    </html>
  );
}
