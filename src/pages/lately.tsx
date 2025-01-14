import * as React from 'react'
import Layout from '../components/layout'
import * as styles from './lately.module.css'
import { graphql } from 'gatsby'

const LatelyPage = ({ data }) => {
  const lastModified = data.allFile.nodes[0].modifiedTime
  const date = new Date(lastModified)
  const monthName = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  return (
    <Layout pageTitle="Lately">
      <div className={styles.lately}>
        <h1 className={styles.title}>
          {monthName}, {year}
        </h1>

        <p className={styles.intro}>
          One thing at a time, all in. Currently focused on:
        </p>

        <div className={styles.activities}>
          <div className={styles.activity}>
            <span className={styles.bullet}>•</span>
            Building a compiler frontend in Rust - starting with lexical analysis
          </div>
        </div>

        <span className={styles.meta}>Last Updated: {lastModified}</span>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query LatelyQuery {
    allFile(filter: { name: { eq: "lately" } }) {
      nodes {
        id
        name
        modifiedTime(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export const Head = () => <title>Lately</title>

export default LatelyPage
