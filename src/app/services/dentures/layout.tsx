import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dentures | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Custom-made dentures for complete tooth replacement. Comfortable and natural-looking solutions at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh, Moula Ali, Hyderabad.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/dentures/",
};

export default function DenturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
