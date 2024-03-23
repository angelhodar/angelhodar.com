import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  draft: z.boolean(),
  title: z.string(),
  slug: z.string(),
  cover: z.string(),
  publishedAt: z.date(),
  tags: z.array(z.string()),
});

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  blog: blogCollection,
};
