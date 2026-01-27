"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import { Phone, AlertCircle, HeartPulse, Shield, CheckCircle, Sparkles, ChevronDown, Zap } from "lucide-react";

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

const emergencyFaqs = [
  { question: "Do you handle true dental emergencies?", answer: "Yes, our clinic is equipped and our doctors on-call for all dental emergencies—day and night." },
  { question: "What should I do if a tooth is knocked out?", answer: "Keep it moist, don't scrub, and get to us within 1 hour for best chance of saving the tooth." },
  { question: "Can I walk in without appointment?", answer: "Absolutely. Emergencies are always prioritized over routine visits; just call so we can prepare for fast care." },
  { question: "What if I have facial swelling, injury, or bleeding?", answer: "Call our hotline immediately. We will arrange immediate evaluation, treatment, and medication." },
  { question: "Do you treat children and elderly emergencies?", answer: "Yes! We handle urgent dental issues for all ages, conditions, and provide gentle, safe care." }
];

export default function EmergencyDentalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useScrollAnimation();

  return (
    <>
      <Head>
        <title>Emergency Dentist in Anandbagh, Moula Ali, Hyderabad| Dr. Sri Sushma Multispeciality Dental Clinic | Urgent Dental Care, Immediate Pain Relief</title>
        <meta name="description" content="Open for all dental emergencies in Hyderabad. Fast relief for toothache, broken tooth, abscess, facial injury & swelling. Qualified urgent dental care, walk-in now or call for immediate help." />
        <meta name="keywords" content="emergency dentist Anandbagh, Moula Ali, Hyderabad, dental clinic Anandbagh, Moula Ali, Hyderabad, urgent dental care, dental pain Anandbagh, Moula Ali, Hyderabad, tooth pain relief, dental abscess, dental trauma, dental swelling, bleeding gum emergency, broken tooth, night dentist Anandbagh, Moula Ali, Hyderabad, walk-in dentist Anandbagh, Moula Ali, Hyderabad, emergency dental doctor Anandbagh, Moula Ali, Hyderabad, after-hours dentist, immediate dental care Anandbagh, Moula Ali, Hyderabad, dental accident Anandbagh, Moula Ali, Hyderabad, Anandbagh, Moula Ali dental hospital emergency" />
        <meta name="robots" content="index,follow"/>
        <link rel="canonical" href="https://drsushmadentalclinic.com/services/emergency-dental/" />
      </Head>

      {/* HERO */}
      <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden scroll-animate">
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-white/10 to-red-50"></div>
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-red-300/40 to-rose-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-rose-200/40 to-red-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-red-200 text-red-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-fade-in">
              <AlertCircle className="w-4 h-4 fill-red-500" />
              <span>Emergency Dentist Anandbagh, Moula Ali, Hyderabad - Fast Response</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 animate-fade-in animation-delay-100">
              Emergency Dental Care, Day &amp; Night
              <span className="block mt-2 bg-gradient-to-r from-red-800 via-red-600 to-rose-500 bg-clip-text text-transparent">
                Fastest Pain Relief &amp; Urgent Dental Treatment
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-200">
              Accidents, pain, swelling, trauma? Get treated in minutes, not hours. Anandbagh's trusted 24x7 emergency dental experts—non-stop care for every age and situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-500 hover:from-rose-600 hover:to-red-700 text-white shadow-lg w-full sm:w-auto">
                <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Book Emergency Care</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-red-700 text-red-700 hover:bg-rose-50 bg-white/80 backdrop-blur-sm w-full sm:w-auto">
                <a href="tel:+917995815454" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Call Now</span>
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
                  src="/images/services/pages/Emergency-Dental-Care.webp"
                  alt="Emergency Dental Clinic Anandbagh"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </figure>
              <div className="order-1 lg:order-2 scroll-animate">
                <div className="inline-block bg-rose-100 text-red-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  About Emergency Dental
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Immediate Relief for All Dental Emergencies—Any Time
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Severe pain, accident, abscess, fracture, lost tooth, bleeding, sports/vehicle trauma, swelling, infection? Our clinic attends ALL cases—night or holiday, no waiting. India's best urgent dental setup: digital X-ray, anaesthesia, minor surgery, paediatric/geriatric safe sedation. We treat walk-ins, referrals, and phone-call triage, every day.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-rose-50 to-red-50 rounded-xl">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">Wait time</div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">Under 10 mins</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl">
                    <HeartPulse className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500 flex-shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600">True 24/7 open</div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">365 days, all hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-rose-50 to-red-50 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Hyderabad Chooses Us for Dental Emergencies?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Trusted, best-rated and fully equipped for ANY urgent dental problem.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                "Specialized 24/7 emergency dentists & on-site doctors",
                "Fastest pain relief clinic—X-ray, medicines, and numbing on arrival",
                "All emergencies—injury, breaking, swelling, abscess, accident, tooth loss",
                "Walk-in always, minimal or no wait. Priority patient triage",
                "On-site paediatric and elderly urgent dental care",
                "Clean, hospital-grade sterilization and safety protocols",
                "All procedures: relief, minor surgery, trauma bonding, bleeding control",
                "All payment modes supported"
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mb-3 sm:mb-4" />
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
                Emergency Dental Visit—How We Treat You In Minutes
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                100% seamless—from reception to relief. Always supervised by a senior doctor.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 via-red-200 to-rose-50"></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
                {[
                  { step: "1", title: "Immediate Arrival or Call", description: "Walk in or call; our team is prepared for you." },
                  { step: "2", title: "Quick Doctor Triage", description: "Doctor evaluates pain, injury, or swelling in minutes." },
                  { step: "3", title: "Emergency Scan/X-ray", description: "On-the-spot digital imaging for accuracy." },
                  { step: "4", title: "Numbing & Immediate Relief", description: "Anaesthesia, antibiotics, drainage, suture, or stabilization—no wait." },
                  { step: "5", title: "Definitive Treatment/Safety", description: "On-call senior experts for further care or follow up." }
                ].map((step, idx) => (
                  <div key={idx} className="relative scroll-animate" style={{ animationDelay: `${idx * 0.15}s` }}>
                    <Card className="border-2 hover:border-red-500 transition-colors h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-rose-400 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg">
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
                ALL Emergency Dental Problems Treated—Day &amp; Night
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Any urgent injury, pain, infection or swelling—no wait, no refusal, any age.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Severe Tooth Pain, Swelling, Abscess",
                  description: "Unbearable pain, pus, infection, night emergencies, wisdom impaction.",
                  features: ["On-the-spot relief", "Same-day X-ray", "Medication & followup"],
                  icon: AlertCircle
                },
                {
                  name: "Accident, Knocked/Broken Tooth",
                  description: "Sports, home, road, job injuries—loose, dislodged or split teeth.",
                  features: ["Save or restore tooth", "Immediate splint/repair", "Minor surgery as required"],
                  icon: Shield
                },
                {
                  name: "Child & Elder Emergency Dental",
                  description: "Priority, gentle, and sedation-enabled for kids, seniors, or compromised health.",
                  features: ["Expert kid/senior care", "All hours, home call possible", "Medical/surgical co-handling"],
                  icon: HeartPulse
                }
              ].map((type, idx) => {
                const IconComponent = type.icon;
                return (
                  <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-100 to-red-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />
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
                            <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" /><span>{feature}</span>
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

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 to-rose-50 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Emergency Dental FAQs
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                What to do for accidents, pain, swelling, injuries and urgent risks.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              {emergencyFaqs.map((faq, idx) => (
                <div key={idx}
                     className="bg-white border-2 border-red-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-400 transition-all duration-300 hover:shadow-lg scroll-animate"
                     style={{ animationDelay: `${idx * 0.1}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left hover:bg-red-50 transition-colors">
                    <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-snug">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-red-600 transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
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

      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-16 md:py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Hyderabad Trusts Our Emergency Team
            </h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection
        title="Need Emergency Dental Help?"
        description="Don't wait if you have dental pain, swelling, or injury. Call or walk in for fast, expert emergency dental care—any time."
        primaryCta={{
          href: "/book-appointment",
          label: "Book Emergency Visit",
        }}
        secondaryCta={{
          href: "tel:+917995815454",
          label: "Call for Emergency",
        }}
        background="from-rose-100 via-red-50 to-white"
      />
    </>
  );
}
