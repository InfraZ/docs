import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "InfraZ Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.infraz.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "InfraZ", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Infraz/docs/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects', {
        redirects: [
          {
            from: '/mmdb-cli', to: '/docs/mmdb-cli'
          },
        ]
      }
    ],
    [
      '@docusaurus/plugin-google-tag-manager', {
        containerId: process.env.GOOGLE_TAG_MANAGER_ID || 'GTM-000000',
      }
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: process.env.GOOGLE_ANALYTICS_ID || 'G-000000',
      },
    ],
    '@docusaurus/theme-mermaid'
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/banner.png",
    navbar: {
      title: "InfraZ Docs",
      hideOnScroll: true,
      logo: {
        alt: "InfraZ Docs Logo",
        src: "img/logo/logo.png",
      },
      items: [
        {
          to: "https://infraz.io",
          label: "Home",
          position: "left",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Home",
        // },
        {
          to: "https://blog.infraz.io",
          label: "Blog",
          position: "left",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          to: "https://github.com/InfraZ",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "MMDB CLI",
              to: "/docs/mmdb-cli",
            },
            {
              label: "Open GeoLocation Service",
              to: "/docs/open-geolocation-service",
            }
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "X (Twitter)",
              href: "https://x.com/infraz_io",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/infraz_io",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://blog.infraz.io",
            },
            {
              label: "GitHub",
              to: "https://github.com/InfraZ",
            },
          ],
        },
      ],
      logo: {
        alt: 'InfraZ Logo',
        src: './img/logo/logo_transparent.png',
        srcDark: './img/logo/logo_transparent_white.png',
        href: 'https://infraz.io',
        width: "70rem",
        height: "70rem",
      },
      copyright: `Copyright © ${new Date().getFullYear()} InfraZ <br /> Made by humans, debugged by ducks 🦆`,
    },
    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.dracula,
    },
    announcementBar: {
      id: 'github_star_mmdb_cli',
      content:
        'MMDB CLI is now available on <a target="_blank" rel="noopener noreferrer" href="https://github.com/InfraZ/mmdb-cli">GitHub</a>! ⭐️',
      backgroundColor: '#c6eaff',
      textColor: '#000000',
      isCloseable: false,  
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
