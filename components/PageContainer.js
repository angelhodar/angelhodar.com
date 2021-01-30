import { Container } from "@chakra-ui/react";

const PageContainer = ({ children }) => {
  return (
    <Container maxW="4xl" p={5} centerContent>
      {children}
    </Container>
  );
};

export default PageContainer;
