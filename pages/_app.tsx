import Navbar from '../components/navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import StateContextProvider from '../contexts/useLocalState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </div>
  );
}

export default MyApp;
