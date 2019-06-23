import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"

import getLanguages from "../utils/language"

import styles from "./portfolio.module.scss"

const AboutPage = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return (
    <Layout>
      <h4>{text.portfolio.subtitle}</h4>

      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioItem}>oi</div>
        <div className={styles.portfolioItem}>oi</div>
        <div className={styles.portfolioItem}>oi</div>
        <div className={styles.portfolioItem}>oi</div>
        <div className={styles.portfolioItem}>oi</div>
      </div>
    </Layout>
  )
}

export default AboutPage
