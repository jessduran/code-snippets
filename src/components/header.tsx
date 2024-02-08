'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="header">
      <Link
        href="/"
        className="text-4xl font-bold"
      >
        Snippets
      </Link>

      {/* hide button in add snippet page */}
      {
        pathname !== '/snippets/add' &&
        <>
          <Link
            href="/snippets/add"
            className="main-cta-btn desktop"
          >
            Add new snippet
          </Link> 

          <Link
            href="/snippets/add"
            className="main-cta-btn mobile"
          >
            New
          </Link> 
        </>
      }
    </div>
  );
}
