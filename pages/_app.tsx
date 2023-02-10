import 'tailwindcss/tailwind.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import nProgress from 'nprogress';

nProgress.configure({
  showSpinner: true,
});


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

router.events.on('routeChangeStart', () => nProgress.start());
router.events.on('routeChangeComplete', () => nProgress.done());
