'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8">
      <div className="max-w-[1200px] mx-auto text-left">
        <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.3em] uppercase mb-4">Direct Communication</h1>
        <h2 className="text-[60px] font-black text-black leading-none mb-16 uppercase tracking-tighter">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#71717A] text-lg leading-relaxed mb-8 uppercase font-medium">
              Connect with our technical engineering team for precision audio specifications and procurement.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">Electronic Mail</p>
                <p className="text-2xl font-black text-black tracking-tight underline">1123696584@qq.com</p>
              </div>
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">WhatsApp / Voice</p>
                <p className="text-2xl font-black text-black tracking-tight">+86 155 2108 3699</p>
              </div>
            </div>
          </div>

          {/* 表单提交到 Formspree，它会自动转寄到您的 QQ 邮箱 */}
          <form action="https://formspree.io/f/mnnqqlqz" method="POST" className="space-y-8 bg-black p-12 rounded-[40px] shadow-2xl">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
              <input name="name" required className="w-full bg-[#111] border-b border-gray-800 text-white p-3 outline-none focus:border-blue-600 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
              <input type="email" name="email" required className="w-full bg-[#111] border-b border-gray-800 text-white p-3 outline-none focus:border-blue-600 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Your Inquiry</label>
              <textarea name="message" required rows="4" className="w-full bg-[#111] border-b border-gray-800 text-white p-3 outline-none focus:border-blue-600 transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white w-full py-4 font-bold tracking-widest uppercase hover:bg-blue-700 transition-all">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
