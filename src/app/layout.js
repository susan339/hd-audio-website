import "./globals.css";
const faviconUrl = "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='6' fill='%232563EB'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold' font-size='16'%3ECT%3C/text%3E%3C/svg%3E";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href={faviconUrl} /><script src="https://cdn.tailwindcss.com"></script></head>
      <body className="antialiased bg-white">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 px-8 py-5 flex justify-between items-center h-[81px]">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#2563EB] rounded-md flex items-center justify-center text-white font-bold text-sm">CT</div>
            <div className="font-bold text-[20px] text-black">CORETONE <span className="text-gray-400 font-medium">AUDIO</span></div>
          </a>
          <div className="hidden md:flex items-center gap-10 font-bold text-[13px] tracking-[1.3px] uppercase">
            <a href="/" className="hover:text-[#2563EB]">Home</a>
            <a href="/products" className="hover:text-[#2563EB]">Products</a>
            <a href="/contact" className="border-2 border-black px-6 py-2">INQUIRY</a>
          </div>
        </nav>
        {children}
        <a href="https://wa.me/8615521083699" target="_blank" className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 4.7 1.1L22 2l-1.5 5.5Z"/></svg>
        </a>
      </body>
    </html>
  );
}
