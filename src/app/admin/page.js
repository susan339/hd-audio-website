'use client';
import React, { useState } from 'react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  // Product Form State
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    category: '',
    image: '',
    description: '',
    specs: ''
  });

  // Site Settings State
  const [settings, setSettings] = useState({
    whatsapp: '8615521083699',
    email: '1123696584@qq.com'
  });

  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
  const REPO = 'susan339/hd-audio-website';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setStatus('Uploading product...');
    
    const fileName = `${product.slug || product.name.toLowerCase().replace(/ /g, '-')}.md`;
    const path = `content/products/${fileName}`;
    
    const content = `---
title: "${product.name}"
category: "${product.category}"
image: "${product.image}"
description: "${product.description}"
specs:
${product.specs.split('\n').map(line => `  - "${line}"`).join('\n')}
---
`;

    const base64Content = btoa(unescape(encodeURIComponent(content)));

    try {
      const resp = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
        method: 'PUT',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Add product: ${product.name}`,
          content: base64Content,
        }),
      });

      if (resp.ok) {
        setStatus('Product added successfully!');
        setProduct({ name: '', slug: '', category: '', image: '', description: '', specs: '' });
      } else {
        const err = await resp.json();
        setStatus(`Error: ${err.message}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  const handleUpdateSettings = async (e) => {
    e.preventDefault();
    setStatus('Updating settings...');
    // In a real scenario, we'd update a config file. 
    // Since the user asked to update "WhatsApp/Email in layout", 
    // and layout.js is a component, we'd usually use a JSON file that layout reads.
    // For now, let's push a settings.json file that we can later make layout read.
    
    const path = 'content/settings.json';
    const content = JSON.stringify(settings, null, 2);
    const base64Content = btoa(unescape(encodeURIComponent(content)));

    try {
      // First, get the SHA if file exists
      const getResp = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
      });
      let sha;
      if (getResp.ok) {
        const data = await getResp.json();
        sha = data.sha;
      }

      const resp = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
        method: 'PUT',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Update site settings',
          content: base64Content,
          sha: sha
        }),
      });

      if (resp.ok) {
        setStatus('Settings updated successfully!');
      } else {
        const err = await resp.json();
        setStatus(`Error: ${err.message}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <form onSubmit={handleLogin} className="bg-white p-10 shadow-2xl rounded-sm border-t-4 border-blue-600 w-full max-w-md">
          <h1 className="text-2xl font-black mb-6 tracking-tighter">ADMIN ACCESS</h1>
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="w-full border p-3 mb-4 outline-none focus:border-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-black text-white py-3 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-black tracking-tighter">DASHBOARD</h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black">Logout</button>
        </div>

        {status && (
          <div className="mb-6 p-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest animate-pulse">
            {status}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Add Product */}
          <section className="bg-white p-8 shadow-xl border-t-4 border-black">
            <h2 className="text-xl font-black mb-6 tracking-tighter uppercase">Add Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input 
                placeholder="Product Name" 
                className="w-full border p-3 text-sm outline-none focus:border-blue-600"
                value={product.name}
                onChange={(e) => setProduct({...product, name: e.target.value})}
                required
              />
              <input 
                placeholder="Slug (e.g. hf-1200)" 
                className="w-full border p-3 text-sm outline-none focus:border-blue-600"
                value={product.slug}
                onChange={(e) => setProduct({...product, slug: e.target.value})}
              />
              <input 
                placeholder="Category" 
                className="w-full border p-3 text-sm outline-none focus:border-blue-600"
                value={product.category}
                onChange={(e) => setProduct({...product, category: e.target.value})}
              />
              <input 
                placeholder="Image URL" 
                className="w-full border p-3 text-sm outline-none focus:border-blue-600"
                value={product.image}
                onChange={(e) => setProduct({...product, image: e.target.value})}
              />
              <textarea 
                placeholder="Description" 
                className="w-full border p-3 text-sm h-24 outline-none focus:border-blue-600 resize-none"
                value={product.description}
                onChange={(e) => setProduct({...product, description: e.target.value})}
              ></textarea>
              <textarea 
                placeholder="Specs (one per line)" 
                className="w-full border p-3 text-sm h-24 outline-none focus:border-blue-600 resize-none"
                value={product.specs}
                onChange={(e) => setProduct({...product, specs: e.target.value})}
              ></textarea>
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 transition-all">Publish Product</button>
            </form>
          </section>

          {/* Site Settings */}
          <section className="bg-white p-8 shadow-xl border-t-4 border-blue-600">
            <h2 className="text-xl font-black mb-6 tracking-tighter uppercase">Site Settings</h2>
            <form onSubmit={handleUpdateSettings} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">WhatsApp Number</label>
                <input 
                  className="w-full border p-3 text-sm outline-none focus:border-blue-600"
                  value={settings.whatsapp}
                  onChange={(e) => setSettings({...settings, whatsapp: e.target.value})}
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">Inquiry Email</label>
                <input 
                  className="w-full border p-3 text-sm outline-none focus:border-blue-600"
                  value={settings.email}
                  onChange={(e) => setSettings({...settings, email: e.target.value})}
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-all">Update Settings</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
