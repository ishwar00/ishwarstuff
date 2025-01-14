import * as React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  activeNavLink,
  siteTitle,
  mainContent
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

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
              to="/blog"
              className={`${navLinkText} ${pathname.includes('/blog') ? activeNavLink : ''}`}
            >
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/lately"
              className={`${navLinkText} ${pathname.includes('/lately') ? activeNavLink : ''}`}
            >
              Lately
            </Link>
          </li>
        </ul>
      </nav>
      <main className={mainContent}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
