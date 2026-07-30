'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8 selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-[1200px] mx-auto text-left">
        <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4 font-sans">Direct Communication</h1>
        <h2 className="text-[60px] font-black text-black leading-none mb-16 uppercase tracking-tighter">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#71717A] text-lg leading-relaxed mb-8 uppercase font-medium">
              Connect with our technical engineering team for precision audio specifications and procurement.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">Electronic Mail</p>
                <p className="text-2xl font-black text-black tracking-tight">coretoneaudio01@163.com</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-[40px] shadow-2xl">
            {/* 更换为 Getform 接口，稳定性更高 */}
            <form action="https://getform.io/f/bjjjppva" method="POST" className="space-y-8">
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                <input name="name" required placeholder="NAME" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all font-bold" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                <input type="email" name="email" required placeholder="EMAIL" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all font-bold" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Your Inquiry</label>
                <textarea name="message" required rows="4" placeholder="HOW CAN WE HELP?" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all resize-none font-bold"></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-[#2563EB] text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
