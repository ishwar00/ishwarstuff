import React from 'react'
import { Highlight, themes, Prism } from 'prism-react-renderer'
import rangeParser from 'parse-numeric-range'

(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-zig")

/**
 * Reference: https://annarossetti.com/articles/custom-code-blocks/
 */

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw)
  if (lineNumbers) {
    return (index) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const Code = (props: any) => {
  const className = props.children.props.className || ''
  const code = props.children.props.children.trim()
  const language = className.replace(/language-/, '')
  const file = props.children.props.file
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ''
  )
  // const theme = themes.ultramin
  const theme = themes.nightOwlLight
  theme.styles = theme.styles.map((s) => {
    return {
      ...s,
      style: {
        ...s.style,
        fontStyle: 'normal'
      }
    }
  })
  return (
    <Highlight code={code} language={language} theme={{ ...theme }}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const maxPrefixSpace = tokens.length.toString().length
        return (
          <div className={'pre-highlight'}>
            <pre className={className} style={style}>
              <div
                style={{ marginBottom: '0.5rem', fontSize: '0.7rem' }}
              >{`${language}`}</div>
              {<div>{file && `File: ${file}`}</div>}
              {tokens.map((line, i) => {
                const space = Array(maxPrefixSpace - i.toString().length)
                  .fill(' ')
                  .join('')
                return (
                  <div
                    {...getLineProps({ line, key: i })}
                    style={{
                      background: highlights(i)
                        ? theme.plain.background
                        : 'transparent',
                      display: 'block',
                      fontSize: '0.8rem'
                    }}
                  >
                    {<span style={{ opacity: '0.4' }}>{`${space}${i}|`}</span>}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        )
      }}
    </Highlight>
  )
}

export default Code
