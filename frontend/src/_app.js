import Head from 'next/head';
import '../index.css'; // Include if you have global styles here

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* SEO Meta */}
        <meta property="og:title" content="MHT-CET College Predictor" />
        <meta property="og:description" content="Find the best colleges based on your MHT-CET rank." />
        <meta property="og:image" content="/college-predictor.png" />
        <meta property="og:image:alt" content="MHT CET College Predictor Logo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/college-predictor.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
