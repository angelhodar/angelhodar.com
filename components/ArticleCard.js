import React from "react";
import Link from "next/link";
import { Flex, Box, VStack, Text, Tag, Badge, HStack } from "@chakra-ui/react";

const BlogCard = ({ slug, date, categories, description, title }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box as="a" cursor="pointer" w="75%">
        <VStack align="start" p={4} rounded="xl" borderWidth="1px">
          <Text fontWeight="bold" fontSize="2xl">
            {title}
          </Text>
          <HStack spacing={3}>
            {categories.map(({ category, color }, i) => (
              <Tag key={i} colorScheme={color}>
                {category}
              </Tag>
            ))}
          </HStack>
          <Text fontSize="lg">{description}</Text>
          <Flex justifyContent="space-between" w="100%">
            <Text fontSize="sm">{date}</Text>
            <Badge size="md" colorScheme="green">
              New
            </Badge>
          </Flex>
        </VStack>
      </Box>
    </Link>
  );
};

export default BlogCard;
