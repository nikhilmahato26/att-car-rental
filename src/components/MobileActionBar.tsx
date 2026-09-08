"use client";

import React from "react";
import { Phone, MessageSquare, Car } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center gap-2">
      {/* Call Now Button */}
      <a
        href={`tel:${BUSINESS_INFO.phones[0].display}`}
        className="flex-1 py-3 px-2 rounded-xl bg-[#2E1065] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-emerald-300" />
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-2 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <MessageSquare className="w-4 h-4 text-white" />
        WhatsApp
      </a>

      {/* Book Cab Button */}
      <button
        onClick={onOpenBooking}
        className="py-3 px-3.5 rounded-xl bg-[#1D4ED8] text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-transform shrink-0"
      >
        <Car className="w-4 h-4" />
        Book
      </button>
    </div>
  );
};
