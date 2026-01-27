import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teeth Whitening | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Professional teeth whitening for a brighter, whiter smile. Advanced whitening treatments at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/whitening/",
};

export default function WhiteningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
