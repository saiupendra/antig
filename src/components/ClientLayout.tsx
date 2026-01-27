"use client";

import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"), {
    ssr: false
});

const TawkToChat = dynamic(() => import("@/components/TawkToChat"), {
    ssr: false
});

export default function ClientLayout() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldLoad(true);
        }, 4000); // Load after 4 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!shouldLoad) return null;

    return (
        <>
            <FloatingWhatsApp />
            <TawkToChat />
        </>
    );
}
