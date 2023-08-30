import fs from 'node:fs';
import { Octokit } from 'octokit';
import versions from './version.mjs';
import createMarkdownParser from './apiDocsTransformUtils.mjs';

const octokit = new Octokit({
	auth: process.env.API_KEY,
});

async function getDoc(branch) {
	const { data } = await octokit.request(
		'GET /repos/{owner}/{repo}/contents/{path}',
		{
			owner: 'nodejs',
			repo: 'node',
			path: 'doc/api',
			ref: branch,
		},
	);

    return data;
};

async function test () {
	getDoc(versions[0]).then(async (data) => {
		const content = await fetch(data[0].download_url).then((res) => res.text());
		const { parseMarkdown, getNavigationEntries } = createMarkdownParser(
            content,
            {
              name: data.name,
              version: 'v16.0.0',
              fullVersion: 'v16.0.0',
              downloadUrl: data.download_url,
            }
          );
		fs.writeFileSync('test.json', JSON.stringify(getNavigationEntries()));
		fs.writeFileSync('test.mdx', await parseMarkdown());
	});
}

test();
