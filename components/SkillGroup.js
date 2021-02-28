import { VStack, Text, HStack } from "@chakra-ui/react";
import Skill from "./Skill";

const SkillGroup = ({ displayName, groupName, skills }) => {
  const filteredSkills = skills.filter((s) => s.keywords.includes(groupName));

  return (
    <VStack align="start" spacing={5}>
      <Text fontSize="2xl">{displayName}</Text>
      <HStack spacing={10}>
        {filteredSkills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </HStack>
    </VStack>
  );
};

export default SkillGroup;
