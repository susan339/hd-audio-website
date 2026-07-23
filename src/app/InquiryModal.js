'use client';
import React, { useState } from 'react';

export default function InquiryModal({ isOpen, onClose, targetEmail }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:${targetEmail}?subject=New Inquiry from exactproaudiodrivers.com&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AWhatsApp: ${whatsapp}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg p-8 shadow-2xl rounded-sm border-t-8 border-blue-600 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl text-zinc-400 hover:text-black transition-colors"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-black tracking-tighter text-zinc-900 mb-2">SEND INQUIRY</h3>
        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">Professional Audio Solutions</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">Full Name *</label>
            <input 
              name="name"
              required
              type="text" 
              className="w-full border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-all" 
              placeholder="e.g. John Doe"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">Email Address *</label>
              <input 
                name="email"
                required
                type="email" 
                className="w-full border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-all" 
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">WhatsApp Number</label>
              <input 
                name="whatsapp"
                type="text" 
                className="w-full border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-all" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">Your Requirements *</label>
            <textarea 
              name="message"
              required
              className="w-full border border-zinc-200 px-4 py-3 text-sm h-32 focus:outline-none focus:border-blue-600 transition-all resize-none" 
              placeholder="Please describe the models and quantity you are interested in..."
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-black text-white font-bold py-4 uppercase tracking-[0.3em] text-xs hover:bg-blue-600 transition-all shadow-lg"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
