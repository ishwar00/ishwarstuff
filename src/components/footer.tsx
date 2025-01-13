import * as React from 'react'
import * as styles from './footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <a href="https://github.com/ishwar00" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/Ishwar71078132" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 