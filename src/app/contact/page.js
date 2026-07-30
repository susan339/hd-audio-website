'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const formData = new FormData(e.target);
    const payload = {
      sender_name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // 1. 静默存入您的 Supabase 数据库 (不依赖任何库)
      await fetch("https://lvhbmoklunrsfnnvonsh.supabase.co/rest/v1/inquiries", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_k0LxhDn7fEe70dm5G4KpfQ_YQ4ezKgq',
          'Authorization': 'Bearer sb_publishable_k0LxhDn7fEe70dm5G4KpfQ_YQ4ezKgq',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      // 2. 静默发送邮件到您的 163 邮箱
      await fetch("https://formspree.io/f/mnnqqlqz", {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      setStatus("SUCCESS");
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8 selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-[1200px] mx-auto text-left">
        <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4 font-sans">Direct Communication</h1>
        <h2 className="text-[60px] font-black text-black leading-none mb-16 uppercase tracking-tighter">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="text-left">
            <p className="text-[#71717A] text-lg leading-relaxed mb-8 uppercase font-medium">
              Precision audio technical specifications and procurement inquiries.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">Electronic Mail</p>
                <p className="text-2xl font-black text-black tracking-tight underline">coretoneaudio01@163.com</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[480px]">
            {status === "SUCCESS" ? (
              <div className="text-center py-20 flex flex-col items-center justify-center h-full">
                <div className="text-blue-500 text-6xl mb-6 font-bold">✓</div>
                <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">Transmission Successful</h3>
                <p className="text-zinc-500 font-bold uppercase text-xs">Our engineers will respond to coretoneaudio01@163.com.</p>
                <button onClick={() => setStatus("")} className="mt-8 text-blue-500 font-black uppercase text-[10px] tracking-widest hover:underline">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="_replyto" value="coretoneaudio01@163.com" />
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Full Name</label>
                  <input name="name" required placeholder="IDENTIFIER" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Email Address</label>
                  <input type="email" name="email" required placeholder="USER@DOMAIN.COM" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Message Details</label>
                  <textarea name="message" required rows="4" placeholder="HOW CAN WE HELP?" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all resize-none font-bold"></textarea>
                </div>
                <button type="submit" disabled={status === "SENDING"} className="bg-blue-600 text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl disabled:opacity-50">
                  {status === "SENDING" ? "Transmitting..." : "Submit Inquiry"}
                </button>
                {status === "ERROR" && <p className="text-red-500 text-[10px] font-bold uppercase mt-2">Link Failure. Please use email directly.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
