// src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function Home({ data, location }) {
  return (
    <Layout>
      <Seo title={"Newport 1963"} description="備忘録のようなもの" />
      {data.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost {
      allContentfulPost {
        edges {
          node {
            title
            description {
              description
            }
            slug
            createdAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
`