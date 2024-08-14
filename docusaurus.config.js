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
  tagline: '认知计算技术先行者',
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
            label: '妈妈认知计算晚报',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'researchSidebar1',
            position: 'left',
            label: '妈妈认知计算技术解读',           
          },
          {
            type: 'dropdown',
            label: '妈妈认知计算产品',
            position: 'left',
            items: [
              {
                label: 'AIGC垂类智能体小妈妈',
                type: 'docSidebar',
                sidebarId: 'productSidebar1',
              },
              /*
              {
                label: 'AIGC基础能力平台',
                type: 'docSidebar',
                sidebarId: 'productSidebar2',
              },
              */
              /*
              {
                label: 'Suanfamama GPTs',
                type: 'docSidebar',
                sidebarId: 'productSidebar3',
              },
              */
              /*
              {
                label: '多模态垂类大模型',
                type: 'docSidebar',
                sidebarId: 'productSidebar4',
              },
              */
              {
                label: '认知计算晚报广告生成平台',
                type: 'docSidebar',
                sidebarId: 'productSidebar5',
              },
              /*
              {
                label: 'AI自习室',
                href: 'https://education.Suanfamama.com/',
              },
              */
              /*
              {
                label: 'AI服装买手店',
                href: 'https://fashion.Suanfamama.com/',
              },
              */
            ],
          },
          /*
          {
            type: 'docSidebar',
            sidebarId: 'progressSidebar1',
            position: 'left',
            label: '妈妈进展',           
          },
          */
          /*
          {
            type: 'docSidebar',
            sidebarId: 'openSidebar1',
            position: 'left',
            label: '开源项目',           
          },
          */
          /*
          {
            type: 'dropdown',
            label: '妈妈技术',
            position: 'left',
            items: [
              {
                label: '提示词工程 (PROMPT)',
                type: 'docSidebar',
                sidebarId: 'techSidebar9',
              },
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
              {
                label: '精准问答 (Precise QA)',
                type: 'docSidebar',
                sidebarId: 'techSidebar11',
              },
              {
                label: 'Assistant API',
                type: 'docSidebar',
                sidebarId: 'techSidebar8',
              },
              {
                label: '原型验证（POC）',
                type: 'docSidebar',
                sidebarId: 'techSidebar5',
              },
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
            ],
          },
          */
          /*
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
          */
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
            href: 'https://github.com/Suanfamama',
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
            title: '认知计算广告行业',
            items: [
              {
                label: '行业发展趋势',
                to: '/docs/computational.advertising/',
              },
            ],
          },
          {
            title: '人工智能行业',
            items: [
              {
                label: '行业发展趋势',
                to: '/docs/ai.trends/',
              },
              {
                label: '人工智能大事记',
                to: '/docs/ai.timeline/',
              },
              {
                label: '竞品分析',
                to: '/docs/list/',
              },
              {
                label: '实用 AI Tools',
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
            title: '认知计算时尚行业',
            items: [
              {
                label: '行业发展趋势',
                to: '/docs/ai.fashion.trends/',
              },
              {
                label: '时尚科技',
                to: '/docs/fashion/',
              },
              {
                label: '美感特征矩阵',
                to: '/docs/fashion.brands.features/',
              },
              /*
              {
                label: '入门级别时尚品牌',
                to: '/docs/fashion.brands.low/',
              },
              {
                label: '中级别时尚品牌',
                to: '/docs/fashion.brands.mid/',
              },
              {
                label: '高级别时尚品牌',
                to: '/docs/fashion.brands.high/',
              },
              */
              {
                label: 'AI时尚买手课程',
                to: '/docs/fashion.course/',
              },
              {
                label: '时装周',
                to: '/docs/fashion.week',
              },
              /*
              {
                label: 'SS24 新中式',
                to: '/docs/fashion.collection.SS24',
              },
              */
            ],
          },
          /*
          {
            title: '行业案例',
            items: [
              {
                label: 'AI原优舍买手店',
                href: '/docs/space.for.fashion',
              },
              {
                label: '人工智能自习室',
                to: '/docs/space.for.education',
              },
            ],
          },
          */
          /*
          {
            title: '教培行业',
            items: [
              {
                label: '行业发展趋势',
                to: '/docs/ai.education.trends/',
              },
              {
                label: 'AI赋能教育',
                to: '/docs/education.0/',
              },
              {
                label: '教师应与AI为伍',
                to: '/docs/education.1/',
              },
              {
                label: 'AI Math Course',
                to: '/docs/math.course/',
              },
              {
                label: 'AI English Course',
                to: '/docs/eng.course/',
              },
              {
                label: '2 - AI能书写论文',
                to: '/docs/education.2/',
              },
            ],
          },
          */
          /*
          {
            title: '社交群组',
            items: [
              {
                label: 'X',
                href: 'https://twitter.com/Suanfamama2024',
              },
              {
                label: '微信群',
                href: 'https://www.Suanfamama.com', // TODO: Change to the correct one
              },
            ],
          },
          */
          {
            title: '公司',
            items: [
              {
                to: '/docs/about/',
                label: '公司简介',
              },
              {
                label: '核心团队',
                to: '/docs/team',
              },
              {
                label: '地址：广州市越秀区麦栏街20号野隐人工智能创新基地',
                href: 'https://www.suanfamama.com', // TODO: Change to the correct one
              },
              /*
              {
                label: '所获荣誉',
                to: '/docs/hornor',
              },
              {
                label: '部门职位说明书',
                to: '/docs/responsibility',
              },
              {
                label: '员工管理制度',
                to: '/docs/management',
              },
              */
            ],
          },
        ],
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} 算法妈妈`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
