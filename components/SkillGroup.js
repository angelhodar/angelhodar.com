import { VStack, Text, SimpleGrid } from "@chakra-ui/react";
import Skill from "./Skill";

const SkillGroup = ({ displayName, groupName, skills }) => {
  const filteredSkills = skills.filter((s) => s.keywords.includes(groupName));

  return (
    <VStack align="start" spacing={5}>
      <Text fontSize="2xl">{displayName}</Text>
      <SimpleGrid columns={{ base: 2, md: filteredSkills.length }} spacing={5}>
        {filteredSkills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default SkillGroup;
