import { StaticImage } from "gatsby-plugin-image"

import React from "react"

export default function About() {
  return (
    <StaticImage
      src="../about.jpg"
      alt="mesa con 4 abogados"
      placeholder="blurred"
    />
  )
}
