'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8 selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-[1200px] mx-auto text-left">
        <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4 font-sans text-left">Direct Communication</h1>
        <h2 className="text-[60px] font-black text-black leading-none mb-16 uppercase tracking-tighter text-left">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="text-left">
            <p className="text-[#71717A] text-lg leading-relaxed mb-8 uppercase font-medium">Precision audio technical specifications and procurement inquiries.</p>
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1 text-left">Support Email</p>
                <p className="text-2xl font-black text-black tracking-tight underline text-left">coretoneaudio01@163.com</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-[40px] shadow-2xl">
            {/* 核心修正：使用原始 HTML action 提交。这种方式稳定性全球第一，绝不会没反应或转圈 */}
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
              {/* 您的专属转发密钥 */}
              <input type="hidden" name="access_key" value="46e0339d-27b0-466d-a128-40b90f507567" />
              <input type="hidden" name="from_name" value="CORETONE Website" />
              <input type="hidden" name="subject" value="New Website Inquiry" />

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                <input name="name" required placeholder="NAME / IDENTIFIER" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                <input type="email" name="email" required placeholder="EMAIL ADDRESS" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message Details</label>
                <textarea name="message" required rows="4" placeholder="HOW CAN WE ASSIST?" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all resize-none font-bold"></textarea>
              </div>
              
              {/* 提交成功后自动跳回您的官网地址 */}
              <input type="hidden" name="redirect" value="https://www.exactproaudiodrivers.com" />

              <button 
                type="submit" 
                className="bg-blue-600 text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl"
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
