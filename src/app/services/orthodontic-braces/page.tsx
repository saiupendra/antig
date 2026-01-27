"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";

// Place relevant meta tags for SEO in your <Head> component in _app.js/_document.js or use next/head for per-page head tags
export default function OrthodonticBracesPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-t from-cyan-50 via-white to-fuchsia-50 text-gray-900">

      {/* --- SEO: H1 and meta--- */}
      <header className="w-full py-16 px-6 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-700 via-cyan-700 to-fuchsia-700 text-transparent bg-clip-text mb-5 text-center drop-shadow-xl leading-tight">
          Orthodontic Braces & Clear Aligners in Anandbagh, Moula Ali, Hyderabad
        </h1>
        <h2 className="text-lg sm:text-2xl text-cyan-900 font-semibold mb-7 text-center max-w-2xl mx-auto">
          Invisible aligners, ceramic & metal braces by top-rated orthodontist. Fast, gentle teeth straightening for kids, teens & adults.
        </h2>
        <Image
          src="/gifs/Aligner.gif"
          alt="Orthodontic Aligners and Braces at Anandbagh"
          width={128}
          height={128}
          className="rounded-3xl border-4 border-cyan-300 shadow-xl mb-7 hover:scale-110 transition cursor-pointer"
          onClick={() => setModalImage("/gifs/Aligner.gif")}
          priority
        />
        <div className="flex flex-wrap gap-6 justify-center mb-2">
          <Link
            href="https://wa.me/917995815454"
            className="bg-fuchsia-700 text-white font-bold rounded-full shadow px-7 py-4 text-base hover:bg-cyan-700 transition"
          >
            Book Braces Consultation
          </Link>
          <a
            href="tel:917995815454"
            className="border border-fuchsia-700 text-fuchsia-700 rounded-full font-bold px-7 py-4 hover:bg-fuchsia-50 transition"
          >
            Call: +91 79958 15454
          </a>
        </div>
      </header>

      {/* Treatments section: centered text, images as GIFs, keyword-optimized */}
      <section className="w-full py-14 bg-gradient-to-r from-amber-50 via-fuchsia-50 to-cyan-50">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-700 mb-10 text-center">
          Types of Braces and Orthodontic Treatments
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto w-full">
          {/* Metal Braces */}
          <div
            className="group flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-3xl p-7 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl ring-0 hover:ring-4 hover:ring-fuchsia-200"
            tabIndex={0} role="button" aria-label="Traditional Metal Braces. Affordable, effective for all ages."
            onClick={() => window.location.href = "/services/metal-braces"}
          >
            <img src="/gifs/MetalBraces.gif" alt="Metal Braces" loading="lazy"
              className="w-20 h-20 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 mx-auto"/>
            <span className="text-base font-bold text-fuchsia-700 group-hover:text-cyan-800 transition text-center w-full block mt-3">
              Traditional<br /> Metal Braces
            </span>
            <p className="text-sm text-gray-500 mt-2">Best for kids, teens, and complex cases.</p>
          </div>
          {/* Ceramic Braces */}
          <div
            className="group flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-3xl p-7 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl ring-0 hover:ring-4 hover:ring-fuchsia-200"
            tabIndex={0} role="button" aria-label="Ceramic Braces. Tooth-colored, subtle and effective."
            onClick={() => window.location.href = "/services/ceramic-braces"}
          >
            <img src="/gifs/CeramicBraces.gif" alt="Ceramic Braces" loading="lazy"
              className="w-20 h-20 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 mx-auto"/>
            <span className="text-base font-bold text-fuchsia-700 group-hover:text-cyan-800 transition text-center w-full block mt-3">
              Ceramic <br /> Tooth-Colored Braces
            </span>
            <p className="text-sm text-gray-500 mt-2">Low visibility for working professionals & teens.</p>
          </div>
          {/* Clear Aligners */}
          <div
            className="group flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-3xl p-7 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl ring-0 hover:ring-4 hover:ring-fuchsia-200"
            tabIndex={0} role="button" aria-label="Clear Aligners. Removable. Nearly invisible orthodontic solution."
            onClick={() => window.location.href = "/services/clear-aligners"}
          >
            <img src="/gifs/Aligner.gif" alt="Clear Aligners" loading="lazy"
              className="w-20 h-20 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 mx-auto"/>
            <span className="text-base font-bold text-fuchsia-700 group-hover:text-cyan-800 transition text-center w-full block mt-3">
              Clear <br /> Aligners
            </span>
            <p className="text-sm text-gray-500 mt-2">Invisible, no dietary restrictions, easy cleaning.</p>
          </div>
          {/* Retainers */}
          <div
            className="group flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-3xl p-7 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl ring-0 hover:ring-4 hover:ring-fuchsia-200"
            tabIndex={0} role="button" aria-label="Retainers. Maintain your perfect smile after braces."
            onClick={() => window.location.href = "/services/retainers"}
          >
            <img src="/gifs/Retainer.gif" alt="Retainers" loading="lazy"
              className="w-20 h-20 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 mx-auto"/>
            <span className="text-base font-bold text-fuchsia-700 group-hover:text-cyan-800 transition text-center w-full block mt-3">
              Orthodontic<br /> Retainers
            </span>
            <p className="text-sm text-gray-500 mt-2">Essential for lasting results.</p>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section - modern & SEO --- */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-white via-fuchsia-50 to-amber-50 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-9 text-fuchsia-700 text-center">
          <span className="bg-gradient-to-r from-amber-500 to-cyan-500 bg-clip-text text-transparent">
            Why Choose Our Orthodontist?
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl text-center mb-12">
          <div className="bg-white p-7 rounded-2xl shadow-xl hover:shadow-cyan-100 transition">
            <img src="/icons/experience.svg" alt="Experienced Orthodontist" className="w-12 mx-auto mb-3"/>
            <div className="font-bold text-lg text-fuchsia-700 mb-1">15+ Years Experience</div>
            <div className="text-gray-600">Top-rated orthodontist & modern braces tech</div>
          </div>
          <div className="bg-white p-7 rounded-2xl shadow-xl hover:shadow-cyan-100 transition">
            <img src="/icons/aligners.svg" alt="Clear Aligners Hyderabad" className="w-12 mx-auto mb-3"/>
            <div className="font-bold text-lg text-fuchsia-700 mb-1">100% Genuine Aligners</div>
            <div className="text-gray-600">Leading brands: Invisalign, ClearCorrect, etc.</div>
          </div>
          <div className="bg-white p-7 rounded-2xl shadow-xl hover:shadow-cyan-100 transition">
            <img src="/icons/kid-friendly.svg" alt="Child Orthodontist Hyderabad" className="w-12 mx-auto mb-3"/>
            <div className="font-bold text-lg text-fuchsia-700 mb-1">Kid & Adult Specialists</div>
            <div className="text-gray-600">Gentle, supportive, pain-free experience</div>
          </div>
          <div className="bg-white p-7 rounded-2xl shadow-xl hover:shadow-cyan-100 transition">
            <img src="/icons/wallet.svg" alt="Affordable Braces EMI Hyderabad" className="w-12 mx-auto mb-3"/>
            <div className="font-bold text-lg text-fuchsia-700 mb-1">EMI & Family Plans</div>
            <div className="text-gray-600">Affordable Invisalign/Braces for all budgets</div>
          </div>
        </div>
        <Image
          src="/images/clinic-interior.jpg"
          width={650} height={400}
          className="rounded-2xl shadow-xl border-4 border-cyan-200 cursor-pointer"
          alt="Orthodontic Clinic Hyderabad"
          onClick={() => setModalImage("/images/clinic-interior.jpg")}
          loading="lazy"
        />
      </section>

      {/* --- Before/After slider (optional for Core Web Vitals, use static with webp for best speed) --- */}

      {/* --- Testimonials: full-width, large --- */}
      <section className="w-full py-16 bg-gradient-to-r from-amber-50 via-fuchsia-50 to-cyan-100">
        <div className="w-full px-0">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* --- FAQ section --- */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Braces & Aligners FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-fuchsia-50 rounded-xl border shadow-md p-6 mb-3">
              <div className="font-bold text-fuchsia-700 mb-2">How long does treatment take?</div>
              <div className="text-base text-gray-700">Most orthodontic cases finish between 12–24 months, but mild corrections can be faster.</div>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-50 via-amber-50 to-cyan-100 rounded-xl border shadow-md p-6 mb-3">
              <div className="font-bold text-fuchsia-700 mb-2">Are aligners as good as braces?</div>
              <div className="text-base text-gray-700">For many adults, clear aligners are as effective as braces for moderate crowding/spacing. Complex bite problems may still need braces.</div>
            </div>
            <div className="bg-gradient-to-br from-white to-fuchsia-100 rounded-xl border shadow-md p-6">
              <div className="font-bold text-fuchsia-700 mb-2">Are adult braces common?</div>
              <div className="text-base text-gray-700">Yes! Many adults in Hyderabad are getting straighter smiles for the first time—and it’s never too late.</div>
            </div>
            <div className="bg-gradient-to-br from-white to-cyan-100 rounded-xl border shadow-md p-6">
              <div className="font-bold text-fuchsia-700 mb-2">Do you offer EMI?</div>
              <div className="text-base text-gray-700">Of course—flexible payment plans and discounts for families/students available.</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-14 bg-gradient-to-r from-blue-600 via-cyan-700 to-fuchsia-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your best smile starts today</h2>
          <p className="text-lg mb-6">Book an expert orthodontist consult for braces or aligners in Anandbagh</p>
          <Link href="/appointments" className="bg-white text-fuchsia-700 font-bold rounded-full shadow px-7 py-4 text-base hover:bg-fuchsia-100">
            Book Online
          </Link>
        </div>
      </section>
      <CTASection />

      {/* --- Modal for image pop (lazy) --- */}
      {modalImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80" onClick={() => setModalImage(null)}>
          <Image src={modalImage} width={400} height={320} className="max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl border-8 border-fuchsia-400" alt="Gallery" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
