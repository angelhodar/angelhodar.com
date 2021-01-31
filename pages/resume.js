import PageContainer from "@/components/PageContainer";
import ResumeSection from "@/components/ResumeSection";
import { Heading, VStack } from "@chakra-ui/react";
import getPortfolioData from "@/lib/portfolio";

export default function Resume({ basics, work, skills, education }) {
  return (
    <PageContainer>
      <VStack align="start" w="100%" spacing={8}>
        <Heading as="h1">Resume</Heading>
        <ResumeSection title="Basics" data={basics} />
        <ResumeSection title="Skills" data={skills} />
        <ResumeSection title="Education" data={education} />
        <ResumeSection title="Experience" data={work} />
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const portfolioSchema = await getPortfolioData();
  return { props: { portfolioSchema } };
}
