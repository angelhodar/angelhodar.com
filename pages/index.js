import {
  VStack,
  HStack,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import getPortfolioData from "@/lib/portfolio";
import { getAllNodes } from "next-mdx";
import { RiArticleLine } from "react-icons/ri";
import { GoProject } from "react-icons/go";

export default function Home({ projects, articles }) {
  const { colorMode } = useColorMode();

  const gradients = {
    light: "linear(to-l, #f7b733, #fc4a1a)",
    dark: "linear(to-l, #00F260,#0575E6)",
  };

  return (
    <PageContainer>
      <VStack spacing={10}>
        <Text
          bgGradient={gradients[colorMode]}
          align="center"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Hi, I'm Angel Hodar
        </Text>
        <Text fontSize="xl">
          Welcome to my personal website. Here you can find a lot about me, like
          my interests, blog posts about things I learn about technology, my
          personal education and work until now and some info about my activity
          on the internet
        </Text>
        <VStack align="start" spacing={5}>
          <HStack spacing={5}>
            <Icon as={GoProject} w={10} h={10} />
            <Heading as="h1">Main Projects</Heading>
          </HStack>
          <Divider />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects.map((project, i) => {
              return <ProjectCard key={i} {...project} />;
            })}
          </SimpleGrid>
        </VStack>
        <VStack align="start" spacing={5}>
          <HStack spacing={5}>
            <Icon as={RiArticleLine} w={10} h={10} />
            <Heading as="h1">Latest Articles</Heading>
          </HStack>
          <Divider />
          {articles.map((article, i) => (
            <ArticleCard key={i} {...article} />
          ))}
        </VStack>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const { projects } = await getPortfolioData();
  const articles = await getAllNodes("article");
  return { props: { projects: projects.slice(0, 4), articles } };
}
