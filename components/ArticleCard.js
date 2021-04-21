import React from "react";
import Link from "next/link";
import { Box, HStack, VStack, Icon, Text, Badge } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import Tags from "./Tags";
import Animation from "./Animation";
import dayjs from "dayjs";

const ArticleCard = ({ slug, frontMatter }) => {
  return (
    <Animation>
      <Box cursor="pointer" w="100%">
        <VStack align="start" p={4} rounded="xl" borderWidth="1px">
          <Link href={`/blog/${slug}`}>
            <Text fontWeight="bold" fontSize="2xl">
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
          <Tags tags={frontMatter.tags} spacing="5px" />
          <Text fontSize="lg">{frontMatter.description}</Text>
        </VStack>
      </Box>
    </Animation>
  );
};

export default ArticleCard;
