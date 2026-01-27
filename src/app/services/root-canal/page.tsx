import { Metadata } from 'next';
import RootCanalClient from '@/components/service-pages/RootCanalClient';

const serviceData = {
  title: "Root Canal Treatment",
  subtitle: "Painless root canal treatment by our expert Anandbagh & Secunderabad",
  heroImage: "/images/services/pages/root-canal-hero.webp",
  seo: {
    title: "Dr. Sri Sushma Multispeciality Dental Clinic - Best Root Canal tretement in Anandbagh | Painless Root Canal Specialist",
    description: "Painless root canal treatment in Anandbagh by experienced endodontists. Same-day RCT, digital X-rays, no discomfort. Book now for tooth pain relief and long-lasting results.",
    keywords: "root canal Anandbagh, best root canal specialist, painless rct, single sitting root canal, tooth pain treatment, endodontist Anandbagh, endodontist Secunderabad",
    canonical: "https://www.drsrisushmadentalclinic.com/services/root-canal/"
  },
  description: "Save your natural tooth and get permanent pain relief with our advanced root canal treatment. Our experienced endodontists use digital X-rays, rotary tools, and modern anesthesia for fast, comfortable, single-sitting RCT.",
  fullDescription: "A root canal (RCT) treats infection deep inside your tooth, relieves pain, and preserves your natural bite. At Dr. Sri Sushma Multispeciality Dental Clinic, advanced anesthesia, digital 3D imaging, gentle rotary instruments, and expert care make even complex root canals nearly painless and completed in a single visit.",
  benefits: [
    "Virtually pain-free, single-visit root canal (RCT)",
    "Advanced rotary and laser-assisted cleaning",
    "Experienced endodontists (root canal specialists)",
    "Digital X-rays for precision and safety",
    "Preserves your natural tooth—no extraction needed",
    "Immediate tooth pain relief and swelling reduction",
    "Customized crowns for complete restoration",
    "Affordable and insurance-accepted"
  ],
  process: [
    { step: "1", title: "Diagnosis & 3D Imaging", description: "Digital X-rays and expert exam to confirm infection and plan treatment" },
    { step: "2", title: "Anesthesia & Tooth Isolation", description: "Painless numbing and rubber dam to keep tooth clean" },
    { step: "3", title: "Infection Removal (RCT)", description: "Gentle rotary/laser cleaning to remove infected pulp from root canal" },
    { step: "4", title: "Filling & Sealing", description: "Root canals filled and tooth sealed to prevent reinfection" },
    { step: "5", title: "Crown Placement", description: "Custom crown to restore tooth strength, shape, and function" }
  ],
  types: [
    {
      name: "Single-Sitting Root Canal",
      description: "Fast, comfortable RCT finished in one visit. Often no swelling or trauma.",
      features: ["Quick recovery", "Ideal for emergencies", "Less chair time"],
      icon: "Star"
    },
    {
      name: "Re-Root Canal & Complex Cases",
      description: "Retreat failed or complicated previous RCTs. Advanced imaging, surgical access if needed.",
      features: ["3D imaging", "Specialist team", "Renews failed old RCT"],
      icon: "Shield"
    },
    {
      name: "Laser-Assisted Root Canal",
      description: "Enhanced infection removal with modern dental laser equipment for deep cleaning.",
      features: ["Superior sterilization", "Fewer post-op symptoms", "Ultimate tooth preservation"],
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
    {
      question: "Is a root canal treatment painful?",
      answer: "No! Modern RCT with local anesthesia, rotary/laser tools, and expert care is nearly pain-free. Most patients compare it to a filling."
    },
    {
      question: "How long does a root canal take?",
      answer: "Most routine RCTs are completed in one sitting (45-90 min). More complex teeth may need a second visit."
    },
    {
      question: "Why preserve my tooth instead of extraction?",
      answer: "Saving your tooth keeps your bite, appearance, and jaw healthy. Implants/bridges cost more and require extra time."
    },
    {
      question: "How do I care for my tooth after root canal?",
      answer: "Brush/floss as normal, avoid chewing hard until crown is placed, and see dentist for scheduled follow-ups."
    },
    {
      question: "Will my teeth look real?",
      answer: "Yes — we custom-match shape, color, and translucency to blend perfectly with your smile."
    },
    {
      question: "Will I need a crown after a root canal?",
      answer: "Most back teeth need a custom crown to restore full strength and prevent future problems."
    }
  ],
  relatedServices: [
    {
      name: "Dental Crowns & Bridges",
      description: "Protect and restore teeth after root canal",
      link: "/services/bridges-crowns/",
      image: "/images/services/bridges.png"
    },
    {
      name: "Dental Fillings",
      description: "Simple fixes for mild decay—sometimes root canal isn’t needed!",
      link: "/services/fillings/",
      image: "/images/services/fillings.png"
    },
    {
      name: "Dental Implants",
      description: "Replace unsalvageable, missing, or extracted teeth",
      link: "/services/implants/",
      image: "/images/services/implants.png"
    }
    // Optional fourth service
    // {
    //   name: "Preventive Dentistry",
    //   description: "Routine visits to keep all teeth healthy",
    //   link: "/services/preventive-dentistry",
    //   image: "/images/services/preventive-dentistry/hero.jpg"
    // }
  ]

}

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
  twitter: {
    card: "summary_large_image",
    title: serviceData.seo.title,
    description: serviceData.seo.description,
  },
}

export default function RootCanalPage() {
  return <RootCanalClient serviceData={serviceData} />;
}
