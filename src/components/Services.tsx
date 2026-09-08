"use client";

import React from "react";
import {
  Car,
  KeyRound,
  Navigation,
  Compass,
  ArrowRightCircle,
  Repeat,
  PlaneTakeoff,
  Briefcase,
  MapPin,
  Globe2,
  Users,
  BusFront,
  Bus,
  Crown,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SERVICES, getWhatsAppLink } from "@/data/attData";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return <Car className="w-6 h-6 text-[#1D4ED8]" />;
      case "KeyRound":
        return <KeyRound className="w-6 h-6 text-[#2E1065]" />;
      case "Navigation":
        return <Navigation className="w-6 h-6 text-[#1D4ED8]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case "ArrowRightCircle":
        return <ArrowRightCircle className="w-6 h-6 text-blue-600" />;
      case "Repeat":
        return <Repeat className="w-6 h-6 text-purple-700" />;
      case "PlaneTakeoff":
        return <PlaneTakeoff className="w-6 h-6 text-[#1D4ED8]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#2E1065]" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-emerald-600" />;
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-blue-600" />;
      case "Users":
        return <Users className="w-6 h-6 text-purple-700" />;
      case "BusFront":
        return <BusFront className="w-6 h-6 text-[#1D4ED8]" />;
      case "Bus":
        return <Bus className="w-6 h-6 text-[#2E1065]" />;
      case "Crown":
        return <Crown className="w-6 h-6 text-amber-500" />;
      default:
        return <Car className="w-6 h-6 text-[#1D4ED8]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
            Comprehensive Transportation Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From quick city cab rides and airport transfers to outstation trips, corporate mobility,
            and luxury tour packages, ATT Car Rental delivers dependable service across Bangalore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#1E1B4B] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-bold text-[#1D4ED8] hover:text-[#1E1B4B] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Book Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={getWhatsAppLink(`Hello ATT Car Rental, I would like to enquire about your ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#25D366] transition-colors p-1.5 rounded-lg hover:bg-emerald-50"
                  title={`Enquire about ${service.title} on WhatsApp`}
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner Below Services */}
        <div className="mt-14 bg-gradient-to-r from-[#2E1065] via-[#1E1B4B] to-[#1D4ED8] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Need a Custom Route or Long-term Corporate Cab?</h3>
            <p className="text-slate-200 text-sm max-w-xl">
              We provide tailored transportation packages with transparent billing, experienced chauffeurs, and well-maintained vehicles.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectService("Custom Travel Package")}
              className="px-6 py-3 rounded-xl bg-white text-[#1E1B4B] font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer shadow-md"
            >
              Get Custom Quote
            </button>
            <a
              href={getWhatsAppLink("Hello ATT Car Rental, I have a custom travel requirement and would like to discuss options.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE5D] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
