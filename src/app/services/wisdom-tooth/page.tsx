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
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles } from "lucide-react";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("show") } }) },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Before/After Slider
function BeforeAfterSlider({ item }: { item: { before: string; after: string; title: string; description: string } }) {
  const [sliderValue, setSliderValue] = useState(50)
  const dragging = useRef(false)
  const handleDragStart = () => { dragging.current = true }
  const handleDragEnd = () => { dragging.current = false }
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return
    let clientX: number
    if ("touches" in e) { clientX = e.touches[0].clientX } else { clientX = e.clientX }
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderValue(Math.max(0, Math.min(100, x)))
  }
  return (
    <div className="space-y-2">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none cursor-ew-resize"
        style={{ touchAction: 'none' }}
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
            <div className="absolute top-0 left-0 bottom-0 overflow-hidden"
              style={{ width: `${sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image
                  src={item.before}
                  alt={`Before ${item.title} - Wisdom Tooth Extraction`}
                  fill sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover pointer-events-none"
                  draggable={false} loading="lazy"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden"
              style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image
                  src={item.after}
                  alt={`After ${item.title} - Wisdom Tooth Extraction`}
                  fill sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-left pointer-events-none"
                  draggable={false} loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-orange-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
            Before
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-400 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
            After
          </div>
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
  )
}

const serviceData = {
  title: "Wisdom Tooth Removal",
  subtitle: "Gentle, Painless Removal by Oral Surgeons in Anandbagh",
  heroImage: "/images/services/pages/Wisdom-Tooth.webp",
  seo: {
    title: "Wisdom Tooth Removal Anandbagh | Painless Extraction by Oral Surgeon",
    description: "Expert wisdom tooth removal in Anandbagh. Painless surgical extraction, impacted third molar surgery, swelling relief & rapid healing at Dr. Sri Sushma Multispeciality Dental Clinic",
    keywords: "wisdom tooth removal Anandbagh, painless wisdom tooth extraction, impacted tooth surgery, oral surgeon, best dental clinic, third molar removal, teeth swelling relief",
    canonical: "https://drsushmadentalclinic.com/services/wisdom-tooth/"
  },
  description: "Experience pain-free, stress-free wisdom tooth removal at Dr. Sri Sushma Multispeciality Dental Clinic. Our oral surgeons use digital X-rays, advanced anesthesia, and gentle aftercare for speedy healing—even for impacted or infected teeth.",
  fullDescription: "Don’t suffer with wisdom tooth pain, jaw swelling, or infections. We remove impacted third molars with minimal trauma, fast healing, and using proven surgical technique and modern anesthesia. Walk in with swelling, walk out smiling!",
  benefits: [
    "Painless extractions with local anesthesia and sedation",
    "Expert oral surgeons for even complex, impacted teeth",
    "Advanced 3D X-ray diagnosis and precision surgery",
    "Minimal swelling and rapid healing",
    "Stitches dissolve on their own",
    "Antibiotic and pain relief protocols",
    "Relief from jaw pain, infection, and dental crowding",
    "Return to work/school next day for most cases"
  ],
  process: [
    { step: "1", title: "Consultation & Digital X-ray", description: "3D assessment to diagnose impaction, infection, and safe removal." },
    { step: "2", title: "Pain-Free Local Anesthesia", description: "Gentle numbing or sedation for total comfort." },
    { step: "3", title: "Surgical Extraction", description: "Special techniques to loosen, section, and remove tooth with minimal trauma." },
    { step: "4", title: "Sutures & Aftercare", description: "Dissolvable stitches placed (if needed) and post-op guidance given." },
    { step: "5", title: "Follow-up and Recovery", description: "Care review, healing check—fast return to normal eating and zero pain." }
  ],
  types: [
    {
      name: "Simple Extraction",
      description: "For erupted and straight wisdom teeth—quick and easy with top comfort.",
      features: ["Fast healing", "No stitches in most cases", "Return to normal soon"],
      icon: Star
    },
    {
      name: "Surgical Extraction (Impacted)",
      description: "For partially or fully buried teeth (impacted/angled) requiring specialist techniques.",
      features: ["Oral surgeon expertise", "Minimal trauma", "3D X-ray guidance"],
      icon: Award
    },
    {
      name: "Sedation/General Anesthesia",
      description: "For anxious patients or multiple teeth. Sleep through the procedure, wake up pain free.",
      features: ["No memory of surgery", "Best for high anxiety", "Same-day discharge"],
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
      question: "Is wisdom tooth removal painful?",
      answer: "No! Modern anesthesia or sedation ensures nearly zero pain during and after extraction."
    },
    {
      question: "How long does swelling last after wisdom tooth extraction?",
      answer: "Most swelling resolves within 2–3 days. We use gentle technique and medication to keep swelling minimal."
    },
    {
      question: "When can I eat after tooth removal?",
      answer: "You can usually eat soft foods 1-2 hours after surgery. Avoid hard/hot/spicy foods for 2–3 days."
    },
    {
      question: "Do I need all four wisdom teeth removed?",
      answer: "Only problematic or at-risk teeth need extraction. Some people keep healthy, pain-free wisdom teeth for life."
    },
    {
      question: "What if I have anxiety about surgery?",
      answer: "We offer sedation options—IV, oral, or nitrous oxide—so you can relax or sleep through the procedure."
    }
  ]
};

export default function WisdomToothPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white/30 to-red-50/90"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-orange-200/40 to-red-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-red-100/40 to-orange-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-orange-100/40 to-red-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-100 text-orange-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-600" />
                <span>Anandbagh’s Trusted Oral Surgeons</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                {serviceData.title} Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                  {serviceData.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-400 hover:from-orange-700 hover:to-red-600 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Book Extraction Appointment</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-700 hover:bg-orange-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
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
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image
                    src={serviceData.heroImage}
                    alt="Wisdom Tooth Extraction Hyderabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </figure>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-orange-100 text-orange-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    About Wisdom Tooth Removal
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    No-Stress Extraction & Speedy Recovery
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {serviceData.fullDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Procedure Time</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">30–60 Minutes</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Fast Recovery</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">Back in 2–3 Days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Why Choose Us for Wisdom Tooth Removal?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Expert comfort, safe technique, and quick healing for every patient.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mb-3 sm:mb-4" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Treatment Process */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Our Wisdom Teeth Extraction Procedure
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Gentle, precise, and fast—minimize stress and maximize healing.
                </p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-red-100 to-yellow-100"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate"
                         style={{ animationDelay: `${index * 0.15}s` }}>
                      <Card className="border-2 hover:border-orange-500 transition-colors h-full">
                        <CardContent className="p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-400 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
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
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Wisdom Tooth Extraction Options
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Custom strategy for your comfort, anatomy, and goals.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.types.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate"
                          style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-6 sm:p-8">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
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
                              <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
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
        {/* Before & After Gallery */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <div className="inline-block bg-orange-100 text-orange-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Real Patient Results
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Wisdom Tooth Before & After Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Happy, pain-free stories—see our clinical results.
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
                What Our Extraction Patients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Zero pain, zero fear—and full relief. Hear from Hyderabad’s patients.
              </p>
            </div>
            <div className="scroll-animate animation-delay-200">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Wisdom Tooth FAQs
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Got questions about wisdom tooth problems and extractions? We have answers!
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx}
                       className="bg-white border-2 border-orange-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-lg scroll-animate"
                       style={{ animationDelay: `${idx * 0.1}s` }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-orange-600 transition-transform flex-shrink-0 ${
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
        <BlogCarousel />
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Pain-Free Wisdom Tooth Removal in Anandbagh, Moula Ali, Hyderabad"
          subtitle="Book now and experience gentle, expert tooth extraction at Dr. Sri Sushma Multispeciality Dental Clinic"
        />
      </div>
      <ServicePopup serviceName="Wisdom Tooth Removal" />
    </>
  )
}
