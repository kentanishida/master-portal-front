import React from 'react';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
