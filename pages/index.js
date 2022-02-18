import Head from "next/head";
import Layout from "./components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HiThemes | High-Quality Premium Themes</title>
        <meta name="description" content="High-Quality Premium Themes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Main
    </Layout>
  );
}
