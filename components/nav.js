import Link from 'next/link';
import Image from 'next/image';
import menuBtn from '../public/menu-btn.svg';
import styles from '../styles/Nav.module.css';

export default function Nav({ menuOpen, setMenuOpen }) {
  return (
    <nav>
      <div className={styles.sidenav}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src={menuBtn} alt="" />
        </button>
        {menuOpen ? (
          <div className={styles.sidenav_list_container}>
            <ul className={styles.sidenav_list}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Support</a>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.navbar}>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Support</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
