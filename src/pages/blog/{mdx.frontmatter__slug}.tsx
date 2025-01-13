import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import * as styles from './blog.module.css'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className={styles.blogPost}>
        <header className={styles.postHeader}>
          <h1 className={styles.postTitle}>{data.mdx.frontmatter.title}</h1>
          <time className={styles.postDate}>{data.mdx.frontmatter.date}</time>
        </header>
        
        {image && (
          <div className={styles.heroImage}>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p className={styles.imageCredit}>
              Photo Credit:{" "}
              <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
          </div>
        )}
        
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost
