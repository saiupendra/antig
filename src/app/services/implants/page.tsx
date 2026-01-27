import { Metadata } from 'next';
import ImplantsClient from '@/components/service-pages/ImplantsClient';
import { Shield, Award, Star } from "lucide-react";

const serviceData = {
  title: "Dental Implants",
  subtitle: "Permanent Tooth Replacement at Dr. Sri Sushma Multispeciality Dental Clinic",
  heroImage: "/images/services/pages/Dental-implants.jpg",
  seo: {
    title: "Dr. Sri Sushma Multispeciality Dental Clinic - Best Dental Implants in Anandbagh & Secunderabad | Permanent Tooth Replacement | Dental Implants clinic near me",
    description: "Restore missing teeth with world-class dental implants in Anandbagh & Secunderabad at affordable cost. Advanced keyhole surgery, faster recovery, EMI available. Single, multiple & full mouth implants.",
    keywords: "dental implants in Anandbagh & Secunderabadnear, dental implants near me, implant cost, permanent tooth replacement, best implants clinic, keyhole dental implant, full mouth implant, single tooth implant, painless implant surgery",
    canonical: "https://www.drsrisushmadentalclinic.com/services/implants/"
  },
  description: "Dental implants look, feel, and function just like real teeth. Whether you are missing one, several, or all teeth, our advanced implant solutions restore your smile, biting power, and confidence—permanently.",
  fullDescription: "Implants are tiny titanium screw like structures placed in the jawbone, mimicking natural tooth roots. They provide a stable base for crowns, bridges, or dentures. We offer computer-guided keyhole implant placement, world’s most trusted brands, and custom prosthetics designed for natural esthetics.",
  benefits: [
    "Eat, speak, and smile without worry",
    "Preserve facial bone & prevent sunken look",
    "Highest chewing power (almost like natural teeth)",
    "No damage to nearby teeth (unlike bridges)",
    "Lasts decades with proper care",
    "One-day/same-day implants available",
    "All international quality, sterilized, FDA-approved",
    "Solutions for loose dentures & full mouth restoration"
  ],
  process: [
    { step: "1", title: "Consultation & 3D Scan", description: "Digital scan/x-ray, medical history review, bite & space assessment." },
    { step: "2", title: "Treatment Planning", description: "Simulation/model to pick ideal implant plan—single, multiple, full mouth." },
    { step: "3", title: "Implant Placement", description: "Painless, precise, keyhole placement with computer-guidance. Walk out the same day!" },
    { step: "4", title: "Healing Phase", description: "4-12 weeks (same-day crowns for some). Bone grows around implant for perfect hold." },
    { step: "5", title: "Final Tooth/Bridge Fixing", description: "Custom-matched crown or bridge fixed onto stable implant. Start enjoying life as normal!" }
  ],
  types: [
    {
      name: "Single Tooth Implant",
      description: "Replaces one missing tooth for natural look and function.",
      features: ["No cutting of adjacent teeth", "Ultimate chewing power", "Custom matched crown"],
      icon: "Star"
    },
    {
      name: "Full Mouth Implants (All-on-4/6/8)",
      description: "Restore all teeth in one/ both jaws with 4-8 implants supporting a fixed bridge.",
      features: ["Eat everything again", "No removable dentures"],
      icon: "Shield"
    },
    {
      name: "Implant Supported Bridge",
      description: "Multiple missing teeth replaced by bridge fixed on 2+ implants.",
      features: ["Stable & fixed", "Cost-effective for larger gaps", "No clasps or loose dentures"],
      icon: "Award"
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
    { question: "How long do dental implants last?", answer: "With proper oral hygiene and annual dentist checks, implants last 20+ years—often a lifetime." },
    { question: "Is dental implant surgery painful?", answer: "Most describe it as easier than tooth removal. Local anesthesia ensures comfort. Minor swelling for 2-3 days, easily managed." },
    { question: "What is the cost of dental implants in Hyderabad?", answer: "It depends on the number, brands, and jaw condition. Our packages are fully transparent, with EMI/flexible options." },
    { question: "Will my teeth look real?", answer: "Yes — we custom-match shape, color, and translucency to blend perfectly with your smile." },
    { question: "Can older people or diabetics get implants?", answer: "Absolutely, if medically stable. Implants are safe for adults of all ages. Assessment is included in our first consult." }
  ],
  relatedServices: [
    {
      name: "Dental Crowns & Bridges",
      description: "Capping, bridges after implants or for damaged teeth",
      link: "/services/bridges-crowns/",
      image: "/images/services/bridges.png"
    },
    {
      name: "Dental Crowns & Bridges",
      description: "Capping, bridges after implants or for damaged teeth",
      link: "/services/bridges-crowns/",
      image: "/images/services/bridges.png"
    },
    {
      name: "Preventive Dentistry",
      description: "Keep implants healthy and long-lasting",
      link: "/services/preventive/",
      image: "/images/services/preventive.png"
    }
  ]
};

export const metadata: Metadata = {
  title: serviceData.seo.title,
  description: serviceData.seo.description,
  keywords: serviceData.seo.keywords,
  alternates: {
    canonical: serviceData.seo.canonical,
  },
  openGraph: {
    title: serviceData.seo.title,
    description: serviceData.seo.description,
    url: serviceData.seo.canonical,
    siteName: "Dr. Sri Sushma Multispeciality Dental Clinic",
    images: [
      {
        url: serviceData.heroImage,
        width: 1200,
        height: 630,
        alt: serviceData.title,
      },
    ],
    type: "website",
  },
}

export default function ImplantsPage() {
  return <ImplantsClient serviceData={serviceData} />;
}
