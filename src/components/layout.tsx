import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  activeNavLink,
  siteTitle,
} from './layout.module.css'
import path from 'path'

const Layout = ({ pageTitle, children }) => {
  // Get the current pathname to determine active link
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  console.log(pathname)

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link 
              to="/" 
              className={`${navLinkText} ${pathname === '/' ? activeNavLink : ''}`}
            >
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link 
              to="/about" 
              className={`${navLinkText} ${pathname.includes('/about') ? activeNavLink : ''}`}
            >
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link 
              to="/blog" 
              className={`${navLinkText} ${pathname.includes('/blog') ? activeNavLink : ''}`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  )
}

export default Layout
