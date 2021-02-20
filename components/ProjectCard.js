import React from "react";
import NextLink from "next/link";
import {
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

const ProjectCard = ({
  name,
  displayName,
  summary,
  website,
  repositoryUrl,
}) => {
  const icons = {
    revidace:
      "https://www.manejandodatos.es/wp-content/uploads/2018/02/vueJS.png",
    "angelhodar.dev": "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    telesheets:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
    openrpg_inventory:
      "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png",
    openrpg_stats:
      "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png",
    openrpg_quest:
      "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png",
    openrpg_radarsystem:
      "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png",
  };

  return (
    <NextLink href={`/projects/${name}`}>
      <Flex
        as="a"
        direction="column"
        cursor="pointer"
        alignItems="center"
        rounded="xl"
        borderWidth="1px"
        w="100%"
      >
        <Image src={"https://picsum.photos/500/250"} />
        <VStack align="start" p="4">
          <HStack spacing="3">
            <Text fontWeight="bold" fontSize="2xl">
              {displayName}
            </Text>
            {website && (
              <Link href={website} isExternal>
                <Icon aria-label={"Website"} w={5} h={5} as={CgWebsite} />
              </Link>
            )}
            {repositoryUrl && (
              <Link href={repositoryUrl} isExternal>
                <Icon aria-label={"GitHub"} w={5} h={5} as={SiGithub} />
              </Link>
            )}
          </HStack>
          <Text fontSize="lg">{summary}</Text>
          <HStack spacing="3">
            <Image boxSize="30px" src={icons.revidace} />;
            <Image boxSize="30px" src={icons["angelhodar.dev"]} />;
            <Image boxSize="30px" src={icons.telesheets} />;
            <Image boxSize="30px" src={icons.openrpg_inventory} />;
          </HStack>
        </VStack>
      </Flex>
    </NextLink>
  );
};

export default ProjectCard;
