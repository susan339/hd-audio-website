'use client';
import React from 'react';
import { Mail, User, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { IndustrialButton } from '../common/IndustrialButton';

export const InquiryView = ({ item, onUpdateStatus, onCancel }) => {
  return (
    <div className="space-y-8 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[#A3A3A3]">
            <User size={14} className="text-[#2563EB]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Customer Name</span>
          </div>
          <p className="text-xl font-black text-[#F5F5F5] uppercase tracking-tight pl-7">
            {item.sender_name || 'N/A'}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[#A3A3A3]">
            <Mail size={14} className="text-[#2563EB]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Return Address</span>
          </div>
          <p className="text-xl font-black text-[#F5F5F5] pl-7 underline decoration-[#2563EB]">
            {item.email || 'N/A'}
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-[#262626]">
        <div className="flex items-center gap-3 text-[#A3A3A3]">
          <MessageSquare size={14} className="text-[#2563EB]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Inquiry Details</span>
        </div>
        <div className="bg-[#0A0A0A] p-6 border border-[#262626] rounded-xl">
          <p className="text-[#F5F5F5] leading-relaxed whitespace-pre-wrap font-sans">
            {item.message || 'No message content provided.'}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-[#262626]">
        <div className="flex items-center gap-4 text-[#A3A3A3] font-mono text-[10px] uppercase">
          <Clock size={12} />
          Received: {new Date(item.created_at).toLocaleString()}
        </div>
        
        <div className="flex gap-4">
          {item.status !== 'processed' && (
            <IndustrialButton 
              onClick={() => onUpdateStatus(item.id, 'processed')}
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
            >
              <CheckCircle size={16} /> 标记为已处理
            </IndustrialButton>
          )}
          <IndustrialButton variant="outline" onClick={onCancel}>
            关闭窗口
          </IndustrialButton>
        </div>
      </div>
    </div>
  );
};
