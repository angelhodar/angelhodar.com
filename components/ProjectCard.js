import React from "react";
import Link from "next/link";
import { Box, Flex, VStack, Text, Image, HStack } from "@chakra-ui/react";

const ProjectCard = ({ name, displayName, summary }) => {

  const icons = {
    "revidace": "https://www.manejandodatos.es/wp-content/uploads/2018/02/vueJS.png",
    "angelhodar.dev": "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    "telesheets": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
    "openrpg_inventory": "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png",
    "openrpg_stats": "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png",
    "openrpg_quest": "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png",
    "openrpg_radarsystem": "https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png"
  }

  return (
    <Link href={`/projects/${name}`}>
      <Flex
        as="a"
        cursor="pointer"
        alignItems="center"
        rounded="xl"
        borderWidth="1px"
        w="100%"
      >
        <Image
          ml="3"
          boxSize="60px"
          src={icons[name]}
        />
        <VStack align="start" p="4">
          <Text fontWeight="bold" fontSize="2xl">
            {displayName}
          </Text>
          <Text fontSize="lg">{summary}</Text>
        </VStack>
      </Flex>
    </Link>
  );
};

export default ProjectCard;
