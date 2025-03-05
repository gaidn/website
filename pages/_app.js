import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>GAIDN - Global AI Developer Network</title>
        <meta name="description" content="Global AI Developer Network - Building a people-first AI developer ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;