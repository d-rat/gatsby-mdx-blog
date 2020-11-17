import React from "react"

import Layout from "../components/layout"

function About() {
  return (
    <Layout>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded w-5/6"
              alt="hero"
              src="/about.jpeg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Software Engineer <span className="text-deeppink-600">&</span>
              <br class="hidden lg:inline-block" />
              Web Developer
            </h1>
            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              sint cupiditate placeat soluta sit iusto, adipisci minima magnam
              voluptas ipsum accusantium illum, facilis nesciunt fugiat. Ipsa
              consectetur amet minus dolorem, magni iusto sequi quos tenetur
              ipsam, vel, debitis veritatis eius? Numquam vel impedit animi ex
              odit nesciunt nisi molestiae quasi.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
