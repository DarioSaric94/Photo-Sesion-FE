import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import theme from '../static/theme';
import ThemeProvider from '@mui/system/ThemeProvider/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../static/styles/index.css';
import { Navbar } from '@/components/layout/navbar';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Navbar />
        {isClient && <Component {...pageProps} />}
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
}
