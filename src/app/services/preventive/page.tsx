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

// Animation Hook (identical to your modern service pages)
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

// Before/After Slider Component (as before)
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
                  alt={`Before ${item.title} - Preventive Dental Care`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  alt={`After ${item.title} - Preventive Dental Care`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-left pointer-events-none"
                  draggable={false} loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
            Before
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">
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

// --- Preventive Care service page data --- 
const serviceData = {
  title: "Preventive Dentistry",
  subtitle: "Stop dental problems before they start. Regular cleanings and checkups save you time, pain, and money.",
  heroImage: "/images/services/pages/Preventive-Dentistry.webp",
  seo: {
    title: "Preventive Dental Care in Anandbagh | Teeth Cleaning, Dental Checkups",
    description: "Prevent cavities, gum disease, and tooth loss with the best preventive dentistry in Anandbagh. Professional teeth cleaning, regular checkups & advanced screening at Dr. Sri Sushma Multispeciality Dental Clinic",
    keywords: "preventive dental care Anandbagh, Moula Ali, Hyderabad, teeth cleaning, dental checkup, professional cleaning, oral hygiene, gum health, dental exam",
    canonical: "https://drsrisushmadentalclinic.com/services/preventive/"
  },
  description: "Dr. Sri Sushma Multispeciality Dental Clinic offers the most advanced preventive dental care in Hyderabad, including professional cleaning, regular dental checkups, digital X-rays, early cavity detection, oral cancer screening, and teeth sealants. Protect your smile, avoid pain and expense, and keep your natural teeth for a lifetime—prevention is always the best cure.",
  fullDescription: "Preventive dentistry focuses on keeping your teeth and gums healthy through regular cleanings, exams, and education. Our painless methods, technology-driven screening, and personalized plans help stop cavities, gum disease, and tooth loss before they begin. We empower you to maintain strong, beautiful smiles at every age.",
  benefits: [
    "Thorough teeth cleaning removes dangerous plaque and tartar",
    "Early detection of decay, gum disease, and oral cancer for easy treatment",
    "Fluoride and sealant protection for kids and adults",
    "Personalized coaching for brushing and flossing",
    "Safe, low-radiation digital dental X-rays",
    "Save money—preventive care costs far less than big dental work",
    "Pain-free, stress-free checkups to fight dental anxiety"
  ],
  process: [
    { step: "1", title: "Comprehensive Dental Exam", description: "Full mouth checkup, dental history, and risk analysis" },
    { step: "2", title: "Professional Teeth Cleaning", description: "Removal of plaque, tartar, and stains, plus gum pocket measurement" },
    { step: "3", title: "Digital X-rays & Advanced Screening", description: "Early detection of cavities, bone loss, and oral cancer" },
    { step: "4", title: "Prevention Plan & Patient Education", description: "Fluoride, sealants, home hygiene guidance" },
    { step: "5", title: "Follow-Up & Recall Appointments", description: "Reminders for future checkups and continuous care" }
  ],
  types: [
    {
      name: "Professional Teeth Cleaning",
      description: "Remove plaque/tartar. Prevent gum disease, freshen breath, and brighten your smile.",
      features: ["Gentle scaling/polishing", "Completely pain free", "For all ages"],
      icon: Shield
    },
    {
      name: "Digital Dental Checkups",
      description: "Advanced oral exams and X-rays for early detection—no surprises or hidden problems.",
      features: ["Low-radiation digital X-rays", "Precancer screening", "Personalized risk reports"],
      icon: Award
    },
    {
      name: "Sealants & Fluoride Protection",
      description: "Extra cavity protection for kids & adults at high decay risk.",
      features: ["Painless protection", "Great for children", "Long-lasting defense"],
      icon: Star
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
      question: "How often do I need a dental checkup and cleaning?",
      answer: "Most people should visit the dentist every 6 months for an exam and professional cleaning. High-risk or ongoing gum problems may require more frequent visits."
    },
    {
      question: "Will teeth cleaning hurt?",
      answer: "No! Modern techniques are gentle and pain-free. We use ultrasonic scalers and high-polish tools for maximum comfort."
    },
    {
      question: "What happens if I skip preventive dental care?",
      answer: "Skipping regular checkups and cleanings allows plaque and tartar to cause gum disease, cavities, and tooth loss—which always cost far more time, pain, and money to fix."
    },
    {
      question: "Are preventive services good for children?",
      answer: "Absolutely! Sealants, fluoride, and coaching build strong, decay-resistant teeth for a lifetime."
    },
    {
      question: "Do you keep track of my regular visits?",
      answer: "Yes—our digital system reminds you when you’re due for your next checkup and keeps a record of your entire dental history for best-practice care."
    }
  ],
  relatedServices: [
    {
      name: "Pediatric Dentistry",
      description: "Special care for children—checkups, fluoride, and sealants",
      link: "/services/pediatric/",
      image: "/images/services/pediatric.png"
    },
    {
      name: "Dental Fillings",
      description: "Quick, pain-free cavity repair when needed",
      link: "/services/fillings/",
      image: "/images/services/fillings.png"
    },
    {
      name: "Orthodontic Braces & Aligners",
      description: "Protect your smile during and after teeth straightening",
      link: "/services/orthodontic-braces/",
      image: "/images/services/Dental-orthodontic-braces.jpg"
    }
    // Optional:
    // {
    //   name: "Teeth Cleaning & Scaling",
    //   description: "Routine hygiene for lifelong gum and tooth health",
    //   link: "/services/teeth-cleaning",
    //   image: "/images/services/cleaning-hero.jpg"
    // }
  ]

}

export default function PreventiveDentistryPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-teal-50/30 to-blue-50/50"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-green-200/40 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-200/40 to-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-teal-200/40 to-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 fill-teal-600" />
                <span>No cavities, no stress – Anandbagh’s #1 preventive dental team</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
                Best {serviceData.title} in Anandbagh
                <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                  {serviceData.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Book Preventive Checkup</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
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
                    alt="Preventive Dental Care Clinic Hyderabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </figure>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    About Preventive Care
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Pain-Free Dental Exams & Cleanings in Anandbagh
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {serviceData.fullDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Fast & Thorough</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">Most visits: 30-45 min</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Minimal Cost</div>
                        <div className="font-bold text-sm sm:text-base text-gray-900">Prevention Saves</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Why Choose Preventive Dentistry?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  The #1 way to keep your teeth for life.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mb-3 sm:mb-4" />
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
                  Our Preventive Dentistry Process
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Step-by-step professional care to keep your smile healthy.
                </p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-teal-200 to-blue-200"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate"
                         style={{ animationDelay: `${index * 0.15}s` }}>
                      <Card className="border-2 hover:border-green-500 transition-colors h-full">
                        <CardContent className="p-4 sm:p-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
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
                  Preventive Services We Offer
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  All the essentials for lasting oral health in one visit.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {serviceData.types.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate"
                          style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-6 sm:p-8">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
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
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
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
                <div className="inline-block bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Real Patient Results
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Before & After Preventive Dental Treatments
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  See the transformation a single cleaning and exam can bring.
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
                What Our Preventive Care Patients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Real stories from patients who avoided costly dental treatment.
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
                        alt={`${service.name} - Dr. Sri Sushma Multispeciality Dental Clinic Hyderabad`}
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
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Your top questions about preventive dental care—answered!
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx}
                       className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-lg scroll-animate"
                       style={{ animationDelay: `${idx * 0.1}s` }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-green-600 transition-transform flex-shrink-0 ${
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
          showSpecialOffer={false}
          title="Schedule Your Preventive Checkup"
          subtitle="The easiest way to protect your smile, your health, and your budget"
        />
      </div>
      <ServicePopup serviceName="Preventive Dentistry" />
    </>
  )
}
