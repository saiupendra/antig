import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gap Treatment | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Close dental gaps with professional treatment options. Cosmetic solutions for gap-toothed smile at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh, Moula Ali.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/gap-treatment/",
};

export default function GapTreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
