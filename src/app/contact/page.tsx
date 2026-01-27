import { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | Dr. Sri Sushma Dental Clinic - Anandbagh & Moula Ali",
  description: "Book an appointment at Dr. Sri Sushma Dental Clinic. Located in Anandbagh, Secunderabad. Call +91 79958 15454 for Emergency Dental Care.",
  keywords: "Contact Dentist Anandbagh, Dental Appointment Secunderabad, Emergency Dentist Moula Ali, Dr Sri Sushma Clinic Address, Dental Clinic Phone Number",
  alternates: {
    canonical: "https://www.drsrisushmadentalclinic.com/contact/",
  },
}

export default function ContactPage() {
  return <ContactClient />;
}
