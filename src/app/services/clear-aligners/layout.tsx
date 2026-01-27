import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Aligners | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Modern clear aligner treatment for teeth straightening. Invisible and effective orthodontic solution at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/clear-aligners/",
};

export default function ClearAlignersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
