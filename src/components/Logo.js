import React from "react"
import { ReactSVG } from "react-svg"
import balance from "../images/balance.svg"
import { Link } from "gatsby"

export default function Logo({ elementType }) {
  // Conditionally set the element type based on the location prop

  return (
    <Link to="/" className="logo">
      <ReactSVG src={balance} />
      {React.createElement(
        elementType,
        null,
        <>
          JM & Asociados
          <br /> <span>Estudio juridico</span>
        </>
      )}
    </Link>
  )
}
