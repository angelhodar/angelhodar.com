import React from "react";
import Link from "next/link";
import { Box, VStack, Text, Tag, Badge, HStack } from "@chakra-ui/react";

const BlogCard = ({ slug, date, categories, description, title }) => {
  return (
    <Link href={`/`}>
      <Box as="a" cursor="pointer" w="75%">
        <VStack align="start" p={4} rounded="xl" borderWidth="1px">
          <HStack>
            <Text fontWeight="bold" fontSize="2xl">
              {title}
            </Text>
            <Badge size="md" mt={1} colorScheme="green">
              New
            </Badge>
          </HStack>
          <HStack spacing={3}>
            {categories.map(({ category, color }, i) => (
              <Tag key={i} colorScheme={color}>
                {category}
              </Tag>
            ))}
          </HStack>
          <Text fontSize="lg">{description}</Text>
          <Text fontSize="xs">{date}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default BlogCard;
