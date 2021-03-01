import { Box, Flex, HStack } from "@chakra-ui/react";
import NavigationLink from "./NavigationLink";
import MenuDrawer from "./MenuDrawer";
import DarkModeSwitch from "./DarkModeSwitch";
import Logo from "./Logo";

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
        <Logo />
      </Box>
      {<MenuDrawer />}
      <Box display={{ base: "flex", md: "none" }}>
        <Logo />
      </Box>
      <HStack display={{ base: "none", md: "flex" }} px={10} spacing="5px">
        <NavigationLink to={"/"} name={"Home"} />
        <NavigationLink to={"/projects"} name={"Projects"} />
        <NavigationLink to={"/blog"} name={"Blog"} />
        <NavigationLink to={"/resume"} name={"Resume"} />
      </HStack>
      <DarkModeSwitch />
    </Flex>
  );
};

export default Header;
