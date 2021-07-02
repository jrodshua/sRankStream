import Link from 'next/link';
import styles from '../styles/Sections.module.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Level up your streams</h1>
          <p>
            Explore affordable, super simple to use, custom overlays and
            graphics to help take your streaming experience to the next level
          </p>
          <button type="button">
            <Link href="/shop">
              <a>Explore Store</a>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
