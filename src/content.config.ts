import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

export const categories = ['engineering', 'life'] as const

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(categories),
    // Drafts show on the local dev server only, never in a production build.
    draft: z.boolean().default(false)
  })
})

export const collections = { posts }

export const isVisible = (post: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !post.data.draft
