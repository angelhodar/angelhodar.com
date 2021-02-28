import { Box, VStack, Icon, Text, Link, HStack, Tag } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaCalendarAlt, FaRegBuilding } from "react-icons/fa";
import dayjs from "dayjs";

const WorkPosition = ({
  company,
  position,
  website,
  summary,
  location,
  highlights,
  startDate,
  endDate,
}) => {
  return (
    <Box rounded="lg" borderWidth="2px">
      <VStack align="start" spacing={2} m={5}>
        <Text fontSize="2xl">{position}</Text>
        <HStack spacing={2}>
          <Icon as={FaRegBuilding} mb={1} />
          <Text fontSize="lg">
            {company} ({location}) •
          </Text>
          <Link href={website} isExternal>
            {website} <ExternalLinkIcon />
          </Link>
        </HStack>
        <HStack>
          <Icon as={FaCalendarAlt} mb={1} />
          <Text fontSize="lg">
            {dayjs(startDate).format('MMM YYYY')} - {endDate === "" ? "Present" : dayjs(endDate).format('MMM YYYY')}
          </Text>
        </HStack>
        <Text fontSize="2sm">{summary}</Text>
        <HStack spacing={2}>
          {highlights.map((highlight, i) => (
            <Tag key={i}>{highlight}</Tag>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default WorkPosition;
