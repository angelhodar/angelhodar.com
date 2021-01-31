import {
  Box,
  Heading,
  Text,
  Tag,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import ArticleAuthor from "@/components/ArticleAuthor";
import PageContainer from "@/components/PageContainer";

const BlogLayout = ({ frontMatter, children }) => {
  return (
    <PageContainer>
      <VStack w="100%" spacing={5}>
        <Heading>{frontMatter.title}</Heading>
        <Image src={frontMatter.thumbnail} />
        <ArticleAuthor {...frontMatter} />
        <Text>{frontMatter.description}</Text>
        <HStack w="100%" align="start" spacing={3}>
          {frontMatter.categories.map(({ category, color }, i) => (
            <Tag key={i} colorScheme={color}>
              {category}
            </Tag>
          ))}
        </HStack>
        <Box w="100%">{children}</Box>
      </VStack>
    </PageContainer>
  );
};

export default BlogLayout;
