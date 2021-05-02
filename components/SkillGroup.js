import { Box, Flex, Heading, Wrap } from "@chakra-ui/react";
import Skill from "./Skill";

const SkillGroup = ({ displayName, groupName, skills }) => {
  const filteredSkills = skills.filter((s) => s.keywords.includes(groupName));

  return (
    <Box shadow="lg" rounded="lg" overflow="hidden" borderWidth="1px">
      <Flex
        align="center"
        justify="space-between"
        px="6"
        py="4"
        borderBottomWidth="1px"
      >
        <Heading as="h2" fontSize="lg">
          {displayName}
        </Heading>
      </Flex>
      <Wrap m="30px" spacing="40px">
        {filteredSkills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </Wrap>
    </Box>
  );
};

export default SkillGroup;
