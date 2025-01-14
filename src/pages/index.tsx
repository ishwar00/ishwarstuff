import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import * as styles from './blog/blog.module.css'
import { graphql, Link } from 'gatsby'
// Terra-cotta: #C65D4D - warm, desert-like color with good contrast
// Rich Sand: #9E7B5F - natural, earthy tone
// Desert Sage: #7A8B7F - muted green that works well with desert palette
// Dusty Blue: #5B7B9A - like a desert sky, adds nice contras

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Hallo!</h1>
      <p>
        I'm <b>Ishwar</b>, a{' '}
        <RoughNotation
          type="strike-through"
          color="#9E7B5F"
          show={true}
          strokeWidth={2}
          iterations={2}
          animationDuration={800}
          animate={false}
        >
          software engineer
        </RoughNotation>{' '}
        developer, worked on backend servers, compilers(frontend, and bit of
        backend), Virtual Machine etc.
      </p>
      <p>
        This is place on the internet to put my thoughts, opinions, projects,
        and other stuff that I find interesting.
      </p>

      <div className={styles.posts}>
        <h2>Latest Posts</h2>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} className={styles.postItem}>
            <Link
              to={`/blog/${node.frontmatter.slug}`}
              className={styles.postTitle}
            >
              {node.frontmatter.title}
            </Link>
            <span className={styles.postDate}>{node.frontmatter.date}</span>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 4) {
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

export const Head = () => <Seo title="Home Page" />

export default IndexPage
