// @ts-nocheck
import getDoc from '@nodejs/core/dist/esm/lib/api-sync/getApiData';
import createMarkdownParser from '@nodejs/core/dist/esm/lib/api-sync/apiDocsTransformUtils';
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

    // @TODO: add system to take file from docs folder
    const doc = await getDoc(process.env.DOCS_VERSIONS || 'v.20.x', params.slug);
    const RawContent = await fetch(doc.download_url).then((res) => res.text());

	const MdxContent = await createMarkdownParser(
        RawContent,
            {
              name: params.slug,
              version: 'v16.0.0',
              fullVersion: 'v16.0.0',
              downloadUrl: doc.download_url,
            }
          );
    
    // @TODO: add MDX parser

    return(
        <main>
            
        </main>
    );
};

export default Page;
