import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 rounded-t-2xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">
              Dr. Sri Sushma Multispeciality Dental Clinic
            </h3>
            <p className="text-sm mb-4">
              Providing exceptional dental care with advanced technology and compassionate service for over 15 years.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/Dr-Sri-Sushma-Multispeciality-Dental-Clinic/61586325234627/" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/drsrisushmadentalclinic/" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/dentalsrisushma" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-[oklch(0.65_0.12_200)] transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}

<div className="ml-0 sm:ml-[-2in]">
  <h3 className="text-white text-lg font-bold mb-4 font-serif">Services</h3>

  <div className="
    grid 
    grid-cols-1      /* Mobile = 1 column */
    sm:grid-cols-3   /* Desktop = 3 columns */
    gap-y-2 
    gap-x-8
    text-sm
  ">
    <a href="/services/general" className="whitespace-nowrap hover:text-teal-400 transition-colors">General Dentistry</a>
    <a href="/services/teeth-whitening" className="whitespace-nowrap hover:text-teal-400 transition-colors">Teeth Whitening</a>
    <a href="/services/laser-treatment" className="whitespace-nowrap hover:text-teal-400 transition-colors">Laser Treatment</a>

    <a href="/services/cosmetic-dentistry" className="whitespace-nowrap hover:text-teal-400 transition-colors">Cosmetic Dentistry</a>
    <a href="/services/implants" className="whitespace-nowrap hover:text-teal-400 transition-colors">Dental Implants</a>
    <a href="/services/dentures" className="whitespace-nowrap hover:text-teal-400 transition-colors">Dentures</a>

    <a href="/services/pediatric" className="whitespace-nowrap hover:text-teal-400 transition-colors">Pediatric Dentistry</a>
    <a href="/services/braces" className="whitespace-nowrap hover:text-teal-400 transition-colors">Braces & Aligners</a>
    <a href="/services/wisdom-tooth" className="whitespace-nowrap hover:text-teal-400 transition-colors">Wisdom Tooth Removal</a>

    <a href="/services/root-canal" className="whitespace-nowrap hover:text-teal-400 transition-colors">Root Canal Treatment</a>
    <a href="/services/smile-makeover" className="whitespace-nowrap hover:text-teal-400 transition-colors">Smile Makeover</a>
    <a href="/services/emergency-care" className="whitespace-nowrap hover:text-teal-400 transition-colors">Emergency Care</a>
  </div>
</div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Sanjay Apartment, 24-88/51, Anandbagh, Moula Ali, Hyderabad, Secunderabad, Telangana 500047</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 79958 15454</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@drsrisushmadentalclinic.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Mon-Sun: 9:00 AM - 10:00 PM<br />Open 365 days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm flex flex-row justify-between items-center relative">
          <p>
            &copy; {new Date().getFullYear()} Dr. Sri Sushma Multispeciality Dental Clinic.
          </p>
          <p className="font-semibold text-fuchsia-400 text-right">
            Designed and Developed by GOD
          </p>
        </div>
      </div>
    </footer>
  )
}

