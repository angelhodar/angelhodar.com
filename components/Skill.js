import { Icon, Text, VStack } from "@chakra-ui/react";
import { getSkillIcon } from "@/styles/icons";

const Skill = ({ keywords, name }) => {
  const [identifier] = keywords;
  const iconInfo = getSkillIcon(identifier);

  return (
    <VStack spacing={3}>
      <Icon as={iconInfo.icon} w={50} h={50} color={iconInfo.color} />
      <Text>{name}</Text>
    </VStack>
  );
};

export default Skill;
