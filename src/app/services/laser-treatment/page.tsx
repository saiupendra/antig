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
import { Phone, Star, Clock, Award, Shield, CheckCircle, Sparkles, ChevronDown } from "lucide-react";

// ===== Animated scroll in sections
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("show")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ===== Before/After transformer slider
function BeforeAfterSlider({ item }) {
  const [sliderValue, setSliderValue] = useState(50);
  const dragging = useRef(false);
  const handleDragStart = () => { dragging.current = true };
  const handleDragEnd = () => { dragging.current = false };
  const handleDragMove = (e) => {
    if (!dragging.current) return;
    let clientX;
    if ("touches" in e) { clientX = e.touches[0].clientX; } else { clientX = e.clientX; }
    const rect = e.currentTarget.getBoundingClientRect();
    setSliderValue(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  };
  return (
    <div className="space-y-2">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none cursor-ew-resize"
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
                <Image src={item.before} alt={`Before ${item.title} - Dentures`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
              <div className="relative w-full h-full">
                <Image src={item.after} alt={`After ${item.title} - Dentures`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-left pointer-events-none" draggable={false} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-pink-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">Before</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-orange-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold z-10 pointer-events-none">After</div>
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

const dentureGallery = [
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
];

const dentureFaqs = [
  { question: "What are the types of dentures available?", answer: "We offer full (complete) dentures, partial dentures, flexible, and implant-supported dentures." },
  { question: "How long do dentures last?", answer: "With proper care, modern dentures last 5-10 years. Fit may need adjustment over time as gums change shape." },
  { question: "Are dentures uncomfortable or painful?", answer: "New dentures may require an adjustment period, but custom fitting, high-tech materials, and soft linings ensure comfort for most patients." },
  { question: "Can I eat and speak normally with dentures?", answer: "Yes! Initial practice helps; most patients adapt to chewing and speaking comfortably after a brief adjustment period." },
  { question: "How do I maintain my dentures?", answer: "Daily cleaning with a denture brush, removing at night, and routine dental check-ups are key for health and freshness." }
];

export default function DenturesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useScrollAnimation();

  return (
    <>
      <Head>
        <title>Dr. Sri Sushma Multispeciality Dental Clinic - Best Dentures in Anandbagh | Full, Partial &amp; Implant-Supported Dentures</title>
        <meta name="description" content="Restore your smile, eat in comfort and speak with confidence with precision-fit dentures in Anandbagh. Custom, flexible and implant dentures for every need." />
        <meta name="keywords" content="dentures Anandbagh, complete dentures, partial dentures, implant dentures, flexible dentures, artificial teeth, teeth replacement" />
        <link rel="canonical" href="https://www.drsrisushmadentalclinic.com/services/laser-treatment/" />
      </Head>

      {/* HERO */}
      <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden scroll-animate">
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white/20 to-blue-50"></div>
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-cyan-200/40 to-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-cyan-100/50 to-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-cyan-200 text-cyan-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 fill-cyan-500" />
              <span>Gentle, No-Bleed Laser Dentistry</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
              Laser Dental Treatment
              <span className="block mt-2 bg-gradient-to-r from-cyan-800 via-blue-700 to-sky-500 bg-clip-text text-transparent">
                Painless, Modern Laser Dentistry in Anandbagh & Secunderabad
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
              Experience next-generation, pain-free dental treatment for gums, fillings, surgery, and more—fast healing, safer. Our laser specialists deliver results for all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg w-full sm:w-auto">
                <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Book Free Laser Consult</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-cyan-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
                <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Call +91 79958 15454</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <article className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <figure className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate">
                <Image
                  src="/images/services/pages/Laser-hero.jpg"
                  alt="Laser Dentistry at Dr. Sri Sushma Multispeciality Dental Clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </figure>
              <div className="order-1 lg:order-2 scroll-animate">
                <div className="inline-block bg-cyan-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  About Laser Dentistry
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Join the Revolution: Precision, Comfort, &amp; Speed with Lasers!
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Our clinic uses advanced dental lasers for painless procedures including gum therapy, fillings, ulcers, surgery, and whitening. Less pain, no blood, minimal swelling, and the safest way to treat dental issues.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">Fast Procedures</div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">No Waiting!</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">Ultimate Comfort</div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">Zero Pain Promise</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Choose Laser Dentistry?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Discover the benefits of cutting-edge comfort.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                "No blood, no sutures, no trauma",
                "Virtually pain-free for all ages",
                "Safer for diabetes & hypertensive patients",
                "Painless gum and filling treatments",
                "Fast healing, minimal swelling and postoperative complications",
                "Reduces dental anxiety & need for anesthesia",
                "Minimal risk of infection",
                "Extremely precise and effective"
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                How Our Laser Dental Treatments Work
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                A step-by-step journey to advanced dental care.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-cyan-200 via-blue-200 to-blue-50"></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                {[
                  { step: "1", title: "Consult & Examine", description: "Expert assessment. Digital scans to plan your laser treatment." },
                  { step: "2", title: "Comfort Prep", description: "Pain-free anesthesia if needed. Stress free" },
                  { step: "3", title: "Laser Treatment", description: "Targeted laser gently shapes, heals, and repairs teeth or gums." },
                  { step: "4", title: "Instant Healing", description: "Minimal bleeding/swelling. Patient can return to daily routine at once." },
                  { step: "5", title: "Post-Care Support", description: "Home advice, WhatsApp support, fast checkups. Enjoy your bright new smile!" }
                ].map((step, idx) => (
                  <div key={idx} className="relative scroll-animate" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <Card className="border-2 hover:border-cyan-500 transition-colors h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
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
      <section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                What Can Dental Laser Treat?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                One device, many gentle solutions:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Laser Gum Surgery",
                  description: "No bleeding, blade-free, fast-healing gum surgery and deep cleaning.",
                  features: ["No sutures", "Minimal swelling", "Super fast recovery"],
                  icon: Star
                },
                {
                  name: "Laser Fillings/Ulcers",
                  description: "Quick fillings, canker sore/sensitivity, all with zero drilling.",
                  features: ["Quick & anxiety-free", "No vibration/noise", "Great for children"],
                  icon: Shield
                },
                {
                  name: "Laser Teeth Whitening",
                  description: "Gentle and effective whitening for sensitive teeth.",
                  features: ["No burning", "Safe for enamel", "Long lasting white smile"],
                  icon: Award
                }
              ].map((type, idx) => {
                const IconComponent = type.icon;
                return (
                  <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {type.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                        {type.description}
                      </p>
                      <div className="space-y-2">
                        {type.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" /><span>{feature}</span>
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

      {/* ===== Before & After Transformations ===== */}
      {/*<section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <div className="inline-block bg-orange-100 text-orange-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">Real Patient Results</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Before &amp; After Denture Transformations</h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">Life-changing smiles, restored function and confidence.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {dentureGallery.map((item, idx) => (
                <div key={idx} className="scroll-animate" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <BeforeAfterSlider item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* ===== FAQ Section ===== */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-pink-50 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Dentures FAQs</h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">Answers to your teeth replacement questions.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              {dentureFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white border-2 border-pink-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-orange-400 transition-all duration-300 hover:shadow-lg scroll-animate"
                     style={{ animationDelay: `${idx * 0.1}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left hover:bg-pink-50 transition-colors">
                    <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-orange-600 transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-200 pt-4 animate-fade-in">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Patients Say About Their New Dentures</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>
      
      {/* BLOG/RELATED */}
          <BlogCarousel />

        <CTASection
          variant="service"
          showStats={true}
          showSpecialOffer={true}
          title="Book Your Dental Implant Consultation"
          subtitle="Restore your teeth, confidence, and comfort for life—with EMI and advanced care!"
        />
      <ServicePopup serviceName="Dentures" />
    </>
  );
}
