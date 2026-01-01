'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-sky-500 text-white p-3 vh-100" style={{ width: '220px' }}>
      <h4 className="mb-4">Menu</h4>
      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link
            className={`nav-link text-white ${pathname === '/' ? 'active fw-bold' : ''}`}
            href="/"
          >
            Home
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link
            className={`nav-link text-white ${pathname === '/about' ? 'active fw-bold' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link
            className={`nav-link text-white ${pathname === '/contact' ? 'active fw-bold' : ''}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>

      </ul>
    </div>
  );
}
