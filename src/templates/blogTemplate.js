import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as DesignSystem from "../blogComponents/blogComponents"

function BlogTemplate({ data: { mdx } }) {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-customWidth">
        <MDXProvider
          components={{
            h1: DesignSystem.primaryHeading,
            h2: DesignSystem.secondaryHeading,
            p: DesignSystem.paragraph,
            code: DesignSystem.codeBlock,
            blockquote: DesignSystem.blockQuote,
            inlineCode: DesignSystem.inlineCode,
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      <Footer />
    </div>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query MyQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
    }
  }
`
