import React, { useEffect, useState } from "react";
import SearchBarOriginal from "@theme-original/SearchBar";
import type { WrapperProps } from "@docusaurus/types";
import type SearchBarType from "@theme/SearchBar";

type Props = WrapperProps<typeof SearchBarType>;

const STORAGE_KEY = "cookie-consent";

export default function SearchBarWrapper(props: Props) {
  const [insights, setInsights] = useState(false);

  useEffect(() => {
    const readConsent = () => {
      try {
        return localStorage.getItem(STORAGE_KEY) === "granted";
      } catch {
        return false;
      }
    };

    setInsights(readConsent());

    // Same-tab consent changes (fired by Root.tsx's decide() function)
    const onConsentUpdated = (e: CustomEvent<{ consent: string }>) => {
      setInsights(e.detail.consent === "granted");
    };

    // Cross-tab consent changes (native storage event)
    const onStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setInsights(e.newValue === "granted");
      }
    };

    window.addEventListener("consent-updated", onConsentUpdated as EventListener);
    window.addEventListener("storage", onStorageChange);
    return () => {
      window.removeEventListener("consent-updated", onConsentUpdated as EventListener);
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  // insights overrides the static themeConfig.algolia.insights value — see
  // SearchBar source: props are spread after themeConfig, so props win.
  return <SearchBarOriginal {...props} insights={insights} />;
}
