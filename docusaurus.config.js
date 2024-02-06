// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const Prism = require('prism-react-renderer');
const lightCodeTheme = Prism.light; // or similar default export
const darkCodeTheme = Prism.dark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '算法妈妈',
  tagline: '用垂类大模型技术赋能时尚与教培行业',
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
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
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
            label: '妈妈晚报',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'researchSidebar1',
            position: 'left',
            label: '妈妈技术解读',           
          },
          {
            type: 'docSidebar',
            sidebarId: 'progressSidebar1',
            position: 'left',
            label: '公司进展',           
          },
          /*
          {
            type: 'docSidebar',
            sidebarId: 'openSidebar1',
            position: 'left',
            label: '开源项目',           
          },
          */
          {
            type: 'dropdown',
            label: '妈妈产品',
            position: 'left',
            items: [
              {
                label: 'AI通用智能助手Rita',
                type: 'docSidebar',
                sidebarId: 'productSidebar1',
              },
              /*
              {
                label: 'AI能力平台',
                type: 'docSidebar',
                sidebarId: 'productSidebar2',
              },
              {
                label: '多模态垂类大模型',
                type: 'docSidebar',
                sidebarId: 'productSidebar4',
              },
              {
                label: 'Algmon GPTs',
                type: 'docSidebar',
                sidebarId: 'productSidebar3',
              },
              */
              {
                label: 'AI自习室',
                href: 'https://education.algmon.com/',
              },
              {
                label: 'AI服装买手店',
                href: 'https://fashion.algmon.com/',
              },
            ],
          },
          {
            type: 'dropdown',
            label: '妈妈技术',
            position: 'left',
            items: [
              /*
              {
                label: '提示词工程 (PROMPT)',
                type: 'docSidebar',
                sidebarId: 'techSidebar9',
              },
              */
              {
                label: '大模型 (LLM)',
                type: 'docSidebar',
                sidebarId: 'techSidebar1',
              },
              {
                label: '检索增强 (RAG)',
                type: 'docSidebar',
                sidebarId: 'techSidebar2',
              },
              /*
              {
                label: 'Assistant API',
                type: 'docSidebar',
                sidebarId: 'techSidebar8',
              },
              {
                label: '精准问答',
                type: 'docSidebar',
                sidebarId: 'techSidebar11',
              },
              {
                label: '原型验证（POC）',
                type: 'docSidebar',
                sidebarId: 'techSidebar5',
              },
              */
              /*
              {
                label: '记忆增强',
                type: 'docSidebar',
                sidebarId: 'techSidebar3',
              },
              {
                label: 'LangChain',
                type: 'docSidebar',
                sidebarId: 'techSidebar4',
              },
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
              */
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '妈妈服务',
            items: [
              {
                label: '简介',
                type: 'docSidebar',
                sidebarId: 'serviceSidebar1',
              },
            ],
          },
          /*
          {
            type: 'dropdown',
            position: 'left',
            label: '妈妈解决方案',
            items: [
              {
                label: '简介',
                type: 'docSidebar',
                sidebarId: 'solutionSidebar1',
              },
            ],
          },
          */
          /*
          {
            type: 'docSidebar',
            sidebarId: 'solutionSidebar1',
            position: 'right',
            label: '性能评估',           
          },
          */
          {
            to: '/docs/invest/',
            label: '投资者关系',
            position: 'right'
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
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'AI行业调研',
            items: [
              {
                label: '0 - 2024 大模型行业趋势',
                to: '/docs/ai.thread/',
              },
              {
                label: '1 - 2023 人工智能大事记',
                to: '/docs/ai.timeline/',
              },
              {
                label: '2 - 垂类大模型 & 竞品',
                to: '/docs/list/',
              },
              {
                label: '3 - AI Tools',
                to: '/docs/ai.tools/',
              },
              /*
              {
                label: '3 - 在心理学中使用大模型',
                to: '/docs/education.3/',
              },
              */
            ],
          },
          {
            title: '教培行业调研',
            items: [
              /*
              {
                label: 'AI赋能时尚',
                to: '/docs/fashion/',
              },
              */
              {
                label: '0 - AI赋能教育',
                to: '/docs/education.0/',
              },
              {
                label: '1 - 教师应与AI紧密为伍',
                to: '/docs/education.1/',
              },
              /*
              {
                label: '2 - AI能书写论文',
                to: '/docs/education.2/',
              },
              */
            ],
          },
          {
            title: '时尚行业调研',
            items: [
              {
                label: '0 - AI赋能时尚',
                to: '/docs/fashion/',
              },
              {
                label: '1 - 时尚品牌',
                to: '/docs/fashion.brands/',
              },
            ],
          },
          {
            title: '行业案例',
            items: [
              {
                label: 'AI原优舍买手店',
                href: '/docs/space.for.fashion',
              },
              {
                label: 'AI自习室',
                to: '/docs/space.for.education',
              },
            ],
          },
          {
            title: '社交群组',
            items: [
              {
                label: 'X',
                href: 'https://twitter.com/algmon2024',
              },
              /*
              {
                label: '微信群',
                href: 'https://www.algmon.com', // TODO: Change to the correct one
              },
              */
            ],
          },
          {
            title: '空间地址',
            items: [
              {
                label: '广州市越秀区麦栏街20号',
                href: 'https://www.algmon.com', // TODO: Change to the correct one
              },
            ],
          },
        ],
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} 算法妈妈，用爱赋能。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
