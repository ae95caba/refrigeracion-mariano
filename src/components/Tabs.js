import React from "react"
import { Link } from "gatsby"
export default function Tabs() {
  return (
    <>
      <Link to={`/#nosotros`} /* activeClassName="active" */>Nosotros</Link>
      <Link to={`/#areas-de-practica`} /* activeClassName="active" */>
        Nuestros servicios
      </Link>
      <Link to={`/#nuestro-equipo`} /* activeClassName="active" */>
        Nuestro Equipo
      </Link>
      <Link to={`/#contactanos`} /* activeClassName="active" */>
        Contáctanos
      </Link>
    </>
  )
}
