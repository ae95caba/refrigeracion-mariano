import { StaticImage } from "gatsby-plugin-image"

import React from "react"

export default function Logo() {
  return (
    <StaticImage
      src="../gatsby-icon.png"
      alt="Logo"
      placeholder="blurred"
      className="logo"
    />
  )
}
