import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Services | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic Near Me",
  description: "Explore our comprehensive dental services including general dentistry, cosmetic dentistry, orthodontics, dental implants, and emergency care.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
