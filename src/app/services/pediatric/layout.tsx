import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pediatric Dentistry | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Child-friendly dental care for kids of all ages. Specialized pediatric services at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh",
  canonical: "https://www.drsrisushmadentalclinic.com/services/pediatric/",
};

export default function PediatricLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
