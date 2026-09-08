"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Briefcase, Wind, Check, Phone, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { FLEET, BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

interface FleetProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  const [filter, setFilter] = useState<"all" | "sedan" | "suv" | "luxury" | "group">("all");

  const filteredFleet = FLEET.filter((vehicle) => {
    if (filter === "all") return true;
    if (filter === "sedan") return vehicle.id === "etios";
    if (filter === "suv") return vehicle.id === "innova-crysta";
    if (filter === "luxury") return vehicle.id === "bmw";
    if (filter === "group") return vehicle.id === "tempo-traveller" || vehicle.id === "buses";
    return true;
  });

  return (
    <section id="fleet" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#2E1065] text-xs font-bold uppercase tracking-wider">
            Premium &amp; Well-Maintained Vehicles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight">
            Our Premium Fleet
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Choose from our immaculate range of sedans, family MPVs, luxury executive cars, and group
            tour coaches. Every vehicle is thoroughly sanitized and chauffeur-driven for your comfort.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Vehicles" },
              { id: "sedan", label: "Sedans" },
              { id: "suv", label: "Innova Crysta MPV" },
              { id: "luxury", label: "BMW Luxury" },
              { id: "group", label: "Tempo Traveller & Buses" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#2E1065] text-white shadow-md shadow-purple-950/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col group"
            >
              {/* Vehicle Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-extrabold text-[#1E1B4B] shadow-sm">
                    {vehicle.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-[#1D4ED8] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-[#1E1B4B]">
                      {vehicle.name}
                    </h3>
                  </div>

                  {/* Short Description - Exact match */}
                  <p className="text-slate-700 font-medium text-sm mt-1.5 leading-snug">
                    {vehicle.shortDescription}
                  </p>

                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    {vehicle.detailedDescription}
                  </p>

                  {/* Vehicle Spec Badges */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-700 font-semibold">
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                      <Users className="w-4 h-4 text-[#1D4ED8]" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                      <Briefcase className="w-4 h-4 text-[#2E1065]" />
                      <span>{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg col-span-2">
                      <Wind className="w-4 h-4 text-emerald-600" />
                      <span>{vehicle.ac}</span>
                    </div>
                  </div>

                  {/* Feature check list */}
                  <div className="mt-4 space-y-1.5">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    onClick={() => onSelectVehicle(vehicle.name)}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2E1065] to-[#1D4ED8] hover:scale-[1.02] shadow-md shadow-purple-950/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppLink(
                      `Hello ATT Car Rental, I would like to enquire about booking the ${vehicle.name} (${vehicle.category}). Please share availability.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center justify-center gap-1.5"
                    title="Enquire on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span className="sm:hidden">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
