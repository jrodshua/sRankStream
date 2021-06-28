import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
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
    </div>
  );
}
