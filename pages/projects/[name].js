import PageContainer from "@/components/PageContainer";
import { Heading, Text, Image, VStack } from "@chakra-ui/react";
import getPortfolioData from "@/lib/portfolio";

export default function Project({ project }) {
  return (
    <PageContainer>
      <VStack w="100%" spacing={5}>
        <Heading>{project.displayName}</Heading>
        <Image src="https://picsum.photos/800/400" />
        <Text>{project.description || project.summary}</Text>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const { projects } = await getPortfolioData();
  
  const paths = projects.map(({ name }) => {
    return {
      params: { name },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { projects } = await getPortfolioData();
  const project = projects.find((p) => p.name === params.name);
  return { props: { project } };
}
