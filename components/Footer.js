import React from "react";
import { Container, HStack, IconButton } from "@chakra-ui/react";
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
      color: "twitter"
    },
    {
      title: "LinkedIn",
      to: "https://www.linkedin.com/in/angel-rodriguez-hodar-541bb8199/",
      icon: <SiLinkedin size={32} />,
      color: "linkedin"
    },
  ];

  return (
    <Container mb={5}>
      <HStack justify="center" spacing={5}>
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
    </Container>
  );
};

export default Footer;
