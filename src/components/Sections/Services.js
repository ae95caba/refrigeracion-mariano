import React from "react"
import Section from "../Section"
import { ReactSVG } from "react-svg"
import checkmark from "../../images/checkmark.svg"
import servicesData from "../../data/services.json"

export default function Services() {
  return (
    <Section className={"services"} id={"areas-de-practica"}>
      <h2>{servicesData.title}</h2>
      {Object.keys(servicesData.categories).map(category => (
        <div className="container">
          <h3>{category}</h3>
          <ul key={category}>
            {servicesData.categories[category].map(service => (
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
