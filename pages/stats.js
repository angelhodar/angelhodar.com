import PageContainer from "@/components/PageContainer";
import { VStack, Wrap, Heading, Tag, WrapItem } from "@chakra-ui/react";

export default function Stats() {

  const like = ["JavaScript", "Python", "Docker", "Cloud", "Automation"];
  const dislike = ["Tonto el que lo lea", "Old Technology", "Spaguetti Code"];

  return (
    <PageContainer>
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
    </PageContainer>
  );
}