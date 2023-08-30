import fs from 'node:fs';
import path from 'node:path';

function getContentBySlug(
	slug: string,
	lang?: string | undefined,
	ext: string = 'md',
	basePath: string = path.join(process.cwd(), '../../', 'content')
): string | undefined {
	try {
		const filePath = lang ? `${slug}.${lang}.${ext}` : `${slug}.${ext}`;
		const contentPath = path.join(basePath, filePath);
		return fs.readFileSync(contentPath, 'utf8');
	} catch (e) {
		try {
			if (!lang) return undefined;
			const defaultFilePath = path.join(basePath, `${slug}.en.${ext}`);
			return fs.readFileSync(defaultFilePath, 'utf8');
		} catch (e) {
			return undefined;
		}
	}
}

export { getContentBySlug };
