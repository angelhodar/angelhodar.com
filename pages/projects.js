import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/ProjectCard";
import { SimpleGrid, VStack, Heading } from "@chakra-ui/react";
import getPortfolioData from "@/lib/portfolio";

export default function Projects({ projects }) {
  return (
    <PageContainer>
      <VStack w="100%" align="center" spacing={8}>
        <Heading as="h1">Projects</Heading>
        {!projects && "No posts found."}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, i) => {
            return <ProjectCard key={i} {...project} />;
          })}
        </SimpleGrid>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const { projects } = await getPortfolioData();
  return { props: { projects } };
}
