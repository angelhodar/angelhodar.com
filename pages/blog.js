import PageContainer from "@/components/PageContainer";
import ArticleCard from "@/components/ArticleCard";
import { VStack, Text, Heading } from "@chakra-ui/react";
import data from "@/data/articles.json";

export default function Blog() {
  return (
    <PageContainer>
      <VStack w="100%" spacing={8}>
        <VStack spacing={5}>
          <Heading as="h1">Blog</Heading>
          <Text fontSize="2xl" maxW="lg" textAlign="center">
            Welcome to my blog. Here I will write about anything I discover
            related to technology
          </Text>
        </VStack>
        {!data.articles.length && "No posts found."}
        <VStack w="100%" align="center" spacing={4}>
          {data.articles.map((article, i) => {
            return <ArticleCard key={i} {...article} />;
          })}
        </VStack>
      </VStack>
    </PageContainer>
  );
}
