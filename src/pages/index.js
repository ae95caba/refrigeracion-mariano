import * as React from "react"
import { useRef } from "react"

import "./index.scss"

import Hero from "../images/GatsbyImages/Hero"

import Seo from "../components/seo"
import Section from "../components/Section"
import Team from "../components/Sections/Team"

import Services from "../components/Sections/Services"

import About from "../components/Sections/About"
import Achievements from "../components/Sections/Achievements"
import Gallery from "../components/Sections/Gallery"
import Contact from "../components/Sections/Contact"

const IndexPage = () => {
  return (
    <main id="home">
      <Section className="hero" enableBackgroundDiv={true}>
        <div className="container first">
          <h3>SERVICIO TECNICO DE EXCELENCIA</h3>
          <h2>
            Deja que nuestra experiencia
            <span> sea tu guía</span>
          </h2>
          <p>
            Responsabilidad y eficacia, orientada a la resolución de problemas
            en el menor tiempo posible.
          </p>
          <button>Reservar una cita</button>
        </div>
        <div className="container second">
          <Hero />
          <div className="years">
            <p>
              <span>25</span> <br />
              Años de experiencia en el campo
            </p>
          </div>
        </div>
      </Section>
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
