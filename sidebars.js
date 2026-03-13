// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  adminSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'getting-started/intro',
        'getting-started/dashboard',
      ],
    },
    {
      type: 'category',
      label: '🔐 Authentication',
      items: ['auth/authentication'],
    },
    {
      type: 'category',
      label: '🏠 Properties',
      items: ['admin/properties/properties'],
    },
    {
      type: 'category',
      label: '📬 Inquiries (CRM)',
      items: ['admin/inquiries/inquiries'],
    },
    {
      type: 'category',
      label: '👤 Users',
      items: ['admin/users/users'],
    },
    {
      type: 'category',
      label: '🏢 Agencies',
      items: ['admin/agencies/agencies'],
    },
    {
      type: 'category',
      label: '📰 Articles',
      items: ['admin/articles/articles'],
    },
    {
      type: 'category',
      label: '🏦 Banks & KPR',
      items: ['admin/banks/banks'],
    },
    {
      type: 'category',
      label: '⚙️ Site Settings',
      items: ['admin/settings/settings'],
    },
    {
      type: 'category',
      label: '👤 My Profile',
      items: ['profile/my-profile'],
    },
  ],
};

module.exports = sidebars;
