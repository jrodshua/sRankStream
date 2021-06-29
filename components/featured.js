import Link from 'next/link';
import styles from '../styles/Products.module.css';

export default function Featured({ products }) {
  return (
    <section id="featured-products">
      <div className={styles.featured}>
        <div className={styles.container}>
          <ul className={styles.featured_list}>
            {products.data.map((product) => (
              <li key={product.id} className={styles.products_container}>
                <Link href={`/store/${product.metadata.url}`}>
                  <a>
                    <div className={styles.products_div}>
                      <h3>{product.name}</h3>
                      <img src={product.images[0]} alt="" />
                      <p>{product.description}</p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
