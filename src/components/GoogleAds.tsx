import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Replace 'AW-XXXXXXXXX' with your actual Google Ads Conversion ID
export const GOOGLE_ADS_ID = "AW-XXXXXXXXX";

export const GoogleAds = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize Google Ads (Global Site Tag)
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_ADS_ID}');
    `;
        document.head.appendChild(script2);
    }, []);

    return null;
};

// Helper function to track conversions (e.g., Call Button Click)
// Replace 'AW-XXXXXXXXX/AbCdEfGhIjKlMnOpQr' with your actual Conversion Label
export const trackConversion = (conversionLabel: string) => {
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", "conversion", {
            send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
        });
        console.log("Google Ads Conversion Tracked:", conversionLabel);
    }
};
