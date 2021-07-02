import Head from 'next/head';
import Link from 'next/link';
import Stripe from 'stripe';
import styles from '../styles/Shop.module.css';

export default function Shop({ products }) {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <div>
        <div className={styles.header}>
          <h1>Simple, affordable, stream overlays & panels</h1>
          <p>
            Level up your streaming & wow your audience. sRankStream provides
            super simple to use and affordable streaming overlays and panels to
            help improve your channel experience to your audience.
          </p>
        </div>
        <div className={styles.content}>
          <h2>Complete Streaming Packages</h2>
          <div className={styles.flex}>
            {products.data.map((product) => (
              <Link href={`/store/${product.metadata.url}`} key={product.id}>
                <a>
                  <div className={styles.item}>
                    <img src={product.images[0]} alt="" />
                    <h3>{product.name}</h3>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY);

  const products = await stripe.products.list();

  return {
    props: {
      products,
    },
  };
}
