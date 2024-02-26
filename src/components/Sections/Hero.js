import React from "react"
import Section from "../Section"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      hero: heroSectionJson {
        button
        h2
        h3
        motto
        years {
          description
          number
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const heroData = data.hero
  const image = getImage(heroData.image.childImageSharp.gatsbyImageData)
  return (
    <Section className="hero" enableBackgroundDiv={true}>
      <div className="container first">
        <h3>{heroData.h3}</h3>
        <h2>{heroData.h2}</h2>
        <p className="motto">{heroData.motto}</p>
        <button>{heroData.button}</button>
      </div>
      <div className="container second">
        <GatsbyImage image={image} />
        <div className="years">
          <p>
            <span>{heroData.years.number}</span> <br />
            {heroData.years.description}
          </p>
        </div>
      </div>
    </Section>
  )
}
