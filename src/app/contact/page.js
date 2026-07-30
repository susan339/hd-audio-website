'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState(""); // "" | "SENDING" | "SUCCESS" | "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const form = e.target;
    const formData = new FormData(form);
    
    // 您的专属稳定发信密钥
    formData.append("access_key", "46e0339d-27b0-466d-a128-40b90f507567");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        setStatus("SUCCESS");
        form.reset(); // 发送成功后清空表单
        window.alert("Submission Successful! We will contact you at coretoneaudio01@163.com shortly.");
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
        <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4 font-sans text-left">Direct Communication</h1>
        <h2 className="text-[60px] font-black text-black leading-none mb-16 uppercase tracking-tighter text-left">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="text-left">
            <p className="text-[#71717A] text-lg leading-relaxed mb-8 uppercase font-medium">
              Connect with our technical engineering team for precision audio specifications and procurement.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1 text-left">Support Email</p>
                <p className="text-2xl font-black text-black tracking-tight underline text-left">coretoneaudio01@163.com</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-[40px] shadow-2xl relative min-h-[480px]">
            {/* 成功状态展示逻辑 */}
            {status === "SUCCESS" ? (
              <div className="text-center py-20 flex flex-col items-center justify-center h-full animate-in fade-in duration-500">
                <div className="text-blue-500 text-6xl mb-6 font-bold">✓</div>
                <h3 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter text-center">Transmission Successful</h3>
                <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest text-center">Our team will respond within 24 operational hours.</p>
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
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Inquiry Details</label>
                  <textarea name="message" required rows="4" placeholder="HOW CAN WE ASSIST?" className="w-full bg-[#111] border-b border-zinc-800 text-white p-3 outline-none focus:border-blue-600 transition-all resize-none font-bold"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "SENDING"}
                  className="bg-blue-600 text-white w-full py-4 font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl disabled:opacity-50"
                >
                  {status === "SENDING" ? "Transmitting..." : "Submit Inquiry"}
                </button>

                {status === "ERROR" && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 text-center">Network Error. Please use direct email.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
