import { Box, VStack } from "@chakra-ui/react";
import ArticleMetadata from "@/components/ArticleMetadata";
import PageContainer from "@/components/PageContainer";

const BlogLayout = ({ frontMatter, children }) => {
  return (
    <PageContainer>
      <VStack w="100%" spacing={10}>
        <ArticleMetadata {...frontMatter} />
        <Box w="100%">{children}</Box>
      </VStack>
    </PageContainer>
  );
};

export default BlogLayout;
