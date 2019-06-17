import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useSelector, useDispatch } from "react-redux"

import headerStyles from "./Header.module.scss"

import getLanguages from "../utils/language"

const Footer = () => {
  const language = useSelector(({ language }) => language)
  const dispatch = useDispatch()

  const text = getLanguages(language)

  const handleEnglish = () => {
    dispatch({ type: "SET_ENGLISH" })
  }

  const handlePortuguese = () => {
    dispatch({ type: "SET_PORTUGUESE" })
  }

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
          {text.header.homepage}
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.navItemActive}
          to="/about"
        >
          {text.header.about}
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.navItemActive}
          to="/contact"
        >
          {text.header.contact}
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.navItemActive}
          to="/blog"
        >
          {text.header.blog}
        </Link>

        <div className={headerStyles.languagesContainer}>
          <span
            onClick={handlePortuguese}
            className={headerStyles.languageItem}
            style={{
              color: language === "pt" && "#333333",
            }}
          >
            Português
          </span>
          <span
            onClick={handleEnglish}
            className={headerStyles.languageItem}
            style={{
              color: language === "en" && "#333333",
            }}
          >
            English
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
