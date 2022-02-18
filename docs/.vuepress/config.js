module.exports = {
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
  ],
  themeConfig: {
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
          text: 'Guides and experiences',
          children: [
	    '/guide/darryl/README.md',
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
