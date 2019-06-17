import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const {
    site: { siteMetadata: { author } },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return <span>Content created by {author}.</span>
}

export default Footer
