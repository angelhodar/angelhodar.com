import { VStack, Box, Text } from "@chakra-ui/react";

const LatestArticle = ({ frontMatter }) => {
  return (
    <Box rounded="lg" borderWidth="2px">
      <VStack align="start" m={5}>
        <Text fontWeight="bold" fontSize="2xl">
          {frontMatter.title}
        </Text>
        <Text fontSize="2sm">{frontMatter.description}</Text>
      </VStack>
    </Box>
  );
};

export default LatestArticle;
