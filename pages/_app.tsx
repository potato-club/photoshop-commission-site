import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Layout } from 'src/components/Layout';
import store from 'src/redux-toolkit/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link
            rel="shortcut icon"
            href="/easyphotoTitle.png"
            type="image/x-icon"
          />
          <title>포토샵 커미션 | EasyPhoto</title>
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
