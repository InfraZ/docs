import type { Plugin } from "@docusaurus/types";

/**
 * Google Tag Manager + Consent Mode v2.
 *
 * We inject GTM ourselves instead of using @docusaurus/plugin-google-tag-manager
 * (or plugin-google-gtag) so we control script order: the consent "default"
 * (everything denied) MUST run before the GTM container loads, otherwise
 * consent-aware tags fire before the user opts in. The official plugins inject
 * their snippet ahead of `headTags`, leaving no way to guarantee that order.
 *
 * The cookie banner (src/theme/Root.tsx) flips consent to "granted" on opt-in.
 *
 * Google Analytics lives INSIDE the GTM container, not here — add the GA4
 * Configuration tag in the GTM web UI and set its consent settings to require
 * `analytics_storage`. We deliberately do not load gtag directly, so there is
 * no GOOGLE_ANALYTICS_ID env var: the GA measurement ID is configured in GTM.
 *
 * This file only sends Consent Mode signals. Tags stay gated ONLY IF the GTM
 * container has Consent Mode enabled — without that, this code does nothing on
 * its own. The `gtm.js` loader is expected to load pre-consent; what must not
 * happen before opt-in is GA cookies (`_ga`) or `collect` pings.
 */
export default function cookiePrivacyConsentPlugin(): Plugin {
  // Only the GTM container ID is needed; GA is configured inside the container.
  const containerId = process.env.GOOGLE_TAG_MANAGER_ID || "GTM-000000";

  return {
    name: "cookie-privacy-consent",
    injectHtmlTags() {
      return {
        headTags: [
          // 1. Consent Mode default — denied until the user opts in.
          {
            tagName: "script",
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              var consent = (function () {
                try { return localStorage.getItem('cookie-consent'); } catch (e) { return null; }
              })();
              gtag('consent', 'default', {
                ad_storage: consent === 'granted' ? 'granted' : 'denied',
                ad_user_data: consent === 'granted' ? 'granted' : 'denied',
                ad_personalization: consent === 'granted' ? 'granted' : 'denied',
                analytics_storage: consent === 'granted' ? 'granted' : 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted',
                wait_for_update: 500,
              });
            `,
          },
          // 2. GTM container — loads after the consent default above.
          {
            tagName: "script",
            innerHTML: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${containerId}');
            `,
          },
        ],
      };
    },
  };
}
