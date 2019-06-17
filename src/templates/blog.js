import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      description
      slug
      title
      body {
        json
      }
    }
  }
`

const BlogTemplate = ({ data: { contentfulBlogPost } }) => {
  return (
    <Layout>
      <h1>{contentfulBlogPost.title}</h1>
      <h4>{contentfulBlogPost.description}</h4>

      {documentToReactComponents(contentfulBlogPost.body.json)}
    </Layout>
  )
}

export default BlogTemplate
