import React from "react"
import Section from "../Section"
import aboutData from "../../data/about.json"
export default function About() {
  return (
    <Section className={"about"} id="nosotros">
      <div className="container">
        <h3>Nosotros</h3>
        <h2>Somos tu mejor elección</h2>
      </div>
      <p>{aboutData.description}</p>
    </Section>
  )
}
