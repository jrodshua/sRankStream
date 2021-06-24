import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <content>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </content>
  );
}

export default MyApp;
