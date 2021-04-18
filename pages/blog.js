import React, { useState } from "react";
import PageContainer from "@/components/PageContainer";
import ArticleCard from "@/components/ArticleCard";
import Tags from "@/components/Tags";
import { VStack, Text, Input, Heading } from "@chakra-ui/react";
import { getAllNodes } from "next-mdx";

export default function Blog({ articles }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagSelected = (tag) => {
    if (tag === selectedTag) setSelectedTag("");
    else setSelectedTag(tag);
  };

  const tags = articles.map(({ frontMatter }) => frontMatter.tags).flat();

  const filteredArticles = articles.filter(({ frontMatter }) => {
    if (selectedTag)
      return frontMatter.tags.map(({ tag }) => tag).includes(selectedTag);
    return frontMatter.title.toLowerCase().includes(searchValue.toLowerCase());
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
          <Tags tags={tags} onClick={handleTagSelected} spacing="5px" />
        </VStack>
        {!filteredArticles.length && (
          <Text fontSize="2xl" textAlign="center">
            No posts found
          </Text>
        )}
        <VStack w="100%" align="center" spacing={4}>
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
  return { props: { articles } };
}
