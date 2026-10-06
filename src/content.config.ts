import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

export const categories = ['engineering', 'life'] as const

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(categories)
  })
})

export const collections = { posts }
