// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Property Marketplace',
  tagline: 'Admin Guide & Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://FDead21.github.io',
  baseUrl: '/rumahimpian-marketplace/',

  organizationName: 'FDead21',
  projectName: 'rumahimpian-marketplace',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',         // Makes docs the homepage (no /docs/ prefix)
        },
        blog: false,                  // Disable blog (you don't need it)
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Property Marketplace',
        logo: {
          alt: 'Property Marketplace Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'adminSidebar',  // Matches your sidebars.js
            position: 'left',
            label: 'Admin Guide',
          },
          {
            href: 'https://github.com/FDead21/rumahimpian-marketplace',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Property Marketplace. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],   // Syntax highlight for PHP code blocks
      },
    }),
};

export default config;