import { VStack, Box, Text } from "@chakra-ui/react";

const LatestArticle = ({ title, description }) => {
  return (
    <Box rounded="lg" borderWidth="2px">
      <VStack align="start" m={5}>
        <Text fontWeight="bold" fontSize="2xl">
          {title}
        </Text>
        <Text fontSize="2sm">{description}</Text>
      </VStack>
    </Box>
  );
};

export default LatestArticle;
