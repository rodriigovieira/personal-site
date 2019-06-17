import React from "react"
import { useSelector } from "react-redux"

import getLanguages from "../utils/language"

const Footer = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  return <span>{text.footer.text}</span>
}

export default Footer
