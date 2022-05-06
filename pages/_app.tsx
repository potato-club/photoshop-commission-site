import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header, Footer } from '../src/components/index';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
