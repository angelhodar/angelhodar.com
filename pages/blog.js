import PageContainer from "@/components/PageContainer";
import ArticleCard from "@/components/ArticleCard";
import { VStack, Text, Heading } from "@chakra-ui/react";
import { getAllNodes } from "next-mdx";

export default function Blog({ articles }) {
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
        {!articles.length && "No posts found."}
        <VStack w="100%" align="center" spacing={4}>
          {articles.map((article, i) => {
            console.log(article);
            return <ArticleCard key={i} {...article} />;
          })}
        </VStack>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const articles = await getAllNodes("article");
  return { props: { articles } };
}
