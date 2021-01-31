import React from "react";
import Link from "next/link";
import { Flex, Box, VStack, HStack, Text, Tag, Badge } from "@chakra-ui/react";

const ArticleCard = ({ slug, date, categories, description, title }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box as="a" cursor="pointer" w="100%">
        <VStack align="start" p={4} rounded="xl" borderWidth="1px">
          <Text fontWeight="bold" fontSize="2xl">
            {title}
          </Text>
          <Flex alignItems="center">
            <HStack spacing="3">
              <Text fontSize="md">{date}</Text>
              <Badge mb="1" size="md" colorScheme="green">
                New
              </Badge>
            </HStack>
          </Flex>
          <HStack spacing={3}>
            {categories.map(({ category, color }, i) => (
              <Tag key={i} colorScheme={color}>
                {category}
              </Tag>
            ))}
          </HStack>
          <Text fontSize="lg">{description}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default ArticleCard;
