"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import BlogCarousel from "@/components/BlogCarousel";
import ServicePopup from "@/components/ServicePopup";
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles } from "lucide-react";

// Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Before/After Slider
function BeforeAfterSlider({ item }) {
  const [sliderValue, setSliderValue] = useState(50);
  const dragging = useRef(false);
  const handleDragStart = () => { dragging.current = true };
  const handleDragEnd = () => { dragging.current = false };
  const handleDragMove = e => {
    if (!dragging.current) return;
    let clientX;
    if ("touches" in e) { clientX = e.touches[0].clientX; } else { clientX = e.clientX; }
    const rect = e.currentTarget.getBoundingClientRect();
    setSliderValue(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  };
  return (
    <div className="space-y-2">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none cursor-ew-resize"
        style={{ touchAction: "none" }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
      >
        <div className="relative h-64 sm:h-80">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 bottom-0 overflow-hidden" style={{ width: `${sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.before} alt={`Before ${item.title} - Gum Treatment`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.after} alt={`After ${item.title} - Gum Treatment`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-left pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-lime-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">After</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="drop-shadow-lg">
              <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center pt-2">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  );
}

const serviceData = {
  title: "Advance Gum Treatment",
  subtitle: "Laser, Deep Cleaning & Regenerative Gum Therapy – Anandbagh & Secunderabad",
  heroImage: "/images/services/pages/gum-hero.jpg",
  seo: {
    title: "Dr. Sri Sushma Multispeciality Dental Clinic - Best Gum Treatment in Anandbagh & Secunderabad | Laser Gum Therapy & Painless Periodontal",
    description: "Advanced gum disease treatments in Anandbagh & Secunderabad. Bleeding gums, loose teeth, bad breath, laser gum therapy, deep cleaning, flap surgery. Expert periodontist care for lasting gum health.",
    keywords: "gum treatment Anandbagh & Secunderabad, periodontal therapy, gum care, laser gum, flap surgery, scaling, root planing, periodontist Anandbagh & Secunderabad, gum disease, bleeding gums",
    canonical: "https://www.drsrisushmadentalclinic.com/services/gum-treatment/"
  },
  description: "Stop bleeding gums, persistent bad breath, and loose teeth with gentle and advanced gum therapy. Laser cleaning, deep scaling, minimally invasive gum surgery, and regeneration. Safe for diabetics and seniors.",
  fullDescription: "Restore pink, healthy, pain-free gums! At Dr Sri Sushma Multispecialty Dental Clinic, we use the latest lasers, ultrasonic scalers, regenerative and flap procedures to treat gingivitis, periodontitis, and receding gums. Quick healing, no hospital stay, and affordable recovery plans.",
  benefits: [
    "Gentle deep cleaning (scaling/root planing)",
    "Laser gum therapy for faster healing & less pain",
    "Stops bleeding, swelling, and reversible bone loss",
    "Specialist periodontist in-house",
    "Safe for diabetics & older adults",
    "Regeneration for severe cases ('lost bone/tissue')",
    "Affordable packages and EMI available",
    "Aftercare + hygiene support for lasting health"
  ],
  process: [
    { step: "1", title: "Diagnosis & Imaging", description: "Digital scans & expert gum evaluation to plan your treatment" },
    { step: "2", title: "Deep Cleaning (Scaling/Root Planing)", description: "Painless ultrasonic cleaning above/below gums removes tartar & bacteria" },
    { step: "3", title: "Laser/Flap Procedure", description: "Laser for moderate disease; Flap Surgery & regeneration for advanced" },
    { step: "4", title: "Gum & Bone Regeneration", description: "Protein/bone grafts rebuild tissue, support teeth & implants" },
    { step: "5", title: "Aftercare/Hygiene", description: "Regular check-ups, guidance, and WhatsApp support for lasting results" }
  ],
  types: [
    {
      name: "Laser Gum Therapy",
      description: "Painless, quick recovery. No stitches needed. Targets both gums and tooth roots.",
      features: ["No Bleeading", "Mild-moderate cases", "Fast healing", "Great for diabetics/seniors"],
      icon: Star
    },
    {
      name: "Deep Scaling/Root Planing",
      description: "Thorough, ultrasonic deep cleaning below gumline.",
      features: ["Removes tartar & bacteria", "Mild-moderate cases", "Maintenance every 6-12mo"],
      icon: Shield
    },
    {
      name: "Gum Flap Surgery & Regeneration",
      description: "For severe disease or lost gum tissue/bone; includes protein therapy, bone grafts.",
      features: ["Bone/tissue regrowth", "Save loose teeth/rebuild gums", "Prepares mouth for implants"],
      icon: Award
    }
  ],
  beforeAfterGallery: [
      {
        before: "/images/beforeafter/before-1.jpg",
        after: "/images/beforeafter/after-1.jpg",
      },
      {
        before: "/images/beforeafter/before-2.jpg",
        after: "/images/beforeafter/after-2.jpg",
      },
      {
        before: "/images/beforeafter/before-3.jpg",
        after: "/images/beforeafter/after-3.jpg",
      }
  ],
  faqs: [
    {
      question: "Is gum treatment painful or slow?",
      answer: "With modern lasers and anesthesia, even surgical gum care is very comfortable. Recovery is fast and most patients return to normal activity in 1-2 days."
    },
    {
      question: "Will my gums grow back?",
      answer: "Recession and bone loss can often be partly reversed with regeneration, but early treatment always gives the best results."
    },
    {
      question: "Is it safe for diabetes or elderly?",
      answer: "Yes! We use minimally invasive methods and work with physicians for complete safety."
    },
    {
      question: "How do I keep gums healthy after treatment?",
      answer: "Good brushing, hygiene cleanings, and regular check-ups are key. Our team provides step-by-step home support."
    },
    {
      question: "How much does gum treatment cost?",
      answer: "Depends on severity and method. Scaling/laser is affordable; regeneration/flap surgery is higher but EMI available for all."
    }
  ],
  relatedServices: [
    {
      name: "Dental Implants",
      description: "Restore lost teeth after gum healing",
      link: "/services/implants/",
      image: "/images/services/implants.png"
    },
    {
      name: "Preventive Dentistry",
      description: "Keep gums and teeth healthy for life",
      link: "/services/preventive/",
      image: "/images/services/preventive.png"
    },
    {
      name: "Teeth Whitening",
      description: "Gentle whitening—safe for sensitive gums",
      link: "/services/whitening/",
      image: "/images/services/whitening.png"
    }
  ]
};

export default function GumTreatmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useScrollAnimation();

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{serviceData.seo.title}</title>
        <meta name="description" content={serviceData.seo.description} />
        <meta name="keywords" content={serviceData.seo.keywords} />
        <link rel="canonical" href={serviceData.seo.canonical} />
        <meta property="og:title" content={serviceData.seo.title} />
        <meta property="og:description" content={serviceData.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={serviceData.seo.canonical} />
        <meta property="og:image" content={serviceData.heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={serviceData.seo.title} />
        <meta name="twitter:description" content={serviceData.seo.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow"/>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50">
        {/* HERO Section */}
<header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden scroll-animate">
  <div className="absolute inset-0 -z-10 bg-white">
    <div className="absolute inset-0 bg-gradient-to-br from-green-100/60 via-white/30 to-lime-50/80"></div>
    <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-lime-200/40 to-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-green-200/40 to-lime-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-lime-100/50 to-green-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
  </div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-lime-200 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 fill-green-500" />
        <span>Gentle, Modern Gum Care</span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
        Advance Gum Treatment
        <span className="block mt-2 bg-gradient-to-r from-lime-800 via-green-700 to-teal-500 bg-clip-text text-transparent">
          Laser, Deep Cleaning & Regenerative Gum Therapy – Hyderabad
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
        Stop bleeding gums, persistent bad breath, and loose teeth with gentle and advanced gum therapy. Laser cleaning, deep scaling, minimally invasive gum surgery, and regeneration. Safe for diabetics and seniors.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
        <Button size="lg" className="bg-gradient-to-r from-lime-600 to-green-500 hover:from-green-700 hover:to-lime-600 text-white shadow-lg w-full sm:w-auto">
          <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Book Gum Consultation</span>
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="border-2 border-green-700 text-green-700 hover:bg-lime-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
          <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Call +91 79958 15454</span>
          </a>
        </Button>
      </div>
    </div>
  </div>
</header>

{/* Overview Section */}
<section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
          <Image
            src="/images/services/pages/gum-hero.jpg"
            alt="Gum Treatment at Dr Sri Sushma Multispecialty Dental Clinic"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </figure>
        <div className="order-1 lg:order-2 scroll-animate">
          <div className="inline-block bg-lime-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            About Gum Disease
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Pink, pain-free gums for life—specialist treatment at Dr. Sri Sushma Multispeciality Dental Clinic
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
            Restore pink, healthy, pain-free gums! We use the latest lasers, ultrasonic scalers, regeneration and flap procedures to treat gingivitis, periodontitis, and receding gums.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-green-50 to-lime-50 rounded-xl">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-lime-600 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Single Visit Cleaning</div>
                <div className="font-bold text-sm sm:text-base text-gray-900">Painless & Quick</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-lime-50 to-green-50 rounded-xl">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Healthy Smile</div>
                <div className="font-bold text-sm sm:text-base text-gray-900">Lasts For Years</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

{/* Benefits Section */}
<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-lime-50 scroll-animate">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-16 scroll-animate">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Why Choose Our Advance Gum Treatment?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">We make gum therapy gentle, affordable, and lasting.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          "Gentle deep cleaning (scaling/root planing)",
          "Laser gum therapy for faster healing & less pain",
          "Stops bleeding, swelling, and reversible bone loss",
          "Specialist periodontist in-house",
          "Safe for diabetics & older adults",
          "Regeneration for severe cases ('lost bone/tissue')",
          "Affordable packages and EMI available",
          "Aftercare + hygiene support for lasting health"
        ].map((benefit, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-lime-500 mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Treatment Process Section */}
<section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-16 scroll-animate">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Our Gum Treatment Procedure – Step-by-Step
        </h2>
        <p className="text-base sm:text-lg text-gray-600 px-4">
          From advanced digital scans to long-term care—painless, expert results.
        </p>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-lime-200 to-teal-50"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {[
            { step: "1", title: "Diagnosis & Imaging", description: "Digital scans & expert gum evaluation to plan your treatment" },
            { step: "2", title: "Deep Cleaning (Scaling/Root Planing)", description: "Painless ultrasonic cleaning above/below gums removes tartar & bacteria" },
            { step: "3", title: "Laser/Flap Procedure", description: "Laser for moderate disease; Flap Surgery & regeneration for advanced" },
            { step: "4", title: "Gum & Bone Regeneration", description: "Protein/bone grafts rebuild tissue, support teeth & implants" },
            { step: "5", title: "Aftercare/Hygiene", description: "Regular check-ups, guidance, and WhatsApp support for lasting results" }
          ].map((step, index) => (
            <div key={index} className="relative scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
              <Card className="border-2 hover:border-lime-500 transition-colors h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-lime-500 to-green-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Types Section */}
<section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-16 scroll-animate">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Types of Gum Treatments We Offer
        </h2>
        <p className="text-base sm:text-lg text-gray-600 px-4">
          From modern laser, to deep cleaning, to advanced regeneration—our experts deliver!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            name: "Laser Gum Therapy",
            description: "Painless, quick recovery. No stitches needed. Targets both gums and tooth roots.",
            features: ["Bloodless cleaning", "Mild-moderate cases", "Fast healing", "Great for diabetics/seniors"],
            icon: Star
          },
          {
            name: "Deep Scaling/Root Planing",
            description: "Thorough, ultrasonic deep cleaning below gumline.",
            features: ["Removes tartar & bacteria", "Mild-moderate cases", "Maintenance every 6-12mo"],
            icon: Shield
          },
          {
            name: "Gum Flap Surgery & Regeneration",
            description: "For severe disease or lost gum tissue/bone; includes protein therapy, bone grafts.",
            features: ["Bone/tissue regrowth", "Save loose teeth/rebuild gums", "Prepares mouth for implants"],
            icon: Award
          }
        ].map((type, index) => {
          const IconComponent = type.icon;
          return (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-lime-100 to-green-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-lime-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {type.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-lime-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </div>
</section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <div className="inline-block bg-yellow-100 text-yellow-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Real Patient Results
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Before & After Root Canal Treatments
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See tooth-saving results and fast pain relief for yourself.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.beforeAfterGallery.map((item, index) => (
                  <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                    <BeforeAfterSlider item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                What Our Root Canal Patients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Real reviews from patients relieved from severe pain and infection.
              </p>
            </div>
            <div className="scroll-animate animation-delay-200">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>
 
        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Top queries about RCT and pain-free tooth saving in Hyderabad
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx}
                       className="bg-white border-2 border-yellow-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-yellow-500 transition-all duration-300 hover:shadow-lg scroll-animate"
                       style={{ animationDelay: `${idx * 0.1}s` }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 transition-transform flex-shrink-0 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-200 pt-4 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 scroll-animate">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Other Relative Dental Services
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Explore alternative dental treatments
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                {serviceData.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 scroll-animate"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={service.image}
                        alt={`${service.name} - Dr. Sri Sushma Multispeciality Dental Clinic Anandbagh & Secunderabad`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">{service.name}</h3>
                        <p className="text-white/80 text-xs sm:text-sm">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BlogCarousel />

        {/* CTA Section */}
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Pain-Free, Affordable Advance Gum Treatment at Dr. Sri Sushma Multispeciality Dental Clinic"
          subtitle="Book your free consultation now!"
        />
      </div>
      <ServicePopup serviceName="Advance Gum Treatment" />
    </>
  )
}
