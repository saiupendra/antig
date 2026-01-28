import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Dr. Sri Sushma Multispeciality Dental Clinic",
  description: "View our dental clinic gallery showcasing before and after treatment results, our modern facilities, and team at Dr. Sri Sushma Multispeciality Dental Clinic.",
  alternates: { canonical: "https://www.drsrisushmadentalclinic.com/gallery" },};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
