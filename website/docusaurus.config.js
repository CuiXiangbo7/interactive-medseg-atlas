import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Interactive MedSeg Atlas',
  tagline: 'A practical guide to medical segmentation datasets, interactive models, and reproducible workflows',
  favicon: 'img/favicon.svg',
  url: 'https://cuixiangbo7.github.io',
  baseUrl: '/interactive-medseg-atlas/',
  organizationName: 'CuiXiangbo7',
  projectName: 'interactive-medseg-atlas',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: { onBrokenMarkdownLinks: 'throw' },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: { label: 'English' },
      'zh-CN': { label: '简体中文' },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/CuiXiangbo7/interactive-medseg-atlas/edit/main/',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/atlas-social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Interactive MedSeg Atlas',
      logo: {
        alt: 'Interactive MedSeg Atlas',
        src: 'img/atlas-mark.svg',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { type: 'doc', docId: 'datasets/datasets-catalog', label: 'Datasets', position: 'left' },
        { type: 'doc', docId: 'models/models-catalog', label: 'Models', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://github.com/CuiXiangbo7/interactive-medseg-atlas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            { label: 'Datasets', to: '/docs/datasets' },
            { label: 'Models', to: '/docs/models' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'GitHub repository', href: 'https://github.com/CuiXiangbo7/interactive-medseg-atlas' },
            { label: 'Documentation license', href: 'https://creativecommons.org/licenses/by/4.0/' },
          ],
        },
      ],
      copyright: 'Documentation by CuiXiangbo7 · Original dataset and model materials remain with their respective owners.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
