import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/Layout"

const BlogPage = () => {
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
      <h1>My Blog</h1>

      <h4>You can find all the stuff I adore to talk about here.</h4>

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
