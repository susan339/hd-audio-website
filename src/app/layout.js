import "./globals.css";

export const metadata = {
  title: "CORETONE AUDIO - Professional Audio Drivers",
  description: "Premium replacements, uncompromised performance.",
};

export default function RootLayout({ children }) {
  // 菜单项中去掉了 Contact
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '#' },
    { name: 'OEM/ODM', path: '#' },
    { name: 'Projects', path: '#' },
    { name: 'About', path: '#' },
  ];

  const faviconUrl = "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='<http://www.w3.org/2000/svg'%3E%3Crect> width='32' height='32' rx='6' fill='%232563EB'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold' font-size='16'%3ECT%3C/text%3E%3C/svg%3E";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconUrl} />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased m-0 p-0 bg-white min-h-screen">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 px-8 py-5 flex justify-between items-center h-[81px]">
          {/* Logo 区域 */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#2563EB] rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm">CT</div>
            <div className="flex items-center gap-1.5 font-bold text-[20px] tracking-tight text-black">
              <span>CORETONE</span>
              <span className="text-gray-400 font-medium uppercase">AUDIO</span>
            </div>
          </a>

          {/* 导航菜单 */}
          <div className="hidden md:flex items-center gap-10 font-bold text-[13px] tracking-[1.3px] uppercase">
            {menuItems.map(item => (
              <a key={item.name} href={item.path} className="text-black hover:text-[#2563EB] transition-colors">{item.name}</a>
            ))}
            {/* INQUIRY 按钮直接跳转到 /contact 页面 */}
            <a href="/contact" className="border-2 border-black px-8 py-2 text-black hover:bg-black hover:text-white transition-all">INQUIRY</a>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-black py-12 text-white px-8 border-t border-zinc-900">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-[15px] tracking-
