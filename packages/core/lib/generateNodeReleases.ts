// @ts-nocheck
import nodevu from '@nodevu/core';

const generateNodeReleasesJson = async () => {
  const nodevuOutput = await nodevu({ fetch: fetch });

  // Filter out those without documented support
  // Basically those not in schedule.json
  const majors = Object.values(nodevuOutput).filter(
    major => major?.support?.phases?.dates?.start
  );

  const nodeReleases = majors.map(major => {
    const [latestVersion] = Object.values(major.releases);

    return {
      major: latestVersion.semver.major,
      version: latestVersion.semver.raw,
      codename: major.support.codename,
      currentStart: major.support.phases.dates.start,
      ltsStart: major.support.phases.dates.lts,
      maintenanceStart: major.support.phases.dates.maintenance,
      endOfLife: major.support.phases.dates.end,
      npm: latestVersion.dependencies.npm,
      v8: latestVersion.dependencies.v8,
      releaseDate: latestVersion.releaseDate,
      modules: latestVersion.modules.version,
    };
  });

  return nodeReleases.filter(
        release => release.major !== 0 || release.version === '0.12.18'
  );
};

export default generateNodeReleasesJson;
