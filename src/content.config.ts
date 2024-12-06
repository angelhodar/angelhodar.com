import { glob } from 'astro/loaders';
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    title: z.string(),
    description: z.string().optional(),
    cover: image().optional(),
    publishedAt: z.date(),
  })
});

export const collections = { blog };
