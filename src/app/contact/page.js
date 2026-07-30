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
      // 1. 同步存入您的 Supabase 管理后台
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

      // 2. 邮件转发至 Outlook (使用 Formspree 稳定通道)
      await fetch("https://formspree.io/f/mnnqqlqz", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      setStatus("SUCCESS");
      e.target.reset();
    } catch (error) {
      // 保底：若网络拦截则调用本地邮件软件
      window.location.href = `mailto:coretoneaudio@outlook.com?subject=Inquiry&body=${payload.message}`;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8 selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="text-left">
          <h1 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Direct Communication</h1>
          <h2 className="text-[60px] font-black text-black leading-none mb-10 uppercase tracking-tighter">Contact Us</h2>
          <p className="text-2xl font-black text-black underline">coretoneaudio@outlook.com</p>
        </div>
        <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[480px]">
          {status === "SUCCESS" ? (
            <div className="text-center py-20 flex flex-col items-center justify-center h-full">
              <div className="text-blue-500 text-6xl mb-6 font-bold">✓</div>
              <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">Transmission Successful</h3>
              <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Our team will respond to coretoneaudio@outlook.com shortly.</p>
              <button onClick={() => setStatus("")} className="mt-8 text-blue-500 font-black uppercase text-[10px] tracking-widest hover:underline">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Full Name</label><input name="name" required placeholder="NAME" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all font-bold" /></div>
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Email Address</label><input type="email" name="email" required placeholder="EMAIL" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all font-bold" /></div>
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Inquiry Details</label><textarea name="message" required rows="4" placeholder="HOW CAN WE HELP?" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all resize-none font-bold"></textarea></div>
              <button type="submit" disabled={status === "SENDING"} className="bg-[#2563EB] text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl">{status === "SENDING" ? "Transmitting..." : "Submit Inquiry"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
