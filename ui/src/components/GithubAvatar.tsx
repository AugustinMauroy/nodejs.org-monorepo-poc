'use client';
import * as React from 'react';
import type { FC } from 'react';

type GithubAvatar = {
    username: string;
};

const GithubAvatar: FC<GithubAvatar> = ({ username }) => (
    <img
        src={`https://avatars.githubusercontent.com/${username}`}
        alt={username}
    />
);

export { GithubAvatar };
