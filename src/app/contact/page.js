'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState(""); // "" | "SENDING" | "SUCCESS" | "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const form = e.target;
    const formData = new FormData(form);

    // 1. 同步存入 Supabase
    const payload = {
      sender_name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    try {
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

      // 2. 邮件转发 (Web3Forms)
      formData.append("access_key", "46e0339d-27b0-466d-a128-40b90f507567"); 
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

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
                <p className="text-2xl font-black text-black tracking-tight text-left">coretoneaudio01@163.com</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[480px]">
            {/* 成功状态展示 */}
            {status === "SUCCESS" ? (
              <div className="text-center py-20 flex flex-col items-center justify-center h-full animate-in fade-in duration-500">
                <div className="text-blue-500 text-6xl mb-6 font-bold">✓</div>
                <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter text-center">Transmission Successful</h3>
                <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest text-center">Our engineers will respond to coretoneaudio01@163.com shortly.</p>
                <button onClick={() => setStatus("")} className="mt-8 text-blue-500 font-black uppercase text-[10px] tracking-widest hover:underline">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
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
                
                {/* 状态反馈按钮 */}
                <button 
                  type="submit" 
                  disabled={status === "SENDING"}
                  className="bg-blue-600 text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl disabled:opacity-50"
                >
                  {status === "SENDING" ? "Transmitting..." : "Submit Inquiry"}
                </button>

                {status === "ERROR" && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 text-center">Transmission Error. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
