import React from "react"
import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <div>
      <Seo />
      <main>{children}</main>
    </div>
  )
}

export default Layout
