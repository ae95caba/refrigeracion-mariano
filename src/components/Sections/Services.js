import React from "react"

export default function Services() {
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
