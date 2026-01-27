"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BlogCarousel from "@/components/BlogCarousel";
import CTASection from "@/components/CTASection";
import ServicePopup from "@/components/ServicePopup";
import { Phone, ArrowRight, CheckCircle, Star, Clock, Shield, Award, ChevronDown, Sparkles } from "lucide-react";

// Animation Hook
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

// Before/After Slider
function BeforeAfterSlider({ item }) {
  const [sliderValue, setSliderValue] = useState(50);
  const dragging = useRef(false);
  const handleDragStart = () => { dragging.current = true };
  const handleDragEnd = () => { dragging.current = false };
  const handleDragMove = (e) => {
    if (!dragging.current) return;
    let clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderValue(Math.max(0, Math.min(100, x)));
  };
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
            <div className="absolute top-0 left-0 bottom-0 overflow-hidden" style={{ width: `${sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.before} alt={`Before ${item.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.after} alt={`After ${item.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-left pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-lime-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-rose-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">After</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="drop-shadow-lg">
              <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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

export default function DentalFillingsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  useScrollAnimation();

  const serviceData = {
    title: "Dental Fillings",
    subtitle: "Restore Decayed Teeth with Natural-Looking Tooth Fillings",
    heroImage: "/images/services/pages/Dental-Filling.webp",
    seo: {
      title: "Dr. Sri Sushma Multispeciality Dental Clinic - Best Dental Fillings in Anandbagh | Tooth Filling Cost & Treatment",
      description: "Get painless dental fillings in Anandbagh at Dr. Sri Sushma Multispeciality Dental Clinic. Tooth-colored composite fillings from ₹500. Same-day cavity treatment. Metal-free, natural-looking dental restorations. Book now!",
      keywords: "dental fillings Anandbagh, tooth filling cost, cavity filling, composite fillings, tooth colored fillings, amalgam fillings, dental cavity treatment, painless filling, same day filling Anandbagh, Best Dental Fillings clinic near me",
      canonical: "https://www.drsrisushmadentalclinic.com/services/fillings/"
    },
    description: "It helps to stop tooth decay and restore your smile with advanced dental fillings at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh. We specialize in tooth-colored composite fillings that blend seamlessly with your natural teeth, providing durable and aesthetically pleasing cavity treatment. Whether you have small cavities, chipped teeth, or worn enamel, our painless dental filling procedures restore tooth structure, prevent further decay, and maintain your confident smile. Using the latest materials and techniques, we deliver comfortable, long-lasting fillings in a single visit.",
    fullDescription: "Modern composite resin (tooth-colored) fillings bond directly to tooth structure, provide excellent strength, and are virtually invisible. Unlike older silver amalgam fillings, composite fillings preserve more natural tooth structure and contain no mercury. Most filling procedures take 30-60 minutes per tooth and are performed painlessly.",
    benefits: [
      "Stops tooth decay progression permanently",
      "Restores normal tooth function for eating",
      "Natural tooth-colored appearance",
      "Painless procedure under anesthesia",
      "Same-day treatment in single visit",
      "Prevents need for root canal later",
      "Strengthens weakened tooth structure",
      "Lasts 7-15 years with proper care"
    ],
    process: [
      {
        step: "1",
        title: "Examination & Diagnosis",
        description: "Visual exam, X-rays to assess cavity size/depth, and determination of best filling material for your tooth"
      },
      {
        step: "2",
        title: "Preparation",
        description: "Isolation of tooth, and removal of all decayed tissue using dental drill"
      },
      {
        step: "3",
        title: "Cavity Cleaning",
        description: "Thorough cleaning and disinfection of prepared cavity to remove bacteria and prevent future decay"
      },
      {
        step: "4",
        title: "Filling Placement",
        description: "Layering of composite material, bonding to tooth, shaping to match natural tooth contours"
      },
      {
        step: "5",
        title: "Polishing & Bite Check",
        description: "Polishing for smooth finish, bite adjustment for comfort, and care instructions for filling longevity"
      }
    ],
    types: [
      {
        name: "Composite Fillings (Tooth-Colored)",
        description: "Natural-looking white resin fillings that blend perfectly with your teeth",
        features: ["Invisible appearance", "Bonds to tooth", "Mercury-free", "Front/back teeth"],
        icon: Star
      },
      {
        name: "Glass Ionomer Fillings",
        description: "Fluoride-releasing fillings ideal for children and root surface cavities",
        features: ["Releases fluoride", "Gentle on teeth", "Good for kids"],
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
      { question: "How long do dental fillings last?", answer: "Dental filling lifespan depends on material and care: Composite (tooth-colored) fillings last 7-10 years on average..." },
      { question: "Is getting a dental filling painful?", answer: "No, modern dental fillings are completely painless. We use local anesthesia injection..." },
      { question: "How much do dental fillings cost in Hyderabad?", answer: "Dental filling costs in Hyderabad at Dr. Sushma Dental Clinic vary by material and cavity size..." },
      { question: "What is the difference between composite and amalgam fillings?", answer: "Main differences: Composite is tooth-colored, amalgam is silver/grey (visible)..." },
      { question: "Can I eat after getting a dental filling?", answer: "Yes, but timing depends on filling type..." },
      { question: "How do I care for my dental fillings?", answer: "Maintain dental fillings with proper care: brush, floss, dental checkups..." }
    ],
    priceRange: "₹500 - ₹2,500",
    duration: "30-60 minutes per tooth",
    relatedServices: [
      {
        name: "Root Canal Treatment",
        description: "Save deeply infected teeth and stop persistent pain",
        link: "/services/root-canal/",
        image: "/images/services/root-canal.png"
      },
      {
        name: "Dental Crowns & Bridges",
        description: "Long-lasting protection for heavily damaged teeth",
        link: "/services/bridges-crowns/",
        image: "/images/services/bridges.png"
      },
      {
        name: "Preventive Dentistry",
        description: "Keep your teeth healthy and cavity-free",
        link: "/services/preventive/",
        image: "/images/services/preventive.png"
      }
    ]
  }

  useEffect(() => {
    // SEO json-ld or similar script can be added here if needed
  }, []);

  return (
    <>
      <Head>
        <title>{serviceData.seo.title}</title>
        <meta name="description" content={serviceData.seo.description} />
        <meta name="keywords" content={serviceData.seo.keywords} />
        <link rel="canonical" href={serviceData.seo.canonical} />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-100 via-green-50 to-rose-50"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-lime-200/30 to-green-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-rose-200/40 to-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-green-100/40 to-lime-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-lime-100 text-lime-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                <Star className="w-4 h-4 fill-lime-600" />
                <span>Painless • Same-Day • Natural-Looking</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                Dental Fillings
                <span className="block mt-2 bg-gradient-to-r from-lime-700 via-green-700 to-rose-700 bg-clip-text text-transparent">
                  Restore strength and keep your smile naturally beautiful
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {serviceData.subtitle} at Dr. Sri Sushma Multispeciality Dental Clinic - Anandbagh's Trusted Cavity Treatment Specialist
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" className="bg-gradient-to-r from-lime-600 to-pink-500 hover:from-green-700 hover:to-rose-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    <span className="text-base">Book Appointment</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-lime-500 text-lime-700 hover:bg-lime-50 bg-white/80 w-full sm:w-auto">
                  <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="text-base">Call +91 79958 15454</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>
        {/* About */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image src={serviceData.heroImage} alt={serviceData.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                </div>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-lime-100 text-lime-700 px-3 py-2 rounded-full text-xs font-medium mb-4">About {serviceData.title}</div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What are Dental Fillings? Complete Guide
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">{serviceData.description}</p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">{serviceData.fullDescription}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-lime-50 to-green-50 rounded-xl">
                      <Clock className="w-8 h-8 text-lime-700 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">Duration</div>
                        <div className="font-bold text-sm text-gray-900">{serviceData.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                      <Award className="w-8 h-8 text-pink-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-600">Cost Range</div>
                        <div className="font-bold text-sm text-gray-900">{serviceData.priceRange}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-lime-50 via-green-50 to-rose-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Dental Fillings</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Why treat cavities with our dental fillings</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceData.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate">
                    <CheckCircle className="w-8 h-8 text-lime-600 mb-3" />
                    <p className="text-sm text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Process */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dental Filling Procedure: Step-by-Step</h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Your cavity treatment journey in 5 simple steps</p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-lime-300 via-green-200 to-pink-200"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate">
                      <Card className="border-2 hover:border-lime-500 transition-colors h-full">
                        <CardContent className="p-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-lime-600 to-pink-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 shadow-lg">{step.step}</div>
                          <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-xs text-gray-600">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Types */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Dental Fillings</h2>
                <p className="text-base sm:text-lg text-gray-600">Different options for every need and budget</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceData.types.map((type, idx) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
                          <IconComponent className="w-8 h-8 text-lime-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                        <p className="text-base text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-2">
                          {type.features.map((feature, ii) => (
                            <div key={ii} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-lime-500 flex-shrink-0" />
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
        {/* Before/After */}
        {/*<section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <div className="inline-block bg-lime-50 text-lime-700 px-3 py-2 rounded-full text-xs font-medium mb-4">Real Results</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Dental Filling Before & After Gallery</h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">See cavity transformations from our patients</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.beforeAfterGallery.map((item, idx) => (
                  <div key={idx} className="scroll-animate"><BeforeAfterSlider item={item} /></div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
        {/* Testimonials */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Our Patients Say</h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">Real testimonials from satisfied patients</p>
            </div>
            <div className="scroll-animate"><TestimonialsCarousel /></div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-lime-50 via-green-50 to-rose-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Dental Fillings FAQ</h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Common questions about dental filling treatment</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border-2 border-lime-200 rounded-xl overflow-hidden hover:border-lime-500 transition-all hover:shadow-lg scroll-animate">
                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-start justify-between p-4 text-left hover:bg-lime-50 transition-colors">
                      <span className="font-semibold text-gray-900 pr-4 text-base leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-6 h-6 text-lime-600 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-base text-gray-600 border-t border-lime-100 pt-4 animate-fade-in">
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
                  Related Dental Services
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  Explore other common treatments for better oral health
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                {serviceData.relatedServices.map((service, index) => (
                  <Link key={index} href={service.link} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 scroll-animate">
                    <div className="relative h-48 sm:h-56">
                      <Image src={service.image} alt={service.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
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

        {/* Final CTA */}
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Get Painless Dental Fillings in Anandbagh Today"
          subtitle="Book your same-day appointment for natural-looking, durable dental fillings. Affordable pricing with 0% EMI available."
        />
      </div>
      <ServicePopup serviceName="Dental Fillings" />
    </>
  );
}
