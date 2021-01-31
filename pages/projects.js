import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/ProjectCard";
import { VStack, Heading, Text } from "@chakra-ui/react";
import getPortfolioData from "@/lib/portfolio";

export default function Projects({ projects }) {
  return (
    <PageContainer>
      <VStack w="100%" spacing={8}>
        <Heading as="h1">Projects</Heading>
        {!projects && "No posts found."}
        <VStack w="100%" align="center" spacing={4}>
          {projects.map((project, i) => {
            return <ProjectCard key={i} {...project} />;
          })}
        </VStack>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const { projects } = await getPortfolioData();
  return { props: { projects } };
}
