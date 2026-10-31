import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { isVisible } from '../content.config'

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// RSS 2.0 feed of every published post, newest first. Linked from <head> for feed readers.
export async function GET({ site }: APIContext) {
  const posts = (await getCollection('posts', isVisible)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )
  const items = posts
    .map((p) => {
      const url = new URL(`/${p.data.category}/${p.id}`, site).href
      return `<item><title>${escape(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><category>${p.data.category}</category></item>`
    })
    .join('')
  const home = new URL('/', site).href
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Ishwar</title><link>${home}</link><description>Ishwar writes things down: some engineering, some life.</description>${items}</channel></rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
