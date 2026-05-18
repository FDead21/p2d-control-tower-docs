// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'P2D Control Tower Online',
  tagline: 'MSA Kargo Tracking & Monitoring System',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://FDead21.github.io',
  baseUrl: '/p2d-control-tower-docs/',

  organizationName: 'FDead21',
  projectName: 'p2d-control-tower-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeConfigs: {
      en: { label: 'English' },
      id: { label: 'Bahasa Indonesia' },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
        },
        blog: false, 
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
        title: 'P2D Control Tower',
        logo: {
          alt: 'MSA Kargo Logo',
          src: 'img/docusaurus.png', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'adminSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/FDead21/p2d-control-tower-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} PT. MSA Kargo. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'], 
      },
    }),
};

export default config;