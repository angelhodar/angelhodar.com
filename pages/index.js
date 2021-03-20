import {
  VStack,
  HStack,
  Heading,
  Text,
  Icon,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import LatestProject from "../components/LatestProject";
import LatestArticle from "../components/LatestArticle";
import getPortfolioData from "@/lib/portfolio";
import { getArticlesFrontMatter } from "@/lib/mdx";
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
      <VStack spacing={8}>
        <Text
          bgGradient={gradients[colorMode]}
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
          {projects.map((project, i) => (
            <LatestProject key={i} {...project} />
          ))}
        </VStack>
        <VStack align="start" spacing={5}>
          <HStack spacing={5}>
            <Icon as={RiArticleLine} w={10} h={10} />
            <Heading as="h1">Latest Articles</Heading>
          </HStack>
          <Divider />
          {articles.map((article, i) => (
            <LatestArticle key={i} {...article} />
          ))}
        </VStack>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const { projects } = await getPortfolioData();
  const articles = await getArticlesFrontMatter();
  return {
    props: { projects: projects.slice(0, 4), articles: articles.slice(0, 4) },
  };
}
