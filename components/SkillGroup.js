import { VStack, Text, Wrap } from "@chakra-ui/react";
import Skill from "./Skill";

const SkillGroup = ({ displayName, groupName, skills }) => {
  const filteredSkills = skills.filter((s) => s.keywords.includes(groupName));

  return (
    <VStack align="start" spacing={5}>
      <Text fontSize="2xl">{displayName}</Text>
      <Wrap spacing="30px">
        {filteredSkills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </Wrap>
    </VStack>
  );
};

export default SkillGroup;
