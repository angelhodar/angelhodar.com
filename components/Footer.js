import React from "react";
import { Flex, HStack, Text, Stack, IconButton } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

const Footer = () => {
  const icons = [
    {
      title: "GitHub",
      to: "https://github.com/angelhodar",
      icon: <SiGithub size={32} />,
    },
    {
      title: "Twitter",
      to: "https://twitter.com/angelhodar",
      icon: <SiTwitter size={32} />,
      color: "twitter",
    },
    {
      title: "LinkedIn",
      to: "https://www.linkedin.com/in/angel-rodriguez-hodar-541bb8199/",
      icon: <SiLinkedin size={32} />,
      color: "linkedin",
    },
  ];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="center"
      mb="10"
      mt="10"
      align="center"
    >
      <Stack
        align="center"
        spacing="20px"
        direction={{ base: "column", md: "row" }}
      >
        <Text>&copy; {new Date().getFullYear()} Angel Hodar</Text>
        <HStack spacing="5">
          {icons.map(({ title, to, icon, color }) => (
            <IconButton
              key={title}
              as="a"
              href={to}
              target="_blank"
              aria-label={title}
              icon={icon}
              variant="ghost"
              colorScheme={color}
            />
          ))}
        </HStack>
      </Stack>
    </Flex>
  );
};

export default Footer;
