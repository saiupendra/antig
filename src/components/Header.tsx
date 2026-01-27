"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="relative bg-white shadow-sm sticky top-0 z-50 rounded-b-3xl overflow-visible">

      {/* GOLD Glow Behind Rounded Bottom */}
      <div className="absolute inset-0 rounded-b-3xl bg-gradient-to-b from-amber-200 via-amber-100 to-amber-50 -z-10" />

      {/* Soft GOLD Shadow Fade Under Curve */}
      <div className="absolute left-0 right-0 bottom-[-20px] h-[45px] 
                      bg-gradient-to-b from-amber-400/40 to-transparent 
                      blur-2xl pointer-events-none -z-10" />

      {/* Top Header Bar - Hide on Mobile */}
      <div className="hidden sm:block bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-x-4 gap-y-3 text-sm flex-wrap">

            {/* LEFT/CENTER: phone + email + hours (auto centered) */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 flex-1">
              {/* Phone Numbers */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+917995815454"
                  className="flex items-center gap-2 hover:text-amber-100 transition-colors group"
                >
                  <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">+91 79958 15454</span>
                </a>

                <a
                  href="tel:+919703583546"
                  className="flex items-center gap-2 hover:text-amber-100 transition-colors group"
                >
                  <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span className="font-medium whitespace-nowrap">+91 97035 83546</span>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <a
                  href="mailto:info@drsrisushmadentalclinic.com"
                  className="flex items-center gap-2 hover:text-amber-100 transition-colors group"
                >
                  <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30">
                    <Mail size={14} className="text-white" />
                  </div>
                  <span className="font-medium truncate max-w-[260px] lg:max-w-xs xl:max-w-sm">
                    info@drsrisushmadentalclinic.com
                  </span>
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2 group">
                <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30">
                  <Clock size={14} className="text-white" />
                </div>
                <span className="font-medium hidden xl:inline whitespace-nowrap">
                  9AM – 9PM ••• 365 Days
                </span>
                <span className="font-medium xl:hidden whitespace-nowrap">
                  9AM–9PM
                </span>
              </div>
            </div>

            {/* RIGHT: Social Icons pinned to edge */}
            <nav className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/people/Dr-Sri-Sushma-Multispeciality-Dental-Clinic/61586325234627/"
                className="bg-white/20 p-2 rounded-full hover:bg-blue-600 hover:scale-110 transform transition-all duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/drsrisushmadentalclinic/"
                className="bg-white/20 p-2 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:scale-110 transform transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@SriSushmaMultispecialityDental"
                className="bg-white/20 p-2 rounded-full hover:bg-red-600 hover:scale-110 transform transition-all duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={16} className="text-white" />
              </a>
            </nav>

          </div>
        </div>
      </div>


      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO + NAME */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="Dr. Sri Sushma Multispeciality Dental Clinic"
              width={56}
              height={56}
              className="object-contain group-hover:scale-105 transition-transform"
              priority
            />

            <div className="flex flex-col">
              <h1 className="text-lg sm:text-2xl font-bold text-amber-700 group-hover:text-amber-800 transition-colors leading-tight">
                Dr. Sri Sushma Multispeciality Dental Clinic
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600 font-medium">Your Smile, Our Priority</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-700 font-medium relative group"
              >
                {item.name}
                {/* GOLD underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all"></span>
              </Link>
            ))}

            {/* GOLD BUTTON */}
            <Button asChild className="bg-amber-600 hover:bg-amber-700 shadow-md hover:shadow-lg transition-all">
              <Link href="tel:+917995815454">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 mt-2 shadow-md">
              <Link href="tel:+917995815454">Book Appointment</Link>
            </Button>
          </div>
        )}

      </nav>
    </header>
  )
}
