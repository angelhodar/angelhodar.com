import { Box, VStack, Icon, Text, HStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import dayjs from "dayjs";

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
        <Text fontSize="xl" fontWeight="bold">
          {studyType} in {area}
        </Text>
        <HStack>
          <Icon as={FaUniversity} mb={1}/>
          <Text fontSize="2lg">{institution}</Text>
        </HStack>
        <HStack>
          <Icon as={FaCalendarAlt} mb={1} />
          <Text fontSize="lg">
            {dayjs(startDate).format("MMM YYYY")} - {dayjs(endDate).format("MMM YYYY")}
          </Text>
        </HStack>
        <Text fontSize="2sm">{description}</Text>
      </VStack>
    </Box>
  );
};

export default Education;
