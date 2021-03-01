import NextLink from "next/link";
import NextImage from "next/image";
import {
  Box,
  Text,
  Heading,
  Kbd,
  UnorderedList,
  OrderedList,
  Alert,
  AlertIcon,
  ListItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";

const Image = (props) => {
  return (
    <Box mt={4} rounded="lg" shadow="sm" overflow="hidden" lineHeight={0}>
      <NextImage {...props} />
    </Box>
  );
};

const BlockQuote = ({ children }) => {
  return (
    <Alert
      mt="4"
      status="info"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
    >
      <AlertIcon />
      {children.props.children}
    </Alert>
  );
};

const CustomLink = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={useColorModeValue("blue.500", "blue.200")} {...props} />
      </NextLink>
    );
  }

  return (
    <Link
      color={useColorModeValue("blue.500", "blue.200")}
      isExternal
      {...props}
    />
  );
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my="15px" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" my="15px" {...props} />,
  h3: (props) => <Heading as="h3" size="md" my="15px" {...props} />,
  h4: (props) => <Heading as="h4" size="sm" my="15px" {...props} />,
  strong: (props) => <Text as="strong" fontWeight="bold" {...props} />,
  code: CodeBlock,
  kbd: Kbd,
  blockquote: BlockQuote,
  p: (props) => <Text as="p" my="15px" {...props} />,
  ul: (props) => <UnorderedList {...props} ml="20px" />,
  ol: (props) => <OrderedList {...props} ml="20px" />,
  li: (props) => <ListItem m="2px" {...props} />,
  a: CustomLink,
  Image,
};

export default MDXComponents;
