import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/vsLight";
import darkTheme from "prism-react-renderer/themes/vsDark";

const CodeBlock = ({ className, children }) => {
  const bgColor = useColorModeValue("white", "#1A202C");
  const theme = useColorModeValue(lightTheme, darkTheme);
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box rounded="lg" borderWidth="2px">
          <Box
            as="pre"
            m="10px"
            className={className}
            style={{
              ...style,
              whiteSpace: "pre-wrap",
              backgroundColor: bgColor,
            }}
          >
            {tokens.map((line, i) => {
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </Box>
        </Box>
      )}
    </Highlight>
  );
};

export default CodeBlock;
