"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { TourPackages } from "@/components/TourPackages";
import { WhyUs } from "@/components/WhyUs";
import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileActionBar } from "@/components/MobileActionBar";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (vehicle?: string, service?: string) => {
    setSelectedVehicle(vehicle);
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedVehicle(undefined);
    setSelectedService(undefined);
  };

  return (
    <main className="min-h-screen flex flex-col relative">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section with Quick Booking Widget */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Services Section */}
      <Services onSelectService={(service) => handleOpenBooking(undefined, service)} />

      {/* Fleet Section */}
      <Fleet onSelectVehicle={(vehicle) => handleOpenBooking(vehicle, undefined)} />

      {/* Tour Packages Section */}
      <TourPackages onOpenEnquiry={(pkg) => handleOpenBooking(undefined, pkg)} />

      {/* Why Choose ATT Car Rental */}
      <WhyUs />

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Section & Google Maps */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Universal Quick Booking & Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultVehicle={selectedVehicle}
        defaultService={selectedService}
      />
    </main>
  );
}
