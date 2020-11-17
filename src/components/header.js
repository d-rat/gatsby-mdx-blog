import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <header className="text-black ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex items-center mb-4 text-3xl font-bold text-black transition duration-300 ease-in-out transform md:mb-0 hover:text-purple-700 hover:scale-110"
        >
          <span className="text-deeppink-600">D</span>
          ilip <span className="text-deeppink-600">S</span>ingh
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-2xl font-semibold text-black md:ml-auto">
          <Link
            to="/about"
            className="mr-5 transition duration-300 ease-in-out transform hover:text-deeppink-700 hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="mr-5 transition duration-300 ease-in-out transform hover:text-deeppink-700 hover:scale-110"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="mr-5 transition duration-300 ease-in-out transform hover:text-deeppink-700 hover:scale-110"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
