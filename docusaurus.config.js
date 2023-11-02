// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '算法妈妈',
  tagline: '业界领先的垂类大模型技术提供商',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '算法妈妈',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/blog',
            label: '新闻',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'productSidebar',
            position: 'left',
            label: '产品与技术',
          },
          /*
          {
            to: '/service',
            label: '服务',
            position: 'left'
          },
          {
            to: '/tech',
            label: '核心技术',
            position: 'left'
          },
          */
          {
            to: 'https://fashion.algmon.com/',
            label: '赋能时尚',
            position: 'right'
          },
          {
            to: 'https://education.algmon.com/',
            label: '赋能教培',
            position: 'right'
          },
          {
            href: 'https://github.com/algmon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            /**
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
            */
          },
          {
            title: '社群',
            /**
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/algmon',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/algmon',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/algmon',
              },
            ],
            */
          },
          {
            title: '更多',
            /**
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/algmon',
              },
            ],
            */
          },
        ],
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} 算法妈妈，用大爱自动构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
