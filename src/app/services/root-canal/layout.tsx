import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Canal Treatment | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic | Best root canal treatment clinic",
  description: "Professional root canal treatment for severe tooth pain and infection. Painless procedures at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/root-canal/",
};

export default function RootCanalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
