import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { fromImageToUrl, API_URL } from '../utils/urls';
import { twoDeci } from '../utils/format';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>
          sRankStream | Simple, Affordable, and Awesome Stream Overlays
        </title>
        <meta
          name="description"
          content="sRankStream is a affordable streaming overlay provider, with constantly updated simple to use files, taking your streaming experience to the next level."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map((product) => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.image)} />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${twoDeci(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products`);
  const products = await product_res.json();

  return {
    props: {
      products,
    },
  };
}
