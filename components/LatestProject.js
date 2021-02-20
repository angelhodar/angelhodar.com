import { VStack, Box, Link, Text } from "@chakra-ui/react";

const LatestProject = ({ url, displayName, description }) => {

  const getTruncatedDescription = (description) => {
    if (description.length < 300) return description;
    else return `${description.substring(0, 300)}...`;
  }

  return (
    <Box rounded="lg" borderWidth="2px">
      <VStack align="start" m={5}>
        <Link href={url} isExternal>
          <Text fontWeight="bold" fontSize="2xl">
            {displayName}
          </Text>
        </Link>
        <Text fontSize="2sm">{getTruncatedDescription(description)}</Text>
      </VStack>
    </Box>
  );
};

export default LatestProject;
