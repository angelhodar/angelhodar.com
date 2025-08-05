import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import {
  transformerNotationDiff,
  transformerNotationHighlight
} from '@shikijs/transformers'
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "catppuccin-frappe",
      transformers: [transformerNotationDiff(), transformerNotationHighlight()]
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});