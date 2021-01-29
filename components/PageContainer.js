import { VStack, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";

const PageContainer = ({ children }) => {
  return (
    <>
      <Head>
        <title>angelhodar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <VStack spacing={4} align="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          {children}
          <Footer />
        </Flex>
      </VStack>
    </>
  );
};

export default PageContainer;
