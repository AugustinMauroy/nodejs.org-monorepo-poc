import generateNodeReleasesJson from '@nodejs/core/dist/esm/lib/generateNodeReleases'
import { getNodeReleaseStatus } from '@nodejs/core/dist/esm/lib/nodeRelease';
import type { FC } from 'react';

const Page: FC = async () => {
    
    // @TODO: found an better area to put this
    const nodeReleasesData = await generateNodeReleasesJson();
    const releases = () => {
        const now = new Date();
    
        return nodeReleasesData.map((raw) => {
          const support = {
            currentStart: raw.currentStart,
            ltsStart: raw.ltsStart,
            maintenanceStart: raw.maintenanceStart,
            endOfLife: raw.endOfLife,
          };
    
          const status = getNodeReleaseStatus(now, support);
    
          return {
            ...support,
            major: raw.major,
            version: raw.version,
            versionWithPrefix: `v${raw.version}`,
            codename: raw.codename || '',
            isLts: status === 'Active LTS' || status === 'Maintenance LTS',
            status: status,
            npm: raw.npm || '',
            v8: raw.v8 || '',
            releaseDate: raw.releaseDate || '',
            modules: raw.modules || '',
          };
        });
    };

    return(<>
        <h1>Download Page</h1>
        <p>Lasted <code>LTS</code>:{
            releases().filter((release) => release.isLts)[0].versionWithPrefix
        }</p>
        <p>Lasted <code>Current</code>:{
            releases().filter((release) => release.status === 'Current')[0].versionWithPrefix
        }</p>
    </>
    );
}

export default Page;
