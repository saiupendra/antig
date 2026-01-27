import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Professional cosmetic dentistry services including smile design, teeth whitening, veneers, and more. Achieve your perfect smile at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/cosmetic-dentistry/",
};

export default function CosmeticDentistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
