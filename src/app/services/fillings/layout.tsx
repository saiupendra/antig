import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Fillings | Dr. Sri Sushma Multispeciality Dental Clinic | best dental clinic near me | Best Dental Clinic",
  description: "Tooth filling services including composite, amalgam, and ceramic fillings. Modern cavity treatment at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/fillings/",
};

export default function FillingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
