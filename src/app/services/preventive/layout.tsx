import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preventive Dentistry | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Preventive dental care to maintain healthy teeth and gums. Professional cleaning and checkups at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/preventive/",
};

export default function PreventiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
