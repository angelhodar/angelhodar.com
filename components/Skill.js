import {
  Icon,
  Text,
  VStack,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { getSkillIcon } from "@/styles/icons";
import Animation from "./Animation";

const Skill = ({ keywords, name }) => {
  const [identifier] = keywords;
  const { icon, lightColor, darkColor } = getSkillIcon(identifier);

  return (
    <Animation
      initialState={{ scale: 0 }}
      finalState={{ scale: 1 }}
      duration={0.5}
    >
      <WrapItem>
        <VStack spacing={3}>
          <Icon
            as={icon}
            w={50}
            h={50}
            color={useColorModeValue(lightColor, darkColor)}
          />
          <Text>{name}</Text>
        </VStack>
      </WrapItem>
    </Animation>
  );
};

export default Skill;
