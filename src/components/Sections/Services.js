import React from "react"
import Section from "../Section"
import { ReactSVG } from "react-svg"
import checkmark from "../../images/checkmark.svg"
export default function Services() {
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
  return (
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
  )
}
