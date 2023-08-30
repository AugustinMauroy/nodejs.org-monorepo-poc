import { notFound } from 'next/navigation';
import { getCode } from "@nodejs/i18n";
import type { I18nParams } from '@/types/params';
import type { FC } from 'react';

type PageProps = {
    params: I18nParams;
}

const Page: FC<PageProps> = ({params}) => {


    if (!getCode().includes(params.lang)) {
        return notFound();
    }

    return (
        <>
        <h1>Index Page</h1>
        </>
    )
};

export default Page;
