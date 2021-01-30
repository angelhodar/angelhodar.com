import {
  VStack,
  Wrap,
  Tag,
  WrapItem,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";

export default function Home() {
  const { colorMode } = useColorMode();

  const gradients = {
    light: "linear(to-l, #7928CA, #FF0080)",
    dark: "linear(to-l, #00F260,#0575E6)",
  };

  const like = ["JavaScript", "Python", "Docker", "Cloud", "Automation"];
  const dislike = ["Tonto el que lo lea", "Old Technology", "Spaguetti Code"];

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
        <VStack align="start">
          <Heading as="h1">About</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis urna in mauris suscipit efficitur eget sit amet enim. Mauris
            venenatis ex a magna posuere, ac accumsan orci pellentesque. Proin
            elementum, sapien nec blandit aliquet, dolor justo placerat mi, sed
            auctor mi ipsum ac lacus.
          </Text>
        </VStack>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3" size="lg">
            Work
          </Heading>
          <Text>
            Suspendisse ullamcorper cursus massa id ultricies. Vestibulum
            condimentum, erat at efficitur consequat, massa purus placerat
            risus, in malesuada quam justo sit amet nisi. Donec a arcu luctus,
            consectetur velit hendrerit, imperdiet leo. Sed fermentum nunc diam,
            finibus aliquet nibh accumsan at.
          </Text>
        </VStack>
        <VStack align="center" spacing={4}>
          <Heading as="h2">😁</Heading>
          <Wrap>
            {like.map((el) => (
              <WrapItem key={el}>
                <Tag
                  size="lg"
                  variant="subtle"
                  colorScheme={"green"}
                  rounded="lg"
                >
                  {el}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
        <VStack align="center" spacing={4}>
          <Heading as="h2">😒</Heading>
          <Wrap>
            {dislike.map((el) => (
              <WrapItem key={el}>
                <Tag
                  size="lg"
                  variant="subtle"
                  colorScheme={"red"}
                  rounded="lg"
                >
                  {el}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </VStack>
    </PageContainer>
  );
}
