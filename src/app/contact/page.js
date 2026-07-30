'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // 这里的路径必须准确指向我们下一步要创建的文件
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setStatus("SUCCESS");
        e.target.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="text-left">
          <h1 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Direct Communication</h1>
          <h2 className="text-[60px] font-black text-black leading-none mb-10 uppercase tracking-tighter">Contact Us</h2>
          <p className="text-2xl font-black text-black underline">coretoneaudio01@163.com</p>
        </div>
        
        <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[480px]">
          {status === "SUCCESS" ? (
            <div className="text-center py-20 flex flex-col items-center justify-center h-full">
              <div className="text-blue-500 text-6xl mb-6">✓</div>
              <h3 className="text-white text-2xl font-black uppercase">Received</h3>
              <p className="text-gray-400">Our engineers will respond shortly.</p>
              <button onClick={() => setStatus("")} className="mt-8 text-blue-500 font-bold uppercase text-xs hover:underline">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Name</label>
                <input name="name" required className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Email</label>
                <input type="email" name="email" required className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-left block">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all resize-none font-bold"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === "SENDING"}
                className="bg-blue-600 text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all disabled:opacity-50"
              >
                {status === "SENDING" ? "Processing..." : "Submit Inquiry"}
              </button>
              {status === "ERROR" && <p className="text-red-500 text-center text-xs mt-2 uppercase font-bold tracking-widest">Link Error. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
