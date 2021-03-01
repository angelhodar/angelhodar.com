import React from "react";
import Link from "next/link";
import {
  Flex,
  Box,
  VStack,
  HStack,
  Text,
  Tag,
  Badge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import dayjs from "dayjs";

const ArticleCard = ({ slug, date, categories, description, title }) => {
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
          <Wrap spacing="5px">
            {categories.map(({ category, color }, i) => (
              <WrapItem key={i}>
                <Tag colorScheme={color}>{category}</Tag>
              </WrapItem>
            ))}
          </Wrap>
          <Text fontSize="lg">{description}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default ArticleCard;
