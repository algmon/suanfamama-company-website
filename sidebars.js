/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  productSidebar1: [{type: 'autogenerated', dirName: 'chatbot'}],
  productSidebar2: [{type: 'autogenerated', dirName: 'platform'}],
  productSidebar3: [{type: 'autogenerated', dirName: 'gpts'}],
  techSidebar1: [{type: 'autogenerated', dirName: 'llm-basics'}],
  techSidebar2: [{type: 'autogenerated', dirName: 'rag-basics'}],
  techSidebar3: [{type: 'autogenerated', dirName: 'mem-basics'}],
  techSidebar4: [{type: 'autogenerated', dirName: 'langchain-basics'}],
  techSidebar5: [{type: 'autogenerated', dirName: 'agent-basics'}],
  techSidebar6: [{type: 'autogenerated', dirName: 'chroma-basics'}],
  techSidebar7: [{type: 'autogenerated', dirName: 'nextjs-basics'}],
  techSidebar8: [{type: 'autogenerated', dirName: 'assistantAPI'}],
  solutionSidebar1: [{type: 'autogenerated', dirName: 'solution'}],
  researchSidebar1: [{type: 'autogenerated', dirName: 'research'}],
  serviceSidebar1: [{type: 'autogenerated', dirName: 'service-basics'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  */
};

module.exports = sidebars;
