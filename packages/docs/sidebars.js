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
  tutorialSidebar: [
    "getting-started",
    "installation",
    "configuration",
    {
      type: "category",
      label: "Components",
      items: [
        "components/layout",
        "components/hero",
        "components/feature-grid",
        "components/project-card",
        "components/buttons",
        "components/footer",
        "components/logo",
      ],
    },
    "migration",
    "examples",
    "quick-reference",
  ],
};

export default sidebars;
