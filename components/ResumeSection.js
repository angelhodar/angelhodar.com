import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const ResumeSection = ({ title }) => {
  return (
    <VStack align="start">
      <Heading as="h1">{title}</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        urna in mauris suscipit efficitur eget sit amet enim. Mauris venenatis
        ex a magna posuere, ac accumsan orci pellentesque. Proin elementum,
        sapien nec blandit aliquet, dolor justo placerat mi, sed auctor mi ipsum
        ac lacus.
      </Text>
    </VStack>
  );
};

export default ResumeSection;
