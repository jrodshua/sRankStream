import Stripe from 'stripe';
import Head from 'next/head';
import Hero from '../components/hero';
import HowTo from '../components/howTo';
import Featured from '../components/featured';
import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Simple to use and affordable stream graphics | sRankStream
        </title>
        <meta
          name="description"
          content="Affordable custom stream overlay and graphics. Just add to your OBS of choice and take your streams to the next level!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <HowTo />
        <Featured products={products} />
      </main>
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
