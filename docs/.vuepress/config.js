export const base = process.env.BUILD_PATH;

export const head = [
  ["link", { rel: "icon", href: "https://i.imgur.com/gh25FnY_d.png" }],
];

export const bundler = "@vuepress/bundler-vite";

export const plugins = [
  [
    "@vuepress/plugin-search",
    {
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
    },
  ],

  [
    "@vuepress/plugin-shiki",
    {
      theme: "one-dark-pro",
    },
  ],

  [
    "@vuepress/plugin-google-analytics",
    process.env.NODE_ENV === "production"
      ? {
          id: "G-TYT36D3YZN",
        }
      : false,
  ],

  ["@vuepress/plugin-toc", {}],
];

export const themeConfig = {
  docsDir: "docs",
  docsBranch: "master",
  logo: "https://i.imgur.com/gh25FnY_d.webp?maxwidth=760&fidelity=grand",
  repo: "EC3-Gang/cpp",
  navbar: [
    {
      text: "Home",
      link: "/",
    },
  ],
  sidebar: {
    "/": [
      {
        text: "Introduction",
        children: ["/", "/general.md"],
      },
      {
        text: "Basics & STL Data Structures",
        children: [
          "/guide/basics/README.md",
          "/guide/stl-data-structures/README.md",
        ],
      },
      {
        text: "Advanced Topics",
        children: [
          "/guide/more-adv/README.md",
          "/guide/more-adv/dp.md",
          "/guide/more-adv/trees.md",
          "/guide/more-adv/gt.md",
          "/guide/more-adv/rf.md",
        ],
      },
      {
        text: "Useful Algorithms",
        children: [
          "/guide/funcs/README.md",
          "/guide/funcs/bs.md",
          "/guide/funcs/bubblesort.md",
        ],
      },
      {
        text: "Others",
        children: ["/guide/solutions/", "/guide/LICENSE.md"],
      },
    ],
  },
};
