import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Dental Treatment | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Modern laser dentistry for gum disease, cavity treatment, and teeth whitening. Painless laser procedures at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/laser-treatment/",
};

export default function LaserTreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
