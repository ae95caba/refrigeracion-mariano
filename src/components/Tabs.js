import React from "react"
import { Link } from "gatsby"
import aboutData from "../data/aboutSection.json"
import servicesData from "../data/servicesSection.json"
import teamData from "../data/teamSection.json"
export default function Tabs() {
  return (
    <>
      <Link to={`/#${aboutData.title}`} /* activeClassName="active" */>
        {aboutData.title}
      </Link>
      <Link to={`/#${servicesData.title}`} /* activeClassName="active" */>
        {servicesData.title}
      </Link>
      <Link to={`/#${teamData.title}`} /* activeClassName="active" */>
        {teamData.title}
      </Link>
      <Link to={`/#contactanos`} /* activeClassName="active" */>
        Contáctanos
      </Link>
    </>
  )
}
