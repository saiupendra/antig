import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridges and Crowns | Dr. Sri Sushma Multispeciality Dental Clinic | Best Dental Clinic",
  description: "Expert dental bridges and crown services at Dr. Sri Sushma Multispeciality Dental Clinic in Hyderabad. Restore your smile with durable, custom-made crowns and bridges.",
  canonical: "https://www.drsrisushmadentalclinic.com/services/bridges-crowns/",
};

export default function BridgesCrownsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
