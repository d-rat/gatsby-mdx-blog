import React from "react"
import Seo from "./seo"
import "./tailwind.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen hero">
      <Seo />
      <Header />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
