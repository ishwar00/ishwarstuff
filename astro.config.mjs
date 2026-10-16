// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://ishwarstuff.vercel.app',
  integrations: [mdx()],
  markdown: {
    // Straight quotes, like a terminal; curly ones look out of place in a monospace font.
    smartypants: false,
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' }
    }
  },
  // Keep old links working.
  redirects: {
    '/blog': '/',
    '/lately': '/',
    '/blog/zig-catch-pattern-in-js': '/engineering/zig-catch-pattern-in-js'
  }
})
