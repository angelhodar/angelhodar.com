import React from "react";
import {
  VStack,
  Stack,
  Image,
  Heading,
  HStack,
  Avatar,
  Text,
} from "@chakra-ui/react";
import Tags from "./Tags";
import dayjs from "dayjs";

const ArticleAuthor = ({ title, tags, thumbnail, author, date }) => {
  return (
    <VStack spacing="5">
      <Heading align="center">{title}</Heading>
      <Stack
        spacing={{ base: 5, md: 50 }}
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <HStack spacing="3">
          <Avatar src={author.avatar} h={10} w={10} />
          <Text fontSize="lg">{author.name}</Text>
        </HStack>
        <HStack display={{ base: "flex", md: "none" }} spacing={5}>
          <Text fontSize="md">{dayjs(date).format("MMMM DD, YYYY")}</Text>
          <Text fontSize="lg">•</Text>
          <Text fontSize="md">8 min read</Text>
        </HStack>
        <Text display={{ base: "none", md: "flex" }} fontSize="md">
          {dayjs(date).format("MMMM DD, YYYY")}
        </Text>
        <Text display={{ base: "none", md: "flex" }} fontSize="md">
          8 min read
        </Text>
      </Stack>
      <Tags tags={categories} spacing="3px" />
      <Image src={thumbnail} />
    </VStack>
  );
};

export default ArticleAuthor;
