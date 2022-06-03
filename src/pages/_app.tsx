import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from '@containers/Header';
import Footer from '@containers/Footer';
import Layout from '@containers/Layout';

import '@styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Aprendiendo Git</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Footer />
        </>
    );
}
