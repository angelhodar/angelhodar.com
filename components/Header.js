import Link from "next/link";
import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import NavigationSection from "./NavigationSection";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      as="nav"
      pt={5}
    >
      <Box py={5}>
        <Link href="/">
          <Image
            boxSize="75px"
            borderRadius="full"
            src="/logo.svg"
            alt="Logo"
          ></Image>
        </Link>
      </Box>
      <HStack px={10} spacing="5px">
        <NavigationSection to={"/"} name={"Home"} />
        <NavigationSection to={"/stats"} name={"Stats"} />
        <NavigationSection to={"/blog"} name={"Blog"} />
        <NavigationSection to={"/resume"} name={"Resume"} />
        <NavigationSection to={"/projects"} name={"Projects"} />
        <NavigationSection to={"/about"} name={"About"} />
      </HStack>
      <DarkModeSwitch />
    </Flex>
  );
};

export default Header;
