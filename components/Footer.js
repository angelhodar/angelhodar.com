import { Container, HStack } from "@chakra-ui/react";
import FooterIcon from "./FooterIcon";

export const Footer = () => {
  return (
    <Container>
      <HStack justify="center" spacing={5}>
        <FooterIcon to={"https://github.com/angelhodar"} title="GitHub" />
        <FooterIcon
          to={"https://www.linkedin.com/in/angel-rodriguez-hodar-541bb8199/"}
          title="LinkedIn"
        />
      </HStack>
    </Container>
  );
};

export default Footer;
