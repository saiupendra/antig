"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Update this import if your Button is located elsewhere

function WhatsAppIcon({ className = "w-5 h-5" }) {
  // Official WhatsApp SVG
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <circle cx="16" cy="16" r="16" fill="#25D366"/>
      <path fill="#FFF" d="M22.39,18.34c-.33-.17-1.94-0.96-2.24-1.07s-0.52-.17-0.73.17-0.83,1.07-1.02,1.29-0.38,0.19-0.71,0.06a7.6,7.6,0,0,1-2.23-1.39,8.35,8.35,0,0,1-1.58-1.93c-0.16-0.27,0-0.41,0.12-0.54s0.27-0.33,0.41-0.55a1.91,1.91,0,0,0,.26-0.43,0.49,0.49,0,0,0,0-0.5c0-0.16-.73-1.77-1-2.43-0.27-0.65-0.55-0.56-0.75-0.57h-0.62a1.19,1.19,0,0,0-0.87.4,3.65,3.65,0,0,0-.8,1.28A4.11,4.11,0,0,0,10,15.67a8.45,8.45,0,0,0,.54,2.6,9.63,9.63,0,0,0,2.35,3.21c0,0,3.95,4,8.05,4.31a4.65,4.65,0,0,0,2.87-0.75A4.31,4.31,0,0,0,26,22.63a3.63,3.63,0,0,0-.37-1.33A1,1,0,0,0,25,20.77c-0.17-0.05-0.45-0.16-0.91-0.35Z"/>
    </svg>
  );
}

export default function ServicePopup({ serviceName }: { serviceName: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;
  
  // Offer copy can be adjusted per service. Add more logic if you want full per-page customization.
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-violet-800/90 via-amber-100/80 to-fuchsia-100/80">
      <div
        className="relative max-w-xl w-full animate-fadeInDown rounded-3xl shadow-2xl overflow-visible"
        style={{
          background: "linear-gradient(135deg,white 60%,#fff0d8 100%)"
        }}
      >
        <div className="rounded-3xl p-9 flex flex-col items-center border-4 border-violet-300 backdrop-blur-lg">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 bg-fuchsia-700 text-white p-2 rounded-full text-2xl shadow hover:bg-fuchsia-900 transition"
            aria-label="Close"
          >×</button>
          <span className="inline-block mb-2 px-5 py-1 rounded-full bg-gradient-to-r from-violet-500 via-pink-400 to-amber-300 text-white shadow font-bold text-base tracking-widest animate-pulse">
            Limited Time!
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-fuchsia-800 text-center drop-shadow-2xl">
            Exciting Offer on {serviceName}
          </h2>
          <p className="mb-3 text-lg font-semibold text-violet-800 text-center">Book today for special discounts!</p>
          <ul className="mb-6 text-md text-gray-900 flex flex-col gap-2 text-left sm:text-center font-medium">
            <li>✨ <b>{serviceName} with up to 20% OFF</b> for first 30 bookings</li>
            <li>🪥 <b>Free Consultation</b> + Digital Scan Included</li>
            <li>👍 Easy EMI available for all advanced treatments</li>
            <li>☎️ Fast response - call or WhatsApp now!</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-700 via-amber-400 to-fuchsia-600 hover:scale-105 transition font-bold text-lg w-full sm:w-auto shadow-lg"
              onClick={() => window.location.href = "tel:+917995815454"}
            >
              📞 Call Clinic
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-700 hover:bg-green-50 w-full sm:w-auto font-bold text-lg shadow flex items-center justify-center gap-2"
              onClick={() => window.open("https://wa.me/917995815454?text=Hi! I want to know your special offer for " + encodeURIComponent(serviceName), "_blank")}
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
