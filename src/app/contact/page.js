'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState(""); // 用于记录发送状态

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("<https://formspree.io/f/mnnqqlqz>", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // 清空表单
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-8">
      <div className="max-w-[1200px] mx-auto text-left">
        <h1 className="text-[14px] font-bold text-blue-600 tracking-[0.4em] uppercase mb-4">Direct Communication</h1>
        <h2 className="text-[60px] font-black text-black leading-none mb-16 uppercase tracking-tighter">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#71717A] text-lg leading-relaxed mb-8 uppercase font-medium">
              Connect with our technical engineering team for precision audio specifications.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-1">Electronic Mail</p>
                <p className="text-2xl font-black text-black tracking-tight">coretoneaudio01@163.com</p>
              </div>
            </div>
          </div>

          {/* 表单区域 */}
          <div className="bg-black p-12 rounded-[40px] shadow-2xl relative">
            {status === "SUCCESS" ? (
              <div className="text-center py-20 animate-in fade-in">
                <div className="text-blue-500 text-5xl mb-6">✓</div>
                <h3 className="text-white text-2xl font-bold uppercase mb-4">Message Received</h3>
                <p className="text-gray-400">Our team will contact you at coretoneaudio01@163.com shortly.</p>
                <button onClick={() => setStatus("")} className="mt-8 text-blue-500 font-bold uppercase text-xs tracking-widest hover:underline">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
