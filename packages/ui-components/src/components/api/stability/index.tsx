import * as React from 'react';
import type { FC, PropsWithChildren } from 'react';

type StabilityProps = PropsWithChildren<{
    stability: number
}>;

const Stability: FC<StabilityProps> = ({ children, stability }) => (
    <div>
        <strong>{stability.toString()}</strong> - {children}
    </div>
)

export default Stability