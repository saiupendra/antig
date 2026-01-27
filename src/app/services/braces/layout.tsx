import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Braces Treatment | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Professional braces treatment for teeth alignment and orthodontics at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh, Moula Ali. Modern orthodontic solutions for a perfect smile.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/braces/",
};

export default function BracesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
