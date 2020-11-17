import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="mb-8 text-4xl font-bold text-deeppink-700">
          I'm <span className="text-purple-800 text-custom5xl">Dilip</span> ,
          <br /> a full-stack{" "}
          <span className="text-purple-800 text-custom5xl">Web Developer</span>.
        </h1>
        <button
          type="button"
          class="border-4 border-deeppink-700 text-deeppink-700 font-semibold text-xl rounded-md px-6 py-2 transition duration-300 ease select-none hover:text-white hover:bg-deeppink-600 focus:outline-none focus:shadow-outline"
        >
          HIRE ME
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
