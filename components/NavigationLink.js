import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

const NavigationLink = ({ to, name, onClick }) => {
  const { pathname } = useRouter();
  const variant = pathname === to ? "solid" : "ghost";
  
  return (
    <Link href={to}>
      <Button as="a" onClick={onClick} variant={variant}>
        {name}
      </Button>
    </Link>
  );
};

export default NavigationLink;
