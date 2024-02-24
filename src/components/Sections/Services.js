import React from "react"
import Section from "../Section"
import { ReactSVG } from "react-svg"
import checkmark from "../../images/checkmark.svg"
import services from "../../data/services.json"

export default function Services() {
  return (
    <Section className={"services"} id={"areas-de-practica"}>
      <h2>{services.title}</h2>
      {Object.keys(services.categories).map(category => (
        <div className="container">
          <h3>{category}</h3>
          <ul key={category}>
            {services.categories[category].map(service => (
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
