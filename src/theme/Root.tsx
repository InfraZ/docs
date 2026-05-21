import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./Root.module.css";

const STORAGE_KEY = "cookie-consent";

type Consent = "granted" | "denied";

// Push the user's choice to Google Consent Mode. GTM holds analytics/ads tags
// until ad_storage/analytics_storage flip to "granted".
function updateConsent(value: Consent) {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: any[]) {
    w.dataLayer.push(args);
  }
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

function CookieBanner() {
  // Only show the banner if the user hasn't decided yet.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (e.g. privacy mode) — show the banner so the
      // user can still make a choice for this session.
      setVisible(true);
    }
  }, []);

  const decide = (value: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* best-effort persistence */
    }
    updateConsent(value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className={styles.text}>
        We use cookies for analytics to understand how the docs are used. You
        can accept or decline — declining keeps only essential cookies.{" "}
        {/* <a href="https://infraz.io/privacy" target="_blank" rel="noopener noreferrer">
          Learn more
        </a> */}
        .
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.button} ${styles.decline}`}
          onClick={() => decide("denied")}
        >
          Decline
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.accept}`}
          onClick={() => decide("granted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

// Root wraps the entire app and persists across client-side navigation, so the
// banner is mounted once for the whole site.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BrowserOnly>{() => <CookieBanner />}</BrowserOnly>
    </>
  );
}
