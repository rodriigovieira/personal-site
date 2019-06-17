import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"

import getLanguages from "../utils/language"

const AboutPage = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return (
    <Layout>
      <h1>{text.about.title}</h1>

      <h4>{text.about.subtitle}</h4>
    </Layout>
  )
}

export default AboutPage
