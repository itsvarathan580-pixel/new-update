import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: any) => void;
        dataLayer: any[];
    }
}

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize Google Analytics scripts dynamically
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
        document.head.appendChild(script2);

        return () => {
            // Clean up scripts if preventing duplication is needed (optional for single run)
        }
    }, []);

    useEffect(() => {
        // Track page views on route change
        if (typeof window.gtag !== "undefined") {
            window.gtag("config", GA_MEASUREMENT_ID, {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};

export default GoogleAnalytics;
