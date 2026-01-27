"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Adapt as per your setup

// SVG for WhatsApp (official style)
function WhatsAppIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#25D366"/>
      <path
        fill="#FFF"
        d="M21.709 18.547c-.298-.149-1.758-.868-2.03-.967-.273-.1-.47-.15-.669.148-.198.298-.767.966-.94 1.164-.174.199-.348.223-.644.075-.297-.149-1.255-.462-2.391-1.475-.882-.788-1.48-1.761-1.652-2.06-.174-.297-.019-.458.13-.606.134-.134.297-.348.446-.52.148-.174.198-.298.298-.496.099-.199.049-.372-.026-.521s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51-.174-.009-.372-.011-.571-.011-.198 0-.52.075-.792.372-.273.298-1.04 1.017-1.04 2.48 0 1.462 1.066 2.874 1.213 3.073.149.198 2.097 3.201 5.077 4.487.71.306 1.263.488 1.694.625.713.228 1.36.195 1.871.119.572-.085 1.759-.72 2.007-1.413.248-.695.248-1.29.173-1.414-.074-.124-.273-.198-.571-.347z"
      />
    </svg>
  );
}


export default function HomeWelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-fuchsia-800/90 via-violet-900/80 to-amber-400/70">
      <div
        className={`relative max-w-2xl w-full rounded-3xl shadow-2xl p-0 overflow-visible animate-bounceIn animate-faster`}
        style={{
          background: "linear-gradient(135deg,#fff8fd 60%,#ffe6b5 100%)",
        }}
      >
        <div className="rounded-3xl p-10 flex flex-col items-center border-4 border-fuchsia-300 backdrop-blur-lg">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 bg-fuchsia-700 text-white p-2 rounded-full text-2xl shadow hover:bg-fuchsia-900 transition"
            aria-label="Close"
          >×</button>
          
          <span className="inline-block mb-3 px-8 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-yellow-300 to-amber-400 text-white shadow font-bold text-base tracking-wide animate-pulse">Grand Opening!</span>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-amber-800 text-center drop-shadow-2xl">
            Welcome to Our New Dental Clinic
          </h2>

          <p className="mb-4 text-base font-semibold text-fuchsia-700 text-center">
            Unlock these limited-time launch deals!
          </p>
          <ul className="mb-7 text-lg text-gray-900 flex flex-col gap-2 text-left sm:text-center">
            <li>🦷 <b>10% OFF</b> on Braces & Aligners</li>
            <li>🪥 <b>Free Dental Checkup</b> (incl. digital scan)</li>
            <li>🥇 <b>Special Discounts</b> on Root Canal treatment</li>
            <li>👶 <b>Kids’ Dental Care Offers</b> – sealants, fillings & more</li>
            <li>🌟 <b>Cosmetic Smile Makeover</b> Packages</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-700 via-violet-700 to-amber-400 hover:scale-105 transition font-bold text-lg w-full sm:w-auto shadow-lg"
              onClick={() => window.location.href = "tel:+919999999999"}
            >
              📞 Call Clinic
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-700 hover:bg-green-50 w-full sm:w-auto font-bold text-lg shadow flex items-center justify-center gap-2"
              onClick={() => window.open("https://wa.me/919999999999?text=Hello! I want to know about your dental clinic offers.", "_blank")}
            >
              <WhatsAppIcon className="w-6 h-6" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
