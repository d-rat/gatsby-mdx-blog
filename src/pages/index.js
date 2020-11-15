import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>landing page</h1>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  </Layout>
)

export default IndexPage
