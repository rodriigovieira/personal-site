import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "./Header.module.scss"

const Footer = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div className={headerStyles.titleContainer}>
        <span className={headerStyles.titleText}>{title}</span>
      </div>

      <div className={headerStyles.navContainer}>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.navItemActive}
          to="/"
        >
          HomePage
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.navItemActive}
          to="/about"
        >
          About
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.navItemActive}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.navItemActive}
          to="/blog"
        >
          Blog
        </Link>
      </div>
    </div>
  )
}

export default Footer
