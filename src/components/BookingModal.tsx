"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, MapPin, Car, Phone, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink, FLEET } from "@/data/attData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVehicle?: string;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultVehicle,
  defaultService,
}) => {
  const [tripType, setTripType] = useState<"Local" | "Outstation" | "Airport" | "Tour Package">("Local");
  const [selectedVehicle, setSelectedVehicle] = useState(defaultVehicle || "Toyota Innova Crysta");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultVehicle) {
      setSelectedVehicle(defaultVehicle);
    }
  }, [defaultVehicle]);

  useEffect(() => {
    if (defaultService) {
      if (defaultService.toLowerCase().includes("airport")) setTripType("Airport");
      else if (defaultService.toLowerCase().includes("outstation")) setTripType("Outstation");
      else if (defaultService.toLowerCase().includes("tour") || defaultService.toLowerCase().includes("package")) setTripType("Tour Package");
      else setTripType("Local");
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct detailed WhatsApp inquiry
    const msg = [
      `*New Booking Enquiry - ATT Car Rental*`,
      `━━━━━━━━━━━━━━━━━━`,
      `• *Trip Type*: ${tripType}`,
      `• *Vehicle*: ${selectedVehicle}`,
      `• *Pickup Location*: ${pickup || "To be confirmed"}`,
      `• *Destination*: ${destination || "Within Bangalore"}`,
      `• *Date*: ${date || "Flexible"}`,
      `• *Time*: ${time || "Flexible"}`,
      `• *Customer Name*: ${name}`,
      `• *Contact Phone*: ${phone}`,
      notes ? `• *Special Notes*: ${notes}` : "",
      `━━━━━━━━━━━━━━━━━━`,
      `Please provide vehicle availability and quote.`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = getWhatsAppLink(msg);
    window.open(waUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col">
        {/* Header with Deep Purple & Royal Blue */}
        <div className="bg-gradient-to-r from-[#2E1065] via-[#1E1B4B] to-[#1D4ED8] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wide uppercase text-emerald-300 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Instant WhatsApp Confirmation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Book a Cab or Car Rental</h3>
          <p className="text-slate-200 text-sm mt-1">
            Fill in your trip details to connect with ATT Car Rental instantly on WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Forwarded to WhatsApp!</h4>
              <p className="text-slate-600 max-w-md mx-auto">
                Our team at ATT Car Rental will review your requirements and respond promptly with car availability.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Trip Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                  Trip Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["Local", "Outstation", "Airport", "Tour Package"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setTripType(type)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                        tripType === type
                          ? "bg-[#2E1065] text-white border-[#2E1065] shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Select Preferred Vehicle
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <select
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent outline-none"
                    required
                  >
                    {FLEET.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.category} • {v.capacity})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Route Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Indiranagar / Devi Nagar / Airport"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Drop / Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Kempegowda Airport / Mysore / Coorg"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Pickup Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Phone / Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Number of passengers, luggage details, flight number, or specific stops..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry on WhatsApp
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].display}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#2E1065] hover:bg-[#1E0845] text-white font-semibold py-3.5 px-6 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
