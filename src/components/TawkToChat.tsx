// components/TawkToChat.tsx
"use client";
import Script from "next/script";

export default function TawkToChat() {
  return (
    <Script
      id="tawkto-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/68ff3b7e84f18f194f214759/1j8ig0pr4'; // <-- change to your code
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `
      }}
    />
  );
}
