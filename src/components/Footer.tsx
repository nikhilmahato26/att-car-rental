"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, Car, ArrowUpRight, Heart, Shield } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink, LOCAL_SEO_KEYWORDS } from "@/data/attData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Tagline (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center relative w-56 sm:w-64 h-20 sm:h-24 bg-white p-2 rounded-2xl shadow-md">
              <Image 
                src="/logo.jpeg" 
                alt="ATT Car Rental Logo" 
                fill
                className="object-contain p-1"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Bangalore&apos;s premier transportation and travel service. Providing reliable local cab rentals,
              Kempegowda airport transfers, outstation cab journeys, and group tours with sanitized, well-maintained vehicles.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                Proprietor: <span className="text-white font-semibold">{BUSINESS_INFO.proprietor}</span>
              </p>
              <p>Registered Office: Devi Nagar, Lottegollahalli, Bengaluru</p>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phones[0].display}`}
                className="w-10 h-10 rounded-xl bg-purple-900/40 text-purple-300 hover:bg-[#2E1065] hover:text-white flex items-center justify-center transition-all"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-300 hover:bg-[#1D4ED8] hover:text-white flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">Available Fleet</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">Tour Packages</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Fleet */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Fleet</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">Toyota Etios (Sedan)</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">Maruti Suzuki Ertiga (MPV)</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">Toyota Innova Crysta (MPV)</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">BMW Luxury Sedan</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">TT / Tempo Traveller</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">Luxury Tourist Buses</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Airport Taxi Bangalore</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Corporate Travel</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phones[0].display}`} className="hover:text-white font-semibold">
                    {BUSINESS_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phones[1].display}`} className="hover:text-white font-semibold">
                    {BUSINESS_INFO.phones[1].display}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Keywords Section */}
        <div className="py-6 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              Popular Searches:
            </span>
            {LOCAL_SEO_KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/60"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>ATT Car Rental</strong>. All Rights Reserved. Proprietor: {BUSINESS_INFO.proprietor}.
          </p>
          <div className="flex items-center gap-6">
            <span>Bangalore, Karnataka</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">Travel Smart, Achieve More</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
