import React from "react"
import Section from "../Section"
export default function Hero() {
  return (
    <Section className="hero" enableBackgroundDiv={true}>
      <div className="container first">
        <h3>SERVICIO TECNICO DE EXCELENCIA</h3>
        <h2>
          Deja que nuestra experiencia
          <span> sea tu guía</span>
        </h2>
        <p>
          Responsabilidad y eficacia, orientada a la resolución de problemas en
          el menor tiempo posible.
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
  )
}
