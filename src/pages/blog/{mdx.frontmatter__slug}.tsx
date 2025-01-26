import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import * as styles from './blog.module.css'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className={styles.blogPost}>
        <header className={styles.postHeader}>
          <h1 className={styles.postTitle}>{data.mdx.frontmatter.title}</h1>
          <time className={styles.postDate}>{data.mdx.frontmatter.date}</time>
        </header>

        <div className={styles.postContent}>
          {children}
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPost
