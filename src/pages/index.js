import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"

import getLanguages from "../utils/language"

import styles from "./index.module.scss"

const IndexPage = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return (
    <Layout>
      <div className={styles.subtitleContainer}>
        <h3>{text.index.subtitle}</h3>
      </div>

      <p>{text.index.body.first}</p>
      <p>{text.index.body.second}</p>

      <h3>{text.index.body.third}</h3>

      <p>{text.index.body.fourth}</p>
      <h4>{text.index.body.fifth}</h4>

      <ul>
        <li>React Native</li>
        <li>React</li>
        <li>NodeJS</li>
      </ul>
    </Layout>
  )
}

export default IndexPage
