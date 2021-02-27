import { Box, VStack, Icon, Text, Badge, HStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";

const Education = ({
  institution,
  area,
  studyType,
  description,
  startDate,
  endDate,
}) => {
  return (
    <Box rounded="lg" borderWidth="2px">
      <VStack align="start" spacing={2} m={5}>
        <Badge fontSize="xl">
          {studyType} in {area}
        </Badge>
        <HStack>
          <Icon as={FaUniversity} />
          <Text fontSize="2lg">{institution}</Text>
        </HStack>
        <HStack>
          <Icon as={FaCalendarAlt} />
          <Text fontSize="lg">
            {startDate} - {endDate}
          </Text>
        </HStack>
        <Text fontSize="2sm">{description}</Text>
      </VStack>
    </Box>
  );
};

export default Education;
