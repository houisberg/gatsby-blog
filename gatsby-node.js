// gatsby-node.js
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
          allContentfulPost {
            edges {
              node {
                title
                body {
                  childMarkdownRemark {
                    html
                  }
                }
                createdAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                description {
                  description
                }
                slug
              }
            }
          }
        }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const { edges } = result.data.allContentfulPost

    edges.forEach((edge, index) => {
        const prev = index === 0 ? null : edges[index - 1].node
        const next = index === edges.length - 1 ? null : edges[index + 1].node
        createPage({
            path: `/post/${edge.node.slug}/`,
            component: path.resolve("./src/templates/post.js"),
            context: { 
              post: edge.node,
              previous: prev,
              next: next
            }
        })
    });
}