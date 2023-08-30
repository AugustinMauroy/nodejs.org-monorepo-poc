import { Octokit } from 'octokit';

const octokit = new Octokit({
	auth: process.env.API_KEY,
});

async function getDoc(branch: string, file?: string) {
	const { data } = await octokit.request(
		'GET /repos/{owner}/{repo}/contents/{path}',
		{
			owner: 'nodejs',
			repo: 'node',
			path: `doc/api/${file}.md` || 'doc/api',
			ref: branch,
	},
	);

    return data;
};

export default getDoc;
