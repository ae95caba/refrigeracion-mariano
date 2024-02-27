import React from "react"
import Section from "../Section"
import aboutData from "../../data/aboutSection.json"
export default function About() {
  return (
    <Section className={"about"} id={aboutData.title}>
      <div className="container">
        <h3>{aboutData.title}</h3>
        <h2>{aboutData.subtitle}</h2>
      </div>
      <p>{aboutData.description}</p>
    </Section>
  )
}
