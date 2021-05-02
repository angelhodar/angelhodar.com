import React, { useState } from "react";
import PageContainer from "@/components/PageContainer";
import ArticleCard from "@/components/ArticleCard";
import FilterTags from "@/components/FilterTags";
import { VStack, Text, Input, Heading } from "@chakra-ui/react";
import { getAllNodes } from "next-mdx";

export default function Blog({ articles, totalTags: tags }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredArticles = articles.filter(({ frontMatter }) => {
    const { title, tags } = frontMatter;
    if (selectedTag) return tags.includes(selectedTag);
    return title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <PageContainer>
      <VStack w="100%" spacing={8}>
        <VStack spacing={5}>
          <Heading as="h1">Blog</Heading>
          <Text fontSize="2xl" maxW="lg" textAlign="center">
            Welcome to my blog. Here I will write about anything I discover
            related to technology
          </Text>
          <Input
            value={searchValue}
            variant="outline"
            size="lg"
            placeholder="Search articles..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <FilterTags
            tags={tags}
            onTagClicked={(tag) => setSelectedTag(tag)}
            justify="center"
          />
        </VStack>
        {!filteredArticles.length && (
          <Text fontSize="2xl" textAlign="center">
            No posts found
          </Text>
        )}
        <VStack align="start" w="100%" spacing={4}>
          {filteredArticles.map((article, i) => {
            return <ArticleCard key={i} {...article} />;
          })}
        </VStack>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const articles = await getAllNodes("article");
  const totalTags = articles.map(({ frontMatter }) => frontMatter.tags).flat();
  return { props: { articles, totalTags } };
}
