import { Metadata } from 'next';
import ServicesClient from '@/components/ServicesClient';

export const metadata: Metadata = {
  title: 'Our Treatments & Services | Dr. Sri Sushma Dental Clinic',
  description: 'Explore our comprehensive dental treatments including Root Canal, Dental Implants, Braces, Teeth Whitening, and more at Dr. Sri Sushma Dental Clinic in Anandbagh.',
  keywords: 'Dental Services, Root Canal Treatment, Dental Implants, Braces, Teeth Whitening, Cosmetic Dentistry, Pediatric Dentistry, Emergency Dental Care, Hyderabad Dentist, Secunderabad Dentist',
  alternates: {
    canonical: 'https://www.drsrisushmadentalclinic.com/services/',
  },
  openGraph: {
    title: 'Our Treatments & Services | Dr. Sri Sushma Dental Clinic',
    description: 'Explore our comprehensive dental treatments including Root Canal, Dental Implants, Braces, Teeth Whitening, and more.',
    url: 'https://www.drsrisushmadentalclinic.com/services/',
    siteName: 'Dr. Sri Sushma Multispeciality Dental Clinic',
    images: [
      {
        url: 'https://www.drsrisushmadentalclinic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Sri Sushma Dental Clinic Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
