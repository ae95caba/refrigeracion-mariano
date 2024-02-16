import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import Hero from "../images/GatsbyImages/Hero"
import About from "../images/GatsbyImages/About"
import Seo from "../components/seo"
import Section from "../components/Section"
import Member1 from "../images/GatsbyImages/Member1"
import Member2 from "../images/GatsbyImages/Member2"
import Member3 from "../images/GatsbyImages/Member3"
import Member4 from "../images/GatsbyImages/Member4"
import {
  Samsung,
  LG,
  BGH,
  Surrey,
  Sanyo,
  Philco,
  Noblex,
} from "../images/GatsbyImages/Brands"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import animationData from "../animations/contact-me.json"
import trophy from "../images/trophy.svg"
import judge from "../images/judge.svg"
import users from "../images/users.svg"
import checkmark from "../images/checkmark.svg"
import { ReactSVG } from "react-svg"
import user from "../images/user.svg"
import email from "../images/email.svg"
import feather from "../images/feather.svg"
import SimpleSlider from "../components/SlickCarousel"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

let members = [
  {
    name: "Pablo Lopez",
    position: "Abogado líder",
    image: <Member1 />,
    linkedin: "linkedin/another-person",
    links: { facebook: "asdfasdf", twitter: "fasfa", instagram: "asf" },
  },
  {
    name: "Franco Garcia",
    position: "Abogado asistente",
    image: <Member2 />,
    links: { linkedin: "linkedin/another-person" },
  },
  {
    name: "Fernanda Perez",
    position: "Secretaria",
    image: <Member3 />,
    links: { linkedin: "linkedin/another-person", facebook: "fasdfa" },
  },
  {
    name: "Juan Russo",
    position: "Abogado asistente",
    image: <Member4 />,
    links: { linkedin: "linkedin/another-person", twitter: "fasdfa" },
  },
]

let services = {
  "Reparación y Mantenimiento": [
    "Diagnóstico y solución de problemas técnicos",
    "Programas de mantenimiento preventivo",
    "Instalación y actualización de sistemas",
    "Optimización de eficiencia energética",
    "Asesoramiento en la selección de equipos",
  ],
  "Atención a Emergencias": [
    "Servicio 24/7 para situaciones críticas",
    "Respuesta inmediata en casos de averías urgentes",
    "Asistencia prioritaria para problemas imprevistos",
    "Soluciones rápidas para restaurar el funcionamiento",
    "Coordinación eficiente con seguros y garantías",
  ],
}

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
      <Section className="achievements">
        <Counter
          value={300}
          text={"Aires instalados"}
          duration={4}
          icon={<ReactSVG src={trophy} />}
        />
        <Counter
          value={400}
          text={"Aires reparados"}
          duration={5}
          icon={<ReactSVG src={judge} />}
        />
        <Counter
          value={1000}
          text={"Clientes satisfechos"}
          duration={6}
          icon={<ReactSVG src={users} />}
        />
      </Section>
      <Section className={"about"} id="nosotros">
        <div className="container">
          <h3>Nosotros</h3>
          <h2>Somos tu mejor elección</h2>
        </div>
        <p>
          Nuestro equipo está formado por cuatro profesionales altamente
          capacitados en el campo de la climatización. Con una sólida
          experiencia y valores arraigados en la eficiencia y la confiabilidad,
          nos comprometemos a ofrecer a nuestros clientes un servicio de
          reparación excepcional para sus sistemas de aire acondicionado.
          Nuestro enfoque personalizado, respaldado por una amplia experiencia,
          nos destaca en la solución efectiva de problemas y la garantía del
          óptimo funcionamiento de los equipos de nuestros clientes.
        </p>
      </Section>

      <Section className={"services"} id={"areas-de-practica"}>
        <h2>Nuestros servicios</h2>
        {Object.keys(services).map(category => (
          <div className="container">
            <h3>{category}</h3>
            <ul key={category}>
              {services[category].map((service, index) => (
                <li key={service}>
                  <ReactSVG src={checkmark} />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
      <Section className={"team"} id="nuestro-equipo">
        <h2>Nuestro Equipo</h2>
        <ul>
          {members.map(member => (
            <li className="member" key="member.name">
              <div className="container">
                {member.image}
                {member.links && Object.keys(member.links).length > 0 && (
                  <div className="links">
                    {member.links.linkedin && (
                      <a href={member.links.linkedin}>
                        <img src={linkedin} />
                      </a>
                    )}
                    {member.links.facebook && (
                      <a href={member.links.facebook}>
                        <img src={facebook} />
                      </a>
                    )}
                    {member.links.twitter && (
                      <a href={member.links.twitter}>
                        <img src={twitter} />
                      </a>
                    )}
                    {member.links.instagram && (
                      <a href={member.links.instagram}>
                        <img src={instagram} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p>{member.name}</p>
              <p>{member.position}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="gallery">
        <div className="container">
          <SimpleSlider
            speed={1000}
            autoplaySpeed={3500}
            slidesToShow={3}
            fade={false}
          >
            <Samsung /> <Surrey /> <LG /> <BGH /> <Sanyo /> <Philco />{" "}
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

function Counter({ value, duration, text, icon }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      console.log("in view")
    }
  }, [inView])
  return (
    <div className="container" ref={ref}>
      {icon}
      <p>
        {inView ? (
          <CountUp end={value} duration={duration} start={0} delay={0.5} />
        ) : (
          <span>0</span>
        )}
        <br />
        {text}
      </p>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="Refrigeración Mariano" />

export default IndexPage
