import React from 'react'

const Callout = ({ type = 'note', title, children }) => {
  return (
    <div className={`callout callout-${type}`}>
      <div className={`callout-title callout-title-${type}`}>{title}</div>
      <div className="callout-content">{children}</div>
    </div>
  )
}

export default Callout
