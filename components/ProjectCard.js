import React from "react";
import NextLink from "next/link";
import { Flex, VStack, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";

const ProjectCard = ({
  name,
  displayName,
  summary,
  website,
  repositoryUrl,
  forks,
  stargazers_count,
}) => {
  return (
    <Flex
      as="a"
      direction="column"
      cursor="pointer"
      alignItems="center"
      rounded="xl"
      boxShadow="xl"
      borderWidth="1px"
      w="100%"
    >
      <VStack align="start" p="4">
        <HStack spacing="4">
          <NextLink href={`/projects/${name}`}>
            <Text fontWeight="bold" fontSize="2xl">
              {displayName}
            </Text>
          </NextLink>
          {website && (
            <Link href={website} isExternal>
              <Icon aria-label={"Website"} w={7} h={7} as={CgWebsite} />
            </Link>
          )}
          {repositoryUrl && (
            <Link href={repositoryUrl} isExternal>
              <Icon aria-label={"GitHub"} w={7} h={7} as={SiGithub} />
            </Link>
          )}
        </HStack>
        <Text fontSize="lg">{summary}</Text>
        <HStack spacing="4">
          <HStack spacing="1">
            <Icon as={AiFillStar} />
            <Text>{stargazers_count}</Text>
          </HStack>
          <HStack spacing="1">
            <Icon as={AiOutlineFork} />
            <Text>{forks}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default ProjectCard;
