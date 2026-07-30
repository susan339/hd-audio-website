'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Database, Newspaper, MessageSquare, Settings, Trash2, X, Eye, User, Mail, Clock, CheckCircle } from 'lucide-react';

// 初始化数据库
const supabase = createClient(
  'https://lvhbmoklunrsfnnvonsh.supabase.co',
  'sb_publishable_k0LxhDn7fEe70dm5G4KpfQ_YQ4ezKgq'
);

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
    const { data } = await supabase.from(activeTab).select('*').order('created_at', { ascending: false });
    if (data) setItems(data);
    setLoading(false);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    await supabase.from('inquiries').update({ status: newStatus }).eq('id', id);
    setEditingItem(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (window.confirm('警告：确认删除该记录吗？')) {
      await supabase.from(activeTab).delete().eq('id', id);
      fetchData();
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 max-w-[1500px] mx-auto px-6 text-white selection:bg-[#2563EB]">
      <div className="flex flex-col lg:flex-row gap-12 text-left">
        {/* 侧边栏 */}
        <aside className="w-full lg:w-64 space-y-2">
          <h2 className="px-4 py-2 font-mono text-[10px] uppercase text-zinc-500 tracking-[0.3em] mb-4">Command Center</h2>
          {[
            { id: 'products', label: '产品管理', icon: Database },
            { id: 'inquiries', label: '客户询盘', icon: MessageSquare },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-4 px-4 py-3 font-medium text-xs uppercase transition-all border border-transparent ${activeTab === tab.id ? 'bg-[#141414] border-[#262626] text-[#2563EB]' : 'text-zinc-500 hover:bg-[#141414]/50'}`}>
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </aside>

        {/* 列表区域 */}
        <main className="flex-1">
          <h1 className="text-3xl font-black uppercase mb-12 tracking-tighter">{activeTab}</h1>
          <div className="bg-[#141414] border border-[#262626] rounded-[24px] overflow-hidden shadow-2xl">
            {loading ? <div className="p-20 text-center animate-pulse">CONNECTING...</div> : items.length > 0 ? (
              <table className="w-full text-xs text-left">
                <thead className="bg-[#0A0A0A] border-b border-[#262626] text-zinc-500 uppercase">
                  <tr><th className="px-8 py-5">名称/标识</th><th className="px-8 py-5 text-right">操作</th></tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  {items.map((item) => (
                    <tr key={item.id} onClick={() => setEditingItem(item)} className="hover:bg-[#0A0A0A]/50 cursor-pointer transition-all">
                      <td className="px-8 py-6">
                        <p className="font-bold uppercase">{item.sender_name || item.name || 'USER'}</p>
                        <p className="text-[10px] text-zinc-500 mt-1">{item.email || item.model_id}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-4">
                           <Eye size={18} className="text-zinc-500 hover:text-white" />
                           <Trash2 size={18} className="text-zinc-500 hover:text-red-500" onClick={(e) => {e.stopPropagation(); handleDelete(item.id)}} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <div className="p-20 text-center text-zinc-500">NO DATA FOUND.</div>}
          </div>
        </main>
      </div>

      {/* 详情查看弹窗 - 关键功能补全 */}
      {editingItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
          <div className="bg-[#141414] border border-[#262626] w-full max-w-xl rounded-[32px] p-10 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-black uppercase">Inquiry Details</h2>
              <button onClick={() => setEditingItem(null)}><X size={28} className="text-zinc-500 hover:text-white" /></button>
            </div>
            
            <div className="space-y-8 text-left">
              <div><p className="text-[10px] text-blue-500 font-bold uppercase mb-2">Customer</p><p className="text-xl font-black uppercase">{editingItem.sender_name || 'N/A'}</p></div>
              <div><p className="text-[10px] text-blue-500 font-bold uppercase mb-2">Contact</p><p className="text-xl font-black underline">{editingItem.email || 'N/A'}</p></div>
              <div><p className="text-[10px] text-blue-500 font-bold uppercase mb-2">Message</p>
                <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-zinc-800 text-zinc-300 leading-relaxed whitespace-pre-wrap">{editingItem.message || 'No content.'}</div>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-zinc-600 uppercase font-mono"><Clock size={12} /> {new Date(editingItem.created_at).toLocaleString()}</div>
            </div>

            <button onClick={() => setEditingItem(null)} className="mt-10 w-full bg-blue-600 py-4 font-black uppercase tracking-widest rounded-full">Close View</button>
          </div>
        </div>
      )}
    </div>
  );
}
