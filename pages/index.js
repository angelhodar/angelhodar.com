import { Text, Container, useColorMode } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";

export default function Home() {
  const { colorMode } = useColorMode();

  const gradients = {
    light: "linear(to-l, #7928CA, #FF0080)",
    dark: "linear(to-l, #00F260,#0575E6)",
  };

  return (
    <PageContainer>
      <Text
        bgGradient={gradients[colorMode]}
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Hi, I'm Angel Hodar
      </Text>

      <Container maxW="xl" >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          urna tincidunt quam consequat ullamcorper ac ut augue. Nulla quis leo
          id nibh eleifend auctor sit amet id turpis. Morbi dui diam, dictum
          euismod euismod eget, ornare quis est. Etiam id metus non leo
          convallis molestie ac vehicula quam. Mauris lorem tortor, ultricies in
          diam nec, tincidunt ornare tellus. Curabitur eu posuere ex. Nam
          volutpat porttitor lorem, volutpat hendrerit erat pharetra in. Etiam
          ultrices leo mi, ut viverra ex feugiat eget. Donec consequat ligula
          vel augue lobortis, at vehicula purus tincidunt. Suspendisse nulla
          sem, faucibus at pharetra sit amet, consectetur sit amet mauris.
        </Text>
      </Container>
    </PageContainer>
  );
}
