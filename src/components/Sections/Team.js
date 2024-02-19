import React from "react"
import { Ema, Guille, Ricardo, Fer } from "../../images/GatsbyImages/Team"
import linkedin from "../../images/social/linkedin.svg"
import twitter from "../../images/social/twitter.svg"
import instagram from "../../images/social/instagram.svg"
import facebook from "../../images/social/facebook.svg"
import Section from "../Section"

export default function Team() {
  let members = [
    {
      name: "Emanuel Lopez",
      position: "Ayudante Instalador",
      image: <Ema />,
      linkedin: "linkedin/another-person",
      links: { facebook: "asdfasdf", twitter: "fasfa", instagram: "asf" },
    },
    {
      name: "Guillermo Garcia",
      position: "Ayudante en construccion",
      image: <Guille />,
      links: { linkedin: "linkedin/another-person" },
    },
    {
      name: "Fernando Perez",
      position: "Maestro de obras",
      image: <Fer />,
      links: { linkedin: "linkedin/another-person", facebook: "fasdfa" },
    },
    {
      name: "Ricardo Russo",
      position: "Tecnico en reparaciones",
      image: <Ricardo />,
      links: { linkedin: "linkedin/another-person", twitter: "fasdfa" },
    },
  ]

  return (
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
  )
}
