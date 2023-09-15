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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <script
            async
            src={`https://www.youtube.com/iframe_api?key=AIzaSyAhQcxb3rc8VicWW9NbeuidGFiMUmh_TbA`}
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
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
