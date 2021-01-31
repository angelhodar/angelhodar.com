import { Link, IconButton } from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const FooterIcon = ({ to, title }) => {

  const getIconByTitle = () => {
    if (title === "GitHub") return <SiGithub size={32}/>;
    else return <SiLinkedin size={32} />;
  };

  return (
    <Link href={to} title={title} isExternal>
      <IconButton
        aria-label={title}
        icon={getIconByTitle()}
        size="lg"
        variant="ghost"
      />
    </Link>
  );
};

export default FooterIcon;
