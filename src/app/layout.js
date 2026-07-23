import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CORETONE AUDIO | Professional Audio Drivers & Solutions',
  description: 'High-performance professional audio drivers, compression drivers, and audio solutions for global projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <div className="pt-20">
          {children}
        </div>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/8615521083699" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] group flex items-center"
        >
          <div className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-lg mr-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-all uppercase tracking-widest">
            Chat on WhatsApp
          </div>
          <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.7 1.445 5.703 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </a>

        {/* Global Project Portfolio Banner */}
        <section className="w-full">
          <img 
            src="https://sc04.alicdn.com/kf/Ae94b9bab70a84c70a439d731d08ad3dem.jpg" 
            alt="Global Project Portfolio" 
            className="w-full h-auto block"
          />
        </section>

        <footer className="bg-zinc-900 text-white py-12 px-6">
          <div className="container mx-auto text-center flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#2563EB] text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-md tracking-tight shadow-sm">CT</div>
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
