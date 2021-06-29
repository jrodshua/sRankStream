import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/">
                <a>Store</a>
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/">
                <a>Support</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
