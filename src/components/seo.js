import React from 'react'
import {Helmet} from "react-helmet"
import {graphql,useStaticQuery} from "gatsby"

function Seo() {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <Helmet>
      <html lang='en' />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.title} />
    </Helmet>
  )
}

export default Seo
