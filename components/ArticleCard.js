import React from "react";
import Link from "next/link";
import { Box, VStack, Text, Badge } from "@chakra-ui/react";
import Tags from "./Tags";
import dayjs from "dayjs";

const ArticleCard = ({ slug, date, tags, description, title }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box as="a" cursor="pointer" w="100%">
        <VStack align="start" p={4} rounded="xl" borderWidth="1px">
          <Text fontWeight="bold" fontSize="2xl">
            {title}{" "}
            <Badge fontSize="md" colorScheme="green">
              New!
            </Badge>
          </Text>
          <Text fontSize="md">{dayjs(date).format("MMMM DD, YYYY")}</Text>
          <Tags tags={tags} spacing="5px" />
          <Text fontSize="lg">{description}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default ArticleCard;
