import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  excerpt: z.string(),
  author: z.string().default("MS & Asociados"),
  cover: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: articleSchema,
});

const blogTecnico = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog-tecnico" }),
  schema: articleSchema,
});

export const collections = { blog, "blog-tecnico": blogTecnico };
