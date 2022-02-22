const { path } = require('@vuepress/utils');

module.exports = {
	theme: path.resolve(__dirname, './theme'),
	base: process.env.BUILD_PATH,
	head: [
		['link', { rel: 'icon', href: 'https://i.imgur.com/gh25FnY_d.png' }],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css',
			},
		],
	],
	// when using vuepress-vite package, you can omit this field
	// because vite is the default bundler
	bundler: '@vuepress/bundler-vite',
	extendMarkdown: (md) => {
		md.use(require('@traptitech/markdown-it-katex'), { 'blockClass': 'math-block', 'errorColor' : ' #cc0000' });
	},
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
				theme: 'solarized-dark',
			},
		],
		[
			'@vuepress/plugin-google-analytics',
			process.env.NODE_ENV === 'production'
				? {
					id: 'G-TYT36D3YZN',
				}
				: false,
		],
		[
			'@vuepress/plugin-toc',
			{
				// nothing atm
			},
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
			},
		],
		sidebar: {
			'/': [
				{
					text: 'Introduction',
					children: ['/', '/general.md'],
				},
				{
					text: 'Basics & STL Data Structures',
					children: [
						'/guide/basics/README.md',
						'/guide/stl-data-structures/README.md',
					],
				},
				{
					text: 'Advanced Topics',
					children: [
						'/guide/more-adv/README.md',
						'/guide/more-adv/dp.md',
						'/guide/more-adv/trees.md',
						'/guide/more-adv/gt.md',
						'/guide/more-adv/rf.md',
					],
				},
				{
					text: 'Useful Algorithms',
					children: [
						'/guide/funcs/README.md',
						'/guide/funcs/bs.md',
						'/guide/funcs/bubblesort.md',
					],
				},
				{
					text: 'Others',
					children: ['/guide/solutions/', '/guide/LICENSE.md'],
				},
			],
		},
	},
};
