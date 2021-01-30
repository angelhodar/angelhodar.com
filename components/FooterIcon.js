import { Link, IconButton, useColorMode } from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const FooterIcon = ({ to, title }) => {
  const { colorMode } = useColorMode();

  const getIconByTitle = () => {
    if (title === "GitHub") return <SiGithub size={32}/>;
    else return <SiLinkedin size={32} />;
  };

  return (
    <Link href={to} title={title} isExternal>
      <IconButton
        aria-label="GitHub"
        icon={getIconByTitle()}
        size="lg"
        color={colorMode === "light" ? "black" : "white"}
        variant="ghost"
      />
    </Link>
  );
};

export default FooterIcon;
