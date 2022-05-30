import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';

import '@styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Aprendiendo Git</title>
            </Head>
            <Header />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Footer />
        </>
    );
}
