import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind()],
  output: "static",
  adapter: vercel({
    webAnalytics: true,
    speedInsights: true
  })
});