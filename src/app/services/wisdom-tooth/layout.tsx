import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wisdom Tooth Extraction | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Professional wisdom tooth extraction and surgical removal. Safe and painless extraction at Dr. Sri Sushma Multispeciality Dental Clinic in Anandbagh, Moula Ali.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/wisdom-tooth/",
};

export default function WisdomToothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
