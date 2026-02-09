// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hoverkraft Theme",
  tagline: "Official Docusaurus theme for Hoverkraft projects",
  // Set the production url of your site here
  url: "https://hoverkraft-tech.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docusaurus-theme/",

  // GitHub pages deployment config.
  organizationName: "hoverkraft-tech", // Usually your GitHub org/user name.
  projectName: "docusaurus-theme", // Usually your repo name.

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "content",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/hoverkraft-tech/docusaurus-theme/tree/main/packages/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/hoverkraft-tech/docusaurus-theme/tree/main/packages/docs/",
        },
      }),
    ],
  ],

  // For local development, you can use a relative path:
  // themes: [require.resolve('../theme')],

  // For production, use the published package:
  themes: ["@hoverkraft/docusaurus-theme", "@docusaurus/theme-live-codeblock"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      liveCodeBlock: {
        playgroundPosition: "top",
      },
      navbar: {
        title: "Hoverkraft Theme",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/hoverkraft-tech/docusaurus-theme",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
              {
                label: "Installation",
                to: "/docs/installation",
              },
              {
                label: "Configuration",
                to: "/docs/configuration",
              },
              {
                label: "Migration",
                to: "/docs/migration",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/hoverkraft-tech",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "NPM Package",
                href: "https://www.npmjs.com/package/@hoverkraft/docusaurus-theme",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hoverkraft. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
