// @ts-check
import remarkGfm from 'remark-gfm'

const config = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://ishwarstuff.vercel.app`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    SSR_DEV: false
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `./blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `page`,
        path: `./src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        },
        extensions: [`.mdx`, `.md`]
      }
    },
  ]
}

export default config
