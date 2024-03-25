import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    title: z.string(),
    cover: image().optional(),
    publishedAt: z.date(),
  })
});

export const collections = {
  blog: blogCollection,
};
