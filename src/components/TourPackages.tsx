"use client";

import React from "react";
import Image from "next/image";
import { Globe, MapPin, CheckCircle, MessageSquare, Send, ArrowRight, ShieldCheck, Calendar } from "lucide-react";
import { TOUR_PACKAGES, getWhatsAppLink } from "@/data/attData";

interface TourPackagesProps {
  onOpenEnquiry: (packageTitle: string) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="packages" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            Curated Road &amp; Holiday Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            International &amp; Domestic Tour Packages
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether planning a family weekend retreat, a group pilgrimage, corporate offsite, or global holiday,
            ATT Car Rental provides customized travel packages with reliable ground transportation.
          </p>
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-400 font-semibold">
            ✦ All packages are customized to your preferred dates and group size
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/80 shadow-xl hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md">
                      {pkg.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                      {pkg.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug drop-shadow-md">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-700">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Package Highlights
                    </span>
                    {pkg.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  onClick={() => onOpenEnquiry(pkg.title)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2E1065] to-[#1D4ED8] hover:scale-[1.02] shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  Enquire Now
                </button>

                <a
                  href={getWhatsAppLink(
                    `Hello ATT Car Rental, I would like to enquire about your ${pkg.title}. Please share details and vehicle options.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-all flex items-center justify-center gap-1.5"
                  title="Enquire on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span className="sm:hidden">WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Inquiry Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-purple-950/70 via-slate-800 to-blue-950/70 border border-purple-800/40 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">Have a Unique Route or Multi-City Itinerary?</h4>
            <p className="text-slate-300 text-sm max-w-xl">
              Talk directly with our Bangalore travel planners to customize your route, halts, vehicle capacity, and schedule.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenEnquiry("Customized Multi-Day Tour")}
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer shadow-md"
            >
              Request Custom Itinerary
            </button>
            <a
              href={getWhatsAppLink("Hello ATT Car Rental, I want to plan a custom multi-day tour package from Bangalore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE5D] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
