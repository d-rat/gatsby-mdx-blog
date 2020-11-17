import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
      <div>
        <h1 className="text-3xl font-bold text-center text-black">
          Blog posts
        </h1>
        <div className="w-1/2 mx-auto ">
          {data.allMdx.edges.map(post => (
            <div className="py-6 border-b-2 border-purple-800">
              <Link to={post.node.frontmatter.slug}>
                <h1 className="text-xl">{post.node.frontmatter.title}</h1>
              </Link>
              <p className="text-xs">{post.node.frontmatter.date}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
