import React from "react"
import { useSelector } from "react-redux"

import Layout from "../../components/Layout"

import getLanguages from "../../utils/language"
import { portfolio } from "../../utils/portfolio"

import styles from "./portfolio.module.scss"

import { Link } from "gatsby"

const PortofolioIndex = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return (
    <Layout>
      <h4>{text.portfolio.subtitle}</h4>

      <div className={styles.portfolioContainer}>
        {portfolio.map(data => (
          <Link className={styles.linkStyle} to="/portfolio/view" state={data}>
            <div className={styles.portfolioItem}>
              <img
                src={data.image}
                alt={data.title}
                height={data.project === "bestclean" ? "100%" : "50%"}
                width={data.project === "bestclean" ? "100%" : "50%"}
              />

              <p>{language === "pt" ? data.summaryPt : data.summaryEn}</p>
            </div>
          </Link>
        ))}
      </div>

      <h5>
        {text.portfolio.more}
        <a target="_blank" href="https://github.com/rodriigovieira">
          Github
        </a>
        .
      </h5>
    </Layout>
  )
}

export default PortofolioIndex
