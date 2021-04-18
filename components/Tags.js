import { Tag, Wrap, WrapItem } from "@chakra-ui/react";

const Tags = ({ tags, onClick, ...props }) => {
  return (
    <Wrap {...props}>
      {tags.map(({ tag, color }) => (
        <WrapItem key={tag}>
          <Tag colorScheme={color} onClick={() => onClick?.(tag)}>{tag}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Tags;
