"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, Car, Shield, Award, CheckCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";
import { BookingWidget } from "@/components/BookingWidget";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-screen pt-4 pb-16 lg:pb-24 overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Background Image with Deep Purple to Royal Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fleet.jpg"
          alt="ATT Car Rental Fleet in Bangalore"
          fill
          priority
          className="object-cover object-center brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E0845]/90 via-[#0F172A]/80 to-[#0B0F19] backdrop-blur-[1px]" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-10">
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-slate-100 text-xs sm:text-sm font-semibold shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-400 font-bold">Bangalore&apos;s Trusted Cab &amp; Rental Service</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">Ramegowda P. S.</span>
          </div>

          {/* Headline - Exact Prompt Match */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Reliable Car Rental &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Cab Services
            </span>{" "}
            in Bangalore
          </h1>

          {/* Supporting Text - Exact Prompt Match */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Comfortable cars, professional service and reliable transportation for local, airport,
            outstation, corporate and group travel.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {/* Book a Cab */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#2E1065] via-[#1E1B4B] to-[#1D4ED8] hover:scale-105 shadow-xl shadow-purple-900/30 border border-purple-400/30 transition-all cursor-pointer"
            >
              <Car className="w-5 h-5 text-emerald-300" />
              Book a Cab
            </button>

            {/* Call Now */}
            <a
              href={`tel:${BUSINESS_INFO.phones[0].display}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              Call Now: {BUSINESS_INFO.phones[0].display}
            </a>

            {/* WhatsApp Us */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              WhatsApp Us
            </a>
          </div>

          {/* Fleet Highlights pills */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-300">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Toyota Etios</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Innova Crysta</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">BMW Luxury Sedan</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Tempo Traveller</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Deluxe Buses</span>
          </div>
        </div>

        {/* Hero Interactive Booking Widget */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
};
