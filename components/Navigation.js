import Link from "next/link";
import { Flex, HStack, Image } from "@chakra-ui/react";
import NavigationSection from "./NavigationSection";
import DarkModeSwitch from "./DarkModeSwitch";

const Navigation = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="800px"
      minWidth="300px"
      width="100%"
      as="nav"
      mx="auto"
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          w="10%"
          h="10%"
        ></Image>
      </Link>
      <HStack spacing="5px">
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

export default Navigation;
