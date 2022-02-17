module.exports = {
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
  ],
  themeConfig: {
    navbar: [
      {
        text: 'Home',
        link: '/',
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Guides and experiences',
          children: [
            '/guide/derrick/README.md',
            '/guide/darren/README.md',
            '/guide/weiyu/README.md',
            '/guide/solutions/README.md',
          ],
        },
      ],
    },
  },
}