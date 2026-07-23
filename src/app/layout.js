import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HD Audio - Professional Audio Drivers & Systems',
  description: 'Premium quality audio components for professional sound systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-100 py-6">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="border-2 border-black w-8 h-8 flex items-center justify-center font-bold text-xl">H</div>
              <span className="font-bold tracking-[0.2em] text-sm uppercase">HD Audio</span>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="/" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">Home</a>
              <a href="/products" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">Products</a>
              <a href="#" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">About Us</a>
              <a href="#" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a href="#" className="border border-black px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all">
              Contact Us
            </a>
          </div>
        </nav>
        {children}
        <footer className="bg-zinc-900 text-white py-12">
          <div className="container mx-auto px-6 text-center">
             <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="border-2 border-white w-8 h-8 flex items-center justify-center font-bold text-xl">H</div>
              <span className="font-bold tracking-[0.2em] text-sm uppercase">HD Audio</span>
            </div>
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">© 2026 HD Audio. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
