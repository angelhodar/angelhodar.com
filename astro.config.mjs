import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import {
  transformerNotationDiff,
  transformerNotationHighlight
} from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), mdx()],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "catppuccin-frappe",
      transformers: [transformerNotationDiff(), transformerNotationHighlight()]
    }
  }
});