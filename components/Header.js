import Link from "next/link";
import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import NavigationLink from "./NavigationLink";
import MenuDrawer from "./MenuDrawer";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent={{
        base: "space-between",
        md: "center",
      }}
      alignItems="center"
      as="nav"
      p={5}
    >
      <Box py={5} display={{ base: "none", md: "flex" }}>
        <Link href="/">
          <Image
            boxSize="75px"
            src="/logo.svg"
            alt="Logo"
          ></Image>
        </Link>
      </Box>
      <MenuDrawer />
      <Box display={{ base: "flex", md: "none" }}>
        <Link href="/">
          <Image
            boxSize="70px"
            src="/logo.svg"
            alt="Logo"
          ></Image>
        </Link>
      </Box>
      <HStack display={{ base: "none", md: "flex" }} px={10} spacing="5px">
        <NavigationLink to={"/"} name={"Home"} />
        <NavigationLink to={"/projects"} name={"Projects"} />
        <NavigationLink to={"/resume"} name={"Resume"} />
        <NavigationLink to={"/blog"} name={"Blog"} />
        <NavigationLink to={"/stats"} name={"Stats"} />
      </HStack>
      <DarkModeSwitch />
    </Flex>
  );
};

export default Header;
