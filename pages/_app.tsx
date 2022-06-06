import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout';

function MyApp({ Component:PagesComponent, pageProps:fetchProps }: AppProps) {
  return (
    <Layout>
      <PagesComponent {...fetchProps} />
    </Layout>
  )
}

export default MyApp
