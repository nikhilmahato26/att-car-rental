"use client";

import React from "react";
import Image from "next/image";
import { Check, Shield, MapPin, User, Award, ArrowRight, Phone } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Card */}
          <div className="relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/images/about-service.jpg"
                alt="ATT Car Rental Professional Chauffeur and Service"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  Bangalore Chauffeur Service
                </span>
                <p className="text-lg font-bold">
                  Courteous, Punctual &amp; Route-Experienced Drivers
                </p>
              </div>
            </div>

            {/* Floating Proprietor Card */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#2E1065] font-black text-lg shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Proprietor
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900">{BUSINESS_INFO.proprietor}</h4>
                  <p className="text-xs text-slate-500">ATT Car Rental, Bengaluru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
              About ATT Car Rental
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight leading-tight">
              Your Trusted Bangalore Transportation Partner
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong className="text-slate-900">ATT Car Rental</strong> is a Bangalore-based transportation
              and travel service providing dependable cab rentals, chauffeur-driven cars, group transportation,
              and comprehensive domestic and international travel solutions.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Under the leadership of proprietor <strong>{BUSINESS_INFO.proprietor}</strong>, our service is built
              around four non-negotiable standards: passenger comfort, vehicle cleanliness, route reliability, and
              respectful professional conduct. Whether you need a quick airport drop to Kempegowda International Airport,
              an executive sedan for business meetings, or a spacious Tempo Traveller for family holidays, we ensure
              a smooth and memorable journey.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: "Comfort First", desc: "Well-padded seats, smooth AC, and spotless interiors." },
                { title: "Punctual Service", desc: "Reliable airport and city pickups with timely arrivals." },
                { title: "Convenience", desc: "Easy phone and WhatsApp booking with immediate support." },
                { title: "Professional Service", desc: "Dedicated drivers trained in safety and courteous driving." },
              ].map((pillar, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-sm font-bold text-[#1E1B4B] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Bangalore Address Tag */}
            <div className="pt-2 flex items-start gap-3 text-xs text-slate-600 bg-purple-50/70 p-4 rounded-xl border border-purple-100">
              <MapPin className="w-5 h-5 text-[#2E1065] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2E1065] block">Bangalore Registered Office</span>
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].display}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2E1065] to-[#1D4ED8] hover:scale-105 shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                Call {BUSINESS_INFO.phones[0].display}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
