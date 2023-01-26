import Link from 'next/link';
import HeaderLeft from '../header/header-left';

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <HeaderLeft />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
