import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Dr. Sri Sushma Multispeciality Dental Clinic",
  description: "Schedule your dental appointment online at Dr. Sri Sushma Multispeciality Dental Clinic. Easy booking for general dentistry, cosmetic procedures, and more.",
  alternates: {
    canonical: "https://www.drsrisushmadentalclinic.com/book-appointment/"
  },
};

export default function BookAppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
