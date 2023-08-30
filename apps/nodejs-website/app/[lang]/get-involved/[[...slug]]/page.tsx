import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getContentBySlug } from '@nodejs/core/lib/contentManager';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { aboutParams } from '@/types/params';
import type { AboutFrontmatter } from '@/types/frontmatter';

type PageProps = {
    params: aboutParams;
}

const generateMetadata = async ({ params }: PageProps) => {
    if (!params.slug) {
        params.slug = 'index';
    }

    const rawContent = getContentBySlug(`get-involved/${params.slug}`, params.lang);

    if (!rawContent) {
        notFound();
    }

    const { frontmatter } = await compileMDX<AboutFrontmatter>({
        source: rawContent,
        options: {
            parseFrontmatter: true,
        }
    });

    const metadata: Metadata = {
        title: frontmatter.title,
    };

    return metadata;
}

const Page: FC<PageProps> = async ({params}) => {

    if (!params.slug) {
        params.slug = 'index';
    }

    const rawContent = getContentBySlug(`get-involved/${params.slug}`, params.lang);

    if (!rawContent) {
        notFound();
    }

    const { content, frontmatter } = await compileMDX<AboutFrontmatter>({
        source: rawContent,
        options: {
            parseFrontmatter: true,
        }
    });


    return(
        <>
            <h1>{frontmatter.title}</h1>
            {content}
        </>
    );
};

export { generateMetadata };
export default Page;