// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  adminSidebar: [
    'intro',
    {
      type: 'category',
      label: '✈️ Operational Flowmaps',
      items: [
        'operational-flow/overview-process',
        'operational-flow/origin-to-airport',
        'operational-flow/warehouse-handling',
      ],
    },
    {
      type: 'category',
      label: '📋 Manifest Management',
      items: [
        'manifest/upload-data',
        'manifest/cn-management',
        'manifest/master-data',
        'manifest/update-bc11',
        'manifest/manifest-to-pibk',
      ],
    },
    {
      type: 'category',
      label: '🧮 PIBK Module',
      items: [
        'pibk/calculation',
        'pibk/document',
      ],
    },
    {
      type: 'category',
      label: '📊 Response Data',
      items: [
        'response-data/tracking-responses',
      ],
    },
    {
      type: 'category',
      label: '📖 Reference Database',
      items: [
        'reference/hs-code-list',
      ],
    },
  ],
};

module.exports = sidebars;