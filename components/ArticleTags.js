import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { tagsColors } from "@/styles/colors";

const ArticleTags = ({ tags, ...props }) => {
  return (
    <Wrap {...props}>
      {tags.map((tag) => (
        <WrapItem key={tag}>
          <Tag colorScheme={tagsColors[tag]}>{tag}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ArticleTags;
