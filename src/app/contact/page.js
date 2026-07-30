'use client';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// 初始化您的专属数据库连接
const supabase = createClient(
  'https://lvhbmoklunrsfnnvonsh.supabase.co',
  'sb_publishable_k0LxhDn7fEe70dm5G4KpfQ_YQ4ezKgq'
);

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const formData = new FormData(e.target);
    const payload = {
      sender_name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      created_at: new Date().toISOString()
    };

    try {
      const { error } = await supabase
        .from('inquiries') // 存入我们之前建好的询盘表
        .insert([payload]);

      if (error) throw error;
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
        <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4">Direct Communication</h1>
        <h2 className="text-[60px] font-black text-black leading-none mb-16 uppercase tracking-tighter">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#71717A] text-lg leading-relaxed mb-8 uppercase font-medium">
              Precision audio technical specifications and procurement inquiries.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">Support Email</p>
                <p className="text-2xl font-black text-black tracking-tight underline">coretoneaudio01@163.com</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[450px]">
            {status === "SUCCESS" ? (
              <div className="text-center py-20 flex flex-col items-center justify-center">
                <div className="text-blue-500 text-6xl mb-6">✓</div>
                <h3 className="text-white text-2xl font-black uppercase mb-4">Inquiry Received</h3>
                <p className="text-gray-400 font-bold uppercase text-xs">Our engineers will contact you at coretoneaudio01@163.com.</p>
                <button onClick={() => setStatus("")} className="mt-8 text-blue-500 font-black uppercase text-[10px] tracking-widest hover:underline">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input name="name" required placeholder="NAME" className="w-full bg-[#111] border-b border-gray-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" name="email" required placeholder="EMAIL" className="w-full bg-[#111] border-b border-gray-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Detailed Request</label>
                  <textarea name="message" required rows="4" placeholder="DESCRIBE YOUR NEEDS..." className="w-full bg-[#111] border-b border-gray-800 text-white p-3 outline-none focus:border-blue-600 transition-all resize-none font-bold"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "SENDING"}
                  className="bg-blue-600 text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl"
                >
                  {status === "SENDING" ? "Transmitting..." : "Submit Inquiry"}
                </button>
                {status === "ERROR" && <p className="text-red-500 text-[10px] font-bold uppercase mt-2">Internal Link Failure. Please use email directly.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
