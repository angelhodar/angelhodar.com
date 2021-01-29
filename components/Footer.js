import { Flex } from "@chakra-ui/react";
import FooterIcon from "./FooterIcon";

export const Footer = () => {
  return (
    <Flex align="center" mb={4}>
      <FooterIcon to={"https://github.com/angelhodar"} title="GitHub" />
      <FooterIcon
        to={"https://www.linkedin.com/in/angel-rodriguez-hodar-541bb8199/"}
        title="LinkedIn"
      />
    </Flex>
  );
};

export default Footer;
