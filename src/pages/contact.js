import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"

import getLanguages from "../utils/language"

const ContactPage = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return (
    <Layout>
      <h1>{text.contact.title}</h1>

      <h4>{text.contact.subtitle}</h4>

      <p>{text.contact.paragraph}</p>
    </Layout>
  )
}

export default ContactPage
