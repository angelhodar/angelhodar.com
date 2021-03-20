import { Tag, Wrap, WrapItem } from "@chakra-ui/react";

const Tags = ({ tags, ...props }) => {
  return (
    <Wrap {...props}>
      {tags.map(({ tag, color }) => (
        <WrapItem key={tag}>
          <Tag colorScheme={color}>{tag}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Tags;
