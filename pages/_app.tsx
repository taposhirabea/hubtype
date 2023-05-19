import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" /> */}
   <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
  </Head>
  <Header/>
  <Sidebar/>
    <Component {...pageProps} />
  </>
}
