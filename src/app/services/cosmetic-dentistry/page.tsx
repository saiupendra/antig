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
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles, Smile, Zap, Heart } from "lucide-react";

// Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("show"); }); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Before/After Slider
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
                <Image src={item.before} alt={`Before ${item.title} - Cosmetic Dentistry`} fill sizes="(max-width:768px)100vw,33vw" className="object-cover" draggable={false} loading="lazy" />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.after} alt={`After ${item.title} - Cosmetic Dentistry`} fill sizes="(max-width:768px)100vw,33vw" className="object-cover" draggable={false} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-emerald-600 text-white px-2 py-1 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold z-10">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-amber-400 text-white px-2 py-1 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold z-10">After</div>
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
  title: "Cosmetic Dentistry",
  subtitle: "Smile Makeovers, Veneers & Aesthetic Dental Experts in Anandbagh",
  heroImage: "/images/services/cosmetic-hero.jpg",
  seo: {
    title: "Best Cosmetic Dentist in Anandbagh | Smile Makeover, Veneers, Hollywood Smile",
    description: "World-class cosmetic dentistry in Anandbagh – smile design, veneers, teeth reshaping, tooth-colored bonding, gummy smile correction, professional whitening and more.",
    keywords: "cosmetic dentist Anandbagh, smile makeover, dental veneers, Hollywood smile Anandbagh, tooth bonding, teeth whitening, smile correction, dental aesthetics, best dental clinic near me",
    canonical: "https://drsushmadentalclinic.com/services/cosmetic-dentistry/"
  },
  description: "Ready for your dream smile? From gentle tooth reshaping to Hollywood veneers, our clinic makes dazzling, natural results possible for every budget.",
  fullDescription: "Dr. Sri Sushma Multispeciality Dental Clinic’s cosmetic team uses digital previews and a focus on facial harmony for your most confident smile—whether you need whitening, reshaping, composite bonding, gap closure, or a full smile transformation. We deliver A-list results with world-class technologies and a gentle touch.",
  benefits: [
    "Complete smile design – review your results before we start",
    "Pain-free veneer, laminate & bonding procedures",
    "Instantly close gaps, correct chips, enhance tooth shape",
    "Professional teeth whitening, no sensitivity",
    "Gummy smile or uneven gumline correction",
    "Long-lasting, stain-resistant, natural shades",
    "Digital shade and symmetry matching",
    "Personalized for your face and personality"
  ],
  process: [
    { step: "1", title: "Smile Design & Digital Preview", description: "High-resolution imaging and a custom mockup to plan and approve your desired result." },
    { step: "2", title: "Minimally Invasive Prep", description: "Gentle reshaping of teeth and/or gums—often no anesthesia or drilling needed." },
    { step: "3", title: "Shade, Shape & Texture Selection", description: "We’ll match the ideal shade, length, and contour to your features for 100% natural results." },
    { step: "4", title: "Veneer, Bond or Whitening Placement", description: "Expert, pain-free delivery—one visit or staged for total comfort." },
    { step: "5", title: "Final Polish & Home Smile Kit", description: "Smile ready for photos, plus aftercare and tips to make your results last!" }
  ],
  types: [
    {
      name: "Porcelain Veneers",
      description: "Finest ultra-thin shells to redefine shape, color, length, and symmetry. Hollywood results with zero-jaw shaving methods.",
      features: ["Stain resistant", "Natural translucency", "Custom to your smile"],
      icon: Smile,
    },
    {
      name: "Composite Bonding/Reshaping",
      description: "Quick, gentle fixes for chips, gaps, discoloration, or uneven edges—completed in a single visit for instant confidence.",
      features: ["No needles", "Budget friendly", "Repairs & closes gaps"],
      icon: Zap,
    },
    {
      name: "Teeth Whitening/System Bleaching",
      description: "Brighten by up to 8 shades with professional in-office or safe at-home options.",
      features: ["No sensitivity", "Results last years", "Customized trays"],
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
      question: "How long will cosmetic dental results last?",
      answer: "Veneers and bonding last 10+ years with good care and regular dental visits; whitening lasts 2–3 years per session."
    },
    {
      question: "Are cosmetic procedures painful?",
      answer: "No—modern techniques make veneer, bonding, and even gum correction virtually painless and anxiety-free."
    },
    {
      question: "Is cosmetic dentistry expensive?",
      answer: "There are great options for every budget; smile design consults help optimize for cost/aesthetics."
    },
    {
      question: "Will my smile look fake?",
      answer: "Never. We specialize in subtle, youthful, face-matched results, not 'fake' Hollywood teeth."
    },
    {
      question: "How do I get started?",
      answer: "Start with a digital smile consult; we preview results before any treatment, so you always feel sure."
    }
  ],
  relatedServices: [
    {
      name: "Teeth Whitening",
      description: "Brighten your smile safely & quickly",
      link: "/services/whitening/",
      image: "/images/services/whitening.png"
    },
    {
      name: "Clear Aligners (Invisible Braces)",
      description: "Straighten teeth without metal braces",
      link: "/services/clear-aligners/",
      image: "/images/services/aligners.png"
    },
    {
      name: "Dental Crowns & Bridges",
      description: "Restore and beautify damaged teeth",
      link: "/services/bridges-crowns/",
      image: "/images/services/bridges.png"
    }
]

};

export default function CosmeticDentistryPage() {
  const [openFaq, setOpenFaq] = useState(null);
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
        {/* HERO */}
        <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-blue-100 to-amber-50"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-emerald-300/40 to-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute top-0 right-0 w-80 sm:w-[30rem] h-72 sm:h-96 bg-gradient-to-br from-amber-200/30 to-emerald-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-100/40 to-emerald-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-emerald-100 text-emerald-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
                <Sparkles className="w-4 h-4 fill-amber-500" />
                <span>Anandbagh’s Trusted Cosmetic Dentists</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                {serviceData.title} in Anandbagh
                <span className="block mt-2 bg-gradient-to-r from-emerald-700 via-blue-600 to-amber-500 bg-clip-text text-transparent">{serviceData.subtitle}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-amber-400 hover:from-emerald-700 hover:to-blue-600 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-base">Book Smile Makeover Consult</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 bg-white/80 w-full sm:w-auto">
                  <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="text-base">Call +91 79958 15454</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* ABOUT/OVERVIEW */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <article className="grid lg:grid-cols-2 gap-8 items-center">
                <figure className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image src={serviceData.heroImage} alt="Cosmetic Dentistry Hyderabad" fill sizes="(max-width:1024px)100vw,50vw" className="object-cover" priority />
                </figure>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-amber-50 text-amber-800 px-3 py-2 rounded-full text-xs font-medium mb-4">Smile Makeover & Aesthetics</div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    Transform Your Smile with Dr. Sri Sushma Multispeciality Dental Clinic Top Cosmetic Dentists
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">{serviceData.fullDescription}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl">
                      <Clock className="w-8 h-8 text-emerald-700 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">Digital Smile Design</div>
                        <div className="font-bold text-sm text-gray-900">Preview Your Results</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-amber-100 to-emerald-50 rounded-xl">
                      <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">Pain-Free & Precise</div>
                        <div className="font-bold text-sm text-gray-900">Modern Technologies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Why Choose Cosmetic Dentistry?
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
                  Looks, health, and confidence—modern options for every budget.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceData.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate" style={{ animationDelay: `${i * 0.1}s` }}>
                    <CheckCircle className="w-8 h-8 text-amber-500 mb-3" />
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
                  Our Cosmetic Dentistry Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Safe, digital, painless—smile makeovers you can trust.
                </p>
              </div>
              <div className="relative">
                {/* Section background colored Process line */}
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 via-blue-200 to-amber-200"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                      <Card className="border-2 hover:border-amber-500 transition-colors h-full">
                        <CardContent className="p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-600 to-amber-400 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
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
                  Cosmetic Treatments We Offer
                </h2>
                <p className="text-base text-gray-600">
                  Choose the right cosmetic solution for your dream smile.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceData.types.map((type, idx) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate" style={{ animationDelay: `${idx * 0.2}s` }}>
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-amber-100 rounded-2xl flex items-center justify-center mb-6">
                          <IconComponent className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                        <p className="text-base text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-2">
                          {type.features.map((feature, ii) => (
                            <div key={ii} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
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
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <div className="inline-block bg-amber-50 text-amber-700 px-3 py-2 rounded-full text-xs font-medium mb-4">Patient Results</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Cosmetic Smile Transformations
                </h2>
                <p className="text-base text-gray-600">See dramatic smile improvements – real Hyderabad makeovers.</p>
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
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 scroll-animate">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Cosmetic Dentistry Reviews</h2>
              <p className="text-base text-gray-600">Real feedback from Hyderabad smile makeover patients.</p>
            </div>
            <div className="scroll-animate">
              <TestimonialsCarousel />
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

        {/* FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                  Cosmetic Dentistry FAQs
                </h2>
                <p className="text-base text-gray-600">Your cosmetic treatment questions, answered.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border-2 border-amber-200 rounded-xl hover:border-emerald-600 transition-all hover:shadow-lg scroll-animate" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-start justify-between p-6 text-left hover:bg-amber-50 transition-colors">
                      <span className="font-semibold text-gray-900 pr-4 text-base leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-6 h-6 text-emerald-600 transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
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

        {/* BLOG CAROUSEL & CTA */}
        <BlogCarousel />
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Your Dream Smile in Anandbagh"
          subtitle="Book a cosmetic dentistry consultation at Dr. Sri Sushma Multispeciality Dental Clinic today."
        />
      </div>
      <ServicePopup serviceName="Cosmetic Dentistry" />
    </>
  )
}
