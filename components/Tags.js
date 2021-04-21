import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import Animation from "./Animation";

const Tags = ({ tags, onClick, animate = false, ...props }) => {
  return (
    <Wrap {...props}>
      {tags.map(({ tag, color }) => (
        <WrapItem key={tag}>
          {animate ? (
            <Animation
              initialState={{ scale: 0 }}
              finalState={{ scale: 1 }}
              duration={Math.random() + 1}
            >
              <Tag colorScheme={color} onClick={() => onClick?.(tag)}>
                {tag}
              </Tag>
            </Animation>
          ) : (
            <Tag colorScheme={color} onClick={() => onClick?.(tag)}>
              {tag}
            </Tag>
          )}
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Tags;
