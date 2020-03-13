import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const MarkdownContent = ({ path }) => {
  const results = useStaticQuery(graphql`
    query PageQuery {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  const edges = results.allMarkdownRemark.edges
  const data = edges.filter(edge => edge.node.frontmatter.path === path)[0].node

  return(
    <div
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  )
}

export default MarkdownContent
