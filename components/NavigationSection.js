import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

const NavigationSection = ({ to, name }) => {
  const { pathname } = useRouter();

  return (
    <Link href={to}>
      <Button as="a" variant={pathname === to ? "outline" : "ghost"}>
        {name}
      </Button>
    </Link>
  );
};

export default NavigationSection;
