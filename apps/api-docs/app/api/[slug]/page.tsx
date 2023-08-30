// @ts-nocheck
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc'
import createMarkdownParser from '@nodejs/core/dist/esm/lib/api-sync/apiDocsTransformUtils';
import { getContentBySlug } from '@nodejs/core/lib/contentManager';
import type { FC } from 'react';
import type { ApiDocsParams } from '@/types/params';


type PageProps = {
    params: ApiDocsParams;
}

const Page: FC<PageProps> = async ({ params }) => {

    // support old links
    if (params.slug.endsWith('.html')) {
        params.slug = params.slug.replace(/\.html$/, '');
    }

    /*
    Code below is the possibility to use the api docs in nodejs.org repo
    const doc = await getDoc(process.env.DOCS_VERSIONS || 'v.20.x', params.slug);
    const RawContent = await fetch(doc.download_url).then((res) => res.text());
    */

    // This is the possibility to use the api docs in nodejs/node repo (cannot be tested here)
    const basePath = path.join(process.cwd(), 'doc', 'api');
    const RawContent = getContentBySlug(params.slug, false, 'md', basePath);
    const branch = process.env.DOCS_VERSIONS || 'v20.x';
    const download_url = `https://raw.githubusercontent.com/nodejs/node/${branch}/doc/api/${params.slug}.md`;
    
    if(!RawContent) {
        return null;
    }
    

	const { parseMarkdown } = createMarkdownParser(
        RawContent,
        {
            name: params.slug,
            version: 'v16.0.0',
            fullVersion: 'v16.0.0',
            downloadUrl: download_url,
        }
    );

    const { content } = await compileMDX({
        source: await parseMarkdown(),
        options: {
            parseFrontmatter: true,
        }
    });

    return(
        <main>
            {content}
        </main>
    );
};

export default Page;
