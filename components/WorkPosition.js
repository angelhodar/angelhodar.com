import {
  Box,
  VStack,
  Icon,
  Text,
  Stack,
  Link,
  HStack,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaCalendarAlt, FaRegBuilding } from "react-icons/fa";
import Animation from "./Animation";
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
    <Animation>
      <Box rounded="lg" borderWidth="2px">
        <VStack align="start" spacing={2} m={5}>
          <Text fontSize="2xl">{position}</Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            align="center"
            spacing={2}
          >
            <HStack spacing={2}>
              <Icon as={FaRegBuilding} mb={1} />
              <Text fontSize="lg">
                {company} ({location})
              </Text>
            </HStack>
            <Link href={website} isExternal>
              {website} <ExternalLinkIcon />
            </Link>
          </Stack>
          <HStack>
            <Icon as={FaCalendarAlt} mb={1} />
            <Text fontSize="lg">
              {dayjs(startDate).format("MMM YYYY")} -{" "}
              {endDate === "" ? "Present" : dayjs(endDate).format("MMM YYYY")}
            </Text>
          </HStack>
          <Text fontSize="2sm">{summary}</Text>
          <Wrap spacing="10px">
            {highlights.map((highlight, i) => (
              <WrapItem key={i}>
                <Tag variant="solid">{highlight}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </Box>
    </Animation>
  );
};

export default WorkPosition;
