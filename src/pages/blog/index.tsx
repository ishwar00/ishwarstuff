import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import * as styles from './blog.module.css'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <div className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.intro}>
          Most of my writing is about programming, technology, books, and math.
          There is no general theme to this blog, and that is by design :^)
        </p>
        
        <div className={styles.posts}>
          {data.allMdx.nodes.map((node) => (
            <article key={node.id} className={styles.postItem}>
              <Link to={`/blog/${node.frontmatter.slug}`} className={styles.postTitle}>
                {node.frontmatter.title}
              </Link>
              <span className={styles.postDate}>{node.frontmatter.date}</span>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query BlogQuery {
    allMdx(sort: { frontmatter: { date: DESC }}) {
        nodes {
          id
          excerpt(pruneLength: 50)
          parent {
            ... on File {
              id
              name
              changeTime(fromNow: true)
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
