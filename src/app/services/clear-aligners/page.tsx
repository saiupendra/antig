"use client"

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
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles, Eye, Zap, Heart } from "lucide-react";

// ANIMATION HOOK
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("show"); }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// BEFORE/AFTER SLIDER
function BeforeAfterSlider({ item }) {
  const [sliderValue, setSliderValue] = useState(50)
  const dragging = useRef(false)
  const handleDragStart = () => { dragging.current = true }
  const handleDragEnd = () => { dragging.current = false }
  const handleDragMove = (e) => {
    if (!dragging.current) return
    let clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderValue(Math.max(0, Math.min(100, x)))
  }
  return (
    <div className="space-y-2">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize"
        style={{ touchAction: "none" }}
        onMouseDown={handleDragStart} onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove} onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart} onTouchEnd={handleDragEnd} onTouchMove={handleDragMove}>
        <div className="relative h-64 sm:h-80">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 bottom-0 overflow-hidden" style={{ width: `${sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.before} alt={`Before ${item.title} - Clear Aligners`} fill sizes="(max-width:768px)100vw,33vw" className="object-cover" draggable={false} loading="lazy" />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.after} alt={`After ${item.title} - Clear Aligners`} fill sizes="(max-width:768px)100vw,33vw" className="object-cover" draggable={false} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-indigo-600 text-white px-2 py-1 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold z-10">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-pink-400 text-white px-2 py-1 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold z-10">After</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="drop-shadow-lg">
              <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center pt-2">
        <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-xs text-gray-600">{item.description}</p>
      </div>
    </div>
  )
}

const serviceData = {
  title: "Clear Aligners (Invisible Braces)",
  subtitle: "Straighter Teeth, No Metal - Invisalign® & Advanced Custom Aligners in Anandbagh & Secunderabad",
  heroImage: "/images/services/pages/Dental-Aligners.jpg",
  seo: {
    title: "Dr. Sri Sushma Multispeciality Dental Clinic - Best Clear Aligners in Anandbagh & Secunderabad | Invisible Braces, Invisalign®",
    description: "Get invisible braces (clear aligners) in Hyderabad for adults & teens – custom fit, fast results, zero pain. Invisalign® & international brands. Book now for 3D scan consult.",
    keywords: "clear aligners Secunderabad, invisible braces, best orthodontist, invisalign Secunderabad, aligner cost, adult braces, clear trays, digital orthodontics, teeth straightening",
    canonical: "https://www.drsrisushmadentalclinic.com/services/clear-aligners/"
  },
  description: "Ready to smile confidently in every selfie? Straighten wonky or spaced teeth with the world’s best clear aligners & see results in months—not years. No metal and no wounds - just comfort, confidence, and the perfect smile.",
  fullDescription: "Our orthodontists at Dr. Sri Sushma Multispeciality Dental Clinic use Invisalign® and globally trusted brands to custom-design a digital treatment plan just for you. You’ll get sets of transparent, removable aligners that shift your teeth gently and invisibly. No painful tightenings, no age limit, minimal dental visits—just scan, wear, and smile.",
  benefits: [
    "100% invisible - zero metal brackets or wires",
    "Eat anything, remove while dining or brushing",
    "Smooth on gums and lips (no sores/cuts)",
    "Custom 3D scan fit for rapid, precise movement",
    "Virtually painless and safe for adults & teens",
    "Easy to clean and maintain hygiene",
    "Faster than traditional braces (as little as 6-12 months)",
    "Less frequent dental checkups"
  ],
  process: [
    { step: "1", title: "Smile Assessment & 3D Scan", description: "Detailed digital scan and orthodontic consultation to map out your custom plan." },
    { step: "2", title: "Digital Simulation Reveal", description: "See your new smile before you even start—3D preview lets you approve the final look!" },
    { step: "3", title: "Custom Aligner Fabrication", description: "Each aligner tray is precision-milled and labeled for the exact sequence." },
    { step: "4", title: "Wear & Track Progress", description: "Wear each tray 20–22h/day, switch as guided; most checkups remote or quick in-clinic reviews." },
    { step: "5", title: "Retain & Smile for Life", description: "After alignment, wear retainers nightly and visit for final photos – results that last for decades!" }
  ],
  types: [
    {
      name: "Invisalign®",
      description: "World’s most advanced, globally trusted clear aligners – perfect for all ages and cases.",
      features: ["SmartTrack material", "3D digital preview", "24/7 global support"],
      icon: Eye,
    },
    {
      name: "Clear Correct & National Brands",
      description: "Quality aligners by trusted Indian/international labs – affordable, precise, and nearly as invisible.",
      features: ["Budget friendly", "Fast fabrication", "Excellent comfort"],
      icon: Zap,
    },
    {
      name: "Nighttime/Express Aligners",
      description: "Only 10 hours/significant minor corrections – shorter plans for fast results.",
      features: ["Minimal wear", "Low cost", "Best for mild crowding/spacing"],
      icon: Heart,
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
      question: "Are clear aligners as effective as braces?",
      answer: "For mild to moderate crowding/spacing, yes. Major skeletal cases may still require braces or combined orthodontics."
    },
    {
      question: "How long does clear aligner treatment take?",
      answer: "Simple cases: 6-12 months. Complex cases: up to 18 months, but no food restrictions or sores!"
    },
    {
      question: "Is Invisalign® painful?",
      answer: "Aligners are smooth and pressure is gentle; almost all patients report less pain than braces and far fewer mouth ulcers."
    },
    {
      question: "Can I eat with clear aligners on?",
      answer: "You remove aligners for eating and brushing—no off-limits foods, no cleaning stress."
    },
    {
      question: "How much do clear aligners cost in Hyderabad?",
      answer: "National lab aligners start ~INR 55k, premium Invisalign® plans from 85k–2.5L. Transparent, all-inclusive pricing at your consultation."
    }
  ],
  relatedServices: [
    {
      name: "Dental Braces",
      description: "Metal & ceramic braces for all ages",
      link: "/services/braces/",
      image: "/images/services/Dental-orthodontic-braces.jpg"
    },
    {
      name: "Cosmetic Dentistry",
      description: "Smile makeovers, veneers & bonding",
      link: "/services/cosmetic-dentistry/",
      image: "/images/services/cosmetic.png"
    },
    {
      name: "Teeth Whitening",
      description: "Brighten your new straight smile",
      link: "/services/whitening/",
      image: "/images/services/whitening.png"
    }
  ]
};

export default function ClearAlignersPage() {
  const [openFaq, setOpenFaq] = useState(null);
  useScrollAnimation();

  return (
    <>
      {/* SEO METADATA */}
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
        <meta name="googlebot" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* HERO */}
        <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-cyan-50"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-indigo-200/30 to-fuchsia-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute top-0 right-0 w-80 sm:w-[30rem] h-72 sm:h-96 bg-gradient-to-br from-cyan-200/30 to-fuchsia-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-fuchsia-100/40 to-indigo-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-indigo-100 text-indigo-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
                <Sparkles className="w-4 h-4 fill-cyan-500" />
                <span>Hyderabad’s Advanced Invisible Braces</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                {serviceData.title}
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{serviceData.subtitle}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-fuchsia-700 hover:to-indigo-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-base">Book Free 3D Smile Consult</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-fuchsia-400 text-fuchsia-700 hover:bg-fuchsia-50 bg-white/80 w-full sm:w-auto">
                  <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="text-base">Call +91 79958 15454</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <article className="grid lg:grid-cols-2 gap-8 items-center">
                <figure className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image src={serviceData.heroImage} alt="Clear Aligners Treatment Anandbagh" fill sizes="(max-width:1024px)100vw,50vw" className="object-cover" priority />
                </figure>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-fuchsia-50 text-fuchsia-800 px-3 py-2 rounded-full text-xs font-medium mb-4">About Clear Aligners</div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    Digital, Painless, and Discreet – The Next-gen Braces!
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">{serviceData.fullDescription}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-indigo-50 to-fuchsia-50 rounded-xl">
                      <Clock className="w-8 h-8 text-indigo-700 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">No Emergency Visits</div>
                        <div className="font-bold text-sm text-gray-900">Fully Remote Monitoring</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-cyan-100 to-indigo-50 rounded-xl">
                      <Star className="w-8 h-8 text-cyan-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">Global, Trusted Brands</div>
                        <div className="font-bold text-sm text-gray-900">Invisalign®</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Why Choose Clear Aligners?
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
                  The discreet, comfortable alternative to old-school braces.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceData.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate" style={{ animationDelay: `${i * 0.1}s` }}>
                    <CheckCircle className="w-8 h-8 text-cyan-500 mb-3" />
                    <p className="text-sm text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Our Clear Aligner Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Step-by-step care for invisible orthodontics in Anandbagh.
                </p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-indigo-300 via-pink-300 to-cyan-200"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                      <Card className="border-2 hover:border-indigo-500 transition-colors h-full">
                        <CardContent className="p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
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

        {/* TYPES */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Invisible Braces Brands We Offer
                </h2>
                <p className="text-base text-gray-600">
                  Reliable options for every budget, timeline, and smile.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceData.types.map((type, idx) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate" style={{ animationDelay: `${idx * 0.2}s` }}>
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-50 to-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                          <IconComponent className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                        <p className="text-base text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-2">
                          {type.features.map((feature, ii) => (
                            <div key={ii} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* BEFORE/AFTER */}
        {/*<section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <div className="inline-block bg-fuchsia-50 text-fuchsia-700 px-3 py-2 rounded-full text-xs font-medium mb-4">Patient Results</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Before & After Clear Aligners
                </h2>
                <p className="text-base text-gray-600">Real smile improvements—no braces required.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.beforeAfterGallery.map((item, idx) => (
                  <div key={idx} className="scroll-animate" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <BeforeAfterSlider item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>*/}

        {/* TESTIMONIALS */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-fuchsia-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 scroll-animate">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Aligner Patient Reviews</h2>
              <p className="text-base text-gray-600">Hear from Anandbagh about aligners and smile makeovers!</p>
            </div>
            <div className="scroll-animate">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>
       
        {/* FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Clear Aligner FAQs
                </h2>
                <p className="text-base text-gray-600">Everything to know about invisible braces in Anandbagh.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border-2 border-pink-200 rounded-xl hover:border-indigo-600 transition-all hover:shadow-lg scroll-animate" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-start justify-between p-6 text-left hover:bg-fuchsia-50 transition-colors">
                      <span className="font-semibold text-gray-900 pr-4 text-base leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-6 h-6 text-indigo-600 transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-6 text-base text-gray-600 border-t border-gray-200 pt-4 animate-fade-in">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Dental Services */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 scroll-animate">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Related Dental Services
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Explore other treatments you may need
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                {serviceData.relatedServices.map((service, index) => (
                  <Link key={index} href={service.link} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="relative h-48 sm:h-56">
                      <Image src={service.image} alt={service.name} fill sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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

        {/* BLOG */}
        <BlogCarousel />

        {/* CTA */}
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Book Clear Aligners Consultation in Hyderabad"
          subtitle="Start your invisible smile transformation at Dr. Sri Sushma Multispeciality Dental Clinic – fast, gentle, and affordable."
        />
      </div>
      <ServicePopup serviceName="Dental Braces & Aligners" />
    </>
  )
}
