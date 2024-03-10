
import "./page.scss"
import type { AppProps } from 'next/app';
import "@/app/theme/normalize.scss"
import "@/app/theme/global.scss"
import Head from 'next/head';
import type { ReactNode } from 'react';
import Table from "./components/table/table";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <main>
        <Table 
        />
        </main>
      </Layout>
    </>
  );
}
export default MyApp;
 