"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BlogCarousel from "@/components/BlogCarousel";
import CTASection from "@/components/CTASection";
import ServicePopup from "@/components/ServicePopup";
import { Phone, CheckCircle, Award, ChevronDown, Sparkles, Star, Shield } from "lucide-react";

interface BeforeAfterItem {
    before: string;
    after: string;
    title?: string;
    description?: string;
}

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

function BeforeAfterSlider({ item }: { item: BeforeAfterItem }) {
    const [sliderValue, setSliderValue] = useState(50)
    const dragging = useRef(false)
    const handleDragStart = () => { dragging.current = true }
    const handleDragEnd = () => { dragging.current = false }
    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragging.current) return
        let clientX: number;
        if ("touches" in e) {
            clientX = e.touches[0].clientX
        } else {
            clientX = (e as React.MouseEvent).clientX
        }
        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = ((clientX - rect.left) / rect.width) * 100
        setSliderValue(Math.max(0, Math.min(100, x)))
    }
    return (
        <div className="space-y-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none cursor-ew-resize"
                style={{ touchAction: 'none' }}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseMove={handleDragMove}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
                onTouchMove={handleDragMove}>
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
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-semibold z-10 pointer-events-none">Before</div>
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs font-semibold z-10 pointer-events-none">After</div>
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

export default function ImplantsClient({ serviceData }: { serviceData: any }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    useScrollAnimation()

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <header className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-100 to-yellow-50"></div>
                    <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-emerald-200/40 to-sky-50/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-yellow-200/40 to-sky-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-sky-100/40 to-emerald-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/90 border border-emerald-100 text-emerald-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                            <Sparkles className="w-4 h-4 fill-yellow-500" />
                            <span>Regain Natural Smile, Bite & Confidence</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                            Best {serviceData.title} at Dr. Sri Sushma Multispeciality Dental Clinic
                            <span className="block mt-2 bg-gradient-to-r from-emerald-700 via-sky-600 to-yellow-500 bg-clip-text text-transparent">{serviceData.subtitle}</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                            {serviceData.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-yellow-500 hover:from-sky-700 hover:to-yellow-700 text-white shadow-lg w-full sm:w-auto">
                                <Link href="https://wa.me/917995815454" className="flex items-center justify-center gap-2">
                                    <Sparkles className="w-6 h-6" />
                                    <span className="text-base">Book Free Implants Consult</span>
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 bg-white/80 w-full sm:w-auto">
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
                                <Image src={serviceData.heroImage} alt="Dental Implants Hyderabad" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                            </div>
                            <div className="order-1 lg:order-2 scroll-animate">
                                <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full text-xs font-medium mb-4">About Dental Implants</div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Permanent Tooth Replacement. World-Class Quality.
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">{serviceData.fullDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-yellow-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10 scroll-animate">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Dental Implants?</h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Restore bite, confidence, and oral health for life</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {serviceData.benefits.map((benefit: string, i: number) => (
                                <div key={i} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow scroll-animate">
                                    <CheckCircle className="w-8 h-8 text-emerald-600 mb-3" />
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
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Implant Treatment Steps</h2>
                            <p className="text-base sm:text-lg text-gray-600 px-4">How we restore your teeth—predictable, safe, and precise</p>
                        </div>
                        <div className="relative">
                            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 via-sky-200 to-yellow-200"></div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                                {serviceData.process.map((step: any, index: number) => (
                                    <div key={index} className="relative scroll-animate">
                                        <Card className="border-2 hover:border-emerald-500 transition-colors h-full">
                                            <CardContent className="p-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-yellow-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 shadow-lg">{step.step}</div>
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
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Dental Implants</h2>
                            <p className="text-base sm:text-lg text-gray-600">Best solutions for single, multiple, or all teeth</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {serviceData.types.map((type: any, idx: number) => {
                                const iconMap: Record<string, any> = { Star, Shield, Award };
                                const IconComponent = typeof type.icon === 'string' ? iconMap[type.icon] : type.icon;
                                return (
                                    <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 scroll-animate">
                                        <CardContent className="p-8">
                                            <div className="w-16 h-16 bg-gradient-to-br from-sky-50 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                                                <IconComponent className="w-8 h-8 text-emerald-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                                            <p className="text-base text-gray-600 mb-4">{type.description}</p>
                                            <div className="space-y-2">
                                                {type.features.map((feature: string, ii: number) => (
                                                    <div key={ii} className="flex items-center gap-2 text-sm text-gray-700">
                                                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
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

            {/* Testimonials */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 scroll-animate">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Dental Implant Reviews</h2>
                        <p className="text-base sm:text-lg text-gray-600 px-4">Changing lives with real bite, comfort, and smile</p>
                    </div>
                    <div className="scroll-animate"><TestimonialsCarousel /></div>
                </div>
            </section>
            {/* FAQ */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10 scroll-animate">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Dental Implants FAQ</h2>
                            <p className="text-base sm:text-lg text-gray-600 px-4">Everything you want to know before starting</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4">
                            {serviceData.faqs.map((faq: any, idx: number) => (
                                <div key={idx} className="bg-white border-2 border-emerald-200 rounded-xl overflow-hidden hover:border-emerald-500 transition-all hover:shadow-lg scroll-animate">
                                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-start justify-between p-4 text-left hover:bg-emerald-50 transition-colors">
                                        <span className="font-semibold text-gray-900 pr-4 text-base leading-snug">{faq.question}</span>
                                        <ChevronDown className={`w-6 h-6 text-emerald-600 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-4 pb-4 text-base text-gray-600 border-t border-emerald-100 pt-4 animate-fade-in">
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

            {/* Related Services */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8 sm:mb-12 scroll-animate">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Related Dental Services
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 px-4">
                                Everything your new smile needs, all in one place
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                            {serviceData.relatedServices.map((service: any, index: number) => (
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
            <CTASection
                variant="service"
                showStats={true}
                showSpecialOffer={true}
                title="Book Your Dental Implant Consultation"
                subtitle="Restore your teeth, confidence, and comfort for life advanced care!"
            />
            <ServicePopup serviceName="Dental Implants" />
        </div>
    )
}
