import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'Nodejs',
  description: 'Run JavaScript everywhere',
}

type Params = {
  lang: string;
};

type LayoutProps = PropsWithChildren<{
  params: Params;
}>;

// @TODO: add generateStaticParams to exlude unsupported params

const Layout: FC<LayoutProps> = ({ children, params }) => (
    <html lang={params.lang}>
      <body>
        {children}
      </body>
    </html>
);

export default Layout;
