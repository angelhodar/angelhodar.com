import React from "react";
import { VStack, Icon, HStack, Text } from "@chakra-ui/react";

const ResumeSection = ({ title, icon, children }) => {
  return (
    <VStack align="start" spacing={8}>
      <HStack spacing={5}>
        <Icon as={icon} w={10} h={10} />
        <Text fontSize="3xl">{title}</Text>
      </HStack>
      {children}
    </VStack>
  );
};

export default ResumeSection;
