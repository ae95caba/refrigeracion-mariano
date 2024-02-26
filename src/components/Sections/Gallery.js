import React from "react"
import Section from "../Section"
import SimpleSlider from "../SlickCarousel"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
export default function Gallery() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      gallery: file(relativePath: { eq: "gallerySection.json" }) {
        childDataJson {
          images {
            alt
            path {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          title
        }
      }
    }
  `)

  const galleryData = data.gallery.childDataJson.images
  return (
    <Section className="gallery">
      {data.gallery.childDataJson.title && (
        <h2>{data.gallery.childDataJson.title}</h2>
      )}

      <div className="container">
        <SimpleSlider
          speed={1000}
          autoplaySpeed={3500}
          slidesToShow={3}
          fade={false}
        >
          {galleryData.map(image => {
            return (
              <GatsbyImage
                image={getImage(image.path.childImageSharp.gatsbyImageData)}
              />
            )
          })}
        </SimpleSlider>
      </div>
    </Section>
  )
}
