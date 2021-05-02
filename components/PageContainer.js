import { Container } from "@chakra-ui/react";

const PageContainer = ({ children }) => {
  return (
    <Container maxW="container.lg" p={3}>
      {children}
    </Container>
  );
};

export default PageContainer;
