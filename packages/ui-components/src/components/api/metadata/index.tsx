import * as React from 'react';
import type { FC } from 'react';

type MetadataProps = {
    data: any
};

const Metadata: FC<MetadataProps> = ({ data }) => (
    <div>
        {data.toString()}
    </div>
);

export default Metadata;