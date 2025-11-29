"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
}

export function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    // Only push ad once and when the element is ready
    if (isAdPushed.current || !adRef.current) return;

    try {
      // Check if adsbygoogle is available
      if (typeof window !== "undefined") {
        // @ts-expect-error - adsbygoogle is loaded by Google's script
        const adsbygoogle = window.adsbygoogle || [];
        
        // Only push if not already pushed
        if (!isAdPushed.current) {
          adsbygoogle.push({});
          isAdPushed.current = true;
        }
      }
    } catch (err) {
      // Silently handle errors in development
      // AdSense errors are expected when using placeholder IDs
      if (process.env.NODE_ENV === "development") {
        console.log("AdSense (dev mode):", err);
      } else {
        console.error("AdSense error:", err);
      }
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "100px" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense ID
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  );
}
