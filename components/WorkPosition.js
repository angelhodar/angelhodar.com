import { Box, VStack, Icon, Text, Badge, HStack } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const WorkPosition = ({
  company,
  position,
  summary,
  location,
  highlights,
  startDate,
  endDate,
}) => {
  return (
    <Box rounded="lg" borderWidth="2px">
      <VStack align="start" spacing={2} m={5}>
        <HStack>
          <Badge fontSize="2xl">{position}</Badge>
          <Text fontSize="lg">
            at {company} ({location})
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaCalendarAlt} />
          <Text fontSize="lg">
            {startDate} - {endDate === "" ? "Current" : endDate}
          </Text>
        </HStack>
        <Text fontSize="2sm">{summary}</Text>
      </VStack>
    </Box>
  );
};

export default WorkPosition;
