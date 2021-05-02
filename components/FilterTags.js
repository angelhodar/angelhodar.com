import React, { useState } from "react";
import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import Animation from "./Animation";
import { tagsColors } from "@/styles/colors";

const FilterTags = ({ tags, onTagClicked, ...props }) => {
  const [currentSelectedTag, setCurrentSelectedTag] = useState("");
  const [lastSelectedTag, setLastSelectedTag] = useState("");

  const animations = {
    default: {
      initialState: { scale: 0 },
      finalState: { scale: 1, opacity: 1 },
      duration: 1,
    },
    focus: {
      initialState: { opacity: 0.5 },
      finalState: { opacity: 1 },
    },
    unfocus: {
      initialState: { opacity: 1 },
      finalState: { opacity: 0.5 },
    },
  };

  const getTagAnimationProps = (tag) => {
    if (!currentSelectedTag && !lastSelectedTag) return animations.default;
    if (!currentSelectedTag || tag === currentSelectedTag)
      return animations.focus;
    return animations.unfocus;
  };

  const handleTagSelected = (tag) => {
    const sameTag = tag === currentSelectedTag;
    const newTag = sameTag ? "" : tag;
    setLastSelectedTag(currentSelectedTag);
    setCurrentSelectedTag(newTag);
    onTagClicked(newTag);
  };

  return (
    <Wrap {...props}>
      {tags.map((tag) => (
        <WrapItem cursor="pointer" key={tag}>
          <Animation {...getTagAnimationProps(tag)}>
            <Tag
              colorScheme={tagsColors[tag]}
              onClick={() => handleTagSelected(tag)}
            >
              {tag}
            </Tag>
          </Animation>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default FilterTags;
