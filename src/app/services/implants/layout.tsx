import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implants | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic | Best Dental Implants Clinic",
  description: "Advanced dental implant services for permanent tooth replacement. State-of-the-art implant solutions at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/implants/",
};

export default function ImplantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
