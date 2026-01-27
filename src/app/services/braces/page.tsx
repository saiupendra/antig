"use client"
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
import { Phone, ArrowRight, CheckCircle, Award, ChevronDown, Sparkles, Star, Shield } from "lucide-react";

// In-section animation
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("show") }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Optional: Before/After (add real images if you have)
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
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-violet-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-pink-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">After</div>
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

export default function DentalBracesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  useScrollAnimation();

  const serviceData = {
    title: "Dental Braces",
    subtitle: "Metal & Ceramic Braces for All Ages in Anandbagh & Secunderabad",
    heroImage: "/images/services/pages/Dental-Braces.png",
    seo: {
      title: "Dr. Sri Sushma Multispeciality Dental Clinic - Best Dental Braces in Anandbagh & Secunderabad | Metal & Ceramic Braces Cost",
      description: "Affordable orthodontic braces in Anandbagh & Secunderabad. Metal and ceramic tooth-colored braces, invisible braces for kids, teens, adults. Expert orthodontist. EMI & free consult.",
      keywords: "dental braces Anandbagh, metal braces cost, ceramic braces, orthodontist in Anandbagh, teeth straightening, invisible braces, adult braces, braces for kids, ceramic braces in Anandbagh",
      canonical: "https://www.drsrisushmadentalclinic.com/services/braces/"
    },
    description: "Transform your smile with advanced orthodontic treatments. We offer metal and ceramic braces for children, teens, and adults—delivering straight teeth, healthy bites, and beautiful, confident smiles.",
    fullDescription: "Dental braces use brackets and wires to gently move teeth into perfect positions. We use pain-minimized techniques for faster, effective results. Choose from traditional metal, tooth-colored ceramic, or self-ligating (Damon) braces tailored to your lifestyle. Early and adult orthodontics available.",
    benefits: [
      "Fix crowded, spaced, or malaligned teeth",
      "Improve bite, jaw function, and overall dental health",
      "Discreet ceramic options for adults/teens",
      "Modern, pain-minimized methods",
      "Custom treatment with digital planning and progress tracking",
      "Expert orthodontist and caring staff",
      "Durable materials, easy to maintain",
      "Flexible payment plans, interest-free EMI"
    ],
    process: [
      { step: "1", title: "Orthodontic Evaluation & Digital Scan", description: "Check jaw alignment, bite, & teeth position. 3D scan creates a precise treatment plan." },
      { step: "2", title: "Braces Placement", description: "Gentle application of brackets and wires. Choose metal or ceramic. Painless, safe, and secure." },
      { step: "3", title: "Monthly Adjustments", description: "Small, regular tightenings or new wires to guide teeth movement as designed. Flexible schedules." },
      { step: "4", title: "Braces Removal", description: "Quick, safe removal of brackets and adhesive. Reveal your new, straight smile!" },
      { step: "5", title: "Retainer & Smile Maintenance", description: "Fit retainers to prevent relapse. Tips on lifelong dental health & smile preservation." }
    ],
    types: [
      {
        name: "Metal Braces",
        description: "Classic and most affordable. Sturdy and time-tested, perfect for kids and teens.",
        features: ["Strong and durable", "Suitable for all ages", "Quickest results"],
        icon: Shield
      },
      {
        name: "Ceramic (Tooth-Colored) Braces",
        description: "Blends with teeth for a discreet look. Great for adult professionals and image-conscious teens.",
        features: ["Nearly invisible", "No staining", "Custom shade match"],
        icon: Star
      },
      {
        name: "Self-Ligating Braces (Damon)",
        description: "Modern, low-friction system for faster, gentler movement with fewer visits.",
        features: ["Less discomfort", "Faster progress", "Easier to clean"],
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
      { question: "What age is best for braces?", answer: "Braces work at any age. Early teens are ideal, but adults get great results too with modern systems." },
      { question: "How long does braces treatment take?", answer: "Average 12-24 months. Complex cases may take up to 30 months—faster with self-ligating or ceramic in some cases." },
      { question: "Are braces painful?", answer: "Mild soreness for 2-3 days after adjustments is normal. Newer braces are more comfortable than ever." },
      { question: "Do I need to avoid certain foods?", answer: "Avoid very hard/sticky foods (nuts, candy, chewing gum). Cut apples, carrots, meats into small pieces." },
      { question: "What aftercare is needed?", answer: "Wear your retainer as instructed after braces. Brush frequently. We guide you on oral hygiene and dietary tips." }
    ],
    relatedServices: [
      {
        name: "Clear Aligners (Invisible Braces)",
        description: "Straighten teeth discreetly with no metal",
        link: "/services/clear-aligners/",
        image: "/images/services/aligners.png"
      },
      {
        name: "Preventive Dentistry",
        description: "Cleaning, sealants, and cavity prevention for braces wearers",
        link: "/services/preventive/",
        image: "/images/services/preventive.png"
      },
      {
        name: "Teeth Whitening",
        description: "Perfect white smile after braces",
        link: "/services/whitening/",
        image: "/images/services/whitening.png"
      }
    ]
  };

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
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-indigo-100 to-pink-100"></div>
            <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-violet-200/40 to-violet-50/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-pink-200/40 to-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-indigo-100/40 to-violet-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/90 border border-violet-100 text-violet-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 fill-pink-500" />
                <span>Expert Orthodontic Care</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                {serviceData.title}
                <span className="block mt-2 bg-gradient-to-r from-violet-700 via-indigo-600 to-pink-600 bg-clip-text text-transparent">{serviceData.subtitle}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {serviceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-pink-500 hover:from-indigo-700 hover:to-pink-700 text-white shadow-lg w-full sm:w-auto">
                  <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    <span className="text-base">Book Free Braces Consult</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-pink-500 text-pink-700 hover:bg-pink-50 bg-white/80 w-full sm:w-auto">
                  <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="text-base">Call +91 79958 15454</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* About/Overview */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                  <Image src={serviceData.heroImage} alt="Dental Braces Hyderabad" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                </div>
                <div className="order-1 lg:order-2 scroll-animate">
                  <div className="inline-block bg-violet-100 text-violet-700 px-3 py-2 rounded-full text-xs font-medium mb-4">About Dental Braces</div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Braces: Modern Tooth Straightening for All Ages
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">{serviceData.fullDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-violet-50 via-indigo-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Braces?</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Straighten your bite & smile with advanced comfort</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceData.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate">
                    <CheckCircle className="w-8 h-8 text-violet-600 mb-3" />
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Braces Process</h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Comfortable & predictable, from day 1 to new smile</p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-violet-300 via-indigo-200 to-pink-200"></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative scroll-animate">
                      <Card className="border-2 hover:border-violet-500 transition-colors h-full">
                        <CardContent className="p-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-pink-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 shadow-lg">{step.step}</div>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Braces Types (What to Choose?)</h2>
                <p className="text-base sm:text-lg text-gray-600">We have a perfect style for everyone</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceData.types.map((type, idx) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
                          <IconComponent className="w-8 h-8 text-violet-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                        <p className="text-base text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-2">
                          {type.features.map((feature, ii) => (
                            <div key={ii} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0" />
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
                <div className="inline-block bg-violet-50 text-violet-700 px-3 py-2 rounded-full text-xs font-medium mb-4">Patient Results</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Braces Before & After Gallery</h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">See how lives change—real Hyderabad patients</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.beforeAfterGallery.map((item, idx) => (
                  <div key={idx} className="scroll-animate"><BeforeAfterSlider item={item} /></div>
                ))}
              </div>
            </div>
          </div>
        </section>*/}

        {/* Testimonials */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-violet-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Dental Braces Reviews</h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">See why we’re Anandbagh & Secunderabad’s recommended orthodontists</p>
            </div>
            <div className="scroll-animate"><TestimonialsCarousel /></div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10 scroll-animate">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Dental Braces FAQ</h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">Answers to common questions about orthodontic treatment</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                {serviceData.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border-2 border-violet-200 rounded-xl overflow-hidden hover:border-violet-500 transition-all hover:shadow-lg scroll-animate">
                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-start justify-between p-4 text-left hover:bg-violet-50 transition-colors">
                      <span className="font-semibold text-gray-900 pr-4 text-base leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-6 h-6 text-violet-600 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-base text-gray-600 border-t border-violet-100 pt-4 animate-fade-in">
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
                  Perfect your smile & oral health
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

        {/* CTA */}
        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Start Your Smile Journey with Braces with Dr. Sri Sushma Multispeciality Dental Clinic"
          subtitle="Get expert orthodontic care, flexible options, and real results!"
        />
      </div>
      <ServicePopup serviceName="Dental Braces & Aligners" />
    </>
  );
}
