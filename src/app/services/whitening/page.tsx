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

// Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Before/After Slider Component
function BeforeAfterSlider({ item }: { item: { before: string; after: string; title: string; description: string } }) {
  const [sliderValue, setSliderValue] = useState(50)
  const dragging = useRef(false)
  const handleDragStart = () => { dragging.current = true }
  const handleDragEnd = () => { dragging.current = false }
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return
    let clientX: number
    if ('touches' in e) { clientX = e.touches[0].clientX } else { clientX = e.clientX }
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
                  alt={`Before ${item.title} - Teeth Whitening Hyderabad`}
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
                  alt={`After ${item.title} - Teeth Whitening Hyderabad`}
                  fill sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-left pointer-events-none"
                  draggable={false} loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
            Before
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-sky-400 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
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
  title: "Teeth Whitening",
  subtitle: "Professional Whitening for a Radiant Smile in Anandbagh",
  heroImage: "/images/services/pages/whitening-hero.webp",
  seo: {
    title: "Best Teeth Whitening in Anandbagh | Laser & In-Clinic Whitening Dr. Sri Sushma Multispeciality Dental Clinic",
    description: "Get a whiter, brighter smile with professional teeth whitening in Anandbagh. 1-hour painless whitening, visible results, and lasting brilliance. Book your appointment today!",
    keywords: "teeth whitening Anandbagh, best teeth whitening, laser teeth whitening, in-clinic whitening, teeth bleaching, smile makeover, safe whitening, dental clinic",
    canonical: "https://drsushmadentalclinic.com/services/whitening/"
  },
  description: "Brighten your teeth by up to 8 shades in a single, comfortable visit! Dr. Sri Sushma Multispeciality Dental Clinic offers safe, long-lasting, sensitivity-free teeth whitening—using the latest Philips Zoom, laser, and advanced in-clinic solutions. Perfect for weddings, interviews, and every confident smile moment.",
  fullDescription: "Forget messy home kits—our expert-administered treatments deliver uniform, dazzling results and are 100% safe for your enamel. We protect gums, use premium gels and technology, and personalize every procedure for your goals and oral health. Smile bright—from the inside out!",
  benefits: [
    "Instantly removes stains and discoloration",
    "Lightens teeth by multiple shades in one session",
    "Gentle on enamel, zero sensitivity",
    "FDA-approved whitening systems: Zoom, laser, and more",
    "Stunning, even results for your entire smile",
    "Great before weddings, parties, job interviews",
    "Safe for all adults, fast and effective",
    "Professional guidance and aftercare"
  ],
  process: [
    { step: "1", title: "Assessment & Shade Selection", description: "We check suitability, select your shade, and explain realistic results." },
    { step: "2", title: "Gum Protection & Preparation", description: "Professional isolation keeps gums safe and comfortable." },
    { step: "3", title: "Application of Whitening Gel", description: "Powerful, safe gels work with blue/laser light for even results." },
    { step: "4", title: "Activation with LED/Laser", description: "Accelerates whitening, drastically enhances shade change in less time." },
    { step: "5", title: "Final Polishing & Aftercare", description: "Reveal your new smile with sensitivity protection and take-home advice." }
  ],
  types: [
    {
      name: "Laser Whitening",
      description: "Fastest, brightest results with most powerful, safe technique.",
      features: ["Instant results", "Lowest sensitivity", "Noticeably brighter"],
      icon: Award
    },
    {
      name: "Zoom/LED Whitening",
      description: "Gentle, highly effective in-clinic whitening for all teeth.",
      features: ["Uniform results", "1-hour session", "Safe for enamel"],
      icon: Star
    },
    {
      name: "Customized Take-Home Kits",
      description: "Dentist-supervised whitening trays for lasting results at home.",
      features: ["Personalized fit", "Gradual change", "Convenient touch-ups"],
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
      question: "Is professional teeth whitening safe?",
      answer: "Yes—our whitening is dentist-administered, enamel-safe, and will not harm gums or existing dental work."
    },
    {
      question: "How long do results last?",
      answer: "Results often last 1-2 years with good hygiene and avoiding heavy staining foods/drinks. Occasional touch-ups keep your smile bright."
    },
    {
      question: "Will whitening make my teeth sensitive?",
      answer: "Our advanced gels and careful application minimize sensitivity. Most patients feel none or only mild, temporary sensation."
    },
    {
      question: "What stains cannot be whitened?",
      answer: "Dental restorations and very deep (intrinsic) stains may not respond. In such cases, we suggest veneers or bonding for dramatic change."
    },
    {
      question: "Can anyone whiten their teeth?",
      answer: "Most adults can! Whitening is not recommended for children, pregnant/nursing women, or patients with untreated cavities/gum disease."
    }
  ],
  relatedServices: [
    {
      name: "Cosmetic Dentistry",
      description: "Veneers, bonding & full smile makeovers",
      link: "/services/cosmetic-dentistry/",
      image: "/images/services/cosmetic.png"
    },
    {
      name: "Teeth Cleaning & Polishing",
      description: "Professional stain and tartar removal for lasting shine",
      link: "/services/whitening/",
      image: "/images/services/Teeth-Cleaning-Polishing.webp"
    },
    {
      name: "Clear Aligners & Braces",
      description: "Uniform whitening after straightening with braces or aligners",
      link: "/services/clear-aligners/",
      image: "/images/services/braces.png"
    }
    // Optional:
    // {
    //   name: "Preventive Dentistry",
    //   description: "Maintain whitening results with checkups & home care",
    //   link: "/services/preventive-dentistry",
    //   image: "/images/services/preventive-dentistry/hero.jpg"
    // }
  ]

};

export default function WhiteningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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
        <meta name="googlebot" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/30 to-sky-50/80"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-sky-200/40 to-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-200/40 to-sky-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-sky-100/80 to-white/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sky-100 text-sky-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 fill-sky-600" />
                <span>Hyderabad’s #1 Clinic for Brighter Smiles</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                Best {serviceData.title} in Hyderabad
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  {serviceData.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-500 hover:from-sky-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Book Whitening Now</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-sky-400 text-sky-700 hover:bg-sky-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
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
                    alt="Teeth Whitening Hyderabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </figure>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-sky-100 text-sky-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    About Teeth Whitening
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Safe, Noticeable Results in Just One Visit
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {serviceData.fullDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Appointment Time</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">~1 Hour</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Instant Results</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">Up to 8 Shades Lighter</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-sky-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Why Choose Professional Teeth Whitening?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Get confidence and safety in one sparkling appointment.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 mb-3 sm:mb-4" />
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
                  Our Whitening Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Advanced tech and safe gels for a glowing transformation.
                </p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 via-blue-200 to-sky-100"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate"
                         style={{ animationDelay: `${index * 0.15}s` }}>
                      <Card className="border-2 hover:border-sky-400 transition-colors h-full">
                        <CardContent className="p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-sky-400 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
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
                  Teeth Whitening Solutions We Offer
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Find the perfect approach for your dream smile.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.types.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate"
                          style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-6 sm:p-8">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-sky-500" />
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
                              <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
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
                <div className="inline-block bg-sky-100 text-sky-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Real Patient Results
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Before & After Whitening
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See dazzling transformations you can trust.
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
                What Our Whitening Patients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Real reviews and smiles from Anandbagh’s happiest patients.
              </p>
            </div>
            <div className="scroll-animate animation-delay-200">
              <TestimonialsCarousel />
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
                        alt={`${service.name} - Dr. Sri Sushma Multispeciality Dental Clinic Anandbagh`}
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
 
        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  What to expect from safe, professional teeth whitening.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx}
                       className="bg-white border-2 border-sky-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-sky-400 transition-all duration-300 hover:shadow-lg scroll-animate"
                       style={{ animationDelay: `${idx * 0.1}s` }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-sky-600 transition-transform flex-shrink-0 ${
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

        {/* CTA Section */}
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Brilliant White Teeth in Anandbagh Today"
          subtitle="Book your expert whitening session at Dr. Sri Sushma Multispeciality Dental Clinic – instant results, zero pain, max confidence."
        />
      </div>
      <ServicePopup serviceName="Teeth Whitening" />
    </>
  )
}
