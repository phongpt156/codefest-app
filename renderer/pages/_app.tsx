import type { AppProps } from 'next/app';
import Providers from '../components/Providers';
import AppProvider from '../providers/AppProvider';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Providers>
  );
}

export default MyApp;
