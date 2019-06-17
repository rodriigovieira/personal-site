import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"

import getLanguages from "../utils/language"

const Page404 = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return (
    <Layout>
      <h1>{text.page404.title}</h1>

      <h4>{text.page404.subtitle}</h4>
    </Layout>
  )
}

export default Page404
