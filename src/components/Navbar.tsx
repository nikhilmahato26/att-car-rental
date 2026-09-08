"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageSquare, Menu, X, Clock, MapPin, ChevronRight, Car } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/data/attData";

interface NavbarProps {
  onOpenBooking: (vehicle?: string, service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Tour Packages", href: "#packages" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-[#1E1B4B] text-slate-200 text-xs py-2 px-4 border-b border-purple-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              #10/A, Mittal&apos;s Complex, Devi Nagar, Bengaluru
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              24/7 Travel &amp; Cab Assistance
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-slate-400">Call Us Directly:</span>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].display}`}
              className="font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {BUSINESS_INFO.phones[0].display}
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phones[1].display}`}
              className="font-semibold text-white hover:text-emerald-400 transition-colors"
            >
              {BUSINESS_INFO.phones[1].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2E1065] to-[#1D4ED8] p-2 flex items-center justify-center shadow-md shadow-purple-950/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-[#1E1B4B]">
                  ATT
                </span>
                <span className="font-bold text-xl tracking-tight text-[#1D4ED8]">
                  CAR RENTAL
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase -mt-1">
                Travel Smart, Achieve More
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#1D4ED8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick WhatsApp Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              WhatsApp Us
            </a>

            {/* Book a Cab Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2E1065] to-[#1D4ED8] hover:from-[#1E0845] hover:to-[#1E40AF] shadow-md shadow-purple-950/20 transition-all hover:scale-105"
            >
              <Car className="w-4 h-4" />
              Book a Cab
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#2E1065]"
            >
              Book Cab
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-sm ml-auto h-full flex flex-col p-6 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2E1065] flex items-center justify-center text-white font-black text-sm">
                  ATT
                </div>
                <span className="font-bold text-slate-900 text-lg">ATT Car Rental</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1D4ED8]"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            {/* Action Buttons in Drawer */}
            <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2E1065] to-[#1D4ED8] flex items-center justify-center gap-2 shadow-md"
              >
                <Car className="w-4 h-4" />
                Book a Cab Now
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#25D366] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phones[0].display}`}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Call: {BUSINESS_INFO.phones[0].display}
              </a>

              <div className="pt-2 text-center text-xs text-slate-500">
                <p className="font-semibold text-slate-700">{BUSINESS_INFO.proprietor}</p>
                <p>{BUSINESS_INFO.address.street}</p>
                <p>Bengaluru – 560094</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
