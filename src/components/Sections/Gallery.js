import React from "react"
import Section from "../Section"
import SimpleSlider from "../SlickCarousel"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
export default function Gallery() {
  const data = useStaticQuery(graphql`
    query {
      gallery: file(relativePath: { eq: "gallerySection.json" }) {
        childDataJson {
          title
          images {
            alt
            path {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const title = data.gallery.childDataJson.title
  const galleryData = data.gallery.childDataJson.images
  console.log(galleryData)
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
            /*    console.log(galleryData.length)
            console.log(`my img is ${JSON.stringify(image)}`) */
            //this ? fixes deployment on netlify
            const img = getImage(image.path.childImageSharp.gatsbyImageData)

            return <GatsbyImage image={img} alt={image.alt} />
          })}
        </SimpleSlider>
      </div>
    </Section>
  )
}
