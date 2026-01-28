import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Sri Sushma Multispeciality Dental Clinic",
  description: "Get in touch with our dental clinic in Anandbagh, Moula Ali. Call us or fill out the contact form for appointments and inquiries.",
  alternates: {
    canonical: "https://www.drsrisushmadentalclinic.com/contact/"
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
