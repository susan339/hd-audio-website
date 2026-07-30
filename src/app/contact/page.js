'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnnqqlqz", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

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
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">WhatsApp / Voice</p>
                <p className="text-2xl font-black text-black tracking-tight">+86 155 2108 3699</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[500px]">
            {status === "SUCCESS" ? (
              <div className="text-center py-20 flex flex-col items-center justify-center h-full">
                <div className="text-[#2563EB] text-6xl mb-6">✓</div>
                <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">Message Received</h3>
                <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Our team will respond within 24 hours.</p>
                <button onClick={() => setStatus("")} className="mt-8 text-[#2563EB] font-black uppercase text-[10px] tracking-widest hover:underline">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
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
                  disabled={status === "SENDING"}
                  className="bg-[#2563EB] text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl disabled:opacity-50"
                >
                  {status === "SENDING" ? "Transmitting..." : "Submit Inquiry"}
                </button>
                {status === "ERROR" && <p className="text-red-500 text-xs font-bold uppercase mt-2">Transmission Failure. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
