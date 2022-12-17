import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from 'src/components/Layout';
import { Provider } from 'react-redux';
import store from 'src/redux-toolkit/store';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
