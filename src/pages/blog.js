import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog posts</h1>
      <div>
        {data.allMdx.edges.map(post => (
          <div>
            <Link to={post.node.frontmatter.slug}>
              <h1>{post.node.frontmatter.title}</h1>
            </Link>
            <p>{post.node.frontmatter.date}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
