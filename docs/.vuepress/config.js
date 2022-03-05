const { path } = require('@vuepress/utils');

module.exports = {
	theme: path.resolve(__dirname, './theme'),
	sidebarDepth: 5,
	base: process.env.BUILD_PATH,
	head: [
		['link', { rel: 'icon', href: 'https://i.imgur.com/gh25FnY_d.png' }],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.15.2/katex.min.css',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
			},
		],
	],
	// when using vuepress-vite package, you can omit this field
	// because vite is the default bundler
	bundler: '@vuepress/bundler-vite',
	bundlerConfig: {
		vuePluginOptions: {
			template: {
				compilerOptions: {
					isCustomElement: (tag) => {
						return [
							'mi',
							'mo',
							'mn',
							'msup',
							'mrow',
							'annotation',
							'mtext',
							'semantics',
							'math',
						].includes(tag);
					},
				},
			},
		},
	},
	markdown: {
		lineNumbers: true,
		extractHeaders: {
			level: [2, 3, 4, 5],
		},
	},
	extendsMarkdown: (md) => {
		md.use(require('@commenthol/markdown-it-katex'));
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
					children: ['/intro.md', '/general.md'],
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
						'/guide/more-adv/structsnclasses.md',
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
