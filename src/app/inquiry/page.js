'use client';
import React, { useState } from 'react';

export default function InquiryPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const userWhatsapp = formData.get('whatsapp');
    const message = formData.get('message');

    const payload = {
      sender_name: name,
      email: email,
      message: `[User WhatsApp: ${userWhatsapp}] - ${message}`
    };

    try {
      // 1. 存入您的 Supabase 数据库
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

      // 2. 自动跳转到您的 WhatsApp (带上客户填写的姓名和信息)
      const text = `*New Inquiry from Website*%0D%0A*Name:* ${name}%0D%0A*Email:* ${email}%0D%0A*WhatsApp:* ${userWhatsapp}%0D%0A*Message:* ${message}`;
      window.open(`https://wa.me/8615521083699?text=${text}`, '_blank');

      setStatus("SUCCESS");
      e.target.reset();
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8 selection:bg-[#2563EB] selection:text-white text-left">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* 左侧：联系信息块 */}
        <div className="text-left">
          <h1 className="text-[#2563EB] font-bold uppercase tracking-widest text-[14px] mb-4">Direct Channel</h1>
          <h2 className="text-[60px] font-black text-black leading-none mb-10 uppercase tracking-tighter">Inquiry Us</h2>
          
          <div className="space-y-12 mt-16">
             <div className="p-8 border-l-4 border-[#2563EB] bg-gray-50 shadow-sm">
                <p className="text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-2">Technical Sales Email</p>
                <a href="mailto:coretoneaudio@outlook.com" className="text-2xl font-black text-black tracking-tight hover:text-[#2563EB] transition-all underline">coretoneaudio@outlook.com</a>
             </div>
             <div className="p-8 border-l-4 border-green-500 bg-gray-50 shadow-sm">
                <p className="text-green-600 font-bold text-xs uppercase tracking-widest mb-2 text-left">Global WhatsApp</p>
                <a href="https://wa.me/8615521083699" target="_blank" className="text-2xl font-black text-black tracking-tight hover:text-green-600 transition-all underline">+86 155 2108 3699</a>
             </div>
          </div>
        </div>

        {/* 右侧：黑色高端表单卡片 */}
        <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[500px]">
          {status === "SUCCESS" ? (
            <div className="text-center py-20 flex flex-col items-center justify-center h-full">
              <div className="text-[#2563EB] text-6xl mb-6 font-bold">✓</div>
              <h3 className="text-white text-2xl font-black uppercase mb-4">Message Logged</h3>
              <p className="text-gray-400 font-bold uppercase text-xs mb-8">We have successfully recorded your inquiry and opened WhatsApp for you.</p>
              <a href="https://wa.me/8615521083699" target="_blank" className="bg-[#25D366] text-white px-10 py-4 font-bold rounded-full uppercase text-xs tracking-widest hover:scale-105 transition-all">Chat Now on WhatsApp</a>
              <button onClick={() => setStatus("")} className="mt-8 text-zinc-600 font-bold uppercase text-[10px] tracking-widest hover:text-[#2563EB]">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label><input name="name" required placeholder="NAME" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all font-bold" /></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label><input type="email" name="email" required placeholder="EMAIL" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all font-bold" /></div>
                <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">WhatsApp Number</label><input name="whatsapp" required placeholder="WHATSAPP" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all font-bold" /></div>
              </div>

              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Inquiry Message</label><textarea name="message" required rows="4" placeholder="HOW CAN WE ASSIST?" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-[#2563EB] transition-all resize-none font-bold"></textarea></div>
              <button type="submit" disabled={status === "SENDING"} className="bg-[#2563EB] text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl">{status === "SENDING" ? "Processing..." : "Log Inquiry & Chat"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
