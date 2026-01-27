import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Dentistry | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "General dental care including checkups, cleanings, and preventive treatments. Family dental services at Dr. Sri Sushma Multispeciality Dental Clinic.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/general/",
};

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
