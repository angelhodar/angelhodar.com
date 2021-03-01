import { Icon, Text, VStack, WrapItem, useColorModeValue } from "@chakra-ui/react";
import { getSkillIcon } from "@/styles/icons";

const Skill = ({ keywords, name }) => {
  const [identifier] = keywords;
  const { icon, lightColor, darkColor } = getSkillIcon(identifier);

  return (
    <WrapItem>
      <VStack spacing={3}>
        <Icon as={icon} w={50} h={50} color={useColorModeValue(lightColor, darkColor)} />
        <Text>{name}</Text>
      </VStack>
    </WrapItem>
  );
};

export default Skill;
