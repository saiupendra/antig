import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orthodontic Braces | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Professional orthodontic braces treatment for teeth alignment and bite correction. Expert orthodontic care at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/orthodontic-braces/",
};

export default function OrthodonticBracesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
