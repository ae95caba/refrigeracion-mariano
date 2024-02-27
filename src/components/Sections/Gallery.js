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
  const title = data.gallery.childDataJson.title
  const galleryData = data.gallery.childDataJson.images
  return (
    <Section className="gallery">
      {data.gallery.childDataJson.title && <h2>{title}</h2>}

      <div className="container">
        <SimpleSlider
          speed={1000}
          autoplaySpeed={3500}
          slidesToShow={3}
          fade={false}
        >
          {galleryData.map(image => {
            console.log(galleryData.length)
            console.log(`my img is ${JSON.stringify(image)}`)

            if (image.path) {
              return (
                <GatsbyImage
                  image={getImage(image.path.childImageSharp.gatsbyImageData)}
                />
              )
            }

            return null // If image doesn't have childImageSharp, return null
          })}
        </SimpleSlider>
      </div>
    </Section>
  )
}
