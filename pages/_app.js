import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import PageContainer from "@/components/PageContainer";
import MDXComponents from "@/components/MDXComponents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <MDXProvider components={MDXComponents}>
        <Head>
          <title>angelhodar</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        </Head>
        <Header />
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
        <Footer />
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;
