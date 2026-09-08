"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex flex-col items-end gap-2">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 max-w-[220px] text-xs relative animate-bounce flex items-start gap-2">
          <div>
            <p className="font-bold text-slate-800">Need a Quick Cab?</p>
            <p className="text-slate-500 text-[11px]">Chat with ATT Car Rental on WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ATT Car Rental"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-xl shadow-emerald-600/35 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white"></span>
        <MessageSquare className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  );
};
