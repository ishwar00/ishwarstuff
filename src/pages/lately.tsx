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
        <h1>
          {monthName}, {year}
        </h1>

        <p className={styles.intro}>Things keeping me occupied lately...</p>

        <ul className={styles.list}>
          <li>
            Reading "Designing Data-Intensive Applications" - taking notes on
            distributed systems
          </li>

          <li>
            Building a compiler frontend in Rust - starting with lexical
            analysis
          </li>

          <li>
            Got deep into WebAssembly internals - fascinating how the stack
            machine works
          </li>

          <li>Writing more about systems design and backend architecture</li>
        </ul>

        <span className={styles.meta}>Last Updated: {lastModified}</span>
      </div>{' '}
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
