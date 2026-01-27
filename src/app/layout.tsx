import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { inter, playfair } from "@/lib/fonts";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drsrisushmadentalclinic.com"),
  title: "Dr. Sri Sushma Multispeciality Dental Clinic - Best Dentist in Anandbagh | Dental Implants & Root Canal",
  description: "Premier dental clinic in Anandbagh & Secunderabad offering Painless Root Canal, Dental Implants, Braces, and Cosmetic Dentistry. Best Dentist near Moula Ali with 15+ years experience.",
  keywords: "Best Dentist in Anandbagh, Dental Clinic Secunderabad, Root Canal Treatment, Dental Implants, Painless Dentistry, Dentist near Moula Ali, Cosmetic Dentistry Hyderabad, Teeth Whitening, Braces Specialist, Kids Dentist Anandbagh, Emergency Dentist Secunderabad, Dr Sri Sushma Dental Clinic",
  alternates: {
    canonical: "https://www.drsrisushmadentalclinic.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drsrisushmadentalclinic.com/",
    siteName: "Dr. Sri Sushma Multispeciality Dental Clinic",
    title: "Dr. Sri Sushma Dental Clinic - Best Dentist in Anandbagh & Secunderabad",
    description: "Expert dental care including Root Canal, Implants, and Braces. Trusted by 10,000+ patients. Book your appointment today!",
    images: [
      {
        url: "https://www.drsrisushmadentalclinic.com/logo.png",
        width: 250,
        height: 100,
        alt: "Dr. Sri Sushma Multispeciality Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sri Sushma Dental Clinic - Best Dentist in Anandbagh",
    description: "Expert dental care including Root Canal, Implants, and Braces. Trusted by 10,000+ patients.",
    images: ["https://www.drsrisushmadentalclinic.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />

        {/* === JSON-LD Schema.org markup === */}
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* --- GOOGLE ANALYTICS SCRIPT (sitewide) --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-04NS85QR38"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-04NS85QR38');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientLayout />
      </body>
    </html>
  );
}
