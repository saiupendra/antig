"use client";

import Script from "next/script";

export default function JsonLd() {
    return (
        <Script
            id="schema-org"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Dentist",
                    name: "Dr. Sri Sushma Multispeciality Dental Clinic",
                    image: "https://www.drsrisushmadentalclinic.com/clinic.webp",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "123 Sanjay Apartment, 24-88/51, Anandbagh, Moula Ali",
                        addressLocality: "Hyderabad",
                        addressRegion: "Telangana",
                        postalCode: "500047",
                        addressCountry: "IN",
                    },
                    telephone: "+917995815454",
                    email: "info@drsrisushmadentalclinic.com",
                    url: "https://www.drsrisushmadentalclinic.com",
                    openingHoursSpecification: [
                        {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday",
                            ],
                            opens: "09:00",
                            closes: "21:00",
                        },
                    ],
                    priceRange: "$$",
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "5.0",
                        reviewCount: "1000",
                    },
                }),
            }}
        />
    );
}
