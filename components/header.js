import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Nav from './nav';
import logo from '../public/sRankStream-logo.svg';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.header_container}>
          <div className={styles.img_container}>
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" className={styles.header_img} />
              </a>
            </Link>
          </div>
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </header>
  );
}
