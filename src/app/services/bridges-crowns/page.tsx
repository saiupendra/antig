"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// UI components (update paths to match your repo)
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import BlogCarousel from "@/components/BlogCarousel";
import ServicePopup from "@/components/ServicePopup";
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles } from "lucide-react";

// Animation
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("show"); });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function BeforeAfterSlider({ item }) {
  const [sliderValue, setSliderValue] = useState(50)
  const dragging = useRef(false)
  const handleDragStart = () => { dragging.current = true }
  const handleDragEnd = () => { dragging.current = false }
  const handleDragMove = (e) => {
    if (!dragging.current) return
    let clientX
    if ("touches" in e) { clientX = e.touches[0].clientX } else { clientX = e.clientX }
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderValue(Math.max(0, Math.min(100, x)))
  }
  return (
    <div className="space-y-2">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none cursor-ew-resize"
        style={{ touchAction: "none" }}
        onMouseDown={handleDragStart} onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove} onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart} onTouchEnd={handleDragEnd} onTouchMove={handleDragMove}>
        <div className="relative h-64 sm:h-80">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 bottom-0 overflow-hidden" style={{ width: `${sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.before} alt={`Before ${item.title} - Crowns & Bridges`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.after} alt={`After ${item.title} - Crowns & Bridges`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-left pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-teal-800 text-white px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold z-10 pointer-events-none">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold z-10 pointer-events-none">After</div>
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
  title: "Crowns & Bridges",
  subtitle: "Restore, Protect & Beautify Your Smile with Dr. Sri Sushma Multispeciality Dental Clinic's Experts",
  heroImage: "/images/services/pages/Dental-Crown.png",
  seo: {
    title: "Best Dental Crowns & Bridges | Zirconia, Ceramic & Metal-Free Options",
    description: "Get long-lasting dental crowns & bridges in Hyderabad – natural look, precise fit, and painless treatment. Zirconia, ceramic, and gold available. Book today!",
    keywords: "dental crowns hyderabad, dental bridges, zirconia crowns, best dental clinic, tooth cap, bridge dentist, cosmetic crowns, metal-free crown",
    canonical: "https://www.drsushmadentalclinic.com/services/bridges-crowns/"
  },
  description: "Don’t let missing, broken, or weak teeth destroy your confidence and bite. Custom metal-free, natural-looking crowns and strong bridges renew function and aesthetics for years.",
  fullDescription: "Crowns are caps restoring damaged/root canal teeth; bridges fill missing tooth gaps using near by support teeth. Choose zirconia, PFM, DMLS and E-max ceramic. All designed to blend perfectly, restore chewing, and protect your smile. Fast and pain-free with digital scans.",
  benefits: [
    "Replaces missing teeth & repairs damage",
    "Natural blend: real tooth look",
    "Restores chewing, speech & face",
    "Multiple material choices",
    "Long-lasting & fracture proof",
    "Perfect fit with 3D impressions",
    "No metal taste/allergy",
    "Fast turnaround—smile renewed in just 2 visits"
  ],
  process: [
    { step: "1", title: "Assessment & Digital Scan", description: "Painless 3D imaging and bite analysis for ideal fit and color match." },
    { step: "2", title: "Tooth Preparation", description: "Gentle shaping with anesthesia for maximum comfort." },
    { step: "3", title: "Temporary Crown/Bridge", description: "Protective provisional placed while custom prosthetic is designed." },
    { step: "4", title: "Lab Crafting", description: "Your crown/bridge milled and finished using latest CAD/CAM." },
    { step: "5", title: "Permanent Fitting & Finishing", description: "Expert cementation, bite check, and smile reveal—ready to last years!" }
  ],
  types: [
    {
      name: "Zirconia & E-max Crowns",
      description: "Premium, metal-free strength and translucency for natural restoration.",
      features: ["Superior aesthetics", "No allergy", "Ultra durable"],
      icon: Star
    },
    {
      name: "Porcelain-Fused-to-Metal Crowns",
      description: "Affordable, strong classic blend with invisible metal core.",
      features: ["Reliable", "Budget-friendly", "Good color match"],
      icon: Award
    },
    {
      name: "Fixed Tooth Bridges",
      description: "Replace gaps by anchoring a bridge over neighboring teeth.",
      features: ["Closes gaps", "Restores function", "Stabilizes bite"],
      icon: Shield
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
      question: "What is the lifespan of crowns and bridges?",
      answer: "With good care, modern crowns and bridges last 12–20 years or more!"
    },
    {
      question: "Are zirconia crowns better than metal?",
      answer: "Zirconia/ceramic look more natural, won't darken gums, and cause no allergies/taste."
    },
    {
      question: "Does getting a crown/bridge hurt?",
      answer: "No; anesthesia and digital scans make everything painless and precise."
    },
    {
      question: "How do I care for my crown/bridge?",
      answer: "Brush/floss, use mouthwash, and get 6-month checkups for longevity."
    },
    {
      question: "Should I choose a bridge or implant?",
      answer: "Both close gaps; bridges use neighbor teeth, implants use anchors. Implants don't affect other teeth."
    }
  ],
  relatedServices: [
      {
        name: "Root Canal Treatment",
        description: "Save & protect severely damaged teeth",
        link: "/services/root-canal/",
        image: "/images/services/root-canal.png"
      },
      {
        name: "Dental Implants",
        description: "Replace missing teeth permanently",
        link: "/services/implants/",
        image: "/images/services/implants.png"
      },
      {
        name: "Cosmetic Dentistry",
        description: "Achieve a flawless, natural-looking smile",
        link: "/services/cosmetic-dentistry/",
        image: "/images/services/cosmetic.png"
      }
  ]
  
};

export default function CrownsBridgesPage() {
  const [openFaq, setOpenFaq] = useState(null)
  useScrollAnimation();

  return (
    <>
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
        {/* Hero Section */}
        <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-teal-100 to-yellow-50"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-teal-300/40 to-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-yellow-100/40 to-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-yellow-100/40 to-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500" />
                <span>Long-lasting, premium dental restoration in Anandbagh</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                {serviceData.title}
                <span className="block mt-2 bg-gradient-to-r from-teal-700 via-teal-500 to-yellow-500 bg-clip-text text-transparent">{serviceData.subtitle}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-teal-700 to-yellow-500 hover:from-teal-900 hover:to-yellow-600 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Book Restoration Consult</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-teal-700 text-teal-700 hover:bg-yellow-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
                  <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Call +91 79958 15454</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* About & Overview Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image src={serviceData.heroImage} alt="Dental Crowns & Bridges Anandbagh & Secunderabad" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                </figure>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-teal-50 text-teal-800 px-3 py-2 rounded-full text-xs font-medium mb-4">About Crowns & Bridges</div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    Replace, Restore, and Renew with Advanced Materials
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">{serviceData.fullDescription}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-teal-50 to-yellow-50 rounded-xl">
                      <Clock className="w-8 h-8 text-teal-700 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">Fast & Painless</div>
                        <div className="font-bold text-sm text-gray-900">Just 2 visits needed</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-yellow-50 to-teal-50 rounded-xl">
                      <Award className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">Premium Materials</div>
                        <div className="font-bold text-sm text-gray-900">Zirconia, Ceramic</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Our Crowns & Bridges?</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
                  Leading technology, materials, and experience for best results.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceData.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate" style={{ animationDelay: `${i * 0.1}s` }}>
                    <CheckCircle className="w-8 h-8 text-teal-700 mb-3" />
                    <p className="text-sm text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Our Restoration Process</h2>
                <p className="text-base text-gray-600">How we deliver your dream smile—step by step.</p>
              </div>
              <div className="relative">
              	<div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-teal-300 via-yellow-200 to-yellow-100"></div>
              	<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                	{serviceData.process.map((step, i) => (
                  	<Card key={i} className="border-2 hover:border-yellow-500 transition-colors h-full scroll-animate" style={{ 	animationDelay: `${i * 0.15}s` }}>
                    	<CardContent className="p-4">
                      	<div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">{step.step}</div>
                      	<h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      	<p className="text-sm text-gray-600">{step.description}</p>
                    	</CardContent>
                  	</Card>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Types of Crowns & Bridges Offered
                </h2>
                <p className="text-base text-gray-600">Choose the best material and technique for your needs.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceData.types.map((type, i) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={i} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate" style={{ animationDelay: `${i * 0.2}s` }}>
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                          <IconComponent className="w-8 h-8 text-teal-700" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                        <p className="text-base text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
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

        {/* Before & After Gallery */}
        {/*<section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <div className="inline-block bg-yellow-50 text-yellow-700 px-3 py-2 rounded-full text-xs font-medium mb-4">Real Patient Results</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Before & After Restorations</h2>
                <p className="text-base text-gray-600">See natural-looking crowns and bridges transformations.</p>
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
        </section> */}

        {/* Reviews Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 scroll-animate">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Patient Testimonials</h2>
              <p className="text-base text-gray-600">Read what our patients say about their new smiles.</p>
            </div>
            <div className="scroll-animate">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Crowns & Bridges FAQs</h2>
                <p className="text-base text-gray-600">Answers to common restoration questions.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border-2 border-yellow-200 rounded-xl hover:border-teal-700 transition-all hover:shadow-lg scroll-animate" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-yellow-50 transition-colors">
                      <span className="font-semibold text-gray-900 pr-4 text-base leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-6 h-6 text-teal-700 transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
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

        {/* Blog Carousel */}
        <BlogCarousel />

        {/* CTA Section */}
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Premium Crowns & Bridges in Anandbagh & Secunderabad Today"
          subtitle="Book your smile restoration consultation at Dr. Sri Sushma Multispeciality Dental Clinic and transform your life!"
        />
      </div>
      <ServicePopup serviceName="Dental Crowns & Bridges" />
    </>
  );
}
