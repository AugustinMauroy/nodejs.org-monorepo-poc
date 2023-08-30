import fs from 'node:fs';
import path from 'node:path';

const basePath = path.join(process.cwd(), '../../', 'content');

function getContentBySlug(
	slug: string,
	lang?: string,
	ext: string = 'md',
): string | undefined {
	try {
		const filePath = path.join(basePath, `${slug}.${lang}.${ext}`);
		return fs.readFileSync(filePath, 'utf8');
	} catch (e) {
		try {
			const defaultFilePath = path.join(basePath, `${slug}.en.${ext}`);
			return fs.readFileSync(defaultFilePath, 'utf8');
		} catch (e) {
			return undefined;
		}
	}
}

export { getContentBySlug };