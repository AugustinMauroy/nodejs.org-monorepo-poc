import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => (
  <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      Go back home
    </Link>
  </>
);

export default NotFound;
