import * as React from "react"
import { useRef } from "react"

import "./index.scss"

import Seo from "../components/seo"
import Section from "../components/Section"
import Team from "../components/Sections/Team"
import Hero from "../components/Sections/Hero"
import Services from "../components/Sections/Services"

import About from "../components/Sections/About"
import Achievements from "../components/Sections/Achievements"
import Gallery from "../components/Sections/Gallery"
import Contact from "../components/Sections/Contact"

const IndexPage = () => {
  return (
    <main id="home">
      <Hero />
      <Achievements />
      <About />

      <Services />
      <Team />
      <Gallery />
      <Contact />
      <Section className="call-to-action">
        <p>Contactanos ahora! Haz una consulta gratuita.</p>
        <button>Reserva una cita</button>
      </Section>
    </main>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="Refrigeración Mariano" />

export default IndexPage
