import { fromMarkdown as parse } from 'mdast-util-from-markdown';
import { toMarkdown as generate } from 'mdast-util-to-markdown';
import { frontmatter } from 'micromark-extension-frontmatter';
import { frontmatterFromMarkdown, frontmatterToMarkdown } from 'mdast-util-frontmatter';
import { execSync } from 'child_process';
import console from 'consola';
import assert from 'assert';
import fs from 'fs';

const format = (src) => {
	return execSync('clang-format', {
		input: src,
		encoding: 'utf-8',
	});
};

const scanDir = (dir) => {
	// skip files under ./docs/.vuepress
	const files = fs.readdirSync(dir, { withFileTypes: true });
	for (const file of files) {
		if (file.isDirectory()) {
			scanDir(`${dir}/${file.name}`);
		}
		else if (file.isFile() && file.name.endsWith('.md')) {
			const src = fs.readFileSync(`${dir}/${file.name}`, 'utf-8');
			try {
				formatCodeBlocks(`${dir}/${file.name}`);
				console.success(`Formatted ${dir}/${file.name}`);
			}
			catch (err) {
				console.error(`Failed to format ${dir}/${file.name}`);
				console.error(err);
			}
		}
		else {
			console.info(`Skipping ${dir}/${file.name}`);
		}
	}
};

const formatCodeBlocks = (srcPath) => {
	const src = fs.readFileSync(srcPath, 'utf8');
	const astTree = parse(src, {
		extensions: [frontmatter(['yaml'])],
		mdastExtensions: [frontmatterFromMarkdown(['yaml'])],
	});
	const children = astTree.children;

	for (const child of children) {
		if (child.type === 'code' && child?.lang === 'cpp') {
			const code = child.value;
			const formatted = format(code);
			child.value = formatted;
		}
	}

	const formatted = generate(astTree, {
		extensions: [frontmatterToMarkdown(['yaml'])],
	});
	fs.writeFileSync(srcPath, formatted);
};

scanDir('./docs/guide');