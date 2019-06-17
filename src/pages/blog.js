import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"

import getLanguages from "../utils/language"

const BlogPage = () => {
  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  const {
    allContentfulBlogPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            description
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>{text.blog.title}</h1>

      <h4>{text.blog.subtitle}</h4>

      {edges.map(({ node: { slug, title, description } }) => (
        <ol>
          <li>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </li>

          <p>{description}</p>
        </ol>
      ))}
    </Layout>
  )
}

export default BlogPage
