import * as React from "react"
import { useRef } from "react"

import "./index.scss"

import Hero from "../images/GatsbyImages/Hero"

import Seo from "../components/seo"
import Section from "../components/Section"
import Team from "../components/Sections/Team"
import {
  Samsung,
  LG,
  BGH,
  Surrey,
  Sanyo,
  Philco,
  Noblex,
} from "../images/GatsbyImages/Brands"
import Lottie from "lottie-react"
import animationData from "../animations/contact-me.json"

import Services from "../components/Sections/Services"
import { ReactSVG } from "react-svg"
import user from "../images/user.svg"
import email from "../images/email.svg"
import feather from "../images/feather.svg"
import SimpleSlider from "../components/SlickCarousel"
import About from "../components/Sections/About"
import Achievements from "../components/Sections/Achievements"

const IndexPage = () => {
  const contactMeAnimationRef = useRef(null)

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
      <Section className="gallery">
        <h2>
          Marcas <br /> <span>con las que trabajamos</span>
        </h2>
        <div className="container">
          <SimpleSlider
            speed={1000}
            autoplaySpeed={3500}
            slidesToShow={3}
            fade={false}
          >
            <Samsung /> <Surrey /> <LG /> <BGH /> <Sanyo /> <Philco />
            <Noblex />
          </SimpleSlider>
        </div>
      </Section>
      <Section className={"email"} id="contactanos">
        <div className="container">
          <h2>Contactanos</h2>
          <Lottie
            className="animation"
            lottieRef={contactMeAnimationRef}
            animationData={animationData}
            autoplay={true}
            loop={true}
          />
        </div>
        <form action="https://formsubmit.co/ae95caba@gmail.com" method="POST">
          <legend>Aclararemos todas tus dudas.</legend>

          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <ReactSVG src={email} />
          </label>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              required
            />
            <ReactSVG src={user} />
          </label>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:8000/"
          ></input>
          <label htmlFor="message">
            <textarea
              name="message"
              required
              id="message"
              placeholder="Escribe tu mensaje"
            ></textarea>
            <ReactSVG src={feather} />
          </label>
          <button>Enviar</button>
        </form>
      </Section>
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
