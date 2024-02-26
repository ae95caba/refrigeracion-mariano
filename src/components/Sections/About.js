import React from "react"
import Section from "../Section"
import aboutData from "../../data/aboutSection.json"
export default function About() {
  return (
    <Section className={"about"} id="nosotros">
      <div className="container">
        <h3>{aboutData.h3}</h3>
        <h2>{aboutData.h2}</h2>
      </div>
      <p>{aboutData.description}</p>
    </Section>
  )
}
