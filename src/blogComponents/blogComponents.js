import React from "react"
import "../components/tailwind.css"

function primaryHeading(props) {
  return <h1 className="text-4xl font-bold">{props.children}</h1>
}

function secondaryHeading(props) {
  return <h1 className="text-2xl font-semibold">{props.children}</h1>
}

function paragraph(props) {
  return <h1 className="text-xl">{props.children}</h1>
}

function codeBlock(props) {
  return (
    <div className="px-4 py-4 overflow-x-scroll bg-gray-900 rounded codeScroll">
      <h1 className="text-white ">{props.children}</h1>
    </div>
  )
}
function inlineCode(props) {
  return (
    <span className="px-2 font-semibold bg-gray-300 rounded text-deeppink-600">
      {props.children}
    </span>
  )
}

function blockQuote(props) {
  return (
    <div className="px-8 py-4 ">
      <h1 className="font-semibold text-purple-800 ">{props.children}</h1>
    </div>
  )
}

export {
  primaryHeading,
  secondaryHeading,
  paragraph,
  codeBlock,
  blockQuote,
  inlineCode,
}
