import React from "react"

import linkedin from "../../images/social/linkedin.svg"
import twitter from "../../images/social/twitter.svg"
import instagram from "../../images/social/instagram.svg"
import facebook from "../../images/social/facebook.svg"
import Section from "../Section"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Team() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allTeamJson {
        nodes {
          name
          position
          links {
            facebook
            instagram
            linkedin
            twitter
          }
          image {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const team = data.allTeamJson.nodes

  return (
    <Section className={"team"} id="nuestro-equipo">
      <h2>Nuestro Equipo</h2>
      <ul>
        {team.map(member => {
          const image = getImage(
            member.image.childrenImageSharp[0].gatsbyImageData
          )

          return (
            <li className="member" key="member.name">
              <div className="container">
                <GatsbyImage image={image} alt={member.name} />
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
          )
        })}
      </ul>
    </Section>
  )
}
