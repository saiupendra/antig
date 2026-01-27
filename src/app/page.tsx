import { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import HomeWelcomePopup from "@/components/HomeWelcomePopup";
import Script from "next/script";

export default function Home() {
  const faqs = [
    {
      question: "Do you provide painless dental treatments?",
      answer:
        "Yes! All our treatments are completely painless using the latest laser and anesthesia techniques for your comfort.",
    },
    {
      question: "Do you accept emergency dental appointments?",
      answer:
        "Yes, same-day emergency treatments are available. You can call or WhatsApp us directly for immediate care.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "Appointments can be booked via phone, WhatsApp, or our online form on the website.",
    },
  ];

  return (
    <>
      {/* ========== STRUCTURED DATA SCHEMAS ========== */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "@id": "https://www.drsrisushmadentalclinic.com/#dentist",
            "name": "Dr. Sri Sushma Multispeciality Dental Clinic",
            "image": [
              "https://www.drsrisushmadentalclinic.com/og-image.jpg",
              "https://www.drsrisushmadentalclinic.com/images/team/clinic.webp"
            ],
            "description": "Leading multispeciality dental clinic in Anandbagh offering painless laser dentistry, advanced dental implants, root canal treatment, orthodontics, and comprehensive family dental care with 15+ years of expertise.",
            "telephone": "+917995815454",
            "email": "info@drsrisushmadentalclinic.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Anandbagh, Moula Ali",
              "addressLocality": "Secunderabad",
              "addressRegion": "Telangana",
              "postalCode": "500047",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.458097",
              "longitude": "78.541741"
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "20:00"
            }],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1000"
            }
          })
        }}
      />

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-gradient-to-t from-cyan-100 via-white to-fuchsia-50 flex flex-col overflow-hidden">

        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 sm:pt-1 px-4 sm:px-8 bg-gradient-to-t via-fuchsia-50 to-cyan-100">

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white/95 backdrop-blur-md"></div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <h1
              className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight drop-shadow-sm"
            >
              Welcome to
            </h1>

            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-teal-700 via-rose-700 to-amber-700 text-transparent bg-clip-text drop-shadow-md mt-3 px-2"
            >
              Dr. Sri Sushma Multispeciality Dental Clinic
            </h2>

            <p
              className="text-lg sm:text-2xl text-gray-700 font-medium mt-6 leading-relaxed italic px-4"
            >
              Luxury, trust & compassion — redefining smiles with care ✨
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap justify-center gap-6 mt-10"
            >
              {/* Call Button */}
              <a
                href="tel:+917995815454"
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-700 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:from-cyan-800 hover:to-teal-700 transform hover:scale-105 transition-transform duration-300 ease-out"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.77 19.77 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.14.94.38 1.85.72 2.7a2 2 0 01-.45 2.11L9.1 10.91a16.01 16.01 0 006.91 6.91l1.38-1.38a2 2 0 012.11-.45c.85.34 1.76.58 2.7.72A2 2 0 0122 16.92z" />
                </svg>
                Call Us for Appointment
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917995815454"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-[#1ebe57] transform hover:scale-105 transition-transform duration-300 ease-out"
              >
                <svg
                  className="w-7 h-7"
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book on WhatsApp
              </a>
            </div>
          </div>

          {/* Floating Trust Badge */}
          <div
            className="absolute bottom-8 text-center w-full px-4"
          >
            <p className="text-gray-700 text-sm sm:text-base tracking-wide font-medium bg-white/50 px-3 py-1 rounded-full inline-block shadow-sm">
              🌿 ISO-Certified | 15+ Years of Trusted Care | Advanced Laser Dentistry | Modern Equipment
            </p>
          </div>
        </section>

        {/* TREATMENTS - with Animated GIFs */}
        <section className="w-full py-12 bg-gradient-to-r from-amber-50 via-fuchsia-50 to-cyan-100">
          <h2 className="text-3xl font-bold text-cyan-700 mb-8 text-center">Treatments We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

            {/* Treatments Grid */}
            {[
              { href: "/services/fillings/", label: "Dental Fillings", icon: "/gifs/Dental-Fillings.gif", aria: "Dental Fillings", rotate: "group-hover:rotate-2" },
              { href: "/services/root-canal/", label: "Root Canal Treatment (RCT)", icon: "/gifs/RCT.gif", aria: "Root Canal Treatment", rotate: "group-hover:rotate-3" },
              { href: "/services/bridges-crowns/", label: "Crowns", icon: "/gifs/Crowns.gif", aria: "Dental Crowns", rotate: "group-hover:-rotate-2" },
              { href: "/services/gum-treatment/", label: "Advanced Gum Treatment", icon: "/gifs/Gum-Treatment.gif", aria: "Gum Treatment", rotate: "group-hover:-rotate-3" },
              { href: "/services/laser-treatment/", label: "Laser-Treatment", icon: "/gifs/Laser-Treatment-1.gif", aria: "Laser Treatment", rotate: "group-hover:-rotate-3" },
              { href: "/services/clear-aligners/", label: "Clear Aligners / Invisible Braces", icon: "/gifs/Invisible-Braces.gif", aria: "Clear Aligners", rotate: "group-hover:rotate-2" },
              { href: "/services/braces/", label: "Braces", icon: "/gifs/Braces.gif", aria: "Dental Braces", rotate: "group-hover:rotate-2" },
              { href: "/services/pediatric/", label: "Kids Dentistry", icon: "/gifs/Kids-Dentistery.gif", aria: "Kids Dentistry", rotate: "group-hover:rotate-3" },
              { href: "/services/dentures/", label: "Dentures", icon: "/gifs/Dentures.gif", aria: "Dentures", rotate: "group-hover:-rotate-3" },
              { href: "/services/implants/", label: "Dental Implants", icon: "/gifs/Dental-Implants.gif", aria: "Dental Implants", rotate: "group-hover:-rotate-3" },
              { href: "/services/wisdom-tooth/", label: "Wisdom-Tooth", icon: "/gifs/Wisdom-Tooth.gif", aria: "Wisdom Tooth Extraction", rotate: "group-hover:rotate-2" },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="group bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl ring-0 hover:ring-4 hover:ring-fuchsia-200" aria-label={item.aria}>
                <div className="relative w-20 h-20 mb-3">
                  <Image src={item.icon} alt={item.aria} fill unoptimized className={`object-contain transition-transform duration-300 group-hover:scale-110 ${item.rotate}`} />
                </div>
                <span className="text-base font-bold text-fuchsia-700 group-hover:text-cyan-800 transition">{item.label}</span>
              </Link>
            ))}

            {/* Emergency Care */}
            <Link href="/services/emergency-care/" className="group bg-red-500 shadow-lg rounded-3xl p-8 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl ring-0 hover:ring-4 hover:ring-fuchsia-200" aria-label="Emergency Dental Care">
              <div className="relative w-20 h-20 mb-3">
                <Image src="/gifs/Frame.svg" alt="Emergency Care" fill unoptimized className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2" />
              </div>
              <span className="text-base font-bold text-white group-hover:text-cyan-800 transition">Emergency Care</span>
            </Link>

          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="/services/"
              className="bg-fuchsia-700 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-cyan-700 transition"
            >
              View All Treatments
            </Link>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="w-full py-8">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mt-1">
            <div>
              <div className="text-5xl mb-2">👨‍⚕️</div>
              <div className="text-3xl font-bold text-cyan-900">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl mb-2">🌟</div>
              <div className="text-3xl font-bold text-amber-800">1000+</div>
              <div className="text-gray-700">Happy Smiles</div>
            </div>
            <div>
              <div className="text-5xl mb-2">💎</div>
              <div className="text-3xl font-bold text-violet-700">Digital</div>
              <div className="text-gray-700">Tech-driven</div>
            </div>
            <div>
              <div className="text-5xl mb-2">🛡️</div>
              <div className="text-3xl font-bold text-cyan-900">Safe</div>
              <div className="text-gray-700">Family Care</div>
            </div>
          </div>
        </section>

        {/* ABOUT/INFO (Split Section with Metrics and CTA) */}
        <section className="flex flex-col md:flex-row items-center justify-center py-16 bg-gradient-to-t from-white to-amber-50 overflow-visible">
          {/* Image & shape */}
          <div className="relative md:w-2/5 w-full flex items-center justify-center mb-10 md:mb-0">
            {/* Branded background shape */}
            <div className="absolute rounded-tl-[80px] rounded-br-[90px] w-80 h-80 bg-amber-400 md:-left-14 md:-top-14 left-0 top-0 z-0 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="relative w-72 h-80 rounded-2xl shadow-2xl border-4 border-white overflow-hidden z-10">
              <Image
                src="/images/about.webp"
                alt="Clinic team"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Content */}
          <div className="md:w-3/5 w-full px-6 md:px-12 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-amber-500 text-3xl mb-1">ℹ️</span>
              <span className="text-xl font-bold text-amber-600 tracking-wide">Our Story & Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
              A Great Place For Dental Care
            </h2>
            <p className="text-lg text-gray-800 mb-2 max-w-xl">
              At Dr. Sri Sushma Multispeciality Dental Clinic, we believe that a healthy smile is the foundation of overall well-being. Our clinic in Anandbagh, has been a cornerstone of the community, providing advanced, compassionate dental care to patients of all ages.
              Our mission is simple, to combine the latest dental technology with a gentle, personalized touch. We don’t just treat teeth, we build lasting relationships based on trust, transparency, and clinical excellence...
            </p>
            {/* Metrics row */}
            <div className="flex flex-row gap-10 mt-6">
              <div className="flex flex-col items-center">
                <span className="text-amber-500 text-2xl font-bold">15+</span>
                <span className="text-[15px] text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-amber-500 text-2xl font-bold">100%</span>
                <span className="text-[15px] text-gray-600">Treatment Success</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-amber-500 text-2xl font-bold">100%</span>
                <span className="text-[15px] text-gray-600">Patient Satisfaction</span>
              </div>
            </div>
            {/* CTA */}
            <Link
              href="/about"
              className="w-fit mt-8 bg-amber-400 text-white text-base font-bold px-7 py-3 rounded-full shadow-lg hover:bg-amber-500 transition duration-300"
            >
              Know More About Us
            </Link>
          </div>
          {/* Add subtle pulse animation to the shape */}
          <style>
            {`
      @keyframes pulse {
        0% { opacity:0.9; }
        50% { opacity:0.5; }
        100% { opacity:0.9; }
      }
      .animate-pulse {
        animation: pulse 4s infinite;
      }
    `}
          </style>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full py-14 bg-gradient-to-r from-amber-50 via-fuchsia-50 to-cyan-100">
          <div className="w-full px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Real experiences from real patients
            </p>
            <TestimonialsCarousel />
          </div>
        </section>

      </main>
      <HomeWelcomePopup />
    </>
  );
}
