'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg bg-sky-500">
      <div className="container">
        <Link className="navbar-brand text-white" href="/">
          MyApp
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                href="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                href="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
