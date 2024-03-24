import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), mdx()],
  output: "static",
  adapter: vercel({
    webAnalytics: true,
    speedInsights: true
  })
});