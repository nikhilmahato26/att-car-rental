"use client";

import React from "react";
import {
  ShieldCheck,
  UserCheck,
  Sparkles,
  SprayCan,
  Map,
  UsersRound,
  Gem,
  CalendarCheck,
  HeartHandshake,
  Clock,
  Phone,
  MessageSquare,
} from "lucide-react";
import { WHY_CHOOSE_US, BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#1D4ED8]" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-[#2E1065]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case "SprayCan":
        return <SprayCan className="w-6 h-6 text-blue-600" />;
      case "Map":
        return <Map className="w-6 h-6 text-purple-700" />;
      case "UsersRound":
        return <UsersRound className="w-6 h-6 text-[#1D4ED8]" />;
      case "Gem":
        return <Gem className="w-6 h-6 text-amber-500" />;
      case "CalendarCheck":
        return <CalendarCheck className="w-6 h-6 text-emerald-600" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#2E1065]" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#1D4ED8]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Our Core Commitments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight">
            Why Choose ATT Car Rental
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We prioritize passenger comfort, dependable service, and transparent communication for every
            ride across Bangalore and beyond.
          </p>
        </div>

        {/* 10 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300 flex flex-col justify-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-purple-50 flex items-center justify-center mb-4 transition-colors">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-[#1E1B4B] mb-2 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bangalore Direct Contact Box */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Need Immediate Cab Assistance?</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Our operations desk in Bangalore is active 24/7 for urgent airport drops and bookings.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phones[0].display}`}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#2E1065] hover:bg-[#1E0845] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call {BUSINESS_INFO.phones[0].display}
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
