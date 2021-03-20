import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import PageContainer from "@/components/PageContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Head>
        <title>angelhodar</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
