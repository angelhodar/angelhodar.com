import PageContainer from "@/components/PageContainer";
import ArticleAuthor from "@/components/ArticleAuthor";
import { Heading, Text, Tag, Image, HStack, VStack } from "@chakra-ui/react";
import data from "@/data/articles.json";

export default function Blog({ article }) {
  return (
    <PageContainer>
      <VStack w="100%" spacing={5}>
        <Heading>{article.title}</Heading>
        <ArticleAuthor {...article} />
        <HStack align="center" spacing={3}>
          {article.categories.map(({ category, color }, i) => (
            <Tag key={i} colorScheme={color}>
              {category}
            </Tag>
          ))}
        </HStack>
        <Image src="https://picsum.photos/800/400" />
        <Text>{article.description}</Text>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const paths = data.articles.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = data.articles.find((a) => a.slug === params.slug);
  return { props: { article } };
}
