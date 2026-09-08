"use client";

import React, { useState } from "react";
import { Car, MapPin, Calendar, Clock, Phone, Send, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { FLEET, BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

export const BookingWidget: React.FC = () => {
  const [tripType, setTripType] = useState<"Local" | "Outstation" | "Airport" | "Tour Package">("Airport");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("Toyota Innova Crysta");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = [
      `*Cab / Car Rental Enquiry - ATT Car Rental*`,
      `━━━━━━━━━━━━━━━━━━`,
      `• *Trip Type*: ${tripType}`,
      `• *Vehicle*: ${vehicle}`,
      `• *Pickup*: ${pickup || "Bangalore"}`,
      `• *Destination*: ${destination || (tripType === "Airport" ? "Kempegowda Airport (BLR)" : "Within Karnataka")}`,
      `• *Travel Date*: ${date || "Immediate / Flexible"}`,
      phone ? `• *Contact Mobile*: ${phone}` : "",
      `━━━━━━━━━━━━━━━━━━`,
      `Hi ATT Car Rental team, please share vehicle availability and fair quote for this trip.`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = getWhatsAppLink(msg);
    window.open(url, "_blank");
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/25 border border-white/40 overflow-hidden backdrop-blur-md">
      {/* Trip Type Selector Tabs */}
      <div className="bg-[#1E1B4B] p-2 sm:p-2.5 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: "Airport", label: "Airport Transfer" },
          { id: "Local", label: "Local Bangalore" },
          { id: "Outstation", label: "Outstation Trip" },
          { id: "Tour Package", label: "Tour Package" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setTripType(tab.id as any)}
            className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap ${
              tripType === tab.id
                ? "bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white shadow-md"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form Area */}
      <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-7 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Pickup */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
              Pickup Location
            </label>
            <input
              type="text"
              required
              placeholder={tripType === "Airport" ? "Pickup Area / Terminal" : "e.g. Indiranagar, Bangalore"}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] focus:bg-white outline-none transition-all"
            />
          </div>

          {/* Destination */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Drop / Destination
            </label>
            <input
              type="text"
              required
              placeholder={tripType === "Airport" ? "BLR Airport / City Address" : "e.g. Mysore, Coorg, Ooty"}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] focus:bg-white outline-none transition-all"
            />
          </div>

          {/* Vehicle */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1">
              <Car className="w-3.5 h-3.5 text-[#2E1065]" />
              Preferred Vehicle
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] focus:bg-white outline-none transition-all"
            >
              {FLEET.map((v) => (
                <option key={v.id} value={v.name}>
                  {v.name} ({v.category})
                </option>
              ))}
            </select>
          </div>

          {/* Travel Date */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-700" />
              Travel Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] focus:bg-white outline-none transition-all"
            />
          </div>
        </div>

        {/* Submit & Secondary Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1 font-medium text-emerald-700">
              <Check className="w-4 h-4 text-emerald-600" /> Clean, Sanitized Fleet
            </span>
            <span className="flex items-center gap-1 font-medium text-slate-600">
              <Check className="w-4 h-4 text-blue-600" /> Professional Verified Drivers
            </span>
            <span className="flex items-center gap-1 font-medium text-purple-700">
              <Check className="w-4 h-4 text-purple-600" /> 24/7 Availability
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2E1065] via-[#1E1B4B] to-[#1D4ED8] hover:scale-[1.02] shadow-lg shadow-purple-950/20 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-emerald-400" />
              Check Availability &amp; Get WhatsApp Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
