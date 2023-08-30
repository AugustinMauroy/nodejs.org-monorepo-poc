import { Metadata } from "next";
import type { I18nParams } from "@/types/params";
import type { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'Nodejs',
  description: 'Run JavaScript everywhere',
}

type LayoutProps = PropsWithChildren<{
  params: I18nParams;
}>;

const Layout: FC<LayoutProps> = ({ children, params }) => (
  <html lang={params.lang}>
    <body>
      {children}
    </body>
  </html>
);

export default Layout;
