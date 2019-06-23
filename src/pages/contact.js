import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"

import getLanguages from "../utils/language"

const ContactPage = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return (
    <Layout>
      <h4>{text.contact.subtitle}</h4>

      <p>
        {text.contact.paragraph}{" "}
        <a href="mailto:rodriigovieira@gmail.com">rodriigovieira@gmail.com</a>!{" "}
      </p>
    </Layout>
  )
}

export default ContactPage
