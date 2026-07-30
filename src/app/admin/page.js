'use client';
import React, { useState, useEffect } from 'react';

// 配置您的专属数据库凭证
const DB_URL = 'https://lvhbmoklunrsfnnvonsh.supabase.co/rest/v1';
const API_KEY = 'sb_publishable_k0LxhDn7fEe70dm5G4KpfQ_YQ4ezKgq';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('products');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${DB_URL}/${activeTab}?select=*&order=created_at.desc`, {
        headers: { 'apikey': API_KEY, 'Authorization': `Bearer ${API_KEY}` }
      });
      const data = await response.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('警告：确认彻底删除该记录吗？')) {
      await fetch(`${DB_URL}/${activeTab}?id=eq.${id}`, {
        method: 'DELETE',
        headers: { 'apikey': API_KEY, 'Authorization': `Bearer ${API_KEY}` }
      });
      fetchData();
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 max-w-[1500px] mx-auto px-6 text-white text-left selection:bg-[#2563EB]">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* 简洁侧边栏 */}
        <aside className="w-full lg:w-64 space-y-2">
          <h2 className="px-4 py-2 font-mono text-[10px] uppercase text-zinc-500 tracking-[0.3em] mb-4">Command Center</h2>
          <button onClick={() => setActiveTab('products')} className={`w-full flex items-center gap-4 px-4 py-3 font-bold text-xs uppercase border border-transparent rounded-lg ${activeTab === 'products' ? 'bg-[#141414] border-zinc-800 text-[#2563EB]' : 'text-zinc-500 hover:bg-[#141414]'}`}>📦 产品管理</button>
          <button onClick={() => setActiveTab('inquiries')} className={`w-full flex items-center gap-4 px-4 py-3 font-bold text-xs uppercase border border-transparent rounded-lg ${activeTab === 'inquiries' ? 'bg-[#141414] border-zinc-800 text-[#2563EB]' : 'text-zinc-500 hover:bg-[#141414]'}`}>💬 客户询盘</button>
        </aside>

        {/* 列表显示 */}
        <main className="flex-1">
          <h1 className="text-3xl font-black uppercase mb-12 tracking-tighter">{activeTab === 'products' ? 'Products' : 'Inquiries'}</h1>
          <div className="bg-[#141414] border border-[#262626] rounded-[24px] overflow-hidden">
            {loading ? (
              <div className="p-20 text-center text-blue-500 animate-pulse">CONNECTING TO DATABASE...</div>
            ) : items.length > 0 ? (
              <table className="w-full text-xs">
                <thead className="bg-[#0A0A0A] border-b border-[#262626] text-zinc-500 uppercase">
                  <tr><th className="px-8 py-5 font-bold text-left">IDENTIFIER</th><th className="px-8 py-5 text-right">ACTION</th></tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  {items.map((item) => (
                    <tr key={item.id} onClick={() => setEditingItem(item)} className="hover:bg-[#0A0A0A]/50 cursor-pointer transition-all">
                      <td className="px-8 py-6">
                        <p className="font-black text-sm uppercase">{item.name || item.sender_name || 'NODE'}</p>
                        <p className="text-[10px] text-zinc-500 mt-1">{item.model_id || item.email || item.id.slice(0,8)}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }} className="text-zinc-600 hover:text-red-500 p-2">DELETE</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-20 text-center text-zinc-500 uppercase">No records found.</div>
            )}
          </div>
        </main>
      </div>

      {/* 详情查看弹窗 - 关键逻辑修复 */}
      {editingItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
          <div className="bg-[#141414] border border-[#262626] w-full max-w-xl rounded-[32px] p-10 shadow-2xl overflow-hidden relative">
            <button onClick={() => setEditingItem(null)} className="absolute top-8 right-8 text-zinc-500 hover:text-white text-2xl font-bold">×</button>
            <h2 className="text-2xl font-black uppercase mb-10 tracking-tighter">Information Detail</h2>
            
            <div className="space-y-8">
              <div><p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-2">Primary Identifier</p><p className="text-xl font-black">{editingItem.name || editingItem.sender_name || 'N/A'}</p></div>
              <div><p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-2">Contact / Model ID</p><p className="text-xl font-black underline">{editingItem.email || editingItem.model_id || 'N/A'}</p></div>
              <div>
                <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-2">Message Content / Specs</p>
                <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-zinc-800 text-zinc-300 leading-relaxed max-h-48 overflow-y-auto">
                   {editingItem.message ? editingItem.message : JSON.stringify(editingItem.specs || {}, null, 2)}
                </div>
              </div>
            </div>
            <button onClick={() => setEditingItem(null)} className="mt-10 w-full bg-blue-600 py-5 font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-colors">Close Data Node</button>
          </div>
        </div>
      )}
    </div>
  );
}
