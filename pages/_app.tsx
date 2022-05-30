import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Components/Layout';

function MyApp({ Component:PagesComponent, pageProps }: AppProps) {
  return (
    <Layout>
      <PagesComponent {...pageProps} />
    </Layout>
  )
}

export default MyApp
