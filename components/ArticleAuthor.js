import React from "react";
import { Flex, HStack, Avatar, Text } from "@chakra-ui/react";

const ArticleAuthor = ({ author, date }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="100%">
      <HStack>
        <Avatar src={author.avatar} h={10} w={10} />
        <Text fontSize="md">{author.name}</Text>
      </HStack>
      <Text fontSize="md">
        {date} • 8 min
      </Text>
    </Flex>
  );
};

export default ArticleAuthor;
