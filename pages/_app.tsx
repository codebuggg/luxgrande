import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import nProgress from 'nprogress';
import router from 'next/router';
import { ToastProvider } from '@/context/toast';

nProgress.configure({
  showSpinner: true,
});


export default function App({ Component, pageProps }: AppProps) {
  return <ToastProvider>
    <Component {...pageProps} />
  </ToastProvider>
}

router.events.on('routeChangeStart', () => nProgress.start());
router.events.on('routeChangeComplete', () => nProgress.done());
