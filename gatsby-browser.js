// @ts-check
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from './src/components/code'
import { RoughNotation } from 'react-rough-notation'

const MyParagraph = (props) => (
  <p style={{ fontSize: '1rem', lineHeight: 1.8 }} {...props} />
)

const MyRoughNotation = (props) => <RoughNotation {...props} />

const MyLink = (props) => (
  <a
    style={{ color: '#9E7B5F', textDecoration: 'dotted underline' }}
    {...props}
  />
)

const code = (props) => {
  const styles = {
    border: '1px solid #dcdcdc',
    backgroundColor: '#ffffff',
    borderRadius: '3px',
    padding: '0px 4px',
    fontSize: '0.8em',
    margin: '0px 3px', //
    verticalAlign: 'middle',
    display: 'inline-block'
  }
  return <code style={styles} {...props} />
}

const components = {
  pre: (props) => <Code {...props} />,
  wrapper: ({ children }) => <>{children}</>,
  p: MyParagraph,
  code,
  a: MyLink,
  RoughNotation: MyRoughNotation
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
