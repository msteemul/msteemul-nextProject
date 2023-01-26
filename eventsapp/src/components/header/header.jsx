import Link from 'next/link';
import Image from 'next/image';

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image alt="logo" src={'/images/OSKHFO0.jpg'} width={50} height={50} />
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
      <p className="title">Events App</p>
    </div>
  </header>
);
