import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Dental Care | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "24/7 emergency dental services for urgent dental problems. Same-day treatment available at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh, Hyderabad.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/emergency-care/",
};

export default function EmergencyCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
