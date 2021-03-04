import { extendTheme } from "@chakra-ui/react";

let initialColorMode = "light";

if (typeof window !== "undefined") {
  // Load saved one if page has previously tweaked theme mode
  const savedColorMode = localStorage.getItem("chakra-ui-color-mode");
  initialColorMode = savedColorMode || initialColorMode;
}

const config = { initialColorMode, useSystemColorMode: false };

export default extendTheme({ config });
