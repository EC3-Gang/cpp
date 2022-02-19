module.exports = {
  base: process.env.BUILD_PATH,
  head: [
    ['link', { rel: 'icon', href: 'https://i.imgur.com/gh25FnY_d.png' }]
  ],
  // when using vuepress-vite package, you can omit this field
  // because vite is the default bundler
  bundler: '@vuepress/bundler-vite',
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-shiki',
      {
        theme: 'one-dark-pro',
      }
    ],
    [
      '@vuepress/plugin-google-analytics',
      process.env.NODE_ENV === 'production' ? {
        id: 'G-TYT36D3YZN',
      } : false,
    ],
    [
      '@vuepress/plugin-toc',
      {
      }
    ],
  ],
  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'master',
    logo: 'https://i.imgur.com/gh25FnY_d.webp?maxwidth=760&fidelity=grand',
    repo: 'EC3-Gang/cpp',
    navbar: [
      {
        text: 'Home',
        link: '/',
      }
    ],
    sidebar: {
      '/': [
				{
          text: 'Intro',
          children: [
            '/',
						'/general.md',
          ],
        },
        {
          text: 'The basics and most commonly used structures',
          children: [
	          '/guide/basics/README.md',
            '/guide/stl-data-structures/README.md',
          ],
        },
        {
          text: 'More advanced topics',
          children: [
	          '/guide/more-adv/README.md',
            '/guide/more-adv/dp.md',
            '/guide/more-adv/trees.md',
            '/guide/more-adv/gt.md',
            '/guide/more-adv/rf.md',
          ],
        },
        {
          text: 'Useful functions',
          children: [
	          '/guide/funcs/README.md',
            '/guide/funcs/bs.md',
            '/guide/funcs/bubblesort.md',
          ],
        },
        {
          text: 'Others',
          children: [
	          '/guide/solutions/',
          ],
        },
      ],
    },
  },
}
