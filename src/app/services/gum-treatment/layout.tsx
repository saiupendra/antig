import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gum Treatment | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Professional gum disease treatment and periodontal care. Advanced solutions for healthy gums at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh, Moula Ali.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/gum-treatment/",
};

export default function GumTreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
