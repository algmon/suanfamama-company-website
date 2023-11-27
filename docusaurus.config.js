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
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
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
            type: 'dropdown',
            label: '产品',
            position: 'left',
            items: [
              {
                label: '微信聊天机器人',
                type: 'docSidebar',
                sidebarId: 'productSidebar1',
              },
              {
                label: '应用平台',
                type: 'docSidebar',
                sidebarId: 'productSidebar2',
              },
              {
                label: 'GPTs解决方案',
                type: 'docSidebar',
                sidebarId: 'productSidebar3',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '技术',
            position: 'left',
            items: [
              {
                label: '大模型',
                type: 'docSidebar',
                sidebarId: 'techSidebar1',
              },              
              {
                label: '检索增强',
                type: 'docSidebar',
                sidebarId: 'techSidebar2',
              },
              /*
              {
                label: '记忆增强',
                type: 'docSidebar',
                sidebarId: 'techSidebar3',
              },
              */
              {
                label: 'LangChain',
                type: 'docSidebar',
                sidebarId: 'techSidebar4',
              },
              /*
              {
                label: '智能体',
                type: 'docSidebar',
                sidebarId: 'techSidebar5',
              },
              */
              {
                label: 'Chroma',
                type: 'docSidebar',
                sidebarId: 'techSidebar6',
              },
              {
                label: 'Nextjs',
                type: 'docSidebar',
                sidebarId: 'techSidebar7',
              },
              {
                label: 'Assistant API',
                type: 'docSidebar',
                sidebarId: 'techSidebar8',
              },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'serviceSidebar1',
            position: 'left',
            label: '服务',           
          },
          {
            type: 'docSidebar',
            sidebarId: 'researchSidebar1',
            position: 'left',
            label: '研究',           
          },
          {
            to: '/docs/about/',
            label: '公司简介',
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
            title: '竞调',
            items: [
              {
                label: '初创公司 & 竞品',
                to: '/docs/list/',
              },
            ],
          },
          {
            title: '成功案例',
            items: [
              {
                label: '时尚行业',
                href: 'https://fashion.algmon.com/',
              },
              {
                label: '教培行业',
                href: 'https://education.algmon.com/',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'X & Twitter',
                href: 'https://twitter.com/algmon2024',
              },
            ],
          },
          {
            title: '更多',
            /*
            items: [
              {
                label: '联系地址：广州市越秀区麦栏街20号3楼',
                to: '',
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
