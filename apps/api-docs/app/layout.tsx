import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Nodejs',
  description: 'Run JavaScript everywhere',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
);

export { metadata };
export default RootLayout;
