'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    const formData = new FormData(e.target);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      const data = await response.json();
      if (data.success) { setStatus("SUCCESS"); e.target.reset(); } 
      else { setStatus("ERROR"); }
    } catch (error) { setStatus("ERROR"); }
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="text-left">
          <h1 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Direct Support</h1>
          <h2 className="text-[60px] font-black text-black leading-none mb-10 uppercase tracking-tighter">Contact Us</h2>
          <p className="text-2xl font-black text-black underline">coretoneaudio01@163.com</p>
        </div>
        <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[480px]">
          {status === "SUCCESS" ? (
            <div className="text-center py-20 flex flex-col items-center justify-center h-full">
              <div className="text-blue-500 text-6xl mb-6">✓</div>
              <h3 className="text-white text-2xl font-black uppercase">Received</h3>
              <p className="text-gray-400">We will respond shortly.</p>
              <button onClick={() => setStatus("")} className="mt-8 text-blue-500 font-bold uppercase text-xs hover:underline">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Name</label><input name="name" required className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" /></div>
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email</label><input type="email" name="email" required className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all font-bold" /></div>
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message</label><textarea name="message" required rows="4" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all resize-none font-bold"></textarea></div>
              <button type="submit" disabled={status === "SENDING"} className="bg-blue-600 text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all">{status === "SENDING" ? "Sending..." : "Submit"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
