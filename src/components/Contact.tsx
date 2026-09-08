"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, User, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Car Rental / Cab",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `*New Contact Message - ATT Car Rental*`,
      `━━━━━━━━━━━━━━━━━━`,
      `• *Name*: ${formData.name}`,
      `• *Phone*: ${formData.phone}`,
      formData.email ? `• *Email*: ${formData.email}` : "",
      `• *Service Needed*: ${formData.serviceType}`,
      formData.message ? `• *Message*: ${formData.message}` : "",
      `━━━━━━━━━━━━━━━━━━`,
      `Please contact me regarding my travel requirements.`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = getWhatsAppLink(text);
    window.open(url, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            We&apos;re Here To Assist You
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight">
            Contact ATT Car Rental
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Reach out via phone, WhatsApp, email, or visit our Bangalore office. We provide prompt
            responses for all your local cab, outstation, airport, and tour package queries.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#2E1065] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Call Us Anytime
                  </span>
                  <h3 className="text-lg font-bold text-[#1E1B4B]">Phone Numbers</h3>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href={`tel:${BUSINESS_INFO.phones[0].display}`}
                      className="font-bold text-[#1D4ED8] hover:underline inline-flex items-center gap-1 text-sm sm:text-base"
                    >
                      {BUSINESS_INFO.phones[0].display}
                    </a>
                    <span className="hidden sm:inline text-slate-300">/</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phones[1].display}`}
                      className="font-bold text-[#1D4ED8] hover:underline inline-flex items-center gap-1 text-sm sm:text-base"
                    >
                      {BUSINESS_INFO.phones[1].display}
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Direct desk for instant car availability &amp; phone bookings.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Instant Chat
                  </span>
                  <h3 className="text-lg font-bold text-[#1E1B4B]">WhatsApp Support</h3>
                  <p className="text-xs text-slate-600">
                    Get quick fare quotes, vehicle photos, and itinerary confirmations.
                  </p>
                  <div className="pt-2">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Official Email
                  </span>
                  <h3 className="text-lg font-bold text-[#1E1B4B]">Email Enquiries</h3>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-semibold text-slate-800 hover:text-[#1D4ED8] text-sm block transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 pt-1">
                    Send corporate contracts, RFPs, and tour package queries.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#2E1065] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Office Address
                  </span>
                  <h3 className="text-lg font-bold text-[#1E1B4B]">Bangalore Office</h3>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <p className="text-xs text-slate-500 pt-1">
                    Proprietor: <strong className="text-slate-800">{BUSINESS_INFO.proprietor}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Send Direct Message
              </span>
              <h3 className="text-2xl font-extrabold text-[#1E1B4B] mt-1">
                Enquire or Request a Callback
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Fill out the form below and we will contact you immediately via WhatsApp or phone.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">Message Sent to WhatsApp!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for contacting ATT Car Rental. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Required Service
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none"
                    >
                      <option value="Local Cab Booking">Local Cab Booking (Bangalore)</option>
                      <option value="Outstation Cab Service">Outstation Cab Service</option>
                      <option value="Airport Transfer (BLR)">Airport Transfer (BLR Airport)</option>
                      <option value="Innova Crysta Rental">Toyota Innova Crysta Rental</option>
                      <option value="Tempo Traveller Rental">Tempo Traveller Rental (12-17 Seater)</option>
                      <option value="Luxury Bus Rental">Luxury Bus Rental (Group)</option>
                      <option value="BMW Luxury Rental">BMW Luxury Car Rental</option>
                      <option value="Tour Package Enquiry">Tour Package Enquiry</option>
                      <option value="Corporate Travel Solution">Corporate Travel Solution</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Trip Details / Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide pickup location, destination, travel dates, passenger count, or any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#1D4ED8] outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2E1065] via-[#1E1B4B] to-[#1D4ED8] hover:scale-[1.01] shadow-lg shadow-purple-950/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-300" />
                    Submit Enquiry via WhatsApp
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phones[0].display}`}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#1D4ED8]" />
                    Call Now
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Location Section */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Visit Our Office
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
                Find ATT Car Rental on Google Maps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                #10/A, Mittal&apos;s Complex, Devi Nagar Main Road, Lottegollahalli, Bengaluru – 560094
              </p>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D4ED8] text-xs font-bold transition-all border border-blue-200 w-fit"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
            <iframe
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ATT Car Rental Bangalore Location"
              className="w-full h-full grayscale-[0.2] contrast-105"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
