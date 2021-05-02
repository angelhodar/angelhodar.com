import React from "react";
import Link from "next/link";
import { HStack, VStack, Icon, Text, Badge } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import ArticleTags from "./ArticleTags";
import Animation from "./Animation";
import dayjs from "dayjs";

const ArticleCard = ({ slug, frontMatter }) => {
  return (
    <Animation>
      <VStack align="start" my={4}>
        <Link href={`/blog/${slug}`}>
          <Text cursor="pointer" fontWeight="bold" fontSize="2xl">
            {frontMatter.title}{" "}
            <Badge fontSize="md" colorScheme="green">
              New!
            </Badge>
          </Text>
        </Link>
        <HStack>
          <Icon as={FaCalendarAlt} mb={1} />
          <Text fontSize="lg">
            {dayjs(frontMatter.date).format("MMMM DD, YYYY")}
          </Text>
        </HStack>
        <ArticleTags tags={frontMatter.tags} spacing="5px" />
        <Text fontSize="lg">{frontMatter.description}</Text>
      </VStack>
    </Animation>
  );
};

export default ArticleCard;
